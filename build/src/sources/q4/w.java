package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f47216r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f47217d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f47218e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f47219i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f47220o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f47221p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f47222q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f47223d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f47223d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f47217d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f47223d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f47216r;
                    e10.a(str, "Updating notification for " + w.this.f47219i.f45002c);
                    w wVar = w.this;
                    wVar.f47217d.r(wVar.f47221p.a(wVar.f47218e, wVar.f47220o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f47219i.f45002c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f47217d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f47218e = context;
        this.f47219i = uVar;
        this.f47220o = cVar;
        this.f47221p = hVar;
        this.f47222q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f47217d.isCancelled()) {
            cVar.r(wVar.f47220o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f47217d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f47219i.f45016q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f47222q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f47222q.a());
            return;
        }
        this.f47217d.p(null);
    }
}
