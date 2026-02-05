package ff;

import android.util.Log;
import ef.a;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ com.google.android.gms.common.b f22937d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ i0 f22938e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(i0 i0Var, com.google.android.gms.common.b bVar) {
        this.f22938e = i0Var;
        this.f22937d = bVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Map map;
        b bVar;
        a.f fVar;
        a.f fVar2;
        a.f fVar3;
        a.f fVar4;
        i0 i0Var = this.f22938e;
        map = i0Var.f22947f.f22906u;
        bVar = i0Var.f22943b;
        e0 e0Var = (e0) map.get(bVar);
        if (e0Var == null) {
            return;
        }
        if (this.f22937d.g()) {
            this.f22938e.f22946e = true;
            fVar = this.f22938e.f22942a;
            if (fVar.g()) {
                this.f22938e.i();
                return;
            }
            try {
                i0 i0Var2 = this.f22938e;
                fVar3 = i0Var2.f22942a;
                fVar4 = i0Var2.f22942a;
                fVar3.k(null, fVar4.j());
                return;
            } catch (SecurityException e10) {
                Log.e("GoogleApiManager", "Failed to get service from broker. ", e10);
                fVar2 = this.f22938e.f22942a;
                fVar2.b("Failed to get service from broker.");
                e0Var.H(new com.google.android.gms.common.b(10), null);
                return;
            }
        }
        e0Var.H(this.f22937d, null);
    }
}
