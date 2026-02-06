package un;

import android.view.View;
import androidx.camera.view.PreviewView;
import androidx.lifecycle.Observer;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import un.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements i {

    /* renamed from: a  reason: collision with root package name */
    private final zn.a f51857a;

    /* renamed from: b  reason: collision with root package name */
    private final wp.c f51858b;

    /* renamed from: c  reason: collision with root package name */
    private final t f51859c;

    /* renamed from: d  reason: collision with root package name */
    private final PreviewView f51860d;

    /* renamed from: e  reason: collision with root package name */
    private final y f51861e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f51862f;

    /* renamed from: g  reason: collision with root package name */
    private MutableStateFlow f51863g;

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
                z.this.f51863g.setValue(x.e.f51853a);
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
            z.this.f51857a.c();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            z.this.f51857a.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f51866d;

        /* renamed from: i  reason: collision with root package name */
        int f51868i;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f51866d = obj;
            this.f51868i |= Integer.MIN_VALUE;
            Object j10 = z.this.j(this);
            if (j10 == wr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public z(zn.a cameraStatsManager, wp.c sdkFilesManager, t cameraPreview, PreviewView previewView, y cameraXBinder) {
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(cameraXBinder, "cameraXBinder");
        this.f51857a = cameraStatsManager;
        this.f51858b = sdkFilesManager;
        this.f51859c = cameraPreview;
        this.f51860d = previewView;
        this.f51861e = cameraXBinder;
        this.f51863g = rs.l0.a(x.c.f51851a);
    }

    @Override // un.i
    public void a(boolean z10) {
        this.f51859c.c(z10);
    }

    @Override // un.i
    public v b() {
        return this.f51859c.e();
    }

    @Override // un.i
    public rs.j0 c() {
        return this.f51863g;
    }

    @Override // un.i
    public void d() {
        if (this.f51862f) {
            return;
        }
        this.f51863g.setValue(x.d.f51852a);
        this.f51862f = true;
        this.f51861e.a();
        e().getPreviewStreamState().j(new b());
        e().addOnAttachStateChangeListener(new c());
    }

    @Override // un.i
    public void f() {
        this.f51859c.d(e());
    }

    @Override // un.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f32005e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // un.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f32005e;
        return Result.b(kotlin.c.a(new s0()));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // un.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof un.z.d
            if (r0 == 0) goto L13
            r0 = r5
            un.z$d r0 = (un.z.d) r0
            int r1 = r0.f51868i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f51868i = r1
            goto L18
        L13:
            un.z$d r0 = new un.z$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f51866d
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f51868i
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
            un.t r5 = r4.f51859c
            wp.c r2 = r4.f51858b
            r0.f51868i = r3
            java.lang.Object r5 = r5.j(r2, r0)
            if (r5 != r1) goto L47
            return r1
        L47:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: un.z.j(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // un.i
    /* renamed from: m */
    public PreviewView e() {
        return this.f51860d;
    }

    @Override // un.i
    public void h(boolean z10) {
    }
}
