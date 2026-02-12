package rg;

import java.util.AbstractMap;
import java.util.Collection;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class c1 extends AbstractMap {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f46600d;

    /* renamed from: e  reason: collision with root package name */
    private transient Collection f46601e;

    abstract Set a();

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        Set set = this.f46600d;
        if (set == null) {
            Set a10 = a();
            this.f46600d = a10;
            return a10;
        }
        return set;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Collection values() {
        Collection collection = this.f46601e;
        if (collection == null) {
            a1 a1Var = new a1(this);
            this.f46601e = a1Var;
            return a1Var;
        }
        return collection;
    }
}
