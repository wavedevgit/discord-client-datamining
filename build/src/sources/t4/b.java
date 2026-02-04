package t4;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import rv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements nu.a, rv.a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f49707a = new b();

    private b() {
    }

    @Override // nu.a
    public Object d(Object obj, Object obj2, defpackage.h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = sv.a.c(obj);
        List e10 = f49707a.e(c10, obj2, evaluator);
        Map a10 = sv.c.a(c10);
        if (a10 != null && e10 != null) {
            for (Object obj3 : e10) {
                if (Intrinsics.areEqual(evaluator.a(a10, obj3), Boolean.TRUE)) {
                    return obj3;
                }
            }
        }
        return null;
    }

    @Override // rv.a
    public List e(List list, Object obj, defpackage.h hVar) {
        return a.C0608a.a(this, list, obj, hVar);
    }
}
