package t4;

import java.util.List;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements qu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final c f50313a = new c();

    private c() {
    }

    private final Integer a(List list) {
        Object obj = list.get(4);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Number");
        Number number = (Number) obj;
        if (number.doubleValue() != number.intValue()) {
            number = null;
        }
        if (number == null) {
            return null;
        }
        return Integer.valueOf(number.intValue());
    }

    private final String b(d dVar) {
        return CollectionsKt.x0(dVar.a(), dVar.e(), dVar.d(), dVar.c(), dVar.b(), dVar.f(), null, 32, null);
    }

    private final d c(List list) {
        Object b10;
        d dVar;
        try {
            Result.a aVar = Result.f31985e;
            Integer a10 = f50313a.a(list);
            if (a10 != null) {
                int intValue = a10.intValue();
                List c10 = vv.a.c(list.get(0));
                Object obj = list.get(1);
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
                String str = (String) obj;
                Object obj2 = list.get(2);
                Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.String");
                String str2 = (String) obj2;
                Object obj3 = list.get(3);
                Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.String");
                Object obj4 = list.get(5);
                Intrinsics.checkNotNull(obj4, "null cannot be cast to non-null type kotlin.String");
                dVar = new d(c10, str, str2, (String) obj3, intValue, (String) obj4);
            } else {
                dVar = null;
            }
            b10 = Result.b(dVar);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f31985e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.e(b10) != null) {
            return null;
        }
        return (d) b10;
    }

    @Override // qu.b
    public Object f(Object obj, Object obj2) {
        d c10 = c(vv.a.c(obj));
        if (c10 != null) {
            return b(c10);
        }
        return null;
    }
}
