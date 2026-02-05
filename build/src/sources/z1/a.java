package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55086a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55087b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0772a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55088d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55089e;

        RunnableC0772a(g.c cVar, Typeface typeface) {
            this.f55088d = cVar;
            this.f55089e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55088d.b(this.f55089e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55091d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55092e;

        b(g.c cVar, int i10) {
            this.f55091d = cVar;
            this.f55092e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55091d.a(this.f55092e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55086a = cVar;
        this.f55087b = executor;
    }

    private void a(int i10) {
        this.f55087b.execute(new b(this.f55086a, i10));
    }

    private void c(Typeface typeface) {
        this.f55087b.execute(new RunnableC0772a(this.f55086a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55122a);
        } else {
            a(eVar.f55123b);
        }
    }
}
