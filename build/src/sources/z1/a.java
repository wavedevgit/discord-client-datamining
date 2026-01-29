package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55214a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55215b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0769a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55216d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55217e;

        RunnableC0769a(g.c cVar, Typeface typeface) {
            this.f55216d = cVar;
            this.f55217e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55216d.b(this.f55217e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55219d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55220e;

        b(g.c cVar, int i10) {
            this.f55219d = cVar;
            this.f55220e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55219d.a(this.f55220e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55214a = cVar;
        this.f55215b = executor;
    }

    private void a(int i10) {
        this.f55215b.execute(new b(this.f55214a, i10));
    }

    private void c(Typeface typeface) {
        this.f55215b.execute(new RunnableC0769a(this.f55214a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55250a);
        } else {
            a(eVar.f55251b);
        }
    }
}
