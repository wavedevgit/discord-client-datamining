package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55362a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55363b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0780a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55364d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55365e;

        RunnableC0780a(g.c cVar, Typeface typeface) {
            this.f55364d = cVar;
            this.f55365e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55364d.b(this.f55365e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55367d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55368e;

        b(g.c cVar, int i10) {
            this.f55367d = cVar;
            this.f55368e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55367d.a(this.f55368e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55362a = cVar;
        this.f55363b = executor;
    }

    private void a(int i10) {
        this.f55363b.execute(new b(this.f55362a, i10));
    }

    private void c(Typeface typeface) {
        this.f55363b.execute(new RunnableC0780a(this.f55362a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55398a);
        } else {
            a(eVar.f55399b);
        }
    }
}
