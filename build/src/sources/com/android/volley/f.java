package com.android.volley;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f8161a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Handler f8162d;

        a(Handler handler) {
            this.f8162d = handler;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f8162d.post(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final n f8164d;

        /* renamed from: e  reason: collision with root package name */
        private final p f8165e;

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f8166i;

        public b(n nVar, p pVar, Runnable runnable) {
            this.f8164d = nVar;
            this.f8165e = pVar;
            this.f8166i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f8164d.isCanceled()) {
                this.f8164d.finish("canceled-at-delivery");
                return;
            }
            if (this.f8165e.b()) {
                this.f8164d.deliverResponse(this.f8165e.f8199a);
            } else {
                this.f8164d.deliverError(this.f8165e.f8201c);
            }
            if (this.f8165e.f8202d) {
                this.f8164d.addMarker("intermediate-response");
            } else {
                this.f8164d.finish("done");
            }
            Runnable runnable = this.f8166i;
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    public f(Handler handler) {
        this.f8161a = new a(handler);
    }

    @Override // com.android.volley.q
    public void a(n nVar, p pVar) {
        b(nVar, pVar, null);
    }

    @Override // com.android.volley.q
    public void b(n nVar, p pVar, Runnable runnable) {
        nVar.markDelivered();
        nVar.addMarker("post-response");
        this.f8161a.execute(new b(nVar, pVar, runnable));
    }

    @Override // com.android.volley.q
    public void c(n nVar, u uVar) {
        nVar.addMarker("post-error");
        this.f8161a.execute(new b(nVar, p.a(uVar), null));
    }
}
