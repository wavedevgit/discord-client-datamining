package os;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f44521t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f44522i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f44523o;

    /* renamed from: p  reason: collision with root package name */
    private final int f44524p;

    /* renamed from: q  reason: collision with root package name */
    private final String f44525q;

    /* renamed from: r  reason: collision with root package name */
    private final q f44526r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f44527s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f44528d;

        public a(Runnable runnable) {
            this.f44528d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f44528d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f44528d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f44523o, l.this)) {
                            j.c(l.this.f44523o, l.this, this);
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
        this.f44522i = kVar == null ? js.f0.a() : kVar;
        this.f44523o = coroutineDispatcher;
        this.f44524p = i10;
        this.f44525q = str;
        this.f44526r = new q(false);
        this.f44527s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater h2() {
        return f44521t;
    }

    public static final /* synthetic */ Object i2(l lVar) {
        return lVar.f44527s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f44526r.e();
            if (runnable == null) {
                synchronized (this.f44527s) {
                    f44521t.decrementAndGet(this);
                    if (this.f44526r.c() == 0) {
                        return null;
                    }
                    f44521t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f44527s) {
            if (f44521t.get(this) >= this.f44524p) {
                return false;
            }
            f44521t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.k
    public js.n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f44522i.D0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f44526r.a(runnable);
        if (f44521t.get(this) < this.f44524p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f44523o, this, new a(p22));
            } catch (Throwable th2) {
                f44521t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f44522i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f44526r.a(runnable);
        if (f44521t.get(this) < this.f44524p && q2() && (p22 = p2()) != null) {
            try {
                this.f44523o.U1(this, new a(p22));
            } catch (Throwable th2) {
                f44521t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f44524p) {
            return m.b(this, str);
        }
        return super.b2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f44525q;
        if (str == null) {
            return this.f44523o + ".limitedParallelism(" + this.f44524p + ')';
        }
        return str;
    }
}
