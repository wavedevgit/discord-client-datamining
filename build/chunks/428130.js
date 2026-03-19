/** chunk id: 428130 params = (module,exports,require) **/
n.d(t, {
    $p: () => O,
    IE: () => I,
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
    _ = n(963852),
    m = n(763754),
    g = n(20851),
    A = n(544028),
    x = n(253932),
    h = n(780964),
    p = n(840065),
    T = n(123857),
    E = n(652215),
    S = n(381941),
    C = n(985018),
    f = n(333056),
    N = n(473169);
let I = {
        COZY: "cozy",
        COMPACT: "compact"
    },
    b = "1337",
    v = e => {
        let t = 0;
        return [(0, u.rh)({
            ...(0, _.Ay)({
                channelId: b,
                content: C.intl.string(C.t.oZxkEq)
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, _.Ay)({
                channelId: b,
                content: (0, o.Mw)(e) ? C.intl.string(C.t["WGb/v7"]) : C.intl.string(C.t["62m4mz"])
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, _.Ay)({
                channelId: b,
                content: C.intl.string(C.t.a0Byo5)
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, _.Ay)({
                channelId: b,
                content: C.intl.string(C.t.bmwEWJ)
            }),
            state: E.cmJ.SENT,
            id: `${t++}`
        }), (0, u.rh)({
            ...(0, _.Ay)({
                channelId: b,
                content: C.intl.string(C.t["hK9QW/"])
            }),
            state: E.cmJ.SENT,
            id: `${t}`
        })]
    },
    j = () => (0, i.jsxs)("div", {
        className: f.cF,
        children: [(0, i.jsxs)("div", {
            className: f.ZT,
            children: [(0, i.jsxs)(d.Text, {
                variant: "text-md/medium",
                children: [" ", C.intl.string(C.t["0EzVst"])]
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: C.intl.string(C.t.PV3dGX)
            })]
        }), (0, i.jsx)(T.Q3, {})]
    }),
    y = () => C.intl.format(C.t.Jae48E, {
        onClick: () => {
            (0, p.openUserSettings)(h.X.SYNC_FORCED_COLORS)
        }
    }),
    O = () => C.intl.format(C.t["5LEQdc"], {
        onAccessibilityClick: () => {
            (0, p.openUserSettings)(h.X.ACCESSIBILITY_PANEL)
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
            [_] = s.useState(() => v(E.NJ8.DARK)),
            [h] = s.useState(() => v(E.NJ8.LIGHT)),
            p = t && n,
            T = (0, o.Mw)(l) ? _ : h;
        return (0, i.jsx)(d.M1G, {
            children: (0, i.jsx)(d.ZpM, {
                className: a()(f.VH, N.C2, e ? f.Me : void 0, `group-spacing-${null!=u?u:e?S.y5:S.ES}`),
                outline: !0,
                "aria-hidden": !0,
                children: T.map((t, n) => (0, i.jsx)(g.A, {
                    author: (0, m.p_)(t),
                    message: t,
                    compact: e,
                    isGroupStart: n % 2 == 0,
                    className: 0 === n ? f.Ck : void 0,
                    hideSimpleEmbedContent: p
                }, t.id))
            })
        })
    }