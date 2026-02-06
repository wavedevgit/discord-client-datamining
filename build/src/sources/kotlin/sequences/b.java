package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Sequence, c {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f34864a;

    /* renamed from: b  reason: collision with root package name */
    private final int f34865b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f34866d;

        /* renamed from: e  reason: collision with root package name */
        private int f34867e;

        a(b bVar) {
            this.f34866d = bVar.f34864a.iterator();
            this.f34867e = bVar.f34865b;
        }

        private final void a() {
            while (this.f34867e > 0 && this.f34866d.hasNext()) {
                this.f34866d.next();
                this.f34867e--;
            }
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            a();
            return this.f34866d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            return this.f34866d.next();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public b(Sequence sequence, int i10) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        this.f34864a = sequence;
        this.f34865b = i10;
        if (i10 >= 0) {
            return;
        }
        throw new IllegalArgumentException(("count must be non-negative, but was " + i10 + '.').toString());
    }

    @Override // kotlin.sequences.c
    public Sequence a(int i10) {
        int i11 = this.f34865b + i10;
        if (i11 < 0) {
            return new b(this, i10);
        }
        return new b(this.f34864a, i11);
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a(this);
    }
}
