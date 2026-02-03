package tu;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import wu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements nu.b, wu.d {

    /* renamed from: a  reason: collision with root package name */
    public static final e f50300a = new e();

    private e() {
    }

    public boolean a(Object obj) {
        return d.a.a(this, obj);
    }

    @Override // nu.b
    public Object f(Object obj, Object obj2) {
        boolean z10;
        List c10 = sv.a.c(obj);
        List<Object> list = c10;
        Object obj3 = null;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (Object obj4 : list) {
                if (!(obj4 instanceof Boolean)) {
                    Iterator it = list.iterator();
                    while (true) {
                        if (!it.hasNext()) {
                            break;
                        }
                        Object next = it.next();
                        if (f50300a.a(next)) {
                            obj3 = next;
                            break;
                        }
                    }
                    if (obj3 == null) {
                        return CollectionsKt.z0(c10);
                    }
                    return obj3;
                }
            }
        }
        Iterator it2 = list.iterator();
        while (true) {
            if (!it2.hasNext()) {
                break;
            }
            Object next2 = it2.next();
            if (f50300a.a(next2)) {
                obj3 = next2;
                break;
            }
        }
        if (obj3 != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return Boolean.valueOf(z10);
    }
}
