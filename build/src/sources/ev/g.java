package ev;

import as.v;
import ev.a;
import java.util.List;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements cv.a, a {

    /* renamed from: a  reason: collision with root package name */
    public static final g f23275a = new g();

    private g() {
    }

    private final Object g(b bVar, Object obj, h hVar) {
        List<Object> b10 = bVar.b();
        if (b10 != null) {
            Object obj2 = obj;
            for (Object obj3 : b10) {
                obj2 = f23275a.h(hVar, obj2, obj3, bVar.a());
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
            return hVar.a(map, f23275a.i(obj, obj2));
        }
        return null;
    }

    private final Map i(Object obj, Object obj2) {
        return o0.m(v.a("accumulator", obj), v.a("current", obj2));
    }

    @Override // ev.a
    public Object a(Map map, List list) {
        return a.C0313a.b(this, map, list);
    }

    @Override // ev.a
    public b d(List list, Object obj, h hVar) {
        return a.C0313a.a(this, list, obj, hVar);
    }

    @Override // cv.a
    public Object e(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = mw.a.c(obj);
        g gVar = f23275a;
        return gVar.g(gVar.d(c10, obj2, evaluator), mw.c.c(c10), evaluator);
    }

    @Override // lw.a
    public List f(List list, Object obj, h hVar) {
        return a.C0313a.c(this, list, obj, hVar);
    }
}
