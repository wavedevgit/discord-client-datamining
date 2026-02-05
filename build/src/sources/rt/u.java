package rt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class u extends t {

    /* renamed from: e  reason: collision with root package name */
    private Map f49213e = null;

    /* renamed from: d  reason: collision with root package name */
    private Object f49212d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rt.t
    public Object G() {
        return this.f49212d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rt.t
    public void H(pt.p pVar, int i10) {
        pVar.getClass();
        Map map = this.f49213e;
        if (map == null) {
            map = new HashMap();
            this.f49213e = map;
        }
        map.put(pVar, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rt.t
    public void I(pt.p pVar, Object obj) {
        pVar.getClass();
        if (obj == null) {
            Map map = this.f49213e;
            if (map != null) {
                map.remove(pVar);
                if (this.f49213e.isEmpty()) {
                    this.f49213e = null;
                    return;
                }
                return;
            }
            return;
        }
        Map map2 = this.f49213e;
        if (map2 == null) {
            map2 = new HashMap();
            this.f49213e = map2;
        }
        map2.put(pVar, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rt.t
    public void J(Object obj) {
        this.f49212d = obj;
    }

    @Override // pt.q, pt.o
    public boolean m(pt.p pVar) {
        Map map;
        if (pVar != null && (map = this.f49213e) != null) {
            return map.containsKey(pVar);
        }
        return false;
    }

    @Override // pt.q, pt.o
    public int r(pt.p pVar) {
        pVar.getClass();
        Map map = this.f49213e;
        if (map != null && map.containsKey(pVar)) {
            return ((Integer) pVar.getType().cast(map.get(pVar))).intValue();
        }
        return Integer.MIN_VALUE;
    }

    @Override // pt.q, pt.o
    public Object v(pt.p pVar) {
        pVar.getClass();
        Map map = this.f49213e;
        if (map != null && map.containsKey(pVar)) {
            return pVar.getType().cast(map.get(pVar));
        }
        throw new pt.r("No value found for: " + pVar.name());
    }

    @Override // pt.q
    public Set y() {
        Map map = this.f49213e;
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }
}
