package ne;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArraySet;
import ne.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final e f39075a;

    /* renamed from: b  reason: collision with root package name */
    private final u f39076b;

    /* renamed from: c  reason: collision with root package name */
    private final b f39077c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f39078d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f39079e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f39080f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f39081g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39082h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f39083i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void invoke(Object obj);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(Object obj, q qVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Object f39084a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f39085b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f39086c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f39087d;

        public c(Object obj) {
            this.f39084a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f39087d) {
                if (i10 != -1) {
                    this.f39085b.a(i10);
                }
                this.f39086c = true;
                aVar.invoke(this.f39084a);
            }
        }

        public void b(b bVar) {
            if (!this.f39087d && this.f39086c) {
                q e10 = this.f39085b.e();
                this.f39085b = new q.b();
                this.f39086c = false;
                bVar.a(this.f39084a, e10);
            }
        }

        public void c(b bVar) {
            this.f39087d = true;
            if (this.f39086c) {
                this.f39086c = false;
                bVar.a(this.f39084a, this.f39085b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f39084a.equals(((c) obj).f39084a);
            }
            return false;
        }

        public int hashCode() {
            return this.f39084a.hashCode();
        }
    }

    public x(Looper looper, e eVar, b bVar) {
        this(new CopyOnWriteArraySet(), looper, eVar, bVar, true);
    }

    public static /* synthetic */ void a(CopyOnWriteArraySet copyOnWriteArraySet, int i10, a aVar) {
        Iterator it = copyOnWriteArraySet.iterator();
        while (it.hasNext()) {
            ((c) it.next()).a(i10, aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean g(Message message) {
        Iterator it = this.f39078d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f39077c);
            if (this.f39076b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f39083i) {
            return;
        }
        if (Thread.currentThread() == this.f39076b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public void c(Object obj) {
        ne.a.e(obj);
        synchronized (this.f39081g) {
            try {
                if (this.f39082h) {
                    return;
                }
                this.f39078d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f39078d, looper, eVar, bVar, this.f39083i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f39075a, bVar);
    }

    public void f() {
        l();
        if (!this.f39080f.isEmpty()) {
            if (!this.f39076b.b(0)) {
                u uVar = this.f39076b;
                uVar.g(uVar.a(0));
            }
            boolean isEmpty = this.f39079e.isEmpty();
            this.f39079e.addAll(this.f39080f);
            this.f39080f.clear();
            if (isEmpty) {
                while (!this.f39079e.isEmpty()) {
                    ((Runnable) this.f39079e.peekFirst()).run();
                    this.f39079e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f39078d);
        this.f39080f.add(new Runnable() { // from class: ne.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f39081g) {
            this.f39082h = true;
        }
        Iterator it = this.f39078d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f39077c);
        }
        this.f39078d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f39078d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f39084a.equals(obj)) {
                cVar.c(this.f39077c);
                this.f39078d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f39075a = eVar;
        this.f39078d = copyOnWriteArraySet;
        this.f39077c = bVar;
        this.f39081g = new Object();
        this.f39079e = new ArrayDeque();
        this.f39080f = new ArrayDeque();
        this.f39076b = eVar.c(looper, new Handler.Callback() { // from class: ne.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f39083i = z10;
    }
}
