/** chunk id: 294454 params = (module,exports,require) **/
l.d(t, {
    Be: () => o,
    aU: () => i,
    fO: () => r,
    vK: () => c
});
var n = l(627968);
l(64700);
var a = l(397927),
    s = l(530912);
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
    (0, s.pp)(t.channel_id, t.id, r), (0, a.mMO)(async () => {
        let {
            ForwardModal: e
        } = await Promise.all([l.e("96758"), l.e("79133"), l.e("74867")]).then(l.bind(l, 911269));
        return l => (0, n.jsx)(e, {
            ...l,
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
    (0, a.OoC)(i)
}

function c(e) {
    let {
        message: t,
        failedDestinations: s,
        forwardOptions: i
    } = e;
    (0, a.mMO)(async () => {
        let {
            ForwardFailedAlertModal: e
        } = await l.e("66139").then(l.bind(l, 181622));
        return l => (0, n.jsx)(e, {
            ...l,
            message: t,
            failedDestinations: s,
            forwardOptions: i
        })
    })
}