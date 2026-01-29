package av;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends fv.a {

    /* renamed from: a  reason: collision with root package name */
    private final dv.b f6960a = new dv.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends fv.b {
        @Override // fv.e
        public fv.f a(fv.h hVar, fv.g gVar) {
            int c10 = hVar.c();
            if (c.k(hVar, c10)) {
                int column = hVar.getColumn() + hVar.a();
                int i10 = column + 1;
                if (cv.d.i(hVar.getLine(), c10 + 1)) {
                    i10 = column + 2;
                }
                return fv.f.d(new c()).a(i10);
            }
            return fv.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean k(fv.h hVar, int i10) {
        CharSequence line = hVar.getLine();
        if (hVar.a() < cv.d.f21448a && i10 < line.length() && line.charAt(i10) == '>') {
            return true;
        }
        return false;
    }

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        int c10 = hVar.c();
        if (k(hVar, c10)) {
            int column = hVar.getColumn() + hVar.a();
            int i10 = column + 1;
            if (cv.d.i(hVar.getLine(), c10 + 1)) {
                i10 = column + 2;
            }
            return fv.c.a(i10);
        }
        return fv.c.d();
    }

    @Override // fv.a, fv.d
    public boolean b() {
        return true;
    }

    @Override // fv.a, fv.d
    public boolean f(dv.a aVar) {
        return true;
    }

    @Override // fv.d
    /* renamed from: j */
    public dv.b d() {
        return this.f6960a;
    }
}
