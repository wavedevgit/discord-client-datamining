package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f36149a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36150b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f36151c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f36152d;

        /* renamed from: e  reason: collision with root package name */
        private int f36153e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f36154i;

        a() {
            this.f36152d = f.this.f36149a.iterator();
        }

        private final void a() {
            while (this.f36152d.hasNext()) {
                Object next = this.f36152d.next();
                if (((Boolean) f.this.f36151c.invoke(next)).booleanValue() == f.this.f36150b) {
                    this.f36154i = next;
                    this.f36153e = 1;
                    return;
                }
            }
            this.f36153e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36153e == -1) {
                a();
            }
            if (this.f36153e == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f36153e == -1) {
                a();
            }
            if (this.f36153e != 0) {
                Object obj = this.f36154i;
                this.f36154i = null;
                this.f36153e = -1;
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
        this.f36149a = sequence;
        this.f36150b = z10;
        this.f36151c = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
