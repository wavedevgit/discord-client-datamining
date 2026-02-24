/** chunk id: 294454, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Be: () => o,
    aU: () => r,
    fO: () => l,
    vK: () => u
});
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(530912);
let r = "forward-modal";

function l(e) {
    let {
        message: t,
        source: l,
        initialSelectedDestinations: o = [],
        forwardOptions: u,
        onRequestSent: d,
        customSendHandler: c
    } = e;
    (0, i.pp)(t.channel_id, t.id, l), (0, s.mMO)(async () => {
        let {
            ForwardModal: e
        } = await Promise.all([n.e("96758"), n.e("43622"), n.e("8622")]).then(n.bind(n, 911269));
        return n => (0, a.jsx)(e, {
            ...n,
            message: t,
            initialSelectedDestinations: o,
            forwardOptions: u,
            onRequestSent: d,
            customSendHandler: c,
            source: l
        })
    }, {
        modalKey: r
    })
}

function o() {
    (0, s.OoC)(r)
}

function u(e) {
    let {
        message: t,
        failedDestinations: i,
        forwardOptions: r
    } = e;
    (0, s.mMO)(async () => {
        let {
            ForwardFailedAlertModal: e
        } = await n.e("66139").then(n.bind(n, 181622));
        return n => (0, a.jsx)(e, {
            ...n,
            message: t,
            failedDestinations: i,
            forwardOptions: r
        })
    })
}