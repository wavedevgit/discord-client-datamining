package to;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements co.a {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f50173a;

    /* renamed from: b  reason: collision with root package name */
    private final to.a f50174b;

    /* renamed from: c  reason: collision with root package name */
    private final po.f f50175c;

    /* renamed from: d  reason: collision with root package name */
    private final w f50176d;

    /* renamed from: e  reason: collision with root package name */
    private com.withpersona.sdk2.inquiry.internal.fallbackmode.i f50177e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f50178d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50179e;

        /* renamed from: o  reason: collision with root package name */
        int f50181o;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50179e = obj;
            this.f50181o |= Integer.MIN_VALUE;
            return i.this.c(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f50182d;

        /* renamed from: e  reason: collision with root package name */
        Object f50183e;

        /* renamed from: i  reason: collision with root package name */
        Object f50184i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f50185o;

        /* renamed from: q  reason: collision with root package name */
        int f50187q;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50185o = obj;
            this.f50187q |= Integer.MIN_VALUE;
            return i.this.a(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f50188d;

        /* renamed from: e  reason: collision with root package name */
        Object f50189e;

        /* renamed from: i  reason: collision with root package name */
        Object f50190i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f50191o;

        /* renamed from: q  reason: collision with root package name */
        int f50193q;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50191o = obj;
            this.f50193q |= Integer.MIN_VALUE;
            return i.this.f(null, null, this);
        }
    }

    public i(FallbackMode fallbackMode, to.a apiController, po.f environment, w moshi) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(apiController, "apiController");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        this.f50173a = fallbackMode;
        this.f50174b = apiController;
        this.f50175c = environment;
        this.f50176d = moshi;
    }

    /* JADX WARN: Code restructure failed: missing block: B:22:0x007f, code lost:
        if (c(r8, r2) == r3) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:56:0x0131, code lost:
        if (r1 == r3) goto L33;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0029  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0050  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x008c  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0094  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x009c  */
    @Override // co.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(java.lang.String r23, java.lang.Object r24, kotlin.coroutines.Continuation r25) {
        /*
            Method dump skipped, instructions count: 327
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: to.i.a(java.lang.String, java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // co.a
    public boolean b() {
        if (e() == FallbackMode.ALWAYS) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0052  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x005d  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006b A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object c(vo.d r8, kotlin.coroutines.Continuation r9) {
        /*
            r7 = this;
            boolean r0 = r9 instanceof to.i.a
            if (r0 == 0) goto L13
            r0 = r9
            to.i$a r0 = (to.i.a) r0
            int r1 = r0.f50181o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f50181o = r1
            goto L18
        L13:
            to.i$a r0 = new to.i$a
            r0.<init>(r9)
        L18:
            java.lang.Object r9 = r0.f50179e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f50181o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r8 = r0.f50178d
            to.i r8 = (to.i) r8
            kotlin.c.b(r9)
            kotlin.Result r9 = (kotlin.Result) r9
            java.lang.Object r9 = r9.j()
            goto L4c
        L33:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r9)
            throw r8
        L3b:
            kotlin.c.b(r9)
            to.a r9 = r7.f50174b
            r0.f50178d = r7
            r0.f50181o = r3
            java.lang.Object r9 = r9.c(r8, r0)
            if (r9 != r1) goto L4b
            return r1
        L4b:
            r8 = r7
        L4c:
            boolean r0 = kotlin.Result.h(r9)
            if (r0 == 0) goto L57
            r0 = r9
            com.withpersona.sdk2.inquiry.internal.fallbackmode.i r0 = (com.withpersona.sdk2.inquiry.internal.fallbackmode.i) r0
            r8.f50177e = r0
        L57:
            java.lang.Throwable r8 = kotlin.Result.e(r9)
            if (r8 == 0) goto L6b
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r0 = new com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo
            r5 = 8
            r6 = 0
            r1 = 0
            java.lang.String r2 = "Failed to create fallback session."
            r3 = 0
            r4 = 0
            r0.<init>(r1, r2, r3, r4, r5, r6)
            return r0
        L6b:
            r8 = 0
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: to.i.c(vo.d, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final com.withpersona.sdk2.inquiry.internal.fallbackmode.i d() {
        return this.f50177e;
    }

    public FallbackMode e() {
        return this.f50173a;
    }

    /* JADX WARN: Code restructure failed: missing block: B:24:0x00ad, code lost:
        if (c(r9, r3) == r4) goto L21;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x002c  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x004b  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x00b7  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00e6 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:34:0x00e7 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object f(java.lang.String r24, java.lang.Object r25, kotlin.coroutines.Continuation r26) {
        /*
            Method dump skipped, instructions count: 232
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: to.i.f(java.lang.String, java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
