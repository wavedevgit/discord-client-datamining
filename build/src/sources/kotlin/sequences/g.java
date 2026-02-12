package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f34862a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f34863b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f34864c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f34865d;

        /* renamed from: e  reason: collision with root package name */
        private Iterator f34866e;

        /* renamed from: i  reason: collision with root package name */
        private int f34867i;

        a() {
            this.f34865d = g.this.f34862a.iterator();
        }

        private final boolean a() {
            Iterator it = this.f34866e;
            if (it != null && it.hasNext()) {
                this.f34867i = 1;
                return true;
            }
            while (this.f34865d.hasNext()) {
                Iterator it2 = (Iterator) g.this.f34864c.invoke(g.this.f34863b.invoke(this.f34865d.next()));
                if (it2.hasNext()) {
                    this.f34866e = it2;
                    this.f34867i = 1;
                    return true;
                }
            }
            this.f34867i = 2;
            this.f34866e = null;
            return false;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            int i10 = this.f34867i;
            if (i10 == 1) {
                return true;
            }
            if (i10 == 2) {
                return false;
            }
            return a();
        }

        @Override // java.util.Iterator
        public Object next() {
            int i10 = this.f34867i;
            if (i10 != 2) {
                if (i10 == 0 && !a()) {
                    throw new NoSuchElementException();
                }
                this.f34867i = 0;
                Iterator it = this.f34866e;
                Intrinsics.checkNotNull(it);
                return it.next();
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public g(Sequence sequence, Function1 transformer, Function1 iterator) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(transformer, "transformer");
        Intrinsics.checkNotNullParameter(iterator, "iterator");
        this.f34862a = sequence;
        this.f34863b = transformer;
        this.f34864c = iterator;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
