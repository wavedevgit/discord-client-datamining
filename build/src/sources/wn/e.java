package wn;

import android.content.Context;
import android.graphics.Bitmap;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.media.Image;
import android.media.ImageReader;
import android.os.ConditionVariable;
import android.os.Handler;
import android.os.HandlerThread;
import android.util.Size;
import android.view.SurfaceHolder;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import java.io.File;
import java.io.FileOutputStream;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import os.j1;
import os.m0;
import rs.c0;
import rs.j0;
import rs.l0;
import un.v;
import wn.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {
    public static final b G = new b(null);
    private boolean A;
    private SurfaceHolder.Callback B;
    private float C;
    private ImageReader D;
    private MutableSharedFlow E;
    private ConditionVariable F;

    /* renamed from: a  reason: collision with root package name */
    private final Context f53948a;

    /* renamed from: b  reason: collision with root package name */
    private final wn.l f53949b;

    /* renamed from: c  reason: collision with root package name */
    private final Camera2PreviewView f53950c;

    /* renamed from: d  reason: collision with root package name */
    private final wn.b f53951d;

    /* renamed from: e  reason: collision with root package name */
    private final ao.a f53952e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f53953f;

    /* renamed from: g  reason: collision with root package name */
    private final zn.a f53954g;

    /* renamed from: h  reason: collision with root package name */
    private final wp.c f53955h;

    /* renamed from: i  reason: collision with root package name */
    private final v f53956i;

    /* renamed from: j  reason: collision with root package name */
    private final CoroutineScope f53957j;

    /* renamed from: k  reason: collision with root package name */
    private final String f53958k;

    /* renamed from: l  reason: collision with root package name */
    private final CameraManager f53959l;

    /* renamed from: m  reason: collision with root package name */
    private final CameraCharacteristics f53960m;

    /* renamed from: n  reason: collision with root package name */
    private final int f53961n;

    /* renamed from: o  reason: collision with root package name */
    private final r f53962o;

    /* renamed from: p  reason: collision with root package name */
    private CameraDevice f53963p;

    /* renamed from: q  reason: collision with root package name */
    private final HandlerThread f53964q;

    /* renamed from: r  reason: collision with root package name */
    private final Handler f53965r;

    /* renamed from: s  reason: collision with root package name */
    private wn.k f53966s;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f53967t;

    /* renamed from: u  reason: collision with root package name */
    private volatile boolean f53968u;

    /* renamed from: v  reason: collision with root package name */
    private volatile boolean f53969v;

    /* renamed from: w  reason: collision with root package name */
    private volatile boolean f53970w;

    /* renamed from: x  reason: collision with root package name */
    private final MutableStateFlow f53971x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f53972y;

    /* renamed from: z  reason: collision with root package name */
    private final j0 f53973z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53974d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: wn.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0721a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e f53976d;

            C0721a(e eVar) {
                this.f53976d = eVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(Image image, Continuation continuation) {
                this.f53976d.P(image);
                return Unit.f32056a;
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f53974d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = e.this.E;
                C0721a c0721a = new C0721a(e.this);
                this.f53974d = 1;
                if (mutableSharedFlow.collect(c0721a, this) == f10) {
                    return f10;
                }
            }
            throw new qr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c extends Exception {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String message, Throwable cause) {
                super(message, cause, null);
                Intrinsics.checkNotNullParameter(message, "message");
                Intrinsics.checkNotNullParameter(cause, "cause");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {
            public b() {
                super(null);
            }
        }

        public /* synthetic */ c(String str, Throwable th2, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, th2);
        }

        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }

        private c(String str, Throwable th2) {
            super(str, th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final a f53977a = new a();

            private a() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1835001754;
            }

            public String toString() {
                return "Created";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final b f53978a = new b();

            private b() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1111701481;
            }

            public String toString() {
                return "Destroyed";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements d {

            /* renamed from: a  reason: collision with root package name */
            private final c f53979a;

            public c(c error) {
                Intrinsics.checkNotNullParameter(error, "error");
                this.f53979a = error;
            }

            public final c a() {
                return this.f53979a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f53979a, ((c) obj).f53979a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f53979a.hashCode();
            }

            public String toString() {
                c cVar = this.f53979a;
                return "Error(error=" + cVar + ")";
            }
        }

        /* renamed from: wn.e$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0722d implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final C0722d f53980a = new C0722d();

            private C0722d() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0722d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -465774081;
            }

            public String toString() {
                return "Started";
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: wn.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0723e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53981d;

        C0723e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0723e(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f53981d == 0) {
                kotlin.c.b(obj);
                Object value = e.this.f53972y.getValue();
                d.b bVar = d.b.f53978a;
                if (Intrinsics.areEqual(value, bVar)) {
                    return Unit.f32056a;
                }
                e.this.f53972y.setValue(bVar);
                e.this.J().getHolder().removeCallback(e.this.B);
                e.this.F.block(2000L);
                e.this.f53962o.f();
                e.this.D.close();
                wn.k kVar = e.this.f53966s;
                if (kVar != null) {
                    kVar.e();
                }
                e.this.f53966s = null;
                CameraDevice cameraDevice = e.this.f53963p;
                if (cameraDevice != null) {
                    cameraDevice.close();
                }
                e.this.f53963p = null;
                e.this.f53954g.b();
                kotlinx.coroutines.i.f(e.this.f53957j, null, 1, null);
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0723e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f53983d;

        /* renamed from: e  reason: collision with root package name */
        int f53984e;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:18:0x005f, code lost:
            if (r2 == r7) goto L25;
         */
        /* JADX WARN: Code restructure failed: missing block: B:35:0x014d, code lost:
            if (r0 == r7) goto L25;
         */
        /* JADX WARN: Removed duplicated region for block: B:23:0x0070  */
        /* JADX WARN: Removed duplicated region for block: B:33:0x0119  */
        /* JADX WARN: Removed duplicated region for block: B:40:0x015d  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r11) {
            /*
                Method dump skipped, instructions count: 357
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: wn.e.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f53986a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ e f53987b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f53988c;

        g(CancellableContinuation cancellableContinuation, e eVar, String str) {
            this.f53986a = cancellableContinuation;
            this.f53987b = eVar;
            this.f53988c = str;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f53987b.f53963p = null;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onError(CameraDevice device, int i10) {
            String str;
            Intrinsics.checkNotNullParameter(device, "device");
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                str = "Unknown";
                            } else {
                                str = "Fatal (service)";
                            }
                        } else {
                            str = "Fatal (device)";
                        }
                    } else {
                        str = "Device policy";
                    }
                } else {
                    str = "Maximum cameras in use";
                }
            } else {
                str = "Camera in use";
            }
            String str2 = this.f53988c;
            RuntimeException runtimeException = new RuntimeException("Camera " + str2 + " error: (" + i10 + ") " + str);
            if (this.f53986a.a()) {
                CancellableContinuation cancellableContinuation = this.f53986a;
                Result.a aVar = Result.f32053e;
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(runtimeException)));
            }
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f53986a.resumeWith(Result.b(device));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f53989d;

        /* renamed from: i  reason: collision with root package name */
        int f53991i;

        h(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f53989d = obj;
            this.f53991i |= Integer.MIN_VALUE;
            Object Q = e.this.Q(this);
            if (Q == wr.b.f()) {
                return Q;
            }
            return Result.a(Q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53992d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53994d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f53995e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: wn.e$i$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0724a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f53996d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ e f53997e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0724a(e eVar, Continuation continuation) {
                    super(2, continuation);
                    this.f53997e = eVar;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0724a(this.f53997e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = wr.b.f();
                    int i10 = this.f53996d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return obj;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    Flow r10 = rs.g.r(this.f53997e.f53971x);
                    this.f53996d = 1;
                    Object s10 = rs.g.s(r10, this);
                    if (s10 == f10) {
                        return f10;
                    }
                    return s10;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0724a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f53995e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f53995e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f53994d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                CoroutineContext coroutineContext = this.f53995e.f53957j.getCoroutineContext();
                C0724a c0724a = new C0724a(this.f53995e, null);
                this.f53994d = 1;
                Object g10 = os.g.g(coroutineContext, c0724a, this);
                if (g10 == f10) {
                    return f10;
                }
                return g10;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        i(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f53992d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                if (!e.this.f53969v) {
                    e.this.f53971x.setValue(null);
                    e.this.f53969v = true;
                    CoroutineDispatcher b10 = m0.b();
                    a aVar = new a(e.this, null);
                    this.f53992d = 1;
                    obj = os.g.g(b10, aVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else {
                    Result.a aVar2 = Result.f32053e;
                    return Result.a(Result.b(kotlin.c.a(new RuntimeException("Image capture already requested."))));
                }
            }
            Object j10 = ((Result) obj).j();
            e.this.f53969v = false;
            return Result.a(j10);
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j implements SurfaceHolder.Callback {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53999d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f54000e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f54000e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f54000e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f53999d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f54000e;
                    this.f53999d = 1;
                    if (e.U(eVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f54001d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f54002e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f54002e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f54002e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f54001d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f54002e;
                    this.f54001d = 1;
                    if (eVar.F(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        j() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(e eVar) {
            os.i.d(eVar.f53957j, null, null, new a(eVar, null), 3, null);
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder holder, int i10, int i11, int i12) {
            Intrinsics.checkNotNullParameter(holder, "holder");
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f53970w = true;
            e.this.J().b(e.this.f53949b.f().getWidth(), e.this.f53949b.f().getHeight(), e.this.f53961n);
            Camera2PreviewView J = e.this.J();
            final e eVar = e.this;
            J.post(new Runnable() { // from class: wn.f
                @Override // java.lang.Runnable
                public final void run() {
                    e.j.b(e.this);
                }
            });
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f53970w = false;
            os.i.d(e.this.f53957j, null, null, new b(e.this, null), 3, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54003d;

        k(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f54003d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f54003d = 1;
                if (e.U(eVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f54005d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f54006e;

        /* renamed from: i  reason: collision with root package name */
        int f54007i;

        l(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f54006e = obj;
            this.f54007i |= Integer.MIN_VALUE;
            return e.U(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f54008d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f54009e;

        /* renamed from: o  reason: collision with root package name */
        int f54011o;

        m(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f54009e = obj;
            this.f54011o |= Integer.MIN_VALUE;
            Object W = e.this.W(this);
            if (W == wr.b.f()) {
                return W;
            }
            return Result.a(W);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f54012d;

        /* renamed from: i  reason: collision with root package name */
        int f54014i;

        n(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f54012d = obj;
            this.f54014i |= Integer.MIN_VALUE;
            Object X = e.this.X(this);
            if (X == wr.b.f()) {
                return X;
            }
            return Result.a(X);
        }
    }

    public e(Context context, wn.l cameraChoice, Camera2PreviewView previewView, wn.b analyzer, ao.a videoCaptureMethod, tq.a aVar, boolean z10, zn.a cameraStatsManager, wp.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f53948a = context;
        this.f53949b = cameraChoice;
        this.f53950c = previewView;
        this.f53951d = analyzer;
        this.f53952e = videoCaptureMethod;
        this.f53953f = z10;
        this.f53954g = cameraStatsManager;
        this.f53955h = sdkFilesManager;
        this.f53956i = cameraChoice.b();
        CoroutineScope a10 = kotlinx.coroutines.i.a(m0.a().Y0(j1.b(null, 1, null)));
        this.f53957j = a10;
        String d10 = cameraChoice.d();
        this.f53958k = d10;
        Object systemService = context.getSystemService("camera");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.camera2.CameraManager");
        CameraManager cameraManager = (CameraManager) systemService;
        this.f53959l = cameraManager;
        CameraCharacteristics cameraCharacteristics = cameraManager.getCameraCharacteristics(d10);
        Intrinsics.checkNotNullExpressionValue(cameraCharacteristics, "getCameraCharacteristics(...)");
        this.f53960m = cameraCharacteristics;
        Object obj = cameraCharacteristics.get(CameraCharacteristics.SENSOR_ORIENTATION);
        if (obj != null) {
            int intValue = ((Number) obj).intValue();
            this.f53961n = intValue;
            Comparable upper = cameraChoice.g().getUpper();
            Intrinsics.checkNotNullExpressionValue(upper, "getUpper(...)");
            this.f53962o = new r(context, cameraChoice, ((Number) upper).intValue(), intValue, z10);
            HandlerThread handlerThread = new HandlerThread("CameraThread");
            handlerThread.start();
            this.f53964q = handlerThread;
            this.f53965r = new Handler(handlerThread.getLooper());
            this.f53968u = true;
            this.f53971x = l0.a(null);
            MutableStateFlow a11 = l0.a(d.a.f53977a);
            this.f53972y = a11;
            this.f53973z = a11;
            this.C = 1.0f;
            this.D = M();
            this.E = c0.b(0, 1, qs.a.f48114d, 1, null);
            this.F = new ConditionVariable();
            os.i.d(a10, null, null, new a(null), 3, null);
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object F(Continuation continuation) {
        Object g10 = os.g.g(m0.a(), new C0723e(null), continuation);
        if (g10 == wr.b.f()) {
            return g10;
        }
        return Unit.f32056a;
    }

    private final Object L(Continuation continuation) {
        Object g10 = os.g.g(m0.c(), new f(null), continuation);
        if (g10 == wr.b.f()) {
            return g10;
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ImageReader M() {
        ImageReader newInstance = ImageReader.newInstance((int) (this.f53949b.f().getWidth() * this.C), (int) (this.f53949b.f().getHeight() * this.C), 35, 3);
        newInstance.setOnImageAvailableListener(new ImageReader.OnImageAvailableListener() { // from class: wn.c
            @Override // android.media.ImageReader.OnImageAvailableListener
            public final void onImageAvailable(ImageReader imageReader) {
                e.N(e.this, imageReader);
            }
        }, this.f53965r);
        Intrinsics.checkNotNullExpressionValue(newInstance, "also(...)");
        return newInstance;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(e eVar, ImageReader imageReader) {
        Image acquireNextImage = imageReader.acquireNextImage();
        eVar.f53949b.e();
        ao.a aVar = ao.a.f6226d;
        if (acquireNextImage != null && !eVar.E.b(acquireNextImage)) {
            acquireNextImage.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object O(CameraManager cameraManager, String str, Handler handler, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(wr.b.c(continuation), 1);
        eVar.H();
        cameraManager.openCamera(str, new g(eVar, this, str), handler);
        Object B = eVar.B();
        if (B == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void P(Image image) {
        try {
            if (Intrinsics.areEqual(this.f53972y.getValue(), d.b.f53978a)) {
                this.F.open();
                cs.a.a(image, null);
            } else if (!this.f53968u && !this.f53969v) {
                cs.a.a(image, null);
            } else {
                if (this.f53969v) {
                    File R = R(image);
                    if (R != null) {
                        this.f53971x.setValue(Result.a(Result.b(R)));
                    }
                } else if (this.f53968u) {
                    try {
                        this.f53951d.e(image, this.f53961n);
                    } catch (Exception unused) {
                    }
                }
                Unit unit = Unit.f32056a;
                cs.a.a(image, null);
            }
        } catch (IllegalArgumentException unused2) {
        }
    }

    private final File R(Image image) {
        Bitmap c10 = un.m0.c(image, this.f53961n);
        if (c10 == null) {
            return null;
        }
        File c11 = this.f53955h.c("jpg");
        FileOutputStream fileOutputStream = new FileOutputStream(c11);
        try {
            c10.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            bs.c.a(fileOutputStream, null);
            c10.recycle();
            return c11;
        } finally {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Can't wrap try/catch for region: R(9:1|(2:3|(7:5|6|7|(1:(2:10|11)(2:17|18))(3:19|20|(1:22))|12|13|14))|25|6|7|(0)(0)|12|13|14) */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x002d, code lost:
        r5 = move-exception;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004d, code lost:
        r4.f53972y.setValue(new wn.e.d.c(new wn.e.c.a("Unable to initialize Camera2 classes", r5)));
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object U(wn.e r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof wn.e.l
            if (r0 == 0) goto L13
            r0 = r5
            wn.e$l r0 = (wn.e.l) r0
            int r1 = r0.f54007i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f54007i = r1
            goto L18
        L13:
            wn.e$l r0 = new wn.e$l
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f54006e
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f54007i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r4 = r0.f54005d
            wn.e r4 = (wn.e) r4
            kotlin.c.b(r5)     // Catch: java.lang.Exception -> L2d
            goto L45
        L2d:
            r5 = move-exception
            goto L4d
        L2f:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L37:
            kotlin.c.b(r5)
            r0.f54005d = r4     // Catch: java.lang.Exception -> L2d
            r0.f54007i = r3     // Catch: java.lang.Exception -> L2d
            java.lang.Object r5 = r4.L(r0)     // Catch: java.lang.Exception -> L2d
            if (r5 != r1) goto L45
            return r1
        L45:
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f53972y     // Catch: java.lang.Exception -> L2d
            wn.e$d$d r0 = wn.e.d.C0722d.f53980a     // Catch: java.lang.Exception -> L2d
            r5.setValue(r0)     // Catch: java.lang.Exception -> L2d
            goto L5e
        L4d:
            kotlinx.coroutines.flow.MutableStateFlow r4 = r4.f53972y
            wn.e$d$c r0 = new wn.e$d$c
            wn.e$c$a r1 = new wn.e$c$a
            java.lang.String r2 = "Unable to initialize Camera2 classes"
            r1.<init>(r2, r5)
            r0.<init>(r1)
            r4.setValue(r0)
        L5e:
            kotlin.Unit r4 = kotlin.Unit.f32056a
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: wn.e.U(wn.e, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(e eVar) {
        if (eVar.f53970w) {
            os.i.d(eVar.f53957j, null, null, new k(null), 3, null);
        }
        return Unit.f32056a;
    }

    public final void G(boolean z10) {
        wn.k kVar = this.f53966s;
        if (kVar != null) {
            kVar.i(z10);
            kVar.l();
        }
    }

    public final void H() {
        wn.k kVar = this.f53966s;
        if (kVar != null) {
            kVar.j(this.f53949b.f().getWidth() / 2, this.f53949b.f().getHeight() / 2, new Size((int) (this.f53949b.f().getWidth() * 0.15d), (int) (this.f53949b.f().getHeight() * 0.15d)), 5000L);
            kVar.l();
        }
    }

    public final v I() {
        return this.f53956i;
    }

    public final Camera2PreviewView J() {
        return this.f53950c;
    }

    public final j0 K() {
        return this.f53973z;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object Q(kotlin.coroutines.Continuation r6) {
        /*
            r5 = this;
            boolean r0 = r6 instanceof wn.e.h
            if (r0 == 0) goto L13
            r0 = r6
            wn.e$h r0 = (wn.e.h) r0
            int r1 = r0.f53991i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f53991i = r1
            goto L18
        L13:
            wn.e$h r0 = new wn.e$h
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f53989d
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f53991i
            r3 = 1
            if (r2 == 0) goto L31
            if (r2 != r3) goto L29
            kotlin.c.b(r6)
            goto L47
        L29:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r0)
            throw r6
        L31:
            kotlin.c.b(r6)
            os.c1 r6 = os.m0.c()
            wn.e$i r2 = new wn.e$i
            r4 = 0
            r2.<init>(r4)
            r0.f53991i = r3
            java.lang.Object r6 = os.g.g(r6, r2, r0)
            if (r6 != r1) goto L47
            return r1
        L47:
            kotlin.Result r6 = (kotlin.Result) r6
            java.lang.Object r6 = r6.j()
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: wn.e.Q(kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final void S(boolean z10) {
        this.f53968u = z10;
    }

    public final void T() {
        boolean z10;
        if (this.f53953f && androidx.core.content.a.a(this.f53948a, "android.permission.RECORD_AUDIO") != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (androidx.core.content.a.a(this.f53948a, "android.permission.CAMERA") == 0 && !z10) {
            if (this.A) {
                return;
            }
            this.A = true;
            this.f53970w = false;
            this.B = new j();
            this.f53962o.n(new Function0() { // from class: wn.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit V;
                    V = e.V(e.this);
                    return V;
                }
            });
            this.f53950c.a();
            this.f53950c.getHolder().addCallback(this.B);
            this.f53954g.c();
            return;
        }
        this.f53972y.setValue(new d.c(new c.b()));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object W(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof wn.e.m
            if (r0 == 0) goto L13
            r0 = r5
            wn.e$m r0 = (wn.e.m) r0
            int r1 = r0.f54011o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f54011o = r1
            goto L18
        L13:
            wn.e$m r0 = new wn.e$m
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f54009e
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f54011o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r0 = r0.f54008d
            wn.e r0 = (wn.e) r0
            kotlin.c.b(r5)     // Catch: java.lang.Throwable -> L2d
            goto L5a
        L2d:
            r5 = move-exception
            goto L67
        L2f:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L37:
            kotlin.c.b(r5)
            boolean r5 = r4.f53967t
            if (r5 == 0) goto L4a
            kotlin.Result$a r5 = kotlin.Result.f32053e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L4a:
            kotlin.Result$a r5 = kotlin.Result.f32053e     // Catch: java.lang.Throwable -> L2d
            wn.r r5 = r4.f53962o     // Catch: java.lang.Throwable -> L2d
            r0.f54008d = r4     // Catch: java.lang.Throwable -> L2d
            r0.f54011o = r3     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = r5.o(r0)     // Catch: java.lang.Throwable -> L2d
            if (r5 != r1) goto L59
            return r1
        L59:
            r0 = r4
        L5a:
            r0.f53967t = r3     // Catch: java.lang.Throwable -> L2d
            kotlin.Result$a r5 = kotlin.Result.f32053e     // Catch: java.lang.Throwable -> L2d
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r3)     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = kotlin.Result.b(r5)     // Catch: java.lang.Throwable -> L2d
            return r5
        L67:
            kotlin.Result$a r0 = kotlin.Result.f32053e
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: wn.e.W(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x005a  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object X(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof wn.e.n
            if (r0 == 0) goto L13
            r0 = r5
            wn.e$n r0 = (wn.e.n) r0
            int r1 = r0.f54014i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f54014i = r1
            goto L18
        L13:
            wn.e$n r0 = new wn.e$n
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f54012d
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f54014i
            r3 = 1
            if (r2 == 0) goto L31
            if (r2 != r3) goto L29
            kotlin.c.b(r5)
            goto L56
        L29:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L31:
            kotlin.c.b(r5)
            boolean r5 = r4.f53967t
            if (r5 != 0) goto L48
            kotlin.Result$a r5 = kotlin.Result.f32053e
            un.q0 r5 = new un.q0
            r5.<init>()
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L48:
            r5 = 0
            r4.f53967t = r5
            wn.r r5 = r4.f53962o
            r0.f54014i = r3
            java.lang.Object r5 = r5.p(r0)
            if (r5 != r1) goto L56
            return r1
        L56:
            java.io.File r5 = (java.io.File) r5
            if (r5 != 0) goto L6c
            kotlin.Result$a r5 = kotlin.Result.f32053e
            java.lang.RuntimeException r5 = new java.lang.RuntimeException
            java.lang.String r0 = "Recording failed."
            r5.<init>(r0)
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L6c:
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: wn.e.X(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
