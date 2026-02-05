package su;

import java.util.List;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import or.v;
import su.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements qu.a, a {

    /* renamed from: a  reason: collision with root package name */
    public static final g f50248a = new g();

    private g() {
    }

    private final Object g(b bVar, Object obj, h hVar) {
        List<Object> b10 = bVar.b();
        if (b10 != null) {
            Object obj2 = obj;
            for (Object obj3 : b10) {
                obj2 = f50248a.h(hVar, obj2, obj3, bVar.a());
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
            return hVar.a(map, f50248a.i(obj, obj2));
        }
        return null;
    }

    private final Map i(Object obj, Object obj2) {
        return o0.m(v.a("accumulator", obj), v.a("current", obj2));
    }

    @Override // su.a
    public Object a(Map map, List list) {
        return a.C0641a.b(this, map, list);
    }

    @Override // su.a
    public b c(List list, Object obj, h hVar) {
        return a.C0641a.a(this, list, obj, hVar);
    }

    @Override // qu.a
    public Object d(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = vv.a.c(obj);
        g gVar = f50248a;
        return gVar.g(gVar.c(c10, obj2, evaluator), vv.c.c(c10), evaluator);
    }

    @Override // uv.a
    public List f(List list, Object obj, h hVar) {
        return a.C0641a.c(this, list, obj, hVar);
    }
}
