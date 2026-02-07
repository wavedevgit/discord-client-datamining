package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55865a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55866b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0760a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55867d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55868e;

        RunnableC0760a(g.c cVar, Typeface typeface) {
            this.f55867d = cVar;
            this.f55868e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55867d.b(this.f55868e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55870d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55871e;

        b(g.c cVar, int i10) {
            this.f55870d = cVar;
            this.f55871e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55870d.a(this.f55871e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55865a = cVar;
        this.f55866b = executor;
    }

    private void a(int i10) {
        this.f55866b.execute(new b(this.f55865a, i10));
    }

    private void c(Typeface typeface) {
        this.f55866b.execute(new RunnableC0760a(this.f55865a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55901a);
        } else {
            a(eVar.f55902b);
        }
    }
}
