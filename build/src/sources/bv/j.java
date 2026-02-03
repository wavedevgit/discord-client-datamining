package bv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j extends gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final ev.i f7816a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7817b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends gv.b {
        @Override // gv.e
        public gv.f a(gv.h hVar, gv.g gVar) {
            CharSequence a10;
            if (hVar.a() >= dv.d.f22507a) {
                return gv.f.c();
            }
            CharSequence line = hVar.getLine();
            int c10 = hVar.c();
            j k10 = j.k(line, c10);
            if (k10 == null) {
                int l10 = j.l(line, c10);
                if (l10 > 0 && (a10 = gVar.a()) != null) {
                    return gv.f.d(new j(l10, a10.toString())).b(line.length()).e();
                }
                return gv.f.c();
            }
            return gv.f.d(k10).b(line.length());
        }
    }

    public j(int i10, String str) {
        ev.i iVar = new ev.i();
        this.f7816a = iVar;
        iVar.o(i10);
        this.f7817b = str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static j k(CharSequence charSequence, int i10) {
        int k10 = dv.d.k('#', charSequence, i10, charSequence.length()) - i10;
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
        int n10 = dv.d.n(charSequence, charSequence.length() - 1, i11);
        int l10 = dv.d.l('#', charSequence, n10, i11);
        int n11 = dv.d.n(charSequence, l10, i11);
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
        if (dv.d.m(charSequence, dv.d.k(c10, charSequence, i10, charSequence.length()), charSequence.length()) >= charSequence.length()) {
            return true;
        }
        return false;
    }

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        return gv.c.d();
    }

    @Override // gv.d
    public ev.a d() {
        return this.f7816a;
    }

    @Override // gv.a, gv.d
    public void f(fv.a aVar) {
        aVar.a(this.f7817b, this.f7816a);
    }
}
