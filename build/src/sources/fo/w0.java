package fo;

import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.f;
import fo.a1;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import ys.j1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements io.a, f.a, bt.a0, ho.b {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f24144d;

    /* renamed from: e  reason: collision with root package name */
    private final MutableSharedFlow f24145e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f24146i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f24147d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ jo.c f24149i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(jo.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f24149i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f24149i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f24147d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f24145e;
                jo.c cVar = this.f24149i;
                this.f24147d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f24150d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ jo.c f24152i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(jo.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f24152i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f24152i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f24150d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f24145e;
                jo.c cVar = this.f24152i;
                this.f24150d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public w0(a1 selfieProcessor, MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(selfieProcessor, "selfieProcessor");
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f24144d = selfieProcessor;
        this.f24145e = resultFlow;
        this.f24146i = kotlinx.coroutines.i.a(ys.m0.a().O0(j1.b(null, 1, null)));
    }

    @Override // io.a
    public void a(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f24144d.u(rect, previewRect);
    }

    @Override // bt.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f24145e.collect(flowCollector, continuation);
    }

    @Override // ho.b
    public void e(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        try {
            jo.c d10 = this.f24144d.d(image, i10);
            ms.a.a(image, null);
            ys.i.d(this.f24146i, null, null, new b(d10, null), 3, null);
        } finally {
        }
    }

    @Override // androidx.camera.core.f.a
    public void f(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        try {
            jo.c e10 = this.f24144d.e(imageProxy);
            ms.a.a(imageProxy, null);
            ys.i.d(this.f24146i, null, null, new a(e10, null), 3, null);
        } finally {
        }
    }

    public final void k(boolean z10) {
        this.f24144d.s(z10);
    }

    public final void l(a1.c pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        this.f24144d.t(pose);
    }
}
