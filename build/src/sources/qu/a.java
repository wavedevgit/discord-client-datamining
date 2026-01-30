package qu;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import tu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements ku.b, tu.d {

    /* renamed from: a  reason: collision with root package name */
    public static final a f47690a = new a();

    private a() {
    }

    public boolean a(Object obj) {
        return d.a.a(this, obj);
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        Object obj3;
        List c10 = pv.a.c(obj);
        List<Object> list = c10;
        boolean z10 = list instanceof Collection;
        if (!z10 || !list.isEmpty()) {
            for (Object obj4 : list) {
                if (!(obj4 instanceof Boolean)) {
                    Iterator it = list.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            obj3 = it.next();
                            if (!f47690a.a(obj3)) {
                                break;
                            }
                        } else {
                            obj3 = null;
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
        boolean z11 = true;
        if (!z10 || !list.isEmpty()) {
            Iterator it2 = list.iterator();
            while (true) {
                if (!it2.hasNext()) {
                    break;
                }
                if (!f47690a.a(it2.next())) {
                    z11 = false;
                    break;
                }
            }
        }
        return Boolean.valueOf(z11);
    }
}
