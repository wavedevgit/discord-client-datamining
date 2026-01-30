package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f46961r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f46962d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f46963e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f46964i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f46965o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f46966p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f46967q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f46968d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f46968d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f46962d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f46968d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f46961r;
                    e10.a(str, "Updating notification for " + w.this.f46964i.f44928c);
                    w wVar = w.this;
                    wVar.f46962d.r(wVar.f46966p.a(wVar.f46963e, wVar.f46965o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f46964i.f44928c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f46962d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f46963e = context;
        this.f46964i = uVar;
        this.f46965o = cVar;
        this.f46966p = hVar;
        this.f46967q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f46962d.isCancelled()) {
            cVar.r(wVar.f46965o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f46962d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f46964i.f44942q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f46967q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f46967q.a());
            return;
        }
        this.f46962d.p(null);
    }
}
