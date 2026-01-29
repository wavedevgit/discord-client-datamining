package a0;

import a0.p1;
import a0.u1;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.Observer;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p1 implements u1 {

    /* renamed from: a  reason: collision with root package name */
    final MutableLiveData f228a = new MutableLiveData();

    /* renamed from: b  reason: collision with root package name */
    private final Map f229b = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements Observer {

        /* renamed from: a  reason: collision with root package name */
        final AtomicBoolean f230a = new AtomicBoolean(true);

        /* renamed from: b  reason: collision with root package name */
        final u1.a f231b;

        /* renamed from: c  reason: collision with root package name */
        final Executor f232c;

        a(Executor executor, u1.a aVar) {
            this.f232c = executor;
            this.f231b = aVar;
        }

        public static /* synthetic */ void b(a aVar, b bVar) {
            if (!aVar.f230a.get()) {
                return;
            }
            if (bVar.a()) {
                aVar.f231b.a(bVar.d());
                return;
            }
            b2.e.g(bVar.c());
            aVar.f231b.onError(bVar.c());
        }

        void c() {
            this.f230a.set(false);
        }

        @Override // androidx.lifecycle.Observer
        /* renamed from: d */
        public void a(final b bVar) {
            this.f232c.execute(new Runnable() { // from class: a0.o1
                @Override // java.lang.Runnable
                public final void run() {
                    p1.a.b(p1.a.this, bVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Object f233a;

        /* renamed from: b  reason: collision with root package name */
        private final Throwable f234b;

        private b(Object obj, Throwable th2) {
            this.f233a = obj;
            this.f234b = th2;
        }

        static b b(Object obj) {
            return new b(obj, null);
        }

        public boolean a() {
            if (this.f234b == null) {
                return true;
            }
            return false;
        }

        public Throwable c() {
            return this.f234b;
        }

        public Object d() {
            if (a()) {
                return this.f233a;
            }
            throw new IllegalStateException("Result contains an error. Does not contain a value.");
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[Result: <");
            if (a()) {
                str = "Value: " + this.f233a;
            } else {
                str = "Error: " + this.f234b;
            }
            sb2.append(str);
            sb2.append(">]");
            return sb2.toString();
        }
    }

    public static /* synthetic */ void d(p1 p1Var, a aVar, a aVar2) {
        if (aVar != null) {
            p1Var.f228a.n(aVar);
        }
        p1Var.f228a.j(aVar2);
    }

    @Override // a0.u1
    public void a(Executor executor, u1.a aVar) {
        synchronized (this.f229b) {
            try {
                final a aVar2 = (a) this.f229b.get(aVar);
                if (aVar2 != null) {
                    aVar2.c();
                }
                final a aVar3 = new a(executor, aVar);
                this.f229b.put(aVar, aVar3);
                c0.a.d().execute(new Runnable() { // from class: a0.m1
                    @Override // java.lang.Runnable
                    public final void run() {
                        p1.d(p1.this, aVar2, aVar3);
                    }
                });
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.u1
    public void b(u1.a aVar) {
        synchronized (this.f229b) {
            try {
                final a aVar2 = (a) this.f229b.remove(aVar);
                if (aVar2 != null) {
                    aVar2.c();
                    c0.a.d().execute(new Runnable() { // from class: a0.n1
                        @Override // java.lang.Runnable
                        public final void run() {
                            p1.this.f228a.n(aVar2);
                        }
                    });
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void e(Object obj) {
        this.f228a.m(b.b(obj));
    }
}
