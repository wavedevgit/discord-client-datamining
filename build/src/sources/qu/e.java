package qu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import qu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements nu.a, d {

    /* renamed from: a  reason: collision with root package name */
    public static final e f48201a = new e();

    private e() {
    }

    @Override // pu.f
    public Object b(Object obj, Object obj2, h hVar, Function2 function2) {
        return d.a.f(this, obj, obj2, hVar, function2);
    }

    @Override // pu.a
    public pu.b c(List list, Object obj, h hVar) {
        return d.a.c(this, list, obj, hVar);
    }

    @Override // nu.a
    public Object d(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        return f(obj, obj2, evaluator);
    }

    @Override // rv.a
    public List e(List list, Object obj, h hVar) {
        return d.a.h(this, list, obj, hVar);
    }

    public Object f(Object obj, Object obj2, h hVar) {
        return d.a.b(this, obj, obj2, hVar);
    }

    @Override // qu.d
    public Object g(c data, h evaluator) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        for (Object obj : data.b()) {
            if (f48201a.i(evaluator.a(data.a(), obj))) {
                return Boolean.TRUE;
            }
        }
        return data.c();
    }

    @Override // pu.a
    /* renamed from: h */
    public Boolean a(Map map, List list) {
        return d.a.e(this, map, list);
    }

    public boolean i(Object obj) {
        return d.a.i(this, obj);
    }
}
