package bv;

import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k extends gv.a {

    /* renamed from: e  reason: collision with root package name */
    private static final Pattern[][] f7818e = {new Pattern[]{null, null}, new Pattern[]{Pattern.compile("^<(?:script|pre|style)(?:\\s|>|$)", 2), Pattern.compile("</(?:script|pre|style)>", 2)}, new Pattern[]{Pattern.compile("^<!--"), Pattern.compile("-->")}, new Pattern[]{Pattern.compile("^<[?]"), Pattern.compile("\\?>")}, new Pattern[]{Pattern.compile("^<![A-Z]"), Pattern.compile(">")}, new Pattern[]{Pattern.compile("^<!\\[CDATA\\["), Pattern.compile("\\]\\]>")}, new Pattern[]{Pattern.compile("^</?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\\s|[/]?[>]|$)", 2), null}, new Pattern[]{Pattern.compile("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>])\\s*$", 2), null}};

    /* renamed from: a  reason: collision with root package name */
    private final ev.j f7819a;

    /* renamed from: b  reason: collision with root package name */
    private final Pattern f7820b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7821c;

    /* renamed from: d  reason: collision with root package name */
    private bv.a f7822d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends gv.b {
        @Override // gv.e
        public gv.f a(gv.h hVar, gv.g gVar) {
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (hVar.a() < 4 && line.charAt(c10) == '<') {
                for (int i10 = 1; i10 <= 7; i10++) {
                    if (i10 != 7 || !(gVar.b().d() instanceof ev.t)) {
                        Pattern pattern = k.f7818e[i10][0];
                        Pattern pattern2 = k.f7818e[i10][1];
                        if (pattern.matcher(line.subSequence(c10, line.length())).find()) {
                            return gv.f.d(new k(pattern2)).b(hVar.getIndex());
                        }
                    }
                }
            }
            return gv.f.c();
        }
    }

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        if (this.f7821c) {
            return gv.c.d();
        }
        if (hVar.b() && this.f7820b == null) {
            return gv.c.d();
        }
        return gv.c.b(hVar.getIndex());
    }

    @Override // gv.d
    public ev.a d() {
        return this.f7819a;
    }

    @Override // gv.a, gv.d
    public void e(CharSequence charSequence) {
        this.f7822d.a(charSequence);
        Pattern pattern = this.f7820b;
        if (pattern != null && pattern.matcher(charSequence).find()) {
            this.f7821c = true;
        }
    }

    @Override // gv.a, gv.d
    public void g() {
        this.f7819a.n(this.f7822d.b());
        this.f7822d = null;
    }

    private k(Pattern pattern) {
        this.f7819a = new ev.j();
        this.f7821c = false;
        this.f7822d = new bv.a();
        this.f7820b = pattern;
    }
}
