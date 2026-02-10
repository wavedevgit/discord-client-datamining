package oe;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArraySet;
import oe.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final e f39052a;

    /* renamed from: b  reason: collision with root package name */
    private final u f39053b;

    /* renamed from: c  reason: collision with root package name */
    private final b f39054c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f39055d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f39056e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f39057f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f39058g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39059h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f39060i;

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
        public final Object f39061a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f39062b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f39063c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f39064d;

        public c(Object obj) {
            this.f39061a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f39064d) {
                if (i10 != -1) {
                    this.f39062b.a(i10);
                }
                this.f39063c = true;
                aVar.invoke(this.f39061a);
            }
        }

        public void b(b bVar) {
            if (!this.f39064d && this.f39063c) {
                q e10 = this.f39062b.e();
                this.f39062b = new q.b();
                this.f39063c = false;
                bVar.a(this.f39061a, e10);
            }
        }

        public void c(b bVar) {
            this.f39064d = true;
            if (this.f39063c) {
                this.f39063c = false;
                bVar.a(this.f39061a, this.f39062b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f39061a.equals(((c) obj).f39061a);
            }
            return false;
        }

        public int hashCode() {
            return this.f39061a.hashCode();
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
        Iterator it = this.f39055d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f39054c);
            if (this.f39053b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f39060i) {
            return;
        }
        if (Thread.currentThread() == this.f39053b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
    }

    public void c(Object obj) {
        oe.a.e(obj);
        synchronized (this.f39058g) {
            try {
                if (this.f39059h) {
                    return;
                }
                this.f39055d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f39055d, looper, eVar, bVar, this.f39060i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f39052a, bVar);
    }

    public void f() {
        l();
        if (!this.f39057f.isEmpty()) {
            if (!this.f39053b.b(0)) {
                u uVar = this.f39053b;
                uVar.k(uVar.a(0));
            }
            boolean isEmpty = this.f39056e.isEmpty();
            this.f39056e.addAll(this.f39057f);
            this.f39057f.clear();
            if (isEmpty) {
                while (!this.f39056e.isEmpty()) {
                    ((Runnable) this.f39056e.peekFirst()).run();
                    this.f39056e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f39055d);
        this.f39057f.add(new Runnable() { // from class: oe.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f39058g) {
            this.f39059h = true;
        }
        Iterator it = this.f39055d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f39054c);
        }
        this.f39055d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f39055d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f39061a.equals(obj)) {
                cVar.c(this.f39054c);
                this.f39055d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f39052a = eVar;
        this.f39055d = copyOnWriteArraySet;
        this.f39054c = bVar;
        this.f39058g = new Object();
        this.f39056e = new ArrayDeque();
        this.f39057f = new ArrayDeque();
        this.f39053b = eVar.c(looper, new Handler.Callback() { // from class: oe.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f39060i = z10;
    }
}
