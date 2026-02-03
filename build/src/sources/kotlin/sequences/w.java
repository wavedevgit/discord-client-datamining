package kotlin.sequences;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.c1;
import kotlin.collections.x0;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlin.text.StringsKt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends t {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterable, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Sequence f35358d;

        public a(Sequence sequence) {
            this.f35358d = sequence;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return this.f35358d.iterator();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f35359d = new b();

        b() {
            super(1, Sequence.class, "iterator", "iterator()Ljava/util/Iterator;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Iterator invoke(Sequence p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return p02.iterator();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f35360d;

        /* renamed from: e  reason: collision with root package name */
        Object f35361e;

        /* renamed from: i  reason: collision with root package name */
        int f35362i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f35363o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Sequence f35364p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Function2 f35365q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Sequence sequence, Function2 function2, Continuation continuation) {
            super(2, continuation);
            this.f35364p = sequence;
            this.f35365q = function2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(this.f35364p, this.f35365q, continuation);
            cVar.f35363o = obj;
            return cVar;
        }

        /* JADX WARN: Removed duplicated region for block: B:16:0x0045  */
        /* JADX WARN: Removed duplicated region for block: B:19:0x005e  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:17:0x005b -> B:6:0x0018). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = rr.b.f()
                int r1 = r6.f35362i
                r2 = 1
                if (r1 == 0) goto L22
                if (r1 != r2) goto L1a
                java.lang.Object r1 = r6.f35361e
                java.lang.Object r3 = r6.f35360d
                java.util.Iterator r3 = (java.util.Iterator) r3
                java.lang.Object r4 = r6.f35363o
                kotlin.sequences.j r4 = (kotlin.sequences.j) r4
                kotlin.c.b(r7)
            L18:
                r7 = r1
                goto L3f
            L1a:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L22:
                kotlin.c.b(r7)
                java.lang.Object r7 = r6.f35363o
                kotlin.sequences.j r7 = (kotlin.sequences.j) r7
                kotlin.sequences.Sequence r1 = r6.f35364p
                java.util.Iterator r1 = r1.iterator()
                boolean r3 = r1.hasNext()
                if (r3 != 0) goto L38
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            L38:
                java.lang.Object r3 = r1.next()
                r4 = r7
                r7 = r3
                r3 = r1
            L3f:
                boolean r1 = r3.hasNext()
                if (r1 == 0) goto L5e
                java.lang.Object r1 = r3.next()
                kotlin.jvm.functions.Function2 r5 = r6.f35365q
                java.lang.Object r7 = r5.invoke(r7, r1)
                r6.f35363o = r4
                r6.f35360d = r3
                r6.f35361e = r1
                r6.f35362i = r2
                java.lang.Object r7 = r4.b(r7, r6)
                if (r7 != r0) goto L18
                return r0
            L5e:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.sequences.w.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(j jVar, Continuation continuation) {
            return ((c) create(jVar, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public static Sequence A(Sequence sequence, int i10) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return b0(sequence, i10, i10, true);
    }

    public static boolean B(Sequence sequence, Object obj) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        if (M(sequence, obj) >= 0) {
            return true;
        }
        return false;
    }

    public static int C(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Iterator it = sequence.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            it.next();
            i10++;
            if (i10 < 0) {
                CollectionsKt.u();
            }
        }
        return i10;
    }

    public static Sequence D(Sequence sequence, int i10) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        if (i10 >= 0) {
            if (i10 == 0) {
                return sequence;
            }
            if (sequence instanceof kotlin.sequences.c) {
                return ((kotlin.sequences.c) sequence).a(i10);
            }
            return new kotlin.sequences.b(sequence, i10);
        }
        throw new IllegalArgumentException(("Requested element count " + i10 + " is less than zero.").toString());
    }

    public static Sequence E(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        return new d(sequence, predicate);
    }

    public static Sequence F(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        return new f(sequence, true, predicate);
    }

    public static Sequence G(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        return new f(sequence, false, predicate);
    }

    public static Sequence H(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Sequence G = G(sequence, new Function1() { // from class: kotlin.sequences.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean I;
                I = w.I(obj);
                return Boolean.valueOf(I);
            }
        });
        Intrinsics.checkNotNull(G, "null cannot be cast to non-null type kotlin.sequences.Sequence<T of kotlin.sequences.SequencesKt___SequencesKt.filterNotNull>");
        return G;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean I(Object obj) {
        return obj == null;
    }

    public static Object J(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Iterator it = sequence.iterator();
        if (it.hasNext()) {
            return it.next();
        }
        throw new NoSuchElementException("Sequence is empty.");
    }

    public static Object K(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Iterator it = sequence.iterator();
        if (!it.hasNext()) {
            return null;
        }
        return it.next();
    }

    public static Sequence L(Sequence sequence, Function1 transform) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(transform, "transform");
        return new g(sequence, transform, b.f35359d);
    }

    public static final int M(Sequence sequence, Object obj) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        int i10 = 0;
        for (Object obj2 : sequence) {
            if (i10 < 0) {
                CollectionsKt.v();
            }
            if (Intrinsics.areEqual(obj, obj2)) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    public static final Appendable N(Sequence sequence, Appendable buffer, CharSequence separator, CharSequence prefix, CharSequence postfix, int i10, CharSequence truncated, Function1 function1) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        buffer.append(prefix);
        int i11 = 0;
        for (Object obj : sequence) {
            i11++;
            if (i11 > 1) {
                buffer.append(separator);
            }
            if (i10 >= 0 && i11 > i10) {
                break;
            }
            StringsKt.a(buffer, obj, function1);
        }
        if (i10 >= 0 && i11 > i10) {
            buffer.append(truncated);
        }
        buffer.append(postfix);
        return buffer;
    }

    public static final String O(Sequence sequence, CharSequence separator, CharSequence prefix, CharSequence postfix, int i10, CharSequence truncated, Function1 function1) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        return ((StringBuilder) N(sequence, new StringBuilder(), separator, prefix, postfix, i10, truncated, function1)).toString();
    }

    public static /* synthetic */ String P(Sequence sequence, CharSequence charSequence, CharSequence charSequence2, CharSequence charSequence3, int i10, CharSequence charSequence4, Function1 function1, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            charSequence = ", ";
        }
        if ((i11 & 2) != 0) {
            charSequence2 = "";
        }
        if ((i11 & 4) != 0) {
            charSequence3 = "";
        }
        if ((i11 & 8) != 0) {
            i10 = -1;
        }
        if ((i11 & 16) != 0) {
            charSequence4 = "...";
        }
        if ((i11 & 32) != 0) {
            function1 = null;
        }
        CharSequence charSequence5 = charSequence4;
        Function1 function12 = function1;
        return O(sequence, charSequence, charSequence2, charSequence3, i10, charSequence5, function12);
    }

    public static Object Q(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Iterator it = sequence.iterator();
        if (it.hasNext()) {
            Object next = it.next();
            while (it.hasNext()) {
                next = it.next();
            }
            return next;
        }
        throw new NoSuchElementException("Sequence is empty.");
    }

    public static Sequence R(Sequence sequence, Function1 transform) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(transform, "transform");
        return new y(sequence, transform);
    }

    public static Sequence S(Sequence sequence, Function1 transform) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(transform, "transform");
        return H(new y(sequence, transform));
    }

    public static Sequence T(Sequence sequence, Iterable elements) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(elements, "elements");
        return s.k(s.v(sequence, CollectionsKt.b0(elements)));
    }

    public static Sequence U(Sequence sequence, Object obj) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return s.k(s.v(sequence, s.v(obj)));
    }

    public static Sequence V(Sequence sequence, Sequence elements) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(elements, "elements");
        return s.k(s.v(sequence, elements));
    }

    public static Sequence W(Sequence sequence, Function1 predicate) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        return new x(sequence, predicate);
    }

    public static Collection X(Sequence sequence, Collection destination) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(destination, "destination");
        for (Object obj : sequence) {
            destination.add(obj);
        }
        return destination;
    }

    public static List Y(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Iterator it = sequence.iterator();
        if (!it.hasNext()) {
            return CollectionsKt.l();
        }
        Object next = it.next();
        if (!it.hasNext()) {
            return CollectionsKt.e(next);
        }
        ArrayList arrayList = new ArrayList();
        arrayList.add(next);
        while (it.hasNext()) {
            arrayList.add(it.next());
        }
        return arrayList;
    }

    public static List Z(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return (List) X(sequence, new ArrayList());
    }

    public static Set a0(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Iterator it = sequence.iterator();
        if (!it.hasNext()) {
            return x0.d();
        }
        Object next = it.next();
        if (!it.hasNext()) {
            return x0.c(next);
        }
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        linkedHashSet.add(next);
        while (it.hasNext()) {
            linkedHashSet.add(it.next());
        }
        return linkedHashSet;
    }

    public static final Sequence b0(Sequence sequence, int i10, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return c1.c(sequence, i10, i11, z10, false);
    }

    public static Sequence c0(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return d0(sequence, new Function2() { // from class: kotlin.sequences.u
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Pair e02;
                e02 = w.e0(obj, obj2);
                return e02;
            }
        });
    }

    public static final Sequence d0(Sequence sequence, Function2 transform) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        Intrinsics.checkNotNullParameter(transform, "transform");
        return l.b(new c(sequence, transform, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Pair e0(Object obj, Object obj2) {
        return lr.v.a(obj, obj2);
    }

    public static boolean y(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return sequence.iterator().hasNext();
    }

    public static Iterable z(Sequence sequence) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        return new a(sequence);
    }
}
