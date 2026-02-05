package sn;

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
import ms.j1;
import sn.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements vn.a, f.a, ps.a0, un.b {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f49994d;

    /* renamed from: e  reason: collision with root package name */
    private final MutableSharedFlow f49995e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f49996i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f49997d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ wn.c f49999i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(wn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f49999i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f49999i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f49997d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f49995e;
                wn.c cVar = this.f49999i;
                this.f49997d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50000d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ wn.c f50002i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(wn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f50002i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f50002i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f50000d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f49995e;
                wn.c cVar = this.f50002i;
                this.f50000d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public w0(a1 selfieProcessor, MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(selfieProcessor, "selfieProcessor");
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f49994d = selfieProcessor;
        this.f49995e = resultFlow;
        this.f49996i = kotlinx.coroutines.i.a(ms.m0.a().V0(j1.b(null, 1, null)));
    }

    @Override // vn.a
    public void a(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f49994d.u(rect, previewRect);
    }

    @Override // ps.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f49995e.collect(flowCollector, continuation);
    }

    @Override // un.b
    public void e(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        try {
            wn.c d10 = this.f49994d.d(image, i10);
            as.a.a(image, null);
            ms.i.d(this.f49996i, null, null, new b(d10, null), 3, null);
        } finally {
        }
    }

    @Override // androidx.camera.core.f.a
    public void g(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        try {
            wn.c e10 = this.f49994d.e(imageProxy);
            as.a.a(imageProxy, null);
            ms.i.d(this.f49996i, null, null, new a(e10, null), 3, null);
        } finally {
        }
    }

    public final void k(boolean z10) {
        this.f49994d.s(z10);
    }

    public final void l(a1.c pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        this.f49994d.t(pose);
    }
}
