package so;

import com.withpersona.sdk2.inquiry.internal.network.ErrorRequest;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final yo.r f50076a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.w f50077b;

    /* renamed from: c  reason: collision with root package name */
    private final bp.b f50078c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineScope f50079d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50080d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f50082i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ InternalErrorInfo f50083o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str, InternalErrorInfo internalErrorInfo, Continuation continuation) {
            super(2, continuation);
            this.f50082i = str;
            this.f50083o = internalErrorInfo;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f50082i, this.f50083o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f50080d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                yo.r rVar = g.this.f50076a;
                String str = this.f50082i;
                ErrorRequest errorRequest = new ErrorRequest(com.withpersona.sdk2.inquiry.internal.network.c.a(this.f50083o), g.this.f50077b.c(InternalErrorInfo.class).toJsonValue(this.f50083o));
                this.f50080d = 1;
                if (rVar.c(str, errorRequest, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f50084d;

        /* renamed from: e  reason: collision with root package name */
        Object f50085e;

        /* renamed from: i  reason: collision with root package name */
        Object f50086i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f50087o;

        /* renamed from: q  reason: collision with root package name */
        int f50089q;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50087o = obj;
            this.f50089q |= Integer.MIN_VALUE;
            return g.this.e(null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50090d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f50092i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(String str, Continuation continuation) {
            super(2, continuation);
            this.f50092i = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f50092i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:15:0x0048, code lost:
            if (so.g.g(r5, r6, "com.withpersona.sdk2.inquiry.nfc", r8, null, r10, 8, null) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:18:0x005d, code lost:
            if (so.g.g(r5, r6, com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.SUBSYSTEM, r8, null, r10, 8, null) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0072, code lost:
            if (so.g.g(r5, r6, "com.withpersona.sdk2.inquiry.integrity", r8, null, r10, 8, null) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0081, code lost:
            if (r14.e(r13) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:25:0x0083, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r14) {
            /*
                r13 = this;
                java.lang.Object r0 = ur.b.f()
                int r1 = r13.f50090d
                r2 = 4
                r3 = 3
                r4 = 2
                r5 = 1
                if (r1 == 0) goto L31
                if (r1 == r5) goto L2c
                if (r1 == r4) goto L27
                if (r1 == r3) goto L22
                if (r1 != r2) goto L1a
                kotlin.c.b(r14)
                r10 = r13
                goto L84
            L1a:
                java.lang.IllegalStateException r14 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r14.<init>(r0)
                throw r14
            L22:
                kotlin.c.b(r14)
                r10 = r13
                goto L75
            L27:
                kotlin.c.b(r14)
                r10 = r13
                goto L60
            L2c:
                kotlin.c.b(r14)
                r10 = r13
                goto L4b
            L31:
                kotlin.c.b(r14)
                r14 = r5
                so.g r5 = so.g.this
                java.lang.String r6 = r13.f50092i
                com.withpersona.sdk2.inquiry.internal.network.ErrorRequest$a r8 = com.withpersona.sdk2.inquiry.internal.network.ErrorRequest.a.Nfc
                r13.f50090d = r14
                java.lang.String r7 = "com.withpersona.sdk2.inquiry.nfc"
                r9 = 0
                r11 = 8
                r12 = 0
                r10 = r13
                java.lang.Object r14 = so.g.g(r5, r6, r7, r8, r9, r10, r11, r12)
                if (r14 != r0) goto L4b
                goto L83
            L4b:
                so.g r5 = so.g.this
                java.lang.String r6 = r10.f50092i
                com.withpersona.sdk2.inquiry.internal.network.ErrorRequest$a r8 = com.withpersona.sdk2.inquiry.internal.network.ErrorRequest.a.Network
                r10.f50090d = r4
                java.lang.String r7 = "com.withpersona.sdk2.inquiry.network"
                r9 = 0
                r11 = 8
                r12 = 0
                java.lang.Object r14 = so.g.g(r5, r6, r7, r8, r9, r10, r11, r12)
                if (r14 != r0) goto L60
                goto L83
            L60:
                so.g r5 = so.g.this
                java.lang.String r6 = r10.f50092i
                com.withpersona.sdk2.inquiry.internal.network.ErrorRequest$a r8 = com.withpersona.sdk2.inquiry.internal.network.ErrorRequest.a.Other
                r10.f50090d = r3
                java.lang.String r7 = "com.withpersona.sdk2.inquiry.integrity"
                r9 = 0
                r11 = 8
                r12 = 0
                java.lang.Object r14 = so.g.g(r5, r6, r7, r8, r9, r10, r11, r12)
                if (r14 != r0) goto L75
                goto L83
            L75:
                so.g r14 = so.g.this
                bp.b r14 = so.g.b(r14)
                r10.f50090d = r2
                java.lang.Object r14 = r14.e(r13)
                if (r14 != r0) goto L84
            L83:
                return r0
            L84:
                kotlin.Unit r14 = kotlin.Unit.f31988a
                return r14
            */
            throw new UnsupportedOperationException("Method not decompiled: so.g.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50093d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f50095i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, Continuation continuation) {
            super(2, continuation);
            this.f50095i = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f50095i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f50093d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                yo.r rVar = g.this.f50076a;
                String str = this.f50095i;
                this.f50093d = 1;
                if (rVar.i(str, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public g(yo.r inquiryService, com.squareup.moshi.w moshi, bp.b logger) {
        Intrinsics.checkNotNullParameter(inquiryService, "inquiryService");
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        Intrinsics.checkNotNullParameter(logger, "logger");
        this.f50076a = inquiryService;
        this.f50077b = moshi;
        this.f50078c = logger;
        this.f50079d = kotlinx.coroutines.i.a(ms.m0.a().V0(ms.j1.b(null, 1, null)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x008f, code lost:
        if (r9.c(r6, r2, r0) == r1) goto L27;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0045  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x005e  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0061  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object e(java.lang.String r6, java.lang.String r7, com.withpersona.sdk2.inquiry.internal.network.ErrorRequest.a r8, bp.a r9, kotlin.coroutines.Continuation r10) {
        /*
            r5 = this;
            boolean r0 = r10 instanceof so.g.b
            if (r0 == 0) goto L13
            r0 = r10
            so.g$b r0 = (so.g.b) r0
            int r1 = r0.f50089q
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f50089q = r1
            goto L18
        L13:
            so.g$b r0 = new so.g$b
            r0.<init>(r10)
        L18:
            java.lang.Object r10 = r0.f50087o
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f50089q
            r3 = 2
            r4 = 1
            if (r2 == 0) goto L45
            if (r2 == r4) goto L34
            if (r2 != r3) goto L2c
            kotlin.c.b(r10)
            goto L92
        L2c:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L34:
            java.lang.Object r6 = r0.f50086i
            r8 = r6
            com.withpersona.sdk2.inquiry.internal.network.ErrorRequest$a r8 = (com.withpersona.sdk2.inquiry.internal.network.ErrorRequest.a) r8
            java.lang.Object r6 = r0.f50085e
            java.lang.String r6 = (java.lang.String) r6
            java.lang.Object r7 = r0.f50084d
            so.g r7 = (so.g) r7
            kotlin.c.b(r10)
            goto L5a
        L45:
            kotlin.c.b(r10)
            bp.b r10 = r5.f50078c
            r0.f50084d = r5
            r0.f50085e = r6
            r0.f50086i = r8
            r0.f50089q = r4
            java.lang.Object r10 = r10.g(r7, r9, r0)
            if (r10 != r1) goto L59
            goto L91
        L59:
            r7 = r5
        L5a:
            java.lang.String r10 = (java.lang.String) r10
            if (r10 != 0) goto L61
            kotlin.Unit r6 = kotlin.Unit.f31988a
            return r6
        L61:
            boolean r9 = kotlin.text.StringsKt.k0(r10)
            if (r9 == 0) goto L6a
            kotlin.Unit r6 = kotlin.Unit.f31988a
            return r6
        L6a:
            yo.r r9 = r7.f50076a
            com.withpersona.sdk2.inquiry.internal.network.ErrorRequest r2 = new com.withpersona.sdk2.inquiry.internal.network.ErrorRequest
            com.squareup.moshi.w r7 = r7.f50077b
            java.lang.Class<com.withpersona.sdk2.inquiry.internal.ErrorLog> r4 = com.withpersona.sdk2.inquiry.internal.ErrorLog.class
            com.squareup.moshi.h r7 = r7.c(r4)
            com.withpersona.sdk2.inquiry.internal.ErrorLog r4 = new com.withpersona.sdk2.inquiry.internal.ErrorLog
            r4.<init>(r10)
            java.lang.Object r7 = r7.toJsonValue(r4)
            r2.<init>(r8, r7)
            r7 = 0
            r0.f50084d = r7
            r0.f50085e = r7
            r0.f50086i = r7
            r0.f50089q = r3
            java.lang.Object r6 = r9.c(r6, r2, r0)
            if (r6 != r1) goto L92
        L91:
            return r1
        L92:
            kotlin.Unit r6 = kotlin.Unit.f31988a
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: so.g.e(java.lang.String, java.lang.String, com.withpersona.sdk2.inquiry.internal.network.ErrorRequest$a, bp.a, kotlin.coroutines.Continuation):java.lang.Object");
    }

    static /* synthetic */ Object g(g gVar, String str, String str2, ErrorRequest.a aVar, bp.a aVar2, Continuation continuation, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            aVar2 = bp.a.f7068i;
        }
        return gVar.e(str, str2, aVar, aVar2, continuation);
    }

    public final Job f(String sessionToken, InternalErrorInfo errorInfo) {
        Job d10;
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(errorInfo, "errorInfo");
        d10 = ms.i.d(this.f50079d, ms.m0.b(), null, new a(sessionToken, errorInfo, null), 2, null);
        return d10;
    }

    public final Job h(String sessionToken) {
        Job d10;
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        d10 = ms.i.d(this.f50079d, ms.m0.b(), null, new c(sessionToken, null), 2, null);
        return d10;
    }

    public final Job i(String sessionToken) {
        Job d10;
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        d10 = ms.i.d(this.f50079d, ms.m0.b(), null, new d(sessionToken, null), 2, null);
        return d10;
    }
}
