package zj;

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
import xg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e implements Closeable, o {

    /* renamed from: q  reason: collision with root package name */
    private static final i f55997q = new i("MobileVisionBase", "");

    /* renamed from: r  reason: collision with root package name */
    public static final /* synthetic */ int f55998r = 0;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f55999d = new AtomicBoolean(false);

    /* renamed from: e  reason: collision with root package name */
    private final sj.f f56000e;

    /* renamed from: i  reason: collision with root package name */
    private final xg.b f56001i;

    /* renamed from: o  reason: collision with root package name */
    private final Executor f56002o;

    /* renamed from: p  reason: collision with root package name */
    private final Task f56003p;

    public e(sj.f fVar, Executor executor) {
        this.f56000e = fVar;
        xg.b bVar = new xg.b();
        this.f56001i = bVar;
        this.f56002o = executor;
        fVar.c();
        this.f56003p = fVar.a(executor, new Callable() { // from class: zj.g
            @Override // java.util.concurrent.Callable
            public final Object call() {
                int i10 = e.f55998r;
                return null;
            }
        }, bVar.b()).e(new xg.f() { // from class: zj.h
            @Override // xg.f
            public final void onFailure(Exception exc) {
                e.f55997q.d("MobileVisionBase", "Error preloading model resource", exc);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable, uj.a
    @w(Lifecycle.a.ON_DESTROY)
    public synchronized void close() {
        if (!this.f55999d.getAndSet(true)) {
            this.f56001i.a();
            this.f56000e.e(this.f56002o);
        }
    }

    public synchronized Task k(final yj.a aVar) {
        q.m(aVar, "InputImage can not be null");
        if (this.f55999d.get()) {
            return m.e(new oj.a("This detector is already closed!", 14));
        } else if (aVar.l() >= 32 && aVar.h() >= 32) {
            return this.f56000e.a(this.f56002o, new Callable() { // from class: zj.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return e.this.m(aVar);
                }
            }, this.f56001i.b());
        } else {
            return m.e(new oj.a("InputImage width and height should be at least 32!", 3));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Object m(yj.a aVar) {
        jb o10 = jb.o("detectorTaskWithResource#run");
        o10.h();
        try {
            Object i10 = this.f56000e.i(aVar);
            o10.close();
            return i10;
        } catch (Throwable th2) {
            try {
                o10.close();
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
