/** chunk id: 633581 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968),
    i = n(397927),
    l = n(890687);
let s = function(e) {
    let {
        onSelect: t,
        quest: n
    } = e, {
        quests: s
    } = (0, l.mL)({
        fetchPolicy: "cache-and-network",
        callerSource: "prefill_selector"
    }), r = [{
        id: "none",
        label: "NONE",
        value: null
    }, ...s.map(e => ({
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