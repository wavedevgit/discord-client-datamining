package com.android.volley;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f7776a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Handler f7777d;

        a(Handler handler) {
            this.f7777d = handler;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f7777d.post(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final n f7779d;

        /* renamed from: e  reason: collision with root package name */
        private final p f7780e;

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f7781i;

        public b(n nVar, p pVar, Runnable runnable) {
            this.f7779d = nVar;
            this.f7780e = pVar;
            this.f7781i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f7779d.isCanceled()) {
                this.f7779d.finish("canceled-at-delivery");
                return;
            }
            if (this.f7780e.b()) {
                this.f7779d.deliverResponse(this.f7780e.f7814a);
            } else {
                this.f7779d.deliverError(this.f7780e.f7816c);
            }
            if (this.f7780e.f7817d) {
                this.f7779d.addMarker("intermediate-response");
            } else {
                this.f7779d.finish("done");
            }
            Runnable runnable = this.f7781i;
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    public f(Handler handler) {
        this.f7776a = new a(handler);
    }

    @Override // com.android.volley.q
    public void a(n nVar, p pVar) {
        b(nVar, pVar, null);
    }

    @Override // com.android.volley.q
    public void b(n nVar, p pVar, Runnable runnable) {
        nVar.markDelivered();
        nVar.addMarker("post-response");
        this.f7776a.execute(new b(nVar, pVar, runnable));
    }

    @Override // com.android.volley.q
    public void c(n nVar, u uVar) {
        nVar.addMarker("post-error");
        this.f7776a.execute(new b(nVar, p.a(uVar), null));
    }
}
