package gf;

import android.util.Log;
import ff.a;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ com.google.android.gms.common.b f25624d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ i0 f25625e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(i0 i0Var, com.google.android.gms.common.b bVar) {
        this.f25625e = i0Var;
        this.f25624d = bVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Map map;
        b bVar;
        a.f fVar;
        a.f fVar2;
        a.f fVar3;
        a.f fVar4;
        i0 i0Var = this.f25625e;
        map = i0Var.f25634f.f25593u;
        bVar = i0Var.f25630b;
        e0 e0Var = (e0) map.get(bVar);
        if (e0Var == null) {
            return;
        }
        if (this.f25624d.g()) {
            this.f25625e.f25633e = true;
            fVar = this.f25625e.f25629a;
            if (fVar.h()) {
                this.f25625e.i();
                return;
            }
            try {
                i0 i0Var2 = this.f25625e;
                fVar3 = i0Var2.f25629a;
                fVar4 = i0Var2.f25629a;
                fVar3.m(null, fVar4.j());
                return;
            } catch (SecurityException e10) {
                Log.e("GoogleApiManager", "Failed to get service from broker. ", e10);
                fVar2 = this.f25625e.f25629a;
                fVar2.c("Failed to get service from broker.");
                e0Var.H(new com.google.android.gms.common.b(10), null);
                return;
            }
        }
        e0Var.H(this.f25624d, null);
    }
}
