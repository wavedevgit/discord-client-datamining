package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i extends cw.a {

    /* renamed from: a  reason: collision with root package name */
    private final aw.g f55210a;

    /* renamed from: b  reason: collision with root package name */
    private String f55211b;

    /* renamed from: c  reason: collision with root package name */
    private StringBuilder f55212c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends cw.b {
        @Override // cw.e
        public cw.f a(cw.h hVar, cw.g gVar) {
            int a10 = hVar.a();
            if (a10 >= zv.d.f57221a) {
                return cw.f.c();
            }
            int c10 = hVar.c();
            i k10 = i.k(hVar.getLine(), c10, a10);
            if (k10 != null) {
                return cw.f.d(k10).b(c10 + k10.f55210a.p());
            }
            return cw.f.c();
        }
    }

    public i(char c10, int i10, int i11) {
        aw.g gVar = new aw.g();
        this.f55210a = gVar;
        this.f55212c = new StringBuilder();
        gVar.s(c10);
        gVar.u(i10);
        gVar.t(i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static i k(CharSequence charSequence, int i10, int i11) {
        int length = charSequence.length();
        int i12 = 0;
        int i13 = 0;
        for (int i14 = i10; i14 < length; i14++) {
            char charAt = charSequence.charAt(i14);
            if (charAt != '`') {
                if (charAt != '~') {
                    break;
                }
                i13++;
            } else {
                i12++;
            }
        }
        if (i12 >= 3 && i13 == 0) {
            if (zv.d.b('`', charSequence, i10 + i12) != -1) {
                return null;
            }
            return new i('`', i12, i11);
        } else if (i13 < 3 || i12 != 0) {
            return null;
        } else {
            return new i('~', i13, i11);
        }
    }

    private boolean l(CharSequence charSequence, int i10) {
        char n10 = this.f55210a.n();
        int p10 = this.f55210a.p();
        int k10 = zv.d.k(n10, charSequence, i10, charSequence.length()) - i10;
        if (k10 < p10 || zv.d.m(charSequence, i10 + k10, charSequence.length()) != charSequence.length()) {
            return false;
        }
        return true;
    }

    @Override // cw.d
    public aw.a d() {
        return this.f55210a;
    }

    @Override // cw.a, cw.d
    public void e(CharSequence charSequence) {
        if (this.f55211b == null) {
            this.f55211b = charSequence.toString();
            return;
        }
        this.f55212c.append(charSequence);
        this.f55212c.append('\n');
    }

    @Override // cw.a, cw.d
    public void f() {
        this.f55210a.v(zv.a.e(this.f55211b.trim()));
        this.f55210a.w(this.f55212c.toString());
    }

    @Override // cw.d
    public cw.c g(cw.h hVar) {
        int c10 = hVar.c();
        int index = hVar.getIndex();
        CharSequence line = hVar.getLine();
        if (hVar.a() < zv.d.f57221a && l(line, c10)) {
            return cw.c.c();
        }
        int length = line.length();
        for (int o10 = this.f55210a.o(); o10 > 0 && index < length && line.charAt(index) == ' '; o10--) {
            index++;
        }
        return cw.c.b(index);
    }
}
