package nu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import nu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements ku.a, d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f42218a = new b();

    private b() {
    }

    @Override // mu.f
    public Object b(Object obj, Object obj2, h hVar, Function2 function2) {
        return d.a.f(this, obj, obj2, hVar, function2);
    }

    @Override // mu.a
    public mu.b c(List list, Object obj, h hVar) {
        return d.a.c(this, list, obj, hVar);
    }

    @Override // ku.a
    public Object d(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        return f(obj, obj2, evaluator);
    }

    @Override // ov.a
    public List e(List list, Object obj, h hVar) {
        return d.a.h(this, list, obj, hVar);
    }

    public Object f(Object obj, Object obj2, h hVar) {
        return d.a.b(this, obj, obj2, hVar);
    }

    @Override // nu.d
    public Object g(c data, h evaluator) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        for (Object obj : data.b()) {
            if (f42218a.i(evaluator.a(data.a(), obj))) {
                return Boolean.FALSE;
            }
        }
        return data.c();
    }

    @Override // mu.a
    /* renamed from: h */
    public Boolean a(Map map, List expressionValues) {
        Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
        return Boolean.TRUE;
    }

    public boolean i(Object obj) {
        return d.a.i(this, obj);
    }
}
