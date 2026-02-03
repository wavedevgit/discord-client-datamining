package ou;

import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import ou.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements lu.a, d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f44863a = new b();

    private b() {
    }

    @Override // nu.f
    public Object b(Object obj, Object obj2, h hVar, Function2 function2) {
        return d.a.f(this, obj, obj2, hVar, function2);
    }

    @Override // nu.a
    public nu.b c(List list, Object obj, h hVar) {
        return d.a.c(this, list, obj, hVar);
    }

    @Override // ou.d
    public Object d(c data, h evaluator) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        for (Object obj : data.b()) {
            if (f44863a.i(evaluator.a(data.a(), obj))) {
                return Boolean.FALSE;
            }
        }
        return data.c();
    }

    @Override // lu.a
    public Object e(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        return g(obj, obj2, evaluator);
    }

    @Override // pv.a
    public List f(List list, Object obj, h hVar) {
        return d.a.h(this, list, obj, hVar);
    }

    public Object g(Object obj, Object obj2, h hVar) {
        return d.a.b(this, obj, obj2, hVar);
    }

    @Override // nu.a
    /* renamed from: h */
    public Boolean a(Map map, List expressionValues) {
        Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
        return Boolean.TRUE;
    }

    public boolean i(Object obj) {
        return d.a.i(this, obj);
    }
}
