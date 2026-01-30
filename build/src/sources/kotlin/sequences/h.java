package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final Function0 f36179a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f36180b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private Object f36181d;

        /* renamed from: e  reason: collision with root package name */
        private int f36182e = -2;

        a() {
        }

        private final void a() {
            Object invoke;
            int i10;
            if (this.f36182e != -2) {
                Function1 function1 = h.this.f36180b;
                Object obj = this.f36181d;
                Intrinsics.checkNotNull(obj);
                invoke = function1.invoke(obj);
            } else {
                invoke = h.this.f36179a.invoke();
            }
            this.f36181d = invoke;
            if (invoke == null) {
                i10 = 0;
            } else {
                i10 = 1;
            }
            this.f36182e = i10;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36182e < 0) {
                a();
            }
            if (this.f36182e == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f36182e < 0) {
                a();
            }
            if (this.f36182e != 0) {
                Object obj = this.f36181d;
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type T of kotlin.sequences.GeneratorSequence");
                this.f36182e = -1;
                return obj;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public h(Function0 getInitialValue, Function1 getNextValue) {
        Intrinsics.checkNotNullParameter(getInitialValue, "getInitialValue");
        Intrinsics.checkNotNullParameter(getNextValue, "getNextValue");
        this.f36179a = getInitialValue;
        this.f36180b = getNextValue;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
