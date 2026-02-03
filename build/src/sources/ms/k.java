package ms;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class k {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f39194d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f39195e;

        /* renamed from: i  reason: collision with root package name */
        int f39196i;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f39195e = obj;
            this.f39196i |= Integer.MIN_VALUE;
            return g.J(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Collection f39197d;

        b(Collection collection) {
            this.f39197d = collection;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public final Object emit(Object obj, Continuation continuation) {
            this.f39197d.add(obj);
            return Unit.f32464a;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0035  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object a(kotlinx.coroutines.flow.Flow r4, java.util.Collection r5, kotlin.coroutines.Continuation r6) {
        /*
            boolean r0 = r6 instanceof ms.k.a
            if (r0 == 0) goto L13
            r0 = r6
            ms.k$a r0 = (ms.k.a) r0
            int r1 = r0.f39196i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f39196i = r1
            goto L18
        L13:
            ms.k$a r0 = new ms.k$a
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f39195e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f39196i
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 != r3) goto L2d
            java.lang.Object r4 = r0.f39194d
            java.util.Collection r4 = (java.util.Collection) r4
            kotlin.c.b(r6)
            return r4
        L2d:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L35:
            kotlin.c.b(r6)
            ms.k$b r6 = new ms.k$b
            r6.<init>(r5)
            r0.f39194d = r5
            r0.f39196i = r3
            java.lang.Object r4 = r4.collect(r6, r0)
            if (r4 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.k.a(kotlinx.coroutines.flow.Flow, java.util.Collection, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public static final Object b(Flow flow, List list, Continuation continuation) {
        return g.J(flow, list, continuation);
    }

    public static /* synthetic */ Object c(Flow flow, List list, Continuation continuation, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = new ArrayList();
        }
        return g.K(flow, list, continuation);
    }
}
