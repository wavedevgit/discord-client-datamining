/** Chunk was on 87557 **/
/** chunk id: 940540, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(64700),
    r = n(397927),
    i = n(198982),
    s = n(839214),
    o = n(98919),
    c = n(137365),
    d = n(278274),
    u = n(652215);
let m = (0, s.D)(() => ({
    includeFrecency: !0,
    includeFriends: !0,
    includeGDMs: !0,
    includeDMs: !0,
    includeQuickSwitcherState: !0,
    includeUserSearchWorkerState: !0,
    isUploading: !1,
    isSuccess: !1,
    errorMessage: null
}));

function p() {
    let e = m.useField("includeFrecency"),
        t = m.useField("includeFriends"),
        n = m.useField("includeDMs"),
        s = m.useField("includeGDMs"),
        p = m.useField("includeQuickSwitcherState"),
        h = m.useField("includeUserSearchWorkerState"),
        x = m.useField("isUploading"),
        g = m.useField("isSuccess"),
        f = m.useField("errorMessage"),
        b = l.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: n,
                includeDMs: a,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: r,
                isUploading: s
            } = m.getState();
            if (!s) try {
                m.setState({
                    isUploading: !0,
                    errorMessage: null,
                    isSuccess: !1
                }), t && (0, c.it)(), n && (0, c.Md)(), a && (0, c.pD)(), e && (0, c.a1)(), l && (0, c._S)(), r && (0, c.D7)(), await (0, o.a)(u.Umv.WEB_APP), m.setState({
                    isSuccess: !0,
                    errorMessage: null
                })
            } catch (t) {
                let e = new i.LG(t);
                m.setState({
                    errorMessage: e.getAnyErrorMessage()
                })
            } finally {
                m.setState({
                    isUploading: !1
                })
            }
        }, []);
    return (0, a.jsxs)(r.nVY, {
        label: "Debug Logs Snapshot",
        description: "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [(0, a.jsx)(r.dOG, {
            label: "Frecency",
            description: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
            checked: e,
            onChange: () => m.setState({
                includeFrecency: !e
            })
        }), (0, a.jsx)(r.dOG, {
            label: "Friends",
            description: "Includes all Discord Friend usernames, global names, and nicknames.",
            checked: t,
            onChange: () => m.setState({
                includeFriends: !t
            })
        }), (0, a.jsx)(r.dOG, {
            label: "DMs",
            description: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
            checked: n,
            onChange: () => m.setState({
                includeDMs: !n
            })
        }), (0, a.jsx)(r.dOG, {
            label: "Group DMs",
            description: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
            checked: s,
            onChange: () => m.setState({
                includeGDMs: !s
            })
        }), (0, a.jsx)(r.dOG, {
            label: "Quick Switcher Results",
            description: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
            checked: p,
            onChange: () => m.setState({
                includeQuickSwitcherState: !p
            })
        }), (0, a.jsx)(r.dOG, {
            label: "User Search Worker",
            description: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
            checked: h,
            onChange: () => m.setState({
                includeUserSearchWorkerState: !h
            })
        }), (0, a.jsx)(d.q, {
            isUploading: x,
            isSuccess: g,
            errorMessage: f,
            onClick: b,
            title: "Upload Snapshot Logs"
        })]
    })
}