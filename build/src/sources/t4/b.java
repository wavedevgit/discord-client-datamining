package t4;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import uv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements qu.a, uv.a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f50312a = new b();

    private b() {
    }

    @Override // qu.a
    public Object d(Object obj, Object obj2, defpackage.h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = vv.a.c(obj);
        List f10 = f50312a.f(c10, obj2, evaluator);
        Map a10 = vv.c.a(c10);
        if (a10 != null && f10 != null) {
            for (Object obj3 : f10) {
                if (Intrinsics.areEqual(evaluator.a(a10, obj3), Boolean.TRUE)) {
                    return obj3;
                }
            }
        }
        return null;
    }

    @Override // uv.a
    public List f(List list, Object obj, defpackage.h hVar) {
        return a.C0674a.a(this, list, obj, hVar);
    }
}
