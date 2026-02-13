package gt;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import ys.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e extends k {

    /* renamed from: r  reason: collision with root package name */
    private final kotlinx.coroutines.e f25983r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25984d;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f25984d;
            try {
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = e.this;
                    this.f25984d = 1;
                    obj = eVar.o(this);
                    if (obj == f10) {
                        return f10;
                    }
                }
                n.c(e.this.f25983r, obj);
                return Unit.f32556a;
            } catch (Throwable th2) {
                n.d(e.this.f25983r, th2);
                return Unit.f32556a;
            }
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public e(Continuation continuation) {
        super(continuation.getContext());
        this.f25983r = new kotlinx.coroutines.e(gs.b.c(continuation), 1);
    }

    public final Object B() {
        if (!this.f25983r.isCompleted()) {
            ys.i.d(kotlinx.coroutines.i.a(getContext()), null, c0.f56354o, new a(null), 1, null);
            return this.f25983r.B();
        }
        return this.f25983r.B();
    }

    public final void C(Throwable th2) {
        kotlinx.coroutines.e eVar = this.f25983r;
        Result.a aVar = Result.f32553e;
        eVar.resumeWith(Result.b(kotlin.c.a(th2)));
    }
}
