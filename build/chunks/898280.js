/** chunk id: 898280 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(775602),
    o = n(406704),
    c = n(961350),
    d = n(576705),
    u = n(652215),
    h = n(985018),
    m = n(588141);
let A = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    }),
    g = l.memo(function(e) {
        let {
            channel: t,
            isLastItem: n
        } = e, l = (0, s.bG)([r.A], () => r.A.useReducedMotion), g = (0, s.bG)([d.A], () => d.A.can(u.xBc.SEND_MESSAGES_IN_THREADS, t)), p = (0, o.s5)(t), _ = (0, s.bG)([c.default], () => c.default.getId());
        return n ? g && !p && t.ownerId !== _ ? (0, i.jsxs)("div", {
            className: m.aP,
            children: [(0, i.jsx)(a.akl, {
                importData: A,
                shouldAnimate: !l,
                className: m.lY
            }), (0, i.jsxs)("div", {
                className: m.FS,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: h.intl.string(h.t.OmBThA)
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: h.intl.string(h.t.zcs5ko)
                })]
            })]
        }) : null : (0, i.jsx)("div", {
            className: m.yF
        })
    })