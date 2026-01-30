package ls;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f37466t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f37467i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f37468o;

    /* renamed from: p  reason: collision with root package name */
    private final int f37469p;

    /* renamed from: q  reason: collision with root package name */
    private final String f37470q;

    /* renamed from: r  reason: collision with root package name */
    private final q f37471r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f37472s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f37473d;

        public a(Runnable runnable) {
            this.f37473d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f37473d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f37473d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f37468o, l.this)) {
                            j.c(l.this.f37468o, l.this, this);
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
        this.f37467i = kVar == null ? gs.f0.a() : kVar;
        this.f37468o = coroutineDispatcher;
        this.f37469p = i10;
        this.f37470q = str;
        this.f37471r = new q(false);
        this.f37472s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater h2() {
        return f37466t;
    }

    public static final /* synthetic */ Object i2(l lVar) {
        return lVar.f37472s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f37471r.e();
            if (runnable == null) {
                synchronized (this.f37472s) {
                    f37466t.decrementAndGet(this);
                    if (this.f37471r.c() == 0) {
                        return null;
                    }
                    f37466t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f37472s) {
            if (f37466t.get(this) >= this.f37469p) {
                return false;
            }
            f37466t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.k
    public gs.n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f37467i.D0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f37471r.a(runnable);
        if (f37466t.get(this) < this.f37469p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f37468o, this, new a(p22));
            } catch (Throwable th2) {
                f37466t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f37467i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f37471r.a(runnable);
        if (f37466t.get(this) < this.f37469p && q2() && (p22 = p2()) != null) {
            try {
                this.f37468o.U1(this, new a(p22));
            } catch (Throwable th2) {
                f37466t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f37469p) {
            return m.b(this, str);
        }
        return super.b2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f37470q;
        if (str == null) {
            return this.f37468o + ".limitedParallelism(" + this.f37469p + ')';
        }
        return str;
    }
}
