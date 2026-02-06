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
public final class d implements yo.a {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackModeService f18837a;

    /* renamed from: b  reason: collision with root package name */
    private final w f18838b;

    /* renamed from: c  reason: collision with root package name */
    private final i.a f18839c;

    /* renamed from: d  reason: collision with root package name */
    private int f18840d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18841d;

        /* renamed from: e  reason: collision with root package name */
        Object f18842e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f18843i;

        /* renamed from: p  reason: collision with root package name */
        int f18845p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f18843i = obj;
            this.f18845p |= Integer.MIN_VALUE;
            Object c10 = d.this.c(null, this);
            return c10 == wr.b.f() ? c10 : Result.a(c10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18846d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ap.d f18847e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f18848i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18849d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ap.d f18850e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f18851i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ap.d dVar, d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18850e = dVar;
                this.f18851i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18850e, this.f18851i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                String str;
                Object f10 = wr.b.f();
                int i10 = this.f18849d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                String g10 = this.f18850e.g();
                if (g10 != null && g10.length() != 0) {
                    str = "Bearer " + com.withpersona.sdk2.inquiry.internal.h.f18898b.a(this.f18850e.g());
                } else {
                    str = null;
                }
                FallbackModeService g11 = this.f18851i.g();
                FallbackModeService.StatusRequest statusRequest = new FallbackModeService.StatusRequest(this.f18850e.h());
                this.f18849d = 1;
                Object b10 = g11.b(str, statusRequest, this);
                if (b10 == f10) {
                    return f10;
                }
                return b10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(ap.d dVar, d dVar2, Continuation continuation) {
            super(2, continuation);
            this.f18847e = dVar;
            this.f18848i = dVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f18847e, this.f18848i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f18846d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(this.f18847e, this.f18848i, null);
            this.f18846d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18852d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ap.d f18854i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18855d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18856e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ ap.d f18857i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, ap.d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18856e = dVar;
                this.f18857i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18856e, this.f18857i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                InquiryFieldMap inquiryFieldMap;
                Object f10 = wr.b.f();
                int i10 = this.f18855d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18856e.g();
                String h10 = this.f18857i.h();
                String i11 = this.f18857i.i();
                String e10 = this.f18857i.e();
                String f11 = this.f18857i.f();
                String a10 = this.f18857i.a();
                String a11 = ap.b.a(this.f18857i.b());
                String c10 = this.f18857i.c();
                if (this.f18857i.d() != null) {
                    inquiryFieldMap = new InquiryFieldMap(this.f18857i.d());
                } else {
                    inquiryFieldMap = null;
                }
                FallbackModeService.SessionIdRequest sessionIdRequest = new FallbackModeService.SessionIdRequest(h10, i11, e10, f11, a10, a11, c10, inquiryFieldMap, this.f18857i.j());
                this.f18855d = 1;
                Object d10 = g10.d(sessionIdRequest, this);
                if (d10 == f10) {
                    return f10;
                }
                return d10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(ap.d dVar, Continuation continuation) {
            super(2, continuation);
            this.f18854i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f18854i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f18852d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18854i, null);
            this.f18852d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.withpersona.sdk2.inquiry.internal.fallbackmode.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0236d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18858d;

        /* renamed from: e  reason: collision with root package name */
        Object f18859e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f18860i;

        /* renamed from: p  reason: collision with root package name */
        int f18862p;

        C0236d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f18860i = obj;
            this.f18862p |= Integer.MIN_VALUE;
            return d.this.h(null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18863d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f18865i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ yo.h f18866o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ RequestBody f18867p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18868d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18869e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f18870i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ yo.h f18871o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ RequestBody f18872p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, yo.h hVar, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f18869e = dVar;
                this.f18870i = str;
                this.f18871o = hVar;
                this.f18872p = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18869e, this.f18870i, this.f18871o, this.f18872p, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f18868d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18869e.g();
                String str = this.f18870i;
                yo.h hVar = this.f18871o;
                int f11 = this.f18869e.f();
                long contentLength = this.f18872p.contentLength();
                MediaType contentType = this.f18872p.contentType();
                FallbackModeService.UploadUrlRequest uploadUrlRequest = new FallbackModeService.UploadUrlRequest(contentLength, (contentType == null || (r11 = contentType.toString()) == null) ? "application/json" : "application/json");
                this.f18868d = 1;
                Object a10 = g10.a(str, hVar, f11, uploadUrlRequest, this);
                if (a10 == f10) {
                    return f10;
                }
                return a10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, yo.h hVar, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f18865i = str;
            this.f18866o = hVar;
            this.f18867p = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f18865i, this.f18866o, this.f18867p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f18863d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18865i, this.f18866o, this.f18867p, null);
            this.f18863d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18873d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f18875i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ RequestBody f18876o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18877d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18878e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f18879i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ RequestBody f18880o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f18878e = dVar;
                this.f18879i = str;
                this.f18880o = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18878e, this.f18879i, this.f18880o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f18877d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18878e.g();
                String str = this.f18879i;
                RequestBody requestBody = this.f18880o;
                this.f18877d = 1;
                Object c10 = g10.c(str, requestBody, this);
                if (c10 == f10) {
                    return f10;
                }
                return c10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(String str, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f18875i = str;
            this.f18876o = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f18875i, this.f18876o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f18873d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18875i, this.f18876o, null);
            this.f18873d = 1;
            Object enqueueRetriableRequestWithRetry = NetworkUtilsKt.enqueueRetriableRequestWithRetry(aVar, this);
            if (enqueueRetriableRequestWithRetry == f10) {
                return f10;
            }
            return enqueueRetriableRequestWithRetry;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public d(FallbackModeService service, w moshi, i.a staticTemplateSessionFactory) {
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        Intrinsics.checkNotNullParameter(staticTemplateSessionFactory, "staticTemplateSessionFactory");
        this.f18837a = service;
        this.f18838b = moshi;
        this.f18839c = staticTemplateSessionFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int f() {
        int i10 = this.f18840d + 1;
        this.f18840d = i10;
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
    public final java.lang.Object h(java.lang.String r17, okhttp3.RequestBody r18, yo.h r19, kotlin.coroutines.Continuation r20) {
        /*
            Method dump skipped, instructions count: 323
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.h(java.lang.String, okhttp3.RequestBody, yo.h, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // yo.a
    public Object a(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, yo.h.f55503d, continuation);
    }

    @Override // yo.a
    public Object b(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, yo.h.f55504e, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x004a  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0097  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x010c  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x0120  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0132  */
    @Override // yo.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object c(ap.d r8, kotlin.coroutines.Continuation r9) {
        /*
            Method dump skipped, instructions count: 385
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.c(ap.d, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final FallbackModeService g() {
        return this.f18837a;
    }
}
