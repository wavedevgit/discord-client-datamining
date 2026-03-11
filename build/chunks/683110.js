/** chunk id: 683110 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(198982),
    r = n(839214),
    o = n(47167),
    d = n(145497),
    c = n(137365),
    u = n(734057),
    m = n(71393),
    h = n(994500),
    p = n(287809),
    x = n(520657);
let g = (0, r.D)(() => ({
    userId: null,
    state: null,
    loading: !1,
    error: null
}));

function _(e) {
    let {
        title: t,
        guildIds: n
    } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
            className: x.J1,
            children: (0, a.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: t
            })
        }), (0, a.jsxs)("div", {
            className: x.uk,
            children: [0 === n.length && (0, a.jsx)("div", {
                className: x.J1,
                children: (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: "None"
                })
            }), n.map(e => {
                let t = m.A.getGuild(e);
                return null == t ? null : (0, a.jsxs)("div", {
                    className: x.J1,
                    children: [(0, a.jsx)(d.Ay, {
                        guild: t,
                        iconSize: 16
                    }), (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: t.name
                    })]
                }, e)
            })]
        })]
    })
}

function f(e) {
    let {
        userState: t
    } = e, {
        user: n,
        searchWorkerUser: l,
        guildMembers: r,
        guildMemberRequests: c
    } = t, g = i.useCallback(e => {
        let {
            ok: t
        } = e;
        return t ? (0, a.jsx)(s.yr3, {
            size: "sm",
            color: s.LU0.colors.STATUS_POSITIVE
        }) : (0, a.jsx)(s.EpV, {
            size: "sm",
            color: s.LU0.colors.ICON_FEEDBACK_CRITICAL
        })
    }, []);
    return (0, a.jsxs)("div", {
        className: x.N6,
        children: [(0, a.jsxs)("div", {
            className: x.J1,
            children: [g({
                ok: null != n
            }), (0, a.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: null != n ? "User exists in UserStore" : "User does not exist in UserStore"
            })]
        }), null != n && (0, a.jsx)("div", {
            className: x.uk,
            children: (0, a.jsx)("div", {
                className: x.J1,
                children: (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: `username: ${n.username}`
                })
            })
        }), (0, a.jsxs)("div", {
            className: x.J1,
            children: [g({
                ok: null != l
            }), (0, a.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: null != l ? "User exists in User Search Worker" : "User does not exist in User Search Worker"
            })]
        }), null != l && (0, a.jsxs)("div", {
            className: x.uk,
            children: [(0, a.jsx)("div", {
                className: x.J1,
                children: (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: `username: ${l.username}`
                })
            }), (0, a.jsx)("div", {
                className: x.J1,
                children: (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: `global name: ${l.globalName??"—"}`
                })
            }), (0, a.jsx)("div", {
                className: x.J1,
                children: (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: "nicknames:"
                })
            }), (0, a.jsxs)("div", {
                className: x.uk,
                children: [0 === Object.keys(l.nicknames).length && (0, a.jsx)("div", {
                    className: x.J1,
                    children: (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: "None"
                    })
                }), Object.entries(l.nicknames).map(e => {
                    let [t, n] = e, i = m.A.getGuild(t), l = u.A.getChannel(t);
                    return (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [null != i && (0, a.jsx)(d.Ay, {
                            guild: i,
                            iconSize: 16
                        }), null != i && (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: i.name
                        }), null == i && null != l && (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: (0, o.m1)(l, p.default, h.A)
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: ` (${t})`
                        }), null != n && "" !== n && (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: ` - ${n}`
                        })]
                    }, t)
                })]
            })]
        }), (0, a.jsxs)("div", {
            className: x.J1,
            children: [g({
                ok: r.length > 0
            }), (0, a.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: r.length > 0 ? "Guild members exist:" : "No guild members exist"
            })]
        }), r.length > 0 && (0, a.jsx)("div", {
            className: x.uk,
            children: r.map(e => {
                let t = m.A.getGuild(e.guildId);
                if (null == t) return null;
                let n = e.nick ?? "";
                return (0, a.jsxs)("div", {
                    className: x.J1,
                    children: [(0, a.jsx)(d.Ay, {
                        guild: t,
                        iconSize: 16
                    }), (0, a.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        children: [t.name, "" !== n ? ` - ${n}` : ""]
                    })]
                }, `${e.guildId}`)
            })
        }), (0, a.jsxs)("div", {
            className: x.J1,
            children: [(0, a.jsx)(s.mir, {
                size: "sm"
            }), (0, a.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: "GuildMemberRequesterStore State"
            })]
        }), null != c && (0, a.jsxs)("div", {
            className: x.uk,
            children: [(0, a.jsx)(_, {
                title: "Pending Guild Member Requests:",
                guildIds: c.pendingRequestGuildIds
            }), (0, a.jsx)(_, {
                title: "Sent Guild Member Requests:",
                guildIds: c.sentRequestGuildIds
            }), (0, a.jsx)(_, {
                title: "Unacknowledged Guild Member Requests:",
                guildIds: c.unacknowledgedRequestGuildIds
            })]
        })]
    })
}

function v() {
    let e = i.useCallback(e => {
            g.setState({
                userId: e,
                state: null
            })
        }, []),
        t = i.useCallback(async () => {
            let {
                userId: e,
                loading: t
            } = g.getState();
            if (!t && null != e) {
                g.setState({
                    loading: !0,
                    error: null
                });
                try {
                    let t = await (0, c.h2)(e);
                    g.setState({
                        state: t,
                        loading: !1
                    })
                } catch (t) {
                    let e = new l.LG(t);
                    g.setState({
                        error: e.getAnyErrorMessage(),
                        loading: !1
                    })
                } finally {
                    g.setState({
                        loading: !1
                    })
                }
            }
        }, []),
        n = g.useField("loading");
    return (0, a.jsxs)("div", {
        className: x.$n,
        children: [(0, a.jsx)(s.ksK, {
            placeholder: "User ID",
            onChange: e
        }), (0, a.jsx)(s.Button, {
            onClick: t,
            text: "Get Snapshot",
            loading: n,
            disabled: n
        })]
    })
}

function b() {
    let e = g.useField("state"),
        t = g.useField("error");
    return (0, a.jsxs)(s.nVY, {
        label: "Debug User State",
        description: "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [(0, a.jsx)(v, {}), null != t && (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: x.qS,
            children: t
        }), null != e && (0, a.jsx)(f, {
            userState: e
        })]
    })
}