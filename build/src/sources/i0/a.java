package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f27187a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f27188b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f27189c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f27190d;

    public a(int i10, c cVar) {
        this.f27187a = i10;
        this.f27188b = new ArrayDeque(i10);
        this.f27190d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f27189c) {
            removeLast = this.f27188b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f27189c) {
            try {
                if (this.f27188b.size() >= this.f27187a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f27188b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f27190d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f27189c) {
            isEmpty = this.f27188b.isEmpty();
        }
        return isEmpty;
    }
}
