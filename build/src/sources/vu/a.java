package vu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import vu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements su.a, d {

    /* renamed from: a  reason: collision with root package name */
    public static final a f53038a = new a();

    private a() {
    }

    @Override // uu.f
    public Object b(Object obj, Object obj2, h hVar, Function2 function2) {
        return d.a.f(this, obj, obj2, hVar, function2);
    }

    @Override // uu.a
    public uu.b c(List list, Object obj, h hVar) {
        return d.a.c(this, list, obj, hVar);
    }

    @Override // vu.d
    public Object d(c data, h evaluator) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        for (Object obj : data.b()) {
            if (!f53038a.i(evaluator.a(data.a(), obj))) {
                return data.c();
            }
        }
        return Boolean.TRUE;
    }

    @Override // su.a
    public Object e(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        return g(obj, obj2, evaluator);
    }

    @Override // bw.a
    public List f(List list, Object obj, h hVar) {
        return d.a.h(this, list, obj, hVar);
    }

    public Object g(Object obj, Object obj2, h hVar) {
        return d.a.b(this, obj, obj2, hVar);
    }

    @Override // uu.a
    /* renamed from: h */
    public Boolean a(Map map, List list) {
        return d.a.e(this, map, list);
    }

    public boolean i(Object obj) {
        return d.a.i(this, obj);
    }
}
