package tj;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f50663a = new HashMap();

    protected abstract Object a(Object obj);

    public Object b(Object obj) {
        synchronized (this.f50663a) {
            try {
                if (this.f50663a.containsKey(obj)) {
                    return this.f50663a.get(obj);
                }
                Object a10 = a(obj);
                this.f50663a.put(obj, a10);
                return a10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
