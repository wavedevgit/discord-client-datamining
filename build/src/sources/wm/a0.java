package wm;

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
        int f52512d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ o f52513e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ h f52514i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f52515o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: wm.a0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0701a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ o f52516d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ String f52517e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0701a(o oVar, String str) {
                super(1);
                this.f52516d = oVar;
                this.f52517e = str;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final r invoke(Object obj) {
                return new b(this.f52516d, this.f52517e, obj);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(o oVar, h hVar, String str, Continuation continuation) {
            super(2, continuation);
            this.f52513e = oVar;
            this.f52514i = hVar;
            this.f52515o = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f52513e, this.f52514i, this.f52515o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f52512d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow c10 = a0.c(this.f52513e);
                h hVar = this.f52514i;
                C0701a c0701a = new C0701a(this.f52513e, this.f52515o);
                this.f52512d = 1;
                if (w.i(c10, hVar, c0701a, this) == f10) {
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
        Object g10 = js.g.g(new js.b0(b(oVar, str)), new a(oVar, hVar, str, null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }
}
