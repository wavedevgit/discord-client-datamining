package dt;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f21888t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f21889i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f21890o;

    /* renamed from: p  reason: collision with root package name */
    private final int f21891p;

    /* renamed from: q  reason: collision with root package name */
    private final String f21892q;

    /* renamed from: r  reason: collision with root package name */
    private final q f21893r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f21894s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f21895d;

        public a(Runnable runnable) {
            this.f21895d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f21895d.run();
                Runnable g22 = l.this.g2();
                if (g22 != null) {
                    try {
                        this.f21895d = g22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f21890o, l.this)) {
                            j.c(l.this.f21890o, l.this, this);
                            return;
                        }
                    }
                } else {
                    return;
                }
            }
        }
    }

    public l(CoroutineDispatcher coroutineDispatcher, int i10, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f21889i = kVar == null ? ys.f0.a() : kVar;
        this.f21890o = coroutineDispatcher;
        this.f21891p = i10;
        this.f21892q = str;
        this.f21893r = new q(false);
        this.f21894s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater Y1() {
        return f21888t;
    }

    public static final /* synthetic */ Object a2(l lVar) {
        return lVar.f21894s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable g2() {
        while (true) {
            Runnable runnable = (Runnable) this.f21893r.e();
            if (runnable == null) {
                synchronized (this.f21894s) {
                    f21888t.decrementAndGet(this);
                    if (this.f21893r.c() == 0) {
                        return null;
                    }
                    f21888t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean l2() {
        synchronized (this.f21894s) {
            if (f21888t.get(this) >= this.f21891p) {
                return false;
            }
            f21888t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher B1(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f21891p) {
            return m.b(this, str);
        }
        return super.B1(i10, str);
    }

    @Override // kotlinx.coroutines.k
    public ys.n0 C0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f21889i.C0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable g22;
        this.f21893r.a(runnable);
        if (f21888t.get(this) < this.f21891p && l2() && (g22 = g2()) != null) {
            try {
                j.c(this.f21890o, this, new a(g22));
            } catch (Throwable th2) {
                f21888t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f21892q;
        if (str == null) {
            return this.f21890o + ".limitedParallelism(" + this.f21891p + ')';
        }
        return str;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void w1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable g22;
        this.f21893r.a(runnable);
        if (f21888t.get(this) < this.f21891p && l2() && (g22 = g2()) != null) {
            try {
                this.f21890o.w1(this, new a(g22));
            } catch (Throwable th2) {
                f21888t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public void z(long j10, CancellableContinuation cancellableContinuation) {
        this.f21889i.z(j10, cancellableContinuation);
    }
}
