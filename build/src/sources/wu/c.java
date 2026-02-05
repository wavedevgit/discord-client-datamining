package wu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import zu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements qu.b, zu.d {

    /* renamed from: a  reason: collision with root package name */
    public static final c f53316a = new c();

    private c() {
    }

    private final Object a(List list) {
        int size = list.size();
        if (size == 0) {
            return null;
        }
        if (size != 1) {
            if (size != 2) {
                if (size != 3) {
                    if (b(CollectionsKt.firstOrNull(list))) {
                        return vv.c.b(list);
                    }
                    return a(list.subList(2, list.size()));
                } else if (b(CollectionsKt.firstOrNull(list))) {
                    return vv.c.b(list);
                } else {
                    return vv.c.c(list);
                }
            } else if (!b(CollectionsKt.firstOrNull(list))) {
                return null;
            } else {
                return vv.c.b(list);
            }
        }
        return CollectionsKt.firstOrNull(list);
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }

    @Override // qu.b
    public Object f(Object obj, Object obj2) {
        return a(vv.a.c(obj));
    }
}
