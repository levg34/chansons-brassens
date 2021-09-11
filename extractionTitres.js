let chansons = []

$('#menubas a[href^="tab.php"]').each((i,e) => chansons.push($(e).text()))
