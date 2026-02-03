package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final gv.b f21090a = new gv.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends iv.b {
        @Override // iv.e
        public iv.f a(iv.h hVar, iv.g gVar) {
            int c10 = hVar.c();
            if (c.k(hVar, c10)) {
                int column = hVar.getColumn() + hVar.a();
                int i10 = column + 1;
                if (fv.d.i(hVar.getLine(), c10 + 1)) {
                    i10 = column + 2;
                }
                return iv.f.d(new c()).a(i10);
            }
            return iv.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean k(iv.h hVar, int i10) {
        CharSequence line = hVar.getLine();
        if (hVar.a() < fv.d.f24825a && i10 < line.length() && line.charAt(i10) == '>') {
            return true;
        }
        return false;
    }

    @Override // iv.a, iv.d
    public boolean b() {
        return true;
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        int c10 = hVar.c();
        if (k(hVar, c10)) {
            int column = hVar.getColumn() + hVar.a();
            int i10 = column + 1;
            if (fv.d.i(hVar.getLine(), c10 + 1)) {
                i10 = column + 2;
            }
            return iv.c.a(i10);
        }
        return iv.c.d();
    }

    @Override // iv.a, iv.d
    public boolean h(gv.a aVar) {
        return true;
    }

    @Override // iv.d
    /* renamed from: j */
    public gv.b d() {
        return this.f21090a;
    }
}
