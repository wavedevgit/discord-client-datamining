package pv;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    private static final Comparable a(Object obj) {
        if (obj instanceof Comparable) {
            return (Comparable) obj;
        }
        if (obj instanceof List) {
            return new nv.a((List) obj);
        }
        return null;
    }

    public static final List b(Object obj) {
        return e(c(obj));
    }

    public static final List c(Object obj) {
        List list;
        if (obj instanceof List) {
            list = (List) obj;
        } else {
            list = null;
        }
        if (list != null) {
            return new nv.a(list);
        }
        return new nv.a(CollectionsKt.e(obj));
    }

    public static final List d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        List<Object> c10 = c(list);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(c10, 10));
        for (Object obj : c10) {
            arrayList.add(a(obj));
        }
        return arrayList;
    }

    private static final List e(List list) {
        Double d10;
        List list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (Object obj : list2) {
            if (obj instanceof Number) {
                d10 = Double.valueOf(((Number) obj).doubleValue());
            } else if (obj instanceof String) {
                d10 = StringsKt.p((String) obj);
            } else {
                d10 = null;
            }
            arrayList.add(d10);
        }
        return arrayList;
    }

    public static final boolean f(Object obj) {
        Map map;
        if (obj instanceof Map) {
            map = (Map) obj;
        } else {
            map = null;
        }
        if (map == null || map.isEmpty()) {
            return false;
        }
        Set<Object> keySet = map.keySet();
        if (!(keySet instanceof Collection) || !keySet.isEmpty()) {
            for (Object obj2 : keySet) {
                if (!(obj2 instanceof String)) {
                    return false;
                }
            }
            return true;
        }
        return true;
    }

    public static final boolean g(Object obj) {
        if (obj instanceof List) {
            List list = (List) obj;
            if (list.size() == 1 && CollectionsKt.o0(list) == null) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static final String h(Object obj) {
        String str;
        if (obj != null) {
            str = obj.toString();
        } else {
            str = null;
        }
        if (str == null) {
            return "";
        }
        return str;
    }
}
