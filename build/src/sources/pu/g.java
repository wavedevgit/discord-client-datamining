package pu;

import java.util.List;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
import pu.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements nu.a, a {

    /* renamed from: a  reason: collision with root package name */
    public static final g f46632a = new g();

    private g() {
    }

    private final Object f(b bVar, Object obj, h hVar) {
        List<Object> b10 = bVar.b();
        if (b10 != null) {
            Object obj2 = obj;
            for (Object obj3 : b10) {
                obj2 = f46632a.h(hVar, obj2, obj3, bVar.a());
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
            return hVar.a(map, f46632a.i(obj, obj2));
        }
        return null;
    }

    private final Map i(Object obj, Object obj2) {
        return o0.m(v.a("accumulator", obj), v.a("current", obj2));
    }

    @Override // pu.a
    public Object a(Map map, List list) {
        return a.C0565a.b(this, map, list);
    }

    @Override // pu.a
    public b c(List list, Object obj, h hVar) {
        return a.C0565a.a(this, list, obj, hVar);
    }

    @Override // nu.a
    public Object d(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = sv.a.c(obj);
        g gVar = f46632a;
        return gVar.f(gVar.c(c10, obj2, evaluator), sv.c.c(c10), evaluator);
    }

    @Override // rv.a
    public List e(List list, Object obj, h hVar) {
        return a.C0565a.c(this, list, obj, hVar);
    }
}
