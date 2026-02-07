package uu;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements su.b {

    /* renamed from: a  reason: collision with root package name */
    public static final e f52141a = new e();

    private e() {
    }

    private final List a(List list) {
        List e10;
        ArrayList arrayList = new ArrayList();
        for (Object obj : list) {
            if (obj instanceof List) {
                e10 = (List) obj;
            } else {
                e10 = CollectionsKt.e(obj);
            }
            CollectionsKt.B(arrayList, e10);
        }
        return arrayList;
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        return a(cw.a.c(obj));
    }
}
