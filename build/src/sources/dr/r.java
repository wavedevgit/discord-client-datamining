package dr;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Map f20878a = new HashMap(3);

    @Override // dr.q
    public void a(o oVar, Object obj) {
        if (obj == null) {
            this.f20878a.remove(oVar);
        } else {
            this.f20878a.put(oVar, obj);
        }
    }

    @Override // dr.q
    public Object b(o oVar) {
        return this.f20878a.get(oVar);
    }
}
