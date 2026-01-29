package ls;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f37450t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f37451i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f37452o;

    /* renamed from: p  reason: collision with root package name */
    private final int f37453p;

    /* renamed from: q  reason: collision with root package name */
    private final String f37454q;

    /* renamed from: r  reason: collision with root package name */
    private final q f37455r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f37456s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f37457d;

        public a(Runnable runnable) {
            this.f37457d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f37457d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f37457d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f37452o, l.this)) {
                            j.c(l.this.f37452o, l.this, this);
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
        this.f37451i = kVar == null ? gs.f0.a() : kVar;
        this.f37452o = coroutineDispatcher;
        this.f37453p = i10;
        this.f37454q = str;
        this.f37455r = new q(false);
        this.f37456s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater h2() {
        return f37450t;
    }

    public static final /* synthetic */ Object i2(l lVar) {
        return lVar.f37456s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f37455r.e();
            if (runnable == null) {
                synchronized (this.f37456s) {
                    f37450t.decrementAndGet(this);
                    if (this.f37455r.c() == 0) {
                        return null;
                    }
                    f37450t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f37456s) {
            if (f37450t.get(this) >= this.f37453p) {
                return false;
            }
            f37450t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.k
    public gs.n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f37451i.D0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f37455r.a(runnable);
        if (f37450t.get(this) < this.f37453p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f37452o, this, new a(p22));
            } catch (Throwable th2) {
                f37450t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f37451i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f37455r.a(runnable);
        if (f37450t.get(this) < this.f37453p && q2() && (p22 = p2()) != null) {
            try {
                this.f37452o.U1(this, new a(p22));
            } catch (Throwable th2) {
                f37450t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f37453p) {
            return m.b(this, str);
        }
        return super.b2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f37454q;
        if (str == null) {
            return this.f37452o + ".limitedParallelism(" + this.f37453p + ')';
        }
        return str;
    }
}
