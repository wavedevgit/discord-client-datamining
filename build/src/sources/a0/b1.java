package a0;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f19a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static final Map f20b = new HashMap();

    public static y a(Object obj) {
        y yVar;
        synchronized (f19a) {
            yVar = (y) f20b.get(obj);
        }
        if (yVar == null) {
            return y.f324a;
        }
        return yVar;
    }
}
