package t4;

import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements su.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f50287a = new a();

    private a() {
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        List list;
        if (obj instanceof List) {
            list = (List) obj;
        } else {
            list = null;
        }
        if (list == null) {
            return null;
        }
        return CollectionsKt.e0(list);
    }
}
