/** chunk id: 898280, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(775602),
    o = n(406704),
    c = n(961350),
    u = n(576705),
    d = n(652215),
    h = n(985018),
    p = n(990014);
let g = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    }),
    f = l.memo(function(e) {
        let {
            channel: t,
            isLastItem: n
        } = e, l = (0, i.bG)([a.A], () => a.A.useReducedMotion), f = (0, i.bG)([u.A], () => u.A.can(d.xBc.SEND_MESSAGES_IN_THREADS, t)), m = (0, o.s5)(t), b = (0, i.bG)([c.default], () => c.default.getId());
        return n ? f && !m && t.ownerId !== b ? (0, r.jsxs)("div", {
            className: p.aP,
            children: [(0, r.jsx)(s.akl, {
                importData: g,
                shouldAnimate: !l,
                className: p.lY
            }), (0, r.jsxs)("div", {
                className: p.FS,
                children: [(0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children: h.intl.string(h.t.OmBThA)
                }), (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: h.intl.string(h.t.zcs5ko)
                })]
            })]
        }) : null : (0, r.jsx)("div", {
            className: p.yF
        })
    })