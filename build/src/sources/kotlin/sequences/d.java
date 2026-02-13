package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f35416a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f35417b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f35418d;

        /* renamed from: e  reason: collision with root package name */
        private int f35419e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f35420i;

        a() {
            this.f35418d = d.this.f35416a.iterator();
        }

        private final void a() {
            while (this.f35418d.hasNext()) {
                Object next = this.f35418d.next();
                if (!((Boolean) d.this.f35417b.invoke(next)).booleanValue()) {
                    this.f35420i = next;
                    this.f35419e = 1;
                    return;
                }
            }
            this.f35419e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f35419e == -1) {
                a();
            }
            if (this.f35419e == 1 || this.f35418d.hasNext()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f35419e == -1) {
                a();
            }
            if (this.f35419e == 1) {
                Object obj = this.f35420i;
                this.f35420i = null;
                this.f35419e = 0;
                return obj;
            }
            return this.f35418d.next();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public d(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        this.f35416a = sequence;
        this.f35417b = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
