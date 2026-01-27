/** Chunk was on 41727 **/
/** chunk id: 699022, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(688810),
    o = n(274372),
    c = n(572164),
    u = n(399925),
    d = n(670470),
    p = n(709562),
    h = n(616356),
    f = n(961350),
    g = n(313961),
    m = n(384059),
    b = n(806931),
    A = n(985018),
    y = n(342910);

function _(e) {
    let {
        channel: t
    } = e, {
        parentAnalyticsLocation: n
    } = (0, a.Ay)(), _ = (0, i.bG)([g.A], () => g.A.getSelectedParticipant(t.id)), O = (null == _ ? void 0 : _.type) === b.lp.STREAM, j = (0, i.bG)([h.A], () => O ? h.A.getActiveStreamForStreamKey(_.id) : null), {
        ignoreSenderPreference: v
    } = d.A.useExperiment({
        location: "ActionBarClipsButton"
    }, {
        autoTrackExposure: !1
    }), {
        viewerClippingAllowed: x,
        isAtMaxSavingClipOperations: E
    } = (0, i.cf)([o.A], () => ({
        viewerClippingAllowed: null != j && (o.A.isViewerClippingAllowedForUser(j.ownerId) || v),
        isAtMaxSavingClipOperations: o.A.getIsAtMaxSaveClipOperations()
    })), C = (0, c.Et)(), S = (null == j ? void 0 : j.ownerId) === f.default.getId(), I = !C || !(S || x) || E || null == _, N = l.useCallback(e => {
        var t, n;
        return (0, r.jsx)(s.xpe, (t = function(e) {
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
        }({}, e), n = n = {
            color: "currentColor"
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }, []);
    return (0, r.jsx)(p.A, {
        className: y.g,
        onClick: () => {
            I || ((0, m.X)(n, m.O.CLIP), S ? (0, u.l0)() : (0, u.yd)(_.id))
        },
        disabled: I,
        iconComponent: N,
        label: null == j ? A.intl.string(A.t.eg5qtV) : S || x ? C ? E ? void 0 : A.intl.string(A.t.U4URzP) : A.intl.string(A.t.wSS1yN) : A.intl.string(A.t.aRifJX),
        grow: !1
    })
}