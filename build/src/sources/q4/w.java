package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f44518r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f44519d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f44520e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f44521i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f44522o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f44523p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f44524q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f44525d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f44525d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f44519d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f44525d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f44518r;
                    e10.a(str, "Updating notification for " + w.this.f44521i.f42017c);
                    w wVar = w.this;
                    wVar.f44519d.r(wVar.f44523p.a(wVar.f44520e, wVar.f44522o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f44521i.f42017c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f44519d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f44520e = context;
        this.f44521i = uVar;
        this.f44522o = cVar;
        this.f44523p = hVar;
        this.f44524q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f44519d.isCancelled()) {
            cVar.r(wVar.f44522o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f44519d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f44521i.f42031q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f44524q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f44524q.a());
            return;
        }
        this.f44519d.p(null);
    }
}
