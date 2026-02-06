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
import os.i;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* renamed from: a */
    private static final String f36860a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d */
        int f36861d;

        /* renamed from: e */
        final /* synthetic */ e f36862e;

        /* renamed from: i */
        final /* synthetic */ u f36863i;

        /* renamed from: o */
        final /* synthetic */ d f36864o;

        /* renamed from: m4.f$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0499a implements FlowCollector {

            /* renamed from: d */
            final /* synthetic */ d f36865d;

            /* renamed from: e */
            final /* synthetic */ u f36866e;

            C0499a(d dVar, u uVar) {
                this.f36865d = dVar;
                this.f36866e = uVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(b bVar, Continuation continuation) {
                this.f36865d.a(this.f36866e, bVar);
                return Unit.f32008a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(e eVar, u uVar, d dVar, Continuation continuation) {
            super(2, continuation);
            this.f36862e = eVar;
            this.f36863i = uVar;
            this.f36864o = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f36862e, this.f36863i, this.f36864o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f36861d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow b10 = this.f36862e.b(this.f36863i);
                C0499a c0499a = new C0499a(this.f36864o, this.f36863i);
                this.f36861d = 1;
                if (b10.collect(c0499a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    static {
        String i10 = m.i("WorkConstraintsTracker");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkConstraintsTracker\")");
        f36860a = i10;
    }

    public static final /* synthetic */ String a() {
        return f36860a;
    }

    public static final Job b(e eVar, u spec, CoroutineDispatcher dispatcher, d listener) {
        CompletableJob b10;
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        Intrinsics.checkNotNullParameter(spec, "spec");
        Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
        Intrinsics.checkNotNullParameter(listener, "listener");
        b10 = a0.b(null, 1, null);
        i.d(kotlinx.coroutines.i.a(dispatcher.Y0(b10)), null, null, new a(eVar, spec, listener, null), 3, null);
        return b10;
    }
}
