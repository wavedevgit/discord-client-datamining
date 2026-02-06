package ts;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f50833t = AtomicIntegerFieldUpdater.newUpdater(l.class, "runningWorkers$volatile");

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f50834i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f50835o;

    /* renamed from: p  reason: collision with root package name */
    private final int f50836p;

    /* renamed from: q  reason: collision with root package name */
    private final String f50837q;

    /* renamed from: r  reason: collision with root package name */
    private final q f50838r;
    private volatile /* synthetic */ int runningWorkers$volatile;

    /* renamed from: s  reason: collision with root package name */
    private final Object f50839s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Runnable f50840d;

        public a(Runnable runnable) {
            this.f50840d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = 0;
            while (true) {
                this.f50840d.run();
                Runnable p22 = l.this.p2();
                if (p22 != null) {
                    try {
                        this.f50840d = p22;
                        i10++;
                        if (i10 >= 16 && j.d(l.this.f50835o, l.this)) {
                            j.c(l.this.f50835o, l.this, this);
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
        this.f50834i = kVar == null ? os.f0.a() : kVar;
        this.f50835o = coroutineDispatcher;
        this.f50836p = i10;
        this.f50837q = str;
        this.f50838r = new q(false);
        this.f50839s = new Object();
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater h2() {
        return f50833t;
    }

    public static final /* synthetic */ Object i2(l lVar) {
        return lVar.f50839s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Runnable p2() {
        while (true) {
            Runnable runnable = (Runnable) this.f50838r.e();
            if (runnable == null) {
                synchronized (this.f50839s) {
                    f50833t.decrementAndGet(this);
                    if (this.f50838r.c() == 0) {
                        return null;
                    }
                    f50833t.incrementAndGet(this);
                }
            } else {
                return runnable;
            }
        }
    }

    private final boolean q2() {
        synchronized (this.f50839s) {
            if (f50833t.get(this) >= this.f50836p) {
                return false;
            }
            f50833t.incrementAndGet(this);
            return true;
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f50838r.a(runnable);
        if (f50833t.get(this) < this.f50836p && q2() && (p22 = p2()) != null) {
            try {
                j.c(this.f50835o, this, new a(p22));
            } catch (Throwable th2) {
                f50833t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        Runnable p22;
        this.f50838r.a(runnable);
        if (f50833t.get(this) < this.f50836p && q2() && (p22 = p2()) != null) {
            try {
                this.f50835o.T1(this, new a(p22));
            } catch (Throwable th2) {
                f50833t.decrementAndGet(this);
                throw th2;
            }
        }
    }

    @Override // kotlinx.coroutines.k
    public os.n0 Y(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f50834i.Y(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher a2(int i10, String str) {
        m.a(i10);
        if (i10 >= this.f50836p) {
            return m.b(this, str);
        }
        return super.a2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String str = this.f50837q;
        if (str == null) {
            return this.f50835o + ".limitedParallelism(" + this.f50836p + ')';
        }
        return str;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        this.f50834i.y(j10, cancellableContinuation);
    }
}
