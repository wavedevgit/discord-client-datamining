package dk;

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
    private static final i f21756q = new i("MobileVisionBase", "");

    /* renamed from: r  reason: collision with root package name */
    public static final /* synthetic */ int f21757r = 0;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f21758d = new AtomicBoolean(false);

    /* renamed from: e  reason: collision with root package name */
    private final wj.f f21759e;

    /* renamed from: i  reason: collision with root package name */
    private final zg.b f21760i;

    /* renamed from: o  reason: collision with root package name */
    private final Executor f21761o;

    /* renamed from: p  reason: collision with root package name */
    private final Task f21762p;

    public e(wj.f fVar, Executor executor) {
        this.f21759e = fVar;
        zg.b bVar = new zg.b();
        this.f21760i = bVar;
        this.f21761o = executor;
        fVar.c();
        this.f21762p = fVar.a(executor, new Callable() { // from class: dk.g
            @Override // java.util.concurrent.Callable
            public final Object call() {
                int i10 = e.f21757r;
                return null;
            }
        }, bVar.b()).e(new zg.f() { // from class: dk.h
            @Override // zg.f
            public final void onFailure(Exception exc) {
                e.f21756q.d("MobileVisionBase", "Error preloading model resource", exc);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable, yj.a
    @w(Lifecycle.a.ON_DESTROY)
    public synchronized void close() {
        if (!this.f21758d.getAndSet(true)) {
            this.f21760i.a();
            this.f21759e.e(this.f21761o);
        }
    }

    public synchronized Task h(final ck.a aVar) {
        q.m(aVar, "InputImage can not be null");
        if (this.f21758d.get()) {
            return m.e(new sj.a("This detector is already closed!", 14));
        } else if (aVar.l() >= 32 && aVar.h() >= 32) {
            return this.f21759e.a(this.f21761o, new Callable() { // from class: dk.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return e.this.n(aVar);
                }
            }, this.f21760i.b());
        } else {
            return m.e(new sj.a("InputImage width and height should be at least 32!", 3));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Object n(ck.a aVar) {
        jb n10 = jb.n("detectorTaskWithResource#run");
        n10.h();
        try {
            Object i10 = this.f21759e.i(aVar);
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
