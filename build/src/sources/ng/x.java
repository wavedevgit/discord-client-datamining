package ng;

import java.util.Collection;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class x extends i0 implements n1 {
    /* JADX INFO: Access modifiers changed from: protected */
    public x(Map map) {
        super(map);
    }

    @Override // ng.n1
    public final List a(Object obj) {
        return (List) super.j(obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.i0
    public final Collection h(Object obj, Collection collection) {
        return k(obj, (List) collection, null);
    }
}
