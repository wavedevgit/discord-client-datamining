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
    private final e f39621a;

    /* renamed from: b  reason: collision with root package name */
    private final u f39622b;

    /* renamed from: c  reason: collision with root package name */
    private final b f39623c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f39624d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f39625e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f39626f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f39627g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39628h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f39629i;

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
        public final Object f39630a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f39631b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f39632c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f39633d;

        public c(Object obj) {
            this.f39630a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f39633d) {
                if (i10 != -1) {
                    this.f39631b.a(i10);
                }
                this.f39632c = true;
                aVar.invoke(this.f39630a);
            }
        }

        public void b(b bVar) {
            if (!this.f39633d && this.f39632c) {
                q e10 = this.f39631b.e();
                this.f39631b = new q.b();
                this.f39632c = false;
                bVar.a(this.f39630a, e10);
            }
        }

        public void c(b bVar) {
            this.f39633d = true;
            if (this.f39632c) {
                this.f39632c = false;
                bVar.a(this.f39630a, this.f39631b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f39630a.equals(((c) obj).f39630a);
            }
            return false;
        }

        public int hashCode() {
            return this.f39630a.hashCode();
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
        Iterator it = this.f39624d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f39623c);
            if (this.f39622b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f39629i) {
            return;
        }
        if (Thread.currentThread() == this.f39622b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
    }

    public void c(Object obj) {
        oe.a.e(obj);
        synchronized (this.f39627g) {
            try {
                if (this.f39628h) {
                    return;
                }
                this.f39624d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f39624d, looper, eVar, bVar, this.f39629i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f39621a, bVar);
    }

    public void f() {
        l();
        if (!this.f39626f.isEmpty()) {
            if (!this.f39622b.b(0)) {
                u uVar = this.f39622b;
                uVar.k(uVar.a(0));
            }
            boolean isEmpty = this.f39625e.isEmpty();
            this.f39625e.addAll(this.f39626f);
            this.f39626f.clear();
            if (isEmpty) {
                while (!this.f39625e.isEmpty()) {
                    ((Runnable) this.f39625e.peekFirst()).run();
                    this.f39625e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f39624d);
        this.f39626f.add(new Runnable() { // from class: oe.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f39627g) {
            this.f39628h = true;
        }
        Iterator it = this.f39624d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f39623c);
        }
        this.f39624d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f39624d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f39630a.equals(obj)) {
                cVar.c(this.f39623c);
                this.f39624d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f39621a = eVar;
        this.f39624d = copyOnWriteArraySet;
        this.f39623c = bVar;
        this.f39627g = new Object();
        this.f39625e = new ArrayDeque();
        this.f39626f = new ArrayDeque();
        this.f39622b = eVar.c(looper, new Handler.Callback() { // from class: oe.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f39629i = z10;
    }
}
