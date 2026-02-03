package va;

import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class p implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Set f51267a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private final f f51268b = new f();

    private Object b(Object obj) {
        if (obj != null) {
            synchronized (this) {
                this.f51267a.remove(obj);
            }
            return obj;
        }
        return obj;
    }

    @Override // va.v
    public Object get(int i10) {
        return b(this.f51268b.a(i10));
    }

    @Override // va.v
    public Object pop() {
        return b(this.f51268b.f());
    }

    @Override // va.v
    public void put(Object obj) {
        boolean add;
        synchronized (this) {
            add = this.f51267a.add(obj);
        }
        if (add) {
            this.f51268b.e(a(obj), obj);
        }
    }
}
