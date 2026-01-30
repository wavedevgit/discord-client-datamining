package com.withpersona.sdk2.inquiry.internal.network;

import android.content.Context;
import android.location.Location;
import com.withpersona.sdk2.inquiry.internal.network.UpdateInquirySessionRequest;
import com.withpersona.sdk2.inquiry.internal.network.VerifyDeviceIntegrityRequest;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import so.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Context f20254a;

    /* renamed from: b  reason: collision with root package name */
    private final r f20255b;

    /* renamed from: c  reason: collision with root package name */
    private final qo.i f20256c;

    /* renamed from: d  reason: collision with root package name */
    private final cp.c f20257d;

    /* renamed from: e  reason: collision with root package name */
    private final un.a f20258e;

    /* renamed from: f  reason: collision with root package name */
    private final ro.a f20259f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20260d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20261e;

        /* renamed from: o  reason: collision with root package name */
        int f20263o;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20261e = obj;
            this.f20263o |= Integer.MIN_VALUE;
            return e.this.h(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20264d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20265e;

        /* renamed from: o  reason: collision with root package name */
        int f20267o;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20265e = obj;
            this.f20267o |= Integer.MIN_VALUE;
            return e.this.i(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20268d;

        /* renamed from: e  reason: collision with root package name */
        Object f20269e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f20270i;

        /* renamed from: p  reason: collision with root package name */
        int f20272p;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20270i = obj;
            this.f20272p |= Integer.MIN_VALUE;
            return e.this.j(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20273d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20274e;

        /* renamed from: o  reason: collision with root package name */
        int f20276o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20274e = obj;
            this.f20276o |= Integer.MIN_VALUE;
            return e.this.k(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0252e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20277d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ int f20278e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function1 f20279i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f20280o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0252e(Function1 function1, Ref.ObjectRef objectRef, Continuation continuation) {
            super(2, continuation);
            this.f20279i = function1;
            this.f20280o = objectRef;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            C0252e c0252e = new C0252e(this.f20279i, this.f20280o, continuation);
            c0252e.f20278e = ((Number) obj).intValue();
            return c0252e;
        }

        public final Object invoke(int i10, Continuation continuation) {
            return ((C0252e) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f33298a);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x0030, code lost:
            if (gs.i0.a(1000, r11) == r0) goto L21;
         */
        /* JADX WARN: Code restructure failed: missing block: B:19:0x003b, code lost:
            if (r12 == r0) goto L21;
         */
        /* JADX WARN: Code restructure failed: missing block: B:20:0x003d, code lost:
            return r0;
         */
        /* JADX WARN: Type inference failed for: r12v12, types: [T, com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo] */
        /* JADX WARN: Type inference failed for: r4v0, types: [T, com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo] */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r12) {
            /*
                r11 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r11.f20277d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L21
                if (r1 == r3) goto L1d
                if (r1 != r2) goto L15
                kotlin.c.b(r12)     // Catch: java.io.IOException -> L12
                goto L3e
            L12:
                r0 = move-exception
                r12 = r0
                goto L62
            L15:
                java.lang.IllegalStateException r12 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r12.<init>(r0)
                throw r12
            L1d:
                kotlin.c.b(r12)
                goto L33
            L21:
                kotlin.c.b(r12)
                int r12 = r11.f20278e
                if (r12 <= 0) goto L33
                r11.f20277d = r3
                r4 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r12 = gs.i0.a(r4, r11)
                if (r12 != r0) goto L33
                goto L3d
            L33:
                kotlin.jvm.functions.Function1 r12 = r11.f20279i     // Catch: java.io.IOException -> L12
                r11.f20277d = r2     // Catch: java.io.IOException -> L12
                java.lang.Object r12 = r12.invoke(r11)     // Catch: java.io.IOException -> L12
                if (r12 != r0) goto L3e
            L3d:
                return r0
            L3e:
                iv.z r12 = (iv.z) r12     // Catch: java.io.IOException -> L12
                boolean r0 = r12.g()
                if (r0 != 0) goto L57
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r12 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toErrorInfo(r12)
                kotlin.jvm.internal.Ref$ObjectRef r0 = r11.f20280o
                r0.element = r12
                boolean r12 = r12.isRecoverable()
                java.lang.Boolean r12 = kotlin.coroutines.jvm.internal.b.a(r12)
                return r12
            L57:
                kotlin.jvm.internal.Ref$ObjectRef r12 = r11.f20280o
                r0 = 0
                r12.element = r0
                r12 = 0
                java.lang.Boolean r12 = kotlin.coroutines.jvm.internal.b.a(r12)
                return r12
            L62:
                kotlin.jvm.internal.Ref$ObjectRef r0 = r11.f20280o
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r4 = new com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo
                java.lang.String r6 = r12.getMessage()
                r9 = 8
                r10 = 0
                r5 = 0
                r7 = 1
                r8 = 0
                r4.<init>(r5, r6, r7, r8, r9, r10)
                r0.element = r4
                java.lang.Boolean r12 = kotlin.coroutines.jvm.internal.b.a(r3)
                return r12
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.C0252e.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return invoke(((Number) obj).intValue(), (Continuation) obj2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20281d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20282e;

        /* renamed from: o  reason: collision with root package name */
        int f20284o;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20282e = obj;
            this.f20284o |= Integer.MIN_VALUE;
            return e.this.l(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20285d;

        /* renamed from: e  reason: collision with root package name */
        Object f20286e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f20287i;

        /* renamed from: p  reason: collision with root package name */
        int f20289p;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20287i = obj;
            this.f20289p |= Integer.MIN_VALUE;
            return e.this.m(null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20290d;

        /* renamed from: e  reason: collision with root package name */
        Object f20291e;

        /* renamed from: i  reason: collision with root package name */
        Object f20292i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f20293o;

        /* renamed from: q  reason: collision with root package name */
        int f20295q;

        h(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20293o = obj;
            this.f20295q |= Integer.MIN_VALUE;
            return e.this.o(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20296d;

        /* renamed from: e  reason: collision with root package name */
        Object f20297e;

        /* renamed from: i  reason: collision with root package name */
        Object f20298i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f20299o;

        /* renamed from: q  reason: collision with root package name */
        int f20301q;

        i(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20299o = obj;
            this.f20301q |= Integer.MIN_VALUE;
            return e.this.p(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f20302d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f20304i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ qp.b f20305o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(String str, qp.b bVar, tn.a aVar, Continuation continuation) {
            super(1, continuation);
            this.f20304i = str;
            this.f20305o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new j(this.f20304i, this.f20305o, null, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Double d10;
            Double d11;
            String str;
            qp.c b10;
            Location a10;
            Location a11;
            Object f10 = or.b.f();
            int i10 = this.f20302d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            r rVar = e.this.f20255b;
            String str2 = this.f20304i;
            UpdateInquirySessionRequest.a aVar = UpdateInquirySessionRequest.f20213b;
            qp.b bVar = this.f20305o;
            if (bVar != null && (a11 = bVar.a()) != null) {
                d10 = kotlin.coroutines.jvm.internal.b.c(a11.getLatitude());
            } else {
                d10 = null;
            }
            qp.b bVar2 = this.f20305o;
            if (bVar2 != null && (a10 = bVar2.a()) != null) {
                d11 = kotlin.coroutines.jvm.internal.b.c(a10.getLongitude());
            } else {
                d11 = null;
            }
            qp.b bVar3 = this.f20305o;
            if (bVar3 != null && (b10 = bVar3.b()) != null) {
                str = qp.d.a(b10);
            } else {
                str = null;
            }
            UpdateInquirySessionRequest a12 = aVar.a(d11, d10, str, null);
            this.f20302d = 1;
            Object a13 = rVar.a(str2, a12, this);
            if (a13 == f10) {
                return f10;
            }
            return a13;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((j) create(continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20306d;

        /* renamed from: e  reason: collision with root package name */
        Object f20307e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f20308i;

        /* renamed from: p  reason: collision with root package name */
        int f20310p;

        k(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20308i = obj;
            this.f20310p |= Integer.MIN_VALUE;
            return e.this.q(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f20311d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f20313i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f20314o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(String str, String str2, Continuation continuation) {
            super(1, continuation);
            this.f20313i = str;
            this.f20314o = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new l(this.f20313i, this.f20314o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f20311d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            r rVar = e.this.f20255b;
            String str = this.f20313i;
            VerifyDeviceIntegrityRequest verifyDeviceIntegrityRequest = new VerifyDeviceIntegrityRequest(new VerifyDeviceIntegrityRequest.Meta(e.this.f20254a.getPackageName(), this.f20314o));
            this.f20311d = 1;
            Object g10 = rVar.g(str, verifyDeviceIntegrityRequest, this);
            if (g10 == f10) {
                return f10;
            }
            return g10;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((l) create(continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public e(Context applicationContext, r service, qo.i fallbackModeManager, cp.c sandboxFlags, un.a deviceIdProvider, ro.a playIntegrityHelper) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        Intrinsics.checkNotNullParameter(sandboxFlags, "sandboxFlags");
        Intrinsics.checkNotNullParameter(deviceIdProvider, "deviceIdProvider");
        Intrinsics.checkNotNullParameter(playIntegrityHelper, "playIntegrityHelper");
        this.f20254a = applicationContext;
        this.f20255b = service;
        this.f20256c = fallbackModeManager;
        this.f20257d = sandboxFlags;
        this.f20258e = deviceIdProvider;
        this.f20259f = playIntegrityHelper;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object k(kotlin.jvm.functions.Function1 r6, kotlin.coroutines.Continuation r7) {
        /*
            r5 = this;
            boolean r0 = r7 instanceof com.withpersona.sdk2.inquiry.internal.network.e.d
            if (r0 == 0) goto L13
            r0 = r7
            com.withpersona.sdk2.inquiry.internal.network.e$d r0 = (com.withpersona.sdk2.inquiry.internal.network.e.d) r0
            int r1 = r0.f20276o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f20276o = r1
            goto L18
        L13:
            com.withpersona.sdk2.inquiry.internal.network.e$d r0 = new com.withpersona.sdk2.inquiry.internal.network.e$d
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f20274e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f20276o
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 != r3) goto L2d
            java.lang.Object r6 = r0.f20273d
            kotlin.jvm.internal.Ref$ObjectRef r6 = (kotlin.jvm.internal.Ref.ObjectRef) r6
            kotlin.c.b(r7)
            goto L50
        L2d:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L35:
            kotlin.c.b(r7)
            kotlin.jvm.internal.Ref$ObjectRef r7 = new kotlin.jvm.internal.Ref$ObjectRef
            r7.<init>()
            com.withpersona.sdk2.inquiry.internal.network.e$e r2 = new com.withpersona.sdk2.inquiry.internal.network.e$e
            r4 = 0
            r2.<init>(r6, r7, r4)
            r0.f20273d = r7
            r0.f20276o = r3
            r6 = 5
            java.lang.Object r6 = jp.u.a(r6, r2, r0)
            if (r6 != r1) goto L4f
            return r1
        L4f:
            r6 = r7
        L50:
            T r6 = r6.element
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.k(kotlin.jvm.functions.Function1, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x005c A[Catch: SocketTimeoutException -> 0x002d, TryCatch #0 {SocketTimeoutException -> 0x002d, blocks: (B:12:0x0029, B:23:0x004e, B:25:0x005c, B:28:0x0068, B:30:0x0075, B:19:0x003a), top: B:34:0x0021 }] */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0066  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object l(java.lang.String r5, java.lang.String r6, kotlin.coroutines.Continuation r7) {
        /*
            r4 = this;
            boolean r0 = r7 instanceof com.withpersona.sdk2.inquiry.internal.network.e.f
            if (r0 == 0) goto L13
            r0 = r7
            com.withpersona.sdk2.inquiry.internal.network.e$f r0 = (com.withpersona.sdk2.inquiry.internal.network.e.f) r0
            int r1 = r0.f20284o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f20284o = r1
            goto L18
        L13:
            com.withpersona.sdk2.inquiry.internal.network.e$f r0 = new com.withpersona.sdk2.inquiry.internal.network.e$f
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f20282e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f20284o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r5 = r0.f20281d
            com.withpersona.sdk2.inquiry.internal.network.e r5 = (com.withpersona.sdk2.inquiry.internal.network.e) r5
            kotlin.c.b(r7)     // Catch: java.net.SocketTimeoutException -> L2d
            goto L4e
        L2d:
            r5 = move-exception
            goto L7f
        L2f:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L37:
            kotlin.c.b(r7)
            qo.i r7 = r4.f20256c     // Catch: java.net.SocketTimeoutException -> L2d
            com.withpersona.sdk2.inquiry.internal.network.TransitionBackRequest$a r2 = com.withpersona.sdk2.inquiry.internal.network.TransitionBackRequest.f20206b     // Catch: java.net.SocketTimeoutException -> L2d
            com.withpersona.sdk2.inquiry.internal.network.TransitionBackRequest r6 = r2.a(r6)     // Catch: java.net.SocketTimeoutException -> L2d
            r0.f20281d = r4     // Catch: java.net.SocketTimeoutException -> L2d
            r0.f20284o = r3     // Catch: java.net.SocketTimeoutException -> L2d
            java.lang.Object r7 = r7.f(r5, r6, r0)     // Catch: java.net.SocketTimeoutException -> L2d
            if (r7 != r1) goto L4d
            return r1
        L4d:
            r5 = r4
        L4e:
            iv.z r7 = (iv.z) r7     // Catch: java.net.SocketTimeoutException -> L2d
            qo.i r5 = r5.f20256c     // Catch: java.net.SocketTimeoutException -> L2d
            com.withpersona.sdk2.inquiry.internal.fallbackmode.i r5 = r5.d()     // Catch: java.net.SocketTimeoutException -> L2d
            boolean r6 = r7.g()     // Catch: java.net.SocketTimeoutException -> L2d
            if (r6 != 0) goto L66
            com.withpersona.sdk2.inquiry.internal.network.h$a r5 = new com.withpersona.sdk2.inquiry.internal.network.h$a     // Catch: java.net.SocketTimeoutException -> L2d
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r6 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toErrorInfo(r7)     // Catch: java.net.SocketTimeoutException -> L2d
            r5.<init>(r6)     // Catch: java.net.SocketTimeoutException -> L2d
            return r5
        L66:
            if (r5 != 0) goto L75
            com.withpersona.sdk2.inquiry.internal.network.h$a r5 = new com.withpersona.sdk2.inquiry.internal.network.h$a     // Catch: java.net.SocketTimeoutException -> L2d
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$UnknownErrorInfo r6 = new com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$UnknownErrorInfo     // Catch: java.net.SocketTimeoutException -> L2d
            java.lang.String r7 = "Current fallback session is unexpectedly null."
            r6.<init>(r7)     // Catch: java.net.SocketTimeoutException -> L2d
            r5.<init>(r6)     // Catch: java.net.SocketTimeoutException -> L2d
            return r5
        L75:
            com.withpersona.sdk2.inquiry.internal.network.h$b r6 = new com.withpersona.sdk2.inquiry.internal.network.h$b     // Catch: java.net.SocketTimeoutException -> L2d
            com.withpersona.sdk2.inquiry.internal.l r5 = r5.a()     // Catch: java.net.SocketTimeoutException -> L2d
            r6.<init>(r5)     // Catch: java.net.SocketTimeoutException -> L2d
            return r6
        L7f:
            com.withpersona.sdk2.inquiry.internal.network.h$a r6 = new com.withpersona.sdk2.inquiry.internal.network.h$a
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r5 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toSocketTimeoutErrorInfo(r5)
            r6.<init>(r5)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.l(java.lang.String, java.lang.String, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003c  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x005c A[Catch: SocketTimeoutException -> 0x0032, TryCatch #0 {SocketTimeoutException -> 0x0032, blocks: (B:12:0x002e, B:22:0x0054, B:24:0x005c, B:26:0x006f, B:19:0x003f), top: B:30:0x0021 }] */
    /* JADX WARN: Removed duplicated region for block: B:26:0x006f A[Catch: SocketTimeoutException -> 0x0032, TRY_LEAVE, TryCatch #0 {SocketTimeoutException -> 0x0032, blocks: (B:12:0x002e, B:22:0x0054, B:24:0x005c, B:26:0x006f, B:19:0x003f), top: B:30:0x0021 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object m(java.lang.String r5, java.lang.String r6, java.lang.String r7, qp.g r8, kotlin.coroutines.Continuation r9) {
        /*
            r4 = this;
            boolean r0 = r9 instanceof com.withpersona.sdk2.inquiry.internal.network.e.g
            if (r0 == 0) goto L13
            r0 = r9
            com.withpersona.sdk2.inquiry.internal.network.e$g r0 = (com.withpersona.sdk2.inquiry.internal.network.e.g) r0
            int r1 = r0.f20289p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f20289p = r1
            goto L18
        L13:
            com.withpersona.sdk2.inquiry.internal.network.e$g r0 = new com.withpersona.sdk2.inquiry.internal.network.e$g
            r0.<init>(r9)
        L18:
            java.lang.Object r9 = r0.f20287i
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f20289p
            r3 = 1
            if (r2 == 0) goto L3c
            if (r2 != r3) goto L34
            java.lang.Object r5 = r0.f20286e
            r8 = r5
            qp.g r8 = (qp.g) r8
            java.lang.Object r5 = r0.f20285d
            java.lang.String r5 = (java.lang.String) r5
            kotlin.c.b(r9)     // Catch: java.net.SocketTimeoutException -> L32
            goto L54
        L32:
            r5 = move-exception
            goto L79
        L34:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L3c:
            kotlin.c.b(r9)
            so.r r9 = r4.f20255b     // Catch: java.net.SocketTimeoutException -> L32
            com.withpersona.sdk2.inquiry.internal.network.TransitionBackRequest$a r2 = com.withpersona.sdk2.inquiry.internal.network.TransitionBackRequest.f20206b     // Catch: java.net.SocketTimeoutException -> L32
            com.withpersona.sdk2.inquiry.internal.network.TransitionBackRequest r7 = r2.a(r7)     // Catch: java.net.SocketTimeoutException -> L32
            r0.f20285d = r5     // Catch: java.net.SocketTimeoutException -> L32
            r0.f20286e = r8     // Catch: java.net.SocketTimeoutException -> L32
            r0.f20289p = r3     // Catch: java.net.SocketTimeoutException -> L32
            java.lang.Object r9 = r9.d(r5, r6, r7, r0)     // Catch: java.net.SocketTimeoutException -> L32
            if (r9 != r1) goto L54
            return r1
        L54:
            iv.z r9 = (iv.z) r9     // Catch: java.net.SocketTimeoutException -> L32
            boolean r6 = r9.g()     // Catch: java.net.SocketTimeoutException -> L32
            if (r6 == 0) goto L6f
            com.withpersona.sdk2.inquiry.internal.network.h$b r6 = new com.withpersona.sdk2.inquiry.internal.network.h$b     // Catch: java.net.SocketTimeoutException -> L32
            java.lang.Object r7 = r9.a()     // Catch: java.net.SocketTimeoutException -> L32
            kotlin.jvm.internal.Intrinsics.checkNotNull(r7)     // Catch: java.net.SocketTimeoutException -> L32
            com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse r7 = (com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse) r7     // Catch: java.net.SocketTimeoutException -> L32
            com.withpersona.sdk2.inquiry.internal.l r5 = so.a.n(r7, r5, r8)     // Catch: java.net.SocketTimeoutException -> L32
            r6.<init>(r5)     // Catch: java.net.SocketTimeoutException -> L32
            return r6
        L6f:
            com.withpersona.sdk2.inquiry.internal.network.h$a r5 = new com.withpersona.sdk2.inquiry.internal.network.h$a     // Catch: java.net.SocketTimeoutException -> L32
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r6 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toErrorInfo(r9)     // Catch: java.net.SocketTimeoutException -> L32
            r5.<init>(r6)     // Catch: java.net.SocketTimeoutException -> L32
            return r5
        L79:
            com.withpersona.sdk2.inquiry.internal.network.h$a r6 = new com.withpersona.sdk2.inquiry.internal.network.h$a
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r5 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toSocketTimeoutErrorInfo(r5)
            r6.<init>(r5)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.m(java.lang.String, java.lang.String, java.lang.String, qp.g, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0092, code lost:
        if (r15 == r1) goto L22;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0046  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x007e A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:30:0x007f  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object p(java.lang.String r13, qp.g r14, kotlin.coroutines.Continuation r15) {
        /*
            r12 = this;
            boolean r0 = r15 instanceof com.withpersona.sdk2.inquiry.internal.network.e.i
            if (r0 == 0) goto L13
            r0 = r15
            com.withpersona.sdk2.inquiry.internal.network.e$i r0 = (com.withpersona.sdk2.inquiry.internal.network.e.i) r0
            int r1 = r0.f20301q
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f20301q = r1
            goto L18
        L13:
            com.withpersona.sdk2.inquiry.internal.network.e$i r0 = new com.withpersona.sdk2.inquiry.internal.network.e$i
            r0.<init>(r15)
        L18:
            java.lang.Object r15 = r0.f20299o
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f20301q
            r3 = 2
            r4 = 1
            r5 = 0
            if (r2 == 0) goto L46
            if (r2 == r4) goto L36
            if (r2 != r3) goto L2e
            kotlin.c.b(r15)
            goto L95
        L2e:
            java.lang.IllegalStateException r13 = new java.lang.IllegalStateException
            java.lang.String r14 = "call to 'resume' before 'invoke' with coroutine"
            r13.<init>(r14)
            throw r13
        L36:
            java.lang.Object r13 = r0.f20298i
            qp.b r13 = (qp.b) r13
            java.lang.Object r14 = r0.f20297e
            java.lang.String r14 = (java.lang.String) r14
            java.lang.Object r2 = r0.f20296d
            com.withpersona.sdk2.inquiry.internal.network.e r2 = (com.withpersona.sdk2.inquiry.internal.network.e) r2
            kotlin.c.b(r15)
            goto L72
        L46:
            kotlin.c.b(r15)
            qp.a r14 = r14.b()
            qp.a r15 = qp.a.f47598i
            if (r14 == r15) goto L58
            android.content.Context r14 = r12.f20254a
            qp.b r14 = qp.f.a(r14)
            goto L59
        L58:
            r14 = r5
        L59:
            kotlinx.coroutines.flow.Flow r15 = tn.c.b()
            if (r15 == 0) goto L79
            r0.f20296d = r12
            r0.f20297e = r13
            r0.f20298i = r14
            r0.f20301q = r4
            java.lang.Object r15 = js.g.u(r15, r0)
            if (r15 != r1) goto L6e
            goto L94
        L6e:
            r2 = r14
            r14 = r13
            r13 = r2
            r2 = r12
        L72:
            android.support.v4.media.session.b.a(r15)
            r9 = r13
            r8 = r14
            r7 = r2
            goto L7c
        L79:
            r7 = r12
            r8 = r13
            r9 = r14
        L7c:
            if (r9 != 0) goto L7f
            return r5
        L7f:
            com.withpersona.sdk2.inquiry.internal.network.e$j r6 = new com.withpersona.sdk2.inquiry.internal.network.e$j
            r11 = 0
            r10 = 0
            r6.<init>(r8, r9, r10, r11)
            r0.f20296d = r5
            r0.f20297e = r5
            r0.f20298i = r5
            r0.f20301q = r3
            java.lang.Object r15 = r7.k(r6, r0)
            if (r15 != r1) goto L95
        L94:
            return r1
        L95:
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo r15 = (com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo) r15
            return r15
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.p(java.lang.String, qp.g, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0083, code lost:
        if (r11 == r1) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x0094, code lost:
        if (r9.i(r0) == r1) goto L22;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0026  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0050  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0071  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x0074  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object q(java.lang.String r9, qp.g r10, kotlin.coroutines.Continuation r11) {
        /*
            r8 = this;
            boolean r0 = r11 instanceof com.withpersona.sdk2.inquiry.internal.network.e.k
            if (r0 == 0) goto L13
            r0 = r11
            com.withpersona.sdk2.inquiry.internal.network.e$k r0 = (com.withpersona.sdk2.inquiry.internal.network.e.k) r0
            int r1 = r0.f20310p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f20310p = r1
            goto L18
        L13:
            com.withpersona.sdk2.inquiry.internal.network.e$k r0 = new com.withpersona.sdk2.inquiry.internal.network.e$k
            r0.<init>(r11)
        L18:
            java.lang.Object r11 = r0.f20308i
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f20310p
            r3 = 3
            r4 = 2
            r5 = 1
            r6 = 0
            if (r2 == 0) goto L50
            if (r2 == r5) goto L41
            if (r2 == r4) goto L39
            if (r2 != r3) goto L31
            kotlin.c.b(r11)
            goto L97
        L31:
            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
            java.lang.String r10 = "call to 'resume' before 'invoke' with coroutine"
            r9.<init>(r10)
            throw r9
        L39:
            java.lang.Object r9 = r0.f20306d
            com.withpersona.sdk2.inquiry.internal.network.e r9 = (com.withpersona.sdk2.inquiry.internal.network.e) r9
            kotlin.c.b(r11)
            goto L86
        L41:
            java.lang.Object r9 = r0.f20307e
            java.lang.String r9 = (java.lang.String) r9
            java.lang.Object r10 = r0.f20306d
            com.withpersona.sdk2.inquiry.internal.network.e r10 = (com.withpersona.sdk2.inquiry.internal.network.e) r10
            kotlin.c.b(r11)
            r7 = r10
            r10 = r9
            r9 = r7
            goto L6d
        L50:
            kotlin.c.b(r11)
            boolean r10 = r10.d()
            if (r10 != 0) goto L5c
            com.withpersona.sdk2.inquiry.internal.network.j$b r9 = com.withpersona.sdk2.inquiry.internal.network.j.b.f20325a
            return r9
        L5c:
            ro.a r10 = r8.f20259f
            r0.f20306d = r8
            r0.f20307e = r9
            r0.f20310p = r5
            java.lang.Object r11 = r10.g(r0)
            if (r11 != r1) goto L6b
            goto L96
        L6b:
            r10 = r9
            r9 = r8
        L6d:
            java.lang.String r11 = (java.lang.String) r11
            if (r11 != 0) goto L74
            com.withpersona.sdk2.inquiry.internal.network.j$b r9 = com.withpersona.sdk2.inquiry.internal.network.j.b.f20325a
            return r9
        L74:
            com.withpersona.sdk2.inquiry.internal.network.e$l r2 = new com.withpersona.sdk2.inquiry.internal.network.e$l
            r2.<init>(r10, r11, r6)
            r0.f20306d = r9
            r0.f20307e = r6
            r0.f20310p = r4
            java.lang.Object r11 = r9.k(r2, r0)
            if (r11 != r1) goto L86
            goto L96
        L86:
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo r11 = (com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo) r11
            if (r11 != 0) goto L9a
            ro.a r9 = r9.f20259f
            r0.f20306d = r6
            r0.f20310p = r3
            java.lang.Object r9 = r9.i(r0)
            if (r9 != r1) goto L97
        L96:
            return r1
        L97:
            com.withpersona.sdk2.inquiry.internal.network.j$b r9 = com.withpersona.sdk2.inquiry.internal.network.j.b.f20325a
            return r9
        L9a:
            com.withpersona.sdk2.inquiry.internal.network.j$a r9 = new com.withpersona.sdk2.inquiry.internal.network.j$a
            r9.<init>(r11)
            return r9
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.q(java.lang.String, qp.g, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Code restructure failed: missing block: B:52:0x0114, code lost:
        if (r15 == r1) goto L50;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0041  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00a3  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x00cc  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object h(so.d r14, kotlin.coroutines.Continuation r15) {
        /*
            Method dump skipped, instructions count: 352
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.h(so.d, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0072  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x00ff  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object i(java.lang.String r6, kotlin.coroutines.Continuation r7) {
        /*
            Method dump skipped, instructions count: 265
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.i(java.lang.String, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003a  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0065  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x00d1  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object j(java.lang.String r9, kotlin.coroutines.Continuation r10) {
        /*
            Method dump skipped, instructions count: 242
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.j(java.lang.String, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final Object n(String str, String str2, String str3, qp.g gVar, Continuation continuation) {
        if (this.f20256c.b()) {
            return l(str, str3, continuation);
        }
        return m(str, str2, str3, gVar, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0049  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0062  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006e  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object o(java.lang.String r6, qp.g r7, kotlin.coroutines.Continuation r8) {
        /*
            r5 = this;
            boolean r0 = r8 instanceof com.withpersona.sdk2.inquiry.internal.network.e.h
            if (r0 == 0) goto L13
            r0 = r8
            com.withpersona.sdk2.inquiry.internal.network.e$h r0 = (com.withpersona.sdk2.inquiry.internal.network.e.h) r0
            int r1 = r0.f20295q
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f20295q = r1
            goto L18
        L13:
            com.withpersona.sdk2.inquiry.internal.network.e$h r0 = new com.withpersona.sdk2.inquiry.internal.network.e$h
            r0.<init>(r8)
        L18:
            java.lang.Object r8 = r0.f20293o
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f20295q
            r3 = 2
            r4 = 1
            if (r2 == 0) goto L49
            if (r2 == r4) goto L38
            if (r2 != r3) goto L30
            java.lang.Object r6 = r0.f20290d
            qp.g r6 = (qp.g) r6
            kotlin.c.b(r8)
            goto L7f
        L30:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L38:
            java.lang.Object r6 = r0.f20292i
            r7 = r6
            qp.g r7 = (qp.g) r7
            java.lang.Object r6 = r0.f20291e
            java.lang.String r6 = (java.lang.String) r6
            java.lang.Object r2 = r0.f20290d
            com.withpersona.sdk2.inquiry.internal.network.e r2 = (com.withpersona.sdk2.inquiry.internal.network.e) r2
            kotlin.c.b(r8)
            goto L5c
        L49:
            kotlin.c.b(r8)
            r0.f20290d = r5
            r0.f20291e = r6
            r0.f20292i = r7
            r0.f20295q = r4
            java.lang.Object r8 = r5.q(r6, r7, r0)
            if (r8 != r1) goto L5b
            goto L7d
        L5b:
            r2 = r5
        L5c:
            com.withpersona.sdk2.inquiry.internal.network.j r8 = (com.withpersona.sdk2.inquiry.internal.network.j) r8
            boolean r4 = r8 instanceof com.withpersona.sdk2.inquiry.internal.network.j.a
            if (r4 == 0) goto L6e
            com.withpersona.sdk2.inquiry.internal.network.i$a r6 = new com.withpersona.sdk2.inquiry.internal.network.i$a
            com.withpersona.sdk2.inquiry.internal.network.j$a r8 = (com.withpersona.sdk2.inquiry.internal.network.j.a) r8
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo r7 = r8.a()
            r6.<init>(r7)
            return r6
        L6e:
            r0.f20290d = r7
            r8 = 0
            r0.f20291e = r8
            r0.f20292i = r8
            r0.f20295q = r3
            java.lang.Object r8 = r2.p(r6, r7, r0)
            if (r8 != r1) goto L7e
        L7d:
            return r1
        L7e:
            r6 = r7
        L7f:
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo r8 = (com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo) r8
            if (r8 == 0) goto L8f
            boolean r6 = r6.e()
            if (r6 == 0) goto L8f
            com.withpersona.sdk2.inquiry.internal.network.i$a r6 = new com.withpersona.sdk2.inquiry.internal.network.i$a
            r6.<init>(r8)
            return r6
        L8f:
            com.withpersona.sdk2.inquiry.internal.network.i$b r6 = com.withpersona.sdk2.inquiry.internal.network.i.b.f20323a
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.network.e.o(java.lang.String, qp.g, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
