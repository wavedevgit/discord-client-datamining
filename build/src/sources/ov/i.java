package ov;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i extends tv.a {

    /* renamed from: a  reason: collision with root package name */
    private final rv.g f42788a;

    /* renamed from: b  reason: collision with root package name */
    private String f42789b;

    /* renamed from: c  reason: collision with root package name */
    private StringBuilder f42790c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends tv.b {
        @Override // tv.e
        public tv.f a(tv.h hVar, tv.g gVar) {
            int a10 = hVar.a();
            if (a10 >= qv.d.f47318a) {
                return tv.f.c();
            }
            int c10 = hVar.c();
            i k10 = i.k(hVar.getLine(), c10, a10);
            if (k10 != null) {
                return tv.f.d(k10).b(c10 + k10.f42788a.p());
            }
            return tv.f.c();
        }
    }

    public i(char c10, int i10, int i11) {
        rv.g gVar = new rv.g();
        this.f42788a = gVar;
        this.f42790c = new StringBuilder();
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
            if (qv.d.b('`', charSequence, i10 + i12) != -1) {
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
        char n10 = this.f42788a.n();
        int p10 = this.f42788a.p();
        int k10 = qv.d.k(n10, charSequence, i10, charSequence.length()) - i10;
        if (k10 < p10 || qv.d.m(charSequence, i10 + k10, charSequence.length()) != charSequence.length()) {
            return false;
        }
        return true;
    }

    @Override // tv.d
    public tv.c b(tv.h hVar) {
        int c10 = hVar.c();
        int index = hVar.getIndex();
        CharSequence line = hVar.getLine();
        if (hVar.a() < qv.d.f47318a && l(line, c10)) {
            return tv.c.c();
        }
        int length = line.length();
        for (int o10 = this.f42788a.o(); o10 > 0 && index < length && line.charAt(index) == ' '; o10--) {
            index++;
        }
        return tv.c.b(index);
    }

    @Override // tv.d
    public rv.a f() {
        return this.f42788a;
    }

    @Override // tv.a, tv.d
    public void g(CharSequence charSequence) {
        if (this.f42789b == null) {
            this.f42789b = charSequence.toString();
            return;
        }
        this.f42790c.append(charSequence);
        this.f42790c.append('\n');
    }

    @Override // tv.a, tv.d
    public void h() {
        this.f42788a.v(qv.a.e(this.f42789b.trim()));
        this.f42788a.w(this.f42790c.toString());
    }
}
