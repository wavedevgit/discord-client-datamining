package nn;

import android.view.View;
import androidx.camera.view.PreviewView;
import androidx.lifecycle.Observer;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import nn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements i {

    /* renamed from: a  reason: collision with root package name */
    private final sn.a f42103a;

    /* renamed from: b  reason: collision with root package name */
    private final pp.c f42104b;

    /* renamed from: c  reason: collision with root package name */
    private final t f42105c;

    /* renamed from: d  reason: collision with root package name */
    private final PreviewView f42106d;

    /* renamed from: e  reason: collision with root package name */
    private final y f42107e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f42108f;

    /* renamed from: g  reason: collision with root package name */
    private MutableStateFlow f42109g;

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
                z.this.f42109g.setValue(x.e.f42099a);
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
            z.this.f42103a.c();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            z.this.f42103a.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f42112d;

        /* renamed from: i  reason: collision with root package name */
        int f42114i;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f42112d = obj;
            this.f42114i |= Integer.MIN_VALUE;
            Object j10 = z.this.j(this);
            if (j10 == pr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public z(sn.a cameraStatsManager, pp.c sdkFilesManager, t cameraPreview, PreviewView previewView, y cameraXBinder) {
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(cameraXBinder, "cameraXBinder");
        this.f42103a = cameraStatsManager;
        this.f42104b = sdkFilesManager;
        this.f42105c = cameraPreview;
        this.f42106d = previewView;
        this.f42107e = cameraXBinder;
        this.f42109g = ks.l0.a(x.c.f42097a);
    }

    @Override // nn.i
    public void a(boolean z10) {
        this.f42105c.c(z10);
    }

    @Override // nn.i
    public v b() {
        return this.f42105c.e();
    }

    @Override // nn.i
    public ks.j0 c() {
        return this.f42109g;
    }

    @Override // nn.i
    public void d() {
        if (this.f42108f) {
            return;
        }
        this.f42109g.setValue(x.d.f42098a);
        this.f42108f = true;
        this.f42107e.a();
        e().getPreviewStreamState().j(new b());
        e().addOnAttachStateChangeListener(new c());
    }

    @Override // nn.i
    public void f() {
        this.f42105c.d(e());
    }

    @Override // nn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f33071e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // nn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f33071e;
        return Result.b(kotlin.c.a(new s0()));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // nn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof nn.z.d
            if (r0 == 0) goto L13
            r0 = r5
            nn.z$d r0 = (nn.z.d) r0
            int r1 = r0.f42114i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f42114i = r1
            goto L18
        L13:
            nn.z$d r0 = new nn.z$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f42112d
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f42114i
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
            nn.t r5 = r4.f42105c
            pp.c r2 = r4.f42104b
            r0.f42114i = r3
            java.lang.Object r5 = r5.j(r2, r0)
            if (r5 != r1) goto L47
            return r1
        L47:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: nn.z.j(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // nn.i
    /* renamed from: m */
    public PreviewView e() {
        return this.f42106d;
    }

    @Override // nn.i
    public void h(boolean z10) {
    }
}
