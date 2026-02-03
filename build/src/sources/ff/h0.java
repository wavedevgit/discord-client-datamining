package ff;

import android.util.Log;
import ef.a;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ com.google.android.gms.common.b f24320d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ i0 f24321e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(i0 i0Var, com.google.android.gms.common.b bVar) {
        this.f24321e = i0Var;
        this.f24320d = bVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Map map;
        b bVar;
        a.f fVar;
        a.f fVar2;
        a.f fVar3;
        a.f fVar4;
        i0 i0Var = this.f24321e;
        map = i0Var.f24330f.f24289u;
        bVar = i0Var.f24326b;
        e0 e0Var = (e0) map.get(bVar);
        if (e0Var == null) {
            return;
        }
        if (this.f24320d.f()) {
            this.f24321e.f24329e = true;
            fVar = this.f24321e.f24325a;
            if (fVar.g()) {
                this.f24321e.i();
                return;
            }
            try {
                i0 i0Var2 = this.f24321e;
                fVar3 = i0Var2.f24325a;
                fVar4 = i0Var2.f24325a;
                fVar3.j(null, fVar4.i());
                return;
            } catch (SecurityException e10) {
                Log.e("GoogleApiManager", "Failed to get service from broker. ", e10);
                fVar2 = this.f24321e.f24325a;
                fVar2.b("Failed to get service from broker.");
                e0Var.H(new com.google.android.gms.common.b(10), null);
                return;
            }
        }
        e0Var.H(this.f24320d, null);
    }
}
