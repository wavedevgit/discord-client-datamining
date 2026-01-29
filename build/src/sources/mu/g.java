package mu;

import ir.v;
import java.util.List;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import mu.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements ku.a, a {

    /* renamed from: a  reason: collision with root package name */
    public static final g f39581a = new g();

    private g() {
    }

    private final Object f(b bVar, Object obj, h hVar) {
        List<Object> b10 = bVar.b();
        if (b10 != null) {
            Object obj2 = obj;
            for (Object obj3 : b10) {
                obj2 = f39581a.h(hVar, obj2, obj3, bVar.a());
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
            return hVar.a(map, f39581a.i(obj, obj2));
        }
        return null;
    }

    private final Map i(Object obj, Object obj2) {
        return o0.m(v.a("accumulator", obj), v.a("current", obj2));
    }

    @Override // mu.a
    public Object a(Map map, List list) {
        return a.C0502a.b(this, map, list);
    }

    @Override // mu.a
    public b c(List list, Object obj, h hVar) {
        return a.C0502a.a(this, list, obj, hVar);
    }

    @Override // ku.a
    public Object d(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = pv.a.c(obj);
        g gVar = f39581a;
        return gVar.f(gVar.c(c10, obj2, evaluator), pv.c.c(c10), evaluator);
    }

    @Override // ov.a
    public List e(List list, Object obj, h hVar) {
        return a.C0502a.c(this, list, obj, hVar);
    }
}
