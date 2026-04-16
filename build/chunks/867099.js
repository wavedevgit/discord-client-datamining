/** chunk id: 867099 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(397927),
    o = n(73153),
    d = n(271866),
    c = n(956518),
    u = n(235986),
    m = n(147964),
    g = n(985018),
    _ = n(291630),
    x = n(818050);
let h = /^\d+$|^$/;

function A(e) {
    let {
        onClose: t,
        transitionState: n
    } = e, {
        authorizedApplicationId: A,
        authorizationError: p,
        authorizing: T
    } = (0, r.cf)([m.A], () => ({
        authorizedApplicationId: m.A.testModeApplicationId,
        authorizationError: m.A.error,
        authorizing: m.A.isFetchingAuthorization
    })), [f, S] = s.useState(A ?? ""), [E, b] = s.useState("8080"), [C, v] = s.useState("localhost"), N = h.test(f);
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
        }(C, E, f);
        null != await d.q1(f, e) && t()
    }
    s.useEffect(() => () => o.h.wait(() => d.SH()), []);
    let j = null != A && A === f,
        y = j ? function() {
            d.cL(), S(""), v(null)
        } : I,
        O = s.useMemo(() => [{
            loading: T,
            disabled: !N || 0 === f.length || "localhost" === C && 0 === E.length,
            variant: j ? "critical-primary" : "active",
            text: j ? g.intl.string(g.t.d6TR3I) : g.intl.string(g.t.qwuK5I),
            onClick: y
        }], [f.length, T, j, N, E.length, y, C]);
    return (0, i.jsxs)(l.Modal, {
        title: g.intl.string(g.t.f8fzky),
        subtitle: g.intl.string(g.t.a6Vill),
        actions: O,
        onClose: t,
        transitionState: n,
        children: [null == p ? null : (0, i.jsx)("div", {
            className: x.SX,
            children: (0, i.jsx)(a.wx6, {
                type: "critical",
                children: p
            })
        }), (0, i.jsxs)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.START,
            children: [(0, i.jsx)("div", {
                className: _.I,
                children: (0, i.jsx)(a.ksK, {
                    label: g.intl.string(g.t.P6TzgI),
                    required: !0,
                    value: f,
                    maxLength: 19,
                    error: N ? null : g.intl.string(g.t.gPNgKO),
                    onChange: function(e) {
                        S(e)
                    },
                    disabled: T
                })
            }), (0, i.jsx)("div", {
                className: _.I,
                children: (0, i.jsx)(a.l6P, {
                    selectionMode: "single",
                    label: g.intl.string(g.t["/GTqXG"]),
                    disabled: !N || "" === f,
                    value: C,
                    options: [{
                        value: "localhost",
                        label: g.intl.string(g.t["+Y9Y6r"]),
                        id: "localhost"
                    }, {
                        value: "proxy",
                        label: g.intl.string(g.t.uaksyW),
                        id: "proxy"
                    }],
                    onSelectionChange: function(e) {
                        v(e)
                    },
                    placeholder: "URL Origin Type"
                })
            }), "localhost" !== C ? null : (0, i.jsx)("div", {
                className: _.I,
                children: (0, i.jsx)(a.ksK, {
                    required: !0,
                    label: g.intl.string(g.t.fF4zxq),
                    value: E,
                    maxLength: 5,
                    onChange: e => b(e),
                    disabled: T
                })
            })]
        })]
    })
}