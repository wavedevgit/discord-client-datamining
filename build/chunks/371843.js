/** Chunk was on 64228 **/
/** chunk id: 371843, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(913453),
    i = n(186272),
    r = n(518477),
    s = n(985018);

function o(e) {
    let {
        mutualGuilds: t
    } = (0, l.A)(e), n = null == t ? void 0 : t.length;
    return [{
        section: r.RP.BOT_INFO,
        text: s.intl.string(s.t.jGoPJT)
    }, {
        section: r.RP.MUTUAL_GUILDS,
        text: (0, i.A)(n)
    }, {
        section: r.RP.BOT_DATA_ACCESS,
        text: s.intl.string(s.t.WstFb0)
    }]
}