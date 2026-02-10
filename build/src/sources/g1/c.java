package g1;

import android.view.Choreographer;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.d;
import kotlin.coroutines.jvm.internal.g;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.e;
import w0.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements n {

    /* renamed from: d  reason: collision with root package name */
    private final Choreographer f23323d;

    /* renamed from: e  reason: collision with root package name */
    private final g1.a f23324e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g1.a f23325d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Choreographer.FrameCallback f23326e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g1.a aVar, Choreographer.FrameCallback frameCallback) {
            super(1);
            this.f23325d = aVar;
            this.f23326e = frameCallback;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31765a;
        }

        public final void invoke(Throwable th2) {
            this.f23325d.x2(this.f23326e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Choreographer.FrameCallback f23328e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Choreographer.FrameCallback frameCallback) {
            super(1);
            this.f23328e = frameCallback;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31765a;
        }

        public final void invoke(Throwable th2) {
            c.this.b().removeFrameCallback(this.f23328e);
        }
    }

    /* renamed from: g1.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class Choreographer$FrameCallbackC0366c implements Choreographer.FrameCallback {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f23329d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f23330e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function1 f23331i;

        Choreographer$FrameCallbackC0366c(CancellableContinuation cancellableContinuation, c cVar, Function1 function1) {
            this.f23329d = cancellableContinuation;
            this.f23330e = cVar;
            this.f23331i = function1;
        }

        @Override // android.view.Choreographer.FrameCallback
        public final void doFrame(long j10) {
            Object b10;
            CancellableContinuation cancellableContinuation = this.f23329d;
            Function1 function1 = this.f23331i;
            try {
                Result.a aVar = Result.f31762e;
                b10 = Result.b(function1.invoke(Long.valueOf(j10)));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f31762e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            cancellableContinuation.resumeWith(b10);
        }
    }

    public c(Choreographer choreographer, g1.a aVar) {
        Intrinsics.checkNotNullParameter(choreographer, "choreographer");
        this.f23323d = choreographer;
        this.f23324e = aVar;
    }

    @Override // w0.n
    public Object J(Function1 function1, Continuation continuation) {
        g1.a aVar = this.f23324e;
        if (aVar == null) {
            CoroutineContext.Element m10 = continuation.getContext().m(d.f31837g);
            if (m10 instanceof g1.a) {
                aVar = (g1.a) m10;
            } else {
                aVar = null;
            }
        }
        e eVar = new e(xr.b.c(continuation), 1);
        eVar.H();
        Choreographer$FrameCallbackC0366c choreographer$FrameCallbackC0366c = new Choreographer$FrameCallbackC0366c(eVar, this, function1);
        if (aVar != null && Intrinsics.areEqual(aVar.r2(), b())) {
            aVar.w2(choreographer$FrameCallbackC0366c);
            eVar.c(new a(aVar, choreographer$FrameCallbackC0366c));
        } else {
            b().postFrameCallback(choreographer$FrameCallbackC0366c);
            eVar.c(new b(choreographer$FrameCallbackC0366c));
        }
        Object B = eVar.B();
        if (B == xr.b.f()) {
            g.c(continuation);
        }
        return B;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return n.a.d(this, coroutineContext);
    }

    public final Choreographer b() {
        return this.f23323d;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return n.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext s1(CoroutineContext.b bVar) {
        return n.a.c(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object u1(Object obj, Function2 function2) {
        return n.a.a(this, obj, function2);
    }
}
