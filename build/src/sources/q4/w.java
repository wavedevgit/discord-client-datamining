package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f43949r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f43950d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f43951e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f43952i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f43953o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f43954p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f43955q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f43956d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f43956d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f43950d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f43956d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f43949r;
                    e10.a(str, "Updating notification for " + w.this.f43952i.f41448c);
                    w wVar = w.this;
                    wVar.f43950d.r(wVar.f43954p.a(wVar.f43951e, wVar.f43953o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f43952i.f41448c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f43950d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f43951e = context;
        this.f43952i = uVar;
        this.f43953o = cVar;
        this.f43954p = hVar;
        this.f43955q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f43950d.isCancelled()) {
            cVar.r(wVar.f43953o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f43950d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f43952i.f41462q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f43955q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f43955q.a());
            return;
        }
        this.f43950d.p(null);
    }
}
