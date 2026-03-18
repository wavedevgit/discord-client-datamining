/** chunk id: 885459 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(323874), n(14289), n(35956), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(873263),
    r = n(311907),
    s = n(73153),
    o = n(829219),
    d = n(859703),
    c = n(890687),
    u = n(306190),
    A = n(607976),
    h = n(886217),
    _ = n(652215);

function m(e) {
    return new URLSearchParams(e).get(c.L1.QUEST_ID)
}
let g = function(e) {
    let {
        questId: t
    } = e, {
        questId: n,
        setQuestId: g
    } = function(e) {
        let t = (0, l.W6)(),
            [n, i] = a.useState(e),
            {
                search: r
            } = (0, l.zy)();
        return a.useEffect(() => {
            let t = m(r);
            null != t ? i(t) : null != e && i(e)
        }, [e, r]), a.useEffect(() => {
            if (null == n || m(r) === n) return;
            let e = new URLSearchParams;
            e.set(c.L1.TAB, c.NC.PREVIEW_TOOL), e.set(c.L1.QUEST_ID, n), t.push(`${_.BVt.QUEST_HOME}?${e.toString()}`)
        }, [n, t, r]), {
            questId: n,
            setQuestId: i
        }
    }(t), p = (0, r.bG)([d.A], () => null != n ? d.A.getQuest(n) : void 0, [n]), E = (0, r.bG)([d.A], () => null != n ? d.A.getQuestLoadedViaPreview(n) : null, [n]);
    a.useEffect(() => {
        null != n && (0, o.dQ)(n).then(() => {
            (0, o.Gt)(n)
        })
    }, [n]), a.useEffect(() => {
        let e = e => {
            let {
                quest_id: t
            } = e;
            t === n && (0, o.dQ)(n)
        };
        return s.h.subscribe("QUEST_PREVIEW_UPDATE", e), () => {
            s.h.unsubscribe("QUEST_PREVIEW_UPDATE", e)
        }
    }, [n]);
    let [I, f] = a.useState([]);
    return (0, i.jsx)(A.A, {
        controls: (0, i.jsx)(u.A, {
            questId: n,
            setQuestId: g,
            quest: p,
            refreshQuest: () => {
                null != n && (0, o.dQ)(n)
            }
        }),
        selectedSections: I,
        onSectionSelect: e => {
            "all" === e ? f([]) : f([e])
        },
        children: E?.id != null ? (0, i.jsx)(h.Ok, {
            questId: E?.id,
            selectedSections: I
        }) : null
    })
}