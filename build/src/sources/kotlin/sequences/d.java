package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f36142a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f36143b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f36144d;

        /* renamed from: e  reason: collision with root package name */
        private int f36145e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f36146i;

        a() {
            this.f36144d = d.this.f36142a.iterator();
        }

        private final void a() {
            while (this.f36144d.hasNext()) {
                Object next = this.f36144d.next();
                if (!((Boolean) d.this.f36143b.invoke(next)).booleanValue()) {
                    this.f36146i = next;
                    this.f36145e = 1;
                    return;
                }
            }
            this.f36145e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36145e == -1) {
                a();
            }
            if (this.f36145e == 1 || this.f36144d.hasNext()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f36145e == -1) {
                a();
            }
            if (this.f36145e == 1) {
                Object obj = this.f36146i;
                this.f36146i = null;
                this.f36145e = 0;
                return obj;
            }
            return this.f36144d.next();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public d(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        this.f36142a = sequence;
        this.f36143b = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
