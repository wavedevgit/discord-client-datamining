package a0;

import a0.u1;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l2 implements u1 {

    /* renamed from: b  reason: collision with root package name */
    private final AtomicReference f146b;

    /* renamed from: a  reason: collision with root package name */
    private final Object f145a = new Object();

    /* renamed from: c  reason: collision with root package name */
    private int f147c = 0;

    /* renamed from: d  reason: collision with root package name */
    private boolean f148d = false;

    /* renamed from: e  reason: collision with root package name */
    private final Map f149e = new HashMap();

    /* renamed from: f  reason: collision with root package name */
    private final CopyOnWriteArraySet f150f = new CopyOnWriteArraySet();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        static a b(Throwable th2) {
            return new g(th2);
        }

        public abstract Throwable a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Runnable {

        /* renamed from: s  reason: collision with root package name */
        private static final Object f151s = new Object();

        /* renamed from: d  reason: collision with root package name */
        private final Executor f152d;

        /* renamed from: e  reason: collision with root package name */
        private final u1.a f153e;

        /* renamed from: o  reason: collision with root package name */
        private final AtomicReference f155o;

        /* renamed from: i  reason: collision with root package name */
        private final AtomicBoolean f154i = new AtomicBoolean(true);

        /* renamed from: p  reason: collision with root package name */
        private Object f156p = f151s;

        /* renamed from: q  reason: collision with root package name */
        private int f157q = -1;

        /* renamed from: r  reason: collision with root package name */
        private boolean f158r = false;

        b(AtomicReference atomicReference, Executor executor, u1.a aVar) {
            this.f155o = atomicReference;
            this.f152d = executor;
            this.f153e = aVar;
        }

        void a() {
            this.f154i.set(false);
        }

        void b(int i10) {
            synchronized (this) {
                try {
                    if (!this.f154i.get()) {
                        return;
                    }
                    if (i10 <= this.f157q) {
                        return;
                    }
                    this.f157q = i10;
                    if (this.f158r) {
                        return;
                    }
                    this.f158r = true;
                    try {
                        this.f152d.execute(this);
                    } catch (Throwable unused) {
                        synchronized (this) {
                            this.f158r = false;
                        }
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this) {
                try {
                    if (!this.f154i.get()) {
                        this.f158r = false;
                        return;
                    }
                    Object obj = this.f155o.get();
                    int i10 = this.f157q;
                    while (true) {
                        if (!Objects.equals(this.f156p, obj)) {
                            this.f156p = obj;
                            if (obj instanceof a) {
                                this.f153e.onError(((a) obj).a());
                            } else {
                                this.f153e.a(obj);
                            }
                        }
                        synchronized (this) {
                            try {
                                if (i10 == this.f157q || !this.f154i.get()) {
                                    break;
                                }
                                obj = this.f155o.get();
                                i10 = this.f157q;
                            } finally {
                            }
                        }
                    }
                    this.f158r = false;
                } finally {
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l2(Object obj, boolean z10) {
        if (z10) {
            b2.e.b(obj instanceof Throwable, "Initial errors must be Throwable");
            this.f146b = new AtomicReference(a.b((Throwable) obj));
            return;
        }
        this.f146b = new AtomicReference(obj);
    }

    private void d(u1.a aVar) {
        b bVar = (b) this.f149e.remove(aVar);
        if (bVar != null) {
            bVar.a();
            this.f150f.remove(bVar);
        }
    }

    private void f(Object obj) {
        Iterator it;
        int i10;
        synchronized (this.f145a) {
            try {
                if (Objects.equals(this.f146b.getAndSet(obj), obj)) {
                    return;
                }
                int i11 = this.f147c + 1;
                this.f147c = i11;
                if (this.f148d) {
                    return;
                }
                this.f148d = true;
                Iterator it2 = this.f150f.iterator();
                while (true) {
                    if (it2.hasNext()) {
                        ((b) it2.next()).b(i11);
                    } else {
                        synchronized (this.f145a) {
                            try {
                                if (this.f147c == i11) {
                                    this.f148d = false;
                                    return;
                                } else {
                                    it = this.f150f.iterator();
                                    i10 = this.f147c;
                                }
                            } finally {
                            }
                        }
                        it2 = it;
                        i11 = i10;
                    }
                }
            } finally {
            }
        }
    }

    @Override // a0.u1
    public void a(Executor executor, u1.a aVar) {
        b bVar;
        synchronized (this.f145a) {
            d(aVar);
            bVar = new b(this.f146b, executor, aVar);
            this.f149e.put(aVar, bVar);
            this.f150f.add(bVar);
        }
        bVar.b(0);
    }

    @Override // a0.u1
    public void b(u1.a aVar) {
        synchronized (this.f145a) {
            d(aVar);
        }
    }

    public ListenableFuture c() {
        Object obj = this.f146b.get();
        if (obj instanceof a) {
            return d0.n.n(((a) obj).a());
        }
        return d0.n.p(obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(Object obj) {
        f(obj);
    }
}
