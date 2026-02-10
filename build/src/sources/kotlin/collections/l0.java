package kotlin.collections;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l0 implements Iterator, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private final Iterator f32036d;

    /* renamed from: e  reason: collision with root package name */
    private int f32037e;

    public l0(Iterator iterator) {
        Intrinsics.checkNotNullParameter(iterator, "iterator");
        this.f32036d = iterator;
    }

    @Override // java.util.Iterator
    /* renamed from: a */
    public final IndexedValue next() {
        int i10 = this.f32037e;
        this.f32037e = i10 + 1;
        if (i10 < 0) {
            t.v();
        }
        return new IndexedValue(i10, this.f32036d.next());
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f32036d.hasNext();
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
