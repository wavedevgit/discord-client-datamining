package ak;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.o;
import androidx.lifecycle.w;
import com.google.android.gms.tasks.Task;
import gf.i;
import gf.q;
import java.io.Closeable;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import og.jb;
import yg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e implements Closeable, o {

    /* renamed from: q  reason: collision with root package name */
    private static final i f1092q = new i("MobileVisionBase", "");

    /* renamed from: r  reason: collision with root package name */
    public static final /* synthetic */ int f1093r = 0;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f1094d = new AtomicBoolean(false);

    /* renamed from: e  reason: collision with root package name */
    private final tj.f f1095e;

    /* renamed from: i  reason: collision with root package name */
    private final yg.b f1096i;

    /* renamed from: o  reason: collision with root package name */
    private final Executor f1097o;

    /* renamed from: p  reason: collision with root package name */
    private final Task f1098p;

    public e(tj.f fVar, Executor executor) {
        this.f1095e = fVar;
        yg.b bVar = new yg.b();
        this.f1096i = bVar;
        this.f1097o = executor;
        fVar.c();
        this.f1098p = fVar.a(executor, new Callable() { // from class: ak.g
            @Override // java.util.concurrent.Callable
            public final Object call() {
                int i10 = e.f1093r;
                return null;
            }
        }, bVar.b()).e(new yg.f() { // from class: ak.h
            @Override // yg.f
            public final void onFailure(Exception exc) {
                e.f1092q.d("MobileVisionBase", "Error preloading model resource", exc);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    @w(Lifecycle.a.ON_DESTROY)
    public synchronized void close() {
        if (!this.f1094d.getAndSet(true)) {
            this.f1096i.a();
            this.f1095e.e(this.f1097o);
        }
    }

    public synchronized Task g(final zj.a aVar) {
        q.m(aVar, "InputImage can not be null");
        if (this.f1094d.get()) {
            return m.e(new pj.a("This detector is already closed!", 14));
        } else if (aVar.l() >= 32 && aVar.h() >= 32) {
            return this.f1095e.a(this.f1097o, new Callable() { // from class: ak.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return e.this.m(aVar);
                }
            }, this.f1096i.b());
        } else {
            return m.e(new pj.a("InputImage width and height should be at least 32!", 3));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Object m(zj.a aVar) {
        jb n10 = jb.n("detectorTaskWithResource#run");
        n10.g();
        try {
            Object i10 = this.f1095e.i(aVar);
            n10.close();
            return i10;
        } catch (Throwable th2) {
            try {
                n10.close();
            } catch (Throwable th3) {
                try {
                    Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(th2, th3);
                } catch (Exception unused) {
                }
            }
            throw th2;
        }
    }
}
