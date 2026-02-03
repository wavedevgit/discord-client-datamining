package pn;

import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.f;
import js.j1;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import pn.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements sn.a, f.a, ms.a0, rn.b {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f46378d;

    /* renamed from: e  reason: collision with root package name */
    private final MutableSharedFlow f46379e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f46380i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46381d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ tn.c f46383i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(tn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f46383i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f46383i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f46381d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f46379e;
                tn.c cVar = this.f46383i;
                this.f46381d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46384d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ tn.c f46386i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(tn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f46386i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f46386i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f46384d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f46379e;
                tn.c cVar = this.f46386i;
                this.f46384d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public w0(a1 selfieProcessor, MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(selfieProcessor, "selfieProcessor");
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f46378d = selfieProcessor;
        this.f46379e = resultFlow;
        this.f46380i = kotlinx.coroutines.i.a(js.m0.a().V0(j1.b(null, 1, null)));
    }

    @Override // sn.a
    public void a(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f46378d.u(rect, previewRect);
    }

    @Override // ms.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f46379e.collect(flowCollector, continuation);
    }

    @Override // rn.b
    public void f(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        try {
            tn.c d10 = this.f46378d.d(image, i10);
            xr.a.a(image, null);
            js.i.d(this.f46380i, null, null, new b(d10, null), 3, null);
        } finally {
        }
    }

    @Override // androidx.camera.core.f.a
    public void g(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        try {
            tn.c e10 = this.f46378d.e(imageProxy);
            xr.a.a(imageProxy, null);
            js.i.d(this.f46380i, null, null, new a(e10, null), 3, null);
        } finally {
        }
    }

    public final void k(boolean z10) {
        this.f46378d.s(z10);
    }

    public final void l(a1.c pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        this.f46378d.t(pose);
    }
}
