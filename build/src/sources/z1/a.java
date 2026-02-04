package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55497a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55498b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0774a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55499d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55500e;

        RunnableC0774a(g.c cVar, Typeface typeface) {
            this.f55499d = cVar;
            this.f55500e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55499d.b(this.f55500e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55502d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55503e;

        b(g.c cVar, int i10) {
            this.f55502d = cVar;
            this.f55503e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55502d.a(this.f55503e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55497a = cVar;
        this.f55498b = executor;
    }

    private void a(int i10) {
        this.f55498b.execute(new b(this.f55497a, i10));
    }

    private void c(Typeface typeface) {
        this.f55498b.execute(new RunnableC0774a(this.f55497a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55533a);
        } else {
            a(eVar.f55534b);
        }
    }
}
