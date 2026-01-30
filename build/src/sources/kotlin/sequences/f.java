package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f36165a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36166b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f36167c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f36168d;

        /* renamed from: e  reason: collision with root package name */
        private int f36169e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f36170i;

        a() {
            this.f36168d = f.this.f36165a.iterator();
        }

        private final void a() {
            while (this.f36168d.hasNext()) {
                Object next = this.f36168d.next();
                if (((Boolean) f.this.f36167c.invoke(next)).booleanValue() == f.this.f36166b) {
                    this.f36170i = next;
                    this.f36169e = 1;
                    return;
                }
            }
            this.f36169e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36169e == -1) {
                a();
            }
            if (this.f36169e == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f36169e == -1) {
                a();
            }
            if (this.f36169e != 0) {
                Object obj = this.f36170i;
                this.f36170i = null;
                this.f36169e = -1;
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
        this.f36165a = sequence;
        this.f36166b = z10;
        this.f36167c = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
