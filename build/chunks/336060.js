/** chunk id: 336060, original params: e,t,n (module,exports,require) **/
n.d(t, {
    n: () => a
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(652215);

function a() {
    (0, l.mMO)(async () => {
        let {
            default: e
        } = await n.e("90617").then(n.bind(n, 663072));
        return t => (0, r.jsx)(e, function(e) {
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
        }({
            analyticsSource: i.ThZ.VOICE_FILTERS,
            analyticsLocation: {
                section: i.JJy.VOICE_FILTERS_UPSELL_MODAL,
                object: i.ZSU.BUTTON_CTA
            }
        }, t))
    })
}