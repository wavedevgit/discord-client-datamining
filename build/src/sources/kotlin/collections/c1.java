package kotlin.collections;

import java.util.Iterator;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c1 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f33317d;

        /* renamed from: e  reason: collision with root package name */
        Object f33318e;

        /* renamed from: i  reason: collision with root package name */
        int f33319i;

        /* renamed from: o  reason: collision with root package name */
        int f33320o;

        /* renamed from: p  reason: collision with root package name */
        private /* synthetic */ Object f33321p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ int f33322q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ int f33323r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ Iterator f33324s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ boolean f33325t;

        /* renamed from: u  reason: collision with root package name */
        final /* synthetic */ boolean f33326u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(int i10, int i11, Iterator it, boolean z10, boolean z11, Continuation continuation) {
            super(2, continuation);
            this.f33322q = i10;
            this.f33323r = i11;
            this.f33324s = it;
            this.f33325t = z10;
            this.f33326u = z11;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f33322q, this.f33323r, this.f33324s, this.f33325t, this.f33326u, continuation);
            aVar.f33321p = obj;
            return aVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:27:0x0094, code lost:
            r10.f33321p = r4;
            r10.f33317d = r3;
            r10.f33318e = r2;
            r10.f33319i = r1;
            r10.f33320o = 1;
         */
        /* JADX WARN: Code restructure failed: missing block: B:28:0x00a2, code lost:
            if (r4.b(r3, r10) != r0) goto L55;
         */
        /* JADX WARN: Code restructure failed: missing block: B:42:0x00d6, code lost:
            if (r4.b(r3, r10) == r0) goto L20;
         */
        /* JADX WARN: Code restructure failed: missing block: B:57:0x0119, code lost:
            if (r6.b(r11, r10) == r0) goto L20;
         */
        /* JADX WARN: Code restructure failed: missing block: B:70:0x0147, code lost:
            if (r4.b(r11, r10) == r0) goto L20;
         */
        /* JADX WARN: Code restructure failed: missing block: B:76:0x0162, code lost:
            if (r4.b(r1, r10) == r0) goto L20;
         */
        /* JADX WARN: Removed duplicated region for block: B:22:0x0080  */
        /* JADX WARN: Removed duplicated region for block: B:47:0x00e8  */
        /* JADX WARN: Removed duplicated region for block: B:62:0x0126  */
        /* JADX WARN: Removed duplicated region for block: B:65:0x0130  */
        /* JADX WARN: Removed duplicated region for block: B:73:0x0150  */
        /* JADX WARN: Removed duplicated region for block: B:88:0x00b8 A[SYNTHETIC] */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:28:0x00a2 -> B:16:0x0055). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:57:0x0119 -> B:59:0x011c). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:70:0x0147 -> B:72:0x014a). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r11) {
            /*
                Method dump skipped, instructions count: 360
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.collections.c1.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((a) create(jVar, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Sequence {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Sequence f33327a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f33328b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f33329c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ boolean f33330d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ boolean f33331e;

        public b(Sequence sequence, int i10, int i11, boolean z10, boolean z11) {
            this.f33327a = sequence;
            this.f33328b = i10;
            this.f33329c = i11;
            this.f33330d = z10;
            this.f33331e = z11;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return c1.b(this.f33327a.iterator(), this.f33328b, this.f33329c, this.f33330d, this.f33331e);
        }
    }

    public static final void a(int i10, int i11) {
        String str;
        if (i10 > 0 && i11 > 0) {
            return;
        }
        if (i10 != i11) {
            str = "Both size " + i10 + " and step " + i11 + " must be greater than zero.";
        } else {
            str = "size " + i10 + " must be greater than zero.";
        }
        throw new IllegalArgumentException(str.toString());
    }

    public static final Iterator b(Iterator iterator, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(iterator, "iterator");
        if (!iterator.hasNext()) {
            return e0.f33339d;
        }
        return kotlin.sequences.k.a(new a(i10, i11, iterator, z11, z10, null));
    }

    public static final Sequence c(Sequence sequence, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        a(i10, i11);
        return new b(sequence, i10, i11, z10, z11);
    }
}
