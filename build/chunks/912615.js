/** chunk id: 912615 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(73153),
    d = n(271866),
    c = n(956518),
    u = n(235986),
    m = n(147964),
    _ = n(985018),
    g = n(361151),
    A = n(473169);
let x = /^\d+$|^$/;

function p(e) {
    let {
        onClose: t,
        transitionState: n
    } = e, {
        authorizedApplicationId: p,
        authorizationError: h,
        authorizing: f
    } = (0, a.cf)([m.A], () => ({
        authorizedApplicationId: m.A.testModeApplicationId,
        authorizationError: m.A.error,
        authorizing: m.A.isFetchingAuthorization
    })), [T, E] = s.useState(p ?? ""), [S, b] = s.useState("8080"), [C, N] = s.useState("localhost"), v = x.test(T);
    async function I() {
        d.SH();
        let e = function(e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return `https://localhost:${t}`;
                case "proxy":
                    return (0, c.Ay)(n)
            }
        }(C, S, T);
        null != await d.q1(T, e) && t()
    }
    s.useEffect(() => () => o.h.wait(() => d.SH()), []);
    let j = null != p && p === T,
        y = j ? function() {
            d.cL(), E(""), N(null)
        } : I,
        O = s.useMemo(() => [{
            loading: f,
            disabled: !v || 0 === T.length || "localhost" === C && 0 === S.length,
            variant: j ? "critical-primary" : "active",
            text: j ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
            onClick: y
        }], [T.length, f, j, v, S.length, y, C]);
    return (0, i.jsxs)(l.Modal, {
        title: _.intl.string(_.t.f8fzky),
        subtitle: _.intl.string(_.t.a6Vill),
        actions: O,
        onClose: t,
        transitionState: n,
        children: [null == h ? null : (0, i.jsx)("div", {
            className: A.SX,
            children: (0, i.jsx)(r.wx6, {
                type: "critical",
                children: h
            })
        }), (0, i.jsxs)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.START,
            children: [(0, i.jsx)("div", {
                className: g.I,
                children: (0, i.jsx)(r.ksK, {
                    label: _.intl.string(_.t.P6TzgI),
                    required: !0,
                    value: T,
                    maxLength: 19,
                    error: v ? null : _.intl.string(_.t.gPNgKO),
                    onChange: function(e) {
                        E(e)
                    },
                    disabled: f
                })
            }), (0, i.jsx)("div", {
                className: g.I,
                children: (0, i.jsx)(r.l6P, {
                    selectionMode: "single",
                    label: _.intl.string(_.t["/GTqXG"]),
                    disabled: !v || "" === T,
                    value: C,
                    options: [{
                        value: "localhost",
                        label: _.intl.string(_.t["+Y9Y6r"]),
                        id: "localhost"
                    }, {
                        value: "proxy",
                        label: _.intl.string(_.t.uaksyW),
                        id: "proxy"
                    }],
                    onSelectionChange: function(e) {
                        N(e)
                    },
                    placeholder: "URL Origin Type"
                })
            }), "localhost" !== C ? null : (0, i.jsx)("div", {
                className: g.I,
                children: (0, i.jsx)(r.ksK, {
                    required: !0,
                    label: _.intl.string(_.t.fF4zxq),
                    value: S,
                    maxLength: 5,
                    onChange: e => b(e),
                    disabled: f
                })
            })]
        })]
    })
}