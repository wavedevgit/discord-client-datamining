package mn;

import android.view.View;
import androidx.camera.view.PreviewView;
import androidx.lifecycle.Observer;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import mn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements i {

    /* renamed from: a  reason: collision with root package name */
    private final rn.a f39344a;

    /* renamed from: b  reason: collision with root package name */
    private final op.c f39345b;

    /* renamed from: c  reason: collision with root package name */
    private final t f39346c;

    /* renamed from: d  reason: collision with root package name */
    private final PreviewView f39347d;

    /* renamed from: e  reason: collision with root package name */
    private final y f39348e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39349f;

    /* renamed from: g  reason: collision with root package name */
    private MutableStateFlow f39350g;

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
                z.this.f39350g.setValue(x.e.f39340a);
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
            z.this.f39344a.c();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            z.this.f39344a.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f39353d;

        /* renamed from: i  reason: collision with root package name */
        int f39355i;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f39353d = obj;
            this.f39355i |= Integer.MIN_VALUE;
            Object j10 = z.this.j(this);
            if (j10 == or.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public z(rn.a cameraStatsManager, op.c sdkFilesManager, t cameraPreview, PreviewView previewView, y cameraXBinder) {
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(cameraXBinder, "cameraXBinder");
        this.f39344a = cameraStatsManager;
        this.f39345b = sdkFilesManager;
        this.f39346c = cameraPreview;
        this.f39347d = previewView;
        this.f39348e = cameraXBinder;
        this.f39350g = js.l0.a(x.c.f39338a);
    }

    @Override // mn.i
    public void a(boolean z10) {
        this.f39346c.c(z10);
    }

    @Override // mn.i
    public v b() {
        return this.f39346c.e();
    }

    @Override // mn.i
    public js.j0 c() {
        return this.f39350g;
    }

    @Override // mn.i
    public void d() {
        if (this.f39349f) {
            return;
        }
        this.f39350g.setValue(x.d.f39339a);
        this.f39349f = true;
        this.f39348e.a();
        e().getPreviewStreamState().j(new b());
        e().addOnAttachStateChangeListener(new c());
    }

    @Override // mn.i
    public void f() {
        this.f39346c.d(e());
    }

    @Override // mn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f33279e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // mn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f33279e;
        return Result.b(kotlin.c.a(new s0()));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // mn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof mn.z.d
            if (r0 == 0) goto L13
            r0 = r5
            mn.z$d r0 = (mn.z.d) r0
            int r1 = r0.f39355i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f39355i = r1
            goto L18
        L13:
            mn.z$d r0 = new mn.z$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f39353d
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f39355i
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
            mn.t r5 = r4.f39346c
            op.c r2 = r4.f39345b
            r0.f39355i = r3
            java.lang.Object r5 = r5.j(r2, r0)
            if (r5 != r1) goto L47
            return r1
        L47:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: mn.z.j(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // mn.i
    /* renamed from: m */
    public PreviewView e() {
        return this.f39347d;
    }

    @Override // mn.i
    public void h(boolean z10) {
    }
}
