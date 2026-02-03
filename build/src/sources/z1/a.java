package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55500a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55501b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0774a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55502d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55503e;

        RunnableC0774a(g.c cVar, Typeface typeface) {
            this.f55502d = cVar;
            this.f55503e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55502d.b(this.f55503e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55505d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55506e;

        b(g.c cVar, int i10) {
            this.f55505d = cVar;
            this.f55506e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55505d.a(this.f55506e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55500a = cVar;
        this.f55501b = executor;
    }

    private void a(int i10) {
        this.f55501b.execute(new b(this.f55500a, i10));
    }

    private void c(Typeface typeface) {
        this.f55501b.execute(new RunnableC0774a(this.f55500a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55536a);
        } else {
            a(eVar.f55537b);
        }
    }
}
