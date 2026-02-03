package wj;

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
import ng.jb;
import wg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e implements Closeable, o {

    /* renamed from: q  reason: collision with root package name */
    private static final i f52249q = new i("MobileVisionBase", "");

    /* renamed from: r  reason: collision with root package name */
    public static final /* synthetic */ int f52250r = 0;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f52251d = new AtomicBoolean(false);

    /* renamed from: e  reason: collision with root package name */
    private final pj.f f52252e;

    /* renamed from: i  reason: collision with root package name */
    private final wg.b f52253i;

    /* renamed from: o  reason: collision with root package name */
    private final Executor f52254o;

    /* renamed from: p  reason: collision with root package name */
    private final Task f52255p;

    public e(pj.f fVar, Executor executor) {
        this.f52252e = fVar;
        wg.b bVar = new wg.b();
        this.f52253i = bVar;
        this.f52254o = executor;
        fVar.c();
        this.f52255p = fVar.a(executor, new Callable() { // from class: wj.g
            @Override // java.util.concurrent.Callable
            public final Object call() {
                int i10 = e.f52250r;
                return null;
            }
        }, bVar.b()).e(new wg.f() { // from class: wj.h
            @Override // wg.f
            public final void onFailure(Exception exc) {
                e.f52249q.d("MobileVisionBase", "Error preloading model resource", exc);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable, rj.a
    @w(Lifecycle.a.ON_DESTROY)
    public synchronized void close() {
        if (!this.f52251d.getAndSet(true)) {
            this.f52253i.a();
            this.f52252e.e(this.f52254o);
        }
    }

    public synchronized Task l(final vj.a aVar) {
        q.m(aVar, "InputImage can not be null");
        if (this.f52251d.get()) {
            return m.e(new lj.a("This detector is already closed!", 14));
        } else if (aVar.l() >= 32 && aVar.h() >= 32) {
            return this.f52252e.a(this.f52254o, new Callable() { // from class: wj.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return e.this.x(aVar);
                }
            }, this.f52253i.b());
        } else {
            return m.e(new lj.a("InputImage width and height should be at least 32!", 3));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Object x(vj.a aVar) {
        jb x10 = jb.x("detectorTaskWithResource#run");
        x10.h();
        try {
            Object i10 = this.f52252e.i(aVar);
            x10.close();
            return i10;
        } catch (Throwable th2) {
            try {
                x10.close();
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
