package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f35464a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f35465b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f35466d;

        a() {
            this.f35466d = y.this.f35464a.iterator();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f35466d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            return y.this.f35465b.invoke(this.f35466d.next());
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public y(Sequence sequence, Function1 transformer) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(transformer, "transformer");
        this.f35464a = sequence;
        this.f35465b = transformer;
    }

    public final Sequence d(Function1 iterator) {
        Intrinsics.checkNotNullParameter(iterator, "iterator");
        return new g(this.f35464a, this.f35465b, iterator);
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
