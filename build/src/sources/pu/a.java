package pu;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements lu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f46492a = new a();

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

    @Override // lu.b
    /* renamed from: a */
    public List f(Object obj, Object obj2) {
        ArrayList arrayList = new ArrayList();
        for (Object obj3 : qv.a.c(obj)) {
            if (!f46492a.b(c.f46494a.f(obj3, obj2))) {
                obj3 = null;
            }
            if (obj3 != null) {
                arrayList.add(obj3);
            }
        }
        return arrayList;
    }
}
