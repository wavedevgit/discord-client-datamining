/** chunk id: 415350 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    l = n.n(i),
    r = n(223637),
    s = n(542664),
    a = n(46054);
let o = l().omit(s.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...r.A,
        parse: function(e, t, n) {
            let i = r.A.parse(e, t, n),
                l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return {
                ...i,
                level: l
            }
        }
    },
    c = a.A.combineAndInjectMentionRule(o, [a.A.createReactRules(a.A.defaultReactRuleOptions), {
        header: d
    }]),
    u = a.A.reactParserFor(c)