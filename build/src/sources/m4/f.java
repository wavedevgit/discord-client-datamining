package m4;

import gs.i;
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
    private static final String f37839a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d */
        int f37840d;

        /* renamed from: e */
        final /* synthetic */ e f37841e;

        /* renamed from: i */
        final /* synthetic */ u f37842i;

        /* renamed from: o */
        final /* synthetic */ d f37843o;

        /* renamed from: m4.f$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0493a implements FlowCollector {

            /* renamed from: d */
            final /* synthetic */ d f37844d;

            /* renamed from: e */
            final /* synthetic */ u f37845e;

            C0493a(d dVar, u uVar) {
                this.f37844d = dVar;
                this.f37845e = uVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(b bVar, Continuation continuation) {
                this.f37844d.a(this.f37845e, bVar);
                return Unit.f33298a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(e eVar, u uVar, d dVar, Continuation continuation) {
            super(2, continuation);
            this.f37841e = eVar;
            this.f37842i = uVar;
            this.f37843o = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f37841e, this.f37842i, this.f37843o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f37840d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow b10 = this.f37841e.b(this.f37842i);
                C0493a c0493a = new C0493a(this.f37843o, this.f37842i);
                this.f37840d = 1;
                if (b10.collect(c0493a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    static {
        String i10 = m.i("WorkConstraintsTracker");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkConstraintsTracker\")");
        f37839a = i10;
    }

    public static final /* synthetic */ String a() {
        return f37839a;
    }

    public static final Job b(e eVar, u spec, CoroutineDispatcher dispatcher, d listener) {
        CompletableJob b10;
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        Intrinsics.checkNotNullParameter(spec, "spec");
        Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
        Intrinsics.checkNotNullParameter(listener, "listener");
        b10 = a0.b(null, 1, null);
        i.d(kotlinx.coroutines.i.a(dispatcher.U0(b10)), null, null, new a(eVar, spec, listener, null), 3, null);
        return b10;
    }
}
