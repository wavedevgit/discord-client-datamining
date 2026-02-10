package vn;

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
import ps.j1;
import vn.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements yn.a, f.a, ss.a0, xn.b {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f52748d;

    /* renamed from: e  reason: collision with root package name */
    private final MutableSharedFlow f52749e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f52750i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52751d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ zn.c f52753i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(zn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f52753i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f52753i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f52751d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f52749e;
                zn.c cVar = this.f52753i;
                this.f52751d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52754d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ zn.c f52756i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(zn.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f52756i = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f52756i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f52754d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = w0.this.f52749e;
                zn.c cVar = this.f52756i;
                this.f52754d = 1;
                if (mutableSharedFlow.emit(cVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public w0(a1 selfieProcessor, MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(selfieProcessor, "selfieProcessor");
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f52748d = selfieProcessor;
        this.f52749e = resultFlow;
        this.f52750i = kotlinx.coroutines.i.a(ps.m0.a().V0(j1.b(null, 1, null)));
    }

    @Override // yn.a
    public void a(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f52748d.u(rect, previewRect);
    }

    @Override // ss.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f52749e.collect(flowCollector, continuation);
    }

    @Override // xn.b
    public void e(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        try {
            zn.c d10 = this.f52748d.d(image, i10);
            ds.a.a(image, null);
            ps.i.d(this.f52750i, null, null, new b(d10, null), 3, null);
        } finally {
        }
    }

    @Override // androidx.camera.core.f.a
    public void f(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        try {
            zn.c e10 = this.f52748d.e(imageProxy);
            ds.a.a(imageProxy, null);
            ps.i.d(this.f52750i, null, null, new a(e10, null), 3, null);
        } finally {
        }
    }

    public final void k(boolean z10) {
        this.f52748d.s(z10);
    }

    public final void l(a1.c pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        this.f52748d.t(pose);
    }
}
