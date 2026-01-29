package pg;

import java.util.Collection;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class b extends m implements r0 {
    /* JADX INFO: Access modifiers changed from: protected */
    public b(Map map) {
        super(map);
    }

    @Override // pg.r0
    public final List a(Object obj) {
        return (List) super.j(obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.m
    public final Collection h(Object obj, Collection collection) {
        return k(obj, (List) collection, null);
    }
}
