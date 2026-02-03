package com.withpersona.sdk2.inquiry.ui.network;

import aq.k5;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import java.util.List;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ms.g;
import wm.o;
@kotlin.Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\n\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0013\u0011B)\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\u0015\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00020\fH\u0016¢\u0006\u0004\b\r\u0010\u000eJ\u001b\u0010\u0011\u001a\u00020\u00102\n\u0010\u000f\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0007\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0014R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/b;", "Lwm/o;", "Lcom/withpersona/sdk2/inquiry/ui/network/b$b;", "", "sessionToken", "Laq/k5;", "triggeringComponent", "addressText", "Lmq/b;", "uiService", "<init>", "(Ljava/lang/String;Laq/k5;Ljava/lang/String;Lmq/b;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Lwm/o;)Z", "b", "Ljava/lang/String;", "c", "Laq/k5;", "d", "e", "Lmq/b;", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements o<AbstractC0247b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f19457b;

    /* renamed from: c  reason: collision with root package name */
    private final k5 f19458c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19459d;

    /* renamed from: e  reason: collision with root package name */
    private final mq.b f19460e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final mq.b f19461a;

        public a(mq.b uiService) {
            Intrinsics.checkNotNullParameter(uiService, "uiService");
            this.f19461a = uiService;
        }

        public final b a(String sessionToken, k5 triggeringComponent, String addressText) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(triggeringComponent, "triggeringComponent");
            Intrinsics.checkNotNullParameter(addressText, "addressText");
            return new b(sessionToken, triggeringComponent, addressText, this.f19461a, null);
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.ui.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0247b {

        /* renamed from: com.withpersona.sdk2.inquiry.ui.network.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends AbstractC0247b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f19462a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19462a = cause;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.ui.network.b$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0248b extends AbstractC0247b {

            /* renamed from: a  reason: collision with root package name */
            private final List f19463a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0248b(List results) {
                super(null);
                Intrinsics.checkNotNullParameter(results, "results");
                this.f19463a = results;
            }

            public final List a() {
                return this.f19463a;
            }
        }

        public /* synthetic */ AbstractC0247b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private AbstractC0247b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19464d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f19465e;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f19465e = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0055, code lost:
            if (r10 == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:18:0x0072, code lost:
            if (r1.emit(r2, r9) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:28:0x009a, code lost:
            if (r1.emit(r3, r9) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:29:0x009c, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r10) {
            /*
                r9 = this;
                java.lang.Object r0 = rr.b.f()
                int r1 = r9.f19464d
                r2 = 3
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L27
                if (r1 == r4) goto L1f
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                goto L1a
            L12:
                java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r10.<init>(r0)
                throw r10
            L1a:
                kotlin.c.b(r10)
                goto L9d
            L1f:
                java.lang.Object r1 = r9.f19465e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r10)
                goto L58
            L27:
                kotlin.c.b(r10)
                java.lang.Object r10 = r9.f19465e
                r1 = r10
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                com.withpersona.sdk2.inquiry.ui.network.b r10 = com.withpersona.sdk2.inquiry.ui.network.b.this
                mq.b r10 = com.withpersona.sdk2.inquiry.ui.network.b.e(r10)
                com.withpersona.sdk2.inquiry.ui.network.b r5 = com.withpersona.sdk2.inquiry.ui.network.b.this
                java.lang.String r5 = com.withpersona.sdk2.inquiry.ui.network.b.c(r5)
                com.withpersona.sdk2.inquiry.ui.network.AddressAutocompleteRequest$a r6 = com.withpersona.sdk2.inquiry.ui.network.AddressAutocompleteRequest.f19378b
                com.withpersona.sdk2.inquiry.ui.network.b r7 = com.withpersona.sdk2.inquiry.ui.network.b.this
                aq.k5 r7 = com.withpersona.sdk2.inquiry.ui.network.b.d(r7)
                com.withpersona.sdk2.inquiry.ui.network.b r8 = com.withpersona.sdk2.inquiry.ui.network.b.this
                java.lang.String r8 = com.withpersona.sdk2.inquiry.ui.network.b.b(r8)
                com.withpersona.sdk2.inquiry.ui.network.AddressAutocompleteRequest r6 = r6.a(r7, r8)
                r9.f19465e = r1
                r9.f19464d = r4
                java.lang.Object r10 = r10.d(r5, r6, r9)
                if (r10 != r0) goto L58
                goto L9c
            L58:
                lv.z r10 = (lv.z) r10
                boolean r4 = r10.g()
                r5 = 0
                if (r4 != 0) goto L75
                com.withpersona.sdk2.inquiry.ui.network.b$b$a r2 = new com.withpersona.sdk2.inquiry.ui.network.b$b$a
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r10 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toErrorInfo(r10)
                r2.<init>(r10)
                r9.f19465e = r5
                r9.f19464d = r3
                java.lang.Object r10 = r1.emit(r2, r9)
                if (r10 != r0) goto L9d
                goto L9c
            L75:
                com.withpersona.sdk2.inquiry.ui.network.b$b$b r3 = new com.withpersona.sdk2.inquiry.ui.network.b$b$b
                java.lang.Object r10 = r10.a()
                com.withpersona.sdk2.inquiry.steps.ui.network.AddressAutocompleteResponse r10 = (com.withpersona.sdk2.inquiry.steps.ui.network.AddressAutocompleteResponse) r10
                if (r10 == 0) goto L8b
                com.withpersona.sdk2.inquiry.steps.ui.network.Meta r10 = r10.a()
                if (r10 == 0) goto L8b
                java.util.List r10 = r10.a()
                if (r10 != 0) goto L8f
            L8b:
                java.util.List r10 = kotlin.collections.CollectionsKt.l()
            L8f:
                r3.<init>(r10)
                r9.f19465e = r5
                r9.f19464d = r2
                java.lang.Object r10 = r1.emit(r3, r9)
                if (r10 != r0) goto L9d
            L9c:
                return r0
            L9d:
                kotlin.Unit r10 = kotlin.Unit.f32464a
                return r10
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.ui.network.b.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public /* synthetic */ b(String str, k5 k5Var, String str2, mq.b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, k5Var, str2, bVar);
    }

    @Override // wm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof b) && Intrinsics.areEqual(this.f19459d, ((b) otherWorker).f19459d)) {
            return true;
        }
        return false;
    }

    @Override // wm.o
    public Flow run() {
        return g.v(new c(null));
    }

    private b(String str, k5 k5Var, String str2, mq.b bVar) {
        this.f19457b = str;
        this.f19458c = k5Var;
        this.f19459d = str2;
        this.f19460e = bVar;
    }
}
