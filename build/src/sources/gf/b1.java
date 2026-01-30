package gf;

import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b1 extends t0 {

    /* renamed from: c  reason: collision with root package name */
    private c f26747c;

    /* renamed from: d  reason: collision with root package name */
    private final int f26748d;

    public b1(c cVar, int i10) {
        this.f26747c = cVar;
        this.f26748d = i10;
    }

    @Override // gf.k
    public final void D(int i10, IBinder iBinder, Bundle bundle) {
        q.m(this.f26747c, "onPostInitComplete can be called only once per call to getRemoteService");
        this.f26747c.M(i10, iBinder, bundle, this.f26748d);
        this.f26747c = null;
    }

    @Override // gf.k
    public final void i0(int i10, Bundle bundle) {
        Log.wtf("GmsClient", "received deprecated onAccountValidationComplete callback, ignoring", new Exception());
    }

    @Override // gf.k
    public final void w0(int i10, IBinder iBinder, f1 f1Var) {
        c cVar = this.f26747c;
        q.m(cVar, "onPostInitCompleteWithConnectionInfo can be called only once per call togetRemoteService");
        q.l(f1Var);
        c.a0(cVar, f1Var);
        D(i10, iBinder, f1Var.f26812d);
    }
}
