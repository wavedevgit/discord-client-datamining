package un;

import android.graphics.Point;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.params.MeteringRectangle;
import android.hardware.camera2.params.OutputConfiguration;
import android.os.Build;
import android.os.Handler;
import android.util.Size;
import android.view.Surface;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import ms.j1;
import ms.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: j  reason: collision with root package name */
    public static final a f51582j = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final l f51583a;

    /* renamed from: b  reason: collision with root package name */
    private final List f51584b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f51585c;

    /* renamed from: d  reason: collision with root package name */
    private final CameraCharacteristics f51586d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineScope f51587e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f51588f;

    /* renamed from: g  reason: collision with root package name */
    private MeteringRectangle f51589g;

    /* renamed from: h  reason: collision with root package name */
    private Job f51590h;

    /* renamed from: i  reason: collision with root package name */
    private CameraCaptureSession f51591i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: un.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0672a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f51592d;

            /* renamed from: e  reason: collision with root package name */
            Object f51593e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f51594i;

            /* renamed from: p  reason: collision with root package name */
            int f51596p;

            C0672a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f51594i = obj;
                this.f51596p |= Integer.MIN_VALUE;
                return a.this.a(null, null, null, null, null, this);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
        /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object a(un.l r12, android.hardware.camera2.CameraCharacteristics r13, java.util.List r14, android.hardware.camera2.CameraDevice r15, android.os.Handler r16, kotlin.coroutines.Continuation r17) {
            /*
                r11 = this;
                r0 = r17
                boolean r1 = r0 instanceof un.k.a.C0672a
                if (r1 == 0) goto L15
                r1 = r0
                un.k$a$a r1 = (un.k.a.C0672a) r1
                int r2 = r1.f51596p
                r3 = -2147483648(0xffffffff80000000, float:-0.0)
                r4 = r2 & r3
                if (r4 == 0) goto L15
                int r2 = r2 - r3
                r1.f51596p = r2
                goto L1a
            L15:
                un.k$a$a r1 = new un.k$a$a
                r1.<init>(r0)
            L1a:
                java.lang.Object r0 = r1.f51594i
                java.lang.Object r2 = ur.b.f()
                int r3 = r1.f51596p
                r4 = 1
                if (r3 == 0) goto L3b
                if (r3 != r4) goto L33
                java.lang.Object r12 = r1.f51593e
                un.k r12 = (un.k) r12
                java.lang.Object r13 = r1.f51592d
                un.k r13 = (un.k) r13
                kotlin.c.b(r0)
                goto L58
            L33:
                java.lang.IllegalStateException r12 = new java.lang.IllegalStateException
                java.lang.String r13 = "call to 'resume' before 'invoke' with coroutine"
                r12.<init>(r13)
                throw r12
            L3b:
                kotlin.c.b(r0)
                un.k r5 = new un.k
                r10 = 0
                r6 = r12
                r9 = r13
                r7 = r14
                r8 = r16
                r5.<init>(r6, r7, r8, r9, r10)
                r1.f51592d = r5
                r1.f51593e = r5
                r1.f51596p = r4
                java.lang.Object r0 = un.k.b(r5, r15, r1)
                if (r0 != r2) goto L56
                return r2
            L56:
                r12 = r5
                r13 = r12
            L58:
                android.hardware.camera2.CameraCaptureSession r0 = (android.hardware.camera2.CameraCaptureSession) r0
                un.k.c(r12, r0)
                return r13
            */
            throw new UnsupportedOperationException("Method not decompiled: un.k.a.a(un.l, android.hardware.camera2.CameraCharacteristics, java.util.List, android.hardware.camera2.CameraDevice, android.os.Handler, kotlin.coroutines.Continuation):java.lang.Object");
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends CameraCaptureSession.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Continuation f51597a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CameraDevice f51598b;

        b(Continuation continuation, CameraDevice cameraDevice) {
            this.f51597a = continuation;
            this.f51598b = cameraDevice;
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigureFailed(CameraCaptureSession session) {
            Intrinsics.checkNotNullParameter(session, "session");
            String id2 = this.f51598b.getId();
            RuntimeException runtimeException = new RuntimeException("Camera " + id2 + " session configuration failed");
            Continuation continuation = this.f51597a;
            Result.a aVar = Result.f31985e;
            continuation.resumeWith(Result.b(kotlin.c.a(runtimeException)));
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigured(CameraCaptureSession session) {
            Intrinsics.checkNotNullParameter(session, "session");
            this.f51597a.resumeWith(Result.b(session));
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onReady(CameraCaptureSession session) {
            Intrinsics.checkNotNullParameter(session, "session");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51599d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ long f51600e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k f51601i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f51602d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f51603e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(k kVar, Continuation continuation) {
                super(2, continuation);
                this.f51603e = kVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f51603e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                ur.b.f();
                if (this.f51602d == 0) {
                    kotlin.c.b(obj);
                    this.f51603e.d();
                    this.f51603e.l();
                    return Unit.f31988a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(long j10, k kVar, Continuation continuation) {
            super(2, continuation);
            this.f51600e = j10;
            this.f51601i = kVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f51600e, this.f51601i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0029, code lost:
            if (ms.i0.a(r4, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x003e, code lost:
            if (ms.g.g(r7, r1, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x0040, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = ur.b.f()
                int r1 = r6.f51599d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L1e
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r7)
                goto L41
            L12:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1a:
                kotlin.c.b(r7)
                goto L2c
            L1e:
                kotlin.c.b(r7)
                long r4 = r6.f51600e
                r6.f51599d = r3
                java.lang.Object r7 = ms.i0.a(r4, r6)
                if (r7 != r0) goto L2c
                goto L40
            L2c:
                ms.c1 r7 = ms.m0.c()
                un.k$c$a r1 = new un.k$c$a
                un.k r3 = r6.f51601i
                r4 = 0
                r1.<init>(r3, r4)
                r6.f51599d = r2
                java.lang.Object r7 = ms.g.g(r7, r1, r6)
                if (r7 != r0) goto L41
            L40:
                return r0
            L41:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: un.k.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public /* synthetic */ k(l lVar, List list, Handler handler, CameraCharacteristics cameraCharacteristics, DefaultConstructorMarker defaultConstructorMarker) {
        this(lVar, list, handler, cameraCharacteristics);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void d() {
        this.f51589g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object f(CameraDevice cameraDevice, Continuation continuation) {
        tr.d dVar = new tr.d(ur.b.c(continuation));
        k(cameraDevice, this.f51584b, this.f51585c, new b(dVar, cameraDevice));
        Object b10 = dVar.b();
        if (b10 == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return b10;
    }

    private final CaptureRequest g(CameraCaptureSession cameraCaptureSession, boolean z10, List list) {
        CaptureRequest.Builder createCaptureRequest = cameraCaptureSession.getDevice().createCaptureRequest(1);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            createCaptureRequest.addTarget((Surface) it.next());
        }
        createCaptureRequest.set(CaptureRequest.CONTROL_AE_TARGET_FPS_RANGE, this.f51583a.g());
        if (z10 && Build.VERSION.SDK_INT >= 33) {
            createCaptureRequest.set(CaptureRequest.CONTROL_VIDEO_STABILIZATION_MODE, 2);
        }
        if (this.f51588f) {
            createCaptureRequest.set(CaptureRequest.FLASH_MODE, 2);
        }
        MeteringRectangle meteringRectangle = this.f51589g;
        if (meteringRectangle != null && h()) {
            createCaptureRequest.set(CaptureRequest.CONTROL_AF_REGIONS, new MeteringRectangle[]{meteringRectangle});
        }
        CaptureRequest build = createCaptureRequest.build();
        Intrinsics.checkNotNullExpressionValue(build, "build(...)");
        return build;
    }

    private final boolean h() {
        int i10;
        Integer num = (Integer) this.f51586d.get(CameraCharacteristics.CONTROL_MAX_REGIONS_AF);
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        if (i10 < 1) {
            return false;
        }
        return true;
    }

    private final boolean k(CameraDevice cameraDevice, List list, Handler handler, CameraCaptureSession.StateCallback stateCallback) {
        if (Build.VERSION.SDK_INT >= 33) {
            ArrayList arrayList = new ArrayList();
            Iterator it = list.iterator();
            while (it.hasNext()) {
                OutputConfiguration outputConfiguration = new OutputConfiguration((Surface) it.next());
                outputConfiguration.setDynamicRangeProfile(this.f51583a.a().a());
                arrayList.add(outputConfiguration);
            }
            cameraDevice.createCaptureSessionByOutputConfigurations(arrayList, stateCallback, handler);
            return true;
        }
        cameraDevice.createCaptureSession(list, stateCallback, handler);
        return false;
    }

    public final void e() {
        kotlinx.coroutines.i.f(this.f51587e, null, 1, null);
    }

    public final void i(boolean z10) {
        this.f51588f = z10;
    }

    public final void j(int i10, int i11, Size size, long j10) {
        Job d10;
        Intrinsics.checkNotNullParameter(size, "size");
        this.f51589g = new MeteringRectangle(new Point(i10, i11), size, 1000);
        Job job = this.f51590h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        d10 = ms.i.d(this.f51587e, null, null, new c(j10, this, null), 3, null);
        this.f51590h = d10;
    }

    public final void l() {
        CameraCaptureSession cameraCaptureSession = this.f51591i;
        if (cameraCaptureSession == null) {
            Intrinsics.throwUninitializedPropertyAccessException("session");
            cameraCaptureSession = null;
        }
        CaptureRequest g10 = g(cameraCaptureSession, this.f51583a.a().b(), this.f51584b);
        CameraCaptureSession cameraCaptureSession2 = this.f51591i;
        if (cameraCaptureSession2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("session");
            cameraCaptureSession2 = null;
        }
        cameraCaptureSession2.setRepeatingRequest(g10, null, this.f51585c);
    }

    private k(l lVar, List list, Handler handler, CameraCharacteristics cameraCharacteristics) {
        this.f51583a = lVar;
        this.f51584b = list;
        this.f51585c = handler;
        this.f51586d = cameraCharacteristics;
        this.f51587e = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
    }
}
