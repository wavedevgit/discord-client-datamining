package t4;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import lw.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements cv.a, lw.a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f49037a = new b();

    private b() {
    }

    @Override // cv.a
    public Object e(Object obj, Object obj2, defpackage.h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        List c10 = mw.a.c(obj);
        List f10 = f49037a.f(c10, obj2, evaluator);
        Map a10 = mw.c.a(c10);
        if (a10 != null && f10 != null) {
            for (Object obj3 : f10) {
                if (Intrinsics.areEqual(evaluator.a(a10, obj3), Boolean.TRUE)) {
                    return obj3;
                }
            }
        }
        return null;
    }

    @Override // lw.a
    public List f(List list, Object obj, defpackage.h hVar) {
        return a.C0505a.a(this, list, obj, hVar);
    }
}
