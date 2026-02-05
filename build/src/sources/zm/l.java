package zm;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f56076b;

    /* renamed from: c  reason: collision with root package name */
    private final String f56077c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f56078d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f56079e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f56079e = obj;
            return aVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0038, code lost:
            if (ms.i0.a(r4, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0046, code lost:
            if (r1.emit(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x0048, code lost:
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
                int r1 = r6.f56078d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L22
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r7)
                goto L49
            L12:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1a:
                java.lang.Object r1 = r6.f56079e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r7)
                goto L3b
            L22:
                kotlin.c.b(r7)
                java.lang.Object r7 = r6.f56079e
                r1 = r7
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                zm.l r7 = zm.l.this
                long r4 = zm.l.b(r7)
                r6.f56079e = r1
                r6.f56078d = r3
                java.lang.Object r7 = ms.i0.a(r4, r6)
                if (r7 != r0) goto L3b
                goto L48
            L3b:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                r3 = 0
                r6.f56079e = r3
                r6.f56078d = r2
                java.lang.Object r7 = r1.emit(r7, r6)
                if (r7 != r0) goto L49
            L48:
                return r0
            L49:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: zm.l.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((a) create(flowCollector, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public l(long j10, String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f56076b = j10;
        this.f56077c = key;
    }

    @Override // zm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof l) && Intrinsics.areEqual(((l) otherWorker).f56077c, this.f56077c)) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f56076b == lVar.f56076b && Intrinsics.areEqual(this.f56077c, lVar.f56077c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f56076b) * 31) + this.f56077c.hashCode();
    }

    @Override // zm.o
    public Flow run() {
        return ps.g.v(new a(null));
    }

    public String toString() {
        return "TimerWorker(delayMs=" + this.f56076b + ", key=" + this.f56077c + ')';
    }
}
