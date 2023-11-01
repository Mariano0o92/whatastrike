"use strict";var heroImg=document.querySelector(".hero-img"),hamburger=document.querySelector(".hamburger"),nav=document.querySelector(".nav"),navMobile=document.querySelector(".nav-mobile"),mobileLink=document.querySelectorAll(".nav-mobile__link"),mobileLinks=document.querySelector(".nav-mobile__links"),navLinks=document.querySelectorAll(".nav__link"),navResults=document.querySelectorAll(".nav__results"),navTable=document.querySelectorAll(".nav__table a"),mobileResults=document.querySelectorAll(".nav-mobile__results"),mobileTable=document.querySelectorAll(".nav-mobile__table a"),sections=document.querySelectorAll(".main"),tables=document.querySelectorAll(".standings"),scoresSection=document.querySelectorAll(".scores"),scoresRound=document.querySelectorAll(".scores__round"),footerYear=document.querySelector(".footer-year");function setActiveSectionFromHash(){var e=window.location.hash.substring(1),e=document.getElementById(e);e&&(removeActiveClasses(),e.classList.add("main__active"))}function removeActiveClasses(){sections.forEach(function(e){e.classList.remove("main__active")})}function showScores(e){var t=e.target.classList.contains("scores__round"),n=e.target.classList.contains("fa-chevron-down");(t||n&&e.target.parentElement.classList.contains("scores__round"))&&(t=(n=t?e.target:e.target.parentElement).querySelector(".fa-chevron-down"),Array.from(n.parentElement.children).forEach(function(e){e.classList.toggle("scores__score--active")}),t.classList.toggle("rotate"))}window.addEventListener("hashchange",setActiveSectionFromHash),window.addEventListener("load",setActiveSectionFromHash),hamburger.addEventListener("click",function(){hamburger.classList.toggle("is-active"),mobileLinks.classList.toggle("nav-mobile__links--active")}),mobileLink.forEach(function(a){a.addEventListener("click",function(){var e=navMobile.querySelector(".nav-mobile__results"),t=navMobile.querySelector(".nav-mobile__table"),e=(e&&e.remove(),t&&t.remove(),a.getAttribute("href")),t=document.createElement("a"),n=(t.href=e,t.textContent="Results",document.createElement("a")),e=(n.href=e+"-table",n.textContent="Standings",document.createElement("div")),t=(e.className="nav-mobile__results nav-mobile__results--active",e.appendChild(t),document.createElement("div")),n=(t.className="nav-mobile__table",t.appendChild(n),document.createElement("div"));n.className="nav-mobile__bottom-container",n.appendChild(e),n.appendChild(t),navMobile.appendChild(n)})}),navLinks.forEach(function(a){a.addEventListener("click",function(){var e=nav.querySelector(".nav__results"),t=nav.querySelector(".nav__table"),e=(e&&e.remove(),t&&t.remove(),a.getAttribute("href")),t=document.createElement("a"),n=(t.href=e,t.textContent="Results",document.createElement("a")),e=(n.href=e+"-table",n.textContent="Standings",document.createElement("div")),t=(e.className="nav__results nav__results--active",e.appendChild(t),document.createElement("div"));t.className="nav__table",t.appendChild(n),nav.appendChild(e),nav.appendChild(t)})}),navLinks.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")})}),navTable.forEach(function(e,t){e.addEventListener("click",function(){removeActiveClasses(),sections[t+1].classList.add("main__active")})}),mobileLink.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav-mobile__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),mobileLink.forEach(function(e){e.classList.remove("nav-mobile__link--active")}),e.classList.add("nav-mobile__link--active")),mobileLink.forEach(function(e){e.classList.remove("nav-mobile__link--active")}),e.classList.add("nav-mobile__link--active"),mobileLinks.classList.toggle("nav-mobile__links--active"),hamburger.classList.toggle("is-active")})}),mobileTable.forEach(function(e,t){e.addEventListener("click",function(){removeActiveClasses(),sections[t+1].classList.add("main__active")})}),scoresSection.forEach(function(e){return e.addEventListener("click",showScores)});var leagues=["PL","PD","BL1","SA","FL1"];function getStandings(e,t){e="".concat(e);fetch("https://api.football-data.org/v4/competitions/"+e+"/standings",{method:"GET",headers:{"X-Auth-Token":"268640ec6a2640e7991cee35b5c601b6","Accept-Encoding":""}}).then(function(e){return e.json()}).then(function(e){createstandings(e,t)}).catch(function(e){console.log(e)})}function getResults(e,t){e="".concat(e);fetch("https://api.football-data.org/v4/competitions/"+e+"/matches",{method:"GET",headers:{"X-Auth-Token":"268640ec6a2640e7991cee35b5c601b6","Accept-Encoding":""}}).then(function(e){return e.json()}).then(function(e){createResults(e,t)}).catch(function(e){console.log(e)})}leagues.forEach(function(e,t){getStandings(e,t),getResults(e,t)});var createstandings=function(e,t){var t=document.getElementById(["english-table","spanish-table","german-table","italian-table","french-table"][t]).querySelector(".standings"),e=e.standings[0].table,n=document.createElement("thead"),a=(n.classList.add("standings__header"),n.innerHTML='\n\t<tr>\n\t<th class="standings__header-rank">#</th>\n\t<th class="standings__header-team">Team</th>\n\t<th class="standings__header-played">P</th>\n\t<th class="standings__header-won">W</th>\n\t<th class="standings__header-drawn">D</th>\n\t<th class="standings__header-lost">L</th>\n\t<th class="standings__header-for">+</th>\n\t<th class="standings__header-against">-</th>\n\t<th class="standings__header-difference">+/-</th>\n\t<th class="standings__header-points">P</th>\n\t</tr>\n\t',t.appendChild(n),document.createElement("tbody"));a.classList.add("standings__teams"),e.forEach(function(e){var t=document.createElement("tr");t.innerHTML='\n\t\t<td class="standings__teams-rank">'.concat(e.position,'</td>\n\t\t<td class="standings__teams-team">\n\t\t<img src="').concat(e.team.crest,'" alt="').concat(e.team.name,'">\n\t\t<span class="standings__teams-name-full">').concat(e.team.name,'</span>\n\t\t</td>\n\t\t<td class="standings__teams-played">').concat(e.playedGames,'</td>\n\t\t<td class="standings__teams-won">').concat(e.won,'</td>\n\t\t<td class="standings__teams-drawn">').concat(e.draw,'</td>\n\t\t<td class="standings__teams-lost">').concat(e.lost,'</td>\n\t\t<td class="standings__teams-for">').concat(e.goalsFor,'</td>\n\t\t<td class="standings__teams-against">').concat(e.goalsAgainst,'</td>\n\t\t<td class="standings__teams-difference">').concat(e.goalDifference,'</td>\n\t\t<td class="standings__teams-points">').concat(e.points,"</td>\n\t\t"),a.appendChild(t)}),t.appendChild(a)},createResults=function(e,t){var n=document.getElementById(["english","spanish","german","italian","french"][t]).querySelector(".scores"),t=e.matches,a=new Date,s=new Map,e=(t.filter(function(e){return new Date(e.utcDate)<=a}).forEach(function(e){var t=e.matchday,n=(s.has(t)||((a=document.createElement("div")).classList.add("scores__container"),(n=document.createElement("button")).classList.add("scores__round"),n.innerHTML="Round - ".concat(t,' <i class="fa-solid fa-chevron-down"></i>'),a.appendChild(n),s.set(t,a)),e.utcDate.replace("T"," ").replace("Z","").substring(0,16)),a=document.createElement("div");a.classList.add("scores__score"),a.innerHTML='\n\t\t  <span class="scores__match-date">'.concat(n,'</span>\n\t\t  <span class="scores__hometeam"><img src="').concat(e.homeTeam.crest,'" alt="').concat(e.homeTeam.name,'"> ').concat(e.homeTeam.shortName,'</span> \n\t\t  <span class="scores__fulltime-score">').concat(e.score.fullTime.home," : ").concat(e.score.fullTime.away,'</span>\n\t\t  <span class="scores__awayteam"><img src="').concat(e.awayTeam.crest,'" alt="').concat(e.awayTeam.name,'"> ').concat(e.awayTeam.shortName,"</span>"),s.get(t).appendChild(a)}),Array.from(s.values()).sort(function(e,t){return parseInt(t.querySelector(".scores__round").textContent.split(" - ")[1])-parseInt(e.querySelector(".scores__round").textContent.split(" - ")[1])}));e.forEach(function(e){n.appendChild(e)}),0<e.length&&(e[0].querySelectorAll(".scores__score").forEach(function(e){e.classList.add("scores__score--active")}),e[0].querySelector(".scores__round").children[0].classList.add("rotate"))},handleCurrentYear=function(){var e=(new Date).getFullYear();footerYear.innerText=e};handleCurrentYear();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJoZXJvSW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYnVyZ2VyIiwibmF2IiwibmF2TW9iaWxlIiwibW9iaWxlTGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2JpbGVMaW5rcyIsIm5hdkxpbmtzIiwibmF2UmVzdWx0cyIsIm5hdlRhYmxlIiwibW9iaWxlUmVzdWx0cyIsIm1vYmlsZVRhYmxlIiwic2VjdGlvbnMiLCJ0YWJsZXMiLCJzY29yZXNTZWN0aW9uIiwiZm9vdGVyWWVhciIsImhhc2giLCJzZXRBY3RpdmVTZWN0aW9uRnJvbUhhc2giLCJzdWJzdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlY3Rpb24iLCJyZW1vdmVBY3RpdmVDbGFzc2VzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0U3RhbmRpbmdzIiwiZ2V0UmVzdWx0cyIsImluZGV4IiwicmVtb3ZlIiwiaGVhZGVycyIsImUiLCJpc1JvdW5kIiwidGFyZ2V0IiwiY29udGFpbnMiLCJpc0Fycm93RG93biIsInRoZW4iLCJwYXJlbnRFbGVtZW50IiwiYXJyb3dDb250YWluZXIiLCJBcnJheSIsImVyciIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInNpYmxpbmciLCJ0b2dnbGUiLCJhcnJvd0Rvd24iLCJVUkxfQVBJIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4aXN0aW5nUmVzdWx0c0RpdiIsImxpbmsiLCJleGlzdGluZ1RhYmxlRGl2IiwidGFibGVMaW5rIiwibGlua0hyZWYiLCJyZXN1bHRzRGl2IiwiY3JlYXRlRWxlbWVudCIsInRhYmxlRGl2IiwicmVzdWx0c0xpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJib3R0b21Db250YWluZXIiLCJhcHBlbmRDaGlsZCIsIm5hdkxpbmsiLCJzaG93U2NvcmVzIiwic2libGluZ3MiLCJsZWFndWVzIiwicmVzIiwiaWQiLCJwYWdlSW5kZXgiLCJzZWN0aW9uSUQiLCJjb25jYXQiLCJmZXRjaCIsImNyZWF0ZXN0YW5kaW5ncyIsImxlYWd1ZSIsInN0YW5kaW5ncyIsIm1ldGhvZCIsImhlYWRlciIsInRib2R5IiwiZ2V0VGFibGUiLCJqc29uIiwidHIiLCJkYXRhIiwibG9nIiwic2NvcmVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50RGF0ZSIsImZpbHRlciIsIlgtQXV0aC1Ub2tlbiIsIm1hdGNoIiwiQWNjZXB0LUVuY29kaW5nIiwiaGFzIiwicm91bmRCdXR0b24iLCJjcmVhdGVSZXN1bHRzIiwiaW5uZXJIVE1MIiwibWF0Y2hkYXlNYXAiLCJjb25zb2xlIiwibWF0Y2hDb250ZW50IiwibWF0Y2hkYXkiLCJzb3J0ZWRDb250YWluZXJzIiwicGFyc2VJbnQiLCJoYW5kbGVDdXJyZW50WWVhciIsInllYXIiLCJEYXRlIiwidGVhbURhdGEiLCJwb3NpdGlvbiIsInRlYW0iLCJjcmVzdCIsIm5hbWUiLCJwbGF5ZWRHYW1lcyIsIndvbiIsImRyYXciLCJsb3N0IiwiZ29hbHNGb3IiLCJnb2Fsc0FnYWluc3QiLCJnb2FsRGlmZmVyZW5jZSIsInBvaW50cyIsIm1hdGNoZXMiLCJNYXAiLCJ1dGNEYXRlIiwibWF0Y2hTdGFydCIsInNjb3Jlc0NvbnRhaW5lciIsInNldCIsInJlcGxhY2UiLCJob21lVGVhbSIsInNob3J0TmFtZSIsInNjb3JlIiwiZnVsbFRpbWUiLCJob21lIiwiYXdheSIsImF3YXlUZWFtIiwiZ2V0IiwiZnJvbSIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsInNwbGl0IiwiY29udGFpbmVyIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJpbm5lclRleHQiXSwibWFwcGluZ3MiOiJhQUNBLElBQU1BLFFBQVVDLFNBQVNDLGNBQWMsV0FBVyxFQURsREMsVUFBQUYsU0FBQUMsY0FBQSxZQUFBLEVBQ01GLElBQU9DLFNBQUdBLGNBQVNDLE1BQWMsRUFDakNDLFVBQVlGLFNBQVNDLGNBQWMsYUFBYSxFQUNoREUsV0FBZUYsU0FBQUEsaUJBQXFCLG1CQUFBLEVBQ3BDRyxZ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WW1DLENBQVksQ0FDakQsQ0FBQyxFQUVzQnpELE1BQU00RixLQUFLckMsRUFBWXNDLE9BQU8sQ0FBQyxFQUFFQyxLQUN4RCxTQUFDQyxFQUFHQyxHQUFDLE9BQUtwQyxTQUFTb0MsRUFBRXRJLGNBQWMsZ0JBQWdCLEVBQUUwRCxZQUFZNkUsTUFBTSxLQUFLLEVBQUUsRUFBRSxFQUFJckMsU0FBU21DLEVBQUVySSxjQUFjLGdCQUFnQixFQUFFMEQsWUFBWTZFLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUM3SixHQUVBdEMsRUFBaUJ4RCxRQUFRLFNBQUMrRixHQUN4QnRELEVBQU90QixZQUFZNEUsQ0FBUyxDQUM5QixDQUFDLEVBRzZCLEVBQTFCdkMsRUFBaUJ3QyxTQUNuQnhDLEVBQWlCLEdBQUc1RixpQkFBaUIsZ0JBQWdCLEVBQUVvQyxRQUFRLFNBQUNtRixHQUNqRUEsRUFBTXJHLFVBQVVDLElBQUksdUJBQXVCLENBQzFDLENBQUMsRUFFYXlFLEVBQWlCLEdBQUdqRyxjQUFjLGdCQUFnQixFQUFFd0MsU0FDNUQsR0FBR2pCLFVBQVVDLElBQUksUUFBUSxFQUVoQyxFQUlJMkUsa0JBQW9CLFdBQ3pCLElBQU1DLEdBQU8sSUFBSUMsTUFBT3FDLFlBQVksRUFDcEMzSCxXQUFXNEgsVUFBWXZDLENBQ3hCLEVBRUFELGtCQUFrQiIsImZpbGUiOiJzY3JpcHQtbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQUxMIERBVEFcclxuY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWltZycpXHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKVxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JylcclxuY29uc3QgbmF2TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tb2JpbGUnKVxyXG5jb25zdCBtb2JpbGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tb2JpbGVfX2xpbmsnKVxyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlX19saW5rcycpXHJcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpXHJcbmNvbnN0IG5hdlJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19yZXN1bHRzJylcclxuY29uc3QgbmF2VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X190YWJsZSBhJylcclxuY29uc3QgbW9iaWxlUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbW9iaWxlX19yZXN1bHRzJylcclxuY29uc3QgbW9iaWxlVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1vYmlsZV9fdGFibGUgYScpXHJcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4nKVxyXG5jb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhbmRpbmdzJylcclxuY29uc3Qgc2NvcmVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZXMnKVxyXG5jb25zdCBzY29yZXNSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZXNfX3JvdW5kJylcclxuY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXIteWVhcicpXHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVTZWN0aW9uRnJvbUhhc2goKSB7XHJcblx0Y29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKVxyXG5cdGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxyXG5cclxuXHRpZiAoc2VjdGlvbikge1xyXG5cdFx0cmVtb3ZlQWN0aXZlQ2xhc3NlcygpXHJcblx0XHRzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW5fX2FjdGl2ZScpXHJcblx0fVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHNldEFjdGl2ZVNlY3Rpb25Gcm9tSGFzaClcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzZXRBY3RpdmVTZWN0aW9uRnJvbUhhc2gpXHJcblxyXG5cclxuLy8gTkFWSUdBVElPTiBNT0JJTEVcclxuXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuXHJcblx0bW9iaWxlTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW1vYmlsZV9fbGlua3MtLWFjdGl2ZScpXHJcbn0pXHJcblxyXG5tb2JpbGVMaW5rLmZvckVhY2gobGluayA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGNvbnN0IGV4aXN0aW5nUmVzdWx0c0RpdiA9IG5hdk1vYmlsZS5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZV9fcmVzdWx0cycpXHJcblx0XHRjb25zdCBleGlzdGluZ1RhYmxlRGl2ID0gbmF2TW9iaWxlLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlX190YWJsZScpXHJcblx0XHRpZiAoZXhpc3RpbmdSZXN1bHRzRGl2KSB7XHJcblx0XHRcdGV4aXN0aW5nUmVzdWx0c0Rpdi5yZW1vdmUoKVxyXG5cdFx0fVxyXG5cdFx0aWYgKGV4aXN0aW5nVGFibGVEaXYpIHtcclxuXHRcdFx0ZXhpc3RpbmdUYWJsZURpdi5yZW1vdmUoKVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGxpbmtIcmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG5cclxuXHRcdGNvbnN0IHJlc3VsdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHRyZXN1bHRzTGluay5ocmVmID0gbGlua0hyZWZcclxuXHRcdHJlc3VsdHNMaW5rLnRleHRDb250ZW50ID0gJ1Jlc3VsdHMnXHJcblxyXG5cdFx0Y29uc3QgdGFibGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHR0YWJsZUxpbmsuaHJlZiA9IGxpbmtIcmVmICsgJy10YWJsZSdcclxuXHRcdHRhYmxlTGluay50ZXh0Q29udGVudCA9ICdTdGFuZGluZ3MnXHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0XHRyZXN1bHRzRGl2LmNsYXNzTmFtZSA9ICduYXYtbW9iaWxlX19yZXN1bHRzIG5hdi1tb2JpbGVfX3Jlc3VsdHMtLWFjdGl2ZSdcclxuXHRcdHJlc3VsdHNEaXYuYXBwZW5kQ2hpbGQocmVzdWx0c0xpbmspXHJcblxyXG5cdFx0Y29uc3QgdGFibGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0dGFibGVEaXYuY2xhc3NOYW1lID0gJ25hdi1tb2JpbGVfX3RhYmxlJ1xyXG5cdFx0dGFibGVEaXYuYXBwZW5kQ2hpbGQodGFibGVMaW5rKVxyXG5cclxuXHRcdGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0XHRib3R0b21Db250YWluZXIuY2xhc3NOYW1lID0gJ25hdi1tb2JpbGVfX2JvdHRvbS1jb250YWluZXInXHJcblxyXG5cdFx0Ym90dG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdHNEaXYpXHJcblx0XHRib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVEaXYpXHJcblxyXG5cdFx0bmF2TW9iaWxlLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcclxuXHR9KVxyXG59KVxyXG5cclxuLy8gTkFWSUdBVElPTiBERVNLVE9QXHJcblxyXG5uYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRjb25zdCBleGlzdGluZ1Jlc3VsdHNEaXYgPSBuYXYucXVlcnlTZWxlY3RvcignLm5hdl9fcmVzdWx0cycpXHJcblx0XHRjb25zdCBleGlzdGluZ1RhYmxlRGl2ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX3RhYmxlJylcclxuXHRcdGlmIChleGlzdGluZ1Jlc3VsdHNEaXYpIHtcclxuXHRcdFx0ZXhpc3RpbmdSZXN1bHRzRGl2LnJlbW92ZSgpXHJcblx0XHR9XHJcblx0XHRpZiAoZXhpc3RpbmdUYWJsZURpdikge1xyXG5cdFx0XHRleGlzdGluZ1RhYmxlRGl2LnJlbW92ZSgpXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGlua0hyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpXHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHRcdHJlc3VsdHNMaW5rLmhyZWYgPSBsaW5rSHJlZlxyXG5cdFx0cmVzdWx0c0xpbmsudGV4dENvbnRlbnQgPSAnUmVzdWx0cydcclxuXHJcblx0XHRjb25zdCB0YWJsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHRcdHRhYmxlTGluay5ocmVmID0gbGlua0hyZWYgKyAnLXRhYmxlJ1xyXG5cdFx0dGFibGVMaW5rLnRleHRDb250ZW50ID0gJ1N0YW5kaW5ncydcclxuXHJcblx0XHRjb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdHJlc3VsdHNEaXYuY2xhc3NOYW1lID0gJ25hdl9fcmVzdWx0cyBuYXZfX3Jlc3VsdHMtLWFjdGl2ZSdcclxuXHRcdHJlc3VsdHNEaXYuYXBwZW5kQ2hpbGQocmVzdWx0c0xpbmspXHJcblxyXG5cdFx0Y29uc3QgdGFibGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0dGFibGVEaXYuY2xhc3NOYW1lID0gJ25hdl9fdGFibGUnXHJcblx0XHR0YWJsZURpdi5hcHBlbmRDaGlsZCh0YWJsZUxpbmspXHJcblxyXG5cdFx0bmF2LmFwcGVuZENoaWxkKHJlc3VsdHNEaXYpXHJcblx0XHRuYXYuYXBwZW5kQ2hpbGQodGFibGVEaXYpXHJcblx0fSlcclxufSlcclxuXHJcbi8vIE1BSU4gU0VDVElPTlxyXG5cclxuLy8gVG9nZ2xlIGNsYXNzIG9mIF9fYWN0aXZlXHJcblxyXG4vLyBERVNLVE9QXHJcblxyXG5uYXZMaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRjb25zdCBpc0FjdGl2ZSA9IGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2xpbmstLWFjdGl2ZScpXHJcblxyXG5cdFx0aWYgKCFpc0FjdGl2ZSkge1xyXG5cdFx0XHRyZW1vdmVBY3RpdmVDbGFzc2VzKClcclxuXHRcdFx0c2VjdGlvbnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ21haW5fX2FjdGl2ZScpXHJcblxyXG5cdFx0XHRuYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xyXG5cdFx0XHRcdG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19saW5rLS1hY3RpdmUnKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay0tYWN0aXZlJylcclxuXHRcdH1cclxuXHJcblx0XHRuYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xyXG5cdFx0XHRuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fbGluay0tYWN0aXZlJylcclxuXHRcdH0pXHJcblxyXG5cdFx0bGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmstLWFjdGl2ZScpXHJcblx0fSlcclxufSlcclxuXHJcbm5hdlRhYmxlLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0c2VjdGlvbnNbaW5kZXggKyAxXS5jbGFzc0xpc3QuYWRkKCdtYWluX19hY3RpdmUnKSAvLyArMSB0byBzZWxlY3QgdGhlIG5leHQgc2VjdGlvblxyXG5cdH0pXHJcbn0pXHJcblxyXG4vLyBNT0JJTEVcclxuXHJcbm1vYmlsZUxpbmsuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Y29uc3QgaXNBY3RpdmUgPSBsaW5rLmNsYXNzTGlzdC5jb250YWlucygnbmF2LW1vYmlsZV9fbGluay0tYWN0aXZlJylcclxuXHJcblx0XHRpZiAoIWlzQWN0aXZlKSB7XHJcblx0XHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0XHRzZWN0aW9uc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnbWFpbl9fYWN0aXZlJylcclxuXHJcblx0XHRcdG1vYmlsZUxpbmsuZm9yRWFjaChtb2JpbGVMaW5rID0+IHtcclxuXHRcdFx0XHRtb2JpbGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1tb2JpbGVfX2xpbmstLWFjdGl2ZScpXHJcblx0XHRcdH0pXHJcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LW1vYmlsZV9fbGluay0tYWN0aXZlJylcclxuXHRcdH1cclxuXHJcblx0XHRtb2JpbGVMaW5rLmZvckVhY2gobW9iaWxlTGluayA9PiB7XHJcblx0XHRcdG1vYmlsZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW1vYmlsZV9fbGluay0tYWN0aXZlJylcclxuXHRcdH0pXHJcblxyXG5cdFx0bGluay5jbGFzc0xpc3QuYWRkKCduYXYtbW9iaWxlX19saW5rLS1hY3RpdmUnKVxyXG5cclxuXHRcdG1vYmlsZUxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tb2JpbGVfX2xpbmtzLS1hY3RpdmUnKVxyXG5cdFx0aGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXHJcblx0fSlcclxufSlcclxuXHJcbm1vYmlsZVRhYmxlLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0c2VjdGlvbnNbaW5kZXggKyAxXS5jbGFzc0xpc3QuYWRkKCdtYWluX19hY3RpdmUnKSAvLyArMSB0byBzZWxlY3QgdGhlIG5leHQgc2VjdGlvblxyXG5cdH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzc2VzKCkge1xyXG5cdHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcblx0XHRzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21haW5fX2FjdGl2ZScpXHJcblx0fSlcclxufVxyXG5cclxuLy8gU0NPUkVTXHJcblxyXG5mdW5jdGlvbiBzaG93U2NvcmVzKGUpIHtcclxuXHRjb25zdCBpc1JvdW5kID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzY29yZXNfX3JvdW5kJylcclxuXHRjb25zdCBpc0Fycm93RG93biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1kb3duJylcclxuXHJcblx0aWYgKGlzUm91bmQgfHwgKGlzQXJyb3dEb3duICYmIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzY29yZXNfX3JvdW5kJykpKSB7XHJcblx0XHRjb25zdCBhcnJvd0NvbnRhaW5lciA9IGlzUm91bmQgPyBlLnRhcmdldCA6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuXHRcdGNvbnN0IGFycm93RG93biA9IGFycm93Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaGV2cm9uLWRvd24nKVxyXG5cclxuXHRcdGNvbnN0IHNpYmxpbmdzID0gQXJyYXkuZnJvbShhcnJvd0NvbnRhaW5lci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKVxyXG5cdFx0c2libGluZ3MuZm9yRWFjaChzaWJsaW5nID0+IHtcclxuXHRcdFx0c2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdzY29yZXNfX3Njb3JlLS1hY3RpdmUnKVxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0YXJyb3dEb3duLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpXHJcblx0fVxyXG59XHJcblxyXG5zY29yZXNTZWN0aW9uLmZvckVhY2goc2VjdGlvbiA9PiBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Njb3JlcykpXHJcblxyXG4vLyBBUEkgREFUQVxyXG5cclxubGV0IGxlYWd1ZXMgPSBbJ1BMJywgJ1BEJywgJ0JMMScsICdTQScsICdGTDEnXVxyXG5cclxubGVhZ3Vlcy5mb3JFYWNoKChpZCwgaW5kZXgpID0+IHtcclxuXHRnZXRTdGFuZGluZ3MoaWQsIGluZGV4KVxyXG5cdGdldFJlc3VsdHMoaWQsIGluZGV4KVxyXG59KVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhbmRpbmdzKGlkLCBwYWdlSW5kZXgpIHtcclxuXHRjb25zdCBVUkxfQVBJID0gJ2h0dHBzOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3Y0L2NvbXBldGl0aW9ucy8nXHJcblx0Y29uc3QgbGVhZ3VlSUQgPSBgJHtpZH1gXHJcblxyXG5cdGZldGNoKFVSTF9BUEkgKyBsZWFndWVJRCArICcvc3RhbmRpbmdzJywge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J1gtQXV0aC1Ub2tlbic6ICcyNjg2NDBlYzZhMjY0MGU3OTkxY2VlMzViNWM2MDFiNicsXHJcblx0XHRcdCdBY2NlcHQtRW5jb2RpbmcnOiAnJyxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdGNyZWF0ZXN0YW5kaW5ncyhkYXRhLCBwYWdlSW5kZXgpXHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlc3VsdHMoaWQsIHBhZ2VJbmRleCkge1xyXG5cdGNvbnN0IFVSTF9BUEkgPSAnaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjQvY29tcGV0aXRpb25zLydcclxuXHRjb25zdCBsZWFndWVJRCA9IGAke2lkfWBcclxuXHJcblx0ZmV0Y2goVVJMX0FQSSArIGxlYWd1ZUlEICsgJy9tYXRjaGVzJywge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J1gtQXV0aC1Ub2tlbic6ICcyNjg2NDBlYzZhMjY0MGU3OTkxY2VlMzViNWM2MDFiNicsXHJcblx0XHRcdCdBY2NlcHQtRW5jb2RpbmcnOiAnJyxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdGNyZWF0ZVJlc3VsdHMoZGF0YSwgcGFnZUluZGV4KVxyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHR9KVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVzdGFuZGluZ3MgPSAobGVhZ3VlLCBwYWdlSW5kZXgpID0+IHtcclxuXHRjb25zdCBzZWN0aW9uSUQgPSBbJ2VuZ2xpc2gtdGFibGUnLCAnc3BhbmlzaC10YWJsZScsICdnZXJtYW4tdGFibGUnLCAnaXRhbGlhbi10YWJsZScsICdmcmVuY2gtdGFibGUnXVtwYWdlSW5kZXhdXHJcblx0Y29uc3Qgc3RhbmRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklEKS5xdWVyeVNlbGVjdG9yKCcuc3RhbmRpbmdzJylcclxuXHRjb25zdCBnZXRUYWJsZSA9IGxlYWd1ZS5zdGFuZGluZ3NbMF0udGFibGVcclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpXHJcblx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3N0YW5kaW5nc19faGVhZGVyJylcclxuXHRoZWFkZXIuaW5uZXJIVE1MID0gYFxyXG5cdDx0cj5cclxuXHQ8dGggY2xhc3M9XCJzdGFuZGluZ3NfX2hlYWRlci1yYW5rXCI+IzwvdGg+XHJcblx0PHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItdGVhbVwiPlRlYW08L3RoPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLXBsYXllZFwiPlA8L3RoPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLXdvblwiPlc8L3RoPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLWRyYXduXCI+RDwvdGg+XHJcblx0PHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItbG9zdFwiPkw8L3RoPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLWZvclwiPis8L3RoPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLWFnYWluc3RcIj4tPC90aD5cclxuXHQ8dGggY2xhc3M9XCJzdGFuZGluZ3NfX2hlYWRlci1kaWZmZXJlbmNlXCI+Ky8tPC90aD5cclxuXHQ8dGggY2xhc3M9XCJzdGFuZGluZ3NfX2hlYWRlci1wb2ludHNcIj5QPC90aD5cclxuXHQ8L3RyPlxyXG5cdGBcclxuXHRzdGFuZGluZ3MuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5cclxuXHRjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JylcclxuXHR0Ym9keS5jbGFzc0xpc3QuYWRkKCdzdGFuZGluZ3NfX3RlYW1zJylcclxuXHJcblx0Z2V0VGFibGUuZm9yRWFjaCh0ZWFtRGF0YSA9PiB7XHJcblx0XHRjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcclxuXHRcdHRyLmlubmVySFRNTCA9IGBcclxuXHRcdDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtcmFua1wiPiR7dGVhbURhdGEucG9zaXRpb259PC90ZD5cclxuXHRcdDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtdGVhbVwiPlxyXG5cdFx0PGltZyBzcmM9XCIke3RlYW1EYXRhLnRlYW0uY3Jlc3R9XCIgYWx0PVwiJHt0ZWFtRGF0YS50ZWFtLm5hbWV9XCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtbmFtZS1mdWxsXCI+JHt0ZWFtRGF0YS50ZWFtLm5hbWV9PC9zcGFuPlxyXG5cdFx0PC90ZD5cclxuXHRcdDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtcGxheWVkXCI+JHt0ZWFtRGF0YS5wbGF5ZWRHYW1lc308L3RkPlxyXG5cdFx0PHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy13b25cIj4ke3RlYW1EYXRhLndvbn08L3RkPlxyXG5cdFx0PHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1kcmF3blwiPiR7dGVhbURhdGEuZHJhd308L3RkPlxyXG5cdFx0PHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1sb3N0XCI+JHt0ZWFtRGF0YS5sb3N0fTwvdGQ+XHJcblx0XHQ8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLWZvclwiPiR7dGVhbURhdGEuZ29hbHNGb3J9PC90ZD5cclxuXHRcdDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtYWdhaW5zdFwiPiR7dGVhbURhdGEuZ29hbHNBZ2FpbnN0fTwvdGQ+XHJcblx0XHQ8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLWRpZmZlcmVuY2VcIj4ke3RlYW1EYXRhLmdvYWxEaWZmZXJlbmNlfTwvdGQ+XHJcblx0XHQ8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLXBvaW50c1wiPiR7dGVhbURhdGEucG9pbnRzfTwvdGQ+XHJcblx0XHRgXHJcblx0XHR0Ym9keS5hcHBlbmRDaGlsZCh0cilcclxuXHR9KVxyXG5cclxuXHRzdGFuZGluZ3MuYXBwZW5kQ2hpbGQodGJvZHkpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3VsdHMgPSAobGVhZ3VlLCBwYWdlSW5kZXgpID0+IHtcclxuXHRjb25zdCBzZWN0aW9uSUQgPSBbJ2VuZ2xpc2gnLCAnc3BhbmlzaCcsICdnZXJtYW4nLCAnaXRhbGlhbicsICdmcmVuY2gnXVtwYWdlSW5kZXhdO1xyXG5cdGNvbnN0IHNjb3JlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JRCkucXVlcnlTZWxlY3RvcignLnNjb3JlcycpO1xyXG5cdGNvbnN0IGdldFJlc3VsdHMgPSBsZWFndWUubWF0Y2hlcztcclxuXHRjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0Y29uc3QgbWF0Y2hkYXlNYXAgPSBuZXcgTWFwKCk7XHJcbiAgXHJcblx0Z2V0UmVzdWx0c1xyXG5cdCAgLmZpbHRlcigobWF0Y2gpID0+IG5ldyBEYXRlKG1hdGNoLnV0Y0RhdGUpIDw9IGN1cnJlbnREYXRlKVxyXG5cdCAgLmZvckVhY2goKG1hdGNoKSA9PiB7XHJcblx0XHRjb25zdCBtYXRjaGRheSA9IG1hdGNoLm1hdGNoZGF5O1xyXG5cdFxyXG4gIFxyXG5cdFx0aWYgKCFtYXRjaGRheU1hcC5oYXMobWF0Y2hkYXkpKSB7XHJcblx0XHQgIGNvbnN0IHNjb3Jlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ICBzY29yZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2NvcmVzX19jb250YWluZXInKTtcclxuICBcclxuXHRcdCAgY29uc3Qgcm91bmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdCAgcm91bmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2NvcmVzX19yb3VuZCcpO1xyXG5cdFx0ICByb3VuZEJ1dHRvbi5pbm5lckhUTUwgPSBgUm91bmQgLSAke21hdGNoZGF5fSA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tZG93blwiPjwvaT5gO1xyXG5cdFx0ICBzY29yZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocm91bmRCdXR0b24pO1xyXG4gIFxyXG5cdFx0ICBtYXRjaGRheU1hcC5zZXQobWF0Y2hkYXksIHNjb3Jlc0NvbnRhaW5lcik7XHJcblx0XHR9XHJcbiAgXHJcblx0XHRjb25zdCBtYXRjaFN0YXJ0ID0gbWF0Y2gudXRjRGF0ZS5yZXBsYWNlKCdUJywgJyAnKS5yZXBsYWNlKCdaJywgJycpLnN1YnN0cmluZygwLCAxNik7XHJcblx0XHRjb25zdCBtYXRjaENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdG1hdGNoQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzY29yZXNfX3Njb3JlJyk7XHJcbiAgXHJcblx0XHRtYXRjaENvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG5cdFx0ICA8c3BhbiBjbGFzcz1cInNjb3Jlc19fbWF0Y2gtZGF0ZVwiPiR7bWF0Y2hTdGFydH08L3NwYW4+XHJcblx0XHQgIDxzcGFuIGNsYXNzPVwic2NvcmVzX19ob21ldGVhbVwiPjxpbWcgc3JjPVwiJHttYXRjaC5ob21lVGVhbS5jcmVzdH1cIiBhbHQ9XCIke21hdGNoLmhvbWVUZWFtLm5hbWV9XCI+ICR7bWF0Y2guaG9tZVRlYW0uc2hvcnROYW1lfTwvc3Bhbj4gXHJcblx0XHQgIDxzcGFuIGNsYXNzPVwic2NvcmVzX19mdWxsdGltZS1zY29yZVwiPiR7bWF0Y2guc2NvcmUuZnVsbFRpbWUuaG9tZX0gOiAke21hdGNoLnNjb3JlLmZ1bGxUaW1lLmF3YXl9PC9zcGFuPlxyXG5cdFx0ICA8c3BhbiBjbGFzcz1cInNjb3Jlc19fYXdheXRlYW1cIj48aW1nIHNyYz1cIiR7bWF0Y2guYXdheVRlYW0uY3Jlc3R9XCIgYWx0PVwiJHttYXRjaC5hd2F5VGVhbS5uYW1lfVwiPiAke21hdGNoLmF3YXlUZWFtLnNob3J0TmFtZX08L3NwYW4+YDtcclxuICBcclxuXHRcdG1hdGNoZGF5TWFwLmdldChtYXRjaGRheSkuYXBwZW5kQ2hpbGQobWF0Y2hDb250ZW50KTtcclxuXHQgIH0pO1xyXG4gIFxyXG5cdGNvbnN0IHNvcnRlZENvbnRhaW5lcnMgPSBBcnJheS5mcm9tKG1hdGNoZGF5TWFwLnZhbHVlcygpKS5zb3J0KFxyXG5cdCAgKGEsIGIpID0+IHBhcnNlSW50KGIucXVlcnlTZWxlY3RvcignLnNjb3Jlc19fcm91bmQnKS50ZXh0Q29udGVudC5zcGxpdCgnIC0gJylbMV0pIC0gcGFyc2VJbnQoYS5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzX19yb3VuZCcpLnRleHRDb250ZW50LnNwbGl0KCcgLSAnKVsxXSlcclxuXHQpO1xyXG5cclxuXHRzb3J0ZWRDb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xyXG5cdCAgc2NvcmVzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblx0fSk7XHJcbiAgXHJcblx0Ly8gQWRkIC5zY29yZXNfX3Njb3JlLS1hY3RpdmUgdG8gdGhlIHNjb3JlcyBpbiB0aGUgbGFzdCBjb250YWluZXJcclxuXHRpZiAoc29ydGVkQ29udGFpbmVycy5sZW5ndGggPiAwKSB7XHJcblx0ICBzb3J0ZWRDb250YWluZXJzWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZXNfX3Njb3JlJykuZm9yRWFjaCgoc2NvcmUpID0+IHtcclxuXHRcdHNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Njb3Jlc19fc2NvcmUtLWFjdGl2ZScpO1xyXG5cdCAgfSk7XHJcblxyXG5cdCAgY29uc3QgYXJyb3cgPSBzb3J0ZWRDb250YWluZXJzWzBdLnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXNfX3JvdW5kJykuY2hpbGRyZW5cclxuXHQgIGFycm93WzBdLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpXHJcblx0fVxyXG4gIH07XHJcblxyXG4vLyAgIEZPT1RFUlxyXG5cclxuY29uc3QgaGFuZGxlQ3VycmVudFllYXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdGZvb3RlclllYXIuaW5uZXJUZXh0ID0geWVhclxyXG59XHJcblxyXG5oYW5kbGVDdXJyZW50WWVhcigpIl19
