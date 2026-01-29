package a0;

import a0.r0;
import android.util.ArrayMap;
import java.util.Collections;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r1 extends w1 implements q1 {
    private static final r0.c L = r0.c.OPTIONAL;

    private r1(TreeMap treeMap) {
        super(treeMap);
    }

    public static r1 Z() {
        return new r1(new TreeMap(w1.J));
    }

    public static r1 a0(r0 r0Var) {
        TreeMap treeMap = new TreeMap(w1.J);
        for (r0.a aVar : r0Var.b()) {
            Set<r0.c> d10 = r0Var.d(aVar);
            ArrayMap arrayMap = new ArrayMap();
            for (r0.c cVar : d10) {
                arrayMap.put(cVar, r0Var.c(aVar, cVar));
            }
            treeMap.put(aVar, arrayMap);
        }
        return new r1(treeMap);
    }

    @Override // a0.q1
    public void K(r0.a aVar, r0.c cVar, Object obj) {
        Map map = (Map) this.I.get(aVar);
        if (map == null) {
            ArrayMap arrayMap = new ArrayMap();
            this.I.put(aVar, arrayMap);
            arrayMap.put(cVar, obj);
            return;
        }
        r0.c cVar2 = (r0.c) Collections.min(map.keySet());
        if (!Objects.equals(map.get(cVar2), obj) && r0.A(cVar2, cVar)) {
            throw new IllegalArgumentException("Option values conflicts: " + aVar.c() + ", existing value (" + cVar2 + ")=" + map.get(cVar2) + ", conflicting (" + cVar + ")=" + obj);
        }
        map.put(cVar, obj);
    }

    @Override // a0.q1
    public void V(r0.a aVar, Object obj) {
        K(aVar, L, obj);
    }

    public Object b0(r0.a aVar) {
        return this.I.remove(aVar);
    }
}
