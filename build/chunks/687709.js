/** chunk id: 687709 params = (module,exports,require) **/
n.d(e, {
    A: () => u
}), n(134528), n(947204);
var i = n(562465),
    r = n(73153),
    a = n(198982),
    l = n(867455),
    s = n(966833),
    o = n(157559),
    c = n(652215),
    _ = n(985018);
let d = {
        async pinMessage(t, e) {
            let {
                id: n,
                name: r
            } = t;
            await l.A.unarchiveThreadIfNecessary(t.id), i.Bo.put({
                url: c.Rsh.PIN(n, e),
                rejectWithError: !0
            }).catch(e => {
                let n = new a.LG(e),
                    i = n.code,
                    l = _.intl.string(_.t.j2d6Km),
                    s = _.intl.string(_.t.fEptJP);
                if (null != i) switch (i) {
                    case c.t02.TOO_MANY_PINS_IN_CHANNEL:
                        l = _.intl.string(_.t.HI88Q3), s = t.isPrivate() ? _.intl.formatToPlainString(_.t.Q89oQU, {
                            maxPins: c.KL3
                        }) : _.intl.formatToPlainString(_.t.NnO1S5, {
                            maxPins: c.KL3,
                            channelName: r
                        });
                        break;
                    case c.t02.INVALID_ACCESS:
                        l = _.intl.string(_.t["25gfQX"]), s = _.intl.string(_.t.QNnTwN);
                        break;
                    case c.t02.INVALID_PIN_MESSAGE_CHANNEL:
                        l = _.intl.string(_.t["Q5G6+m"]), s = _.intl.string(_.t["5hgPfC"]);
                        break;
                    case c.t02.INVALID_THREAD_ARCHIVE_STATE:
                        l = _.intl.string(_.t.fu6Lbl), s = _.intl.string(_.t.FmrcZM);
                        break;
                    case c.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                        l = _.intl.string(_.t["zV0/FC"]), s = _.intl.string(_.t.C4a7xI);
                        break;
                    case c.t02.UNKNOWN_MESSAGE:
                        l = _.intl.string(_.t.fkqPro), s = _.intl.string(_.t.H6fRIg);
                        break;
                    default:
                        l = _.intl.string(_.t.HI88Q3), s = n.getAnyErrorMessage() ?? _.intl.string(_.t.fEptJP)
                }
                o.A.show({
                    title: l,
                    body: s,
                    confirmText: _.intl.string(_.t.BddRzS)
                })
            })
        },
        async unpinMessage(t, e) {
            await l.A.unarchiveThreadIfNecessary(t.id), i.Bo.del({
                url: c.Rsh.PIN(t.id, e),
                oldFormErrors: !0,
                rejectWithError: !0
            }).catch(() => o.A.show({
                title: _.intl.string(_.t.xFjByk),
                body: _.intl.string(_.t["0R/Toc"]),
                confirmText: _.intl.string(_.t["7NqTJn"]),
                cancelText: _.intl.string(_.t["ETE/oC"]),
                onConfirm: d.unpinMessage.bind(d, t, e)
            }))
        },
        ackPins(t) {
            r.h.dispatch({
                type: "CHANNEL_PINS_ACK",
                channelId: t
            })
        },
        fetchPins(t, e) {
            let n = e?.reset ?? !1,
                a = e?.limit ?? 25,
                l = e?.before;
            (n || function(t, e) {
                let n = s.A.getPins(t);
                if (null == n) return !0;
                switch (n.state) {
                    case s.e.FAILED:
                        return !0;
                    case s.e.LOADING:
                    case s.e.LOADED_FINISHED:
                        return !1;
                    case s.e.LOADED_HAS_MORE:
                        if (null == e) return 0 === n.items.length;
                        return n.items.at(-1).pinnedAt === e
                }
            }(t, l)) && (r.h.dispatch({
                type: "LOAD_PINNED_MESSAGES",
                channelId: t,
                reset: n
            }), i.Bo.get({
                url: c.Rsh.PINS(t),
                query: {
                    limit: a,
                    before: l?.toISOString()
                },
                retries: 2,
                oldFormErrors: !0,
                rejectWithError: !0
            }).then(e => {
                r.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_SUCCESS",
                    pins: e.body.items,
                    channelId: t,
                    hasMore: e.body.has_more
                })
            }, () => {
                r.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_FAILURE",
                    channelId: t
                })
            }))
        }
    },
    u = d