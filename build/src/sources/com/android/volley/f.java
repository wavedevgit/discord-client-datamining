package com.android.volley;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f9179a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Handler f9180d;

        a(Handler handler) {
            this.f9180d = handler;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f9180d.post(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final n f9182d;

        /* renamed from: e  reason: collision with root package name */
        private final p f9183e;

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f9184i;

        public b(n nVar, p pVar, Runnable runnable) {
            this.f9182d = nVar;
            this.f9183e = pVar;
            this.f9184i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f9182d.isCanceled()) {
                this.f9182d.finish("canceled-at-delivery");
                return;
            }
            if (this.f9183e.b()) {
                this.f9182d.deliverResponse(this.f9183e.f9217a);
            } else {
                this.f9182d.deliverError(this.f9183e.f9219c);
            }
            if (this.f9183e.f9220d) {
                this.f9182d.addMarker("intermediate-response");
            } else {
                this.f9182d.finish("done");
            }
            Runnable runnable = this.f9184i;
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    public f(Handler handler) {
        this.f9179a = new a(handler);
    }

    @Override // com.android.volley.q
    public void a(n nVar, p pVar) {
        b(nVar, pVar, null);
    }

    @Override // com.android.volley.q
    public void b(n nVar, p pVar, Runnable runnable) {
        nVar.markDelivered();
        nVar.addMarker("post-response");
        this.f9179a.execute(new b(nVar, pVar, runnable));
    }

    @Override // com.android.volley.q
    public void c(n nVar, u uVar) {
        nVar.addMarker("post-error");
        this.f9179a.execute(new b(nVar, p.a(uVar), null));
    }
}
