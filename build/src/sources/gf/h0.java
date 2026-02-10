package gf;

import android.util.Log;
import ff.a;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ com.google.android.gms.common.b f24323d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ i0 f24324e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(i0 i0Var, com.google.android.gms.common.b bVar) {
        this.f24324e = i0Var;
        this.f24323d = bVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Map map;
        b bVar;
        a.f fVar;
        a.f fVar2;
        a.f fVar3;
        a.f fVar4;
        i0 i0Var = this.f24324e;
        map = i0Var.f24333f.f24292u;
        bVar = i0Var.f24329b;
        e0 e0Var = (e0) map.get(bVar);
        if (e0Var == null) {
            return;
        }
        if (this.f24323d.h()) {
            this.f24324e.f24332e = true;
            fVar = this.f24324e.f24328a;
            if (fVar.h()) {
                this.f24324e.i();
                return;
            }
            try {
                i0 i0Var2 = this.f24324e;
                fVar3 = i0Var2.f24328a;
                fVar4 = i0Var2.f24328a;
                fVar3.m(null, fVar4.j());
                return;
            } catch (SecurityException e10) {
                Log.e("GoogleApiManager", "Failed to get service from broker. ", e10);
                fVar2 = this.f24324e.f24328a;
                fVar2.c("Failed to get service from broker.");
                e0Var.H(new com.google.android.gms.common.b(10), null);
                return;
            }
        }
        e0Var.H(this.f24323d, null);
    }
}
