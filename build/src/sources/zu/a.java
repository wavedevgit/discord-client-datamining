package zu;

import cv.d;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements tu.b, cv.d {

    /* renamed from: a  reason: collision with root package name */
    public static final a f56702a = new a();

    private a() {
    }

    public boolean a(Object obj) {
        return d.a.a(this, obj);
    }

    @Override // tu.b
    public Object f(Object obj, Object obj2) {
        Object obj3;
        List c10 = dw.a.c(obj);
        List<Object> list = c10;
        boolean z10 = list instanceof Collection;
        if (!z10 || !list.isEmpty()) {
            for (Object obj4 : list) {
                if (!(obj4 instanceof Boolean)) {
                    Iterator it = list.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            obj3 = it.next();
                            if (!f56702a.a(obj3)) {
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
                if (!f56702a.a(it2.next())) {
                    z11 = false;
                    break;
                }
            }
        }
        return Boolean.valueOf(z11);
    }
}
