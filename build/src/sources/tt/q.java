package tt;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class q extends HashMap {
    private static final long serialVersionUID = 1245025551222311435L;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Map map) {
        super(map);
    }

    @Override // java.util.HashMap, java.util.AbstractMap, java.util.Map
    /* renamed from: a */
    public Object put(rt.p pVar, Object obj) {
        Object put = super.put(pVar, obj);
        if (pVar != null && put != null && !put.equals(obj)) {
            throw new a(pVar);
        }
        return put;
    }
}
