package ni;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class c extends d implements x {
    /* JADX INFO: Access modifiers changed from: protected */
    public c(Map map) {
        super(map);
    }

    @Override // ni.d, ni.b0
    /* renamed from: A */
    public List get(Object obj) {
        return (List) super.get(obj);
    }

    @Override // ni.f, ni.b0
    public Map asMap() {
        return super.asMap();
    }

    @Override // ni.f
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override // ni.d, ni.b0
    public boolean put(Object obj, Object obj2) {
        return super.put(obj, obj2);
    }

    @Override // ni.d
    Collection x(Collection collection) {
        return Collections.unmodifiableList((List) collection);
    }

    @Override // ni.d
    Collection y(Object obj, Collection collection) {
        return z(obj, (List) collection, null);
    }
}
