package mn;

import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.f;
import gs.j1;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import mn.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements pn.a, f.a, js.a0, on.b {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f39343d;

    /* renamed from: e  reason: collision with root package name */
    private final MutableSharedFlow f39344e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f39345i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39346d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ qn.c f39348i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(qn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f39348i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f39348i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f39346d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f39344e;
                qn.c cVar = this.f39348i;
                this.f39346d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39349d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ qn.c f39351i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(qn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f39351i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f39351i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f39349d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f39344e;
                qn.c cVar = this.f39351i;
                this.f39349d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public w0(a1 selfieProcessor, MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(selfieProcessor, "selfieProcessor");
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f39343d = selfieProcessor;
        this.f39344e = resultFlow;
        this.f39345i = kotlinx.coroutines.i.a(gs.m0.a().U0(j1.b(null, 1, null)));
    }

    @Override // pn.a
    public void c(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f39343d.u(rect, previewRect);
    }

    @Override // js.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f39344e.collect(flowCollector, continuation);
    }

    @Override // on.b
    public void f(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        try {
            qn.c d10 = this.f39343d.d(image, i10);
            ur.a.a(image, null);
            gs.i.d(this.f39345i, null, null, new b(d10, null), 3, null);
        } finally {
        }
    }

    @Override // androidx.camera.core.f.a
    public void g(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        try {
            qn.c e10 = this.f39343d.e(imageProxy);
            ur.a.a(imageProxy, null);
            gs.i.d(this.f39345i, null, null, new a(e10, null), 3, null);
        } finally {
        }
    }

    public final void k(boolean z10) {
        this.f39343d.s(z10);
    }

    public final void l(a1.c pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        this.f39343d.t(pose);
    }
}
