package un;

import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.f;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import os.j1;
import un.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements xn.a, f.a, rs.a0, wn.b {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f51888d;

    /* renamed from: e  reason: collision with root package name */
    private final MutableSharedFlow f51889e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f51890i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51891d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ yn.c f51893i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(yn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f51893i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f51893i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f51891d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f51889e;
                yn.c cVar = this.f51893i;
                this.f51891d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51894d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ yn.c f51896i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(yn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f51896i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f51896i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f51894d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f51889e;
                yn.c cVar = this.f51896i;
                this.f51894d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public w0(a1 selfieProcessor, MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(selfieProcessor, "selfieProcessor");
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f51888d = selfieProcessor;
        this.f51889e = resultFlow;
        this.f51890i = kotlinx.coroutines.i.a(os.m0.a().Y0(j1.b(null, 1, null)));
    }

    @Override // xn.a
    public void a(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f51888d.u(rect, previewRect);
    }

    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f51889e.collect(flowCollector, continuation);
    }

    @Override // wn.b
    public void e(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        try {
            yn.c d10 = this.f51888d.d(image, i10);
            cs.a.a(image, null);
            os.i.d(this.f51890i, null, null, new b(d10, null), 3, null);
        } finally {
        }
    }

    @Override // androidx.camera.core.f.a
    public void h(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        try {
            yn.c e10 = this.f51888d.e(imageProxy);
            cs.a.a(imageProxy, null);
            os.i.d(this.f51890i, null, null, new a(e10, null), 3, null);
        } finally {
        }
    }

    public final void k(boolean z10) {
        this.f51888d.s(z10);
    }

    public final void l(a1.c pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        this.f51888d.t(pose);
    }
}
