package androidx.work;

import android.content.Context;
import androidx.annotation.NonNull;
import androidx.work.c;
import com.google.common.util.concurrent.ListenableFuture;
import k4.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class Worker extends c {

    /* renamed from: p  reason: collision with root package name */
    androidx.work.impl.utils.futures.c f5610p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                Worker.this.f5610p.p(Worker.this.p());
            } catch (Throwable th2) {
                Worker.this.f5610p.q(th2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.work.impl.utils.futures.c f5612d;

        b(androidx.work.impl.utils.futures.c cVar) {
            this.f5612d = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f5612d.p(Worker.this.q());
            } catch (Throwable th2) {
                this.f5612d.q(th2);
            }
        }
    }

    public Worker(@NonNull Context context, @NonNull WorkerParameters workerParameters) {
        super(context, workerParameters);
    }

    @Override // androidx.work.c
    public ListenableFuture d() {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        c().execute(new b(t10));
        return t10;
    }

    @Override // androidx.work.c
    public final ListenableFuture n() {
        this.f5610p = androidx.work.impl.utils.futures.c.t();
        c().execute(new a());
        return this.f5610p;
    }

    public abstract c.a p();

    public g q() {
        throw new IllegalStateException("Expedited WorkRequests require a Worker to provide an implementation for \n `getForegroundInfo()`");
    }
}
