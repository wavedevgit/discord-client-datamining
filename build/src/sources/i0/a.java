package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f27733a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f27734b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f27735c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f27736d;

    public a(int i10, c cVar) {
        this.f27733a = i10;
        this.f27734b = new ArrayDeque(i10);
        this.f27736d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f27735c) {
            removeLast = this.f27734b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f27735c) {
            try {
                if (this.f27734b.size() >= this.f27733a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f27734b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f27736d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f27735c) {
            isEmpty = this.f27734b.isEmpty();
        }
        return isEmpty;
    }
}
