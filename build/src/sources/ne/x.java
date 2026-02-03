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
    private final e f40173a;

    /* renamed from: b  reason: collision with root package name */
    private final u f40174b;

    /* renamed from: c  reason: collision with root package name */
    private final b f40175c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f40176d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f40177e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f40178f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f40179g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f40180h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f40181i;

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
        public final Object f40182a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f40183b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f40184c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f40185d;

        public c(Object obj) {
            this.f40182a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f40185d) {
                if (i10 != -1) {
                    this.f40183b.a(i10);
                }
                this.f40184c = true;
                aVar.invoke(this.f40182a);
            }
        }

        public void b(b bVar) {
            if (!this.f40185d && this.f40184c) {
                q e10 = this.f40183b.e();
                this.f40183b = new q.b();
                this.f40184c = false;
                bVar.a(this.f40182a, e10);
            }
        }

        public void c(b bVar) {
            this.f40185d = true;
            if (this.f40184c) {
                this.f40184c = false;
                bVar.a(this.f40182a, this.f40183b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f40182a.equals(((c) obj).f40182a);
            }
            return false;
        }

        public int hashCode() {
            return this.f40182a.hashCode();
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
        Iterator it = this.f40176d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f40175c);
            if (this.f40174b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f40181i) {
            return;
        }
        if (Thread.currentThread() == this.f40174b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public void c(Object obj) {
        ne.a.e(obj);
        synchronized (this.f40179g) {
            try {
                if (this.f40180h) {
                    return;
                }
                this.f40176d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f40176d, looper, eVar, bVar, this.f40181i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f40173a, bVar);
    }

    public void f() {
        l();
        if (!this.f40178f.isEmpty()) {
            if (!this.f40174b.b(0)) {
                u uVar = this.f40174b;
                uVar.g(uVar.a(0));
            }
            boolean isEmpty = this.f40177e.isEmpty();
            this.f40177e.addAll(this.f40178f);
            this.f40178f.clear();
            if (isEmpty) {
                while (!this.f40177e.isEmpty()) {
                    ((Runnable) this.f40177e.peekFirst()).run();
                    this.f40177e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f40176d);
        this.f40178f.add(new Runnable() { // from class: ne.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f40179g) {
            this.f40180h = true;
        }
        Iterator it = this.f40176d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f40175c);
        }
        this.f40176d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f40176d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f40182a.equals(obj)) {
                cVar.c(this.f40175c);
                this.f40176d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f40173a = eVar;
        this.f40176d = copyOnWriteArraySet;
        this.f40175c = bVar;
        this.f40179g = new Object();
        this.f40177e = new ArrayDeque();
        this.f40178f = new ArrayDeque();
        this.f40174b = eVar.c(looper, new Handler.Callback() { // from class: ne.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f40181i = z10;
    }
}
