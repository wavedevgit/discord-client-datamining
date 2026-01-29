package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f36156a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f36157b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f36158c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f36159d;

        /* renamed from: e  reason: collision with root package name */
        private Iterator f36160e;

        /* renamed from: i  reason: collision with root package name */
        private int f36161i;

        a() {
            this.f36159d = g.this.f36156a.iterator();
        }

        private final boolean a() {
            Iterator it = this.f36160e;
            if (it != null && it.hasNext()) {
                this.f36161i = 1;
                return true;
            }
            while (this.f36159d.hasNext()) {
                Iterator it2 = (Iterator) g.this.f36158c.invoke(g.this.f36157b.invoke(this.f36159d.next()));
                if (it2.hasNext()) {
                    this.f36160e = it2;
                    this.f36161i = 1;
                    return true;
                }
            }
            this.f36161i = 2;
            this.f36160e = null;
            return false;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            int i10 = this.f36161i;
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
            int i10 = this.f36161i;
            if (i10 != 2) {
                if (i10 == 0 && !a()) {
                    throw new NoSuchElementException();
                }
                this.f36161i = 0;
                Iterator it = this.f36160e;
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
        this.f36156a = sequence;
        this.f36157b = transformer;
        this.f36158c = iterator;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
