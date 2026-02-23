/** chunk id: 633581, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(627968),
    i = n(397927),
    s = n(890687);
let l = function(e) {
    let {
        onSelect: t,
        quest: n
    } = e, {
        quests: l
    } = (0, s.mL)({
        fetchPolicy: "cache-and-network",
        callerSource: "prefill_selector"
    }), r = [{
        id: "none",
        label: "NONE",
        value: null
    }, ...l.map(e => ({
        id: e.id,
        label: e.config.messages.questName,
        value: e
    }))];
    return (0, a.jsx)(i.l6P, {
        label: "Prefill with Quest",
        options: r,
        value: n,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0
    })
}