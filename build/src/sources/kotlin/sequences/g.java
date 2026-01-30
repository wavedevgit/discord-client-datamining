package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f36172a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f36173b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f36174c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f36175d;

        /* renamed from: e  reason: collision with root package name */
        private Iterator f36176e;

        /* renamed from: i  reason: collision with root package name */
        private int f36177i;

        a() {
            this.f36175d = g.this.f36172a.iterator();
        }

        private final boolean a() {
            Iterator it = this.f36176e;
            if (it != null && it.hasNext()) {
                this.f36177i = 1;
                return true;
            }
            while (this.f36175d.hasNext()) {
                Iterator it2 = (Iterator) g.this.f36174c.invoke(g.this.f36173b.invoke(this.f36175d.next()));
                if (it2.hasNext()) {
                    this.f36176e = it2;
                    this.f36177i = 1;
                    return true;
                }
            }
            this.f36177i = 2;
            this.f36176e = null;
            return false;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            int i10 = this.f36177i;
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
            int i10 = this.f36177i;
            if (i10 != 2) {
                if (i10 == 0 && !a()) {
                    throw new NoSuchElementException();
                }
                this.f36177i = 0;
                Iterator it = this.f36176e;
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
        this.f36172a = sequence;
        this.f36173b = transformer;
        this.f36174c = iterator;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
