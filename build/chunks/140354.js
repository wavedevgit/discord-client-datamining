/** Chunk was on 21738 **/
/** chunk id: 140354, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(765671),
    u = n(4616),
    d = n(743674),
    p = n(426660),
    h = n(71393),
    g = n(486020),
    f = n(998304),
    m = n(817818),
    A = n(967305),
    _ = n(985018),
    b = n(666088),
    E = n(22004);

function O(e) {
    let {
        guildId: t,
        channelId: n
    } = e, {
        ref: l,
        width: O,
        height: y
    } = (0, c.Ay)(), I = i.useCallback(() => {
        null != t && null != n && ((0, m.sy)(t), (0, A.default)({
            guildId: t,
            returnChannelId: n
        }))
    }, [t, n]), v = (0, s.bG)([h.A], () => h.A.getGuild(t)), S = i.useMemo(() => null == v ? null : g.Ay.getGuildSplashURL({
        id: v.id,
        splash: v.splash
    }), [v]), C = (0, d.S)(S);
    return (0, r.jsxs)("div", {
        className: a()(b.kf, E.iW, {
            [E.Me]: null == S
        }),
        ref: l,
        children: [null != S ? (0, r.jsx)(u.A, {
            className: E.xX,
            src: S,
            width: O,
            height: y,
            imageClassName: E.Iv
        }) : (0, r.jsx)(p.A, {}), null != C && null != S && (0, r.jsx)("div", {
            className: E.D7,
            style: {
                background: "linear-gradient(180deg, ".concat((0, f.cb)(C, .16), " 0%, ").concat((0, f.cb)(C, 1), " 100%)")
            }
        }), null != S && (0, r.jsx)("div", {
            className: E.D7
        }), (0, r.jsxs)("div", {
            className: a()(b.Cj, b.Vw),
            children: [(0, r.jsxs)("div", {
                className: b.wx,
                children: [(0, r.jsx)(o.Heading, {
                    variant: "heading-xxl/normal",
                    color: "always-white",
                    children: _.intl.string(_.t.CCmhpF)
                }), (0, r.jsx)(o.Text, {
                    variant: "text-lg/normal",
                    color: "always-white",
                    children: _.intl.string(_.t.gRAHcZ)
                })]
            }), (0, r.jsx)(o.Button, {
                variant: "overlay-primary",
                size: "md",
                text: _.intl.string(_.t.VVFjAC),
                onClick: I
            })]
        })]
    })
}