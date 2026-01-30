/** Chunk was on 64935 **/
/** chunk id: 118331, original params: e,t,n (module,exports,require) **/
n.d(t, {
    d: () => a
}), n(896048);
var r = n(681154),
    i = n(155718);
let l = new Set([r.ContentInventoryEntryType.TOP_ARTIST, r.ContentInventoryEntryType.TOP_GAME, r.ContentInventoryEntryType.PLAYED_GAME, r.ContentInventoryEntryType.WATCHED_MEDIA, r.ContentInventoryEntryType.LISTENED_SESSION, r.ContentInventoryEntryType.LAUNCHED_ACTIVITY]);

function a(e) {
    var t;
    let n = (null != (t = e.components) ? t : []).filter(e => e.type === i.I5.CONTENT_INVENTORY_ENTRY);
    return 0 === n.length || n.some(e => {
        let {
            contentInventoryEntry: t
        } = e;
        return !l.has(t.content_type)
    })
}