package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f46478r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f46479d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f46480e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f46481i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f46482o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f46483p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f46484q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f46485d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f46485d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f46479d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f46485d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f46478r;
                    e10.a(str, "Updating notification for " + w.this.f46481i.f43687c);
                    w wVar = w.this;
                    wVar.f46479d.r(wVar.f46483p.a(wVar.f46480e, wVar.f46482o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f46481i.f43687c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f46479d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f46480e = context;
        this.f46481i = uVar;
        this.f46482o = cVar;
        this.f46483p = hVar;
        this.f46484q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f46479d.isCancelled()) {
            cVar.r(wVar.f46482o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f46479d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f46481i.f43701q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f46484q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f46484q.a());
            return;
        }
        this.f46479d.p(null);
    }
}
