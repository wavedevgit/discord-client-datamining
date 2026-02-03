package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f35976a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f35977b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f35978d;

        /* renamed from: e  reason: collision with root package name */
        private int f35979e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f35980i;

        a() {
            this.f35978d = x.this.f35976a.iterator();
        }

        private final void a() {
            if (this.f35978d.hasNext()) {
                Object next = this.f35978d.next();
                if (((Boolean) x.this.f35977b.invoke(next)).booleanValue()) {
                    this.f35979e = 1;
                    this.f35980i = next;
                    return;
                }
            }
            this.f35979e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f35979e == -1) {
                a();
            }
            if (this.f35979e == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f35979e == -1) {
                a();
            }
            if (this.f35979e != 0) {
                Object obj = this.f35980i;
                this.f35980i = null;
                this.f35979e = -1;
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
        this.f35976a = sequence;
        this.f35977b = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
