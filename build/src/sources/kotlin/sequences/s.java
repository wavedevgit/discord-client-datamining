package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s extends m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Sequence {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Iterator f34949a;

        public a(Iterator it) {
            this.f34949a = it;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return this.f34949a;
        }
    }

    public static Sequence h(Iterator it) {
        Intrinsics.checkNotNullParameter(it, "<this>");
        return i(new a(it));
    }

    public static Sequence i(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        if (sequence instanceof kotlin.sequences.a) {
            return sequence;
        }
        return new kotlin.sequences.a(sequence);
    }

    public static Sequence j() {
        return e.f34922a;
    }

    public static final Sequence k(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return l(sequence, new Function1() { // from class: kotlin.sequences.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Iterator m10;
                m10 = s.m((Sequence) obj);
                return m10;
            }
        });
    }

    private static final Sequence l(Sequence sequence, Function1 function1) {
        if (sequence instanceof y) {
            return ((y) sequence).d(function1);
        }
        return new g(sequence, new Function1() { // from class: kotlin.sequences.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Object o10;
                o10 = s.o(obj);
                return o10;
            }
        }, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterator m(Sequence it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.iterator();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterator n(Iterable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.iterator();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object o(Object obj) {
        return obj;
    }

    public static Sequence p(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return l(sequence, new Function1() { // from class: kotlin.sequences.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Iterator n10;
                n10 = s.n((Iterable) obj);
                return n10;
            }
        });
    }

    public static Sequence q(final Object obj, Function1 nextFunction) {
        Intrinsics.checkNotNullParameter(nextFunction, "nextFunction");
        if (obj == null) {
            return e.f34922a;
        }
        return new h(new Function0() { // from class: kotlin.sequences.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Object u10;
                u10 = s.u(obj);
                return u10;
            }
        }, nextFunction);
    }

    public static Sequence r(final Function0 nextFunction) {
        Intrinsics.checkNotNullParameter(nextFunction, "nextFunction");
        return i(new h(nextFunction, new Function1() { // from class: kotlin.sequences.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Object t10;
                t10 = s.t(Function0.this, obj);
                return t10;
            }
        }));
    }

    public static Sequence s(Function0 seedFunction, Function1 nextFunction) {
        Intrinsics.checkNotNullParameter(seedFunction, "seedFunction");
        Intrinsics.checkNotNullParameter(nextFunction, "nextFunction");
        return new h(seedFunction, nextFunction);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object t(Function0 function0, Object it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return function0.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object u(Object obj) {
        return obj;
    }

    public static Sequence v(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return kotlin.collections.i.I(elements);
    }
}
