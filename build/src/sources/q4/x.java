package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f43958d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f43959a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f43960b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f43961c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f43962d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f43963e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f43964i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f43965o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f43962d = cVar;
            this.f43963e = uuid;
            this.f43964i = gVar;
            this.f43965o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f43962d.isCancelled()) {
                    String uuid = this.f43963e.toString();
                    p4.u i10 = x.this.f43961c.i(uuid);
                    if (i10 != null && !i10.f41447b.d()) {
                        x.this.f43960b.a(uuid, this.f43964i);
                        this.f43965o.startService(androidx.work.impl.foreground.b.e(this.f43965o, p4.x.a(i10), this.f43964i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f43962d.p(null);
            } catch (Throwable th2) {
                this.f43962d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f43960b = aVar;
        this.f43959a = bVar;
        this.f43961c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f43959a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
