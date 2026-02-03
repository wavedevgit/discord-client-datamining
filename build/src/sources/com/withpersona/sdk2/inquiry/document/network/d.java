package com.withpersona.sdk2.inquiry.document.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ms.g;
import wm.o;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0010\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u001a\u0015BO\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\r\u001a\u00020\f\u0012\f\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000f0\u000e¢\u0006\u0004\b\u0011\u0010\u0012J\u001b\u0010\u0015\u001a\u00020\u00142\n\u0010\u0013\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0015\u0010\u0016J\u0015\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00020\u0017H\u0016¢\u0006\u0004\b\u0018\u0010\u0019R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0014\u0010\u0007\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001bR\u0014\u0010\b\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u001bR\u0014\u0010\t\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b \u0010\u001bR\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\"R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u001a\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000f0\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010&¨\u0006'"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/d;", "Lwm/o;", "Lcom/withpersona/sdk2/inquiry/document/network/d$b;", "", "sessionToken", "Lao/b;", "service", "inquiryId", "fromStep", "fromComponent", "Lco/a;", "fallbackModeManager", "Lnp/a;", "dataCollector", "", "Lyn/d;", "documents", "<init>", "(Ljava/lang/String;Lao/b;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lco/a;Lnp/a;Ljava/util/List;)V", "otherWorker", "", "a", "(Lwm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "Lao/b;", "d", "e", "f", "g", "Lco/a;", "h", "Lnp/a;", "i", "Ljava/util/List;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f18193b;

    /* renamed from: c  reason: collision with root package name */
    private final ao.b f18194c;

    /* renamed from: d  reason: collision with root package name */
    private final String f18195d;

    /* renamed from: e  reason: collision with root package name */
    private final String f18196e;

    /* renamed from: f  reason: collision with root package name */
    private final String f18197f;

    /* renamed from: g  reason: collision with root package name */
    private final co.a f18198g;

    /* renamed from: h  reason: collision with root package name */
    private final np.a f18199h;

    /* renamed from: i  reason: collision with root package name */
    private final List f18200i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ao.b f18201a;

        /* renamed from: b  reason: collision with root package name */
        private final co.a f18202b;

        /* renamed from: c  reason: collision with root package name */
        private final np.a f18203c;

        public a(ao.b service, co.a fallbackModeManager, np.a dataCollector) {
            Intrinsics.checkNotNullParameter(service, "service");
            Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
            Intrinsics.checkNotNullParameter(dataCollector, "dataCollector");
            this.f18201a = service;
            this.f18202b = fallbackModeManager;
            this.f18203c = dataCollector;
        }

        public final d a(String sessionToken, String inquiryId, String fromStep, String fromComponent, List documents) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(documents, "documents");
            return new d(sessionToken, this.f18201a, inquiryId, fromStep, fromComponent, this.f18202b, this.f18203c, documents, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f18204a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f18204a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f18204a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof a) && Intrinsics.areEqual(this.f18204a, ((a) obj).f18204a);
            }

            public int hashCode() {
                return this.f18204a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f18204a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.d$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0223b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0223b f18205a = new C0223b();

            private C0223b() {
                super(null);
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f18206d;

        /* renamed from: e  reason: collision with root package name */
        int f18207e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f18208i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18210d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ d f18211e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, Continuation continuation) {
                super(1, continuation);
                this.f18211e = dVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18211e, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x0051, code lost:
                if (r8 == r0) goto L18;
             */
            /* JADX WARN: Code restructure failed: missing block: B:18:0x0081, code lost:
                if (r8 == r0) goto L18;
             */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r8) {
                /*
                    r7 = this;
                    java.lang.Object r0 = rr.b.f()
                    int r1 = r7.f18210d
                    r2 = 2
                    r3 = 1
                    if (r1 == 0) goto L1e
                    if (r1 == r3) goto L1a
                    if (r1 != r2) goto L12
                    kotlin.c.b(r8)
                    goto L84
                L12:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r0)
                    throw r8
                L1a:
                    kotlin.c.b(r8)
                    goto L54
                L1e:
                    kotlin.c.b(r8)
                    com.withpersona.sdk2.inquiry.document.network.d r8 = r7.f18211e
                    co.a r8 = com.withpersona.sdk2.inquiry.document.network.d.d(r8)
                    boolean r8 = r8.b()
                    if (r8 == 0) goto L57
                    com.withpersona.sdk2.inquiry.document.network.d r8 = r7.f18211e
                    co.a r8 = com.withpersona.sdk2.inquiry.document.network.d.d(r8)
                    com.withpersona.sdk2.inquiry.document.network.d r1 = r7.f18211e
                    java.lang.String r1 = com.withpersona.sdk2.inquiry.document.network.d.i(r1)
                    com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest$a r2 = com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest.f18117c
                    com.withpersona.sdk2.inquiry.document.network.d r4 = r7.f18211e
                    java.lang.String r4 = com.withpersona.sdk2.inquiry.document.network.d.f(r4)
                    com.withpersona.sdk2.inquiry.document.network.d r5 = r7.f18211e
                    java.lang.String r5 = com.withpersona.sdk2.inquiry.document.network.d.e(r5)
                    com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest r2 = r2.a(r4, r5)
                    r7.f18210d = r3
                    java.lang.Object r8 = r8.a(r1, r2, r7)
                    if (r8 != r0) goto L54
                    goto L83
                L54:
                    lv.z r8 = (lv.z) r8
                    return r8
                L57:
                    com.withpersona.sdk2.inquiry.document.network.d r8 = r7.f18211e
                    ao.b r8 = com.withpersona.sdk2.inquiry.document.network.d.h(r8)
                    com.withpersona.sdk2.inquiry.document.network.d r1 = r7.f18211e
                    java.lang.String r1 = com.withpersona.sdk2.inquiry.document.network.d.i(r1)
                    com.withpersona.sdk2.inquiry.document.network.d r3 = r7.f18211e
                    java.lang.String r3 = com.withpersona.sdk2.inquiry.document.network.d.g(r3)
                    com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest$a r4 = com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest.f18117c
                    com.withpersona.sdk2.inquiry.document.network.d r5 = r7.f18211e
                    java.lang.String r5 = com.withpersona.sdk2.inquiry.document.network.d.f(r5)
                    com.withpersona.sdk2.inquiry.document.network.d r6 = r7.f18211e
                    java.lang.String r6 = com.withpersona.sdk2.inquiry.document.network.d.e(r6)
                    com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest r4 = r4.a(r5, r6)
                    r7.f18210d = r2
                    java.lang.Object r8 = r8.e(r1, r3, r4, r7)
                    if (r8 != r0) goto L84
                L83:
                    return r0
                L84:
                    lv.z r8 = (lv.z) r8
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.d.c.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f18208i = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:26:0x00a6, code lost:
            if (r1.emit(r5, r10) == r0) goto L18;
         */
        /* JADX WARN: Removed duplicated region for block: B:25:0x0090  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r11) {
            /*
                r10 = this;
                java.lang.Object r0 = rr.b.f()
                int r1 = r10.f18207e
                r2 = 0
                r3 = 3
                r4 = 2
                r5 = 1
                if (r1 == 0) goto L37
                if (r1 == r5) goto L2f
                if (r1 == r4) goto L23
                if (r1 != r3) goto L1b
                java.lang.Object r0 = r10.f18208i
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r0 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r0
                kotlin.c.b(r11)
                goto La9
            L1b:
                java.lang.IllegalStateException r11 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r11.<init>(r0)
                throw r11
            L23:
                java.lang.Object r1 = r10.f18206d
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r1 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r1
                java.lang.Object r4 = r10.f18208i
                kotlinx.coroutines.flow.FlowCollector r4 = (kotlinx.coroutines.flow.FlowCollector) r4
                kotlin.c.b(r11)
                goto L8a
            L2f:
                java.lang.Object r1 = r10.f18208i
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r11)
                goto L6d
            L37:
                kotlin.c.b(r11)
                java.lang.Object r11 = r10.f18208i
                kotlinx.coroutines.flow.FlowCollector r11 = (kotlinx.coroutines.flow.FlowCollector) r11
                com.withpersona.sdk2.inquiry.document.network.d r1 = com.withpersona.sdk2.inquiry.document.network.d.this
                np.a r1 = com.withpersona.sdk2.inquiry.document.network.d.b(r1)
                ao.c r6 = new ao.c
                com.withpersona.sdk2.inquiry.document.network.d r7 = com.withpersona.sdk2.inquiry.document.network.d.this
                java.lang.String r7 = com.withpersona.sdk2.inquiry.document.network.d.f(r7)
                com.withpersona.sdk2.inquiry.document.network.d r8 = com.withpersona.sdk2.inquiry.document.network.d.this
                java.util.List r8 = com.withpersona.sdk2.inquiry.document.network.d.c(r8)
                r6.<init>(r7, r8)
                r1.b(r6)
                com.withpersona.sdk2.inquiry.document.network.d$c$a r1 = new com.withpersona.sdk2.inquiry.document.network.d$c$a
                com.withpersona.sdk2.inquiry.document.network.d r6 = com.withpersona.sdk2.inquiry.document.network.d.this
                r1.<init>(r6, r2)
                r10.f18208i = r11
                r10.f18207e = r5
                java.lang.Object r1 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.enqueueVerificationRequestWithRetry(r1, r10)
                if (r1 != r0) goto L6a
                goto La8
            L6a:
                r9 = r1
                r1 = r11
                r11 = r9
            L6d:
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r11 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r11
                boolean r5 = r11 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success
                if (r5 == 0) goto L8c
                r5 = r11
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Success r5 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success) r5
                r5.getResponse()
                com.withpersona.sdk2.inquiry.document.network.d$b$b r5 = com.withpersona.sdk2.inquiry.document.network.d.b.C0223b.f18205a
                r10.f18208i = r1
                r10.f18206d = r11
                r10.f18207e = r4
                java.lang.Object r4 = r1.emit(r5, r10)
                if (r4 != r0) goto L88
                goto La8
            L88:
                r4 = r1
                r1 = r11
            L8a:
                r11 = r1
                r1 = r4
            L8c:
                boolean r4 = r11 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure
                if (r4 == 0) goto La9
                r4 = r11
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Failure r4 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure) r4
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r4 = r4.getNetworkErrorInfo()
                com.withpersona.sdk2.inquiry.document.network.d$b$a r5 = new com.withpersona.sdk2.inquiry.document.network.d$b$a
                r5.<init>(r4)
                r10.f18208i = r11
                r10.f18206d = r2
                r10.f18207e = r3
                java.lang.Object r11 = r1.emit(r5, r10)
                if (r11 != r0) goto La9
            La8:
                return r0
            La9:
                kotlin.Unit r11 = kotlin.Unit.f32464a
                return r11
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.d.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public /* synthetic */ d(String str, ao.b bVar, String str2, String str3, String str4, co.a aVar, np.a aVar2, List list, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bVar, str2, str3, str4, aVar, aVar2, list);
    }

    @Override // wm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof d) && Intrinsics.areEqual(this.f18193b, ((d) otherWorker).f18193b)) {
            return true;
        }
        return false;
    }

    @Override // wm.o
    public Flow run() {
        return g.v(new c(null));
    }

    private d(String str, ao.b bVar, String str2, String str3, String str4, co.a aVar, np.a aVar2, List list) {
        this.f18193b = str;
        this.f18194c = bVar;
        this.f18195d = str2;
        this.f18196e = str3;
        this.f18197f = str4;
        this.f18198g = aVar;
        this.f18199h = aVar2;
        this.f18200i = list;
    }
}
