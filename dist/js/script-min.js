"use strict";var heroImg=document.querySelector(".hero-img"),hamburger=document.querySelector(".hamburger"),nav=document.querySelector(".nav"),navMobile=document.querySelector(".nav-mobile"),mobileLink=document.querySelectorAll(".nav-mobile__link"),mobileLinks=document.querySelector(".nav-mobile__links"),navLinks=document.querySelectorAll(".nav__link"),navResults=document.querySelectorAll(".nav__results"),navTable=document.querySelectorAll(".nav__table a"),mobileResults=document.querySelectorAll(".nav-mobile__results"),mobileTable=document.querySelectorAll(".nav-mobile__table a"),sections=document.querySelectorAll(".main"),tables=document.querySelectorAll(".standings"),scoresSection=document.querySelectorAll(".scores"),scoresRound=document.querySelectorAll(".scores__round"),footerYear=document.querySelector(".footer-year");function setActiveSectionFromHash(){var e=window.location.hash.substring(1),e=document.getElementById(e);e&&(removeActiveClasses(),e.classList.add("main__active"))}function removeActiveClasses(){sections.forEach(function(e){e.classList.remove("main__active")})}function showScores(e){var t=e.target.classList.contains("scores__round"),n=e.target.classList.contains("fa-chevron-down");(t||n&&e.target.parentElement.classList.contains("scores__round"))&&(t=(n=t?e.target:e.target.parentElement).querySelector(".fa-chevron-down"),Array.from(n.parentElement.children).forEach(function(e){e.classList.toggle("scores__score--active")}),t.classList.toggle("rotate"))}window.addEventListener("hashchange",setActiveSectionFromHash),window.addEventListener("load",setActiveSectionFromHash),hamburger.addEventListener("click",function(){hamburger.classList.toggle("is-active"),mobileLinks.classList.toggle("nav-mobile__links--active")}),mobileLink.forEach(function(a){a.addEventListener("click",function(){var e=navMobile.querySelector(".nav-mobile__results"),t=navMobile.querySelector(".nav-mobile__table"),e=(e&&e.remove(),t&&t.remove(),a.getAttribute("href")),t=document.createElement("a"),n=(t.href=e,t.textContent="Results",document.createElement("a")),e=(n.href=e+"-table",n.textContent="Standings",document.createElement("div")),t=(e.className="nav-mobile__results nav-mobile__results--active",e.appendChild(t),document.createElement("div")),n=(t.className="nav-mobile__table",t.appendChild(n),document.createElement("div"));n.className="nav-mobile__bottom-container",n.appendChild(e),n.appendChild(t),navMobile.appendChild(n)})}),navLinks.forEach(function(a){a.addEventListener("click",function(){var e=nav.querySelector(".nav__results"),t=nav.querySelector(".nav__table"),e=(e&&e.remove(),t&&t.remove(),a.getAttribute("href")),t=document.createElement("a"),n=(t.href=e,t.textContent="Results",document.createElement("a")),e=(n.href=e+"-table",n.textContent="Standings",document.createElement("div")),t=(e.className="nav__results nav__results--active",e.appendChild(t),document.createElement("div"));t.className="nav__table",t.appendChild(n),nav.appendChild(e),nav.appendChild(t)})}),navLinks.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")})}),navTable.forEach(function(e,t){e.addEventListener("click",function(){removeActiveClasses(),sections[t+1].classList.add("main__active")})}),mobileLink.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav-mobile__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),mobileLink.forEach(function(e){e.classList.remove("nav-mobile__link--active")}),e.classList.add("nav-mobile__link--active")),mobileLink.forEach(function(e){e.classList.remove("nav-mobile__link--active")}),e.classList.add("nav-mobile__link--active"),mobileLinks.classList.toggle("nav-mobile__links--active"),hamburger.classList.toggle("is-active")})}),mobileTable.forEach(function(e,t){e.addEventListener("click",function(){removeActiveClasses(),sections[t+1].classList.add("main__active")})}),scoresSection.forEach(function(e){return e.addEventListener("click",showScores)});var leagues=["PL","PD","BL1","SA","FL1"];function getStandings(e,t){e="".concat(e);fetch("https://thingproxy.freeboard.io/fetch/https://api.football-data.org/v4/competitions/"+e+"/standings",{method:"GET",headers:{"X-Auth-Token":"268640ec6a2640e7991cee35b5c601b6","Accept-Encoding":"","Access-Control-Allow-Origin":"*",Origin:"https://what-a-strike.netlify.app"}}).then(function(e){return e.json()}).then(function(e){createstandings(e,t)}).catch(function(e){console.log(e)})}function getResults(e,t){e="".concat(e);fetch("https://thingproxy.freeboard.io/fetch/https://api.football-data.org/v4/competitions/"+e+"/matches",{method:"GET",headers:{"X-Auth-Token":"268640ec6a2640e7991cee35b5c601b6","Accept-Encoding":"","Access-Control-Allow-Origin":"*",Origin:"https://what-a-strike.netlify.app"}}).then(function(e){return e.json()}).then(function(e){createResults(e,t)}).catch(function(e){console.log(e)})}leagues.forEach(function(e,t){getStandings(e,t),getResults(e,t)});var createstandings=function(e,t){var t=document.getElementById(["english-table","spanish-table","german-table","italian-table","french-table"][t]).querySelector(".standings"),e=e.standings[0].table,n=document.createElement("thead"),a=(n.classList.add("standings__header"),n.innerHTML='\n\t<tr>\n\t<th class="standings__header-rank">#</th>\n\t<th class="standings__header-team">Team</th>\n\t<th class="standings__header-played">P</th>\n\t<th class="standings__header-won">W</th>\n\t<th class="standings__header-drawn">D</th>\n\t<th class="standings__header-lost">L</th>\n\t<th class="standings__header-for">+</th>\n\t<th class="standings__header-against">-</th>\n\t<th class="standings__header-difference">+/-</th>\n\t<th class="standings__header-points">P</th>\n\t</tr>\n\t',t.appendChild(n),document.createElement("tbody"));a.classList.add("standings__teams"),e.forEach(function(e){var t=document.createElement("tr");t.innerHTML='\n\t\t<td class="standings__teams-rank">'.concat(e.position,'</td>\n\t\t<td class="standings__teams-team">\n\t\t<img src="').concat(e.team.crest,'" alt="').concat(e.team.name,'">\n\t\t<span class="standings__teams-name-full">').concat(e.team.name,'</span>\n\t\t</td>\n\t\t<td class="standings__teams-played">').concat(e.playedGames,'</td>\n\t\t<td class="standings__teams-won">').concat(e.won,'</td>\n\t\t<td class="standings__teams-drawn">').concat(e.draw,'</td>\n\t\t<td class="standings__teams-lost">').concat(e.lost,'</td>\n\t\t<td class="standings__teams-for">').concat(e.goalsFor,'</td>\n\t\t<td class="standings__teams-against">').concat(e.goalsAgainst,'</td>\n\t\t<td class="standings__teams-difference">').concat(e.goalDifference,'</td>\n\t\t<td class="standings__teams-points">').concat(e.points,"</td>\n\t\t"),a.appendChild(t)}),t.appendChild(a)},createResults=function(e,t){var n=document.getElementById(["english","spanish","german","italian","french"][t]).querySelector(".scores"),t=e.matches,a=new Date,s=new Map,e=(t.filter(function(e){return new Date(e.utcDate)<=a}).forEach(function(e){var t=e.matchday,n=(s.has(t)||((a=document.createElement("div")).classList.add("scores__container"),(n=document.createElement("button")).classList.add("scores__round"),n.innerHTML="Round - ".concat(t,' <i class="fa-solid fa-chevron-down"></i>'),a.appendChild(n),s.set(t,a)),new Date(e.utcDate)),a=new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1}).format(n),n=document.createElement("div");n.classList.add("scores__score"),n.innerHTML='\n\t\t  <span class="scores__match-date">'.concat(a,'</span>\n\t\t  <span class="scores__hometeam"><img src="').concat(e.homeTeam.crest,'" alt="').concat(e.homeTeam.name,'"> ').concat(e.homeTeam.shortName,'</span> \n\t\t  <span class="scores__fulltime-score">').concat(e.score.fullTime.home," : ").concat(e.score.fullTime.away,'</span>\n\t\t  <span class="scores__awayteam"><img src="').concat(e.awayTeam.crest,'" alt="').concat(e.awayTeam.name,'"> ').concat(e.awayTeam.shortName,"</span>"),s.get(t).appendChild(n)}),Array.from(s.values()).sort(function(e,t){return parseInt(t.querySelector(".scores__round").textContent.split(" - ")[1])-parseInt(e.querySelector(".scores__round").textContent.split(" - ")[1])}));e.forEach(function(e){n.appendChild(e)}),0<e.length&&(e[0].querySelectorAll(".scores__score").forEach(function(e){e.classList.add("scores__score--active")}),e[0].querySelector(".scores__round").children[0].classList.add("rotate"))},handleCurrentYear=function(){var e=(new Date).getFullYear();footerYear.innerText=e};handleCurrentYear();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJoZXJvSW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYnVyZ2VyIiwibmF2IiwibmF2TW9iaWxlIiwibW9iaWxlTGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2JpbGVMaW5rcyIsIm5hdkxpbmtzIiwibmF2UmVzdWx0cyIsIm5hdlRhYmxlIiwibW9iaWxlUmVzdWx0cyIsIm1vYmlsZVRhYmxlIiwic2VjdGlvbnMiLCJ0YWJsZXMiLCJzY29yZXNTZWN0aW9uIiwiZm9vdGVyWWVhciIsImhhc2giLCJzZXRBY3RpdmVTZWN0aW9uRnJvbUhhc2giLCJzdWJzdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlY3Rpb24iLCJyZW1vdmVBY3RpdmVDbGFzc2VzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0U3RhbmRpbmdzIiwiZ2V0UmVzdWx0cyIsImluZGV4IiwicmVtb3ZlIiwibWV0aG9kIiwiZSIsImhlYWRlcnMiLCJ0YXJnZXQiLCJjb250YWlucyIsImlzQXJyb3dEb3duIiwiaXNSb3VuZCIsInBhcmVudEVsZW1lbnQiLCJhcnJvd0Rvd24iLCJhcnJvd0NvbnRhaW5lciIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInNpYmxpbmciLCJjcmVhdGVzdGFuZGluZ3MiLCJkYXRhIiwicGFnZUluZGV4IiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4aXN0aW5nUmVzdWx0c0RpdiIsImxpbmsiLCJleGlzdGluZ1RhYmxlRGl2IiwidGFibGVMaW5rIiwibGlua0hyZWYiLCJyZXN1bHRzRGl2IiwiY3JlYXRlRWxlbWVudCIsInRhYmxlRGl2IiwicmVzdWx0c0xpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJib3R0b21Db250YWluZXIiLCJhcHBlbmRDaGlsZCIsIm5hdkxpbmsiLCJzaG93U2NvcmVzIiwic2libGluZ3MiLCJjb25jYXQiLCJpZCIsImNyZWF0ZVJlc3VsdHMiLCJmZXRjaCIsInByb3h5VXJsIiwibGVhZ3VlSUQiLCJYLUF1dGgtVG9rZW4iLCJBY2NlcHQtRW5jb2RpbmciLCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4iLCJPcmlnaW4iLCJoZWFkZXIiLCJzdGFuZGluZ3MiLCJ0aGVuIiwidGJvZHkiLCJnZXRUYWJsZSIsInRyIiwiY29uc29sZSIsImlubmVySFRNTCIsInNlY3Rpb25JRCIsImN1cnJlbnREYXRlIiwibWF0Y2hkYXlNYXAiLCJyZXMiLCJyb3VuZEJ1dHRvbiIsImxvZyIsImVyciIsImxlYWd1ZXMiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJtb250aCIsImdldEVsZW1lbnRCeUlkIiwiZGF5IiwibGVhZ3VlIiwidGFibGUiLCJob3VyIiwic29ydGVkQ29udGFpbmVycyIsIm1pbnV0ZSIsImhvdXIxMiIsInNjb3JlIiwiYXJyb3ciLCJ0ZWFtRGF0YSIsInBvc2l0aW9uIiwidGVhbSIsImNyZXN0IiwibmFtZSIsInBsYXllZEdhbWVzIiwid29uIiwiZHJhdyIsImxvc3QiLCJnb2Fsc0ZvciIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicG9pbnRzIiwic2NvcmVzIiwibWF0Y2hlcyIsIkRhdGUiLCJNYXAiLCJmaWx0ZXIiLCJtYXRjaCIsInV0Y0RhdGUiLCJtYXRjaGRheSIsIm1hdGNoRGF0ZSIsImhhcyIsInNjb3Jlc0NvbnRhaW5lciIsInNldCIsIm1hdGNoU3RhcnQiLCJ5ZWFyIiwiZm9ybWF0IiwibWF0Y2hDb250ZW50IiwiaG9tZVRlYW0iLCJzaG9ydE5hbWUiLCJmdWxsVGltZSIsImhvbWUiLCJhd2F5IiwiYXdheVRlYW0iLCJnZXQiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUludCIsInNwbGl0IiwiY29udGFpbmVyIiwibGVuZ3RoIiwiaGFuZGxlQ3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBTUEsUUFBVUMsU0FBU0MsY0FB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LyBBTEwgREFUQVxyXG5jb25zdCBoZXJvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8taW1nJylcclxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxyXG5jb25zdCBuYXZNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZScpXHJcbmNvbnN0IG1vYmlsZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1vYmlsZV9fbGluaycpXHJcbmNvbnN0IG1vYmlsZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tb2JpbGVfX2xpbmtzJylcclxuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19saW5rJylcclxuY29uc3QgbmF2UmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX3Jlc3VsdHMnKVxyXG5jb25zdCBuYXZUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX3RhYmxlIGEnKVxyXG5jb25zdCBtb2JpbGVSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tb2JpbGVfX3Jlc3VsdHMnKVxyXG5jb25zdCBtb2JpbGVUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbW9iaWxlX190YWJsZSBhJylcclxuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbicpXHJcbmNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFuZGluZ3MnKVxyXG5jb25zdCBzY29yZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlcycpXHJcbmNvbnN0IHNjb3Jlc1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3Jlc19fcm91bmQnKVxyXG5jb25zdCBmb290ZXJZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci15ZWFyJylcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZVNlY3Rpb25Gcm9tSGFzaCgpIHtcclxuXHRjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpXHJcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXHJcblxyXG5cdGlmIChzZWN0aW9uKSB7XHJcblx0XHRyZW1vdmVBY3RpdmVDbGFzc2VzKClcclxuXHRcdHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWFpbl9fYWN0aXZlJylcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0QWN0aXZlU2VjdGlvbkZyb21IYXNoKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNldEFjdGl2ZVNlY3Rpb25Gcm9tSGFzaClcclxuXHJcblxyXG4vLyBOQVZJR0FUSU9OIE1PQklMRVxyXG5cclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG5cclxuXHRtb2JpbGVMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCduYXYtbW9iaWxlX19saW5rcy0tYWN0aXZlJylcclxufSlcclxuXHJcbm1vYmlsZUxpbmsuZm9yRWFjaChsaW5rID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZXhpc3RpbmdSZXN1bHRzRGl2ID0gbmF2TW9iaWxlLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlX19yZXN1bHRzJylcclxuXHRcdGNvbnN0IGV4aXN0aW5nVGFibGVEaXYgPSBuYXZNb2JpbGUucXVlcnlTZWxlY3RvcignLm5hdi1tb2JpbGVfX3RhYmxlJylcclxuXHRcdGlmIChleGlzdGluZ1Jlc3VsdHNEaXYpIHtcclxuXHRcdFx0ZXhpc3RpbmdSZXN1bHRzRGl2LnJlbW92ZSgpXHJcblx0XHR9XHJcblx0XHRpZiAoZXhpc3RpbmdUYWJsZURpdikge1xyXG5cdFx0XHRleGlzdGluZ1RhYmxlRGl2LnJlbW92ZSgpXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGlua0hyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpXHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHRcdHJlc3VsdHNMaW5rLmhyZWYgPSBsaW5rSHJlZlxyXG5cdFx0cmVzdWx0c0xpbmsudGV4dENvbnRlbnQgPSAnUmVzdWx0cydcclxuXHJcblx0XHRjb25zdCB0YWJsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHRcdHRhYmxlTGluay5ocmVmID0gbGlua0hyZWYgKyAnLXRhYmxlJ1xyXG5cdFx0dGFibGVMaW5rLnRleHRDb250ZW50ID0gJ1N0YW5kaW5ncydcclxuXHJcblx0XHRjb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdHJlc3VsdHNEaXYuY2xhc3NOYW1lID0gJ25hdi1tb2JpbGVfX3Jlc3VsdHMgbmF2LW1vYmlsZV9fcmVzdWx0cy0tYWN0aXZlJ1xyXG5cdFx0cmVzdWx0c0Rpdi5hcHBlbmRDaGlsZChyZXN1bHRzTGluaylcclxuXHJcblx0XHRjb25zdCB0YWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0XHR0YWJsZURpdi5jbGFzc05hbWUgPSAnbmF2LW1vYmlsZV9fdGFibGUnXHJcblx0XHR0YWJsZURpdi5hcHBlbmRDaGlsZCh0YWJsZUxpbmspXHJcblxyXG5cdFx0Y29uc3QgYm90dG9tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdGJvdHRvbUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbmF2LW1vYmlsZV9fYm90dG9tLWNvbnRhaW5lcidcclxuXHJcblx0XHRib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0c0RpdilcclxuXHRcdGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZURpdilcclxuXHJcblx0XHRuYXZNb2JpbGUuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGFpbmVyKVxyXG5cdH0pXHJcbn0pXHJcblxyXG4vLyBOQVZJR0FUSU9OIERFU0tUT1BcclxuXHJcbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGNvbnN0IGV4aXN0aW5nUmVzdWx0c0RpdiA9IG5hdi5xdWVyeVNlbGVjdG9yKCcubmF2X19yZXN1bHRzJylcclxuXHRcdGNvbnN0IGV4aXN0aW5nVGFibGVEaXYgPSBuYXYucXVlcnlTZWxlY3RvcignLm5hdl9fdGFibGUnKVxyXG5cdFx0aWYgKGV4aXN0aW5nUmVzdWx0c0Rpdikge1xyXG5cdFx0XHRleGlzdGluZ1Jlc3VsdHNEaXYucmVtb3ZlKClcclxuXHRcdH1cclxuXHRcdGlmIChleGlzdGluZ1RhYmxlRGl2KSB7XHJcblx0XHRcdGV4aXN0aW5nVGFibGVEaXYucmVtb3ZlKClcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsaW5rSHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJylcclxuXHJcblx0XHRjb25zdCByZXN1bHRzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cdFx0cmVzdWx0c0xpbmsuaHJlZiA9IGxpbmtIcmVmXHJcblx0XHRyZXN1bHRzTGluay50ZXh0Q29udGVudCA9ICdSZXN1bHRzJ1xyXG5cclxuXHRcdGNvbnN0IHRhYmxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cdFx0dGFibGVMaW5rLmhyZWYgPSBsaW5rSHJlZiArICctdGFibGUnXHJcblx0XHR0YWJsZUxpbmsudGV4dENvbnRlbnQgPSAnU3RhbmRpbmdzJ1xyXG5cclxuXHRcdGNvbnN0IHJlc3VsdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0cmVzdWx0c0Rpdi5jbGFzc05hbWUgPSAnbmF2X19yZXN1bHRzIG5hdl9fcmVzdWx0cy0tYWN0aXZlJ1xyXG5cdFx0cmVzdWx0c0Rpdi5hcHBlbmRDaGlsZChyZXN1bHRzTGluaylcclxuXHJcblx0XHRjb25zdCB0YWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0XHR0YWJsZURpdi5jbGFzc05hbWUgPSAnbmF2X190YWJsZSdcclxuXHRcdHRhYmxlRGl2LmFwcGVuZENoaWxkKHRhYmxlTGluaylcclxuXHJcblx0XHRuYXYuYXBwZW5kQ2hpbGQocmVzdWx0c0RpdilcclxuXHRcdG5hdi5hcHBlbmRDaGlsZCh0YWJsZURpdilcclxuXHR9KVxyXG59KVxyXG5cclxuLy8gTUFJTiBTRUNUSU9OXHJcblxyXG4vLyBUb2dnbGUgY2xhc3Mgb2YgX19hY3RpdmVcclxuXHJcbi8vIERFU0tUT1BcclxuXHJcbm5hdkxpbmtzLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGNvbnN0IGlzQWN0aXZlID0gbGluay5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fbGluay0tYWN0aXZlJylcclxuXHJcblx0XHRpZiAoIWlzQWN0aXZlKSB7XHJcblx0XHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0XHRzZWN0aW9uc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnbWFpbl9fYWN0aXZlJylcclxuXHJcblx0XHRcdG5hdkxpbmtzLmZvckVhY2gobmF2TGluayA9PiB7XHJcblx0XHRcdFx0bmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2xpbmstLWFjdGl2ZScpXHJcblx0XHRcdH0pXHJcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2X19saW5rLS1hY3RpdmUnKVxyXG5cdFx0fVxyXG5cclxuXHRcdG5hdkxpbmtzLmZvckVhY2gobmF2TGluayA9PiB7XHJcblx0XHRcdG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19saW5rLS1hY3RpdmUnKVxyXG5cdFx0fSlcclxuXHJcblx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay0tYWN0aXZlJylcclxuXHR9KVxyXG59KVxyXG5cclxubmF2VGFibGUuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0cmVtb3ZlQWN0aXZlQ2xhc3NlcygpXHJcblx0XHRzZWN0aW9uc1tpbmRleCArIDFdLmNsYXNzTGlzdC5hZGQoJ21haW5fX2FjdGl2ZScpIC8vICsxIHRvIHNlbGVjdCB0aGUgbmV4dCBzZWN0aW9uXHJcblx0fSlcclxufSlcclxuXHJcbi8vIE1PQklMRVxyXG5cclxubW9iaWxlTGluay5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRjb25zdCBpc0FjdGl2ZSA9IGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtbW9iaWxlX19saW5rLS1hY3RpdmUnKVxyXG5cclxuXHRcdGlmICghaXNBY3RpdmUpIHtcclxuXHRcdFx0cmVtb3ZlQWN0aXZlQ2xhc3NlcygpXHJcblx0XHRcdHNlY3Rpb25zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdtYWluX19hY3RpdmUnKVxyXG5cclxuXHRcdFx0bW9iaWxlTGluay5mb3JFYWNoKG1vYmlsZUxpbmsgPT4ge1xyXG5cdFx0XHRcdG1vYmlsZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW1vYmlsZV9fbGluay0tYWN0aXZlJylcclxuXHRcdFx0fSlcclxuXHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCduYXYtbW9iaWxlX19saW5rLS1hY3RpdmUnKVxyXG5cdFx0fVxyXG5cclxuXHRcdG1vYmlsZUxpbmsuZm9yRWFjaChtb2JpbGVMaW5rID0+IHtcclxuXHRcdFx0bW9iaWxlTGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbW9iaWxlX19saW5rLS1hY3RpdmUnKVxyXG5cdFx0fSlcclxuXHJcblx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1tb2JpbGVfX2xpbmstLWFjdGl2ZScpXHJcblxyXG5cdFx0bW9iaWxlTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW1vYmlsZV9fbGlua3MtLWFjdGl2ZScpXHJcblx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuXHR9KVxyXG59KVxyXG5cclxubW9iaWxlVGFibGUuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0cmVtb3ZlQWN0aXZlQ2xhc3NlcygpXHJcblx0XHRzZWN0aW9uc1tpbmRleCArIDFdLmNsYXNzTGlzdC5hZGQoJ21haW5fX2FjdGl2ZScpIC8vICsxIHRvIHNlbGVjdCB0aGUgbmV4dCBzZWN0aW9uXHJcblx0fSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzZXMoKSB7XHJcblx0c2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuXHRcdHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbl9fYWN0aXZlJylcclxuXHR9KVxyXG59XHJcblxyXG4vLyBTQ09SRVNcclxuXHJcbmZ1bmN0aW9uIHNob3dTY29yZXMoZSkge1xyXG5cdGNvbnN0IGlzUm91bmQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Njb3Jlc19fcm91bmQnKVxyXG5cdGNvbnN0IGlzQXJyb3dEb3duID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWRvd24nKVxyXG5cclxuXHRpZiAoaXNSb3VuZCB8fCAoaXNBcnJvd0Rvd24gJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Njb3Jlc19fcm91bmQnKSkpIHtcclxuXHRcdGNvbnN0IGFycm93Q29udGFpbmVyID0gaXNSb3VuZCA/IGUudGFyZ2V0IDogZS50YXJnZXQucGFyZW50RWxlbWVudFxyXG5cdFx0Y29uc3QgYXJyb3dEb3duID0gYXJyb3dDb250YWluZXIucXVlcnlTZWxlY3RvcignLmZhLWNoZXZyb24tZG93bicpXHJcblxyXG5cdFx0Y29uc3Qgc2libGluZ3MgPSBBcnJheS5mcm9tKGFycm93Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pXHJcblx0XHRzaWJsaW5ncy5mb3JFYWNoKHNpYmxpbmcgPT4ge1xyXG5cdFx0XHRzaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Njb3Jlc19fc2NvcmUtLWFjdGl2ZScpXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRhcnJvd0Rvd24uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJylcclxuXHR9XHJcbn1cclxuXHJcbnNjb3Jlc1NlY3Rpb24uZm9yRWFjaChzZWN0aW9uID0+IHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2NvcmVzKSlcclxuXHJcbi8vIEFQSSBEQVRBXHJcblxyXG5sZXQgbGVhZ3VlcyA9IFsnUEwnLCAnUEQnLCAnQkwxJywgJ1NBJywgJ0ZMMSddXHJcblxyXG5sZWFndWVzLmZvckVhY2goKGlkLCBpbmRleCkgPT4ge1xyXG5cdGdldFN0YW5kaW5ncyhpZCwgaW5kZXgpXHJcblx0Z2V0UmVzdWx0cyhpZCwgaW5kZXgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBnZXRTdGFuZGluZ3MoaWQsIHBhZ2VJbmRleCkge1xyXG5cdGNvbnN0IFVSTF9BUEkgPSAnaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjQvY29tcGV0aXRpb25zLydcclxuXHRjb25zdCBsZWFndWVJRCA9IGAke2lkfWBcclxuXHRjb25zdCBwcm94eVVybCA9ICdodHRwczovL3RoaW5ncHJveHkuZnJlZWJvYXJkLmlvL2ZldGNoLydcclxuXHJcblx0ZmV0Y2gocHJveHlVcmwgKyBVUkxfQVBJICsgbGVhZ3VlSUQgKyAnL3N0YW5kaW5ncycsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdYLUF1dGgtVG9rZW4nOiAnMjY4NjQwZWM2YTI2NDBlNzk5MWNlZTM1YjVjNjAxYjYnLFxyXG5cdFx0XHQnQWNjZXB0LUVuY29kaW5nJzogJycsXHJcblx0XHRcdCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcblx0XHRcdCdPcmlnaW4nOiAnaHR0cHM6Ly93aGF0LWEtc3RyaWtlLm5ldGxpZnkuYXBwJ1xyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0Y3JlYXRlc3RhbmRpbmdzKGRhdGEsIHBhZ2VJbmRleClcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzdWx0cyhpZCwgcGFnZUluZGV4KSB7XHJcblx0Y29uc3QgVVJMX0FQSSA9ICdodHRwczovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92NC9jb21wZXRpdGlvbnMvJ1xyXG5cdGNvbnN0IGxlYWd1ZUlEID0gYCR7aWR9YFxyXG5cdGNvbnN0IHByb3h5VXJsID0gJ2h0dHBzOi8vdGhpbmdwcm94eS5mcmVlYm9hcmQuaW8vZmV0Y2gvJ1xyXG5cclxuXHRmZXRjaChwcm94eVVybCArIFVSTF9BUEkgKyBsZWFndWVJRCArICcvbWF0Y2hlcycsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdYLUF1dGgtVG9rZW4nOiAnMjY4NjQwZWM2YTI2NDBlNzk5MWNlZTM1YjVjNjAxYjYnLFxyXG5cdFx0XHQnQWNjZXB0LUVuY29kaW5nJzogJycsXHJcblx0XHRcdCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcblx0XHRcdCdPcmlnaW4nOiAnaHR0cHM6Ly93aGF0LWEtc3RyaWtlLm5ldGxpZnkuYXBwJ1xyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0Y3JlYXRlUmVzdWx0cyhkYXRhLCBwYWdlSW5kZXgpXHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdH0pXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZXN0YW5kaW5ncyA9IChsZWFndWUsIHBhZ2VJbmRleCkgPT4ge1xyXG5cdGNvbnN0IHNlY3Rpb25JRCA9IFsnZW5nbGlzaC10YWJsZScsICdzcGFuaXNoLXRhYmxlJywgJ2dlcm1hbi10YWJsZScsICdpdGFsaWFuLXRhYmxlJywgJ2ZyZW5jaC10YWJsZSddW3BhZ2VJbmRleF1cclxuXHRjb25zdCBzdGFuZGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSUQpLnF1ZXJ5U2VsZWN0b3IoJy5zdGFuZGluZ3MnKVxyXG5cdGNvbnN0IGdldFRhYmxlID0gbGVhZ3VlLnN0YW5kaW5nc1swXS50YWJsZVxyXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJylcclxuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3RhbmRpbmdzX19oZWFkZXInKVxyXG5cdGhlYWRlci5pbm5lckhUTUwgPSBgXHJcblx0PHRyPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLXJhbmtcIj4jPC90aD5cclxuXHQ8dGggY2xhc3M9XCJzdGFuZGluZ3NfX2hlYWRlci10ZWFtXCI+VGVhbTwvdGg+XHJcblx0PHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItcGxheWVkXCI+UDwvdGg+XHJcblx0PHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItd29uXCI+VzwvdGg+XHJcblx0PHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItZHJhd25cIj5EPC90aD5cclxuXHQ8dGggY2xhc3M9XCJzdGFuZGluZ3NfX2hlYWRlci1sb3N0XCI+TDwvdGg+XHJcblx0PHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItZm9yXCI+KzwvdGg+XHJcblx0PHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItYWdhaW5zdFwiPi08L3RoPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLWRpZmZlcmVuY2VcIj4rLy08L3RoPlxyXG5cdDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLXBvaW50c1wiPlA8L3RoPlxyXG5cdDwvdHI+XHJcblx0YFxyXG5cdHN0YW5kaW5ncy5hcHBlbmRDaGlsZChoZWFkZXIpXHJcblxyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKVxyXG5cdHRib2R5LmNsYXNzTGlzdC5hZGQoJ3N0YW5kaW5nc19fdGVhbXMnKVxyXG5cclxuXHRnZXRUYWJsZS5mb3JFYWNoKHRlYW1EYXRhID0+IHtcclxuXHRcdGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG5cdFx0dHIuaW5uZXJIVE1MID0gYFxyXG5cdFx0PHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1yYW5rXCI+JHt0ZWFtRGF0YS5wb3NpdGlvbn08L3RkPlxyXG5cdFx0PHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy10ZWFtXCI+XHJcblx0XHQ8aW1nIHNyYz1cIiR7dGVhbURhdGEudGVhbS5jcmVzdH1cIiBhbHQ9XCIke3RlYW1EYXRhLnRlYW0ubmFtZX1cIj5cclxuXHRcdDxzcGFuIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1uYW1lLWZ1bGxcIj4ke3RlYW1EYXRhLnRlYW0ubmFtZX08L3NwYW4+XHJcblx0XHQ8L3RkPlxyXG5cdFx0PHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1wbGF5ZWRcIj4ke3RlYW1EYXRhLnBsYXllZEdhbWVzfTwvdGQ+XHJcblx0XHQ8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLXdvblwiPiR7dGVhbURhdGEud29ufTwvdGQ+XHJcblx0XHQ8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLWRyYXduXCI+JHt0ZWFtRGF0YS5kcmF3fTwvdGQ+XHJcblx0XHQ8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLWxvc3RcIj4ke3RlYW1EYXRhLmxvc3R9PC90ZD5cclxuXHRcdDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtZm9yXCI+JHt0ZWFtRGF0YS5nb2Fsc0Zvcn08L3RkPlxyXG5cdFx0PHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1hZ2FpbnN0XCI+JHt0ZWFtRGF0YS5nb2Fsc0FnYWluc3R9PC90ZD5cclxuXHRcdDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtZGlmZmVyZW5jZVwiPiR7dGVhbURhdGEuZ29hbERpZmZlcmVuY2V9PC90ZD5cclxuXHRcdDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtcG9pbnRzXCI+JHt0ZWFtRGF0YS5wb2ludHN9PC90ZD5cclxuXHRcdGBcclxuXHRcdHRib2R5LmFwcGVuZENoaWxkKHRyKVxyXG5cdH0pXHJcblxyXG5cdHN0YW5kaW5ncy5hcHBlbmRDaGlsZCh0Ym9keSlcclxufVxyXG5cclxuY29uc3QgY3JlYXRlUmVzdWx0cyA9IChsZWFndWUsIHBhZ2VJbmRleCkgPT4ge1xyXG5cdGNvbnN0IHNlY3Rpb25JRCA9IFsnZW5nbGlzaCcsICdzcGFuaXNoJywgJ2dlcm1hbicsICdpdGFsaWFuJywgJ2ZyZW5jaCddW3BhZ2VJbmRleF07XHJcblx0Y29uc3Qgc2NvcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklEKS5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzJyk7XHJcblx0Y29uc3QgZ2V0UmVzdWx0cyA9IGxlYWd1ZS5tYXRjaGVzO1xyXG5cdGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHRjb25zdCBtYXRjaGRheU1hcCA9IG5ldyBNYXAoKTtcclxuICBcclxuXHRnZXRSZXN1bHRzXHJcblx0ICAuZmlsdGVyKChtYXRjaCkgPT4gbmV3IERhdGUobWF0Y2gudXRjRGF0ZSkgPD0gY3VycmVudERhdGUpXHJcblx0ICAuZm9yRWFjaCgobWF0Y2gpID0+IHtcclxuXHRcdGNvbnN0IG1hdGNoZGF5ID0gbWF0Y2gubWF0Y2hkYXk7XHJcblx0XHJcbiAgXHJcblx0XHRpZiAoIW1hdGNoZGF5TWFwLmhhcyhtYXRjaGRheSkpIHtcclxuXHRcdCAgY29uc3Qgc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHQgIHNjb3Jlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY29yZXNfX2NvbnRhaW5lcicpO1xyXG4gIFxyXG5cdFx0ICBjb25zdCByb3VuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0ICByb3VuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzY29yZXNfX3JvdW5kJyk7XHJcblx0XHQgIHJvdW5kQnV0dG9uLmlubmVySFRNTCA9IGBSb3VuZCAtICR7bWF0Y2hkYXl9IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi1kb3duXCI+PC9pPmA7XHJcblx0XHQgIHNjb3Jlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyb3VuZEJ1dHRvbik7XHJcbiAgXHJcblx0XHQgIG1hdGNoZGF5TWFwLnNldChtYXRjaGRheSwgc2NvcmVzQ29udGFpbmVyKTtcclxuXHRcdH1cclxuICBcclxuXHRcdC8vIGNvbnN0IG1hdGNoU3RhcnQgPSBtYXRjaC51dGNEYXRlLnJlcGxhY2UoJ1QnLCAnICcpLnJlcGxhY2UoJ1onLCAnJykuc3Vic3RyaW5nKDAsIDE2KTtcclxuXHRcdGNvbnN0IG1hdGNoRGF0ZSA9IG5ldyBEYXRlKG1hdGNoLnV0Y0RhdGUpO1xyXG5cdFx0Y29uc3QgbWF0Y2hTdGFydCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdwbC1QTCcsIHtcclxuXHRcdFx0eWVhcjogJ251bWVyaWMnLFxyXG5cdFx0XHRtb250aDogJ3Nob3J0JyxcclxuXHRcdFx0ZGF5OiAnbnVtZXJpYycsXHJcblx0XHRcdGhvdXI6ICdudW1lcmljJyxcclxuXHRcdFx0bWludXRlOiAnbnVtZXJpYycsXHJcblx0XHRcdGhvdXIxMjogZmFsc2UsXHJcblx0XHQgIH0pLmZvcm1hdChtYXRjaERhdGUpO1xyXG5cclxuXHJcblx0XHRjb25zdCBtYXRjaENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdG1hdGNoQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzY29yZXNfX3Njb3JlJyk7XHJcbiAgXHJcblx0XHRtYXRjaENvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG5cdFx0ICA8c3BhbiBjbGFzcz1cInNjb3Jlc19fbWF0Y2gtZGF0ZVwiPiR7bWF0Y2hTdGFydH08L3NwYW4+XHJcblx0XHQgIDxzcGFuIGNsYXNzPVwic2NvcmVzX19ob21ldGVhbVwiPjxpbWcgc3JjPVwiJHttYXRjaC5ob21lVGVhbS5jcmVzdH1cIiBhbHQ9XCIke21hdGNoLmhvbWVUZWFtLm5hbWV9XCI+ICR7bWF0Y2guaG9tZVRlYW0uc2hvcnROYW1lfTwvc3Bhbj4gXHJcblx0XHQgIDxzcGFuIGNsYXNzPVwic2NvcmVzX19mdWxsdGltZS1zY29yZVwiPiR7bWF0Y2guc2NvcmUuZnVsbFRpbWUuaG9tZX0gOiAke21hdGNoLnNjb3JlLmZ1bGxUaW1lLmF3YXl9PC9zcGFuPlxyXG5cdFx0ICA8c3BhbiBjbGFzcz1cInNjb3Jlc19fYXdheXRlYW1cIj48aW1nIHNyYz1cIiR7bWF0Y2guYXdheVRlYW0uY3Jlc3R9XCIgYWx0PVwiJHttYXRjaC5hd2F5VGVhbS5uYW1lfVwiPiAke21hdGNoLmF3YXlUZWFtLnNob3J0TmFtZX08L3NwYW4+YDtcclxuICBcclxuXHRcdG1hdGNoZGF5TWFwLmdldChtYXRjaGRheSkuYXBwZW5kQ2hpbGQobWF0Y2hDb250ZW50KTtcclxuXHQgIH0pO1xyXG4gIFxyXG5cdGNvbnN0IHNvcnRlZENvbnRhaW5lcnMgPSBBcnJheS5mcm9tKG1hdGNoZGF5TWFwLnZhbHVlcygpKS5zb3J0KFxyXG5cdCAgKGEsIGIpID0+IHBhcnNlSW50KGIucXVlcnlTZWxlY3RvcignLnNjb3Jlc19fcm91bmQnKS50ZXh0Q29udGVudC5zcGxpdCgnIC0gJylbMV0pIC0gcGFyc2VJbnQoYS5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzX19yb3VuZCcpLnRleHRDb250ZW50LnNwbGl0KCcgLSAnKVsxXSlcclxuXHQpO1xyXG5cclxuXHRzb3J0ZWRDb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xyXG5cdCAgc2NvcmVzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblx0fSk7XHJcbiAgXHJcblx0Ly8gQWRkIC5zY29yZXNfX3Njb3JlLS1hY3RpdmUgdG8gdGhlIHNjb3JlcyBpbiB0aGUgbGFzdCBjb250YWluZXJcclxuXHRpZiAoc29ydGVkQ29udGFpbmVycy5sZW5ndGggPiAwKSB7XHJcblx0ICBzb3J0ZWRDb250YWluZXJzWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZXNfX3Njb3JlJykuZm9yRWFjaCgoc2NvcmUpID0+IHtcclxuXHRcdHNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Njb3Jlc19fc2NvcmUtLWFjdGl2ZScpO1xyXG5cdCAgfSk7XHJcblxyXG5cdCAgY29uc3QgYXJyb3cgPSBzb3J0ZWRDb250YWluZXJzWzBdLnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXNfX3JvdW5kJykuY2hpbGRyZW5cclxuXHQgIGFycm93WzBdLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpXHJcblx0fVxyXG4gIH07XHJcblxyXG4vLyAgIEZPT1RFUlxyXG5cclxuY29uc3QgaGFuZGxlQ3VycmVudFllYXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdGZvb3RlclllYXIuaW5uZXJUZXh0ID0geWVhclxyXG59XHJcblxyXG5oYW5kbGVDdXJyZW50WWVhcigpXHJcbiJdfQ==
