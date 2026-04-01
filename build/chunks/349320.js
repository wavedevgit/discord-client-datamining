/** chunk id: 349320 params = (module,exports,require) **/
n.d(t, {
    L: () => S
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(51264),
    d = n(820284),
    c = n(765671),
    u = n(793574),
    A = n(688810),
    h = n(757780),
    _ = n(748319),
    m = n(355205),
    p = n(652234),
    g = n(489683),
    E = n(947926),
    I = n(366811),
    f = n(652215),
    C = n(985018),
    T = n(325593);

function N(e) {
    let {
        analyticsLocations: t
    } = (0, A.Ay)(u.A.ACTIVITY_PANEL), n = (0, I.A)(e => {
        let {
            guildId: t
        } = e;
        return t
    });
    return (0, i.jsx)(A.f5, {
        value: t,
        children: (0, i.jsx)(m.A, {
            ...e,
            guildId: n
        })
    })
}
let S = l.memo(function() {
    let e = l.useRef(null);
    (0, c.i4)(e, e => {
        let {
            height: t
        } = e;
        document.body.style.setProperty("--custom-app-panels-height", `${t}px`)
    }, []);
    let {
        isSorting: t
    } = (0, h.A)();
    return (0, i.jsx)("section", {
        ref: e,
        className: r()(T.C3, {
            [T.aB]: t
        }),
        "aria-label": C.intl.string(C.t.vTl6Lk),
        children: (0, i.jsxs)(s.xpW, {
            containerRef: e,
            children: [(0, i.jsx)(o.A, {}), (0, i.jsx)(E.A, {}), (0, i.jsx)(p.A, {}), (0, i.jsx)(d.A, {
                section: f.JJy.ACTIVITY_PANEL,
                children: (0, i.jsx)(N, {
                    className: T.iz
                })
            }), (0, i.jsx)(d.A, {
                section: f.JJy.RTC_CONNECTION_PANEL,
                children: (0, i.jsx)(g.A, {})
            }), (0, i.jsx)(d.A, {
                section: f.JJy.ACCOUNT_PANEL,
                children: (0, i.jsx)(_.A, {})
            })]
        })
    })
})