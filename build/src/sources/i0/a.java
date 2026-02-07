package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f26572a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f26573b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f26574c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f26575d;

    public a(int i10, c cVar) {
        this.f26572a = i10;
        this.f26573b = new ArrayDeque(i10);
        this.f26575d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f26574c) {
            removeLast = this.f26573b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f26574c) {
            try {
                if (this.f26573b.size() >= this.f26572a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f26573b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f26575d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f26574c) {
            isEmpty = this.f26573b.isEmpty();
        }
        return isEmpty;
    }
}
