/** Chunk was on 64228 **/
/** chunk id: 240783, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048);
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    o = n(351906),
    a = n(183555),
    c = n(382120),
    d = n(128490),
    u = n(539548),
    p = n(412775),
    m = n(86404),
    f = n(738759),
    A = n(518477),
    x = n(985018),
    j = n(781425),
    h = n(368519);

function g(e) {
    let {
        section: t,
        user: n,
        currentUser: i,
        displayProfile: r,
        guildId: s,
        channelId: o,
        onClose: a
    } = e;
    return t === A.RP.ACTIVITY ? (0, l.jsx)(u.A, {
        user: n,
        currentUser: i,
        guildId: s,
        onClose: a
    }) : t === A.RP.MUTUAL_FRIENDS ? (0, l.jsx)(m.A, {
        user: n,
        guildId: s,
        channelId: o,
        onClose: a
    }) : t === A.RP.MUTUAL_GUILDS ? (0, l.jsx)(f.A, {
        user: n,
        onClose: a
    }) : t === A.RP.BOT_DATA_ACCESS ? (0, l.jsx)(c.A, {
        user: n
    }) : t === A.RP.BOT_INFO ? (0, l.jsx)(d.A, {
        user: n,
        displayProfile: r,
        guildId: s,
        onClose: a
    }) : (0, l.jsx)(p.A, {
        user: n,
        displayProfile: r,
        onClose: a
    })
}

function v(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: c,
        guildId: d,
        items: u,
        initialSection: p = A.RP.USER_INFO,
        onClose: m
    } = e, {
        trackUserProfileAction: f
    } = (0, a.NJ)(), v = (0, r.bG)([o.A], () => o.A.hidePersonalInformation), [b, I] = i.useState(() => {
        var e, t, n;
        return null != (e = null == (t = u.find(e => {
            let {
                section: t
            } = e;
            return t === p
        })) ? void 0 : t.section) ? e : null == (n = u[0]) ? void 0 : n.section
    });
    i.useEffect(() => {
        null == u.find(e => e.section === b) && I(u[0].section)
    }, [u, b]);
    let y = i.useCallback(e => {
        f({
            action: "PRESS_SECTION",
            section: e
        }), I(e)
    }, [f]);
    return v ? (0, l.jsx)("div", {
        className: h.kL,
        children: (0, l.jsxs)("div", {
            className: j.Ie,
            children: [(0, l.jsx)("div", {
                className: j.hB
            }), (0, l.jsx)("div", {
                className: j.BI,
                children: x.intl.string(x.t.Br1ls3)
            })]
        })
    }) : (0, l.jsxs)("div", {
        className: h.kL,
        children: [(0, l.jsx)(s.VQ0, {
            className: h.$H,
            type: "top",
            selectedItem: b,
            onItemSelect: y,
            children: u.map(e => {
                let {
                    section: t,
                    text: n
                } = e;
                return (0, l.jsx)(s.VQ0.Item, {
                    className: h.YU,
                    id: t,
                    "aria-label": n,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: n
                    })
                }, t)
            })
        }), (0, l.jsx)(g, {
            items: u,
            section: b,
            user: t,
            currentUser: n,
            displayProfile: c,
            guildId: d,
            onClose: m
        })]
    })
}