package t4;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements nu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final e f49718a = new e();

    private e() {
    }

    @Override // nu.b
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
        return Integer.valueOf(list.size());
    }
}
