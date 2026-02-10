package us;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f51786t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f51787i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f51788o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51789p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51790q;

    /* renamed from: r  reason: collision with root package name */
    private final q f51791r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f51792s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f51793d;

        public a(Runnable runnable) {
            this.f51793d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f51793d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f51793d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f51788o, l.this)) {
                            j.c(l.this.f51788o, l.this, this);
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
        this.f51787i = kVar == null ? ps.f0.a() : kVar;
        this.f51788o = coroutineDispatcher;
        this.f51789p = i10;
        this.f51790q = str;
        this.f51791r = new q(false);
        this.f51792s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater g2() {
        return f51786t;
    }

    public static final /* synthetic */ Object h2(l lVar) {
        return lVar.f51792s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f51791r.e();
            if (runnable == null) {
                synchronized (this.f51792s) {
                    f51786t.decrementAndGet(this);
                    if (this.f51791r.c() == 0) {
                        return null;
                    }
                    f51786t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f51792s) {
            if (f51786t.get(this) >= this.f51789p) {
                return false;
            }
            f51786t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void S1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f51791r.a(runnable);
        if (f51786t.get(this) < this.f51789p && q2() && (p22 = p2()) != null) {
            try {
                this.f51788o.S1(this, new a(p22));
            } catch (Throwable th2) {
                f51786t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public ps.n0 Z(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f51787i.Z(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher Z1(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f51789p) {
            return m.b(this, str);
        }
        return super.Z1(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f51790q;
        if (str == null) {
            return this.f51788o + ".limitedParallelism(" + this.f51789p + ')';
        }
        return str;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        this.f51787i.y(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f51791r.a(runnable);
        if (f51786t.get(this) < this.f51789p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f51788o, this, new a(p22));
            } catch (Throwable th2) {
                f51786t.decrementAndGet(this);
                throw th2;
            }
        }
    }
}
