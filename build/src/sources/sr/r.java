package sr;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Map f48341a = new HashMap(3);

    @Override // sr.q
    public void a(o oVar, Object obj) {
        if (obj == null) {
            this.f48341a.remove(oVar);
        } else {
            this.f48341a.put(oVar, obj);
        }
    }

    @Override // sr.q
    public Object b(o oVar) {
        return this.f48341a.get(oVar);
    }
}
