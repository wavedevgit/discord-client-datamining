package rs;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f48970t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f48971i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f48972o;

    /* renamed from: p  reason: collision with root package name */
    private final int f48973p;

    /* renamed from: q  reason: collision with root package name */
    private final String f48974q;

    /* renamed from: r  reason: collision with root package name */
    private final q f48975r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f48976s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f48977d;

        public a(Runnable runnable) {
            this.f48977d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f48977d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f48977d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f48972o, l.this)) {
                            j.c(l.this.f48972o, l.this, this);
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
        this.f48971i = kVar == null ? ms.f0.a() : kVar;
        this.f48972o = coroutineDispatcher;
        this.f48973p = i10;
        this.f48974q = str;
        this.f48975r = new q(false);
        this.f48976s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater h2() {
        return f48970t;
    }

    public static final /* synthetic */ Object i2(l lVar) {
        return lVar.f48976s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f48975r.e();
            if (runnable == null) {
                synchronized (this.f48976s) {
                    f48970t.decrementAndGet(this);
                    if (this.f48975r.c() == 0) {
                        return null;
                    }
                    f48970t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f48976s) {
            if (f48970t.get(this) >= this.f48973p) {
                return false;
            }
            f48970t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.k
    public ms.n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f48971i.D0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f48975r.a(runnable);
        if (f48970t.get(this) < this.f48973p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f48972o, this, new a(p22));
            } catch (Throwable th2) {
                f48970t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f48971i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f48975r.a(runnable);
        if (f48970t.get(this) < this.f48973p && q2() && (p22 = p2()) != null) {
            try {
                this.f48972o.U1(this, new a(p22));
            } catch (Throwable th2) {
                f48970t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f48973p) {
            return m.b(this, str);
        }
        return super.b2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f48974q;
        if (str == null) {
            return this.f48972o + ".limitedParallelism(" + this.f48973p + ')';
        }
        return str;
    }
}
