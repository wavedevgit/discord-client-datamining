package q4;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x implements k4.h {

    /* renamed from: d  reason: collision with root package name */
    private static final String f46535d = k4.m.i("WMFgUpdater");

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f46536a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.work.impl.foreground.a f46537b;

    /* renamed from: c  reason: collision with root package name */
    final p4.v f46538c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f46539d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ UUID f46540e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k4.g f46541i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f46542o;

        a(androidx.work.impl.utils.futures.c cVar, UUID uuid, k4.g gVar, Context context) {
            this.f46539d = cVar;
            this.f46540e = uuid;
            this.f46541i = gVar;
            this.f46542o = context;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (!this.f46539d.isCancelled()) {
                    String uuid = this.f46540e.toString();
                    p4.u i10 = x.this.f46538c.i(uuid);
                    if (i10 != null && !i10.f43734b.d()) {
                        x.this.f46537b.a(uuid, this.f46541i);
                        this.f46542o.startService(androidx.work.impl.foreground.b.e(this.f46542o, p4.x.a(i10), this.f46541i));
                    } else {
                        throw new IllegalStateException("Calls to setForegroundAsync() must complete before a ListenableWorker signals completion of work by returning an instance of Result.");
                    }
                }
                this.f46539d.p(null);
            } catch (Throwable th2) {
                this.f46539d.q(th2);
            }
        }
    }

    public x(WorkDatabase workDatabase, androidx.work.impl.foreground.a aVar, r4.b bVar) {
        this.f46537b = aVar;
        this.f46536a = bVar;
        this.f46538c = workDatabase.H();
    }

    @Override // k4.h
    public ListenableFuture a(Context context, UUID uuid, k4.g gVar) {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        this.f46536a.d(new a(t10, uuid, gVar, context));
        return t10;
    }
}
