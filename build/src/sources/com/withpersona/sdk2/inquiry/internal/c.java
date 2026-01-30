package com.withpersona.sdk2.inquiry.internal;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0007\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u000eB\u001b\b\u0007\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0015\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00020\tH\u0016¢\u0006\u0004\b\n\u0010\u000bJ\u001b\u0010\u000e\u001a\u00020\r2\n\u0010\f\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u000e\u0010\u000fR\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/c;", "Ltm/o;", "Lcom/withpersona/sdk2/inquiry/internal/network/a;", "Lso/d;", "attributes", "Lcom/withpersona/sdk2/inquiry/internal/network/e;", "inquiryApiHelper", "<init>", "(Lso/d;Lcom/withpersona/sdk2/inquiry/internal/network/e;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Ltm/o;)Z", "b", "Lso/d;", "c", "Lcom/withpersona/sdk2/inquiry/internal/network/e;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements tm.o<com.withpersona.sdk2.inquiry.internal.network.a> {

    /* renamed from: b  reason: collision with root package name */
    private final so.d f19693b;

    /* renamed from: c  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.e f19694c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        c a(so.d dVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19695d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f19696e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f19696e = obj;
            return bVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003e, code lost:
            if (r6 == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004a, code lost:
            if (r1.emit(r6, r5) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x004c, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r5.f19695d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L22
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r6)
                goto L4d
            L12:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L1a:
                java.lang.Object r1 = r5.f19696e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r6)
                goto L41
            L22:
                kotlin.c.b(r6)
                java.lang.Object r6 = r5.f19696e
                r1 = r6
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                com.withpersona.sdk2.inquiry.internal.c r6 = com.withpersona.sdk2.inquiry.internal.c.this
                com.withpersona.sdk2.inquiry.internal.network.e r6 = com.withpersona.sdk2.inquiry.internal.c.c(r6)
                com.withpersona.sdk2.inquiry.internal.c r4 = com.withpersona.sdk2.inquiry.internal.c.this
                so.d r4 = com.withpersona.sdk2.inquiry.internal.c.b(r4)
                r5.f19696e = r1
                r5.f19695d = r3
                java.lang.Object r6 = r6.h(r4, r5)
                if (r6 != r0) goto L41
                goto L4c
            L41:
                r3 = 0
                r5.f19696e = r3
                r5.f19695d = r2
                java.lang.Object r6 = r1.emit(r6, r5)
                if (r6 != r0) goto L4d
            L4c:
                return r0
            L4d:
                kotlin.Unit r6 = kotlin.Unit.f33298a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.c.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((b) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public c(so.d attributes, com.withpersona.sdk2.inquiry.internal.network.e inquiryApiHelper) {
        Intrinsics.checkNotNullParameter(attributes, "attributes");
        Intrinsics.checkNotNullParameter(inquiryApiHelper, "inquiryApiHelper");
        this.f19693b = attributes;
        this.f19694c = inquiryApiHelper;
    }

    @Override // tm.o
    public boolean a(tm.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof c) {
            c cVar = (c) otherWorker;
            if (Intrinsics.areEqual(this.f19693b.h(), cVar.f19693b.h()) && Intrinsics.areEqual(this.f19693b.i(), cVar.f19693b.i()) && this.f19693b.b() == cVar.f19693b.b()) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // tm.o
    public Flow run() {
        return js.g.v(new b(null));
    }
}
