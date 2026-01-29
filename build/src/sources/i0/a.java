package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f28312a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f28313b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f28314c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f28315d;

    public a(int i10, c cVar) {
        this.f28312a = i10;
        this.f28313b = new ArrayDeque(i10);
        this.f28315d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f28314c) {
            removeLast = this.f28313b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f28314c) {
            try {
                if (this.f28313b.size() >= this.f28312a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f28313b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f28315d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f28314c) {
            isEmpty = this.f28313b.isEmpty();
        }
        return isEmpty;
    }
}
