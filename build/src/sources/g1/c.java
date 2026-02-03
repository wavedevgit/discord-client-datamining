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
    private final Choreographer f25649d;

    /* renamed from: e  reason: collision with root package name */
    private final g1.a f25650e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g1.a f25651d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Choreographer.FrameCallback f25652e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g1.a aVar, Choreographer.FrameCallback frameCallback) {
            super(1);
            this.f25651d = aVar;
            this.f25652e = frameCallback;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33074a;
        }

        public final void invoke(Throwable th2) {
            this.f25651d.x2(this.f25652e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Choreographer.FrameCallback f25654e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Choreographer.FrameCallback frameCallback) {
            super(1);
            this.f25654e = frameCallback;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33074a;
        }

        public final void invoke(Throwable th2) {
            c.this.b().removeFrameCallback(this.f25654e);
        }
    }

    /* renamed from: g1.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class Choreographer$FrameCallbackC0347c implements Choreographer.FrameCallback {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f25655d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f25656e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function1 f25657i;

        Choreographer$FrameCallbackC0347c(CancellableContinuation cancellableContinuation, c cVar, Function1 function1) {
            this.f25655d = cancellableContinuation;
            this.f25656e = cVar;
            this.f25657i = function1;
        }

        @Override // android.view.Choreographer.FrameCallback
        public final void doFrame(long j10) {
            Object b10;
            CancellableContinuation cancellableContinuation = this.f25655d;
            Function1 function1 = this.f25657i;
            try {
                Result.a aVar = Result.f33071e;
                b10 = Result.b(function1.invoke(Long.valueOf(j10)));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f33071e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            cancellableContinuation.resumeWith(b10);
        }
    }

    public c(Choreographer choreographer, g1.a aVar) {
        Intrinsics.checkNotNullParameter(choreographer, "choreographer");
        this.f25649d = choreographer;
        this.f25650e = aVar;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return n.a.a(this, obj, function2);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Z0(CoroutineContext coroutineContext) {
        return n.a.d(this, coroutineContext);
    }

    public final Choreographer b() {
        return this.f25649d;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return n.a.b(this, bVar);
    }

    @Override // w0.n
    public Object t0(Function1 function1, Continuation continuation) {
        g1.a aVar = this.f25650e;
        if (aVar == null) {
            CoroutineContext.Element l10 = continuation.getContext().l(d.f33146h);
            if (l10 instanceof g1.a) {
                aVar = (g1.a) l10;
            } else {
                aVar = null;
            }
        }
        e eVar = new e(pr.b.c(continuation), 1);
        eVar.H();
        Choreographer$FrameCallbackC0347c choreographer$FrameCallbackC0347c = new Choreographer$FrameCallbackC0347c(eVar, this, function1);
        if (aVar != null && Intrinsics.areEqual(aVar.r2(), b())) {
            aVar.w2(choreographer$FrameCallbackC0347c);
            eVar.c(new a(aVar, choreographer$FrameCallbackC0347c));
        } else {
            b().postFrameCallback(choreographer$FrameCallbackC0347c);
            eVar.c(new b(choreographer$FrameCallbackC0347c));
        }
        Object B = eVar.B();
        if (B == pr.b.f()) {
            g.c(continuation);
        }
        return B;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext y1(CoroutineContext.b bVar) {
        return n.a.c(this, bVar);
    }
}
