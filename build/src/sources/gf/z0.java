package gf;

import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 extends q1 {

    /* renamed from: c  reason: collision with root package name */
    private c f25211c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25212d;

    public z0(c cVar, int i10) {
        this.f25211c = cVar;
        this.f25212d = i10;
    }

    @Override // gf.k
    public final void B(int i10, IBinder iBinder, Bundle bundle) {
        q.m(this.f25211c, "onPostInitComplete can be called only once per call to getRemoteService");
        this.f25211c.M(i10, iBinder, bundle, this.f25212d);
        this.f25211c = null;
    }

    @Override // gf.k
    public final void L0(int i10, IBinder iBinder, d1 d1Var) {
        c cVar = this.f25211c;
        q.m(cVar, "onPostInitCompleteWithConnectionInfo can be called only once per call togetRemoteService");
        q.l(d1Var);
        cVar.T(d1Var);
        B(i10, iBinder, d1Var.f25093d);
    }

    @Override // gf.k
    public final void r0(int i10, Bundle bundle) {
        Log.wtf("GmsClient", "received deprecated onAccountValidationComplete callback, ignoring", new Exception());
    }
}
