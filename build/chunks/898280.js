/** Chunk was on 78528 **/
/** chunk id: 898280, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    p = n(985018),
    h = n(990014);
let f = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    }),
    g = l.memo(function(e) {
        let {
            channel: t,
            isLastItem: n
        } = e, l = (0, i.bG)([a.A], () => a.A.useReducedMotion), g = (0, i.bG)([u.A], () => u.A.can(d.xBc.SEND_MESSAGES_IN_THREADS, t)), m = (0, o.s5)(t), b = (0, i.bG)([c.default], () => c.default.getId());
        return n ? g && !m && t.ownerId !== b ? (0, r.jsxs)("div", {
            className: h.aP,
            children: [(0, r.jsx)(s.akl, {
                importData: f,
                shouldAnimate: !l,
                className: h.lY
            }), (0, r.jsxs)("div", {
                className: h.FS,
                children: [(0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children: p.intl.string(p.t.OmBThA)
                }), (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: p.intl.string(p.t.zcs5ko)
                })]
            })]
        }) : null : (0, r.jsx)("div", {
            className: h.yF
        })
    })