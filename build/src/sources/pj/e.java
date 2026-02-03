package pj;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f46035a = new HashMap();

    protected abstract Object a(Object obj);

    public Object b(Object obj) {
        synchronized (this.f46035a) {
            try {
                if (this.f46035a.containsKey(obj)) {
                    return this.f46035a.get(obj);
                }
                Object a10 = a(obj);
                this.f46035a.put(obj, a10);
                return a10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
