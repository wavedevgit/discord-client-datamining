package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f56001a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f56002b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0787a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f56003d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f56004e;

        RunnableC0787a(g.c cVar, Typeface typeface) {
            this.f56003d = cVar;
            this.f56004e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f56003d.b(this.f56004e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f56006d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f56007e;

        b(g.c cVar, int i10) {
            this.f56006d = cVar;
            this.f56007e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f56006d.a(this.f56007e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f56001a = cVar;
        this.f56002b = executor;
    }

    private void a(int i10) {
        this.f56002b.execute(new b(this.f56001a, i10));
    }

    private void c(Typeface typeface) {
        this.f56002b.execute(new RunnableC0787a(this.f56001a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f56037a);
        } else {
            a(eVar.f56038b);
        }
    }
}
