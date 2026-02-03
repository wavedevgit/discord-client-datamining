package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final gv.i f21132a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21133b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends iv.b {
        @Override // iv.e
        public iv.f a(iv.h hVar, iv.g gVar) {
            CharSequence a10;
            if (hVar.a() >= fv.d.f24825a) {
                return iv.f.c();
            }
            CharSequence line = hVar.getLine();
            int c10 = hVar.c();
            j k10 = j.k(line, c10);
            if (k10 == null) {
                int l10 = j.l(line, c10);
                if (l10 > 0 && (a10 = gVar.a()) != null) {
                    return iv.f.d(new j(l10, a10.toString())).b(line.length()).e();
                }
                return iv.f.c();
            }
            return iv.f.d(k10).b(line.length());
        }
    }

    public j(int i10, String str) {
        gv.i iVar = new gv.i();
        this.f21132a = iVar;
        iVar.o(i10);
        this.f21133b = str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static j k(CharSequence charSequence, int i10) {
        int k10 = fv.d.k('#', charSequence, i10, charSequence.length()) - i10;
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
        int n10 = fv.d.n(charSequence, charSequence.length() - 1, i11);
        int l10 = fv.d.l('#', charSequence, n10, i11);
        int n11 = fv.d.n(charSequence, l10, i11);
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
        if (fv.d.m(charSequence, fv.d.k(c10, charSequence, i10, charSequence.length()), charSequence.length()) >= charSequence.length()) {
            return true;
        }
        return false;
    }

    @Override // iv.a, iv.d
    public void a(hv.a aVar) {
        aVar.a(this.f21133b, this.f21132a);
    }

    @Override // iv.d
    public gv.a d() {
        return this.f21132a;
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        return iv.c.d();
    }
}
