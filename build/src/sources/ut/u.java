package ut;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class u extends t {

    /* renamed from: e  reason: collision with root package name */
    private Map f52029e = null;

    /* renamed from: d  reason: collision with root package name */
    private Object f52028d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ut.t
    public Object G() {
        return this.f52028d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ut.t
    public void H(st.p pVar, int i10) {
        pVar.getClass();
        Map map = this.f52029e;
        if (map == null) {
            map = new HashMap();
            this.f52029e = map;
        }
        map.put(pVar, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ut.t
    public void I(st.p pVar, Object obj) {
        pVar.getClass();
        if (obj == null) {
            Map map = this.f52029e;
            if (map != null) {
                map.remove(pVar);
                if (this.f52029e.isEmpty()) {
                    this.f52029e = null;
                    return;
                }
                return;
            }
            return;
        }
        Map map2 = this.f52029e;
        if (map2 == null) {
            map2 = new HashMap();
            this.f52029e = map2;
        }
        map2.put(pVar, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ut.t
    public void J(Object obj) {
        this.f52028d = obj;
    }

    @Override // st.q, st.o
    public boolean s(st.p pVar) {
        Map map;
        if (pVar != null && (map = this.f52029e) != null) {
            return map.containsKey(pVar);
        }
        return false;
    }

    @Override // st.q, st.o
    public Object t(st.p pVar) {
        pVar.getClass();
        Map map = this.f52029e;
        if (map != null && map.containsKey(pVar)) {
            return pVar.getType().cast(map.get(pVar));
        }
        throw new st.r("No value found for: " + pVar.name());
    }

    @Override // st.q, st.o
    public int v(st.p pVar) {
        pVar.getClass();
        Map map = this.f52029e;
        if (map != null && map.containsKey(pVar)) {
            return ((Integer) pVar.getType().cast(map.get(pVar))).intValue();
        }
        return Integer.MIN_VALUE;
    }

    @Override // st.q
    public Set y() {
        Map map = this.f52029e;
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }
}
