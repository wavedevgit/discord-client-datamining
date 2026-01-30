package lt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class u extends t {

    /* renamed from: e  reason: collision with root package name */
    private Map f37709e = null;

    /* renamed from: d  reason: collision with root package name */
    private Object f37708d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lt.t
    public Object G() {
        return this.f37708d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lt.t
    public void H(jt.p pVar, int i10) {
        pVar.getClass();
        Map map = this.f37709e;
        if (map == null) {
            map = new HashMap();
            this.f37709e = map;
        }
        map.put(pVar, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lt.t
    public void I(jt.p pVar, Object obj) {
        pVar.getClass();
        if (obj == null) {
            Map map = this.f37709e;
            if (map != null) {
                map.remove(pVar);
                if (this.f37709e.isEmpty()) {
                    this.f37709e = null;
                    return;
                }
                return;
            }
            return;
        }
        Map map2 = this.f37709e;
        if (map2 == null) {
            map2 = new HashMap();
            this.f37709e = map2;
        }
        map2.put(pVar, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lt.t
    public void J(Object obj) {
        this.f37708d = obj;
    }

    @Override // jt.q, jt.o
    public boolean o(jt.p pVar) {
        Map map;
        if (pVar != null && (map = this.f37709e) != null) {
            return map.containsKey(pVar);
        }
        return false;
    }

    @Override // jt.q, jt.o
    public Object p(jt.p pVar) {
        pVar.getClass();
        Map map = this.f37709e;
        if (map != null && map.containsKey(pVar)) {
            return pVar.getType().cast(map.get(pVar));
        }
        throw new jt.r("No value found for: " + pVar.name());
    }

    @Override // jt.q, jt.o
    public int q(jt.p pVar) {
        pVar.getClass();
        Map map = this.f37709e;
        if (map != null && map.containsKey(pVar)) {
            return ((Integer) pVar.getType().cast(map.get(pVar))).intValue();
        }
        return Integer.MIN_VALUE;
    }

    @Override // jt.q
    public Set y() {
        Map map = this.f37709e;
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }
}
