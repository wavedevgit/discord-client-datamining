package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55961a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55962b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0786a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55963d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55964e;

        RunnableC0786a(g.c cVar, Typeface typeface) {
            this.f55963d = cVar;
            this.f55964e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55963d.b(this.f55964e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55966d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55967e;

        b(g.c cVar, int i10) {
            this.f55966d = cVar;
            this.f55967e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55966d.a(this.f55967e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55961a = cVar;
        this.f55962b = executor;
    }

    private void a(int i10) {
        this.f55962b.execute(new b(this.f55961a, i10));
    }

    private void c(Typeface typeface) {
        this.f55962b.execute(new RunnableC0786a(this.f55961a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55997a);
        } else {
            a(eVar.f55998b);
        }
    }
}
