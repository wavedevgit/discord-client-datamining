package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f56000a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f56001b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0787a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f56002d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f56003e;

        RunnableC0787a(g.c cVar, Typeface typeface) {
            this.f56002d = cVar;
            this.f56003e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f56002d.b(this.f56003e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f56005d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f56006e;

        b(g.c cVar, int i10) {
            this.f56005d = cVar;
            this.f56006e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f56005d.a(this.f56006e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f56000a = cVar;
        this.f56001b = executor;
    }

    private void a(int i10) {
        this.f56001b.execute(new b(this.f56000a, i10));
    }

    private void c(Typeface typeface) {
        this.f56001b.execute(new RunnableC0787a(this.f56000a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f56036a);
        } else {
            a(eVar.f56037b);
        }
    }
}
