package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f35458a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f35459b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f35460d;

        /* renamed from: e  reason: collision with root package name */
        private int f35461e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f35462i;

        a() {
            this.f35460d = x.this.f35458a.iterator();
        }

        private final void a() {
            if (this.f35460d.hasNext()) {
                Object next = this.f35460d.next();
                if (((Boolean) x.this.f35459b.invoke(next)).booleanValue()) {
                    this.f35461e = 1;
                    this.f35462i = next;
                    return;
                }
            }
            this.f35461e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f35461e == -1) {
                a();
            }
            if (this.f35461e == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f35461e == -1) {
                a();
            }
            if (this.f35461e != 0) {
                Object obj = this.f35462i;
                this.f35462i = null;
                this.f35461e = -1;
                return obj;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public x(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        this.f35458a = sequence;
        this.f35459b = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
