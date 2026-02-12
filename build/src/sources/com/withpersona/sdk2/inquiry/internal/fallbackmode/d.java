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
public final class d implements ip.a {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackModeService f19858a;

    /* renamed from: b  reason: collision with root package name */
    private final w f19859b;

    /* renamed from: c  reason: collision with root package name */
    private final i.a f19860c;

    /* renamed from: d  reason: collision with root package name */
    private int f19861d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f19862d;

        /* renamed from: e  reason: collision with root package name */
        Object f19863e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f19864i;

        /* renamed from: p  reason: collision with root package name */
        int f19866p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f19864i = obj;
            this.f19866p |= Integer.MIN_VALUE;
            Object a10 = d.this.a(null, this);
            return a10 == gs.b.f() ? a10 : Result.a(a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19867d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ kp.d f19868e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f19869i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f19870d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ kp.d f19871e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f19872i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(kp.d dVar, d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f19871e = dVar;
                this.f19872i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f19871e, this.f19872i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                String str;
                Object f10 = gs.b.f();
                int i10 = this.f19870d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                String g10 = this.f19871e.g();
                if (g10 != null && g10.length() != 0) {
                    str = "Bearer " + com.withpersona.sdk2.inquiry.internal.h.f19919b.a(this.f19871e.g());
                } else {
                    str = null;
                }
                FallbackModeService g11 = this.f19872i.g();
                FallbackModeService.StatusRequest statusRequest = new FallbackModeService.StatusRequest(this.f19871e.h());
                this.f19870d = 1;
                Object a10 = g11.a(str, statusRequest, this);
                if (a10 == f10) {
                    return f10;
                }
                return a10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(kp.d dVar, d dVar2, Continuation continuation) {
            super(2, continuation);
            this.f19868e = dVar;
            this.f19869i = dVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f19868e, this.f19869i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f19867d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(this.f19868e, this.f19869i, null);
            this.f19867d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19873d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ kp.d f19875i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f19876d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f19877e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ kp.d f19878i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, kp.d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f19877e = dVar;
                this.f19878i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f19877e, this.f19878i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                InquiryFieldMap inquiryFieldMap;
                Object f10 = gs.b.f();
                int i10 = this.f19876d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f19877e.g();
                String h10 = this.f19878i.h();
                String i11 = this.f19878i.i();
                String e10 = this.f19878i.e();
                String f11 = this.f19878i.f();
                String a10 = this.f19878i.a();
                String a11 = kp.b.a(this.f19878i.b());
                String c10 = this.f19878i.c();
                if (this.f19878i.d() != null) {
                    inquiryFieldMap = new InquiryFieldMap(this.f19878i.d());
                } else {
                    inquiryFieldMap = null;
                }
                FallbackModeService.SessionIdRequest sessionIdRequest = new FallbackModeService.SessionIdRequest(h10, i11, e10, f11, a10, a11, c10, inquiryFieldMap, this.f19878i.j());
                this.f19876d = 1;
                Object c11 = g10.c(sessionIdRequest, this);
                if (c11 == f10) {
                    return f10;
                }
                return c11;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(kp.d dVar, Continuation continuation) {
            super(2, continuation);
            this.f19875i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f19875i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f19873d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f19875i, null);
            this.f19873d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.withpersona.sdk2.inquiry.internal.fallbackmode.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0248d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f19879d;

        /* renamed from: e  reason: collision with root package name */
        Object f19880e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f19881i;

        /* renamed from: p  reason: collision with root package name */
        int f19883p;

        C0248d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f19881i = obj;
            this.f19883p |= Integer.MIN_VALUE;
            return d.this.h(null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19884d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f19886i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ ip.h f19887o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ RequestBody f19888p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f19889d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f19890e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f19891i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ ip.h f19892o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ RequestBody f19893p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, ip.h hVar, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f19890e = dVar;
                this.f19891i = str;
                this.f19892o = hVar;
                this.f19893p = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f19890e, this.f19891i, this.f19892o, this.f19893p, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = gs.b.f();
                int i10 = this.f19889d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f19890e.g();
                String str = this.f19891i;
                ip.h hVar = this.f19892o;
                int f11 = this.f19890e.f();
                long contentLength = this.f19893p.contentLength();
                MediaType contentType = this.f19893p.contentType();
                FallbackModeService.UploadUrlRequest uploadUrlRequest = new FallbackModeService.UploadUrlRequest(contentLength, (contentType == null || (r11 = contentType.toString()) == null) ? "application/json" : "application/json");
                this.f19889d = 1;
                Object d10 = g10.d(str, hVar, f11, uploadUrlRequest, this);
                if (d10 == f10) {
                    return f10;
                }
                return d10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, ip.h hVar, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f19886i = str;
            this.f19887o = hVar;
            this.f19888p = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f19886i, this.f19887o, this.f19888p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f19884d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f19886i, this.f19887o, this.f19888p, null);
            this.f19884d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19894d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f19896i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ RequestBody f19897o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f19898d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f19899e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f19900i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ RequestBody f19901o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f19899e = dVar;
                this.f19900i = str;
                this.f19901o = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f19899e, this.f19900i, this.f19901o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = gs.b.f();
                int i10 = this.f19898d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f19899e.g();
                String str = this.f19900i;
                RequestBody requestBody = this.f19901o;
                this.f19898d = 1;
                Object b10 = g10.b(str, requestBody, this);
                if (b10 == f10) {
                    return f10;
                }
                return b10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(String str, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f19896i = str;
            this.f19897o = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f19896i, this.f19897o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f19894d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f19896i, this.f19897o, null);
            this.f19894d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public d(FallbackModeService service, w moshi, i.a staticTemplateSessionFactory) {
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        Intrinsics.checkNotNullParameter(staticTemplateSessionFactory, "staticTemplateSessionFactory");
        this.f19858a = service;
        this.f19859b = moshi;
        this.f19860c = staticTemplateSessionFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int f() {
        int i10 = this.f19861d + 1;
        this.f19861d = i10;
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
    public final java.lang.Object h(java.lang.String r17, okhttp3.RequestBody r18, ip.h r19, kotlin.coroutines.Continuation r20) {
        /*
            Method dump skipped, instructions count: 323
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.h(java.lang.String, okhttp3.RequestBody, ip.h, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x004a  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0097  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x010c  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x0120  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0132  */
    @Override // ip.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(kp.d r8, kotlin.coroutines.Continuation r9) {
        /*
            Method dump skipped, instructions count: 385
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.a(kp.d, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // ip.a
    public Object b(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, ip.h.f30357d, continuation);
    }

    @Override // ip.a
    public Object c(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, ip.h.f30358e, continuation);
    }

    public final FallbackModeService g() {
        return this.f19858a;
    }
}
