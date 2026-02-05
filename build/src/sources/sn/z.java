package sn;

import android.view.View;
import androidx.camera.view.PreviewView;
import androidx.lifecycle.Observer;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import sn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements i {

    /* renamed from: a  reason: collision with root package name */
    private final xn.a f50011a;

    /* renamed from: b  reason: collision with root package name */
    private final up.c f50012b;

    /* renamed from: c  reason: collision with root package name */
    private final t f50013c;

    /* renamed from: d  reason: collision with root package name */
    private final PreviewView f50014d;

    /* renamed from: e  reason: collision with root package name */
    private final y f50015e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f50016f;

    /* renamed from: g  reason: collision with root package name */
    private MutableStateFlow f50017g;

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
                z.this.f50017g.setValue(x.e.f50007a);
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
            z.this.f50011a.c();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            z.this.f50011a.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f50020d;

        /* renamed from: i  reason: collision with root package name */
        int f50022i;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50020d = obj;
            this.f50022i |= Integer.MIN_VALUE;
            Object j10 = z.this.j(this);
            if (j10 == ur.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public z(xn.a cameraStatsManager, up.c sdkFilesManager, t cameraPreview, PreviewView previewView, y cameraXBinder) {
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(cameraXBinder, "cameraXBinder");
        this.f50011a = cameraStatsManager;
        this.f50012b = sdkFilesManager;
        this.f50013c = cameraPreview;
        this.f50014d = previewView;
        this.f50015e = cameraXBinder;
        this.f50017g = ps.l0.a(x.c.f50005a);
    }

    @Override // sn.i
    public void a(boolean z10) {
        this.f50013c.c(z10);
    }

    @Override // sn.i
    public v b() {
        return this.f50013c.e();
    }

    @Override // sn.i
    public ps.j0 c() {
        return this.f50017g;
    }

    @Override // sn.i
    public void d() {
        if (this.f50016f) {
            return;
        }
        this.f50017g.setValue(x.d.f50006a);
        this.f50016f = true;
        this.f50015e.a();
        e().getPreviewStreamState().j(new b());
        e().addOnAttachStateChangeListener(new c());
    }

    @Override // sn.i
    public void f() {
        this.f50013c.d(e());
    }

    @Override // sn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f31985e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // sn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f31985e;
        return Result.b(kotlin.c.a(new s0()));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // sn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof sn.z.d
            if (r0 == 0) goto L13
            r0 = r5
            sn.z$d r0 = (sn.z.d) r0
            int r1 = r0.f50022i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f50022i = r1
            goto L18
        L13:
            sn.z$d r0 = new sn.z$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f50020d
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f50022i
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
            sn.t r5 = r4.f50013c
            up.c r2 = r4.f50012b
            r0.f50022i = r3
            java.lang.Object r5 = r5.j(r2, r0)
            if (r5 != r1) goto L47
            return r1
        L47:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: sn.z.j(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // sn.i
    /* renamed from: m */
    public PreviewView e() {
        return this.f50014d;
    }

    @Override // sn.i
    public void h(boolean z10) {
    }
}
