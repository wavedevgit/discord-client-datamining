package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Sequence f36158a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f36159b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f36160d;

        /* renamed from: e  reason: collision with root package name */
        private int f36161e = -1;

        /* renamed from: i  reason: collision with root package name */
        private Object f36162i;

        a() {
            this.f36160d = d.this.f36158a.iterator();
        }

        private final void a() {
            while (this.f36160d.hasNext()) {
                Object next = this.f36160d.next();
                if (!((Boolean) d.this.f36159b.invoke(next)).booleanValue()) {
                    this.f36162i = next;
                    this.f36161e = 1;
                    return;
                }
            }
            this.f36161e = 0;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36161e == -1) {
                a();
            }
            if (this.f36161e == 1 || this.f36160d.hasNext()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f36161e == -1) {
                a();
            }
            if (this.f36161e == 1) {
                Object obj = this.f36162i;
                this.f36162i = null;
                this.f36161e = 0;
                return obj;
            }
            return this.f36160d.next();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public d(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "sequence");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        this.f36158a = sequence;
        this.f36159b = predicate;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
