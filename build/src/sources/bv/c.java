package bv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final ev.b f7774a = new ev.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends gv.b {
        @Override // gv.e
        public gv.f a(gv.h hVar, gv.g gVar) {
            int c10 = hVar.c();
            if (c.k(hVar, c10)) {
                int column = hVar.getColumn() + hVar.a();
                int i10 = column + 1;
                if (dv.d.i(hVar.getLine(), c10 + 1)) {
                    i10 = column + 2;
                }
                return gv.f.d(new c()).a(i10);
            }
            return gv.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean k(gv.h hVar, int i10) {
        CharSequence line = hVar.getLine();
        if (hVar.a() < dv.d.f22507a && i10 < line.length() && line.charAt(i10) == '>') {
            return true;
        }
        return false;
    }

    @Override // gv.a, gv.d
    public boolean a() {
        return true;
    }

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        int c10 = hVar.c();
        if (k(hVar, c10)) {
            int column = hVar.getColumn() + hVar.a();
            int i10 = column + 1;
            if (dv.d.i(hVar.getLine(), c10 + 1)) {
                i10 = column + 2;
            }
            return gv.c.a(i10);
        }
        return gv.c.d();
    }

    @Override // gv.a, gv.d
    public boolean h(ev.a aVar) {
        return true;
    }

    @Override // gv.d
    /* renamed from: j */
    public ev.b d() {
        return this.f7774a;
    }
}
