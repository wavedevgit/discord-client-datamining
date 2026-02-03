package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f47225d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f47226a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f47227b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f47228c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f47229d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f47230e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f47231i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f47232o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f47229d = cVar;
            this.f47230e = uuid;
            this.f47231i = gVar;
            this.f47232o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f47229d.isCancelled()) {
                    String uuid = this.f47230e.toString();
                    p4.u i10 = x.this.f47228c.i(uuid);
                    if (i10 != null && !i10.f45001b.d()) {
                        x.this.f47227b.a(uuid, this.f47231i);
                        this.f47232o.startService(androidx.work.impl.foreground.b.e(this.f47232o, p4.x.a(i10), this.f47231i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f47229d.p(null);
            } catch (Throwable th2) {
                this.f47229d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f47227b = aVar;
        this.f47226a = bVar;
        this.f47228c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f47226a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
