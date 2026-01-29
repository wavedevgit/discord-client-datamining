package lv;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements ku.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final g f37736a = new g();

    private g() {
    }

    private final Set a(List list) {
        List list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (Object obj : list2) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
            arrayList.add(kotlin.text.m.valueOf((String) obj));
        }
        return CollectionsKt.l1(arrayList);
    }

    private final boolean b(h hVar) {
        List a10 = hVar.a();
        if (a10 != null && !a10.isEmpty()) {
            return d(hVar.a(), hVar.b(), hVar.c());
        }
        return c(hVar.b(), hVar.c());
    }

    private final boolean c(String str, String str2) {
        return new Regex(str).i(str2);
    }

    private final boolean d(List list, String str, String str2) {
        Set a10 = a(list);
        Regex regex = new Regex(str, a10);
        Set<kotlin.text.m> set = a10;
        if (!(set instanceof Collection) || !set.isEmpty()) {
            for (kotlin.text.m mVar : set) {
                if (mVar == kotlin.text.m.f36266o) {
                    List<String> split$default = StringsKt.split$default(str2, new String[]{ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE}, false, 0, 6, null);
                    if ((split$default instanceof Collection) && split$default.isEmpty()) {
                        return true;
                    }
                    for (String str3 : split$default) {
                        if (!regex.i(str3)) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        return regex.i(str2);
    }

    private final h e(List list) {
        Object b10;
        try {
            Result.a aVar = Result.f33279e;
            Object obj = list.get(0);
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
            Object obj2 = list.get(1);
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.String");
            Object obj3 = list.get(2);
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.collections.List<kotlin.Any?>");
            b10 = Result.b(new h((String) obj, (String) obj2, (List) obj3));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33279e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.e(b10) == null) {
            return (h) b10;
        }
        return null;
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        h e10 = e(pv.a.c(obj));
        if (e10 != null) {
            return Boolean.valueOf(b(e10));
        }
        return null;
    }
}
