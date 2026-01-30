package th;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements t {

    /* renamed from: a  reason: collision with root package name */
    private t f49586a;

    public static void b(t tVar, t tVar2) {
        q qVar = (q) tVar;
        if (qVar.f49586a == null) {
            qVar.f49586a = tVar2;
            return;
        }
        throw new IllegalStateException();
    }

    @Override // th.w
    public final Object a() {
        t tVar = this.f49586a;
        if (tVar != null) {
            return tVar.a();
        }
        throw new IllegalStateException();
    }
}
