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
public final class d implements zo.a {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackModeService f18977a;

    /* renamed from: b  reason: collision with root package name */
    private final w f18978b;

    /* renamed from: c  reason: collision with root package name */
    private final i.a f18979c;

    /* renamed from: d  reason: collision with root package name */
    private int f18980d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18981d;

        /* renamed from: e  reason: collision with root package name */
        Object f18982e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f18983i;

        /* renamed from: p  reason: collision with root package name */
        int f18985p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f18983i = obj;
            this.f18985p |= Integer.MIN_VALUE;
            Object c10 = d.this.c(null, this);
            return c10 == xr.b.f() ? c10 : Result.a(c10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18986d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ bp.d f18987e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f18988i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18989d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ bp.d f18990e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f18991i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(bp.d dVar, d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18990e = dVar;
                this.f18991i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18990e, this.f18991i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                String str;
                Object f10 = xr.b.f();
                int i10 = this.f18989d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                String g10 = this.f18990e.g();
                if (g10 != null && g10.length() != 0) {
                    str = "Bearer " + com.withpersona.sdk2.inquiry.internal.h.f19038b.a(this.f18990e.g());
                } else {
                    str = null;
                }
                FallbackModeService g11 = this.f18991i.g();
                FallbackModeService.StatusRequest statusRequest = new FallbackModeService.StatusRequest(this.f18990e.h());
                this.f18989d = 1;
                Object a10 = g11.a(str, statusRequest, this);
                if (a10 == f10) {
                    return f10;
                }
                return a10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(bp.d dVar, d dVar2, Continuation continuation) {
            super(2, continuation);
            this.f18987e = dVar;
            this.f18988i = dVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f18987e, this.f18988i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f18986d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(this.f18987e, this.f18988i, null);
            this.f18986d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18992d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ bp.d f18994i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18995d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18996e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ bp.d f18997i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, bp.d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18996e = dVar;
                this.f18997i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18996e, this.f18997i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                InquiryFieldMap inquiryFieldMap;
                Object f10 = xr.b.f();
                int i10 = this.f18995d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18996e.g();
                String h10 = this.f18997i.h();
                String i11 = this.f18997i.i();
                String e10 = this.f18997i.e();
                String f11 = this.f18997i.f();
                String a10 = this.f18997i.a();
                String a11 = bp.b.a(this.f18997i.b());
                String c10 = this.f18997i.c();
                if (this.f18997i.d() != null) {
                    inquiryFieldMap = new InquiryFieldMap(this.f18997i.d());
                } else {
                    inquiryFieldMap = null;
                }
                FallbackModeService.SessionIdRequest sessionIdRequest = new FallbackModeService.SessionIdRequest(h10, i11, e10, f11, a10, a11, c10, inquiryFieldMap, this.f18997i.j());
                this.f18995d = 1;
                Object c11 = g10.c(sessionIdRequest, this);
                if (c11 == f10) {
                    return f10;
                }
                return c11;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(bp.d dVar, Continuation continuation) {
            super(2, continuation);
            this.f18994i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f18994i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f18992d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18994i, null);
            this.f18992d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.withpersona.sdk2.inquiry.internal.fallbackmode.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0263d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18998d;

        /* renamed from: e  reason: collision with root package name */
        Object f18999e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f19000i;

        /* renamed from: p  reason: collision with root package name */
        int f19002p;

        C0263d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f19000i = obj;
            this.f19002p |= Integer.MIN_VALUE;
            return d.this.h(null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19003d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f19005i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ zo.h f19006o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ RequestBody f19007p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f19008d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f19009e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f19010i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ zo.h f19011o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ RequestBody f19012p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, zo.h hVar, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f19009e = dVar;
                this.f19010i = str;
                this.f19011o = hVar;
                this.f19012p = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f19009e, this.f19010i, this.f19011o, this.f19012p, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f19008d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f19009e.g();
                String str = this.f19010i;
                zo.h hVar = this.f19011o;
                int f11 = this.f19009e.f();
                long contentLength = this.f19012p.contentLength();
                MediaType contentType = this.f19012p.contentType();
                FallbackModeService.UploadUrlRequest uploadUrlRequest = new FallbackModeService.UploadUrlRequest(contentLength, (contentType == null || (r11 = contentType.toString()) == null) ? "application/json" : "application/json");
                this.f19008d = 1;
                Object d10 = g10.d(str, hVar, f11, uploadUrlRequest, this);
                if (d10 == f10) {
                    return f10;
                }
                return d10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, zo.h hVar, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f19005i = str;
            this.f19006o = hVar;
            this.f19007p = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f19005i, this.f19006o, this.f19007p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f19003d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f19005i, this.f19006o, this.f19007p, null);
            this.f19003d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19013d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f19015i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ RequestBody f19016o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f19017d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f19018e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f19019i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ RequestBody f19020o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f19018e = dVar;
                this.f19019i = str;
                this.f19020o = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f19018e, this.f19019i, this.f19020o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f19017d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f19018e.g();
                String str = this.f19019i;
                RequestBody requestBody = this.f19020o;
                this.f19017d = 1;
                Object b10 = g10.b(str, requestBody, this);
                if (b10 == f10) {
                    return f10;
                }
                return b10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(String str, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f19015i = str;
            this.f19016o = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f19015i, this.f19016o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f19013d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f19015i, this.f19016o, null);
            this.f19013d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public d(FallbackModeService service, w moshi, i.a staticTemplateSessionFactory) {
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        Intrinsics.checkNotNullParameter(staticTemplateSessionFactory, "staticTemplateSessionFactory");
        this.f18977a = service;
        this.f18978b = moshi;
        this.f18979c = staticTemplateSessionFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int f() {
        int i10 = this.f18980d + 1;
        this.f18980d = i10;
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
    public final java.lang.Object h(java.lang.String r17, okhttp3.RequestBody r18, zo.h r19, kotlin.coroutines.Continuation r20) {
        /*
            Method dump skipped, instructions count: 323
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.h(java.lang.String, okhttp3.RequestBody, zo.h, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // zo.a
    public Object a(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, zo.h.f56576d, continuation);
    }

    @Override // zo.a
    public Object b(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, zo.h.f56577e, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x004a  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0097  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x010c  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x0120  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0132  */
    @Override // zo.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object c(bp.d r8, kotlin.coroutines.Continuation r9) {
        /*
            Method dump skipped, instructions count: 385
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.c(bp.d, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final FallbackModeService g() {
        return this.f18977a;
    }
}
