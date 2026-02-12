package com.withpersona.sdk2.inquiry.internal;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u000e\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u0012B9\b\u0007\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0003\u0012\b\b\u0001\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u000b\u0010\fJ\u0015\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00020\rH\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u001b\u0010\u0012\u001a\u00020\u00112\n\u0010\u0010\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0017\u0010\u0004\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017R\u0017\u0010\u0005\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0018\u0010\u0015\u001a\u0004\b\u0019\u0010\u0017R\u0017\u0010\u0006\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0019\u0010\u0015\u001a\u0004\b\u0014\u0010\u0017R\u0017\u0010\b\u001a\u00020\u00078\u0006¢\u0006\f\n\u0004\b\u001a\u0010\u001b\u001a\u0004\b\u001a\u0010\u001cR\u0017\u0010\n\u001a\u00020\t8\u0006¢\u0006\f\n\u0004\b\u0016\u0010\u001d\u001a\u0004\b\u0018\u0010\u001e¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/u;", "Len/o;", "Lcom/withpersona/sdk2/inquiry/internal/network/h;", "", "sessionToken", "inquiryId", "fromStep", "Liq/g;", "inquirySessionConfig", "Lcom/withpersona/sdk2/inquiry/internal/network/e;", "inquiryApiHelper", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Liq/g;Lcom/withpersona/sdk2/inquiry/internal/network/e;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Len/o;)Z", "b", "Ljava/lang/String;", "f", "()Ljava/lang/String;", "c", "d", "e", "Liq/g;", "()Liq/g;", "Lcom/withpersona/sdk2/inquiry/internal/network/e;", "()Lcom/withpersona/sdk2/inquiry/internal/network/e;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements en.o<com.withpersona.sdk2.inquiry.internal.network.h> {

    /* renamed from: b  reason: collision with root package name */
    private final String f20380b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20381c;

    /* renamed from: d  reason: collision with root package name */
    private final String f20382d;

    /* renamed from: e  reason: collision with root package name */
    private final iq.g f20383e;

    /* renamed from: f  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.e f20384f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        u a(String str, String str2, String str3, iq.g gVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20385d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f20386e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f20386e = obj;
            return bVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0053, code lost:
            if (r11 == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x005f, code lost:
            if (r1.emit(r11, r10) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x0061, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r11) {
            /*
                r10 = this;
                java.lang.Object r0 = gs.b.f()
                int r1 = r10.f20385d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L24
                if (r1 == r3) goto L1b
                if (r1 != r2) goto L13
                kotlin.c.b(r11)
                r9 = r10
                goto L62
            L13:
                java.lang.IllegalStateException r11 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r11.<init>(r0)
                throw r11
            L1b:
                java.lang.Object r1 = r10.f20386e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r11)
                r9 = r10
                goto L56
            L24:
                kotlin.c.b(r11)
                java.lang.Object r11 = r10.f20386e
                r1 = r11
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                com.withpersona.sdk2.inquiry.internal.u r11 = com.withpersona.sdk2.inquiry.internal.u.this
                com.withpersona.sdk2.inquiry.internal.network.e r4 = r11.c()
                com.withpersona.sdk2.inquiry.internal.u r11 = com.withpersona.sdk2.inquiry.internal.u.this
                java.lang.String r5 = r11.f()
                com.withpersona.sdk2.inquiry.internal.u r11 = com.withpersona.sdk2.inquiry.internal.u.this
                java.lang.String r6 = r11.d()
                com.withpersona.sdk2.inquiry.internal.u r11 = com.withpersona.sdk2.inquiry.internal.u.this
                java.lang.String r7 = r11.b()
                com.withpersona.sdk2.inquiry.internal.u r11 = com.withpersona.sdk2.inquiry.internal.u.this
                iq.g r8 = r11.e()
                r10.f20386e = r1
                r10.f20385d = r3
                r9 = r10
                java.lang.Object r11 = r4.n(r5, r6, r7, r8, r9)
                if (r11 != r0) goto L56
                goto L61
            L56:
                r3 = 0
                r9.f20386e = r3
                r9.f20385d = r2
                java.lang.Object r11 = r1.emit(r11, r10)
                if (r11 != r0) goto L62
            L61:
                return r0
            L62:
                kotlin.Unit r11 = kotlin.Unit.f31988a
                return r11
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.u.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((b) create(flowCollector, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public u(String sessionToken, String inquiryId, String fromStep, iq.g inquirySessionConfig, com.withpersona.sdk2.inquiry.internal.network.e inquiryApiHelper) {
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(fromStep, "fromStep");
        Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
        Intrinsics.checkNotNullParameter(inquiryApiHelper, "inquiryApiHelper");
        this.f20380b = sessionToken;
        this.f20381c = inquiryId;
        this.f20382d = fromStep;
        this.f20383e = inquirySessionConfig;
        this.f20384f = inquiryApiHelper;
    }

    @Override // en.o
    public boolean a(en.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof u) {
            u uVar = (u) otherWorker;
            if (Intrinsics.areEqual(this.f20380b, uVar.f20380b) && Intrinsics.areEqual(this.f20381c, uVar.f20381c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String b() {
        return this.f20382d;
    }

    public final com.withpersona.sdk2.inquiry.internal.network.e c() {
        return this.f20384f;
    }

    public final String d() {
        return this.f20381c;
    }

    public final iq.g e() {
        return this.f20383e;
    }

    public final String f() {
        return this.f20380b;
    }

    @Override // en.o
    public Flow run() {
        return bt.g.v(new b(null));
    }
}
