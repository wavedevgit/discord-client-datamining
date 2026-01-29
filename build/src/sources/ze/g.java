package ze;

import android.content.Context;
import android.util.Log;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends n3.a implements ff.n {

    /* renamed from: o  reason: collision with root package name */
    private final Semaphore f55644o;

    /* renamed from: p  reason: collision with root package name */
    private final Set f55645p;

    public g(Context context, Set set) {
        super(context);
        this.f55644o = new Semaphore(0);
        this.f55645p = set;
    }

    @Override // n3.a
    public final /* bridge */ /* synthetic */ Object C() {
        int i10 = 0;
        for (ef.e eVar : this.f55645p) {
            if (eVar.d(this)) {
                i10++;
            }
        }
        try {
            this.f55644o.tryAcquire(i10, 5L, TimeUnit.SECONDS);
            return null;
        } catch (InterruptedException e10) {
            Log.i("GACSignInLoader", "Unexpected InterruptedException", e10);
            Thread.currentThread().interrupt();
            return null;
        }
    }

    @Override // n3.b
    protected final void p() {
        this.f55644o.drainPermits();
        h();
    }
}
