package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f47430r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f47431d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f47432e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f47433i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f47434o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f47435p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f47436q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f47437d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f47437d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f47431d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f47437d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f47430r;
                    e10.a(str, "Updating notification for " + w.this.f47433i.f44890c);
                    w wVar = w.this;
                    wVar.f47431d.r(wVar.f47435p.a(wVar.f47432e, wVar.f47434o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f47433i.f44890c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f47431d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f47432e = context;
        this.f47433i = uVar;
        this.f47434o = cVar;
        this.f47435p = hVar;
        this.f47436q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f47431d.isCancelled()) {
            cVar.r(wVar.f47434o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f47431d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f47433i.f44904q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f47436q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f47436q.a());
            return;
        }
        this.f47431d.p(null);
    }
}
