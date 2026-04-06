/** chunk id: 415350 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    l = n.n(i),
    s = n(223637),
    a = n(542664),
    r = n(46054);
let o = l().omit(a.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...s.A,
        parse: function(e, t, n) {
            let i = s.A.parse(e, t, n),
                l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return {
                ...i,
                level: l
            }
        }
    },
    c = r.A.combineAndInjectMentionRule(o, [r.A.createReactRules(r.A.defaultReactRuleOptions), {
        header: d
    }]),
    u = r.A.reactParserFor(c)