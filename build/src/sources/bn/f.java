package bn;

import java.util.List;
import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
import os.s0;
import rs.j0;
import rs.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6890d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f6891e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ cn.m f6892i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ MutableStateFlow f6893o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function2 f6894p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(cn.m mVar, MutableStateFlow mutableStateFlow, Function2 function2, Continuation continuation) {
            super(2, continuation);
            this.f6892i = mVar;
            this.f6893o = mutableStateFlow;
            this.f6894p = function2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f6892i, this.f6893o, this.f6894p, continuation);
            aVar.f6891e = obj;
            return aVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:25:0x006b, code lost:
            if (r4.invoke(r8, r7) == r0) goto L21;
         */
        /* JADX WARN: Removed duplicated region for block: B:13:0x0033  */
        /* JADX WARN: Removed duplicated region for block: B:19:0x004b  */
        /* JADX WARN: Removed duplicated region for block: B:21:0x004e  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x006e  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:22:0x0059 -> B:23:0x005b). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:25:0x006b -> B:23:0x005b). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r7.f6890d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L26
                if (r1 == r3) goto L1e
                if (r1 != r2) goto L16
                java.lang.Object r1 = r7.f6891e
                kotlinx.coroutines.CoroutineScope r1 = (kotlinx.coroutines.CoroutineScope) r1
                kotlin.c.b(r8)
                goto L5b
            L16:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r0)
                throw r8
            L1e:
                java.lang.Object r1 = r7.f6891e
                kotlinx.coroutines.CoroutineScope r1 = (kotlinx.coroutines.CoroutineScope) r1
                kotlin.c.b(r8)
                goto L43
            L26:
                kotlin.c.b(r8)
                java.lang.Object r8 = r7.f6891e
                kotlinx.coroutines.CoroutineScope r8 = (kotlinx.coroutines.CoroutineScope) r8
            L2d:
                boolean r1 = kotlinx.coroutines.i.i(r8)
                if (r1 == 0) goto L6e
                cn.m r1 = r7.f6892i
                r7.f6891e = r8
                r7.f6890d = r3
                java.lang.Object r1 = r1.f(r7)
                if (r1 != r0) goto L40
                goto L6d
            L40:
                r6 = r1
                r1 = r8
                r8 = r6
            L43:
                bn.v r8 = (bn.v) r8
                boolean r4 = kotlinx.coroutines.i.i(r1)
                if (r4 != 0) goto L4e
                kotlin.Unit r8 = kotlin.Unit.f32056a
                return r8
            L4e:
                kotlinx.coroutines.flow.MutableStateFlow r4 = r7.f6893o
                cn.m r5 = r7.f6892i
                bn.g r5 = r5.g()
                r4.setValue(r5)
                if (r8 != 0) goto L5d
            L5b:
                r8 = r1
                goto L2d
            L5d:
                kotlin.jvm.functions.Function2 r4 = r7.f6894p
                java.lang.Object r8 = r8.a()
                r7.f6891e = r1
                r7.f6890d = r2
                java.lang.Object r8 = r4.invoke(r8, r7)
                if (r8 != r0) goto L5b
            L6d:
                return r0
            L6e:
                kotlin.Unit r8 = kotlin.Unit.f32056a
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: bn.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public static final j0 a(q workflow, CoroutineScope scope, j0 props, m mVar, List interceptors, Function2 onOutput) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(onOutput, "onOutput");
        cn.m mVar2 = new cn.m(scope, workflow, props, mVar, cn.c.a(interceptors));
        CancellationException cancellationException = null;
        try {
            MutableStateFlow a10 = l0.a(mVar2.g());
            os.i.d(scope, null, null, new a(mVar2, a10, onOutput, null), 3, null);
            return a10;
        } catch (Throwable th2) {
            if (th2 instanceof CancellationException) {
                cancellationException = th2;
            }
            if (cancellationException == null) {
                cancellationException = s0.a("Workflow runtime failed", th2);
            }
            mVar2.e(cancellationException);
            throw th2;
        }
    }
}
