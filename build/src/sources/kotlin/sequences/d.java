package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f34848a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f34849b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f34850d;

        /* renamed from: e  reason: collision with root package name */
        private int f34851e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f34852i;

        a() {
            this.f34850d = d.this.f34848a.iterator();
        }

        private final void a() {
            while (this.f34850d.hasNext()) {
                Object next = this.f34850d.next();
                if (!((Boolean) d.this.f34849b.invoke(next)).booleanValue()) {
                    this.f34852i = next;
                    this.f34851e = 1;
                    return;
                }
            }
            this.f34851e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f34851e == -1) {
                a();
            }
            if (this.f34851e == 1 || this.f34850d.hasNext()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f34851e == -1) {
                a();
            }
            if (this.f34851e == 1) {
                Object obj = this.f34852i;
                this.f34852i = null;
                this.f34851e = 0;
                return obj;
            }
            return this.f34850d.next();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public d(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        this.f34848a = sequence;
        this.f34849b = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
