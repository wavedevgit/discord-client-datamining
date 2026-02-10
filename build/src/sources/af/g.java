package af;

import android.content.Context;
import android.util.Log;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends n3.a implements gf.n {

    /* renamed from: o  reason: collision with root package name */
    private final Semaphore f763o;

    /* renamed from: p  reason: collision with root package name */
    private final Set f764p;

    public g(Context context, Set set) {
        super(context);
        this.f763o = new Semaphore(0);
        this.f764p = set;
    }

    @Override // n3.a
    public final /* bridge */ /* synthetic */ Object C() {
        int i10 = 0;
        for (ff.e eVar : this.f764p) {
            if (eVar.d(this)) {
                i10++;
            }
        }
        try {
            this.f763o.tryAcquire(i10, 5L, TimeUnit.SECONDS);
            return null;
        } catch (InterruptedException e10) {
            Log.i("GACSignInLoader", "Unexpected InterruptedException", e10);
            Thread.currentThread().interrupt();
            return null;
        }
    }

    @Override // n3.b
    protected final void p() {
        this.f763o.drainPermits();
        h();
    }
}
