package com.android.volley;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f8777a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Handler f8778d;

        a(Handler handler) {
            this.f8778d = handler;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f8778d.post(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final n f8780d;

        /* renamed from: e  reason: collision with root package name */
        private final p f8781e;

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f8782i;

        public b(n nVar, p pVar, Runnable runnable) {
            this.f8780d = nVar;
            this.f8781e = pVar;
            this.f8782i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f8780d.isCanceled()) {
                this.f8780d.finish("canceled-at-delivery");
                return;
            }
            if (this.f8781e.b()) {
                this.f8780d.deliverResponse(this.f8781e.f8815a);
            } else {
                this.f8780d.deliverError(this.f8781e.f8817c);
            }
            if (this.f8781e.f8818d) {
                this.f8780d.addMarker("intermediate-response");
            } else {
                this.f8780d.finish("done");
            }
            Runnable runnable = this.f8782i;
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    public f(Handler handler) {
        this.f8777a = new a(handler);
    }

    @Override // com.android.volley.q
    public void a(n nVar, p pVar) {
        b(nVar, pVar, null);
    }

    @Override // com.android.volley.q
    public void b(n nVar, p pVar, Runnable runnable) {
        nVar.markDelivered();
        nVar.addMarker("post-response");
        this.f8777a.execute(new b(nVar, pVar, runnable));
    }

    @Override // com.android.volley.q
    public void c(n nVar, u uVar) {
        nVar.addMarker("post-error");
        this.f8777a.execute(new b(nVar, p.a(uVar), null));
    }
}
