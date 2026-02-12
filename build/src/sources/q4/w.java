package q4;

import android.content.Context;
import android.os.Build;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements Runnable {

    /* renamed from: r  reason: collision with root package name */
    static final String f43950r = k4.m.i("WorkForegroundRunnable");

    /* renamed from: d  reason: collision with root package name */
    final androidx.work.impl.utils.futures.c f43951d = androidx.work.impl.utils.futures.c.t();

    /* renamed from: e  reason: collision with root package name */
    final Context f43952e;

    /* renamed from: i  reason: collision with root package name */
    final p4.u f43953i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.work.c f43954o;

    /* renamed from: p  reason: collision with root package name */
    final k4.h f43955p;

    /* renamed from: q  reason: collision with root package name */
    final r4.b f43956q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f43957d;

        a(androidx.work.impl.utils.futures.c cVar) {
            this.f43957d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (w.this.f43951d.isCancelled()) {
                return;
            }
            try {
                k4.g gVar = (k4.g) this.f43957d.get();
                if (gVar != null) {
                    k4.m e10 = k4.m.e();
                    String str = w.f43950r;
                    e10.a(str, "Updating notification for " + w.this.f43953i.f41449c);
                    w wVar = w.this;
                    wVar.f43951d.r(wVar.f43955p.a(wVar.f43952e, wVar.f43954o.e(), gVar));
                    return;
                }
                throw new IllegalStateException("Worker was marked important (" + w.this.f43953i.f41449c + ") but did not provide ForegroundInfo");
            } catch (Throwable th2) {
                w.this.f43951d.q(th2);
            }
        }
    }

    public w(Context context, p4.u uVar, androidx.work.c cVar, k4.h hVar, r4.b bVar) {
        this.f43952e = context;
        this.f43953i = uVar;
        this.f43954o = cVar;
        this.f43955p = hVar;
        this.f43956q = bVar;
    }

    public static /* synthetic */ void a(w wVar, androidx.work.impl.utils.futures.c cVar) {
        if (!wVar.f43951d.isCancelled()) {
            cVar.r(wVar.f43954o.d());
        } else {
            cVar.cancel(true);
        }
    }

    public ListenableFuture b() {
        return this.f43951d;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (this.f43953i.f41463q && Build.VERSION.SDK_INT < 31) {
            final androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
            this.f43956q.a().execute(new Runnable() { // from class: q4.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(w.this, t10);
                }
            });
            t10.a(new a(t10), this.f43956q.a());
            return;
        }
        this.f43951d.p(null);
    }
}
