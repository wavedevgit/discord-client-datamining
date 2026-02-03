package ot;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class u extends t {

    /* renamed from: e  reason: collision with root package name */
    private Map f44764e = null;

    /* renamed from: d  reason: collision with root package name */
    private Object f44763d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ot.t
    public Object G() {
        return this.f44763d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ot.t
    public void H(mt.p pVar, int i10) {
        pVar.getClass();
        Map map = this.f44764e;
        if (map == null) {
            map = new HashMap();
            this.f44764e = map;
        }
        map.put(pVar, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ot.t
    public void I(mt.p pVar, Object obj) {
        pVar.getClass();
        if (obj == null) {
            Map map = this.f44764e;
            if (map != null) {
                map.remove(pVar);
                if (this.f44764e.isEmpty()) {
                    this.f44764e = null;
                    return;
                }
                return;
            }
            return;
        }
        Map map2 = this.f44764e;
        if (map2 == null) {
            map2 = new HashMap();
            this.f44764e = map2;
        }
        map2.put(pVar, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ot.t
    public void J(Object obj) {
        this.f44763d = obj;
    }

    @Override // mt.q, mt.o
    public int j(mt.p pVar) {
        pVar.getClass();
        Map map = this.f44764e;
        if (map != null && map.containsKey(pVar)) {
            return ((Integer) pVar.getType().cast(map.get(pVar))).intValue();
        }
        return Integer.MIN_VALUE;
    }

    @Override // mt.q, mt.o
    public Object o(mt.p pVar) {
        pVar.getClass();
        Map map = this.f44764e;
        if (map != null && map.containsKey(pVar)) {
            return pVar.getType().cast(map.get(pVar));
        }
        throw new mt.r("No value found for: " + pVar.name());
    }

    @Override // mt.q, mt.o
    public boolean q(mt.p pVar) {
        Map map;
        if (pVar != null && (map = this.f44764e) != null) {
            return map.containsKey(pVar);
        }
        return false;
    }

    @Override // mt.q
    public Set y() {
        Map map = this.f44764e;
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }
}
