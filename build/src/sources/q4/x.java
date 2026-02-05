package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f47439d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f47440a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f47441b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f47442c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f47443d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f47444e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f47445i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f47446o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f47443d = cVar;
            this.f47444e = uuid;
            this.f47445i = gVar;
            this.f47446o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f47443d.isCancelled()) {
                    String uuid = this.f47444e.toString();
                    p4.u i10 = x.this.f47442c.i(uuid);
                    if (i10 != null && !i10.f44889b.d()) {
                        x.this.f47441b.a(uuid, this.f47445i);
                        this.f47446o.startService(androidx.work.impl.foreground.b.e(this.f47446o, p4.x.a(i10), this.f47445i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f47443d.p(null);
            } catch (Throwable th2) {
                this.f47443d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f47441b = aVar;
        this.f47440a = bVar;
        this.f47442c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f47440a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
