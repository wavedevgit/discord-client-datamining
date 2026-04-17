/** chunk id: 118331 params = (module,exports,require) **/
n.d(t, {
    d: () => r
});
var i = n(681154),
    a = n(155718);
let l = new Set([i.ContentInventoryEntryType.TOP_ARTIST, i.ContentInventoryEntryType.TOP_GAME, i.ContentInventoryEntryType.PLAYED_GAME, i.ContentInventoryEntryType.WATCHED_MEDIA, i.ContentInventoryEntryType.LISTENED_SESSION, i.ContentInventoryEntryType.LAUNCHED_ACTIVITY]);

function r(e) {
    let t = (e.components ?? []).filter(e => e.type === a.I5.CONTENT_INVENTORY_ENTRY);
    return 0 === t.length || t.some(e => {
        let {
            contentInventoryEntry: t
        } = e;
        return !l.has(t.content_type)
    })
}