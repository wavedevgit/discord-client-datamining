package com.android.volley;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f8808a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Handler f8809d;

        a(Handler handler) {
            this.f8809d = handler;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f8809d.post(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final n f8811d;

        /* renamed from: e  reason: collision with root package name */
        private final p f8812e;

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f8813i;

        public b(n nVar, p pVar, Runnable runnable) {
            this.f8811d = nVar;
            this.f8812e = pVar;
            this.f8813i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f8811d.isCanceled()) {
                this.f8811d.finish("canceled-at-delivery");
                return;
            }
            if (this.f8812e.b()) {
                this.f8811d.deliverResponse(this.f8812e.f8846a);
            } else {
                this.f8811d.deliverError(this.f8812e.f8848c);
            }
            if (this.f8812e.f8849d) {
                this.f8811d.addMarker("intermediate-response");
            } else {
                this.f8811d.finish("done");
            }
            Runnable runnable = this.f8813i;
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    public f(Handler handler) {
        this.f8808a = new a(handler);
    }

    @Override // com.android.volley.q
    public void a(n nVar, p pVar) {
        b(nVar, pVar, null);
    }

    @Override // com.android.volley.q
    public void b(n nVar, p pVar, Runnable runnable) {
        nVar.markDelivered();
        nVar.addMarker("post-response");
        this.f8808a.execute(new b(nVar, pVar, runnable));
    }

    @Override // com.android.volley.q
    public void c(n nVar, u uVar) {
        nVar.addMarker("post-error");
        this.f8808a.execute(new b(nVar, p.a(uVar), null));
    }
}
