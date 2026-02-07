package un;

import android.content.Context;
import android.util.Size;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.camera.core.f;
import androidx.camera.view.PreviewView;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import com.google.common.util.concurrent.ListenableFuture;
import java.io.File;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import o0.g;
import x.b0;
import x.g1;
import x.n0;
import x.p;
import x.y1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t {

    /* renamed from: a  reason: collision with root package name */
    private w f51850a;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f51851d = new a("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f51852e = new a("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f51853i = new a("EXTERNAL", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f51854o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51855p;

        static {
            a[] a10 = a();
            f51854o = a10;
            f51855p = xr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f51851d, f51852e, f51853i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f51854o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements DefaultLifecycleObserver {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ExecutorService f51856d;

        b(ExecutorService executorService) {
            this.f51856d = executorService;
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onDestroy(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            this.f51856d.shutdown();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f51857d;

        /* renamed from: e  reason: collision with root package name */
        Object f51858e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f51859i;

        /* renamed from: p  reason: collision with root package name */
        int f51861p;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f51859i = obj;
            this.f51861p |= Integer.MIN_VALUE;
            Object j10 = t.this.j(null, this);
            if (j10 == wr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements n0.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Continuation f51862a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ File f51863b;

        d(Continuation continuation, File file) {
            this.f51862a = continuation;
            this.f51863b = file;
        }

        @Override // x.n0.f
        public void d(n0.h outputFileResults) {
            Intrinsics.checkNotNullParameter(outputFileResults, "outputFileResults");
            Continuation continuation = this.f51862a;
            Result.a aVar = Result.f32053e;
            continuation.resumeWith(Result.b(Result.a(Result.b(this.f51863b))));
        }

        @Override // x.n0.f
        public void e(x.o0 exception) {
            Intrinsics.checkNotNullParameter(exception, "exception");
            Continuation continuation = this.f51862a;
            Result.a aVar = Result.f32053e;
            continuation.resumeWith(Result.b(Result.a(Result.b(kotlin.c.a(exception)))));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(final PreviewView previewView, final boolean z10, final f.a aVar, final x.p pVar, final t tVar, final Function1 function1) {
        if (!previewView.isAttachedToWindow()) {
            return;
        }
        Context context = previewView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        ActionBar supportActionBar = c0.b(context).getSupportActionBar();
        if (supportActionBar != null) {
            supportActionBar.k();
        }
        final int rotation = previewView.getDisplay().getRotation();
        final ExecutorService newSingleThreadExecutor = Executors.newSingleThreadExecutor();
        g.a aVar2 = o0.g.f41349i;
        Context context2 = previewView.getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        final ListenableFuture b10 = aVar2.b(context2);
        b10.a(new Runnable() { // from class: un.s
            @Override // java.lang.Runnable
            public final void run() {
                t.h(ListenableFuture.this, rotation, z10, aVar, newSingleThreadExecutor, previewView, pVar, tVar, function1);
            }
        }, androidx.core.content.a.h(previewView.getContext()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(ListenableFuture listenableFuture, int i10, boolean z10, f.a aVar, ExecutorService executorService, PreviewView previewView, x.p pVar, t tVar, Function1 function1) {
        x.n0 n0Var;
        o0.g gVar = (o0.g) listenableFuture.get();
        g1 c10 = new g1.a().m(i10).c();
        Intrinsics.checkNotNullExpressionValue(c10, "build(...)");
        y1.a aVar2 = new y1.a();
        aVar2.a(c10);
        if (z10) {
            n0Var = new n0.b().f(1).o(i10).c();
            aVar2.a(n0Var);
        } else {
            n0Var = null;
        }
        if (aVar != null) {
            androidx.camera.core.f c11 = new f.c().i(0).o(new Size(2000, 2000)).p(i10).c();
            Intrinsics.checkNotNullExpressionValue(c11, "build(...)");
            c11.k0(executorService, aVar);
            aVar2.a(c11);
        }
        gVar.y();
        try {
            Context context = previewView.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            AppCompatActivity b10 = c0.b(context);
            y1 b11 = aVar2.b();
            Intrinsics.checkNotNullExpressionValue(b11, "build(...)");
            x.i n10 = gVar.n(b10, pVar, b11);
            tVar.f51850a = new w(n10, n0Var, tVar.i(n10));
            Context context2 = previewView.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            rp.f.i(context2).getLifecycle().a(new b(executorService));
            c10.h0(previewView.getSurfaceProvider());
        } catch (IllegalArgumentException unused) {
            function1.invoke(new s0());
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x0065 A[Catch: IllegalArgumentException -> 0x0090, TryCatch #0 {IllegalArgumentException -> 0x0090, blocks: (B:2:0x0000, B:4:0x0025, B:5:0x002a, B:16:0x0058, B:17:0x005a, B:19:0x0065, B:22:0x0069, B:23:0x006d, B:25:0x0073, B:27:0x0085, B:28:0x008a, B:13:0x004f, B:15:0x0055, B:8:0x0042, B:10:0x0049), top: B:32:0x0000 }] */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0073 A[Catch: IllegalArgumentException -> 0x0090, TryCatch #0 {IllegalArgumentException -> 0x0090, blocks: (B:2:0x0000, B:4:0x0025, B:5:0x002a, B:16:0x0058, B:17:0x005a, B:19:0x0065, B:22:0x0069, B:23:0x006d, B:25:0x0073, B:27:0x0085, B:28:0x008a, B:13:0x004f, B:15:0x0055, B:8:0x0042, B:10:0x0049), top: B:32:0x0000 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final un.v i(x.i r12) {
        /*
            r11 = this;
            x.o r12 = r12.b()     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.String r0 = "getCameraInfo(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r12, r0)     // Catch: java.lang.IllegalArgumentException -> L90
            w.h r12 = w.h.a(r12)     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.String r0 = "from(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r12, r0)     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.String r0 = r12.c()     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.String r1 = "getCameraId(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)     // Catch: java.lang.IllegalArgumentException -> L90
            android.hardware.camera2.CameraCharacteristics$Key r1 = android.hardware.camera2.CameraCharacteristics.SENSOR_INFO_ACTIVE_ARRAY_SIZE     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.Object r1 = r12.b(r1)     // Catch: java.lang.IllegalArgumentException -> L90
            android.graphics.Rect r1 = (android.graphics.Rect) r1     // Catch: java.lang.IllegalArgumentException -> L90
            if (r1 != 0) goto L2a
            android.graphics.Rect r1 = new android.graphics.Rect     // Catch: java.lang.IllegalArgumentException -> L90
            r1.<init>()     // Catch: java.lang.IllegalArgumentException -> L90
        L2a:
            android.util.Size r2 = new android.util.Size     // Catch: java.lang.IllegalArgumentException -> L90
            int r3 = r1.width()     // Catch: java.lang.IllegalArgumentException -> L90
            int r1 = r1.height()     // Catch: java.lang.IllegalArgumentException -> L90
            r2.<init>(r3, r1)     // Catch: java.lang.IllegalArgumentException -> L90
            android.hardware.camera2.CameraCharacteristics$Key r1 = android.hardware.camera2.CameraCharacteristics.LENS_FACING     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.Object r1 = r12.b(r1)     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.Integer r1 = (java.lang.Integer) r1     // Catch: java.lang.IllegalArgumentException -> L90
            if (r1 != 0) goto L42
            goto L4c
        L42:
            int r3 = r1.intValue()     // Catch: java.lang.IllegalArgumentException -> L90
            r4 = 1
            if (r3 != r4) goto L4c
            un.v$b r1 = un.v.b.f51881e     // Catch: java.lang.IllegalArgumentException -> L90
            goto L5a
        L4c:
            if (r1 != 0) goto L4f
            goto L58
        L4f:
            int r1 = r1.intValue()     // Catch: java.lang.IllegalArgumentException -> L90
            if (r1 != 0) goto L58
            un.v$b r1 = un.v.b.f51880d     // Catch: java.lang.IllegalArgumentException -> L90
            goto L5a
        L58:
            un.v$b r1 = un.v.b.f51882i     // Catch: java.lang.IllegalArgumentException -> L90
        L5a:
            android.hardware.camera2.CameraCharacteristics$Key r3 = android.hardware.camera2.CameraCharacteristics.CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.Object r12 = r12.b(r3)     // Catch: java.lang.IllegalArgumentException -> L90
            android.util.Range[] r12 = (android.util.Range[]) r12     // Catch: java.lang.IllegalArgumentException -> L90
            r3 = 0
            if (r12 == 0) goto L8a
            int r4 = r12.length     // Catch: java.lang.IllegalArgumentException -> L90
            if (r4 != 0) goto L69
            goto L8a
        L69:
            java.util.Iterator r12 = kotlin.jvm.internal.ArrayIteratorKt.iterator(r12)     // Catch: java.lang.IllegalArgumentException -> L90
        L6d:
            boolean r4 = r12.hasNext()     // Catch: java.lang.IllegalArgumentException -> L90
            if (r4 == 0) goto L8a
            java.lang.Object r4 = r12.next()     // Catch: java.lang.IllegalArgumentException -> L90
            android.util.Range r4 = (android.util.Range) r4     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.Comparable r4 = r4.getUpper()     // Catch: java.lang.IllegalArgumentException -> L90
            java.lang.Integer r4 = (java.lang.Integer) r4     // Catch: java.lang.IllegalArgumentException -> L90
            int r5 = r4.intValue()     // Catch: java.lang.IllegalArgumentException -> L90
            if (r5 <= r3) goto L6d
            int r3 = r4.intValue()     // Catch: java.lang.IllegalArgumentException -> L90
            goto L6d
        L8a:
            un.v r12 = new un.v     // Catch: java.lang.IllegalArgumentException -> L90
            r12.<init>(r0, r1, r2, r3)     // Catch: java.lang.IllegalArgumentException -> L90
            return r12
        L90:
            un.v r4 = new un.v
            r9 = 15
            r10 = 0
            r5 = 0
            r6 = 0
            r7 = 0
            r8 = 0
            r4.<init>(r5, r6, r7, r8, r9, r10)
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: un.t.i(x.i):un.v");
    }

    public final void c(boolean z10) {
        x.i a10;
        w wVar = this.f51850a;
        if (wVar != null && (a10 = wVar.a()) != null) {
            a10.a().a(z10);
        }
    }

    public final void d(PreviewView previewView) {
        x.i a10;
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        w wVar = this.f51850a;
        if (wVar != null && (a10 = wVar.a()) != null) {
            a10.a().h(new b0.a(new x.y(previewView.getDisplay(), a10.b(), previewView.getWidth(), previewView.getHeight()).b(previewView.getWidth() / 2.0f, previewView.getHeight() / 2.0f), 1).b());
        }
    }

    public final v e() {
        v b10;
        w wVar = this.f51850a;
        if (wVar != null && (b10 = wVar.b()) != null) {
            return b10;
        }
        return new v(null, null, null, 0, 15, null);
    }

    public final void f(final PreviewView previewView, a cameraDirection, final f.a aVar, final boolean z10, final Function1 onCameraError) {
        int i10;
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(cameraDirection, "cameraDirection");
        Intrinsics.checkNotNullParameter(onCameraError, "onCameraError");
        p.a aVar2 = new p.a();
        if (cameraDirection == a.f51851d) {
            i10 = 0;
        } else {
            i10 = 1;
        }
        final x.p a10 = aVar2.b(i10).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        previewView.post(new Runnable() { // from class: un.r
            @Override // java.lang.Runnable
            public final void run() {
                t.g(PreviewView.this, z10, aVar, a10, this, onCameraError);
            }
        });
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0039  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object j(wp.c r7, kotlin.coroutines.Continuation r8) {
        /*
            r6 = this;
            boolean r0 = r8 instanceof un.t.c
            if (r0 == 0) goto L13
            r0 = r8
            un.t$c r0 = (un.t.c) r0
            int r1 = r0.f51861p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f51861p = r1
            goto L18
        L13:
            un.t$c r0 = new un.t$c
            r0.<init>(r8)
        L18:
            java.lang.Object r8 = r0.f51859i
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f51861p
            r3 = 1
            if (r2 == 0) goto L39
            if (r2 != r3) goto L31
            java.lang.Object r7 = r0.f51858e
            wp.c r7 = (wp.c) r7
            java.lang.Object r7 = r0.f51857d
            un.t r7 = (un.t) r7
            kotlin.c.b(r8)
            goto L8d
        L31:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r8 = "call to 'resume' before 'invoke' with coroutine"
            r7.<init>(r8)
            throw r7
        L39:
            kotlin.c.b(r8)
            r0.f51857d = r6
            r0.f51858e = r7
            r0.f51861p = r3
            vr.d r8 = new vr.d
            kotlin.coroutines.Continuation r2 = wr.b.c(r0)
            r8.<init>(r2)
            java.lang.String r2 = "jpg"
            java.io.File r7 = r7.c(r2)
            x.n0$g$a r2 = new x.n0$g$a
            r2.<init>(r7)
            x.n0$g r2 = r2.a()
            java.lang.String r3 = "build(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r3)
            un.w r3 = r6.f51850a
            if (r3 == 0) goto L7d
            x.n0 r3 = r3.c()
            if (r3 == 0) goto L7d
            os.c1 r4 = os.m0.c()
            os.c1 r4 = r4.f2()
            java.util.concurrent.Executor r4 = os.u0.a(r4)
            un.t$d r5 = new un.t$d
            r5.<init>(r8, r7)
            r3.x0(r2, r4, r5)
        L7d:
            java.lang.Object r8 = r8.b()
            java.lang.Object r7 = wr.b.f()
            if (r8 != r7) goto L8a
            kotlin.coroutines.jvm.internal.g.c(r0)
        L8a:
            if (r8 != r1) goto L8d
            return r1
        L8d:
            kotlin.Result r8 = (kotlin.Result) r8
            java.lang.Object r7 = r8.j()
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: un.t.j(wp.c, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
