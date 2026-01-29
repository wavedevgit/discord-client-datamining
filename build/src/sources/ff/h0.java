package ff;

import android.util.Log;
import ef.a;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ com.google.android.gms.common.b f25109d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ i0 f25110e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(i0 i0Var, com.google.android.gms.common.b bVar) {
        this.f25110e = i0Var;
        this.f25109d = bVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Map map;
        b bVar;
        a.f fVar;
        a.f fVar2;
        a.f fVar3;
        a.f fVar4;
        i0 i0Var = this.f25110e;
        map = i0Var.f25119f.f25078u;
        bVar = i0Var.f25115b;
        e0 e0Var = (e0) map.get(bVar);
        if (e0Var == null) {
            return;
        }
        if (this.f25109d.f()) {
            this.f25110e.f25118e = true;
            fVar = this.f25110e.f25114a;
            if (fVar.g()) {
                this.f25110e.i();
                return;
            }
            try {
                i0 i0Var2 = this.f25110e;
                fVar3 = i0Var2.f25114a;
                fVar4 = i0Var2.f25114a;
                fVar3.j(null, fVar4.i());
                return;
            } catch (SecurityException e10) {
                Log.e("GoogleApiManager", "Failed to get service from broker. ", e10);
                fVar2 = this.f25110e.f25114a;
                fVar2.b("Failed to get service from broker.");
                e0Var.H(new com.google.android.gms.common.b(10), null);
                return;
            }
        }
        e0Var.H(this.f25109d, null);
    }
}
