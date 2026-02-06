package wu;

import cw.d;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import xu.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements su.b, xu.a {

    /* renamed from: a  reason: collision with root package name */
    public static final c f54129a = new c();

    private c() {
    }

    private final Object a(List list, Object obj, Object obj2) {
        List list2;
        if (!list.isEmpty()) {
            obj2 = b(obj2, list);
        }
        if (d(obj2, obj)) {
            obj2 = null;
            if (obj instanceof List) {
                list2 = (List) obj;
            } else {
                list2 = null;
            }
            if (list2 != null) {
                return cw.c.b(list2);
            }
        }
        return obj2;
    }

    private final Object b(Object obj, List list) {
        Map map;
        if (obj instanceof List) {
            if (list.size() == 1) {
                return ((List) obj).get(d.b((String) CollectionsKt.o0(list)));
            }
            return c(list, (List) obj);
        }
        if (obj instanceof Map) {
            obj = ((Map) obj).get(CollectionsKt.o0(list));
            for (String str : CollectionsKt.f0(list, 1)) {
                if (obj instanceof Map) {
                    map = (Map) obj;
                } else {
                    map = null;
                }
                if (map != null) {
                    obj = map.get(str);
                } else {
                    obj = null;
                }
            }
        }
        return obj;
    }

    private final Object c(List list, List list2) {
        String str = (String) CollectionsKt.firstOrNull(list);
        if (str != null) {
            Object q02 = CollectionsKt.q0(list2, d.b(str));
            if (q02 instanceof List) {
                return f54129a.c(list.subList(1, list.size()), (List) q02);
            }
            return CollectionsKt.q0(list2, d.b(str));
        }
        return null;
    }

    private final boolean d(Object obj, Object obj2) {
        if ((Intrinsics.areEqual(obj, obj2) || obj == null) && (obj2 instanceof List) && ((List) obj2).size() > 1) {
            return true;
        }
        return false;
    }

    public List e(Object obj) {
        return a.C0734a.b(this, obj);
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        List e10 = e(cw.a.c(obj));
        if (e10 != null) {
            return a(e10, obj, obj2);
        }
        return null;
    }
}
