/** chunk id: 687709 params = (module,exports,require) **/
i.d(t, {
    A: () => p
}), i(134528), i(947204);
var n = i(562465),
    a = i(73153),
    l = i(198982),
    s = i(867455),
    r = i(966833),
    c = i(157559),
    o = i(652215),
    d = i(985018);
let u = {
        async pinMessage(e, t) {
            let {
                id: i,
                name: a
            } = e;
            await s.A.unarchiveThreadIfNecessary(e.id), n.Bo.put({
                url: o.Rsh.PIN(i, t),
                rejectWithError: !0
            }).catch(t => {
                let i = new l.LG(t),
                    n = i.code,
                    s = d.intl.string(d.t.j2d6Km),
                    r = d.intl.string(d.t.fEptJP);
                if (null != n) switch (n) {
                    case o.t02.TOO_MANY_PINS_IN_CHANNEL:
                        s = d.intl.string(d.t.HI88Q3), r = e.isPrivate() ? d.intl.formatToPlainString(d.t.Q89oQU, {
                            maxPins: o.KL3
                        }) : d.intl.formatToPlainString(d.t.NnO1S5, {
                            maxPins: o.KL3,
                            channelName: a
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
                        s = d.intl.string(d.t.HI88Q3), r = i.getAnyErrorMessage() ?? d.intl.string(d.t.fEptJP)
                }
                c.A.show({
                    title: s,
                    body: r,
                    confirmText: d.intl.string(d.t.BddRzS)
                })
            })
        },
        async unpinMessage(e, t) {
            await s.A.unarchiveThreadIfNecessary(e.id), n.Bo.del({
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
            a.h.dispatch({
                type: "CHANNEL_PINS_ACK",
                channelId: e
            })
        },
        fetchPins(e, t) {
            let i = t?.reset ?? !1,
                l = t?.limit ?? 25,
                s = t?.before;
            (i || function(e, t) {
                let i = r.A.getPins(e);
                if (null == i) return !0;
                switch (i.state) {
                    case r.e.FAILED:
                        return !0;
                    case r.e.LOADING:
                    case r.e.LOADED_FINISHED:
                        return !1;
                    case r.e.LOADED_HAS_MORE:
                        if (null == t) return 0 === i.items.length;
                        return i.items.at(-1).pinnedAt === t
                }
            }(e, s)) && (a.h.dispatch({
                type: "LOAD_PINNED_MESSAGES",
                channelId: e,
                reset: i
            }), n.Bo.get({
                url: o.Rsh.PINS(e),
                query: {
                    limit: l,
                    before: s?.toISOString()
                },
                retries: 2,
                oldFormErrors: !0,
                rejectWithError: !0
            }).then(t => {
                a.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_SUCCESS",
                    pins: t.body.items,
                    channelId: e,
                    hasMore: t.body.has_more
                })
            }, () => {
                a.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_FAILURE",
                    channelId: e
                })
            }))
        }
    },
    p = u