package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f45290d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f45291a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f45292b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f45293c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f45294d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f45295e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f45296i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f45297o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f45294d = cVar;
            this.f45295e = uuid;
            this.f45296i = gVar;
            this.f45297o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f45294d.isCancelled()) {
                    String uuid = this.f45295e.toString();
                    p4.u i10 = x.this.f45293c.i(uuid);
                    if (i10 != null && !i10.f42989b.d()) {
                        x.this.f45292b.a(uuid, this.f45296i);
                        this.f45297o.startService(androidx.work.impl.foreground.b.e(this.f45297o, p4.x.a(i10), this.f45296i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f45294d.p(null);
            } catch (Throwable th2) {
                this.f45294d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f45292b = aVar;
        this.f45291a = bVar;
        this.f45293c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f45291a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
