package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f47375d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f47376a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f47377b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f47378c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f47379d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f47380e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f47381i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f47382o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f47379d = cVar;
            this.f47380e = uuid;
            this.f47381i = gVar;
            this.f47382o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f47379d.isCancelled()) {
                    String uuid = this.f47380e.toString();
                    p4.u i10 = x.this.f47378c.i(uuid);
                    if (i10 != null && !i10.f44959b.d()) {
                        x.this.f47377b.a(uuid, this.f47381i);
                        this.f47382o.startService(androidx.work.impl.foreground.b.e(this.f47382o, p4.x.a(i10), this.f47381i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f47379d.p(null);
            } catch (Throwable th2) {
                this.f47379d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f47377b = aVar;
        this.f47376a = bVar;
        this.f47378c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f47376a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
