package ov;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends tv.a {

    /* renamed from: a  reason: collision with root package name */
    private final rv.b f42749a = new rv.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends tv.b {
        @Override // tv.e
        public tv.f a(tv.h hVar, tv.g gVar) {
            int c10 = hVar.c();
            if (c.k(hVar, c10)) {
                int column = hVar.getColumn() + hVar.a();
                int i10 = column + 1;
                if (qv.d.i(hVar.getLine(), c10 + 1)) {
                    i10 = column + 2;
                }
                return tv.f.d(new c()).a(i10);
            }
            return tv.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean k(tv.h hVar, int i10) {
        CharSequence line = hVar.getLine();
        if (hVar.a() < qv.d.f47318a && i10 < line.length() && line.charAt(i10) == '>') {
            return true;
        }
        return false;
    }

    @Override // tv.a, tv.d
    public boolean a() {
        return true;
    }

    @Override // tv.d
    public tv.c b(tv.h hVar) {
        int c10 = hVar.c();
        if (k(hVar, c10)) {
            int column = hVar.getColumn() + hVar.a();
            int i10 = column + 1;
            if (qv.d.i(hVar.getLine(), c10 + 1)) {
                i10 = column + 2;
            }
            return tv.c.a(i10);
        }
        return tv.c.d();
    }

    @Override // tv.a, tv.d
    public boolean c(rv.a aVar) {
        return true;
    }

    @Override // tv.d
    /* renamed from: j */
    public rv.b f() {
        return this.f42749a;
    }
}
