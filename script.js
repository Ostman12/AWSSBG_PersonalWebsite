// Reads content.json and fills in the page. You shouldn't need to edit this file.
(async function () {
  const $ = (id) => document.getElementById(id);

  let site;
  try {
    const res = await fetch("content.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    site = await res.json();
  } catch (err) {
    $("tagline").textContent =
      "Couldn't load content.json. Check the file for a missing comma or quote.";
    console.error(err);
    return;
  }

  document.title = site.name;
  $("name").textContent = site.name;
  $("tagline").textContent = site.tagline;
  $("status").textContent = site.status;
  $("footer").textContent = site.footer;

  for (const text of site.about || []) {
    const p = document.createElement("p");
    p.textContent = text;
    $("about").appendChild(p);
  }

  for (const link of site.links || []) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    li.appendChild(a);
    $("links").appendChild(li);
  }

  for (const project of site.projects || []) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "card";
    a.href = project.url;

    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    const p = document.createElement("p");
    p.textContent = project.description;
    const go = document.createElement("span");
    go.className = "go";
    go.textContent = "View project →";

    a.append(h3, p, go);
    li.appendChild(a);
    $("projects").appendChild(li);
  }
})();
