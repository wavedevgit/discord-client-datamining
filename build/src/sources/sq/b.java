package sq;

import bn.o;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.webrtc.networking.AuthorizeWebRtcResponse;
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
import rs.g;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\f\u0010B\u0019\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0015\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00020\tH\u0016¢\u0006\u0004\b\n\u0010\u000bR\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0016\u0010\u0006\u001a\u0004\u0018\u00010\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000e\u0010\u000f¨\u0006\u0011"}, d2 = {"Lsq/b;", "Lbn/o;", "Lsq/b$b;", "Lsq/a;", "service", "", "jwt", "<init>", "(Lsq/a;Ljava/lang/String;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Lsq/a;", "c", "Ljava/lang/String;", "a", "webrtc_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements o<AbstractC0650b> {

    /* renamed from: b  reason: collision with root package name */
    private final sq.a f50055b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50056c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final sq.a f50057a;

        public a(sq.a service) {
            Intrinsics.checkNotNullParameter(service, "service");
            this.f50057a = service;
        }

        public final b a(String str) {
            return new b(this.f50057a, str);
        }

        public final sq.a b() {
            return this.f50057a;
        }
    }

    /* renamed from: sq.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0650b {

        /* renamed from: sq.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends AbstractC0650b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f50058a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f50058a = cause;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f50058a, ((a) obj).f50058a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f50058a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f50058a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* renamed from: sq.b$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0651b extends AbstractC0650b {

            /* renamed from: a  reason: collision with root package name */
            private final AuthorizeWebRtcResponse f50059a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0651b(AuthorizeWebRtcResponse result) {
                super(null);
                Intrinsics.checkNotNullParameter(result, "result");
                this.f50059a = result;
            }

            public final AuthorizeWebRtcResponse a() {
                return this.f50059a;
            }
        }

        public /* synthetic */ AbstractC0650b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private AbstractC0650b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f50060d;

        /* renamed from: e  reason: collision with root package name */
        int f50061e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f50062i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f50064d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f50065e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, Continuation continuation) {
                super(1, continuation);
                this.f50065e = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f50065e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f50064d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                sq.a aVar = this.f50065e.f50055b;
                String str = this.f50065e.f50056c;
                this.f50064d = 1;
                Object a10 = aVar.a(str, this);
                if (a10 == f10) {
                    return f10;
                }
                return a10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f50062i = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:22:0x0077, code lost:
            if (r1.emit(r4, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x007a, code lost:
            r4 = r1;
            r1 = r15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:27:0x009b, code lost:
            if (r1.emit(r5, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:32:0x00b8, code lost:
            if (r1.emit(r5, r14) == r0) goto L19;
         */
        /* JADX WARN: Removed duplicated region for block: B:31:0x00a2  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r15) {
            /*
                r14 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r14.f50061e
                r2 = 0
                r3 = 4
                r4 = 3
                r5 = 2
                r6 = 1
                if (r1 == 0) goto L3a
                if (r1 == r6) goto L32
                if (r1 == r5) goto L26
                if (r1 == r4) goto L26
                if (r1 != r3) goto L1e
                java.lang.Object r0 = r14.f50062i
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r0 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r0
                kotlin.c.b(r15)
                goto Lbb
            L1e:
                java.lang.IllegalStateException r15 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r15.<init>(r0)
                throw r15
            L26:
                java.lang.Object r1 = r14.f50060d
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r1 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r1
                java.lang.Object r4 = r14.f50062i
                kotlinx.coroutines.flow.FlowCollector r4 = (kotlinx.coroutines.flow.FlowCollector) r4
                kotlin.c.b(r15)
                goto L7c
            L32:
                java.lang.Object r1 = r14.f50062i
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r15)
                goto L57
            L3a:
                kotlin.c.b(r15)
                java.lang.Object r15 = r14.f50062i
                kotlinx.coroutines.flow.FlowCollector r15 = (kotlinx.coroutines.flow.FlowCollector) r15
                sq.b$c$a r1 = new sq.b$c$a
                sq.b r7 = sq.b.this
                r1.<init>(r7, r2)
                r14.f50062i = r15
                r14.f50061e = r6
                java.lang.Object r1 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.enqueueRetriableRequestWithRetry(r1, r14)
                if (r1 != r0) goto L54
                goto Lba
            L54:
                r13 = r1
                r1 = r15
                r15 = r13
            L57:
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r15 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r15
                boolean r6 = r15 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success
                if (r6 == 0) goto L9e
                r6 = r15
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Success r6 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success) r6
                java.lang.Object r6 = r6.getResponse()
                com.withpersona.sdk2.inquiry.webrtc.networking.AuthorizeWebRtcResponse r6 = (com.withpersona.sdk2.inquiry.webrtc.networking.AuthorizeWebRtcResponse) r6
                if (r6 == 0) goto L7f
                sq.b$b$b r4 = new sq.b$b$b
                r4.<init>(r6)
                r14.f50062i = r1
                r14.f50060d = r15
                r14.f50061e = r5
                java.lang.Object r4 = r1.emit(r4, r14)
                if (r4 != r0) goto L7a
                goto Lba
            L7a:
                r4 = r1
                r1 = r15
            L7c:
                r15 = r1
                r1 = r4
                goto L9e
            L7f:
                sq.b$b$a r5 = new sq.b$b$a
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r6 = new com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo
                r11 = 8
                r12 = 0
                r7 = 0
                java.lang.String r8 = "Expected body to be non-null."
                r9 = 0
                r10 = 0
                r6.<init>(r7, r8, r9, r10, r11, r12)
                r5.<init>(r6)
                r14.f50062i = r1
                r14.f50060d = r15
                r14.f50061e = r4
                java.lang.Object r4 = r1.emit(r5, r14)
                if (r4 != r0) goto L7a
                goto Lba
            L9e:
                boolean r4 = r15 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure
                if (r4 == 0) goto Lbb
                r4 = r15
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Failure r4 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure) r4
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r4 = r4.getNetworkErrorInfo()
                sq.b$b$a r5 = new sq.b$b$a
                r5.<init>(r4)
                r14.f50062i = r15
                r14.f50060d = r2
                r14.f50061e = r3
                java.lang.Object r15 = r1.emit(r5, r14)
                if (r15 != r0) goto Lbb
            Lba:
                return r0
            Lbb:
                kotlin.Unit r15 = kotlin.Unit.f32056a
                return r15
            */
            throw new UnsupportedOperationException("Method not decompiled: sq.b.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public b(sq.a service, String str) {
        Intrinsics.checkNotNullParameter(service, "service");
        this.f50055b = service;
        this.f50056c = str;
    }

    @Override // bn.o
    public boolean a(o oVar) {
        return o.b.a(this, oVar);
    }

    @Override // bn.o
    public Flow run() {
        return g.v(new c(null));
    }
}
