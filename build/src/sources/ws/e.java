package ws;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import os.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e extends k {

    /* renamed from: r  reason: collision with root package name */
    private final kotlinx.coroutines.e f54069r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54070d;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f54070d;
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
                    this.f54070d = 1;
                    obj = eVar.o(this);
                    if (obj == f10) {
                        return f10;
                    }
                }
                n.c(e.this.f54069r, obj);
                return Unit.f32008a;
            } catch (Throwable th2) {
                n.d(e.this.f54069r, th2);
                return Unit.f32008a;
            }
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public e(Continuation continuation) {
        super(continuation.getContext());
        this.f54069r = new kotlinx.coroutines.e(wr.b.c(continuation), 1);
    }

    public final Object B() {
        if (!this.f54069r.isCompleted()) {
            os.i.d(kotlinx.coroutines.i.a(getContext()), null, c0.f43494o, new a(null), 1, null);
            return this.f54069r.B();
        }
        return this.f54069r.B();
    }

    public final void C(Throwable th2) {
        kotlinx.coroutines.e eVar = this.f54069r;
        Result.a aVar = Result.f32005e;
        eVar.resumeWith(Result.b(kotlin.c.a(th2)));
    }
}
