package tt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class u extends t {

    /* renamed from: e  reason: collision with root package name */
    private Map f51124e = null;

    /* renamed from: d  reason: collision with root package name */
    private Object f51123d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // tt.t
    public Object G() {
        return this.f51123d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // tt.t
    public void H(rt.p pVar, int i10) {
        pVar.getClass();
        Map map = this.f51124e;
        if (map == null) {
            map = new HashMap();
            this.f51124e = map;
        }
        map.put(pVar, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // tt.t
    public void I(rt.p pVar, Object obj) {
        pVar.getClass();
        if (obj == null) {
            Map map = this.f51124e;
            if (map != null) {
                map.remove(pVar);
                if (this.f51124e.isEmpty()) {
                    this.f51124e = null;
                    return;
                }
                return;
            }
            return;
        }
        Map map2 = this.f51124e;
        if (map2 == null) {
            map2 = new HashMap();
            this.f51124e = map2;
        }
        map2.put(pVar, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // tt.t
    public void J(Object obj) {
        this.f51123d = obj;
    }

    @Override // rt.q, rt.o
    public boolean n(rt.p pVar) {
        Map map;
        if (pVar != null && (map = this.f51124e) != null) {
            return map.containsKey(pVar);
        }
        return false;
    }

    @Override // rt.q, rt.o
    public int q(rt.p pVar) {
        pVar.getClass();
        Map map = this.f51124e;
        if (map != null && map.containsKey(pVar)) {
            return ((Integer) pVar.getType().cast(map.get(pVar))).intValue();
        }
        return Integer.MIN_VALUE;
    }

    @Override // rt.q, rt.o
    public Object s(rt.p pVar) {
        pVar.getClass();
        Map map = this.f51124e;
        if (map != null && map.containsKey(pVar)) {
            return pVar.getType().cast(map.get(pVar));
        }
        throw new rt.r("No value found for: " + pVar.name());
    }

    @Override // rt.q
    public Set y() {
        Map map = this.f51124e;
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }
}
