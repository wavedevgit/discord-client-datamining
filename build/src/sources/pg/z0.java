package pg;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class z0 extends m1 {

    /* renamed from: d  reason: collision with root package name */
    final Map f45929d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z0(Map map) {
        map.getClass();
        this.f45929d = map;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        return this.f45929d.containsKey(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean isEmpty() {
        return this.f45929d.isEmpty();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public abstract Iterator iterator();

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f45929d.size();
    }
}
