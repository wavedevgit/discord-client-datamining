package pj;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f46003a = new HashMap();

    protected abstract Object a(Object obj);

    public Object b(Object obj) {
        synchronized (this.f46003a) {
            try {
                if (this.f46003a.containsKey(obj)) {
                    return this.f46003a.get(obj);
                }
                Object a10 = a(obj);
                this.f46003a.put(obj, a10);
                return a10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
