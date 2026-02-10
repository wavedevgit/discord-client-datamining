package vn;

import android.view.View;
import androidx.camera.view.PreviewView;
import androidx.lifecycle.Observer;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import vn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements i {

    /* renamed from: a  reason: collision with root package name */
    private final ao.a f52765a;

    /* renamed from: b  reason: collision with root package name */
    private final xp.c f52766b;

    /* renamed from: c  reason: collision with root package name */
    private final t f52767c;

    /* renamed from: d  reason: collision with root package name */
    private final PreviewView f52768d;

    /* renamed from: e  reason: collision with root package name */
    private final y f52769e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f52770f;

    /* renamed from: g  reason: collision with root package name */
    private MutableStateFlow f52771g;

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
                z.this.f52771g.setValue(x.e.f52761a);
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
            z.this.f52765a.c();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            z.this.f52765a.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f52774d;

        /* renamed from: i  reason: collision with root package name */
        int f52776i;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52774d = obj;
            this.f52776i |= Integer.MIN_VALUE;
            Object j10 = z.this.j(this);
            if (j10 == xr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public z(ao.a cameraStatsManager, xp.c sdkFilesManager, t cameraPreview, PreviewView previewView, y cameraXBinder) {
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(cameraXBinder, "cameraXBinder");
        this.f52765a = cameraStatsManager;
        this.f52766b = sdkFilesManager;
        this.f52767c = cameraPreview;
        this.f52768d = previewView;
        this.f52769e = cameraXBinder;
        this.f52771g = ss.l0.a(x.c.f52759a);
    }

    @Override // vn.i
    public void a(boolean z10) {
        this.f52767c.c(z10);
    }

    @Override // vn.i
    public v b() {
        return this.f52767c.e();
    }

    @Override // vn.i
    public ss.j0 c() {
        return this.f52771g;
    }

    @Override // vn.i
    public void d() {
        if (this.f52770f) {
            return;
        }
        this.f52771g.setValue(x.d.f52760a);
        this.f52770f = true;
        this.f52769e.a();
        e().getPreviewStreamState().j(new b());
        e().addOnAttachStateChangeListener(new c());
    }

    @Override // vn.i
    public void f() {
        this.f52767c.d(e());
    }

    @Override // vn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f31762e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // vn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f31762e;
        return Result.b(kotlin.c.a(new s0()));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // vn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof vn.z.d
            if (r0 == 0) goto L13
            r0 = r5
            vn.z$d r0 = (vn.z.d) r0
            int r1 = r0.f52776i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f52776i = r1
            goto L18
        L13:
            vn.z$d r0 = new vn.z$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f52774d
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f52776i
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
            vn.t r5 = r4.f52767c
            xp.c r2 = r4.f52766b
            r0.f52776i = r3
            java.lang.Object r5 = r5.j(r2, r0)
            if (r5 != r1) goto L47
            return r1
        L47:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: vn.z.j(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // vn.i
    /* renamed from: m */
    public PreviewView e() {
        return this.f52768d;
    }

    @Override // vn.i
    public void h(boolean z10) {
    }
}
