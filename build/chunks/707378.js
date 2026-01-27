/** Chunk was on 91042 **/
/** chunk id: 707378, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(308528),
    o = n(313369),
    s = n(267102),
    d = n(964404),
    u = n(961350),
    c = n(734057),
    A = n(994500),
    b = n(309010),
    g = n(652215),
    f = n(985018);

function m(e) {
    let {
        user: t,
        context: m,
        joinCallVideo: p,
        id: O,
        onCall: y
    } = e, v = (0, s.aL)(), E = (0, r.bG)([u.default], () => u.default.getId() === t.id), h = (0, r.bG)([A.A], () => A.A.isBlocked(t.id)), j = (0, r.bG)([b.A, c.A], () => b.A.getVoiceChannelId() === c.A.getDMFromUserId(t.id)), {
        copyVariant: x
    } = o.o.useConfig({
        location: "useCallUserItem"
    });
    if (E || m === g.BRT.POPOUT || j || t.bot || t.isProvisional) return null;
    let S = () => {
            null == y || y(), a.A.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0,
                joinCallVideo: p
            }), v.dispatch(g.jej.POPOUT_CLOSE), (0, i.s7G)()
        },
        M = !d.Ay.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(i.Drp, {
        id: null != O ? O : "call",
        label: "control" !== x ? f.intl.string(f.t["ZeP+kK"]) : f.intl.string(f.t.JJogjm),
        action: M ? () => {
            (0, i.mMO)(async () => {
                let {
                    default: e
                } = await n.e("19106").then(n.bind(n, 279673));
                return t => (0, l.jsx)(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), l.forEach(function(t) {
                            var l;
                            l = n[t], t in e ? Object.defineProperty(e, t, {
                                value: l,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = l
                        })
                    }
                    return e
                }({
                    onSubmit: S
                }, t))
            })
        } : S,
        disabled: h
    })
}