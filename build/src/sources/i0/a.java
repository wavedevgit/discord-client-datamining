package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f26614a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f26615b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f26616c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f26617d;

    public a(int i10, c cVar) {
        this.f26614a = i10;
        this.f26615b = new ArrayDeque(i10);
        this.f26617d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f26616c) {
            removeLast = this.f26615b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f26616c) {
            try {
                if (this.f26615b.size() >= this.f26614a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f26615b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f26617d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f26616c) {
            isEmpty = this.f26615b.isEmpty();
        }
        return isEmpty;
    }
}
