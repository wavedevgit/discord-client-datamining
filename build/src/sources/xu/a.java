package xu;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements tu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f55338a = new a();

    private a() {
    }

    private final boolean b(Object obj) {
        if (obj != null) {
            if (!(obj instanceof String) || ((CharSequence) obj).length() != 0) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // tu.b
    /* renamed from: a */
    public List f(Object obj, Object obj2) {
        ArrayList arrayList = new ArrayList();
        for (Object obj3 : dw.a.c(obj)) {
            if (!f55338a.b(c.f55340a.f(obj3, obj2))) {
                obj3 = null;
            }
            if (obj3 != null) {
                arrayList.add(obj3);
            }
        }
        return arrayList;
    }
}
