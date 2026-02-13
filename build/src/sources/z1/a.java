package z1;

import android.graphics.Typeface;
import java.util.concurrent.Executor;
import z1.f;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final g.c f56569a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f56570b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0787a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f56571d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f56572e;

        RunnableC0787a(g.c cVar, Typeface typeface) {
            this.f56571d = cVar;
            this.f56572e = typeface;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f56571d.b(this.f56572e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g.c f56574d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f56575e;

        b(g.c cVar, int i10) {
            this.f56574d = cVar;
            this.f56575e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f56574d.a(this.f56575e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(g.c cVar, Executor executor) {
        this.f56569a = cVar;
        this.f56570b = executor;
    }

    private void a(int i10) {
        this.f56570b.execute(new b(this.f56569a, i10));
    }

    private void c(Typeface typeface) {
        this.f56570b.execute(new RunnableC0787a(this.f56569a, typeface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(f.e eVar) {
        if (eVar.a()) {
            c(eVar.f56605a);
        } else {
            a(eVar.f56606b);
        }
    }
}
