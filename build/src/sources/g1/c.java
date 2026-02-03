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
    private final Choreographer f24846d;

    /* renamed from: e  reason: collision with root package name */
    private final g1.a f24847e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g1.a f24848d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Choreographer.FrameCallback f24849e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g1.a aVar, Choreographer.FrameCallback frameCallback) {
            super(1);
            this.f24848d = aVar;
            this.f24849e = frameCallback;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f32464a;
        }

        public final void invoke(Throwable th2) {
            this.f24848d.x2(this.f24849e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Choreographer.FrameCallback f24851e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Choreographer.FrameCallback frameCallback) {
            super(1);
            this.f24851e = frameCallback;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f32464a;
        }

        public final void invoke(Throwable th2) {
            c.this.b().removeFrameCallback(this.f24851e);
        }
    }

    /* renamed from: g1.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class Choreographer$FrameCallbackC0333c implements Choreographer.FrameCallback {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f24852d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f24853e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function1 f24854i;

        Choreographer$FrameCallbackC0333c(CancellableContinuation cancellableContinuation, c cVar, Function1 function1) {
            this.f24852d = cancellableContinuation;
            this.f24853e = cVar;
            this.f24854i = function1;
        }

        @Override // android.view.Choreographer.FrameCallback
        public final void doFrame(long j10) {
            Object b10;
            CancellableContinuation cancellableContinuation = this.f24852d;
            Function1 function1 = this.f24854i;
            try {
                Result.a aVar = Result.f32461e;
                b10 = Result.b(function1.invoke(Long.valueOf(j10)));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f32461e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            cancellableContinuation.resumeWith(b10);
        }
    }

    public c(Choreographer choreographer, g1.a aVar) {
        Intrinsics.checkNotNullParameter(choreographer, "choreographer");
        this.f24846d = choreographer;
        this.f24847e = aVar;
    }

    @Override // w0.n
    public Object A0(Function1 function1, Continuation continuation) {
        g1.a aVar = this.f24847e;
        if (aVar == null) {
            CoroutineContext.Element l10 = continuation.getContext().l(d.f32536g);
            if (l10 instanceof g1.a) {
                aVar = (g1.a) l10;
            } else {
                aVar = null;
            }
        }
        e eVar = new e(rr.b.c(continuation), 1);
        eVar.H();
        Choreographer$FrameCallbackC0333c choreographer$FrameCallbackC0333c = new Choreographer$FrameCallbackC0333c(eVar, this, function1);
        if (aVar != null && Intrinsics.areEqual(aVar.r2(), b())) {
            aVar.w2(choreographer$FrameCallbackC0333c);
            eVar.c(new a(aVar, choreographer$FrameCallbackC0333c));
        } else {
            b().postFrameCallback(choreographer$FrameCallbackC0333c);
            eVar.c(new b(choreographer$FrameCallbackC0333c));
        }
        Object B = eVar.B();
        if (B == rr.b.f()) {
            g.c(continuation);
        }
        return B;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return n.a.d(this, coroutineContext);
    }

    public final Choreographer b() {
        return this.f24846d;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext e1(CoroutineContext.b bVar) {
        return n.a.c(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return n.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object y1(Object obj, Function2 function2) {
        return n.a.a(this, obj, function2);
    }
}
