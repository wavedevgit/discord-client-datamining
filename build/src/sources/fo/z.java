package fo;

import android.view.View;
import androidx.camera.view.PreviewView;
import androidx.lifecycle.Observer;
import fo.x;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements i {

    /* renamed from: a  reason: collision with root package name */
    private final ko.a f24161a;

    /* renamed from: b  reason: collision with root package name */
    private final gq.c f24162b;

    /* renamed from: c  reason: collision with root package name */
    private final t f24163c;

    /* renamed from: d  reason: collision with root package name */
    private final PreviewView f24164d;

    /* renamed from: e  reason: collision with root package name */
    private final y f24165e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f24166f;

    /* renamed from: g  reason: collision with root package name */
    private MutableStateFlow f24167g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        z a(t tVar, PreviewView previewView, y yVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Observer {
        b() {
        }

        @Override // androidx.lifecycle.Observer
        /* renamed from: b */
        public void a(PreviewView.e value) {
            Intrinsics.checkNotNullParameter(value, "value");
            if (value == PreviewView.e.STREAMING) {
                z.this.f24167g.setValue(x.e.f24157a);
                z.this.e().getPreviewStreamState().n(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements View.OnAttachStateChangeListener {
        c() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            z.this.f24161a.c();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            z.this.f24161a.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f24170d;

        /* renamed from: i  reason: collision with root package name */
        int f24172i;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f24170d = obj;
            this.f24172i |= Integer.MIN_VALUE;
            Object j10 = z.this.j(this);
            if (j10 == gs.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public z(ko.a cameraStatsManager, gq.c sdkFilesManager, t cameraPreview, PreviewView previewView, y cameraXBinder) {
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(cameraXBinder, "cameraXBinder");
        this.f24161a = cameraStatsManager;
        this.f24162b = sdkFilesManager;
        this.f24163c = cameraPreview;
        this.f24164d = previewView;
        this.f24165e = cameraXBinder;
        this.f24167g = bt.l0.a(x.c.f24155a);
    }

    @Override // fo.i
    public void a(boolean z10) {
        this.f24163c.c(z10);
    }

    @Override // fo.i
    public v b() {
        return this.f24163c.e();
    }

    @Override // fo.i
    public bt.j0 c() {
        return this.f24167g;
    }

    @Override // fo.i
    public void d() {
        if (this.f24166f) {
            return;
        }
        this.f24167g.setValue(x.d.f24156a);
        this.f24166f = true;
        this.f24165e.a();
        e().getPreviewStreamState().j(new b());
        e().addOnAttachStateChangeListener(new c());
    }

    @Override // fo.i
    public void f() {
        this.f24163c.d(e());
    }

    @Override // fo.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f31985e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // fo.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f31985e;
        return Result.b(kotlin.c.a(new s0()));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // fo.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof fo.z.d
            if (r0 == 0) goto L13
            r0 = r5
            fo.z$d r0 = (fo.z.d) r0
            int r1 = r0.f24172i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f24172i = r1
            goto L18
        L13:
            fo.z$d r0 = new fo.z$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f24170d
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f24172i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            kotlin.c.b(r5)
            kotlin.Result r5 = (kotlin.Result) r5
            java.lang.Object r5 = r5.j()
            return r5
        L2f:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L37:
            kotlin.c.b(r5)
            fo.t r5 = r4.f24163c
            gq.c r2 = r4.f24162b
            r0.f24172i = r3
            java.lang.Object r5 = r5.j(r2, r0)
            if (r5 != r1) goto L47
            return r1
        L47:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: fo.z.j(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // fo.i
    /* renamed from: m */
    public PreviewView e() {
        return this.f24164d;
    }

    @Override // fo.i
    public void h(boolean z10) {
    }
}
