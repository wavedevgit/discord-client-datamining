package uu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import vv.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements qu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f51728a = new b();

    private b() {
    }

    @Override // qu.b
    public Object f(Object obj, Object obj2) {
        List list;
        long j10;
        List list2;
        Object obj3;
        List list3;
        Object firstOrNull;
        String obj4;
        boolean z10 = obj instanceof List;
        List list4 = null;
        if (z10) {
            list = (List) obj;
        } else {
            list = null;
        }
        if (list != null && (firstOrNull = CollectionsKt.firstOrNull(list)) != null && (obj4 = firstOrNull.toString()) != null) {
            j10 = d.c(obj4);
        } else {
            j10 = 0;
        }
        if (z10) {
            list2 = (List) obj;
        } else {
            list2 = null;
        }
        if (list2 != null) {
            obj3 = vv.c.b(list2);
        } else {
            obj3 = null;
        }
        if (obj3 instanceof List) {
            list3 = (List) obj3;
        } else {
            list3 = null;
        }
        if (list3 == null) {
            list3 = CollectionsKt.l();
        }
        List f10 = a.f51727a.f(list3, obj2);
        if (list3.size() - f10.size() < j10) {
            list4 = f10;
        }
        if (list4 == null) {
            return CollectionsKt.l();
        }
        return list4;
    }
}
