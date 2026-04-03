/** chunk id: 523728 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(652215),
    r = n(985018);

function a(e) {
    if (null == e) return null;
    switch (e.type) {
        case i.rbe.GUILD_ANNOUNCEMENT:
            return r.intl.string(r.t.l1dkSD);
        case i.rbe.GUILD_STORE:
            return r.intl.string(r.t["P1/Erq"]);
        case i.rbe.DM:
        case i.rbe.GROUP_DM:
            return r.intl.string(r.t.jN2DfZ);
        case i.rbe.PRIVATE_THREAD:
            return r.intl.string(r.t.F1zyvU);
        case i.rbe.ANNOUNCEMENT_THREAD:
        case i.rbe.PUBLIC_THREAD:
            return r.intl.string(r.t["7Xm5QI"]);
        case i.rbe.GUILD_TEXT:
            return r.intl.string(r.t.Pnajj0);
        case i.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? r.intl.string(r.t.seKITE) : r.intl.string(r.t.GbryDd);
        case i.rbe.GUILD_MEDIA:
            return r.intl.string(r.t.seKITE);
        case i.rbe.GUILD_STAGE_VOICE:
            return r.intl.string(r.t.EErMzA);
        case i.rbe.GUILD_VOICE:
            return r.intl.string(r.t.BVZqJl);
        case i.rbe.GUILD_CATEGORY:
        default:
            return null
    }
}