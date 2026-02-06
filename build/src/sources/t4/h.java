package t4;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import qr.p;
import t4.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h implements su.b {

    /* renamed from: a  reason: collision with root package name */
    public static final h f50299a = new h();

    private h() {
    }

    private final Object a(i iVar, Function0 function0, Function0 function02) {
        if (Intrinsics.areEqual(iVar, i.b.f50301a)) {
            return function02.invoke();
        }
        if (Intrinsics.areEqual(iVar, i.a.f50300a)) {
            return function0.invoke();
        }
        if (Intrinsics.areEqual(iVar, i.c.f50302a)) {
            return null;
        }
        throw new p();
    }

    private final Object b(List list, i iVar) {
        Integer num;
        Integer num2;
        Integer num3;
        Integer num4;
        Integer num5;
        Integer num6;
        if (list != null) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : list) {
                if (obj instanceof String) {
                    arrayList.add(obj);
                }
            }
            num = Integer.valueOf(arrayList.size());
        } else {
            num = null;
        }
        if (list != null) {
            num2 = Integer.valueOf(list.size());
        } else {
            num2 = null;
        }
        if (Intrinsics.areEqual(num, num2)) {
            if (!(list instanceof List)) {
                list = null;
            }
            if (list == null) {
                return null;
            }
            return a(iVar, new f(list), new g(list));
        }
        if (list != null) {
            ArrayList arrayList2 = new ArrayList();
            for (Object obj2 : list) {
                if (obj2 instanceof Boolean) {
                    arrayList2.add(obj2);
                }
            }
            num3 = Integer.valueOf(arrayList2.size());
        } else {
            num3 = null;
        }
        if (list != null) {
            num4 = Integer.valueOf(list.size());
        } else {
            num4 = null;
        }
        if (Intrinsics.areEqual(num3, num4)) {
            if (!(list instanceof List)) {
                list = null;
            }
            if (list == null) {
                return null;
            }
            return a(iVar, new f(list), new g(list));
        }
        if (list != null) {
            ArrayList arrayList3 = new ArrayList();
            for (Object obj3 : list) {
                if (obj3 instanceof Number) {
                    arrayList3.add(obj3);
                }
            }
            num5 = Integer.valueOf(arrayList3.size());
        } else {
            num5 = null;
        }
        if (list != null) {
            num6 = Integer.valueOf(list.size());
        } else {
            num6 = null;
        }
        if (!Intrinsics.areEqual(num5, num6)) {
            return null;
        }
        List l02 = CollectionsKt.l0(cw.a.b(list));
        return a(iVar, new f(l02), new g(l02));
    }

    private final i c(String str) {
        if (Intrinsics.areEqual(str, "desc")) {
            return i.b.f50301a;
        }
        if (Intrinsics.areEqual(str, "asc")) {
            return i.a.f50300a;
        }
        return i.c.f50302a;
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        List list;
        List c10 = cw.a.c(obj);
        Object firstOrNull = CollectionsKt.firstOrNull(c10);
        String str = null;
        if (firstOrNull instanceof List) {
            list = (List) firstOrNull;
        } else {
            list = null;
        }
        if (list == null) {
            return null;
        }
        h hVar = f50299a;
        Object b10 = cw.c.b(c10);
        if (b10 instanceof String) {
            str = (String) b10;
        }
        return hVar.b(list, hVar.c(str));
    }
}
