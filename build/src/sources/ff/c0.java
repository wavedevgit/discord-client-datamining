package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ d0 f22891d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(d0 d0Var) {
        this.f22891d = d0Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        a.f fVar;
        a.f fVar2;
        e0 e0Var = this.f22891d.f22894a;
        fVar = e0Var.f22913d;
        fVar2 = e0Var.f22913d;
        fVar.b(fVar2.getClass().getName().concat(" disconnecting because it was signed out."));
    }
}
