package hf;

import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 extends q1 {

    /* renamed from: c  reason: collision with root package name */
    private c f27909c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27910d;

    public z0(c cVar, int i10) {
        this.f27909c = cVar;
        this.f27910d = i10;
    }

    @Override // hf.k
    public final void H(int i10, IBinder iBinder, Bundle bundle) {
        q.m(this.f27909c, "onPostInitComplete can be called only once per call to getRemoteService");
        this.f27909c.M(i10, iBinder, bundle, this.f27910d);
        this.f27909c = null;
    }

    @Override // hf.k
    public final void b0(int i10, IBinder iBinder, d1 d1Var) {
        c cVar = this.f27909c;
        q.m(cVar, "onPostInitCompleteWithConnectionInfo can be called only once per call togetRemoteService");
        q.l(d1Var);
        cVar.T(d1Var);
        H(i10, iBinder, d1Var.f27791d);
    }

    @Override // hf.k
    public final void q0(int i10, Bundle bundle) {
        Log.wtf("GmsClient", "received deprecated onAccountValidationComplete callback, ignoring", new Exception());
    }
}
