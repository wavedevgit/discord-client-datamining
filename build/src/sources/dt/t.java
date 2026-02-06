package dt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t implements o {

    /* renamed from: a  reason: collision with root package name */
    private final dt.a f21179a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21180b;

    /* renamed from: c  reason: collision with root package name */
    private final a f21181c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return tr.a.d((String) ((Pair) obj).c(), (String) ((Pair) obj2).c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ CharSequence f21185e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f21186i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f21187o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(CharSequence charSequence, int i10, Ref.IntRef intRef) {
            super(0);
            this.f21185e = charSequence;
            this.f21186i = i10;
            this.f21187o = intRef;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Expected " + t.this.f21180b + " but got " + this.f21185e.subSequence(this.f21186i, this.f21187o.element).toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Comparable f21188d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(Comparable comparable) {
            super(1);
            this.f21188d = comparable;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Integer invoke(Object obj) {
            return Integer.valueOf(tr.a.d((String) ((Pair) obj).c(), this.f21188d));
        }
    }

    public t(Collection strings, dt.a setter, String whatThisExpects) {
        Intrinsics.checkNotNullParameter(strings, "strings");
        Intrinsics.checkNotNullParameter(setter, "setter");
        Intrinsics.checkNotNullParameter(whatThisExpects, "whatThisExpects");
        this.f21179a = setter;
        this.f21180b = whatThisExpects;
        this.f21181c = new a(null, false, 3, null);
        Iterator it = strings.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            if (str.length() > 0) {
                a aVar = this.f21181c;
                int length = str.length();
                for (int i10 = 0; i10 < length; i10++) {
                    char charAt = str.charAt(i10);
                    List a10 = aVar.a();
                    int i11 = CollectionsKt.i(a10, 0, a10.size(), new d(String.valueOf(charAt)));
                    if (i11 < 0) {
                        a aVar2 = new a(null, false, 3, null);
                        aVar.a().add((-i11) - 1, qr.v.a(String.valueOf(charAt), aVar2));
                        aVar = aVar2;
                    } else {
                        aVar = (a) ((Pair) aVar.a().get(i11)).d();
                    }
                }
                if (!aVar.b()) {
                    aVar.c(true);
                } else {
                    throw new IllegalArgumentException(("The string '" + str + "' was passed several times").toString());
                }
            } else {
                throw new IllegalArgumentException(("Found an empty string in " + this.f21180b).toString());
            }
        }
        b(this.f21181c);
    }

    private static final void b(a aVar) {
        for (Pair pair : aVar.a()) {
            b((a) pair.b());
        }
        ArrayList arrayList = new ArrayList();
        for (Pair pair2 : aVar.a()) {
            String str = (String) pair2.a();
            a aVar2 = (a) pair2.b();
            if (!aVar2.b() && aVar2.a().size() == 1) {
                Pair pair3 = (Pair) CollectionsKt.Q0(aVar2.a());
                arrayList.add(qr.v.a(str + ((String) pair3.a()), (a) pair3.b()));
            } else {
                arrayList.add(qr.v.a(str, aVar2));
            }
        }
        aVar.a().clear();
        aVar.a().addAll(CollectionsKt.W0(arrayList, new b()));
    }

    /* JADX WARN: Code restructure failed: missing block: B:13:0x0050, code lost:
        r1.element += r6.length();
        r0 = r3;
        r13 = r5;
     */
    @Override // dt.o
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(java.lang.Object r12, java.lang.CharSequence r13, int r14) {
        /*
            r11 = this;
            java.lang.String r0 = "input"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r13, r0)
            dt.t$a r0 = r11.f21181c
            kotlin.jvm.internal.Ref$IntRef r1 = new kotlin.jvm.internal.Ref$IntRef
            r1.<init>()
            r1.element = r14
            r2 = 0
        Lf:
            int r3 = r1.element
            int r4 = r13.length()
            if (r3 > r4) goto L5e
            boolean r3 = r0.b()
            if (r3 == 0) goto L23
            int r2 = r1.element
            java.lang.Integer r2 = java.lang.Integer.valueOf(r2)
        L23:
            java.util.List r0 = r0.a()
            java.util.Iterator r0 = r0.iterator()
        L2b:
            boolean r3 = r0.hasNext()
            if (r3 == 0) goto L5e
            java.lang.Object r3 = r0.next()
            kotlin.Pair r3 = (kotlin.Pair) r3
            java.lang.Object r4 = r3.a()
            r6 = r4
            java.lang.String r6 = (java.lang.String) r6
            java.lang.Object r3 = r3.b()
            dt.t$a r3 = (dt.t.a) r3
            int r7 = r1.element
            r9 = 4
            r10 = 0
            r8 = 0
            r5 = r13
            boolean r13 = kotlin.text.StringsKt.Q0(r5, r6, r7, r8, r9, r10)
            if (r13 == 0) goto L5c
            int r13 = r1.element
            int r0 = r6.length()
            int r13 = r13 + r0
            r1.element = r13
            r0 = r3
            r13 = r5
            goto Lf
        L5c:
            r13 = r5
            goto L2b
        L5e:
            r5 = r13
            if (r2 == 0) goto L78
            dt.a r13 = r11.f21179a
            int r0 = r2.intValue()
            java.lang.CharSequence r0 = r5.subSequence(r14, r0)
            java.lang.String r0 = r0.toString()
            int r1 = r2.intValue()
            java.lang.Object r12 = dt.p.b(r13, r12, r0, r14, r1)
            return r12
        L78:
            dt.k$a r12 = dt.k.f21157a
            dt.t$c r13 = new dt.t$c
            r13.<init>(r5, r14, r1)
            java.lang.Object r12 = r12.a(r14, r13)
            return r12
        */
        throw new UnsupportedOperationException("Method not decompiled: dt.t.a(java.lang.Object, java.lang.CharSequence, int):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f21182a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f21183b;

        public a(List children, boolean z10) {
            Intrinsics.checkNotNullParameter(children, "children");
            this.f21182a = children;
            this.f21183b = z10;
        }

        public final List a() {
            return this.f21182a;
        }

        public final boolean b() {
            return this.f21183b;
        }

        public final void c(boolean z10) {
            this.f21183b = z10;
        }

        public /* synthetic */ a(List list, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new ArrayList() : list, (i10 & 2) != 0 ? false : z10);
        }
    }
}
