package kotlin.collections;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class r0 extends q0 {
    public static Map i() {
        g0 g0Var = g0.f32507d;
        Intrinsics.checkNotNull(g0Var, "null cannot be cast to non-null type kotlin.collections.Map<K of kotlin.collections.MapsKt__MapsKt.emptyMap, V of kotlin.collections.MapsKt__MapsKt.emptyMap>");
        return g0Var;
    }

    public static Object j(Map map, Object obj) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        return p0.a(map, obj);
    }

    public static HashMap k(Pair... pairs) {
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        HashMap hashMap = new HashMap(q0.e(pairs.length));
        t(hashMap, pairs);
        return hashMap;
    }

    public static LinkedHashMap l(Pair... pairs) {
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        return (LinkedHashMap) x(pairs, new LinkedHashMap(q0.e(pairs.length)));
    }

    public static Map m(Pair... pairs) {
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        if (pairs.length > 0) {
            return x(pairs, new LinkedHashMap(q0.e(pairs.length)));
        }
        return i();
    }

    public static Map n(Pair... pairs) {
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        LinkedHashMap linkedHashMap = new LinkedHashMap(q0.e(pairs.length));
        t(linkedHashMap, pairs);
        return linkedHashMap;
    }

    public static final Map o(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        int size = map.size();
        if (size != 0) {
            if (size != 1) {
                return map;
            }
            return q0.g(map);
        }
        return i();
    }

    public static Map p(Map map, Iterable pairs) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        if (map.isEmpty()) {
            return u(pairs);
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap(map);
        s(linkedHashMap, pairs);
        return linkedHashMap;
    }

    public static Map q(Map map, Map map2) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        Intrinsics.checkNotNullParameter(map2, "map");
        LinkedHashMap linkedHashMap = new LinkedHashMap(map);
        linkedHashMap.putAll(map2);
        return linkedHashMap;
    }

    public static Map r(Map map, Pair pair) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        Intrinsics.checkNotNullParameter(pair, "pair");
        if (map.isEmpty()) {
            return q0.f(pair);
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap(map);
        linkedHashMap.put(pair.c(), pair.d());
        return linkedHashMap;
    }

    public static final void s(Map map, Iterable pairs) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        Iterator it = pairs.iterator();
        while (it.hasNext()) {
            Pair pair = (Pair) it.next();
            map.put(pair.a(), pair.b());
        }
    }

    public static final void t(Map map, Pair[] pairs) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        for (Pair pair : pairs) {
            map.put(pair.a(), pair.b());
        }
    }

    public static Map u(Iterable iterable) {
        Object next;
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            Collection collection = (Collection) iterable;
            int size = collection.size();
            if (size != 0) {
                if (size != 1) {
                    return v(iterable, new LinkedHashMap(q0.e(collection.size())));
                }
                if (iterable instanceof List) {
                    next = ((List) iterable).get(0);
                } else {
                    next = collection.iterator().next();
                }
                return q0.f((Pair) next);
            }
            return i();
        }
        return o(v(iterable, new LinkedHashMap()));
    }

    public static final Map v(Iterable iterable, Map destination) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(destination, "destination");
        s(destination, iterable);
        return destination;
    }

    public static Map w(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        int size = map.size();
        if (size != 0) {
            if (size != 1) {
                return y(map);
            }
            return q0.g(map);
        }
        return i();
    }

    public static final Map x(Pair[] pairArr, Map destination) {
        Intrinsics.checkNotNullParameter(pairArr, "<this>");
        Intrinsics.checkNotNullParameter(destination, "destination");
        t(destination, pairArr);
        return destination;
    }

    public static Map y(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        return new LinkedHashMap(map);
    }
}
