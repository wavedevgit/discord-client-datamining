/** Chunk was on 87557 **/
/** chunk id: 633581, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var a = n(627968),
    l = n(397927),
    r = n(890687);
let i = function(e) {
    let {
        onSelect: t,
        quest: n
    } = e, {
        quests: i
    } = (0, r.mL)({
        fetchPolicy: "cache-and-network",
        callerSource: "prefill_selector"
    }), s = [{
        id: "none",
        label: "NONE",
        value: null
    }, ...i.map(e => ({
        id: e.id,
        label: e.config.messages.questName,
        value: e
    }))];
    return (0, a.jsx)(l.l6P, {
        label: "Prefill with Quest",
        options: s,
        value: n,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0
    })
}