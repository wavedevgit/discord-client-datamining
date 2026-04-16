/** chunk id: 687709 params = (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(134528), n(947204);
var a = n(562465),
    i = n(73153),
    l = n(198982),
    s = n(867455),
    r = n(966833),
    c = n(157559),
    o = n(652215),
    d = n(985018);
let u = {
        async pinMessage(e, t) {
            let {
                id: n,
                name: i
            } = e;
            await s.A.unarchiveThreadIfNecessary(e.id), a.Bo.put({
                url: o.Rsh.PIN(n, t),
                rejectWithError: !0
            }).catch(t => {
                let n = new l.LG(t),
                    a = n.code,
                    s = d.intl.string(d.t.j2d6Km),
                    r = d.intl.string(d.t.fEptJP);
                if (null != a) switch (a) {
                    case o.t02.TOO_MANY_PINS_IN_CHANNEL:
                        s = d.intl.string(d.t.HI88Q3), r = e.isPrivate() ? d.intl.formatToPlainString(d.t.Q89oQU, {
                            maxPins: o.KL3
                        }) : d.intl.formatToPlainString(d.t.NnO1S5, {
                            maxPins: o.KL3,
                            channelName: i
                        });
                        break;
                    case o.t02.INVALID_ACCESS:
                        s = d.intl.string(d.t["25gfQX"]), r = d.intl.string(d.t.QNnTwN);
                        break;
                    case o.t02.INVALID_PIN_MESSAGE_CHANNEL:
                        s = d.intl.string(d.t["Q5G6+m"]), r = d.intl.string(d.t["5hgPfC"]);
                        break;
                    case o.t02.INVALID_THREAD_ARCHIVE_STATE:
                        s = d.intl.string(d.t.fu6Lbl), r = d.intl.string(d.t.FmrcZM);
                        break;
                    case o.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                        s = d.intl.string(d.t["zV0/FC"]), r = d.intl.string(d.t.C4a7xI);
                        break;
                    case o.t02.UNKNOWN_MESSAGE:
                        s = d.intl.string(d.t.fkqPro), r = d.intl.string(d.t.H6fRIg);
                        break;
                    default:
                        s = d.intl.string(d.t.HI88Q3), r = n.getAnyErrorMessage() ?? d.intl.string(d.t.fEptJP)
                }
                c.A.show({
                    title: s,
                    body: r,
                    confirmText: d.intl.string(d.t.BddRzS)
                })
            })
        },
        async unpinMessage(e, t) {
            await s.A.unarchiveThreadIfNecessary(e.id), a.Bo.del({
                url: o.Rsh.PIN(e.id, t),
                oldFormErrors: !0,
                rejectWithError: !0
            }).catch(() => c.A.show({
                title: d.intl.string(d.t.xFjByk),
                body: d.intl.string(d.t["0R/Toc"]),
                confirmText: d.intl.string(d.t["7NqTJn"]),
                cancelText: d.intl.string(d.t["ETE/oC"]),
                onConfirm: u.unpinMessage.bind(u, e, t)
            }))
        },
        ackPins(e) {
            i.h.dispatch({
                type: "CHANNEL_PINS_ACK",
                channelId: e
            })
        },
        fetchPins(e, t) {
            let n = t?.reset ?? !1,
                l = t?.limit ?? 25,
                s = t?.before;
            (n || function(e, t) {
                let n = r.A.getPins(e);
                if (null == n) return !0;
                switch (n.state) {
                    case r.e.FAILED:
                        return !0;
                    case r.e.LOADING:
                    case r.e.LOADED_FINISHED:
                        return !1;
                    case r.e.LOADED_HAS_MORE:
                        if (null == t) return 0 === n.items.length;
                        return n.items.at(-1).pinnedAt === t
                }
            }(e, s)) && (i.h.dispatch({
                type: "LOAD_PINNED_MESSAGES",
                channelId: e,
                reset: n
            }), a.Bo.get({
                url: o.Rsh.PINS(e),
                query: {
                    limit: l,
                    before: s?.toISOString()
                },
                retries: 2,
                oldFormErrors: !0,
                rejectWithError: !0
            }).then(t => {
                i.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_SUCCESS",
                    pins: t.body.items,
                    channelId: e,
                    hasMore: t.body.has_more
                })
            }, () => {
                i.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_FAILURE",
                    channelId: e
                })
            }))
        }
    },
    p = u