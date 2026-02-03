package m;

import java.util.HashMap;
import java.util.Map;
import m.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends b {

    /* renamed from: p  reason: collision with root package name */
    private final HashMap f37753p = new HashMap();

    @Override // m.b
    protected b.c c(Object obj) {
        return (b.c) this.f37753p.get(obj);
    }

    public boolean contains(Object obj) {
        return this.f37753p.containsKey(obj);
    }

    @Override // m.b
    public Object g(Object obj, Object obj2) {
        b.c c10 = c(obj);
        if (c10 != null) {
            return c10.f37759e;
        }
        this.f37753p.put(obj, f(obj, obj2));
        return null;
    }

    @Override // m.b
    public Object h(Object obj) {
        Object h10 = super.h(obj);
        this.f37753p.remove(obj);
        return h10;
    }

    public Map.Entry i(Object obj) {
        if (contains(obj)) {
            return ((b.c) this.f37753p.get(obj)).f37761o;
        }
        return null;
    }
}
