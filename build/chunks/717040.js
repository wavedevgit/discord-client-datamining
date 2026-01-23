/** Chunk was on 67096 **/
/** chunk id: 717040, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => c
}), t(896048);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(732955),
    o = t(397927),
    s = t(915089),
    d = t(985018),
    u = t(706494);

function c(e) {
    let {
        disabled: A = !1,
        disabledTooltip: t,
        published: l,
        submitting: c = !1,
        onClick: g
    } = e, p = (0, s.GV)(), [f, m] = n.useState(l);
    return n.useEffect(() => {
        m(e => e || l)
    }, [l]), (0, r.jsxs)("div", {
        className: a()({
            [u.g$]: !A && !l,
            [u.oZ]: f
        }, u.nw),
        children: [(0, r.jsxs)("div", {
            className: u.kL,
            children: [(0, r.jsxs)("div", {
                className: u.S7,
                children: [(0, r.jsx)(o.Heading, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: l ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf)
                }), (0, r.jsx)(o.Text, {
                    id: p,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
                })]
            }), (0, r.jsx)(i.$nd, {
                text: l ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
                icon: l ? o.G3N : o.BZI,
                iconPosition: "end",
                variant: l ? "critical-primary" : "expressive",
                "aria-describedby": p,
                "aria-disabled": A,
                disabled: A,
                onClick: A ? void 0 : g,
                loading: c
            })]
        }), A && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t
        })]
    })
}