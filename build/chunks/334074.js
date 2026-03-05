/** chunk id: 334074, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(64700),
    s = n(311907),
    l = n(932001),
    a = n(269918),
    r = n(355898),
    o = n(574560),
    c = n(652215);

function d(e) {
    let {
        application: t,
        experimentParams: n,
        disabled: d = !1,
        dismissibleContent: u,
        dismissibleContentGroupName: h,
        bypassAutoDismiss: A = !1
    } = e, m = a.A.useConfig(n), p = (0, s.bG)([o.A], () => null != t ? o.A.getGameUpsellDismissal(t.id, u) : null), [g, _] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        let e = null != p ? p.dismissedAt + Math.min(864e5 * Math.pow(2, p.timesDismissed - 1), 24192e5) : 0,
            t = 0,
            n = () => {
                _(Date.now() >= e);
                let i = Math.min(e - Date.now(), c.mnr);
                i > 0 && (t = setTimeout(n, i))
            };
        return n(), () => clearTimeout(t)
    }, [p]);
    let f = !d && null != t && m.enabled && g,
        [x, C] = (0, l.Wl)(f ? u : null, {
            cooldownDurationMs: 864e5
        }, h, A);
    return {
        shouldShow: x === u,
        markAsDismissed: e => {
            null != t && ((0, r.M)(t.id, u), C(e))
        },
        isRecurringExperimentEnabled: m.enabled
    }
}