package t4;

import cw.a;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements tu.a, cw.a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f50536a = new b();

    private b() {
    }

    @Override // tu.a
    public Object d(Object obj, Object obj2, defpackage.h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = dw.a.c(obj);
        List f10 = f50536a.f(c10, obj2, evaluator);
        Map a10 = dw.c.a(c10);
        if (a10 != null && f10 != null) {
            for (Object obj3 : f10) {
                if (Intrinsics.areEqual(evaluator.a(a10, obj3), Boolean.TRUE)) {
                    return obj3;
                }
            }
        }
        return null;
    }

    @Override // cw.a
    public List f(List list, Object obj, defpackage.h hVar) {
        return a.C0299a.a(this, list, obj, hVar);
    }
}
