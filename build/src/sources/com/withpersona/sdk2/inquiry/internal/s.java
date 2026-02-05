package com.withpersona.sdk2.inquiry.internal;

import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import so.l2;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\t\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0010\u0012B/\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0005\u0012\b\b\u0001\u0010\b\u001a\u00020\u0005¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00020\u000bH\u0016¢\u0006\u0004\b\f\u0010\rJ\u001b\u0010\u0010\u001a\u00020\u000f2\n\u0010\u000e\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0007\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0016\u0010\u0015R\u0014\u0010\b\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0015¨\u0006\u0018"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/s;", "Lzm/o;", "Lcom/withpersona/sdk2/inquiry/internal/s$b;", "Lso/l2;", "uiStepSavedStateHelper", "", "sessionToken", "inquiryId", "stepName", "<init>", "(Lso/l2;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Lzm/o;)Z", "b", "Lso/l2;", "c", "Ljava/lang/String;", "d", "e", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements zm.o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final l2 f19369b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19370c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19371d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19372e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        s a(String str, String str2, String str3);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f19373a = new a();

            private a() {
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof a);
            }

            public int hashCode() {
                return -1486380735;
            }

            public String toString() {
                return "Failure";
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.internal.s$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0257b implements b {

            /* renamed from: a  reason: collision with root package name */
            private final List f19374a;

            public C0257b(List components) {
                Intrinsics.checkNotNullParameter(components, "components");
                this.f19374a = components;
            }

            public final List a() {
                return this.f19374a;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19375d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f19376e;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f19376e = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x004e, code lost:
            if (r9 == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:18:0x0063, code lost:
            if (r1.emit(r2, r8) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0070, code lost:
            if (r1.emit(r9, r8) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:22:0x0072, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r9) {
            /*
                r8 = this;
                java.lang.Object r0 = ur.b.f()
                int r1 = r8.f19375d
                r2 = 3
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L26
                if (r1 == r4) goto L1e
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                goto L1a
            L12:
                java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r9.<init>(r0)
                throw r9
            L1a:
                kotlin.c.b(r9)
                goto L73
            L1e:
                java.lang.Object r1 = r8.f19376e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r9)
                goto L51
            L26:
                kotlin.c.b(r9)
                java.lang.Object r9 = r8.f19376e
                r1 = r9
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                com.withpersona.sdk2.inquiry.internal.s r9 = com.withpersona.sdk2.inquiry.internal.s.this
                so.l2 r9 = com.withpersona.sdk2.inquiry.internal.s.e(r9)
                com.withpersona.sdk2.inquiry.internal.s r5 = com.withpersona.sdk2.inquiry.internal.s.this
                java.lang.String r5 = com.withpersona.sdk2.inquiry.internal.s.c(r5)
                com.withpersona.sdk2.inquiry.internal.s r6 = com.withpersona.sdk2.inquiry.internal.s.this
                java.lang.String r6 = com.withpersona.sdk2.inquiry.internal.s.b(r6)
                com.withpersona.sdk2.inquiry.internal.s r7 = com.withpersona.sdk2.inquiry.internal.s.this
                java.lang.String r7 = com.withpersona.sdk2.inquiry.internal.s.d(r7)
                r8.f19376e = r1
                r8.f19375d = r4
                java.lang.Object r9 = r9.d(r5, r6, r7, r8)
                if (r9 != r0) goto L51
                goto L72
            L51:
                java.util.List r9 = (java.util.List) r9
                r4 = 0
                if (r9 == 0) goto L66
                com.withpersona.sdk2.inquiry.internal.s$b$b r2 = new com.withpersona.sdk2.inquiry.internal.s$b$b
                r2.<init>(r9)
                r8.f19376e = r4
                r8.f19375d = r3
                java.lang.Object r9 = r1.emit(r2, r8)
                if (r9 != r0) goto L73
                goto L72
            L66:
                com.withpersona.sdk2.inquiry.internal.s$b$a r9 = com.withpersona.sdk2.inquiry.internal.s.b.a.f19373a
                r8.f19376e = r4
                r8.f19375d = r2
                java.lang.Object r9 = r1.emit(r9, r8)
                if (r9 != r0) goto L73
            L72:
                return r0
            L73:
                kotlin.Unit r9 = kotlin.Unit.f31988a
                return r9
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.s.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public s(l2 uiStepSavedStateHelper, String sessionToken, String inquiryId, String stepName) {
        Intrinsics.checkNotNullParameter(uiStepSavedStateHelper, "uiStepSavedStateHelper");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(stepName, "stepName");
        this.f19369b = uiStepSavedStateHelper;
        this.f19370c = sessionToken;
        this.f19371d = inquiryId;
        this.f19372e = stepName;
    }

    @Override // zm.o
    public boolean a(zm.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof s) {
            s sVar = (s) otherWorker;
            if (Intrinsics.areEqual(sVar.f19370c, this.f19370c) && Intrinsics.areEqual(sVar.f19371d, this.f19371d) && Intrinsics.areEqual(sVar.f19372e, this.f19372e)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // zm.o
    public Flow run() {
        return ps.g.v(new c(null));
    }
}
