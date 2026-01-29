package t4;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import ov.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements ku.a, ov.a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f49211a = new b();

    private b() {
    }

    @Override // ku.a
    public Object d(Object obj, Object obj2, defpackage.h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = pv.a.c(obj);
        List e10 = f49211a.e(c10, obj2, evaluator);
        Map a10 = pv.c.a(c10);
        if (a10 != null && e10 != null) {
            for (Object obj3 : e10) {
                if (Intrinsics.areEqual(evaluator.a(a10, obj3), Boolean.TRUE)) {
                    return obj3;
                }
            }
        }
        return null;
    }

    @Override // ov.a
    public List e(List list, Object obj, defpackage.h hVar) {
        return a.C0550a.a(this, list, obj, hVar);
    }
}
