package androidx.camera.core;

import a0.j1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j extends i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ n f2456a;

        a(n nVar) {
            this.f2456a = nVar;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            this.f2456a.close();
        }
    }

    @Override // androidx.camera.core.i
    n d(j1 j1Var) {
        return j1Var.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.core.i
    public void g() {
    }

    @Override // androidx.camera.core.i
    void m(n nVar) {
        d0.n.j(e(nVar), new a(nVar), c0.a.a());
    }
}
