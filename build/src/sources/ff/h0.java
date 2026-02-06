package ff;

import android.util.Log;
import ef.a;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ com.google.android.gms.common.b f23238d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ i0 f23239e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(i0 i0Var, com.google.android.gms.common.b bVar) {
        this.f23239e = i0Var;
        this.f23238d = bVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Map map;
        b bVar;
        a.f fVar;
        a.f fVar2;
        a.f fVar3;
        a.f fVar4;
        i0 i0Var = this.f23239e;
        map = i0Var.f23248f.f23207u;
        bVar = i0Var.f23244b;
        e0 e0Var = (e0) map.get(bVar);
        if (e0Var == null) {
            return;
        }
        if (this.f23238d.h()) {
            this.f23239e.f23247e = true;
            fVar = this.f23239e.f23243a;
            if (fVar.g()) {
                this.f23239e.i();
                return;
            }
            try {
                i0 i0Var2 = this.f23239e;
                fVar3 = i0Var2.f23243a;
                fVar4 = i0Var2.f23243a;
                fVar3.k(null, fVar4.i());
                return;
            } catch (SecurityException e10) {
                Log.e("GoogleApiManager", "Failed to get service from broker. ", e10);
                fVar2 = this.f23239e.f23243a;
                fVar2.b("Failed to get service from broker.");
                e0Var.H(new com.google.android.gms.common.b(10), null);
                return;
            }
        }
        e0Var.H(this.f23238d, null);
    }
}
