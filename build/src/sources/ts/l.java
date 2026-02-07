package ts;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f50881t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f50882i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f50883o;

    /* renamed from: p  reason: collision with root package name */
    private final int f50884p;

    /* renamed from: q  reason: collision with root package name */
    private final String f50885q;

    /* renamed from: r  reason: collision with root package name */
    private final q f50886r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f50887s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f50888d;

        public a(Runnable runnable) {
            this.f50888d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f50888d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f50888d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f50883o, l.this)) {
                            j.c(l.this.f50883o, l.this, this);
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
        this.f50882i = kVar == null ? os.f0.a() : kVar;
        this.f50883o = coroutineDispatcher;
        this.f50884p = i10;
        this.f50885q = str;
        this.f50886r = new q(false);
        this.f50887s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater h2() {
        return f50881t;
    }

    public static final /* synthetic */ Object i2(l lVar) {
        return lVar.f50887s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f50886r.e();
            if (runnable == null) {
                synchronized (this.f50887s) {
                    f50881t.decrementAndGet(this);
                    if (this.f50886r.c() == 0) {
                        return null;
                    }
                    f50881t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f50887s) {
            if (f50881t.get(this) >= this.f50884p) {
                return false;
            }
            f50881t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f50886r.a(runnable);
        if (f50881t.get(this) < this.f50884p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f50883o, this, new a(p22));
            } catch (Throwable th2) {
                f50881t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f50886r.a(runnable);
        if (f50881t.get(this) < this.f50884p && q2() && (p22 = p2()) != null) {
            try {
                this.f50883o.T1(this, new a(p22));
            } catch (Throwable th2) {
                f50881t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public os.n0 Y(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f50882i.Y(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher a2(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f50884p) {
            return m.b(this, str);
        }
        return super.a2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f50885q;
        if (str == null) {
            return this.f50883o + ".limitedParallelism(" + this.f50884p + ')';
        }
        return str;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        this.f50882i.y(j10, cancellableContinuation);
    }
}
