package xn;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import js.g;
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
import tm.o;
import vn.d;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0013\u000eB)\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\u001b\u0010\u000e\u001a\u00020\r2\n\u0010\f\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u0015\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00020\u0010H\u0016¢\u0006\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0017\u0010\u0007\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0017\u0010\u0014\u001a\u0004\b\u0018\u0010\u0019R\u0017\u0010\t\u001a\u00020\b8\u0006¢\u0006\f\n\u0004\b\u001a\u0010\u001b\u001a\u0004\b\u0017\u0010\u001c¨\u0006\u001d"}, d2 = {"Lxn/a;", "Ltm/o;", "Lxn/a$b;", "", "sessionToken", "Lxn/b;", "service", "documentId", "Lvn/d$b;", "remoteDocument", "<init>", "(Ljava/lang/String;Lxn/b;Ljava/lang/String;Lvn/d$b;)V", "otherWorker", "", "a", "(Ltm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "Lxn/b;", "d", "getDocumentId", "()Ljava/lang/String;", "e", "Lvn/d$b;", "()Lvn/d$b;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f53482b;

    /* renamed from: c  reason: collision with root package name */
    private final xn.b f53483c;

    /* renamed from: d  reason: collision with root package name */
    private final String f53484d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f53485e;

    /* renamed from: xn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0741a {

        /* renamed from: a  reason: collision with root package name */
        private final xn.b f53486a;

        public C0741a(xn.b service) {
            Intrinsics.checkNotNullParameter(service, "service");
            this.f53486a = service;
        }

        public final a a(String sessionToken, String documentId, d.b remoteDocument) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentId, "documentId");
            Intrinsics.checkNotNullParameter(remoteDocument, "remoteDocument");
            return new a(sessionToken, this.f53486a, documentId, remoteDocument, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* renamed from: xn.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0742a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f53487a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0742a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f53487a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f53487a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0742a) && Intrinsics.areEqual(this.f53487a, ((C0742a) obj).f53487a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f53487a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f53487a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* renamed from: xn.a$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0743b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0743b f53488a = new C0743b();

            private C0743b() {
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
        Object f53489d;

        /* renamed from: e  reason: collision with root package name */
        int f53490e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f53491i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: xn.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0744a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f53493d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ a f53494e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0744a(a aVar, Continuation continuation) {
                super(1, continuation);
                this.f53494e = aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0744a(this.f53494e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f53493d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                xn.b bVar = this.f53494e.f53483c;
                String str = this.f53494e.f53482b;
                String b10 = this.f53494e.d().b();
                this.f53493d = 1;
                Object d10 = bVar.d(str, b10, this);
                if (d10 == f10) {
                    return f10;
                }
                return d10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0744a) create(continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f53491i = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:26:0x008c, code lost:
            if (r1.emit(r5, r8) == r0) goto L18;
         */
        /* JADX WARN: Removed duplicated region for block: B:25:0x0076  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r9) {
            /*
                r8 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r8.f53490e
                r2 = 0
                r3 = 3
                r4 = 2
                r5 = 1
                if (r1 == 0) goto L37
                if (r1 == r5) goto L2f
                if (r1 == r4) goto L23
                if (r1 != r3) goto L1b
                java.lang.Object r0 = r8.f53491i
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r0 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r0
                kotlin.c.b(r9)
                goto L8f
            L1b:
                java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r9.<init>(r0)
                throw r9
            L23:
                java.lang.Object r1 = r8.f53489d
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r1 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r1
                java.lang.Object r4 = r8.f53491i
                kotlinx.coroutines.flow.FlowCollector r4 = (kotlinx.coroutines.flow.FlowCollector) r4
                kotlin.c.b(r9)
                goto L70
            L2f:
                java.lang.Object r1 = r8.f53491i
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r9)
                goto L53
            L37:
                kotlin.c.b(r9)
                java.lang.Object r9 = r8.f53491i
                kotlinx.coroutines.flow.FlowCollector r9 = (kotlinx.coroutines.flow.FlowCollector) r9
                xn.a$c$a r1 = new xn.a$c$a
                xn.a r6 = xn.a.this
                r1.<init>(r6, r2)
                r8.f53491i = r9
                r8.f53490e = r5
                java.lang.Object r1 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.enqueueRetriableRequestWithRetry(r1, r8)
                if (r1 != r0) goto L50
                goto L8e
            L50:
                r7 = r1
                r1 = r9
                r9 = r7
            L53:
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult r9 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult) r9
                boolean r5 = r9 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success
                if (r5 == 0) goto L72
                r5 = r9
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Success r5 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Success) r5
                r5.getResponse()
                xn.a$b$b r5 = xn.a.b.C0743b.f53488a
                r8.f53491i = r1
                r8.f53489d = r9
                r8.f53490e = r4
                java.lang.Object r4 = r1.emit(r5, r8)
                if (r4 != r0) goto L6e
                goto L8e
            L6e:
                r4 = r1
                r1 = r9
            L70:
                r9 = r1
                r1 = r4
            L72:
                boolean r4 = r9 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure
                if (r4 == 0) goto L8f
                r4 = r9
                com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Failure r4 = (com.withpersona.sdk2.inquiry.network.core.NetworkCallResult.Failure) r4
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r4 = r4.getNetworkErrorInfo()
                xn.a$b$a r5 = new xn.a$b$a
                r5.<init>(r4)
                r8.f53491i = r9
                r8.f53489d = r2
                r8.f53490e = r3
                java.lang.Object r9 = r1.emit(r5, r8)
                if (r9 != r0) goto L8f
            L8e:
                return r0
            L8f:
                kotlin.Unit r9 = kotlin.Unit.f33298a
                return r9
            */
            throw new UnsupportedOperationException("Method not decompiled: xn.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public /* synthetic */ a(String str, xn.b bVar, String str2, d.b bVar2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bVar, str2, bVar2);
    }

    @Override // tm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof a) {
            a aVar = (a) otherWorker;
            if (Intrinsics.areEqual(this.f53482b, aVar.f53482b) && Intrinsics.areEqual(this.f53485e, aVar.f53485e)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final d.b d() {
        return this.f53485e;
    }

    @Override // tm.o
    public Flow run() {
        return g.v(new c(null));
    }

    private a(String str, xn.b bVar, String str2, d.b bVar2) {
        this.f53482b = str;
        this.f53483c = bVar;
        this.f53484d = str2;
        this.f53485e = bVar2;
    }
}
