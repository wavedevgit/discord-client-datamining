package jr;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Map f30456a = new HashMap(3);

    @Override // jr.q
    public Object a(o oVar) {
        return this.f30456a.get(oVar);
    }

    @Override // jr.q
    public void b(o oVar, Object obj) {
        if (obj == null) {
            this.f30456a.remove(oVar);
        } else {
            this.f30456a.put(oVar, obj);
        }
    }
}
