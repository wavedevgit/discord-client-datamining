/** Chunk was on 87557 **/
/** chunk id: 354486, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    l: () => y
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(554146),
    s = n(342494),
    o = n(379848),
    c = n(827827),
    d = n(253932),
    u = n(186111),
    m = n(461213),
    p = n(927813),
    h = n(159609),
    x = n(49999),
    g = n(818348),
    f = n(985018),
    b = n(64924);
let v = p.A.Millis.HOUR,
    j = p.A.Millis.DAY,
    _ = 4 * p.A.Millis.DAY;

function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            shouldShow: t = !0
        } = e,
        [n, a] = l.useState(Date.now()),
        s = (0, r.bG)([u.A], () => u.A.hasLayers()),
        c = (0, r.bG)([m.A], () => m.A.getStatus()),
        p = d._6.useSetting(),
        f = (null == p ? void 0 : p.value) != null ? Number(p.value) : null,
        b = d.CY.useSetting(),
        y = c === g.cl.DND && null != f && n - f > j && "0" === b,
        {
            enabled: A
        } = (0, h.k)({
            location: "useDoNotDisturbReminderPopoverDismissibleContent",
            autoTrackExposure: y,
            disable: !y
        });
    return l.useEffect(() => {
        if (c === g.cl.DND) {
            a(Date.now());
            let e = setInterval(() => a(Date.now()), v);
            return () => clearInterval(e)
        }
    }, [c]), (0, o.Wl)(A && !s && t ? i.M.DO_NOT_DISTURB_REMINDER_POPOVER : null, {
        cooldownDurationMs: _,
        numTimesToRecur: 2
    }, x.m.ACCOUNT_NAME_ZONE, !0)
}

function A(e) {
    let {
        targetElementRef: t,
        onDismiss: n,
        children: l
    } = e, {
        enabled: r,
        titleText: i,
        bodyText: o
    } = (0, h.k)({
        location: "popover",
        autoTrackExposure: !1
    });
    return null != t.current && r ? (0, a.jsxs)(a.Fragment, {
        children: [l, (0, a.jsx)(s.AM, {
            targetElementRef: t,
            title: f.intl.string(i),
            body: f.intl.string(o),
            caretConfig: {
                align: "start"
            },
            gradientColor: "purple",
            actions: [{
                text: f.intl.string(f.t.fwPurU),
                onClick: () => {
                    (0, c.A)({
                        nextStatus: g.cl.ONLINE
                    }), null == n || n(x.i.PRIMARY)
                }
            }],
            graphic: {
                type: "image",
                src: b
            },
            onRequestClose: () => null == n ? void 0 : n(x.i.DISMISS)
        })]
    }) : l
}