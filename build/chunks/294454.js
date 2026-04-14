/** chunk id: 294454 params = (module,exports,require) **/
n.d(t, {
    Be: () => o,
    aU: () => i,
    fO: () => r,
    vK: () => c
});
var a = n(627968);
n(64700);
var l = n(397927),
    s = n(530912);
let i = "forward-modal";

function r(e) {
    let {
        message: t,
        source: r,
        initialSelectedDestinations: o = [],
        forwardOptions: c,
        onRequestSent: d,
        customSendHandler: u
    } = e;
    (0, s.pp)(t.channel_id, t.id, r), (0, l.mMO)(async () => {
        let {
            ForwardModal: e
        } = await Promise.all([n.e("43808"), n.e("43622"), n.e("39773")]).then(n.bind(n, 911269));
        return n => (0, a.jsx)(e, {
            ...n,
            message: t,
            initialSelectedDestinations: o,
            forwardOptions: c,
            onRequestSent: d,
            customSendHandler: u,
            source: r
        })
    }, {
        modalKey: i
    })
}

function o() {
    (0, l.OoC)(i)
}

function c(e) {
    let {
        message: t,
        failedDestinations: s,
        forwardOptions: i
    } = e;
    (0, l.mMO)(async () => {
        let {
            ForwardFailedAlertModal: e
        } = await n.e("66139").then(n.bind(n, 181622));
        return n => (0, a.jsx)(e, {
            ...n,
            message: t,
            failedDestinations: s,
            forwardOptions: i
        })
    })
}