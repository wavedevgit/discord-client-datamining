package kotlin.text;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlin.ranges.IntRange;
import kotlin.sequences.Sequence;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final CharSequence f34915a;

    /* renamed from: b  reason: collision with root package name */
    private final int f34916b;

    /* renamed from: c  reason: collision with root package name */
    private final int f34917c;

    /* renamed from: d  reason: collision with root package name */
    private final Function2 f34918d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f34919d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f34920e;

        /* renamed from: i  reason: collision with root package name */
        private int f34921i;

        /* renamed from: o  reason: collision with root package name */
        private IntRange f34922o;

        /* renamed from: p  reason: collision with root package name */
        private int f34923p;

        a() {
            int m10 = kotlin.ranges.d.m(b.this.f34916b, 0, b.this.f34915a.length());
            this.f34920e = m10;
            this.f34921i = m10;
        }

        /* JADX WARN: Code restructure failed: missing block: B:9:0x0020, code lost:
            if (r0 < r6.f34924q.f34917c) goto L13;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final void a() {
            /*
                r6 = this;
                int r0 = r6.f34921i
                r1 = 0
                if (r0 >= 0) goto Lb
                r6.f34919d = r1
                r0 = 0
                r6.f34922o = r0
                return
            Lb:
                kotlin.text.b r0 = kotlin.text.b.this
                int r0 = kotlin.text.b.d(r0)
                r2 = -1
                r3 = 1
                if (r0 <= 0) goto L22
                int r0 = r6.f34923p
                int r0 = r0 + r3
                r6.f34923p = r0
                kotlin.text.b r4 = kotlin.text.b.this
                int r4 = kotlin.text.b.d(r4)
                if (r0 >= r4) goto L30
            L22:
                int r0 = r6.f34921i
                kotlin.text.b r4 = kotlin.text.b.this
                java.lang.CharSequence r4 = kotlin.text.b.c(r4)
                int r4 = r4.length()
                if (r0 <= r4) goto L46
            L30:
                kotlin.ranges.IntRange r0 = new kotlin.ranges.IntRange
                int r1 = r6.f34920e
                kotlin.text.b r4 = kotlin.text.b.this
                java.lang.CharSequence r4 = kotlin.text.b.c(r4)
                int r4 = kotlin.text.StringsKt__StringsKt.c0(r4)
                r0.<init>(r1, r4)
                r6.f34922o = r0
                r6.f34921i = r2
                goto L9b
            L46:
                kotlin.text.b r0 = kotlin.text.b.this
                kotlin.jvm.functions.Function2 r0 = kotlin.text.b.b(r0)
                kotlin.text.b r4 = kotlin.text.b.this
                java.lang.CharSequence r4 = kotlin.text.b.c(r4)
                int r5 = r6.f34921i
                java.lang.Integer r5 = java.lang.Integer.valueOf(r5)
                java.lang.Object r0 = r0.invoke(r4, r5)
                kotlin.Pair r0 = (kotlin.Pair) r0
                if (r0 != 0) goto L76
                kotlin.ranges.IntRange r0 = new kotlin.ranges.IntRange
                int r1 = r6.f34920e
                kotlin.text.b r4 = kotlin.text.b.this
                java.lang.CharSequence r4 = kotlin.text.b.c(r4)
                int r4 = kotlin.text.StringsKt__StringsKt.c0(r4)
                r0.<init>(r1, r4)
                r6.f34922o = r0
                r6.f34921i = r2
                goto L9b
            L76:
                java.lang.Object r2 = r0.a()
                java.lang.Number r2 = (java.lang.Number) r2
                int r2 = r2.intValue()
                java.lang.Object r0 = r0.b()
                java.lang.Number r0 = (java.lang.Number) r0
                int r0 = r0.intValue()
                int r4 = r6.f34920e
                kotlin.ranges.IntRange r4 = kotlin.ranges.d.u(r4, r2)
                r6.f34922o = r4
                int r2 = r2 + r0
                r6.f34920e = r2
                if (r0 != 0) goto L98
                r1 = r3
            L98:
                int r2 = r2 + r1
                r6.f34921i = r2
            L9b:
                r6.f34919d = r3
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.b.a.a():void");
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public IntRange next() {
            if (this.f34919d == -1) {
                a();
            }
            if (this.f34919d != 0) {
                IntRange intRange = this.f34922o;
                Intrinsics.checkNotNull(intRange, "null cannot be cast to non-null type kotlin.ranges.IntRange");
                this.f34922o = null;
                this.f34919d = -1;
                return intRange;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f34919d == -1) {
                a();
            }
            if (this.f34919d == 1) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public b(CharSequence input, int i10, int i11, Function2 getNextMatch) {
        Intrinsics.checkNotNullParameter(input, "input");
        Intrinsics.checkNotNullParameter(getNextMatch, "getNextMatch");
        this.f34915a = input;
        this.f34916b = i10;
        this.f34917c = i11;
        this.f34918d = getNextMatch;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
