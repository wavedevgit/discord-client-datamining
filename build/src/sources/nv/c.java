package nv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends sv.a {

    /* renamed from: a  reason: collision with root package name */
    private final qv.b f41221a = new qv.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends sv.b {
        @Override // sv.e
        public sv.f a(sv.h hVar, sv.g gVar) {
            int c10 = hVar.c();
            if (c.k(hVar, c10)) {
                int column = hVar.getColumn() + hVar.a();
                int i10 = column + 1;
                if (pv.d.i(hVar.getLine(), c10 + 1)) {
                    i10 = column + 2;
                }
                return sv.f.d(new c()).a(i10);
            }
            return sv.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean k(sv.h hVar, int i10) {
        CharSequence line = hVar.getLine();
        if (hVar.a() < pv.d.f45804a && i10 < line.length() && line.charAt(i10) == '>') {
            return true;
        }
        return false;
    }

    @Override // sv.a, sv.d
    public boolean a() {
        return true;
    }

    @Override // sv.d
    public sv.c c(sv.h hVar) {
        int c10 = hVar.c();
        if (k(hVar, c10)) {
            int column = hVar.getColumn() + hVar.a();
            int i10 = column + 1;
            if (pv.d.i(hVar.getLine(), c10 + 1)) {
                i10 = column + 2;
            }
            return sv.c.a(i10);
        }
        return sv.c.d();
    }

    @Override // sv.a, sv.d
    public boolean h(qv.a aVar) {
        return true;
    }

    @Override // sv.d
    /* renamed from: j */
    public qv.b e() {
        return this.f41221a;
    }
}
