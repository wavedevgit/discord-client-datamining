/** chunk id: 696452 params = (module,exports,require) **/
n.d(e, {
    default: () => c
});
var r = n(627968);
n(64700);
var a = n(397927),
    l = n(975807),
    s = n(900549),
    i = n(985018),
    o = n(117816);

function c(t) {
    let {
        url: e,
        onClose: n,
        transitionState: c
    } = t;
    return (0, r.jsx)(a.kpP, {
        transitionState: c,
        onClose: n,
        graphic: {
            src: o.A,
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
                (0, l.A)(e, !0)
            },
            variant: "secondary"
        }, {
            text: i.intl.string(i.t["xl8R+2"]),
            onClick: n
        }],
        children: (0, r.jsx)(s.w, {
            url: e
        })
    })
}