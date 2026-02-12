package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f27734a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f27735b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f27736c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f27737d;

    public a(int i10, c cVar) {
        this.f27734a = i10;
        this.f27735b = new ArrayDeque(i10);
        this.f27737d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f27736c) {
            removeLast = this.f27735b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f27736c) {
            try {
                if (this.f27735b.size() >= this.f27734a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f27735b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f27737d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f27736c) {
            isEmpty = this.f27735b.isEmpty();
        }
        return isEmpty;
    }
}
