package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f28328a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f28329b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f28330c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f28331d;

    public a(int i10, c cVar) {
        this.f28328a = i10;
        this.f28329b = new ArrayDeque(i10);
        this.f28331d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f28330c) {
            removeLast = this.f28329b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f28330c) {
            try {
                if (this.f28329b.size() >= this.f28328a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f28329b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f28331d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f28330c) {
            isEmpty = this.f28329b.isEmpty();
        }
        return isEmpty;
    }
}
