package wh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements t {

    /* renamed from: a  reason: collision with root package name */
    private t f53090a;

    public static void b(t tVar, t tVar2) {
        q qVar = (q) tVar;
        if (qVar.f53090a == null) {
            qVar.f53090a = tVar2;
            return;
        }
        throw new IllegalStateException();
    }

    @Override // wh.w
    public final Object a() {
        t tVar = this.f53090a;
        if (tVar != null) {
            return tVar.a();
        }
        throw new IllegalStateException();
    }
}
