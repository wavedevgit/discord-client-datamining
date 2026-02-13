package en;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class a0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f22951d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ o f22952e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ h f22953i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f22954o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: en.a0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0306a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ o f22955d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ String f22956e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0306a(o oVar, String str) {
                super(1);
                this.f22955d = oVar;
                this.f22956e = str;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final r invoke(Object obj) {
                return new b(this.f22955d, this.f22956e, obj);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(o oVar, h hVar, String str, Continuation continuation) {
            super(2, continuation);
            this.f22952e = oVar;
            this.f22953i = hVar;
            this.f22954o = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f22952e, this.f22953i, this.f22954o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f22951d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow c10 = a0.c(this.f22952e);
                h hVar = this.f22953i;
                C0306a c0306a = new C0306a(this.f22952e, this.f22954o);
                this.f22951d = 1;
                if (w.i(c10, hVar, c0306a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    private static final String b(o oVar, String str) {
        String obj = oVar.toString();
        if (StringsKt.k0(str)) {
            return obj;
        }
        return obj + ':' + str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Flow c(o oVar) {
        Flow run = oVar.run();
        if (run != null) {
            return run;
        }
        throw new NullPointerException("Worker " + oVar + " returned a null Flow. If this is a test mock, make sure you mock the run() method!");
    }

    public static final Object d(o oVar, String str, h hVar, Continuation continuation) {
        Object g10 = ys.g.g(new ys.b0(b(oVar, str)), new a(oVar, hVar, str, null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f32556a;
    }
}
