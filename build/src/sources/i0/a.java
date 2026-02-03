package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f28198a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f28199b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f28200c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f28201d;

    public a(int i10, c cVar) {
        this.f28198a = i10;
        this.f28199b = new ArrayDeque(i10);
        this.f28201d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f28200c) {
            removeLast = this.f28199b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f28200c) {
            try {
                if (this.f28199b.size() >= this.f28198a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f28199b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f28201d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f28200c) {
            isEmpty = this.f28199b.isEmpty();
        }
        return isEmpty;
    }
}
