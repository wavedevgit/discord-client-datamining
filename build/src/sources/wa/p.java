package wa;

import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class p implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Set f52423a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private final f f52424b = new f();

    private Object b(Object obj) {
        if (obj != null) {
            synchronized (this) {
                this.f52423a.remove(obj);
            }
            return obj;
        }
        return obj;
    }

    @Override // wa.v
    public Object get(int i10) {
        return b(this.f52424b.a(i10));
    }

    @Override // wa.v
    public Object pop() {
        return b(this.f52424b.f());
    }

    @Override // wa.v
    public void put(Object obj) {
        boolean add;
        synchronized (this) {
            add = this.f52423a.add(obj);
        }
        if (add) {
            this.f52424b.e(a(obj), obj);
        }
    }
}
