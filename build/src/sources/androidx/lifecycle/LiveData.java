package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import java.util.Map;
import m.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class LiveData {

    /* renamed from: k  reason: collision with root package name */
    static final Object f4426k = new Object();

    /* renamed from: a  reason: collision with root package name */
    final Object f4427a;

    /* renamed from: b  reason: collision with root package name */
    private m.b f4428b;

    /* renamed from: c  reason: collision with root package name */
    int f4429c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4430d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f4431e;

    /* renamed from: f  reason: collision with root package name */
    volatile Object f4432f;

    /* renamed from: g  reason: collision with root package name */
    private int f4433g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f4434h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f4435i;

    /* renamed from: j  reason: collision with root package name */
    private final Runnable f4436j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            Object obj;
            synchronized (LiveData.this.f4427a) {
                obj = LiveData.this.f4432f;
                LiveData.this.f4432f = LiveData.f4426k;
            }
            LiveData.this.o(obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class b extends d {
        b(Observer observer) {
            super(observer);
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean d() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends d implements m {

        /* renamed from: p  reason: collision with root package name */
        final LifecycleOwner f4439p;

        c(LifecycleOwner lifecycleOwner, Observer observer) {
            super(observer);
            this.f4439p = lifecycleOwner;
        }

        @Override // androidx.lifecycle.LiveData.d
        void b() {
            this.f4439p.getLifecycle().d(this);
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean c(LifecycleOwner lifecycleOwner) {
            if (this.f4439p == lifecycleOwner) {
                return true;
            }
            return false;
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean d() {
            return this.f4439p.getLifecycle().b().d(Lifecycle.State.f4408o);
        }

        @Override // androidx.lifecycle.m
        public void h(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
            Lifecycle.State b10 = this.f4439p.getLifecycle().b();
            if (b10 == Lifecycle.State.f4405d) {
                LiveData.this.n(this.f4441d);
                return;
            }
            Lifecycle.State state = null;
            while (state != b10) {
                a(d());
                state = b10;
                b10 = this.f4439p.getLifecycle().b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public abstract class d {

        /* renamed from: d  reason: collision with root package name */
        final Observer f4441d;

        /* renamed from: e  reason: collision with root package name */
        boolean f4442e;

        /* renamed from: i  reason: collision with root package name */
        int f4443i = -1;

        d(Observer observer) {
            this.f4441d = observer;
        }

        void a(boolean z10) {
            int i10;
            if (z10 != this.f4442e) {
                this.f4442e = z10;
                LiveData liveData = LiveData.this;
                if (z10) {
                    i10 = 1;
                } else {
                    i10 = -1;
                }
                liveData.c(i10);
                if (this.f4442e) {
                    LiveData.this.e(this);
                }
            }
        }

        void b() {
        }

        boolean c(LifecycleOwner lifecycleOwner) {
            return false;
        }

        abstract boolean d();
    }

    public LiveData(Object obj) {
        this.f4427a = new Object();
        this.f4428b = new m.b();
        this.f4429c = 0;
        this.f4432f = f4426k;
        this.f4436j = new a();
        this.f4431e = obj;
        this.f4433g = 0;
    }

    static void b(String str) {
        if (l.c.g().b()) {
            return;
        }
        throw new IllegalStateException("Cannot invoke " + str + " on a background thread");
    }

    private void d(d dVar) {
        if (dVar.f4442e) {
            if (!dVar.d()) {
                dVar.a(false);
                return;
            }
            int i10 = dVar.f4443i;
            int i11 = this.f4433g;
            if (i10 >= i11) {
                return;
            }
            dVar.f4443i = i11;
            dVar.f4441d.a(this.f4431e);
        }
    }

    void c(int i10) {
        boolean z10;
        boolean z11;
        int i11 = this.f4429c;
        this.f4429c = i10 + i11;
        if (this.f4430d) {
            return;
        }
        this.f4430d = true;
        while (true) {
            try {
                int i12 = this.f4429c;
                if (i11 != i12) {
                    if (i11 == 0 && i12 > 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (i11 > 0 && i12 == 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (z10) {
                        k();
                    } else if (z11) {
                        l();
                    }
                    i11 = i12;
                } else {
                    this.f4430d = false;
                    return;
                }
            } catch (Throwable th2) {
                this.f4430d = false;
                throw th2;
            }
        }
    }

    void e(d dVar) {
        if (this.f4434h) {
            this.f4435i = true;
            return;
        }
        this.f4434h = true;
        do {
            this.f4435i = false;
            if (dVar != null) {
                d(dVar);
                dVar = null;
            } else {
                b.d d10 = this.f4428b.d();
                while (d10.hasNext()) {
                    d((d) ((Map.Entry) d10.next()).getValue());
                    if (this.f4435i) {
                        break;
                    }
                }
            }
        } while (this.f4435i);
        this.f4434h = false;
    }

    public Object f() {
        Object obj = this.f4431e;
        if (obj != f4426k) {
            return obj;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f4433g;
    }

    public boolean h() {
        if (this.f4429c > 0) {
            return true;
        }
        return false;
    }

    public void i(LifecycleOwner lifecycleOwner, Observer observer) {
        b("observe");
        if (lifecycleOwner.getLifecycle().b() != Lifecycle.State.f4405d) {
            c cVar = new c(lifecycleOwner, observer);
            d dVar = (d) this.f4428b.g(observer, cVar);
            if (dVar != null && !dVar.c(lifecycleOwner)) {
                throw new IllegalArgumentException("Cannot add the same observer with different lifecycles");
            }
            if (dVar != null) {
                return;
            }
            lifecycleOwner.getLifecycle().a(cVar);
        }
    }

    public void j(Observer observer) {
        b("observeForever");
        b bVar = new b(observer);
        d dVar = (d) this.f4428b.g(observer, bVar);
        if (!(dVar instanceof c)) {
            if (dVar != null) {
                return;
            }
            bVar.a(true);
            return;
        }
        throw new IllegalArgumentException("Cannot add the same observer with different lifecycles");
    }

    protected void k() {
    }

    protected void l() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void m(Object obj) {
        boolean z10;
        synchronized (this.f4427a) {
            if (this.f4432f == f4426k) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f4432f = obj;
        }
        if (!z10) {
            return;
        }
        l.c.g().c(this.f4436j);
    }

    public void n(Observer observer) {
        b("removeObserver");
        d dVar = (d) this.f4428b.h(observer);
        if (dVar == null) {
            return;
        }
        dVar.b();
        dVar.a(false);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void o(Object obj) {
        b("setValue");
        this.f4433g++;
        this.f4431e = obj;
        e(null);
    }

    public LiveData() {
        this.f4427a = new Object();
        this.f4428b = new m.b();
        this.f4429c = 0;
        Object obj = f4426k;
        this.f4432f = obj;
        this.f4436j = new a();
        this.f4431e = obj;
        this.f4433g = -1;
    }
}
