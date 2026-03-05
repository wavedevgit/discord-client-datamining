/** chunk id: 794927, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(272812),
    a = n(200749),
    r = n(652215),
    o = n(985018),
    c = n(492955),
    d = n(828230);

function u(e) {
    let {
        channel: t,
        guild: u,
        width: h,
        inPopout: A
    } = e;
    return (0, i.jsx)(l.A, {
        className: c.zr,
        children: (0, i.jsx)(a.A, {
            artURL: d,
            size: (0, a.J)(h),
            header: o.intl.string(o.t.O4FiWi),
            onCTAClick: () => (0, s.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guild: u,
                    channel: t,
                    source: r.PE1.CHANNEL_CALL
                })
            }, {
                contextKey: A ? s.KX8 : s.SYi
            }),
            callToAction: o.intl.string(o.t.VINpSK)
        })
    })
}