package m4;

import js.i;
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
    private static final String f37616a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d */
        int f37617d;

        /* renamed from: e */
        final /* synthetic */ e f37618e;

        /* renamed from: i */
        final /* synthetic */ u f37619i;

        /* renamed from: o */
        final /* synthetic */ d f37620o;

        /* renamed from: m4.f$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0483a implements FlowCollector {

            /* renamed from: d */
            final /* synthetic */ d f37621d;

            /* renamed from: e */
            final /* synthetic */ u f37622e;

            C0483a(d dVar, u uVar) {
                this.f37621d = dVar;
                this.f37622e = uVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(b bVar, Continuation continuation) {
                this.f37621d.a(this.f37622e, bVar);
                return Unit.f32464a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(e eVar, u uVar, d dVar, Continuation continuation) {
            super(2, continuation);
            this.f37618e = eVar;
            this.f37619i = uVar;
            this.f37620o = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f37618e, this.f37619i, this.f37620o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f37617d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow b10 = this.f37618e.b(this.f37619i);
                C0483a c0483a = new C0483a(this.f37620o, this.f37619i);
                this.f37617d = 1;
                if (b10.collect(c0483a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    static {
        String i10 = m.i("WorkConstraintsTracker");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkConstraintsTracker\")");
        f37616a = i10;
    }

    public static final /* synthetic */ String a() {
        return f37616a;
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
