package av;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j extends fv.a {

    /* renamed from: a  reason: collision with root package name */
    private final dv.i f7002a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7003b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends fv.b {
        @Override // fv.e
        public fv.f a(fv.h hVar, fv.g gVar) {
            CharSequence a10;
            if (hVar.a() >= cv.d.f21448a) {
                return fv.f.c();
            }
            CharSequence line = hVar.getLine();
            int c10 = hVar.c();
            j k10 = j.k(line, c10);
            if (k10 == null) {
                int l10 = j.l(line, c10);
                if (l10 > 0 && (a10 = gVar.a()) != null) {
                    return fv.f.d(new j(l10, a10.toString())).b(line.length()).e();
                }
                return fv.f.c();
            }
            return fv.f.d(k10).b(line.length());
        }
    }

    public j(int i10, String str) {
        dv.i iVar = new dv.i();
        this.f7002a = iVar;
        iVar.o(i10);
        this.f7003b = str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static j k(CharSequence charSequence, int i10) {
        int k10 = cv.d.k('#', charSequence, i10, charSequence.length()) - i10;
        if (k10 == 0 || k10 > 6) {
            return null;
        }
        int i11 = i10 + k10;
        if (i11 >= charSequence.length()) {
            return new j(k10, "");
        }
        char charAt = charSequence.charAt(i11);
        if (charAt != ' ' && charAt != '\t') {
            return null;
        }
        int n10 = cv.d.n(charSequence, charSequence.length() - 1, i11);
        int l10 = cv.d.l('#', charSequence, n10, i11);
        int n11 = cv.d.n(charSequence, l10, i11);
        if (n11 != l10) {
            return new j(k10, charSequence.subSequence(i11, n11 + 1).toString());
        }
        return new j(k10, charSequence.subSequence(i11, n10 + 1).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int l(CharSequence charSequence, int i10) {
        char charAt = charSequence.charAt(i10);
        if (charAt != '-') {
            if (charAt == '=') {
                if (m(charSequence, i10 + 1, '=')) {
                    return 1;
                }
            } else {
                return 0;
            }
        }
        if (m(charSequence, i10 + 1, '-')) {
            return 2;
        }
        return 0;
    }

    private static boolean m(CharSequence charSequence, int i10, char c10) {
        if (cv.d.m(charSequence, cv.d.k(c10, charSequence, i10, charSequence.length()), charSequence.length()) >= charSequence.length()) {
            return true;
        }
        return false;
    }

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        return fv.c.d();
    }

    @Override // fv.d
    public dv.a d() {
        return this.f7002a;
    }

    @Override // fv.a, fv.d
    public void h(ev.a aVar) {
        aVar.a(this.f7003b, this.f7002a);
    }
}
