package ff;

import android.util.Log;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y0 extends b1 {

    /* renamed from: b  reason: collision with root package name */
    protected final com.google.android.gms.common.api.internal.a f23976b;

    public y0(int i10, com.google.android.gms.common.api.internal.a aVar) {
        super(i10);
        this.f23976b = (com.google.android.gms.common.api.internal.a) gf.q.m(aVar, "Null methods are not runnable.");
    }

    @Override // ff.b1
    public final void a(Status status) {
        try {
            this.f23976b.h(status);
        } catch (IllegalStateException e10) {
            Log.w("ApiCallRunner", "Exception reporting failure", e10);
        }
    }

    @Override // ff.b1
    public final void b(Exception exc) {
        String simpleName = exc.getClass().getSimpleName();
        String localizedMessage = exc.getLocalizedMessage();
        try {
            this.f23976b.h(new Status(10, simpleName + ": " + localizedMessage));
        } catch (IllegalStateException e10) {
            Log.w("ApiCallRunner", "Exception reporting failure", e10);
        }
    }

    @Override // ff.b1
    public final void c(e0 e0Var) {
        try {
            this.f23976b.f(e0Var.v());
        } catch (RuntimeException e10) {
            b(e10);
        }
    }

    @Override // ff.b1
    public final void d(v vVar, boolean z10) {
        vVar.c(this.f23976b, z10);
    }
}
