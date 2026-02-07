package xh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements t {

    /* renamed from: a  reason: collision with root package name */
    private t f54725a;

    public static void b(t tVar, t tVar2) {
        q qVar = (q) tVar;
        if (qVar.f54725a == null) {
            qVar.f54725a = tVar2;
            return;
        }
        throw new IllegalStateException();
    }

    @Override // xh.w
    public final Object a() {
        t tVar = this.f54725a;
        if (tVar != null) {
            return tVar.a();
        }
        throw new IllegalStateException();
    }
}
