package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f55230a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f55231b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0769a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55232d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f55233e;

        RunnableC0769a(g.c cVar, Typeface typeface) {
            this.f55232d = cVar;
            this.f55233e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55232d.b(this.f55233e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f55235d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f55236e;

        b(g.c cVar, int i10) {
            this.f55235d = cVar;
            this.f55236e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f55235d.a(this.f55236e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f55230a = cVar;
        this.f55231b = executor;
    }

    private void a(int i10) {
        this.f55231b.execute(new b(this.f55230a, i10));
    }

    private void c(Typeface typeface) {
        this.f55231b.execute(new RunnableC0769a(this.f55230a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f55266a);
        } else {
            a(eVar.f55267b);
        }
    }
}
