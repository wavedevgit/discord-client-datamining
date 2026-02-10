package yh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements t {

    /* renamed from: a  reason: collision with root package name */
    private t f55660a;

    public static void b(t tVar, t tVar2) {
        q qVar = (q) tVar;
        if (qVar.f55660a == null) {
            qVar.f55660a = tVar2;
            return;
        }
        throw new IllegalStateException();
    }

    @Override // yh.w
    public final Object a() {
        t tVar = this.f55660a;
        if (tVar != null) {
            return tVar.a();
        }
        throw new IllegalStateException();
    }
}
