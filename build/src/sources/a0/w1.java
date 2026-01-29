package a0;

import a0.r0;
import android.util.ArrayMap;
import java.util.Collections;
import java.util.Comparator;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w1 implements r0 {
    protected static final Comparator J;
    private static final w1 K;
    protected final TreeMap I;

    static {
        Comparator comparator = new Comparator() { // from class: a0.v1
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compareTo;
                compareTo = ((r0.a) obj).c().compareTo(((r0.a) obj2).c());
                return compareTo;
            }
        };
        J = comparator;
        K = new w1(new TreeMap(comparator));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public w1(TreeMap treeMap) {
        this.I = treeMap;
    }

    public static w1 X() {
        return K;
    }

    public static w1 Y(r0 r0Var) {
        if (w1.class.equals(r0Var.getClass())) {
            return (w1) r0Var;
        }
        TreeMap treeMap = new TreeMap(J);
        for (r0.a aVar : r0Var.b()) {
            Set<r0.c> d10 = r0Var.d(aVar);
            ArrayMap arrayMap = new ArrayMap();
            for (r0.c cVar : d10) {
                arrayMap.put(cVar, r0Var.c(aVar, cVar));
            }
            treeMap.put(aVar, arrayMap);
        }
        return new w1(treeMap);
    }

    @Override // a0.r0
    public Object a(r0.a aVar) {
        Map map = (Map) this.I.get(aVar);
        if (map != null) {
            return map.get((r0.c) Collections.min(map.keySet()));
        }
        throw new IllegalArgumentException("Option does not exist: " + aVar);
    }

    @Override // a0.r0
    public Set b() {
        return Collections.unmodifiableSet(this.I.keySet());
    }

    @Override // a0.r0
    public Object c(r0.a aVar, r0.c cVar) {
        Map map = (Map) this.I.get(aVar);
        if (map != null) {
            if (map.containsKey(cVar)) {
                return map.get(cVar);
            }
            throw new IllegalArgumentException("Option does not exist: " + aVar + " with priority=" + cVar);
        }
        throw new IllegalArgumentException("Option does not exist: " + aVar);
    }

    @Override // a0.r0
    public Set d(r0.a aVar) {
        Map map = (Map) this.I.get(aVar);
        if (map == null) {
            return Collections.EMPTY_SET;
        }
        return Collections.unmodifiableSet(map.keySet());
    }

    @Override // a0.r0
    public Object e(r0.a aVar, Object obj) {
        try {
            return a(aVar);
        } catch (IllegalArgumentException unused) {
            return obj;
        }
    }

    @Override // a0.r0
    public r0.c f(r0.a aVar) {
        Map map = (Map) this.I.get(aVar);
        if (map != null) {
            return (r0.c) Collections.min(map.keySet());
        }
        throw new IllegalArgumentException("Option does not exist: " + aVar);
    }

    /* JADX WARN: Removed duplicated region for block: B:5:0x001a  */
    @Override // a0.r0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void g(java.lang.String r4, a0.r0.b r5) {
        /*
            r3 = this;
            java.lang.Class<java.lang.Void> r0 = java.lang.Void.class
            a0.r0$a r0 = a0.r0.a.a(r4, r0)
            java.util.TreeMap r1 = r3.I
            java.util.SortedMap r0 = r1.tailMap(r0)
            java.util.Set r0 = r0.entrySet()
            java.util.Iterator r0 = r0.iterator()
        L14:
            boolean r1 = r0.hasNext()
            if (r1 == 0) goto L3d
            java.lang.Object r1 = r0.next()
            java.util.Map$Entry r1 = (java.util.Map.Entry) r1
            java.lang.Object r2 = r1.getKey()
            a0.r0$a r2 = (a0.r0.a) r2
            java.lang.String r2 = r2.c()
            boolean r2 = r2.startsWith(r4)
            if (r2 != 0) goto L31
            goto L3d
        L31:
            java.lang.Object r1 = r1.getKey()
            a0.r0$a r1 = (a0.r0.a) r1
            boolean r1 = r5.a(r1)
            if (r1 != 0) goto L14
        L3d:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: a0.w1.g(java.lang.String, a0.r0$b):void");
    }

    @Override // a0.r0
    public boolean h(r0.a aVar) {
        return this.I.containsKey(aVar);
    }
}
