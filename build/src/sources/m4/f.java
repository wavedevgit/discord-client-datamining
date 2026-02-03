package m4;

import hs.i;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* renamed from: a */
    private static final String f37819a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d */
        int f37820d;

        /* renamed from: e */
        final /* synthetic */ e f37821e;

        /* renamed from: i */
        final /* synthetic */ u f37822i;

        /* renamed from: o */
        final /* synthetic */ d f37823o;

        /* renamed from: m4.f$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0504a implements FlowCollector {

            /* renamed from: d */
            final /* synthetic */ d f37824d;

            /* renamed from: e */
            final /* synthetic */ u f37825e;

            C0504a(d dVar, u uVar) {
                this.f37824d = dVar;
                this.f37825e = uVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(b bVar, Continuation continuation) {
                this.f37824d.a(this.f37825e, bVar);
                return Unit.f33074a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(e eVar, u uVar, d dVar, Continuation continuation) {
            super(2, continuation);
            this.f37821e = eVar;
            this.f37822i = uVar;
            this.f37823o = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f37821e, this.f37822i, this.f37823o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f37820d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow b10 = this.f37821e.b(this.f37822i);
                C0504a c0504a = new C0504a(this.f37823o, this.f37822i);
                this.f37820d = 1;
                if (b10.collect(c0504a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    static {
        String i10 = m.i("WorkConstraintsTracker");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkConstraintsTracker\")");
        f37819a = i10;
    }

    public static final /* synthetic */ String a() {
        return f37819a;
    }

    public static final Job b(e eVar, u spec, CoroutineDispatcher dispatcher, d listener) {
        CompletableJob b10;
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        Intrinsics.checkNotNullParameter(spec, "spec");
        Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
        Intrinsics.checkNotNullParameter(listener, "listener");
        b10 = a0.b(null, 1, null);
        i.d(kotlinx.coroutines.i.a(dispatcher.Z0(b10)), null, null, new a(eVar, spec, listener, null), 3, null);
        return b10;
    }
}
