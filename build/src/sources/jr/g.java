package jr;

import java.util.Collection;
import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMutableCollection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends kotlin.collections.e implements Collection, KMutableCollection {

    /* renamed from: d  reason: collision with root package name */
    private final d f32467d;

    public g(d backing) {
        Intrinsics.checkNotNullParameter(backing, "backing");
        this.f32467d = backing;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean add(Object obj) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        throw new UnsupportedOperationException();
    }

    @Override // kotlin.collections.e
    public int b() {
        return this.f32467d.size();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public void clear() {
        this.f32467d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean contains(Object obj) {
        return this.f32467d.containsValue(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean isEmpty() {
        return this.f32467d.isEmpty();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return this.f32467d.O();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean remove(Object obj) {
        return this.f32467d.M(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean removeAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        this.f32467d.l();
        return super.removeAll(elements);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        this.f32467d.l();
        return super.retainAll(elements);
    }
}
