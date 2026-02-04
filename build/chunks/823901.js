/** chunk id: 823901, original params: e,t,n (module,exports,require) **/
n.d(t, {
    H: () => E,
    y: () => b
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(258585),
    s = n(279250),
    u = n(880144),
    c = n(72432),
    d = n(929921),
    h = n(734057),
    p = n(71393),
    f = n(430452),
    g = n(576705),
    m = n(309010),
    A = n(287809),
    y = n(652215),
    O = n(753070),
    v = n(985018);

function b(e) {
    let {
        pid: t,
        analyticsLocation: n,
        allowOneClickGoLive: i = !1,
        onBeforeShowModal: a,
        onOneClickGoLive: o,
        appContext: c
    } = e, d = (0, l.bG)([m.A], () => m.A.getVoiceChannelId()), y = (0, l.bG)([h.A], () => h.A.getChannel(d), [d]), O = (0, l.bG)([A.default], () => A.default.getCurrentUser()), v = (0, l.bG)([f.A], () => (0, u.A)(f.A)), b = (0, l.bG)([p.A, g.A], () => null != y && (0, s.vz)(y, p.A, g.A));
    return r.useCallback(async () => {
        await _({
            pid: t,
            voiceChannelId: d,
            user: O,
            canGoLive: v,
            canStream: b,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: a,
            onOneClickGoLive: o,
            appContext: c
        })
    }, [t, d, O, v, b, n, i, a, o, c])
}
async function E(e) {
    let {
        pid: t,
        analyticsLocation: n,
        allowOneClickGoLive: i = !1,
        onBeforeShowModal: r,
        onOneClickGoLive: l,
        appContext: a
    } = e, o = m.A.getVoiceChannelId(), c = h.A.getChannel(o), d = A.default.getCurrentUser(), y = null != c && (0, s.vz)(c, p.A, g.A), O = (0, u.A)(f.A);
    await _({
        pid: t,
        voiceChannelId: o,
        user: d,
        canGoLive: O,
        canStream: y,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: r,
        onOneClickGoLive: l,
        appContext: a
    })
}
async function _(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: l,
        canGoLive: s,
        canStream: u,
        allowOneClickGoLive: h,
        onBeforeShowModal: p,
        onOneClickGoLive: f,
        appContext: g
    } = e;
    if (s && u) {
        if (h && null !== r) {
            let e = d.A.getState().preset;
            if (e === O.jQ.PRESET_DOCUMENTS) {
                let {
                    allowAutoQuality: t
                } = (0, o.eO)({
                    location: "overlay _goLive"
                });
                e = t ? O.jQ.PRESET_AUTO : O.jQ.PRESET_VIDEO
            }
            let [n] = await (0, c.A)(t, {
                preset: e
            });
            if (n) {
                null == f || f();
                return
            }
        }
        if (null == l) return void(0, a.showToast)((0, a.createToast)(v.intl.string(v.t.OKnWyb), a.ToastType.FAILURE, {
            appContext: y.BRT.OVERLAY
        }));
        null == p || p(), (0, a.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
            return n => {
                var r, l;
                return (0, i.jsx)(e, (r = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), i.forEach(function(t) {
                            var i;
                            i = n[t], t in e ? Object.defineProperty(e, t, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = i
                        })
                    }
                    return e
                }({}, n), l = l = {
                    sourcePID: t,
                    selectSource: !1
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, i)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
                }), r))
            }
        }, {
            contextKey: null != g ? (0, a.TId)(g) : void 0
        })
    }
}