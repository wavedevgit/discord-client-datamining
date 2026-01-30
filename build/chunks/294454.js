/** chunk id: 294454, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Be: () => d,
    aU: () => s,
    fO: () => c,
    vK: () => u
});
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(530912);

function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function o(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let s = "forward-modal";

function c(e) {
    let {
        message: t,
        source: c,
        initialSelectedDestinations: d = [],
        forwardOptions: u,
        onRequestSent: _,
        customSendHandler: m
    } = e;
    (0, a.pp)(t.channel_id, t.id, c), (0, l.mMO)(async () => {
        let {
            ForwardModal: e
        } = await Promise.all([n.e("96758"), n.e("43622"), n.e("12539")]).then(n.bind(n, 911269));
        return n => (0, r.jsx)(e, o(i({}, n), {
            message: t,
            initialSelectedDestinations: d,
            forwardOptions: u,
            onRequestSent: _,
            customSendHandler: m,
            source: c
        }))
    }, {
        modalKey: s
    })
}

function d() {
    (0, l.OoC)(s)
}

function u(e) {
    let {
        message: t,
        failedDestinations: a,
        forwardOptions: s
    } = e;
    (0, l.mMO)(async () => {
        let {
            ForwardFailedAlertModal: e
        } = await n.e("66139").then(n.bind(n, 181622));
        return n => (0, r.jsx)(e, o(i({}, n), {
            message: t,
            failedDestinations: a,
            forwardOptions: s
        }))
    })
}