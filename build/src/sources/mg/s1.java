package mg;

import java.util.AbstractMap;
import java.util.Collection;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class s1 extends AbstractMap {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f38079d;

    /* renamed from: e  reason: collision with root package name */
    private transient Collection f38080e;

    abstract Set a();

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        Set set = this.f38079d;
        if (set == null) {
            Set a10 = a();
            this.f38079d = a10;
            return a10;
        }
        return set;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Collection values() {
        Collection collection = this.f38080e;
        if (collection == null) {
            r1 r1Var = new r1(this);
            this.f38080e = r1Var;
            return r1Var;
        }
        return collection;
    }
}
