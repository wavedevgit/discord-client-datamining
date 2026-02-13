package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f44527d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f44528a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f44529b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f44530c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f44531d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f44532e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f44533i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f44534o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f44531d = cVar;
            this.f44532e = uuid;
            this.f44533i = gVar;
            this.f44534o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f44531d.isCancelled()) {
                    String uuid = this.f44532e.toString();
                    p4.u i10 = x.this.f44530c.i(uuid);
                    if (i10 != null && !i10.f42016b.d()) {
                        x.this.f44529b.a(uuid, this.f44533i);
                        this.f44534o.startService(androidx.work.impl.foreground.b.e(this.f44534o, p4.x.a(i10), this.f44533i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f44531d.p(null);
            } catch (Throwable th2) {
                this.f44531d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f44529b = aVar;
        this.f44528a = bVar;
        this.f44530c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f44528a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
