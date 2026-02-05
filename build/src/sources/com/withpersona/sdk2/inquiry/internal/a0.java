package com.withpersona.sdk2.inquiry.internal;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\f\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u0011B/\b\u0007\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\u0015\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00020\fH\u0016¢\u0006\u0004\b\r\u0010\u000eJ\u001b\u0010\u0011\u001a\u00020\u00102\n\u0010\u000f\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0004\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0013\u0010\u0014\u001a\u0004\b\u0015\u0010\u0016R\u0017\u0010\u0005\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0017\u0010\u0014\u001a\u0004\b\u0018\u0010\u0016R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0019R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001b¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/a0;", "Lzm/o;", "Lcom/withpersona/sdk2/inquiry/internal/network/i;", "", "sessionToken", "inquiryId", "Lwp/g;", "inquirySessionConfig", "Lcom/withpersona/sdk2/inquiry/internal/network/e;", "inquiryApiHelper", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lwp/g;Lcom/withpersona/sdk2/inquiry/internal/network/e;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Lzm/o;)Z", "b", "Ljava/lang/String;", "d", "()Ljava/lang/String;", "c", "getInquiryId", "Lwp/g;", "e", "Lcom/withpersona/sdk2/inquiry/internal/network/e;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements zm.o<com.withpersona.sdk2.inquiry.internal.network.i> {

    /* renamed from: b  reason: collision with root package name */
    private final String f18705b;

    /* renamed from: c  reason: collision with root package name */
    private final String f18706c;

    /* renamed from: d  reason: collision with root package name */
    private final wp.g f18707d;

    /* renamed from: e  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.e f18708e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a0 a(String str, String str2, wp.g gVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18709d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f18710e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f18710e = obj;
            return bVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0044, code lost:
            if (r7 == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0050, code lost:
            if (r1.emit(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x0052, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = ur.b.f()
                int r1 = r6.f18709d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L22
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r7)
                goto L53
            L12:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1a:
                java.lang.Object r1 = r6.f18710e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r7)
                goto L47
            L22:
                kotlin.c.b(r7)
                java.lang.Object r7 = r6.f18710e
                r1 = r7
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                com.withpersona.sdk2.inquiry.internal.a0 r7 = com.withpersona.sdk2.inquiry.internal.a0.this
                com.withpersona.sdk2.inquiry.internal.network.e r7 = com.withpersona.sdk2.inquiry.internal.a0.b(r7)
                com.withpersona.sdk2.inquiry.internal.a0 r4 = com.withpersona.sdk2.inquiry.internal.a0.this
                java.lang.String r4 = r4.d()
                com.withpersona.sdk2.inquiry.internal.a0 r5 = com.withpersona.sdk2.inquiry.internal.a0.this
                wp.g r5 = com.withpersona.sdk2.inquiry.internal.a0.c(r5)
                r6.f18710e = r1
                r6.f18709d = r3
                java.lang.Object r7 = r7.o(r4, r5, r6)
                if (r7 != r0) goto L47
                goto L52
            L47:
                r3 = 0
                r6.f18710e = r3
                r6.f18709d = r2
                java.lang.Object r7 = r1.emit(r7, r6)
                if (r7 != r0) goto L53
            L52:
                return r0
            L53:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.a0.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((b) create(flowCollector, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public a0(String sessionToken, String inquiryId, wp.g inquirySessionConfig, com.withpersona.sdk2.inquiry.internal.network.e inquiryApiHelper) {
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
        Intrinsics.checkNotNullParameter(inquiryApiHelper, "inquiryApiHelper");
        this.f18705b = sessionToken;
        this.f18706c = inquiryId;
        this.f18707d = inquirySessionConfig;
        this.f18708e = inquiryApiHelper;
    }

    @Override // zm.o
    public boolean a(zm.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof a0) {
            a0 a0Var = (a0) otherWorker;
            if (Intrinsics.areEqual(this.f18705b, a0Var.f18705b) && Intrinsics.areEqual(this.f18706c, a0Var.f18706c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String d() {
        return this.f18705b;
    }

    @Override // zm.o
    public Flow run() {
        return ps.g.v(new b(null));
    }
}
