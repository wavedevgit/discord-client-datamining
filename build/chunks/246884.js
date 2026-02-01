/** chunk id: 246884, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(442433),
    o = n(688810),
    c = n(272613),
    u = n(398884),
    d = n(772366),
    p = n(728321),
    h = n(260509),
    g = n(71393),
    f = n(287809),
    m = n(531053),
    b = n(606256),
    A = n(652215),
    y = n(819638),
    O = n(985018),
    j = n(283237);
let x = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};

function _(e) {
    (0, a.L3)(e, async () => {
        let {
            default: e
        } = await n.e("17288").then(n.bind(n, 4571));
        return t => (0, r.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, t))
    })
}

function v(e) {
    let {
        disableTooltip: t,
        lastTargetNode: n
    } = e, a = (0, i.yK)([g.A], () => g.A.getGuildsArray()), v = (0, i.bG)([f.default], () => f.default.getCurrentUser()), E = l.useMemo(() => a.some(e => (0, h.bM)(e, v)), [a, v]), C = (0, s.red)(e => (0, s.fDT)(e, y.fc)), {
        analyticsLocations: S
    } = (0, o.Ay)(), I = (0, r.jsx)(b.A, {
        showPill: !1,
        id: "create-join-button",
        onClick: () => {
            (0, u.Sn)() ? (0, d.A)({
                analyticsSource: {
                    page: A.ThZ.CREATE_JOIN_GUILD_MODAL
                },
                analyticsLocation: {
                    page: A.ThZ.CREATE_JOIN_GUILD_MODAL,
                    section: A.JJy.GUILD_CAP_UPSELL_MODAL
                },
                analyticsLocations: S
            }) : c.A.openCreateGuildModal({
                location: "Guild List"
            })
        },
        selected: C,
        onContextMenu: _,
        tooltip: O.intl.string(O.t.l5WIbf),
        icon: s.U1e
    });
    return t ? I : (0, r.jsx)("div", {
        className: j.Uq,
        children: (0, r.jsxs)(p.A, {
            tutorialId: E ? "create-more-servers" : "create-first-server",
            inlineSpecs: x,
            position: "right",
            children: [I, null != n && (0, r.jsx)(m.Ay, {
                name: O.intl.string(O.t["45xjM5"]),
                targetNode: n,
                below: !0,
                noCombine: !0
            })]
        })
    })
}