package on;

import java.util.Map;
import jr.v;
import kotlin.Result;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import nn.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements e {

    /* renamed from: a  reason: collision with root package name */
    private final i f44560a;

    /* renamed from: b  reason: collision with root package name */
    private final d f44561b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f44562c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f44563d;

        /* renamed from: e  reason: collision with root package name */
        Object f44564e;

        /* renamed from: i  reason: collision with root package name */
        Object f44565i;

        /* renamed from: o  reason: collision with root package name */
        Object f44566o;

        /* renamed from: p  reason: collision with root package name */
        Object f44567p;

        /* renamed from: q  reason: collision with root package name */
        /* synthetic */ Object f44568q;

        /* renamed from: s  reason: collision with root package name */
        int f44570s;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44568q = obj;
            this.f44570s |= Integer.MIN_VALUE;
            Object a10 = f.this.a(null, null, this);
            if (a10 == pr.b.f()) {
                return a10;
            }
            return Result.a(a10);
        }
    }

    public f(i idFrontAnalyzer, d barcodePdf417Analyzer) {
        Intrinsics.checkNotNullParameter(idFrontAnalyzer, "idFrontAnalyzer");
        Intrinsics.checkNotNullParameter(barcodePdf417Analyzer, "barcodePdf417Analyzer");
        this.f44560a = idFrontAnalyzer;
        this.f44561b = barcodePdf417Analyzer;
        this.f44562c = o0.m(v.a(barcodePdf417Analyzer, t0.c.f42070e), v.a(idFrontAnalyzer, t0.c.f42069d));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x004b  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0067  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0097  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00bb  */
    /* JADX WARN: Type inference failed for: r10v11, types: [java.lang.Throwable, T] */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:20:0x008c -> B:21:0x0091). Please submit an issue!!! */
    @Override // on.e
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(nn.j0 r10, android.graphics.Rect r11, kotlin.coroutines.Continuation r12) {
        /*
            r9 = this;
            boolean r0 = r12 instanceof on.f.a
            if (r0 == 0) goto L13
            r0 = r12
            on.f$a r0 = (on.f.a) r0
            int r1 = r0.f44570s
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44570s = r1
            goto L18
        L13:
            on.f$a r0 = new on.f$a
            r0.<init>(r12)
        L18:
            java.lang.Object r12 = r0.f44568q
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f44570s
            r3 = 1
            if (r2 == 0) goto L4b
            if (r2 != r3) goto L43
            java.lang.Object r10 = r0.f44567p
            nn.t0$c r10 = (nn.t0.c) r10
            java.lang.Object r11 = r0.f44566o
            java.util.Iterator r11 = (java.util.Iterator) r11
            java.lang.Object r2 = r0.f44565i
            kotlin.jvm.internal.Ref$ObjectRef r2 = (kotlin.jvm.internal.Ref.ObjectRef) r2
            java.lang.Object r4 = r0.f44564e
            android.graphics.Rect r4 = (android.graphics.Rect) r4
            java.lang.Object r5 = r0.f44563d
            nn.j0 r5 = (nn.j0) r5
            kotlin.c.b(r12)
            kotlin.Result r12 = (kotlin.Result) r12
            java.lang.Object r12 = r12.j()
            goto L91
        L43:
            java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
            java.lang.String r11 = "call to 'resume' before 'invoke' with coroutine"
            r10.<init>(r11)
            throw r10
        L4b:
            kotlin.c.b(r12)
            kotlin.jvm.internal.Ref$ObjectRef r12 = new kotlin.jvm.internal.Ref$ObjectRef
            r12.<init>()
            java.util.Map r2 = r9.f44562c
            java.util.Set r2 = r2.entrySet()
            java.util.Iterator r2 = r2.iterator()
            r8 = r12
            r12 = r11
            r11 = r2
            r2 = r8
        L61:
            boolean r4 = r11.hasNext()
            if (r4 == 0) goto Lbb
            java.lang.Object r4 = r11.next()
            java.util.Map$Entry r4 = (java.util.Map.Entry) r4
            java.lang.Object r5 = r4.getKey()
            on.e r5 = (on.e) r5
            java.lang.Object r4 = r4.getValue()
            nn.t0$c r4 = (nn.t0.c) r4
            r0.f44563d = r10
            r0.f44564e = r12
            r0.f44565i = r2
            r0.f44566o = r11
            r0.f44567p = r4
            r0.f44570s = r3
            java.lang.Object r5 = r5.a(r10, r12, r0)
            if (r5 != r1) goto L8c
            return r1
        L8c:
            r8 = r5
            r5 = r10
            r10 = r4
            r4 = r12
            r12 = r8
        L91:
            boolean r6 = kotlin.Result.h(r12)
            if (r6 == 0) goto Lac
            r6 = r12
            on.a r6 = (on.a) r6
            on.a$b r7 = on.a.b.f44551a
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r6, r7)
            if (r7 != 0) goto Lac
            on.a$c r11 = new on.a$c
            r11.<init>(r10, r6)
            java.lang.Object r10 = kotlin.Result.b(r11)
            return r10
        Lac:
            java.lang.Throwable r10 = kotlin.Result.e(r12)
            if (r10 == 0) goto Lb8
            T r12 = r2.element
            if (r12 != 0) goto Lb8
            r2.element = r10
        Lb8:
            r12 = r4
            r10 = r5
            goto L61
        Lbb:
            T r10 = r2.element
            java.lang.Throwable r10 = (java.lang.Throwable) r10
            if (r10 == 0) goto Lcc
            kotlin.Result$a r11 = kotlin.Result.f33071e
            java.lang.Object r10 = kotlin.c.a(r10)
            java.lang.Object r10 = kotlin.Result.b(r10)
            return r10
        Lcc:
            kotlin.Result$a r10 = kotlin.Result.f33071e
            on.a$b r10 = on.a.b.f44551a
            java.lang.Object r10 = kotlin.Result.b(r10)
            return r10
        */
        throw new UnsupportedOperationException("Method not decompiled: on.f.a(nn.j0, android.graphics.Rect, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
