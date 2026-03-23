/** chunk id: 428130 params = (module,exports,require) **/
n.d(t, {
    $p: () => O,
    IE: () => N,
    Ys: () => y,
    ac: () => j,
    y2: () => R
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(582754),
    d = n(397927),
    c = n(775602),
    u = n(141468),
    m = n(963852),
    _ = n(763754),
    g = n(20851),
    A = n(544028),
    x = n(253932),
    p = n(780964),
    h = n(840065),
    T = n(123857),
    E = n(652215),
    f = n(381941),
    S = n(985018),
    C = n(333056),
    b = n(473169);
let N = {
        COZY: "cozy",
        COMPACT: "compact"
    },
    I = "1337",
    v = e => {
        let t = 0;
        return [(0, u.rh)({
            ...(0, m.Ay)({
                channelId: I,
                content: S.intl.string(S.t.oZxkEq)
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, m.Ay)({
                channelId: I,
                content: (0, o.Mw)(e) ? S.intl.string(S.t["WGb/v7"]) : S.intl.string(S.t["62m4mz"])
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, m.Ay)({
                channelId: I,
                content: S.intl.string(S.t.a0Byo5)
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, m.Ay)({
                channelId: I,
                content: S.intl.string(S.t.bmwEWJ)
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, m.Ay)({
                channelId: I,
                content: S.intl.string(S.t["hK9QW/"])
            }),
            state: E.cmJ.SENT,
            id: `${t}`
        })]
    },
    j = () => (0, i.jsxs)("div", {
        className: C.cF,
        children: [(0, i.jsxs)("div", {
            className: C.ZT,
            children: [(0, i.jsxs)(d.Text, {
                variant: "text-md/medium",
                children: [" ", S.intl.string(S.t["0EzVst"])]
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: S.intl.string(S.t.PV3dGX)
            })]
        }), (0, i.jsx)(T.Q3, {})]
    }),
    y = () => S.intl.format(S.t.Jae48E, {
        onClick: () => {
            (0, h.openUserSettings)(p.X.SYNC_FORCED_COLORS)
        }
    }),
    O = () => S.intl.format(S.t["5LEQdc"], {
        onAccessibilityClick: () => {
            (0, h.openUserSettings)(p.X.ACCESSIBILITY_PANEL)
        }
    }),
    R = () => {
        let e = x.hH.useSetting(),
            t = x.hD.useSetting(),
            n = x.rs.useSetting(),
            {
                theme: l,
                messageGroupSpacing: u
            } = (0, r.cf)([A.A, c.A], () => ({
                theme: A.A.theme,
                messageGroupSpacing: c.A.messageGroupSpacing
            })),
            [m] = s.useState(() => v(E.NJ8.DARK)),
            [p] = s.useState(() => v(E.NJ8.LIGHT)),
            h = t && n,
            T = (0, o.Mw)(l) ? m : p;
        return (0, i.jsx)(d.M1G, {
            children: (0, i.jsx)(d.ZpM, {
                className: a()(C.VH, b.C2, e ? C.Me : void 0, `group-spacing-${null!=u?u:e?f.y5:f.ES}`),
                outline: !0,
                "aria-hidden": !0,
                children: T.map((t, n) => (0, i.jsx)(g.A, {
                    author: (0, _.p_)(t),
                    message: t,
                    compact: e,
                    isGroupStart: n % 2 == 0,
                    className: 0 === n ? C.Ck : void 0,
                    hideSimpleEmbedContent: h
                }, t.id))
            })
        })
    }