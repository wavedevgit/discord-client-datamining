package ms;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f39166t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f39167i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f39168o;

    /* renamed from: p  reason: collision with root package name */
    private final int f39169p;

    /* renamed from: q  reason: collision with root package name */
    private final String f39170q;

    /* renamed from: r  reason: collision with root package name */
    private final q f39171r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f39172s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f39173d;

        public a(Runnable runnable) {
            this.f39173d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f39173d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f39173d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f39168o, l.this)) {
                            j.c(l.this.f39168o, l.this, this);
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
        this.f39167i = kVar == null ? hs.f0.a() : kVar;
        this.f39168o = coroutineDispatcher;
        this.f39169p = i10;
        this.f39170q = str;
        this.f39171r = new q(false);
        this.f39172s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater h2() {
        return f39166t;
    }

    public static final /* synthetic */ Object i2(l lVar) {
        return lVar.f39172s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f39171r.e();
            if (runnable == null) {
                synchronized (this.f39172s) {
                    f39166t.decrementAndGet(this);
                    if (this.f39171r.c() == 0) {
                        return null;
                    }
                    f39166t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f39172s) {
            if (f39166t.get(this) >= this.f39169p) {
                return false;
            }
            f39166t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.k
    public hs.n0 E0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f39167i.E0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f39171r.a(runnable);
        if (f39166t.get(this) < this.f39169p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f39168o, this, new a(p22));
            } catch (Throwable th2) {
                f39166t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f39167i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f39171r.a(runnable);
        if (f39166t.get(this) < this.f39169p && q2() && (p22 = p2()) != null) {
            try {
                this.f39168o.U1(this, new a(p22));
            } catch (Throwable th2) {
                f39166t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f39169p) {
            return m.b(this, str);
        }
        return super.b2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f39170q;
        if (str == null) {
            return this.f39168o + ".limitedParallelism(" + this.f39169p + ')';
        }
        return str;
    }
}
