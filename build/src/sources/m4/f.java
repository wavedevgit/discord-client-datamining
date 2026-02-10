package m4;

import k4.m;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.a0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import p4.u;
import ps.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* renamed from: a */
    private static final String f36767a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d */
        int f36768d;

        /* renamed from: e */
        final /* synthetic */ e f36769e;

        /* renamed from: i */
        final /* synthetic */ u f36770i;

        /* renamed from: o */
        final /* synthetic */ d f36771o;

        /* renamed from: m4.f$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0531a implements FlowCollector {

            /* renamed from: d */
            final /* synthetic */ d f36772d;

            /* renamed from: e */
            final /* synthetic */ u f36773e;

            C0531a(d dVar, u uVar) {
                this.f36772d = dVar;
                this.f36773e = uVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(b bVar, Continuation continuation) {
                this.f36772d.a(this.f36773e, bVar);
                return Unit.f31765a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(e eVar, u uVar, d dVar, Continuation continuation) {
            super(2, continuation);
            this.f36769e = eVar;
            this.f36770i = uVar;
            this.f36771o = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f36769e, this.f36770i, this.f36771o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f36768d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow b10 = this.f36769e.b(this.f36770i);
                C0531a c0531a = new C0531a(this.f36771o, this.f36770i);
                this.f36768d = 1;
                if (b10.collect(c0531a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    static {
        String i10 = m.i("WorkConstraintsTracker");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkConstraintsTracker\")");
        f36767a = i10;
    }

    public static final /* synthetic */ String a() {
        return f36767a;
    }

    public static final Job b(e eVar, u spec, CoroutineDispatcher dispatcher, d listener) {
        CompletableJob b10;
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        Intrinsics.checkNotNullParameter(spec, "spec");
        Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
        Intrinsics.checkNotNullParameter(listener, "listener");
        b10 = a0.b(null, 1, null);
        i.d(kotlinx.coroutines.i.a(dispatcher.V0(b10)), null, null, new a(eVar, spec, listener, null), 3, null);
        return b10;
    }
}
