package bv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i extends gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final ev.g f7813a;

    /* renamed from: b  reason: collision with root package name */
    private String f7814b;

    /* renamed from: c  reason: collision with root package name */
    private StringBuilder f7815c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends gv.b {
        @Override // gv.e
        public gv.f a(gv.h hVar, gv.g gVar) {
            int a10 = hVar.a();
            if (a10 >= dv.d.f22507a) {
                return gv.f.c();
            }
            int c10 = hVar.c();
            i k10 = i.k(hVar.getLine(), c10, a10);
            if (k10 != null) {
                return gv.f.d(k10).b(c10 + k10.f7813a.p());
            }
            return gv.f.c();
        }
    }

    public i(char c10, int i10, int i11) {
        ev.g gVar = new ev.g();
        this.f7813a = gVar;
        this.f7815c = new StringBuilder();
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
            if (dv.d.b('`', charSequence, i10 + i12) != -1) {
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
        char n10 = this.f7813a.n();
        int p10 = this.f7813a.p();
        int k10 = dv.d.k(n10, charSequence, i10, charSequence.length()) - i10;
        if (k10 < p10 || dv.d.m(charSequence, i10 + k10, charSequence.length()) != charSequence.length()) {
            return false;
        }
        return true;
    }

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        int c10 = hVar.c();
        int index = hVar.getIndex();
        CharSequence line = hVar.getLine();
        if (hVar.a() < dv.d.f22507a && l(line, c10)) {
            return gv.c.c();
        }
        int length = line.length();
        for (int o10 = this.f7813a.o(); o10 > 0 && index < length && line.charAt(index) == ' '; o10--) {
            index++;
        }
        return gv.c.b(index);
    }

    @Override // gv.d
    public ev.a d() {
        return this.f7813a;
    }

    @Override // gv.a, gv.d
    public void e(CharSequence charSequence) {
        if (this.f7814b == null) {
            this.f7814b = charSequence.toString();
            return;
        }
        this.f7815c.append(charSequence);
        this.f7815c.append('\n');
    }

    @Override // gv.a, gv.d
    public void g() {
        this.f7813a.v(dv.a.e(this.f7814b.trim()));
        this.f7813a.w(this.f7815c.toString());
    }
}
