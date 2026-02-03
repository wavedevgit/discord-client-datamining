package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f47366r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f47367d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f47368e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f47369i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f47370o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f47371p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f47372q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f47373d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f47373d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f47367d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f47373d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f47366r;
                    e10.a(str, "Updating notification for " + w.this.f47369i.f44960c);
                    w wVar = w.this;
                    wVar.f47367d.r(wVar.f47371p.a(wVar.f47368e, wVar.f47370o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f47369i.f44960c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f47367d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f47368e = context;
        this.f47369i = uVar;
        this.f47370o = cVar;
        this.f47371p = hVar;
        this.f47372q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f47367d.isCancelled()) {
            cVar.r(wVar.f47370o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f47367d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f47369i.f44974q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f47372q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f47372q.a());
            return;
        }
        this.f47367d.p(null);
    }
}
