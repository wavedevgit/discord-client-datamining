package ov;

import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k extends tv.a {

    /* renamed from: e  reason: collision with root package name */
    private static final Pattern[][] f42793e = {new Pattern[]{null, null}, new Pattern[]{Pattern.compile("^<(?:script|pre|style)(?:\\s|>|$)", 2), Pattern.compile("</(?:script|pre|style)>", 2)}, new Pattern[]{Pattern.compile("^<!--"), Pattern.compile("-->")}, new Pattern[]{Pattern.compile("^<[?]"), Pattern.compile("\\?>")}, new Pattern[]{Pattern.compile("^<![A-Z]"), Pattern.compile(">")}, new Pattern[]{Pattern.compile("^<!\\[CDATA\\["), Pattern.compile("\\]\\]>")}, new Pattern[]{Pattern.compile("^</?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\\s|[/]?[>]|$)", 2), null}, new Pattern[]{Pattern.compile("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>])\\s*$", 2), null}};

    /* renamed from: a  reason: collision with root package name */
    private final rv.j f42794a;

    /* renamed from: b  reason: collision with root package name */
    private final Pattern f42795b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f42796c;

    /* renamed from: d  reason: collision with root package name */
    private ov.a f42797d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends tv.b {
        @Override // tv.e
        public tv.f a(tv.h hVar, tv.g gVar) {
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (hVar.a() < 4 && line.charAt(c10) == '<') {
                for (int i10 = 1; i10 <= 7; i10++) {
                    if (i10 != 7 || !(gVar.b().f() instanceof rv.t)) {
                        Pattern pattern = k.f42793e[i10][0];
                        Pattern pattern2 = k.f42793e[i10][1];
                        if (pattern.matcher(line.subSequence(c10, line.length())).find()) {
                            return tv.f.d(new k(pattern2)).b(hVar.getIndex());
                        }
                    }
                }
            }
            return tv.f.c();
        }
    }

    @Override // tv.d
    public tv.c b(tv.h hVar) {
        if (this.f42796c) {
            return tv.c.d();
        }
        if (hVar.b() && this.f42795b == null) {
            return tv.c.d();
        }
        return tv.c.b(hVar.getIndex());
    }

    @Override // tv.d
    public rv.a f() {
        return this.f42794a;
    }

    @Override // tv.a, tv.d
    public void g(CharSequence charSequence) {
        this.f42797d.a(charSequence);
        Pattern pattern = this.f42795b;
        if (pattern != null && pattern.matcher(charSequence).find()) {
            this.f42796c = true;
        }
    }

    @Override // tv.a, tv.d
    public void h() {
        this.f42794a.n(this.f42797d.b());
        this.f42797d = null;
    }

    private k(Pattern pattern) {
        this.f42794a = new rv.j();
        this.f42796c = false;
        this.f42797d = new ov.a();
        this.f42795b = pattern;
    }
}
