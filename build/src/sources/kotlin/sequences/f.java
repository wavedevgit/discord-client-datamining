package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f34923a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f34924b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f34925c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f34926d;

        /* renamed from: e  reason: collision with root package name */
        private int f34927e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f34928i;

        a() {
            this.f34926d = f.this.f34923a.iterator();
        }

        private final void a() {
            while (this.f34926d.hasNext()) {
                Object next = this.f34926d.next();
                if (((Boolean) f.this.f34925c.invoke(next)).booleanValue() == f.this.f34924b) {
                    this.f34928i = next;
                    this.f34927e = 1;
                    return;
                }
            }
            this.f34927e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f34927e == -1) {
                a();
            }
            if (this.f34927e == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f34927e == -1) {
                a();
            }
            if (this.f34927e != 0) {
                Object obj = this.f34928i;
                this.f34928i = null;
                this.f34927e = -1;
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
        this.f34923a = sequence;
        this.f34924b = z10;
        this.f34925c = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
