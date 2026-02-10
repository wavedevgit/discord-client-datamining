package wu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import wu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements tu.a, d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f54066a = new b();

    private b() {
    }

    @Override // vu.f
    public Object b(Object obj, Object obj2, h hVar, Function2 function2) {
        return d.a.f(this, obj, obj2, hVar, function2);
    }

    @Override // vu.a
    public vu.b c(List list, Object obj, h hVar) {
        return d.a.c(this, list, obj, hVar);
    }

    @Override // tu.a
    public Object d(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        return g(obj, obj2, evaluator);
    }

    @Override // wu.d
    public Object e(c data, h evaluator) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        for (Object obj : data.b()) {
            if (f54066a.i(evaluator.a(data.a(), obj))) {
                return Boolean.FALSE;
            }
        }
        return data.c();
    }

    @Override // cw.a
    public List f(List list, Object obj, h hVar) {
        return d.a.h(this, list, obj, hVar);
    }

    public Object g(Object obj, Object obj2, h hVar) {
        return d.a.b(this, obj, obj2, hVar);
    }

    @Override // vu.a
    /* renamed from: h */
    public Boolean a(Map map, List expressionValues) {
        Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
        return Boolean.TRUE;
    }

    public boolean i(Object obj) {
        return d.a.i(this, obj);
    }
}
