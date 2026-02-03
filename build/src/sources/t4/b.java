package t4;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import pv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements lu.a, pv.a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f49499a = new b();

    private b() {
    }

    @Override // lu.a
    public Object e(Object obj, Object obj2, defpackage.h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = qv.a.c(obj);
        List f10 = f49499a.f(c10, obj2, evaluator);
        Map a10 = qv.c.a(c10);
        if (a10 != null && f10 != null) {
            for (Object obj3 : f10) {
                if (Intrinsics.areEqual(evaluator.a(a10, obj3), Boolean.TRUE)) {
                    return obj3;
                }
            }
        }
        return null;
    }

    @Override // pv.a
    public List f(List list, Object obj, defpackage.h hVar) {
        return a.C0571a.a(this, list, obj, hVar);
    }
}
