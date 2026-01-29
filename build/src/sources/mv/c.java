package mv;

import java.util.List;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import lv.o;
import qs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements ku.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final c f39592a = new c();

    /* renamed from: b  reason: collision with root package name */
    private static final b f39593b = new b();

    private c() {
    }

    private final Integer a(List list) {
        Object b10;
        try {
            Result.a aVar = Result.f33279e;
            b10 = Result.b(Integer.valueOf(((e) CollectionsKt.o0(list)).compareTo((e) CollectionsKt.z0(list))));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33279e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.h(b10)) {
            int intValue = ((Number) b10).intValue();
            if (intValue > 0) {
                return 1;
            }
            if (intValue < 0) {
                return -1;
            }
            return 0;
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        return (Integer) b10;
    }

    private final List b(List list) {
        Object b10;
        try {
            Result.a aVar = Result.f33279e;
            Object obj = list.get(2);
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
            a valueOf = a.valueOf((String) obj);
            b bVar = f39593b;
            Object obj2 = list.get(0);
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.String");
            e a10 = bVar.a((String) obj2, valueOf);
            Object obj3 = list.get(1);
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.String");
            b10 = Result.b(CollectionsKt.o(a10, bVar.a((String) obj3, valueOf)));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33279e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        return (List) b10;
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        List b10 = b(pv.a.c(obj));
        if (b10 != null) {
            return a(b10);
        }
        return null;
    }
}
