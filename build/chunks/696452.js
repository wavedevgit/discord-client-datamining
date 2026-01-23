/** Chunk was on 98597 **/
/** chunk id: 696452, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => o
});
var a = n(627968);
n(64700);
var l = n(397927),
    r = n(975807),
    s = n(900549),
    i = n(985018),
    c = n(117816);

function o(t) {
    let {
        url: e,
        onClose: n,
        transitionState: o
    } = t;
    return (0, a.jsx)(l.kpP, {
        transitionState: o,
        onClose: n,
        graphic: {
            src: c.A,
            type: "image"
        },
        gradientColor: "blue",
        title: i.intl.string(i.t["biy1X/"]),
        subtitle: i.intl.format(i.t.J86cyX, {
            url: e
        }),
        actions: [{
            text: i.intl.string(i.t.gQrLtr),
            onClick: () => {
                (0, r.A)(e, !0)
            },
            variant: "secondary"
        }, {
            text: i.intl.string(i.t["xl8R+2"]),
            onClick: n
        }],
        children: (0, a.jsx)(s.w, {
            url: e
        })
    })
}