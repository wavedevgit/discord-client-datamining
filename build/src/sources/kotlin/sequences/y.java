package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f36206a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f36207b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f36208d;

        a() {
            this.f36208d = y.this.f36206a.iterator();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f36208d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            return y.this.f36207b.invoke(this.f36208d.next());
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public y(Sequence sequence, Function1 transformer) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(transformer, "transformer");
        this.f36206a = sequence;
        this.f36207b = transformer;
    }

    public final Sequence d(Function1 iterator) {
        Intrinsics.checkNotNullParameter(iterator, "iterator");
        return new g(this.f36206a, this.f36207b, iterator);
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
