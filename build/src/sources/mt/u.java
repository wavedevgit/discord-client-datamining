package mt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class u extends t {

    /* renamed from: e  reason: collision with root package name */
    private Map f39409e = null;

    /* renamed from: d  reason: collision with root package name */
    private Object f39408d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mt.t
    public Object G() {
        return this.f39408d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mt.t
    public void H(kt.p pVar, int i10) {
        pVar.getClass();
        Map map = this.f39409e;
        if (map == null) {
            map = new HashMap();
            this.f39409e = map;
        }
        map.put(pVar, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mt.t
    public void I(kt.p pVar, Object obj) {
        pVar.getClass();
        if (obj == null) {
            Map map = this.f39409e;
            if (map != null) {
                map.remove(pVar);
                if (this.f39409e.isEmpty()) {
                    this.f39409e = null;
                    return;
                }
                return;
            }
            return;
        }
        Map map2 = this.f39409e;
        if (map2 == null) {
            map2 = new HashMap();
            this.f39409e = map2;
        }
        map2.put(pVar, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mt.t
    public void J(Object obj) {
        this.f39408d = obj;
    }

    @Override // kt.q, kt.o
    public boolean s(kt.p pVar) {
        Map map;
        if (pVar != null && (map = this.f39409e) != null) {
            return map.containsKey(pVar);
        }
        return false;
    }

    @Override // kt.q, kt.o
    public int t(kt.p pVar) {
        pVar.getClass();
        Map map = this.f39409e;
        if (map != null && map.containsKey(pVar)) {
            return ((Integer) pVar.getType().cast(map.get(pVar))).intValue();
        }
        return Integer.MIN_VALUE;
    }

    @Override // kt.q, kt.o
    public Object v(kt.p pVar) {
        pVar.getClass();
        Map map = this.f39409e;
        if (map != null && map.containsKey(pVar)) {
            return pVar.getType().cast(map.get(pVar));
        }
        throw new kt.r("No value found for: " + pVar.name());
    }

    @Override // kt.q
    public Set y() {
        Map map = this.f39409e;
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }
}
