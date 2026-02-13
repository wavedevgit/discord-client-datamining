package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f28302a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f28303b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f28304c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f28305d;

    public a(int i10, c cVar) {
        this.f28302a = i10;
        this.f28303b = new ArrayDeque(i10);
        this.f28305d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f28304c) {
            removeLast = this.f28303b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f28304c) {
            try {
                if (this.f28303b.size() >= this.f28302a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f28303b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f28305d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f28304c) {
            isEmpty = this.f28303b.isEmpty();
        }
        return isEmpty;
    }
}
