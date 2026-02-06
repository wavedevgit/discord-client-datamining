package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55817a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55818b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0760a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55819d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55820e;

        RunnableC0760a(g.c cVar, Typeface typeface) {
            this.f55819d = cVar;
            this.f55820e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55819d.b(this.f55820e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55822d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55823e;

        b(g.c cVar, int i10) {
            this.f55822d = cVar;
            this.f55823e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55822d.a(this.f55823e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55817a = cVar;
        this.f55818b = executor;
    }

    private void a(int i10) {
        this.f55818b.execute(new b(this.f55817a, i10));
    }

    private void c(Typeface typeface) {
        this.f55818b.execute(new RunnableC0760a(this.f55817a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55853a);
        } else {
            a(eVar.f55854b);
        }
    }
}
