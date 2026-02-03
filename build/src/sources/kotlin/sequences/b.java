package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Sequence, c {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f35320a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35321b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f35322d;

        /* renamed from: e  reason: collision with root package name */
        private int f35323e;

        a(b bVar) {
            this.f35322d = bVar.f35320a.iterator();
            this.f35323e = bVar.f35321b;
        }

        private final void a() {
            while (this.f35323e > 0 && this.f35322d.hasNext()) {
                this.f35322d.next();
                this.f35323e--;
            }
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            a();
            return this.f35322d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            return this.f35322d.next();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public b(Sequence sequence, int i10) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        this.f35320a = sequence;
        this.f35321b = i10;
        if (i10 >= 0) {
            return;
        }
        throw new IllegalArgumentException(("count must be non-negative, but was " + i10 + '.').toString());
    }

    @Override // kotlin.sequences.c
    public Sequence a(int i10) {
        int i11 = this.f35321b + i10;
        if (i11 < 0) {
            return new b(this, i10);
        }
        return new b(this.f35320a, i11);
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a(this);
    }
}
