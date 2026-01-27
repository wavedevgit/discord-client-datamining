/** Chunk was on 65298 **/
/** chunk id: 502128, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var a = n(627968),
    l = n(503698),
    r = n.n(l),
    i = n(417597),
    s = n(397927),
    o = n(73153),
    c = n(303054),
    d = n(734057),
    u = n(320697),
    m = n(394953),
    p = n(187698),
    h = n(661251);
let x = [{
        key: "channelName",
        cellClassName: r()(p.Hn, p.HA),
        render(e) {
            let {
                channelName: t
            } = e;
            return (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: t
            })
        }
    }, {
        key: "channelId",
        cellClassName: r()(p.Hn, p.Zm),
        render(e) {
            let {
                channelId: t
            } = e;
            return (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: t
            })
        }
    }],
    g = [{
        key: "channelName",
        cellClassName: r()(p.Hn, p.HA),
        render(e) {
            let {
                channelName: t
            } = e;
            return (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: t
            })
        }
    }, {
        key: "loadState",
        cellClassName: r()(p.Hn, p.C7),
        render(e) {
            let {
                loadState: t
            } = e;
            return (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: t
            })
        }
    }, {
        key: "channelId",
        cellClassName: r()(p.Hn, p.Zm),
        render(e) {
            let {
                channelId: t
            } = e;
            return (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: t
            })
        }
    }];

function f() {
    let {
        unreadRecentMentionsCount: e,
        unreadChannelIds: t
    } = (0, m.U4)(), {
        isLoading: n,
        hasLoadedEver: l,
        hasPreloaded: r,
        hasMoreToLoad: f,
        isLoadingComplete: b
    } = (0, i.cf)([u.A], () => ({
        isLoading: u.A.isLoading,
        hasLoadedEver: u.A.hasLoadedEver,
        hasPreloaded: u.A.hasPreloaded,
        hasMoreToLoad: u.A.hasMoreToLoad,
        isLoadingComplete: u.A.isLoadingComplete
    })), v = (0, i.bG)([u.A], () => u.A.currentRequestAnalyticsPayload), j = (0, i.cf)([u.A], () => u.A.getChannelInfoMap()), _ = (0, i.cf)([d.A], () => {
        let e = {};
        return Object.entries(j).forEach(t => {
            let [n] = t, a = d.A.getChannel(n);
            e[n] = null != a ? a : null
        }), e
    }), y = (0, i.cf)([d.A], () => t.reduce((e, t) => {
        let n = d.A.getChannel(t);
        return e[t] = null != n ? n : null, e
    }, {})), A = (0, i.bG)([u.A], () => u.A.getInboxMessages()), C = (0, i.bG)([u.A], () => u.A.getDevOverrides().navOnClick);
    return (0, a.jsx)("div", {
        className: h.nd,
        children: (0, a.jsxs)(s.IpV, {
            className: p.Qs,
            children: [(0, a.jsxs)("div", {
                children: [(0, a.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Inbox"
                }), (0, a.jsxs)("div", {
                    children: ["Inbox Message Count: ", A.length]
                })]
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Dev Overrides"
                }), (0, a.jsx)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        marginTop: 8
                    },
                    children: (0, a.jsx)(s.dOG, {
                        label: "Nav On Click",
                        checked: !!C,
                        onChange: e => {
                            o.h.dispatch({
                                type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                                navOnClick: e
                            })
                        }
                    })
                })]
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Unreads and Badging"
                }), (0, a.jsx)(s.hKd, {
                    size: 8
                }), (0, a.jsxs)("div", {
                    children: ["Unread Recent Mentions Count: ", e]
                }), (0, a.jsxs)("div", {
                    children: ["Unread Channel Count: ", t.length]
                }), (0, a.jsx)(c.A, {
                    columns: x,
                    data: Object.entries(y).map(e => {
                        var t;
                        let [n, a] = e;
                        return {
                            key: n,
                            channelId: n,
                            channelName: null != (t = null == a ? void 0 : a.name) ? t : ""
                        }
                    })
                })]
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Store State"
                }), (0, a.jsxs)("div", {
                    children: ["Is Loading: ", n ? "✅" : "❌"]
                }), (0, a.jsxs)("div", {
                    children: ["Has Preloaded: ", r ? "✅" : "❌"]
                }), (0, a.jsxs)("div", {
                    children: ["Has Loaded Ever: ", l ? "✅" : "❌"]
                }), (0, a.jsxs)("div", {
                    children: ["Has More To Load: ", f ? "✅" : "❌"]
                }), (0, a.jsxs)("div", {
                    children: ["Is Loading Complete: ", b ? "✅" : "❌"]
                }), (0, a.jsxs)("div", {
                    children: ["Last Loading Trigger: ", null == v ? void 0 : v.loadingTrigger]
                })]
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Channel Info Map"
                }), (0, a.jsxs)("div", {
                    children: ["Total Channels: ", Object.keys(j).length]
                }), (0, a.jsx)(c.A, {
                    columns: g,
                    data: Object.entries(j).map(e => {
                        var t, n;
                        let [a, l] = e;
                        return {
                            key: a,
                            channelId: a,
                            channelName: null != (t = null == (n = _[a]) ? void 0 : n.name) ? t : "",
                            loadState: l.loadState
                        }
                    })
                })]
            })]
        })
    })
}