package du;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class u extends t {

    /* renamed from: e  reason: collision with root package name */
    private Map f22132e = null;

    /* renamed from: d  reason: collision with root package name */
    private Object f22131d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // du.t
    public Object G() {
        return this.f22131d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // du.t
    public void H(bu.p pVar, int i10) {
        pVar.getClass();
        Map map = this.f22132e;
        if (map == null) {
            map = new HashMap();
            this.f22132e = map;
        }
        map.put(pVar, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // du.t
    public void I(bu.p pVar, Object obj) {
        pVar.getClass();
        if (obj == null) {
            Map map = this.f22132e;
            if (map != null) {
                map.remove(pVar);
                if (this.f22132e.isEmpty()) {
                    this.f22132e = null;
                    return;
                }
                return;
            }
            return;
        }
        Map map2 = this.f22132e;
        if (map2 == null) {
            map2 = new HashMap();
            this.f22132e = map2;
        }
        map2.put(pVar, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // du.t
    public void J(Object obj) {
        this.f22131d = obj;
    }

    @Override // bu.q, bu.o
    public Object k(bu.p pVar) {
        pVar.getClass();
        Map map = this.f22132e;
        if (map != null && map.containsKey(pVar)) {
            return pVar.getType().cast(map.get(pVar));
        }
        throw new bu.r("No value found for: " + pVar.name());
    }

    @Override // bu.q, bu.o
    public int m(bu.p pVar) {
        pVar.getClass();
        Map map = this.f22132e;
        if (map != null && map.containsKey(pVar)) {
            return ((Integer) pVar.getType().cast(map.get(pVar))).intValue();
        }
        return Integer.MIN_VALUE;
    }

    @Override // bu.q, bu.o
    public boolean n(bu.p pVar) {
        Map map;
        if (pVar != null && (map = this.f22132e) != null) {
            return map.containsKey(pVar);
        }
        return false;
    }

    @Override // bu.q
    public Set y() {
        Map map = this.f22132e;
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }
}
