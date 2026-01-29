package lv;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements ku.b {

    /* renamed from: a  reason: collision with root package name */
    public static final m f37745a = new m();

    private m() {
    }

    private final List a(n nVar) {
        List a10 = nVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (Object obj : a10) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
            arrayList.add((String) obj);
        }
        String[] strArr = (String[]) CollectionsKt.l1(arrayList).toArray(new String[0]);
        return StringsKt.split$default(nVar.b(), (String[]) Arrays.copyOf(strArr, strArr.length), false, 0, 6, null);
    }

    private final n b(List list) {
        Object b10;
        try {
            Result.a aVar = Result.f33279e;
            Object obj = list.get(0);
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
            Object obj2 = list.get(1);
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.collections.List<kotlin.Any?>");
            b10 = Result.b(new n((String) obj, (List) obj2));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33279e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.e(b10) == null) {
            return (n) b10;
        }
        return null;
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        n b10 = b(pv.a.c(obj));
        if (b10 != null) {
            return a(b10);
        }
        return null;
    }
}
