/** chunk id: 606532, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => s
});
var n = r(627968);
r(64700);
var l = r(397927),
    i = r(652215);

function s() {
    (0, l.mMO)(async () => {
        let {
            default: e
        } = await r.e("32482").then(r.bind(r, 861177));
        return t => {
            var r, l;
            return (0, n.jsx)(e, (r = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({}, t), l = l = {
                source: {
                    page: i.liQ.USER_SETTINGS,
                    section: i.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: i.ZSU.BUTTON_CTA,
                    type: i.AnalyticsObjectTypes.BUY
                }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
            }), r))
        }
    })
}