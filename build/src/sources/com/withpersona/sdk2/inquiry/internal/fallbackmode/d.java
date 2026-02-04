package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.InquiryFieldMap;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.FallbackModeService;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
import com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import okhttp3.MediaType;
import okhttp3.RequestBody;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements to.a {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackModeService f18451a;

    /* renamed from: b  reason: collision with root package name */
    private final w f18452b;

    /* renamed from: c  reason: collision with root package name */
    private final i.a f18453c;

    /* renamed from: d  reason: collision with root package name */
    private int f18454d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18455d;

        /* renamed from: e  reason: collision with root package name */
        Object f18456e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f18457i;

        /* renamed from: p  reason: collision with root package name */
        int f18459p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f18457i = obj;
            this.f18459p |= Integer.MIN_VALUE;
            Object c10 = d.this.c(null, this);
            return c10 == rr.b.f() ? c10 : Result.a(c10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18460d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ vo.d f18461e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f18462i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18463d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ vo.d f18464e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f18465i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(vo.d dVar, d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18464e = dVar;
                this.f18465i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18464e, this.f18465i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                String str;
                Object f10 = rr.b.f();
                int i10 = this.f18463d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                String g10 = this.f18464e.g();
                if (g10 != null && g10.length() != 0) {
                    str = "Bearer " + com.withpersona.sdk2.inquiry.internal.h.f18512b.a(this.f18464e.g());
                } else {
                    str = null;
                }
                FallbackModeService g11 = this.f18465i.g();
                FallbackModeService.StatusRequest statusRequest = new FallbackModeService.StatusRequest(this.f18464e.h());
                this.f18463d = 1;
                Object a10 = g11.a(str, statusRequest, this);
                if (a10 == f10) {
                    return f10;
                }
                return a10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(vo.d dVar, d dVar2, Continuation continuation) {
            super(2, continuation);
            this.f18461e = dVar;
            this.f18462i = dVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f18461e, this.f18462i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f18460d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(this.f18461e, this.f18462i, null);
            this.f18460d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18466d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ vo.d f18468i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18469d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18470e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ vo.d f18471i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, vo.d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18470e = dVar;
                this.f18471i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18470e, this.f18471i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                InquiryFieldMap inquiryFieldMap;
                Object f10 = rr.b.f();
                int i10 = this.f18469d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18470e.g();
                String h10 = this.f18471i.h();
                String i11 = this.f18471i.i();
                String e10 = this.f18471i.e();
                String f11 = this.f18471i.f();
                String a10 = this.f18471i.a();
                String a11 = vo.b.a(this.f18471i.b());
                String c10 = this.f18471i.c();
                if (this.f18471i.d() != null) {
                    inquiryFieldMap = new InquiryFieldMap(this.f18471i.d());
                } else {
                    inquiryFieldMap = null;
                }
                FallbackModeService.SessionIdRequest sessionIdRequest = new FallbackModeService.SessionIdRequest(h10, i11, e10, f11, a10, a11, c10, inquiryFieldMap, this.f18471i.j());
                this.f18469d = 1;
                Object c11 = g10.c(sessionIdRequest, this);
                if (c11 == f10) {
                    return f10;
                }
                return c11;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(vo.d dVar, Continuation continuation) {
            super(2, continuation);
            this.f18468i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f18468i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f18466d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18468i, null);
            this.f18466d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.withpersona.sdk2.inquiry.internal.fallbackmode.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0226d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18472d;

        /* renamed from: e  reason: collision with root package name */
        Object f18473e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f18474i;

        /* renamed from: p  reason: collision with root package name */
        int f18476p;

        C0226d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f18474i = obj;
            this.f18476p |= Integer.MIN_VALUE;
            return d.this.h(null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18477d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f18479i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ to.h f18480o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ RequestBody f18481p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18482d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18483e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f18484i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ to.h f18485o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ RequestBody f18486p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, to.h hVar, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f18483e = dVar;
                this.f18484i = str;
                this.f18485o = hVar;
                this.f18486p = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18483e, this.f18484i, this.f18485o, this.f18486p, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f18482d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18483e.g();
                String str = this.f18484i;
                to.h hVar = this.f18485o;
                int f11 = this.f18483e.f();
                long contentLength = this.f18486p.contentLength();
                MediaType contentType = this.f18486p.contentType();
                FallbackModeService.UploadUrlRequest uploadUrlRequest = new FallbackModeService.UploadUrlRequest(contentLength, (contentType == null || (r11 = contentType.toString()) == null) ? "application/json" : "application/json");
                this.f18482d = 1;
                Object d10 = g10.d(str, hVar, f11, uploadUrlRequest, this);
                if (d10 == f10) {
                    return f10;
                }
                return d10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, to.h hVar, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f18479i = str;
            this.f18480o = hVar;
            this.f18481p = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f18479i, this.f18480o, this.f18481p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f18477d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18479i, this.f18480o, this.f18481p, null);
            this.f18477d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18487d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f18489i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ RequestBody f18490o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18491d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18492e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f18493i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ RequestBody f18494o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f18492e = dVar;
                this.f18493i = str;
                this.f18494o = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18492e, this.f18493i, this.f18494o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f18491d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18492e.g();
                String str = this.f18493i;
                RequestBody requestBody = this.f18494o;
                this.f18491d = 1;
                Object b10 = g10.b(str, requestBody, this);
                if (b10 == f10) {
                    return f10;
                }
                return b10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(String str, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f18489i = str;
            this.f18490o = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f18489i, this.f18490o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f18487d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18489i, this.f18490o, null);
            this.f18487d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public d(FallbackModeService service, w moshi, i.a staticTemplateSessionFactory) {
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        Intrinsics.checkNotNullParameter(staticTemplateSessionFactory, "staticTemplateSessionFactory");
        this.f18451a = service;
        this.f18452b = moshi;
        this.f18453c = staticTemplateSessionFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int f() {
        int i10 = this.f18454d + 1;
        this.f18454d = i10;
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:11:0x0034  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0055  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0082  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x00a9  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x0104  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x012b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object h(java.lang.String r17, okhttp3.RequestBody r18, to.h r19, kotlin.coroutines.Continuation r20) {
        /*
            Method dump skipped, instructions count: 323
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.h(java.lang.String, okhttp3.RequestBody, to.h, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // to.a
    public Object a(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, to.h.f50167d, continuation);
    }

    @Override // to.a
    public Object b(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, to.h.f50168e, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x004a  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0097  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x010c  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x0120  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0132  */
    @Override // to.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object c(vo.d r8, kotlin.coroutines.Continuation r9) {
        /*
            Method dump skipped, instructions count: 385
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.c(vo.d, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final FallbackModeService g() {
        return this.f18451a;
    }
}
