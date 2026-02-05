package gr;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Map f25202a = new HashMap(3);

    @Override // gr.q
    public void a(o oVar, Object obj) {
        if (obj == null) {
            this.f25202a.remove(oVar);
        } else {
            this.f25202a.put(oVar, obj);
        }
    }

    @Override // gr.q
    public Object b(o oVar) {
        return this.f25202a.get(oVar);
    }
}
