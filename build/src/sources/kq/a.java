package kq;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.ui.network.LocationData;
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
import ks.g;
import um.o;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\b\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0011\u000fB!\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\u0015\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00020\nH\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u001b\u0010\u000f\u001a\u00020\u000e2\n\u0010\r\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u000f\u0010\u0010R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0005\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0013\u0010\u0012R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015¨\u0006\u0016"}, d2 = {"Lkq/a;", "Lum/o;", "Lkq/a$b;", "", "sessionToken", "addressId", "Lkq/b;", "uiService", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lkq/b;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Lum/o;)Z", "b", "Ljava/lang/String;", "c", "d", "Lkq/b;", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f36330b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36331c;

    /* renamed from: d  reason: collision with root package name */
    private final kq.b f36332d;

    /* renamed from: kq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0454a {

        /* renamed from: a  reason: collision with root package name */
        private final kq.b f36333a;

        public C0454a(kq.b uiService) {
            Intrinsics.checkNotNullParameter(uiService, "uiService");
            this.f36333a = uiService;
        }

        public final a a(String sessionToken, String addressId) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(addressId, "addressId");
            return new a(sessionToken, addressId, this.f36333a, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* renamed from: kq.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0455a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f36334a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0455a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f36334a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f36334a;
            }
        }

        /* renamed from: kq.a$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0456b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final LocationData f36335a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0456b(LocationData result) {
                super(null);
                Intrinsics.checkNotNullParameter(result, "result");
                this.f36335a = result;
            }

            public final LocationData a() {
                return this.f36335a;
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
        Object f36336d;

        /* renamed from: e  reason: collision with root package name */
        int f36337e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f36338i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: kq.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0457a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f36340d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ a f36341e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0457a(a aVar, Continuation continuation) {
                super(1, continuation);
                this.f36341e = aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0457a(this.f36341e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f36340d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                kq.b bVar = this.f36341e.f36332d;
                String str = this.f36341e.f36330b;
                String str2 = this.f36341e.f36331c;
                this.f36340d = 1;
                Object b10 = bVar.b(str, str2, this);
                if (b10 == f10) {
                    return f10;
                }
                return b10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0457a) create(continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f36338i = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (r5 == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x007d, code lost:
            if (r1.emit(r3, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x0080, code lost:
            r3 = r1;
            r1 = r5;
         */
        /* JADX WARN: Code restructure failed: missing block: B:29:0x00a1, code lost:
            if (r1.emit(r4, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:34:0x00be, code lost:
            if (r1.emit(r4, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:35:0x00c0, code lost:
            return r0;
         */
        /* JADX WARN: Removed duplicated region for block: B:33:0x00a8  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r15) {
            /*
                r14 = this;
                java.lang.Object r0 = pr.b.f()
                int r1 = r14.f36337e
                r2 = 4
                r3 = 3
                r4 = 2
                r5 = 1
                r6 = 0
                if (r1 == 0) goto L3b
                if (r1 == r5) goto L32
                if (r1 == r4) goto L26
                if (r1 == r3) goto L26
                if (r1 != r2) goto L1e
                java.lang.Object r0 = r14.f36338i
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r0 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r0
                kotlin.c.b(r15)
                goto Lc1
            L1e:
                java.lang.IllegalStateException r0 = new java.lang.IllegalStateException
                java.lang.String r1 = "call to 'resume' before 'invoke' with coroutine"
                r0.<init>(r1)
                throw r0
            L26:
                java.lang.Object r1 = r14.f36336d
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r1 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r1
                java.lang.Object r3 = r14.f36338i
                kotlinx.coroutines.flow.FlowCollector r3 = (kotlinx.coroutines.flow.FlowCollector) r3
                kotlin.c.b(r15)
                goto L82
            L32:
                java.lang.Object r1 = r14.f36338i
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r15)
                r5 = r15
                goto L55
            L3b:
                kotlin.c.b(r15)
                java.lang.Object r1 = r14.f36338i
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kq.a$c$a r7 = new kq.a$c$a
                kq.a r8 = kq.a.this
                r7.<init>(r8, r6)
                r14.f36338i = r1
                r14.f36337e = r5
                java.lang.Object r5 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.enqueueRetriableRequestWithRetry(r7, r14)
                if (r5 != r0) goto L55
                goto Lc0
            L55:
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r5 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r5
                boolean r7 = r5 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success
                if (r7 == 0) goto La4
                r7 = r5
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Success r7 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success) r7
                java.lang.Object r7 = r7.getResponse()
                com.withpersona.sdk2.inquiry.ui.network.AddressDetailsResponse r7 = (com.withpersona.sdk2.inquiry.ui.network.AddressDetailsResponse) r7
                if (r7 == 0) goto L6b
                com.withpersona.sdk2.inquiry.ui.network.LocationData r7 = r7.a()
                goto L6c
            L6b:
                r7 = r6
            L6c:
                if (r7 == 0) goto L85
                kq.a$b$b r3 = new kq.a$b$b
                r3.<init>(r7)
                r14.f36338i = r1
                r14.f36336d = r5
                r14.f36337e = r4
                java.lang.Object r3 = r1.emit(r3, r14)
                if (r3 != r0) goto L80
                goto Lc0
            L80:
                r3 = r1
                r1 = r5
            L82:
                r5 = r1
                r1 = r3
                goto La4
            L85:
                kq.a$b$a r4 = new kq.a$b$a
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r7 = new com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo
                r12 = 8
                r13 = 0
                r8 = 0
                java.lang.String r9 = "Expected body attributes to be non-null."
                r10 = 0
                r11 = 0
                r7.<init>(r8, r9, r10, r11, r12, r13)
                r4.<init>(r7)
                r14.f36338i = r1
                r14.f36336d = r5
                r14.f36337e = r3
                java.lang.Object r3 = r1.emit(r4, r14)
                if (r3 != r0) goto L80
                goto Lc0
            La4:
                boolean r3 = r5 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure
                if (r3 == 0) goto Lc1
                r3 = r5
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Failure r3 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure) r3
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r3 = r3.getNetworkErrorInfo()
                kq.a$b$a r4 = new kq.a$b$a
                r4.<init>(r3)
                r14.f36338i = r5
                r14.f36336d = r6
                r14.f36337e = r2
                java.lang.Object r1 = r1.emit(r4, r14)
                if (r1 != r0) goto Lc1
            Lc0:
                return r0
            Lc1:
                kotlin.Unit r0 = kotlin.Unit.f33074a
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: kq.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public /* synthetic */ a(String str, String str2, kq.b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, bVar);
    }

    @Override // um.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof a) && Intrinsics.areEqual(this.f36331c, ((a) otherWorker).f36331c)) {
            return true;
        }
        return false;
    }

    @Override // um.o
    public Flow run() {
        return g.v(new c(null));
    }

    private a(String str, String str2, kq.b bVar) {
        this.f36330b = str;
        this.f36331c = str2;
        this.f36332d = bVar;
    }
}
