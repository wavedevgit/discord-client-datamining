package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final jv.b f25414a = new jv.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends lv.b {
        @Override // lv.e
        public lv.f a(lv.h hVar, lv.g gVar) {
            int c10 = hVar.c();
            if (c.k(hVar, c10)) {
                int column = hVar.getColumn() + hVar.a();
                int i10 = column + 1;
                if (iv.d.i(hVar.getLine(), c10 + 1)) {
                    i10 = column + 2;
                }
                return lv.f.d(new c()).a(i10);
            }
            return lv.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean k(lv.h hVar, int i10) {
        CharSequence line = hVar.getLine();
        if (hVar.a() < iv.d.f30397a && i10 < line.length() && line.charAt(i10) == '>') {
            return true;
        }
        return false;
    }

    @Override // lv.a, lv.d
    public boolean a() {
        return true;
    }

    @Override // lv.d
    public lv.c g(lv.h hVar) {
        int c10 = hVar.c();
        if (k(hVar, c10)) {
            int column = hVar.getColumn() + hVar.a();
            int i10 = column + 1;
            if (iv.d.i(hVar.getLine(), c10 + 1)) {
                i10 = column + 2;
            }
            return lv.c.a(i10);
        }
        return lv.c.d();
    }

    @Override // lv.a, lv.d
    public boolean h(jv.a aVar) {
        return true;
    }

    @Override // lv.d
    /* renamed from: j */
    public jv.b c() {
        return this.f25414a;
    }
}
