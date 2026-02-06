package com.android.volley;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f8060a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Handler f8061d;

        a(Handler handler) {
            this.f8061d = handler;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f8061d.post(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final n f8063d;

        /* renamed from: e  reason: collision with root package name */
        private final p f8064e;

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f8065i;

        public b(n nVar, p pVar, Runnable runnable) {
            this.f8063d = nVar;
            this.f8064e = pVar;
            this.f8065i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f8063d.isCanceled()) {
                this.f8063d.finish("canceled-at-delivery");
                return;
            }
            if (this.f8064e.b()) {
                this.f8063d.deliverResponse(this.f8064e.f8098a);
            } else {
                this.f8063d.deliverError(this.f8064e.f8100c);
            }
            if (this.f8064e.f8101d) {
                this.f8063d.addMarker("intermediate-response");
            } else {
                this.f8063d.finish("done");
            }
            Runnable runnable = this.f8065i;
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    public f(Handler handler) {
        this.f8060a = new a(handler);
    }

    @Override // com.android.volley.q
    public void a(n nVar, p pVar) {
        b(nVar, pVar, null);
    }

    @Override // com.android.volley.q
    public void b(n nVar, p pVar, Runnable runnable) {
        nVar.markDelivered();
        nVar.addMarker("post-response");
        this.f8060a.execute(new b(nVar, pVar, runnable));
    }

    @Override // com.android.volley.q
    public void c(n nVar, u uVar) {
        nVar.addMarker("post-error");
        this.f8060a.execute(new b(nVar, p.a(uVar), null));
    }
}
