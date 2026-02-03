package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f35331a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35332b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f35333c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f35334d;

        /* renamed from: e  reason: collision with root package name */
        private int f35335e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f35336i;

        a() {
            this.f35334d = f.this.f35331a.iterator();
        }

        private final void a() {
            while (this.f35334d.hasNext()) {
                Object next = this.f35334d.next();
                if (((Boolean) f.this.f35333c.invoke(next)).booleanValue() == f.this.f35332b) {
                    this.f35336i = next;
                    this.f35335e = 1;
                    return;
                }
            }
            this.f35335e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f35335e == -1) {
                a();
            }
            if (this.f35335e == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f35335e == -1) {
                a();
            }
            if (this.f35335e != 0) {
                Object obj = this.f35336i;
                this.f35336i = null;
                this.f35335e = -1;
                return obj;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public f(Sequence sequence, boolean z10, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        this.f35331a = sequence;
        this.f35332b = z10;
        this.f35333c = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
