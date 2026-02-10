package bk;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.o;
import androidx.lifecycle.w;
import com.google.android.gms.tasks.Task;
import hf.i;
import hf.q;
import java.io.Closeable;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import pg.jb;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e implements Closeable, o {

    /* renamed from: q  reason: collision with root package name */
    private static final i f7080q = new i("MobileVisionBase", "");

    /* renamed from: r  reason: collision with root package name */
    public static final /* synthetic */ int f7081r = 0;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f7082d = new AtomicBoolean(false);

    /* renamed from: e  reason: collision with root package name */
    private final uj.f f7083e;

    /* renamed from: i  reason: collision with root package name */
    private final zg.b f7084i;

    /* renamed from: o  reason: collision with root package name */
    private final Executor f7085o;

    /* renamed from: p  reason: collision with root package name */
    private final Task f7086p;

    public e(uj.f fVar, Executor executor) {
        this.f7083e = fVar;
        zg.b bVar = new zg.b();
        this.f7084i = bVar;
        this.f7085o = executor;
        fVar.c();
        this.f7086p = fVar.a(executor, new Callable() { // from class: bk.g
            @Override // java.util.concurrent.Callable
            public final Object call() {
                int i10 = e.f7081r;
                return null;
            }
        }, bVar.b()).e(new zg.f() { // from class: bk.h
            @Override // zg.f
            public final void onFailure(Exception exc) {
                e.f7080q.d("MobileVisionBase", "Error preloading model resource", exc);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    @w(Lifecycle.a.ON_DESTROY)
    public synchronized void close() {
        if (!this.f7082d.getAndSet(true)) {
            this.f7084i.a();
            this.f7083e.e(this.f7085o);
        }
    }

    public synchronized Task g(final ak.a aVar) {
        q.m(aVar, "InputImage can not be null");
        if (this.f7082d.get()) {
            return m.e(new qj.a("This detector is already closed!", 14));
        } else if (aVar.l() >= 32 && aVar.h() >= 32) {
            return this.f7083e.a(this.f7085o, new Callable() { // from class: bk.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return e.this.m(aVar);
                }
            }, this.f7084i.b());
        } else {
            return m.e(new qj.a("InputImage width and height should be at least 32!", 3));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Object m(ak.a aVar) {
        jb n10 = jb.n("detectorTaskWithResource#run");
        n10.g();
        try {
            Object i10 = this.f7083e.i(aVar);
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
