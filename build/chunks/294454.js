/** chunk id: 294454 params = (module,exports,require) **/
n.d(t, {
    Be: () => s,
    aU: () => o,
    fO: () => l,
    vK: () => c
});
var a = n(627968);
n(64700);
var i = n(397927),
    r = n(530912);
let o = "forward-modal";

function l(e) {
    let {
        message: t,
        source: l,
        initialSelectedDestinations: s = [],
        forwardOptions: c,
        onRequestSent: d,
        customSendHandler: u
    } = e;
    (0, r.pp)(t.channel_id, t.id, l), (0, i.mMO)(async () => {
        let {
            ForwardModal: e
        } = await Promise.all([n.e("96758"), n.e("79133"), n.e("74867")]).then(n.bind(n, 911269));
        return n => (0, a.jsx)(e, {
            ...n,
            message: t,
            initialSelectedDestinations: s,
            forwardOptions: c,
            onRequestSent: d,
            customSendHandler: u,
            source: l
        })
    }, {
        modalKey: o
    })
}

function s() {
    (0, i.OoC)(o)
}

function c(e) {
    let {
        message: t,
        failedDestinations: r,
        forwardOptions: o
    } = e;
    (0, i.mMO)(async () => {
        let {
            ForwardFailedAlertModal: e
        } = await n.e("66139").then(n.bind(n, 181622));
        return n => (0, a.jsx)(e, {
            ...n,
            message: t,
            failedDestinations: r,
            forwardOptions: o
        })
    })
}