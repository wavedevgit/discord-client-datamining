/** Chunk was on 48330 **/
/** chunk id: 847494, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435328),
    c = n(342088),
    o = n(206314);

function u(e) {
    let {
        description: t,
        className: n,
        guildId: i,
        truncate: u = !0
    } = e, d = r.useMemo(() => (0, a.l)(t, !0, {
        guildId: i,
        allowLinks: !0,
        allowHeading: !0,
        allowList: !0
    }), [t, i]);
    return (0, l.jsx)("div", {
        className: s()(c.i, n, o.PT, {
            [c.x]: u
        }),
        children: d
    })
}