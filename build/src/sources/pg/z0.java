package pg;

import java.util.AbstractMap;
import java.util.Collection;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class z0 extends AbstractMap {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f45029d;

    /* renamed from: e  reason: collision with root package name */
    private transient Collection f45030e;

    abstract Set a();

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        Set set = this.f45029d;
        if (set == null) {
            Set a10 = a();
            this.f45029d = a10;
            return a10;
        }
        return set;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Collection values() {
        Collection collection = this.f45030e;
        if (collection == null) {
            y0 y0Var = new y0(this);
            this.f45030e = y0Var;
            return y0Var;
        }
        return collection;
    }
}
