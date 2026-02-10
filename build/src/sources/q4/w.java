package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f45281r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f45282d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f45283e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f45284i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f45285o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f45286p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f45287q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f45288d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f45288d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f45282d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f45288d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f45281r;
                    e10.a(str, "Updating notification for " + w.this.f45284i.f42990c);
                    w wVar = w.this;
                    wVar.f45282d.r(wVar.f45286p.a(wVar.f45283e, wVar.f45285o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f45284i.f42990c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f45282d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f45283e = context;
        this.f45284i = uVar;
        this.f45285o = cVar;
        this.f45286p = hVar;
        this.f45287q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f45282d.isCancelled()) {
            cVar.r(wVar.f45285o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f45282d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f45284i.f43004q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f45287q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f45287q.a());
            return;
        }
        this.f45282d.p(null);
    }
}
