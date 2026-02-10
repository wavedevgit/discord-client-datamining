package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f34895a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f34896b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f34897d;

        a() {
            this.f34897d = y.this.f34895a.iterator();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f34897d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            return y.this.f34896b.invoke(this.f34897d.next());
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public y(Sequence sequence, Function1 transformer) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(transformer, "transformer");
        this.f34895a = sequence;
        this.f34896b = transformer;
    }

    public final Sequence d(Function1 iterator) {
        Intrinsics.checkNotNullParameter(iterator, "iterator");
        return new g(this.f34895a, this.f34896b, iterator);
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
