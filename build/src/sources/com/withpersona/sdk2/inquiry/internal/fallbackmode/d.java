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
public final class d implements wo.a {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackModeService f18857a;

    /* renamed from: b  reason: collision with root package name */
    private final w f18858b;

    /* renamed from: c  reason: collision with root package name */
    private final i.a f18859c;

    /* renamed from: d  reason: collision with root package name */
    private int f18860d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18861d;

        /* renamed from: e  reason: collision with root package name */
        Object f18862e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f18863i;

        /* renamed from: p  reason: collision with root package name */
        int f18865p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f18863i = obj;
            this.f18865p |= Integer.MIN_VALUE;
            Object c10 = d.this.c(null, this);
            return c10 == ur.b.f() ? c10 : Result.a(c10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18866d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ yo.d f18867e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f18868i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18869d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ yo.d f18870e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f18871i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(yo.d dVar, d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18870e = dVar;
                this.f18871i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18870e, this.f18871i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                String str;
                Object f10 = ur.b.f();
                int i10 = this.f18869d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                String g10 = this.f18870e.g();
                if (g10 != null && g10.length() != 0) {
                    str = "Bearer " + com.withpersona.sdk2.inquiry.internal.h.f18918b.a(this.f18870e.g());
                } else {
                    str = null;
                }
                FallbackModeService g11 = this.f18871i.g();
                FallbackModeService.StatusRequest statusRequest = new FallbackModeService.StatusRequest(this.f18870e.h());
                this.f18869d = 1;
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
        b(yo.d dVar, d dVar2, Continuation continuation) {
            super(2, continuation);
            this.f18867e = dVar;
            this.f18868i = dVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f18867e, this.f18868i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f18866d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(this.f18867e, this.f18868i, null);
            this.f18866d = 1;
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
        int f18872d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ yo.d f18874i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18875d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18876e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ yo.d f18877i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, yo.d dVar2, Continuation continuation) {
                super(1, continuation);
                this.f18876e = dVar;
                this.f18877i = dVar2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18876e, this.f18877i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                InquiryFieldMap inquiryFieldMap;
                Object f10 = ur.b.f();
                int i10 = this.f18875d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18876e.g();
                String h10 = this.f18877i.h();
                String i11 = this.f18877i.i();
                String e10 = this.f18877i.e();
                String f11 = this.f18877i.f();
                String a10 = this.f18877i.a();
                String a11 = yo.b.a(this.f18877i.b());
                String c10 = this.f18877i.c();
                if (this.f18877i.d() != null) {
                    inquiryFieldMap = new InquiryFieldMap(this.f18877i.d());
                } else {
                    inquiryFieldMap = null;
                }
                FallbackModeService.SessionIdRequest sessionIdRequest = new FallbackModeService.SessionIdRequest(h10, i11, e10, f11, a10, a11, c10, inquiryFieldMap, this.f18877i.j());
                this.f18875d = 1;
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
        c(yo.d dVar, Continuation continuation) {
            super(2, continuation);
            this.f18874i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f18874i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f18872d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18874i, null);
            this.f18872d = 1;
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
    public static final class C0244d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f18878d;

        /* renamed from: e  reason: collision with root package name */
        Object f18879e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f18880i;

        /* renamed from: p  reason: collision with root package name */
        int f18882p;

        C0244d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f18880i = obj;
            this.f18882p |= Integer.MIN_VALUE;
            return d.this.h(null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18883d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f18885i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ wo.h f18886o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ RequestBody f18887p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18888d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18889e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f18890i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ wo.h f18891o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ RequestBody f18892p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, wo.h hVar, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f18889e = dVar;
                this.f18890i = str;
                this.f18891o = hVar;
                this.f18892p = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18889e, this.f18890i, this.f18891o, this.f18892p, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = ur.b.f();
                int i10 = this.f18888d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18889e.g();
                String str = this.f18890i;
                wo.h hVar = this.f18891o;
                int f11 = this.f18889e.f();
                long contentLength = this.f18892p.contentLength();
                MediaType contentType = this.f18892p.contentType();
                FallbackModeService.UploadUrlRequest uploadUrlRequest = new FallbackModeService.UploadUrlRequest(contentLength, (contentType == null || (r11 = contentType.toString()) == null) ? "application/json" : "application/json");
                this.f18888d = 1;
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
        e(String str, wo.h hVar, RequestBody requestBody, Continuation continuation) {
            super(2, continuation);
            this.f18885i = str;
            this.f18886o = hVar;
            this.f18887p = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f18885i, this.f18886o, this.f18887p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f18883d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18885i, this.f18886o, this.f18887p, null);
            this.f18883d = 1;
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
        int f18893d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f18895i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ RequestBody f18896o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18897d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18898e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f18899i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ RequestBody f18900o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, String str, RequestBody requestBody, Continuation continuation) {
                super(1, continuation);
                this.f18898e = dVar;
                this.f18899i = str;
                this.f18900o = requestBody;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18898e, this.f18899i, this.f18900o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = ur.b.f();
                int i10 = this.f18897d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                FallbackModeService g10 = this.f18898e.g();
                String str = this.f18899i;
                RequestBody requestBody = this.f18900o;
                this.f18897d = 1;
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
            this.f18895i = str;
            this.f18896o = requestBody;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f18895i, this.f18896o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f18893d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            a aVar = new a(d.this, this.f18895i, this.f18896o, null);
            this.f18893d = 1;
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
        this.f18857a = service;
        this.f18858b = moshi;
        this.f18859c = staticTemplateSessionFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int f() {
        int i10 = this.f18860d + 1;
        this.f18860d = i10;
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
    public final java.lang.Object h(java.lang.String r17, okhttp3.RequestBody r18, wo.h r19, kotlin.coroutines.Continuation r20) {
        /*
            Method dump skipped, instructions count: 323
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.h(java.lang.String, okhttp3.RequestBody, wo.h, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // wo.a
    public Object a(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, wo.h.f53188d, continuation);
    }

    @Override // wo.a
    public Object b(String str, RequestBody requestBody, Continuation continuation) {
        return h(str, requestBody, wo.h.f53189e, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x004a  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0097  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x010c  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x0120  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0132  */
    @Override // wo.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object c(yo.d r8, kotlin.coroutines.Continuation r9) {
        /*
            Method dump skipped, instructions count: 385
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.fallbackmode.d.c(yo.d, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final FallbackModeService g() {
        return this.f18857a;
    }
}
