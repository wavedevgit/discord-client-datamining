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
    private final e f40212a;

    /* renamed from: b  reason: collision with root package name */
    private final u f40213b;

    /* renamed from: c  reason: collision with root package name */
    private final b f40214c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f40215d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f40216e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f40217f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f40218g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f40219h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f40220i;

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
        public final Object f40221a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f40222b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f40223c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f40224d;

        public c(Object obj) {
            this.f40221a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f40224d) {
                if (i10 != -1) {
                    this.f40222b.a(i10);
                }
                this.f40223c = true;
                aVar.invoke(this.f40221a);
            }
        }

        public void b(b bVar) {
            if (!this.f40224d && this.f40223c) {
                q e10 = this.f40222b.e();
                this.f40222b = new q.b();
                this.f40223c = false;
                bVar.a(this.f40221a, e10);
            }
        }

        public void c(b bVar) {
            this.f40224d = true;
            if (this.f40223c) {
                this.f40223c = false;
                bVar.a(this.f40221a, this.f40222b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f40221a.equals(((c) obj).f40221a);
            }
            return false;
        }

        public int hashCode() {
            return this.f40221a.hashCode();
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
        Iterator it = this.f40215d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f40214c);
            if (this.f40213b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f40220i) {
            return;
        }
        if (Thread.currentThread() == this.f40213b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public void c(Object obj) {
        ne.a.e(obj);
        synchronized (this.f40218g) {
            try {
                if (this.f40219h) {
                    return;
                }
                this.f40215d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f40215d, looper, eVar, bVar, this.f40220i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f40212a, bVar);
    }

    public void f() {
        l();
        if (!this.f40217f.isEmpty()) {
            if (!this.f40213b.b(0)) {
                u uVar = this.f40213b;
                uVar.g(uVar.a(0));
            }
            boolean isEmpty = this.f40216e.isEmpty();
            this.f40216e.addAll(this.f40217f);
            this.f40217f.clear();
            if (isEmpty) {
                while (!this.f40216e.isEmpty()) {
                    ((Runnable) this.f40216e.peekFirst()).run();
                    this.f40216e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f40215d);
        this.f40217f.add(new Runnable() { // from class: ne.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f40218g) {
            this.f40219h = true;
        }
        Iterator it = this.f40215d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f40214c);
        }
        this.f40215d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f40215d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f40221a.equals(obj)) {
                cVar.c(this.f40214c);
                this.f40215d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f40212a = eVar;
        this.f40215d = copyOnWriteArraySet;
        this.f40214c = bVar;
        this.f40218g = new Object();
        this.f40216e = new ArrayDeque();
        this.f40217f = new ArrayDeque();
        this.f40213b = eVar.c(looper, new Handler.Callback() { // from class: ne.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f40220i = z10;
    }
}
