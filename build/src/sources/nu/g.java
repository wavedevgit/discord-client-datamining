package nu;

import java.util.List;
import java.util.Map;
import jr.v;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import nu.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements lu.a, a {

    /* renamed from: a  reason: collision with root package name */
    public static final g f42340a = new g();

    private g() {
    }

    private final Object g(b bVar, Object obj, h hVar) {
        List<Object> b10 = bVar.b();
        if (b10 != null) {
            Object obj2 = obj;
            for (Object obj3 : b10) {
                obj2 = f42340a.h(hVar, obj2, obj3, bVar.a());
                if (obj2 == null) {
                    return bVar.c();
                }
            }
            if (obj2 != null) {
                return obj2;
            }
        }
        return obj;
    }

    private final Object h(h hVar, Object obj, Object obj2, Map map) {
        if (map != null) {
            return hVar.a(map, f42340a.i(obj, obj2));
        }
        return null;
    }

    private final Map i(Object obj, Object obj2) {
        return o0.m(v.a("accumulator", obj), v.a("current", obj2));
    }

    @Override // nu.a
    public Object a(Map map, List list) {
        return a.C0534a.b(this, map, list);
    }

    @Override // nu.a
    public b c(List list, Object obj, h hVar) {
        return a.C0534a.a(this, list, obj, hVar);
    }

    @Override // lu.a
    public Object e(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = qv.a.c(obj);
        g gVar = f42340a;
        return gVar.g(gVar.c(c10, obj2, evaluator), qv.c.c(c10), evaluator);
    }

    @Override // pv.a
    public List f(List list, Object obj, h hVar) {
        return a.C0534a.c(this, list, obj, hVar);
    }
}
