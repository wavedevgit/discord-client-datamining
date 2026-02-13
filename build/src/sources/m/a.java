package m;

import java.util.HashMap;
import java.util.Map;
import m.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends b {

    /* renamed from: p  reason: collision with root package name */
    private final HashMap f36645p = new HashMap();

    @Override // m.b
    protected b.c c(Object obj) {
        return (b.c) this.f36645p.get(obj);
    }

    public boolean contains(Object obj) {
        return this.f36645p.containsKey(obj);
    }

    @Override // m.b
    public Object g(Object obj, Object obj2) {
        b.c c10 = c(obj);
        if (c10 != null) {
            return c10.f36651e;
        }
        this.f36645p.put(obj, f(obj, obj2));
        return null;
    }

    @Override // m.b
    public Object i(Object obj) {
        Object i10 = super.i(obj);
        this.f36645p.remove(obj);
        return i10;
    }

    public Map.Entry j(Object obj) {
        if (contains(obj)) {
            return ((b.c) this.f36645p.get(obj)).f36653o;
        }
        return null;
    }
}
