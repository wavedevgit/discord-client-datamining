package i0;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f26524a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f26525b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f26526c = new Object();

    /* renamed from: d  reason: collision with root package name */
    final c f26527d;

    public a(int i10, c cVar) {
        this.f26524a = i10;
        this.f26525b = new ArrayDeque(i10);
        this.f26527d = cVar;
    }

    public Object a() {
        Object removeLast;
        synchronized (this.f26526c) {
            removeLast = this.f26525b.removeLast();
        }
        return removeLast;
    }

    public void b(Object obj) {
        Object obj2;
        synchronized (this.f26526c) {
            try {
                if (this.f26525b.size() >= this.f26524a) {
                    obj2 = a();
                } else {
                    obj2 = null;
                }
                this.f26525b.addFirst(obj);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c cVar = this.f26527d;
        if (cVar != null && obj2 != null) {
            cVar.a(obj2);
        }
    }

    public boolean c() {
        boolean isEmpty;
        synchronized (this.f26526c) {
            isEmpty = this.f26525b.isEmpty();
        }
        return isEmpty;
    }
}
