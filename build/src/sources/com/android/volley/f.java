package com.android.volley;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f8778a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Handler f8779d;

        a(Handler handler) {
            this.f8779d = handler;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f8779d.post(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final n f8781d;

        /* renamed from: e  reason: collision with root package name */
        private final p f8782e;

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f8783i;

        public b(n nVar, p pVar, Runnable runnable) {
            this.f8781d = nVar;
            this.f8782e = pVar;
            this.f8783i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f8781d.isCanceled()) {
                this.f8781d.finish("canceled-at-delivery");
                return;
            }
            if (this.f8782e.b()) {
                this.f8781d.deliverResponse(this.f8782e.f8816a);
            } else {
                this.f8781d.deliverError(this.f8782e.f8818c);
            }
            if (this.f8782e.f8819d) {
                this.f8781d.addMarker("intermediate-response");
            } else {
                this.f8781d.finish("done");
            }
            Runnable runnable = this.f8783i;
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    public f(Handler handler) {
        this.f8778a = new a(handler);
    }

    @Override // com.android.volley.q
    public void a(n nVar, p pVar) {
        b(nVar, pVar, null);
    }

    @Override // com.android.volley.q
    public void b(n nVar, p pVar, Runnable runnable) {
        nVar.markDelivered();
        nVar.addMarker("post-response");
        this.f8778a.execute(new b(nVar, pVar, runnable));
    }

    @Override // com.android.volley.q
    public void c(n nVar, u uVar) {
        nVar.addMarker("post-error");
        this.f8778a.execute(new b(nVar, p.a(uVar), null));
    }
}
