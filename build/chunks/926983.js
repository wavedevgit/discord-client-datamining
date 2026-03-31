/** chunk id: 926983 params = (module,exports,require) **/
r.d(e, {
    A: () => s
});
var i = r(627968);
r(64700);
var E = r(397927),
    n = r(985018);
let c = (t, e) => (0, i.jsxs)(E.Text, {
        color: "text-feedback-critical",
        style: {
            display: "flex",
            gap: "4px",
            margin: "8px 0 4px 0",
            alignItems: "center"
        },
        variant: "text-sm/normal",
        children: [(0, i.jsx)(E.EpV, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14
        }), t]
    }, e),
    s = {
        getTextInVoiceSendMessageChannelPermissionText: function(t) {
            return t ? n.intl.format(n.t.Q1rwpr, {
                warningHook: c
            }) : n.intl.string(n.t.WQ6zpT)
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function(t) {
            return t ? n.intl.format(n.t.Rx4pbJ, {
                warningHook: c
            }) : n.intl.string(n.t.cuMfH0)
        }
    }