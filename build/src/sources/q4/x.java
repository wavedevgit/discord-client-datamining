package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f46487d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f46488a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f46489b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f46490c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f46491d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f46492e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f46493i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f46494o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f46491d = cVar;
            this.f46492e = uuid;
            this.f46493i = gVar;
            this.f46494o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f46491d.isCancelled()) {
                    String uuid = this.f46492e.toString();
                    p4.u i10 = x.this.f46490c.i(uuid);
                    if (i10 != null && !i10.f43686b.d()) {
                        x.this.f46489b.a(uuid, this.f46493i);
                        this.f46494o.startService(androidx.work.impl.foreground.b.e(this.f46494o, p4.x.a(i10), this.f46493i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f46491d.p(null);
            } catch (Throwable th2) {
                this.f46491d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f46489b = aVar;
        this.f46488a = bVar;
        this.f46490c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f46488a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
