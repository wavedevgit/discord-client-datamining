package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends cw.a {

    /* renamed from: a  reason: collision with root package name */
    private final aw.b f55740a = new aw.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends cw.b {
        @Override // cw.e
        public cw.f a(cw.h hVar, cw.g gVar) {
            int c10 = hVar.c();
            if (c.k(hVar, c10)) {
                int column = hVar.getColumn() + hVar.a();
                int i10 = column + 1;
                if (zv.d.i(hVar.getLine(), c10 + 1)) {
                    i10 = column + 2;
                }
                return cw.f.d(new c()).a(i10);
            }
            return cw.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean k(cw.h hVar, int i10) {
        CharSequence line = hVar.getLine();
        if (hVar.a() < zv.d.f57790a && i10 < line.length() && line.charAt(i10) == '>') {
            return true;
        }
        return false;
    }

    @Override // cw.a, cw.d
    public boolean a(aw.a aVar) {
        return true;
    }

    @Override // cw.a, cw.d
    public boolean b() {
        return true;
    }

    @Override // cw.d
    public cw.c g(cw.h hVar) {
        int c10 = hVar.c();
        if (k(hVar, c10)) {
            int column = hVar.getColumn() + hVar.a();
            int i10 = column + 1;
            if (zv.d.i(hVar.getLine(), c10 + 1)) {
                i10 = column + 2;
            }
            return cw.c.a(i10);
        }
        return cw.c.d();
    }

    @Override // cw.d
    /* renamed from: j */
    public aw.b d() {
        return this.f55740a;
    }
}
