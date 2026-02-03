package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f27975a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f27976b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f27977c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f27978d;

    public a(int i10, c cVar) {
        this.f27975a = i10;
        this.f27976b = new ArrayDeque(i10);
        this.f27978d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f27977c) {
            removeLast = this.f27976b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f27977c) {
            try {
                if (this.f27976b.size() >= this.f27975a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f27976b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f27978d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f27977c) {
            isEmpty = this.f27976b.isEmpty();
        }
        return isEmpty;
    }
}
