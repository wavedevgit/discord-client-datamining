package gf;

import ff.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ d0 f25578d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(d0 d0Var) {
        this.f25578d = d0Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        a.f fVar;
        a.f fVar2;
        e0 e0Var = this.f25578d.f25581a;
        fVar = e0Var.f25600d;
        fVar2 = e0Var.f25600d;
        fVar.c(fVar2.getClass().getName().concat(" disconnecting because it was signed out."));
    }
}
