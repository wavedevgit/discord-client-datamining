package com.withpersona.sdk2.inquiry.document.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import js.g;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import tm.o;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0014\u000fB1\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\b\u0012\u0006\u0010\n\u001a\u00020\u0003¢\u0006\u0004\b\u000b\u0010\fJ\u001b\u0010\u000f\u001a\u00020\u000e2\n\u0010\r\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u000f\u0010\u0010J\u0015\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00020\u0011H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017R\u0017\u0010\u0007\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0018\u0010\u0015\u001a\u0004\b\u0018\u0010\u0019R\u0017\u0010\t\u001a\u00020\b8\u0006¢\u0006\f\n\u0004\b\u001a\u0010\u001b\u001a\u0004\b\u001c\u0010\u001dR\u0017\u0010\n\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u001c\u0010\u0015\u001a\u0004\b\u001a\u0010\u0019¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/a;", "Ltm/o;", "Lcom/withpersona/sdk2/inquiry/document/network/a$b;", "", "sessionToken", "Lxn/b;", "service", "documentKind", "", "fileLimit", "fieldKeyDocument", "<init>", "(Ljava/lang/String;Lxn/b;Ljava/lang/String;ILjava/lang/String;)V", "otherWorker", "", "a", "(Ltm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "Lxn/b;", "d", "()Ljava/lang/String;", "e", "I", "f", "()I", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f19517b;

    /* renamed from: c  reason: collision with root package name */
    private final xn.b f19518c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19519d;

    /* renamed from: e  reason: collision with root package name */
    private final int f19520e;

    /* renamed from: f  reason: collision with root package name */
    private final String f19521f;

    /* renamed from: com.withpersona.sdk2.inquiry.document.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0226a {

        /* renamed from: a  reason: collision with root package name */
        private final xn.b f19522a;

        public C0226a(xn.b service) {
            Intrinsics.checkNotNullParameter(service, "service");
            this.f19522a = service;
        }

        public final a a(String sessionToken, String documentKind, String fieldKeyDocument, int i10) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentKind, "documentKind");
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            return new a(sessionToken, this.f19522a, documentKind, i10, fieldKeyDocument, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0227a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo.NetworkErrorInfo f19523a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0227a(InternalErrorInfo.NetworkErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19523a = cause;
            }

            public final InternalErrorInfo.NetworkErrorInfo a() {
                return this.f19523a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof C0227a) && Intrinsics.areEqual(this.f19523a, ((C0227a) obj).f19523a);
            }

            public int hashCode() {
                return this.f19523a.hashCode();
            }

            public String toString() {
                InternalErrorInfo.NetworkErrorInfo networkErrorInfo = this.f19523a;
                return "Error(cause=" + networkErrorInfo + ")";
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.a$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0228b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final String f19524a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0228b(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f19524a = documentId;
            }

            public final String a() {
                return this.f19524a;
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
        int f19525d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f19526e;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f19526e = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x005d, code lost:
            if (r12 == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:18:0x0087, code lost:
            if (r1.emit(r2, r11) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x009b, code lost:
            if (r1.emit(r3, r11) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:22:0x009d, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r12) {
            /*
                r11 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r11.f19525d
                r2 = 3
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L27
                if (r1 == r4) goto L1f
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                goto L1a
            L12:
                java.lang.IllegalStateException r12 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r12.<init>(r0)
                throw r12
            L1a:
                kotlin.c.b(r12)
                goto L9e
            L1f:
                java.lang.Object r1 = r11.f19526e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r12)
                goto L60
            L27:
                kotlin.c.b(r12)
                java.lang.Object r12 = r11.f19526e
                r1 = r12
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                com.withpersona.sdk2.inquiry.document.network.a r12 = com.withpersona.sdk2.inquiry.document.network.a.this
                xn.b r12 = com.withpersona.sdk2.inquiry.document.network.a.b(r12)
                com.withpersona.sdk2.inquiry.document.network.a r5 = com.withpersona.sdk2.inquiry.document.network.a.this
                java.lang.String r5 = com.withpersona.sdk2.inquiry.document.network.a.c(r5)
                com.withpersona.sdk2.inquiry.document.network.CreateDocumentRequest$a r6 = com.withpersona.sdk2.inquiry.document.network.CreateDocumentRequest.f19460c
                com.withpersona.sdk2.inquiry.document.network.a r7 = com.withpersona.sdk2.inquiry.document.network.a.this
                java.lang.String r7 = r7.d()
                com.withpersona.sdk2.inquiry.document.network.a r8 = com.withpersona.sdk2.inquiry.document.network.a.this
                int r8 = r8.f()
                com.withpersona.sdk2.inquiry.document.network.a r9 = com.withpersona.sdk2.inquiry.document.network.a.this
                java.lang.String r9 = r9.e()
                java.lang.String r10 = "document"
                com.withpersona.sdk2.inquiry.document.network.CreateDocumentRequest r6 = r6.a(r10, r7, r8, r9)
                r11.f19526e = r1
                r11.f19525d = r4
                java.lang.Object r12 = r12.a(r5, r6, r11)
                if (r12 != r0) goto L60
                goto L9d
            L60:
                iv.z r12 = (iv.z) r12
                boolean r4 = r12.g()
                r5 = 0
                if (r4 == 0) goto L8a
                com.withpersona.sdk2.inquiry.document.network.a$b$b r2 = new com.withpersona.sdk2.inquiry.document.network.a$b$b
                java.lang.Object r12 = r12.a()
                kotlin.jvm.internal.Intrinsics.checkNotNull(r12)
                com.withpersona.sdk2.inquiry.document.network.CreateDocumentResponse r12 = (com.withpersona.sdk2.inquiry.document.network.CreateDocumentResponse) r12
                com.withpersona.sdk2.inquiry.document.network.CreateDocumentResponse$Data r12 = r12.a()
                java.lang.String r12 = r12.a()
                r2.<init>(r12)
                r11.f19526e = r5
                r11.f19525d = r3
                java.lang.Object r12 = r1.emit(r2, r11)
                if (r12 != r0) goto L9e
                goto L9d
            L8a:
                com.withpersona.sdk2.inquiry.document.network.a$b$a r3 = new com.withpersona.sdk2.inquiry.document.network.a$b$a
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r12 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toErrorInfo(r12)
                r3.<init>(r12)
                r11.f19526e = r5
                r11.f19525d = r2
                java.lang.Object r12 = r1.emit(r3, r11)
                if (r12 != r0) goto L9e
            L9d:
                return r0
            L9e:
                kotlin.Unit r12 = kotlin.Unit.f33298a
                return r12
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public /* synthetic */ a(String str, xn.b bVar, String str2, int i10, String str3, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bVar, str2, i10, str3);
    }

    @Override // tm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof a) {
            a aVar = (a) otherWorker;
            if (Intrinsics.areEqual(this.f19517b, aVar.f19517b) && Intrinsics.areEqual(this.f19521f, aVar.f19521f)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String d() {
        return this.f19519d;
    }

    public final String e() {
        return this.f19521f;
    }

    public final int f() {
        return this.f19520e;
    }

    @Override // tm.o
    public Flow run() {
        return g.v(new c(null));
    }

    private a(String str, xn.b bVar, String str2, int i10, String str3) {
        this.f19517b = str;
        this.f19518c = bVar;
        this.f19519d = str2;
        this.f19520e = i10;
        this.f19521f = str3;
    }
}
