/** chunk id: 760207 params = (module,exports,require) **/
t.d(n, {
    A: () => j,
    W: () => N
});
var l = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(812771),
    d = t(274541),
    c = t(761640),
    o = t(769765),
    u = t(808728),
    _ = t(71393),
    h = t(576705),
    x = t(954571),
    m = t(637248),
    g = t(743015),
    A = t(652215),
    C = t(746080),
    f = t(985018),
    p = t(459265);

function N(e) {
    let {
        channelId: n
    } = e;
    return (0, l.jsx)(r.A, {
        sidebarType: r.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(d.A, {
            channelId: n,
            baseChannelId: C.VV.CHANNEL_BROWSER
        })
    })
}

function j(e) {
    let {
        guildId: n
    } = e, [r, d] = i.useState(""), N = (0, s.bG)([_.A], () => _.A.getGuild(n)), j = (0, s.bG)([u.Ay], () => u.Ay.getChannels(n)), v = (0, s.bG)([o.A], () => o.A.getCategories(n)), b = (0, m.vh)(n, v, j, r), I = (0, s.bG)([h.A], () => h.A.canWithPartialContext(A.xBc.MANAGE_CHANNELS, {
        guildId: n
    })), E = (0, s.bG)([c.Ay], () => null != c.Ay.getCurrentSidebarChannelId(C.VV.CHANNEL_BROWSER)), S = i.useCallback(() => d(""), [d]), w = i.useCallback(() => {
        (0, a.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([t.e("64233"), t.e("52719")]).then(t.bind(t, 409200));
            return t => (0, l.jsx)(e, {
                ...t,
                channelType: null,
                guildId: n
            })
        })
    }, [n]);
    return null == N ? null : (0, l.jsxs)("div", {
        className: p.kw,
        children: [(0, l.jsxs)("div", {
            className: p.wx,
            children: [(0, l.jsx)(a.IWV, {
                query: r,
                onChange: e => {
                    "" === r && "" !== e && x.default.track(A.HAw.SEARCH_STARTED, {
                        search_type: "channel browser"
                    }), d(e.toLowerCase())
                },
                onClear: S,
                placeholder: f.intl.string(f.t.s5MnmC)
            }), I ? (0, l.jsx)(a.Button, {
                icon: a.j96,
                onClick: w,
                text: f.intl.string(f.t.CumH4u)
            }) : null]
        }), (0, l.jsx)(g.A, {
            className: p.T,
            channels: j,
            categories: b,
            guild: N,
            hasSidebar: E
        })]
    })
}