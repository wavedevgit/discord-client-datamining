package th;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements t {

    /* renamed from: a  reason: collision with root package name */
    private t f50069a;

    public static void b(t tVar, t tVar2) {
        q qVar = (q) tVar;
        if (qVar.f50069a == null) {
            qVar.f50069a = tVar2;
            return;
        }
        throw new IllegalStateException();
    }

    @Override // th.w
    public final Object a() {
        t tVar = this.f50069a;
        if (tVar != null) {
            return tVar.a();
        }
        throw new IllegalStateException();
    }
}
