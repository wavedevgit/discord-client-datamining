package xn;

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
import ps.j1;
import ps.m0;
import ss.c0;
import ss.j0;
import ss.l0;
import vn.v;
import xn.e;
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
    private final Context f55111a;

    /* renamed from: b  reason: collision with root package name */
    private final xn.l f55112b;

    /* renamed from: c  reason: collision with root package name */
    private final Camera2PreviewView f55113c;

    /* renamed from: d  reason: collision with root package name */
    private final xn.b f55114d;

    /* renamed from: e  reason: collision with root package name */
    private final bo.a f55115e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f55116f;

    /* renamed from: g  reason: collision with root package name */
    private final ao.a f55117g;

    /* renamed from: h  reason: collision with root package name */
    private final xp.c f55118h;

    /* renamed from: i  reason: collision with root package name */
    private final v f55119i;

    /* renamed from: j  reason: collision with root package name */
    private final CoroutineScope f55120j;

    /* renamed from: k  reason: collision with root package name */
    private final String f55121k;

    /* renamed from: l  reason: collision with root package name */
    private final CameraManager f55122l;

    /* renamed from: m  reason: collision with root package name */
    private final CameraCharacteristics f55123m;

    /* renamed from: n  reason: collision with root package name */
    private final int f55124n;

    /* renamed from: o  reason: collision with root package name */
    private final r f55125o;

    /* renamed from: p  reason: collision with root package name */
    private CameraDevice f55126p;

    /* renamed from: q  reason: collision with root package name */
    private final HandlerThread f55127q;

    /* renamed from: r  reason: collision with root package name */
    private final Handler f55128r;

    /* renamed from: s  reason: collision with root package name */
    private xn.k f55129s;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f55130t;

    /* renamed from: u  reason: collision with root package name */
    private volatile boolean f55131u;

    /* renamed from: v  reason: collision with root package name */
    private volatile boolean f55132v;

    /* renamed from: w  reason: collision with root package name */
    private volatile boolean f55133w;

    /* renamed from: x  reason: collision with root package name */
    private final MutableStateFlow f55134x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f55135y;

    /* renamed from: z  reason: collision with root package name */
    private final j0 f55136z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55137d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: xn.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0768a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e f55139d;

            C0768a(e eVar) {
                this.f55139d = eVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(Image image, Continuation continuation) {
                this.f55139d.P(image);
                return Unit.f31765a;
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
            Object f10 = xr.b.f();
            int i10 = this.f55137d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = e.this.E;
                C0768a c0768a = new C0768a(e.this);
                this.f55137d = 1;
                if (mutableSharedFlow.collect(c0768a, this) == f10) {
                    return f10;
                }
            }
            throw new rr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
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
            public static final a f55140a = new a();

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
            public static final b f55141a = new b();

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
            private final c f55142a;

            public c(c error) {
                Intrinsics.checkNotNullParameter(error, "error");
                this.f55142a = error;
            }

            public final c a() {
                return this.f55142a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f55142a, ((c) obj).f55142a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f55142a.hashCode();
            }

            public String toString() {
                c cVar = this.f55142a;
                return "Error(error=" + cVar + ")";
            }
        }

        /* renamed from: xn.e$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0769d implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final C0769d f55143a = new C0769d();

            private C0769d() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0769d)) {
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
    /* renamed from: xn.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0770e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55144d;

        C0770e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0770e(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f55144d == 0) {
                kotlin.c.b(obj);
                Object value = e.this.f55135y.getValue();
                d.b bVar = d.b.f55141a;
                if (Intrinsics.areEqual(value, bVar)) {
                    return Unit.f31765a;
                }
                e.this.f55135y.setValue(bVar);
                e.this.J().getHolder().removeCallback(e.this.B);
                e.this.F.block(2000L);
                e.this.f55125o.f();
                e.this.D.close();
                xn.k kVar = e.this.f55129s;
                if (kVar != null) {
                    kVar.e();
                }
                e.this.f55129s = null;
                CameraDevice cameraDevice = e.this.f55126p;
                if (cameraDevice != null) {
                    cameraDevice.close();
                }
                e.this.f55126p = null;
                e.this.f55117g.b();
                kotlinx.coroutines.i.f(e.this.f55120j, null, 1, null);
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0770e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f55146d;

        /* renamed from: e  reason: collision with root package name */
        int f55147e;

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
            throw new UnsupportedOperationException("Method not decompiled: xn.e.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f55149a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ e f55150b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f55151c;

        g(CancellableContinuation cancellableContinuation, e eVar, String str) {
            this.f55149a = cancellableContinuation;
            this.f55150b = eVar;
            this.f55151c = str;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f55150b.f55126p = null;
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
            String str2 = this.f55151c;
            RuntimeException runtimeException = new RuntimeException("Camera " + str2 + " error: (" + i10 + ") " + str);
            if (this.f55149a.a()) {
                CancellableContinuation cancellableContinuation = this.f55149a;
                Result.a aVar = Result.f31762e;
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(runtimeException)));
            }
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f55149a.resumeWith(Result.b(device));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f55152d;

        /* renamed from: i  reason: collision with root package name */
        int f55154i;

        h(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f55152d = obj;
            this.f55154i |= Integer.MIN_VALUE;
            Object Q = e.this.Q(this);
            if (Q == xr.b.f()) {
                return Q;
            }
            return Result.a(Q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55155d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f55157d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f55158e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: xn.e$i$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0771a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f55159d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ e f55160e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0771a(e eVar, Continuation continuation) {
                    super(2, continuation);
                    this.f55160e = eVar;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0771a(this.f55160e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = xr.b.f();
                    int i10 = this.f55159d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return obj;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    Flow r10 = ss.g.r(this.f55160e.f55134x);
                    this.f55159d = 1;
                    Object s10 = ss.g.s(r10, this);
                    if (s10 == f10) {
                        return f10;
                    }
                    return s10;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0771a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f55158e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f55158e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f55157d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                CoroutineContext coroutineContext = this.f55158e.f55120j.getCoroutineContext();
                C0771a c0771a = new C0771a(this.f55158e, null);
                this.f55157d = 1;
                Object g10 = ps.g.g(coroutineContext, c0771a, this);
                if (g10 == f10) {
                    return f10;
                }
                return g10;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
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
            Object f10 = xr.b.f();
            int i10 = this.f55155d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                if (!e.this.f55132v) {
                    e.this.f55134x.setValue(null);
                    e.this.f55132v = true;
                    CoroutineDispatcher b10 = m0.b();
                    a aVar = new a(e.this, null);
                    this.f55155d = 1;
                    obj = ps.g.g(b10, aVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else {
                    Result.a aVar2 = Result.f31762e;
                    return Result.a(Result.b(kotlin.c.a(new RuntimeException("Image capture already requested."))));
                }
            }
            Object j10 = ((Result) obj).j();
            e.this.f55132v = false;
            return Result.a(j10);
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j implements SurfaceHolder.Callback {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f55162d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f55163e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f55163e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f55163e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f55162d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f55163e;
                    this.f55162d = 1;
                    if (e.U(eVar, this) == f10) {
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
            int f55164d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f55165e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f55165e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f55165e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f55164d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f55165e;
                    this.f55164d = 1;
                    if (eVar.F(this) == f10) {
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

        j() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(e eVar) {
            ps.i.d(eVar.f55120j, null, null, new a(eVar, null), 3, null);
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder holder, int i10, int i11, int i12) {
            Intrinsics.checkNotNullParameter(holder, "holder");
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f55133w = true;
            e.this.J().b(e.this.f55112b.f().getWidth(), e.this.f55112b.f().getHeight(), e.this.f55124n);
            Camera2PreviewView J = e.this.J();
            final e eVar = e.this;
            J.post(new Runnable() { // from class: xn.f
                @Override // java.lang.Runnable
                public final void run() {
                    e.j.b(e.this);
                }
            });
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f55133w = false;
            ps.i.d(e.this.f55120j, null, null, new b(e.this, null), 3, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55166d;

        k(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f55166d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f55166d = 1;
                if (e.U(eVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f55168d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f55169e;

        /* renamed from: i  reason: collision with root package name */
        int f55170i;

        l(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f55169e = obj;
            this.f55170i |= Integer.MIN_VALUE;
            return e.U(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f55171d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f55172e;

        /* renamed from: o  reason: collision with root package name */
        int f55174o;

        m(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f55172e = obj;
            this.f55174o |= Integer.MIN_VALUE;
            Object W = e.this.W(this);
            if (W == xr.b.f()) {
                return W;
            }
            return Result.a(W);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f55175d;

        /* renamed from: i  reason: collision with root package name */
        int f55177i;

        n(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f55175d = obj;
            this.f55177i |= Integer.MIN_VALUE;
            Object X = e.this.X(this);
            if (X == xr.b.f()) {
                return X;
            }
            return Result.a(X);
        }
    }

    public e(Context context, xn.l cameraChoice, Camera2PreviewView previewView, xn.b analyzer, bo.a videoCaptureMethod, uq.a aVar, boolean z10, ao.a cameraStatsManager, xp.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f55111a = context;
        this.f55112b = cameraChoice;
        this.f55113c = previewView;
        this.f55114d = analyzer;
        this.f55115e = videoCaptureMethod;
        this.f55116f = z10;
        this.f55117g = cameraStatsManager;
        this.f55118h = sdkFilesManager;
        this.f55119i = cameraChoice.b();
        CoroutineScope a10 = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f55120j = a10;
        String d10 = cameraChoice.d();
        this.f55121k = d10;
        Object systemService = context.getSystemService("camera");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.camera2.CameraManager");
        CameraManager cameraManager = (CameraManager) systemService;
        this.f55122l = cameraManager;
        CameraCharacteristics cameraCharacteristics = cameraManager.getCameraCharacteristics(d10);
        Intrinsics.checkNotNullExpressionValue(cameraCharacteristics, "getCameraCharacteristics(...)");
        this.f55123m = cameraCharacteristics;
        Object obj = cameraCharacteristics.get(CameraCharacteristics.SENSOR_ORIENTATION);
        if (obj != null) {
            int intValue = ((Number) obj).intValue();
            this.f55124n = intValue;
            Comparable upper = cameraChoice.g().getUpper();
            Intrinsics.checkNotNullExpressionValue(upper, "getUpper(...)");
            this.f55125o = new r(context, cameraChoice, ((Number) upper).intValue(), intValue, z10);
            HandlerThread handlerThread = new HandlerThread("CameraThread");
            handlerThread.start();
            this.f55127q = handlerThread;
            this.f55128r = new Handler(handlerThread.getLooper());
            this.f55131u = true;
            this.f55134x = l0.a(null);
            MutableStateFlow a11 = l0.a(d.a.f55140a);
            this.f55135y = a11;
            this.f55136z = a11;
            this.C = 1.0f;
            this.D = M();
            this.E = c0.b(0, 1, rs.a.f49232d, 1, null);
            this.F = new ConditionVariable();
            ps.i.d(a10, null, null, new a(null), 3, null);
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object F(Continuation continuation) {
        Object g10 = ps.g.g(m0.a(), new C0770e(null), continuation);
        if (g10 == xr.b.f()) {
            return g10;
        }
        return Unit.f31765a;
    }

    private final Object L(Continuation continuation) {
        Object g10 = ps.g.g(m0.c(), new f(null), continuation);
        if (g10 == xr.b.f()) {
            return g10;
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ImageReader M() {
        ImageReader newInstance = ImageReader.newInstance((int) (this.f55112b.f().getWidth() * this.C), (int) (this.f55112b.f().getHeight() * this.C), 35, 3);
        newInstance.setOnImageAvailableListener(new ImageReader.OnImageAvailableListener() { // from class: xn.c
            @Override // android.media.ImageReader.OnImageAvailableListener
            public final void onImageAvailable(ImageReader imageReader) {
                e.N(e.this, imageReader);
            }
        }, this.f55128r);
        Intrinsics.checkNotNullExpressionValue(newInstance, "also(...)");
        return newInstance;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(e eVar, ImageReader imageReader) {
        Image acquireNextImage = imageReader.acquireNextImage();
        eVar.f55112b.e();
        bo.a aVar = bo.a.f7161d;
        if (acquireNextImage != null && !eVar.E.b(acquireNextImage)) {
            acquireNextImage.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object O(CameraManager cameraManager, String str, Handler handler, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(xr.b.c(continuation), 1);
        eVar.H();
        cameraManager.openCamera(str, new g(eVar, this, str), handler);
        Object B = eVar.B();
        if (B == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void P(Image image) {
        try {
            if (Intrinsics.areEqual(this.f55135y.getValue(), d.b.f55141a)) {
                this.F.open();
                ds.a.a(image, null);
            } else if (!this.f55131u && !this.f55132v) {
                ds.a.a(image, null);
            } else {
                if (this.f55132v) {
                    File R = R(image);
                    if (R != null) {
                        this.f55134x.setValue(Result.a(Result.b(R)));
                    }
                } else if (this.f55131u) {
                    try {
                        this.f55114d.e(image, this.f55124n);
                    } catch (Exception unused) {
                    }
                }
                Unit unit = Unit.f31765a;
                ds.a.a(image, null);
            }
        } catch (IllegalArgumentException unused2) {
        }
    }

    private final File R(Image image) {
        Bitmap c10 = vn.m0.c(image, this.f55124n);
        if (c10 == null) {
            return null;
        }
        File c11 = this.f55118h.c("jpg");
        FileOutputStream fileOutputStream = new FileOutputStream(c11);
        try {
            c10.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            cs.c.a(fileOutputStream, null);
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
        r4.f55135y.setValue(new xn.e.d.c(new xn.e.c.a("Unable to initialize Camera2 classes", r5)));
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object U(xn.e r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof xn.e.l
            if (r0 == 0) goto L13
            r0 = r5
            xn.e$l r0 = (xn.e.l) r0
            int r1 = r0.f55170i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f55170i = r1
            goto L18
        L13:
            xn.e$l r0 = new xn.e$l
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f55169e
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f55170i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r4 = r0.f55168d
            xn.e r4 = (xn.e) r4
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
            r0.f55168d = r4     // Catch: java.lang.Exception -> L2d
            r0.f55170i = r3     // Catch: java.lang.Exception -> L2d
            java.lang.Object r5 = r4.L(r0)     // Catch: java.lang.Exception -> L2d
            if (r5 != r1) goto L45
            return r1
        L45:
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f55135y     // Catch: java.lang.Exception -> L2d
            xn.e$d$d r0 = xn.e.d.C0769d.f55143a     // Catch: java.lang.Exception -> L2d
            r5.setValue(r0)     // Catch: java.lang.Exception -> L2d
            goto L5e
        L4d:
            kotlinx.coroutines.flow.MutableStateFlow r4 = r4.f55135y
            xn.e$d$c r0 = new xn.e$d$c
            xn.e$c$a r1 = new xn.e$c$a
            java.lang.String r2 = "Unable to initialize Camera2 classes"
            r1.<init>(r2, r5)
            r0.<init>(r1)
            r4.setValue(r0)
        L5e:
            kotlin.Unit r4 = kotlin.Unit.f31765a
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: xn.e.U(xn.e, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(e eVar) {
        if (eVar.f55133w) {
            ps.i.d(eVar.f55120j, null, null, new k(null), 3, null);
        }
        return Unit.f31765a;
    }

    public final void G(boolean z10) {
        xn.k kVar = this.f55129s;
        if (kVar != null) {
            kVar.i(z10);
            kVar.l();
        }
    }

    public final void H() {
        xn.k kVar = this.f55129s;
        if (kVar != null) {
            kVar.j(this.f55112b.f().getWidth() / 2, this.f55112b.f().getHeight() / 2, new Size((int) (this.f55112b.f().getWidth() * 0.15d), (int) (this.f55112b.f().getHeight() * 0.15d)), 5000L);
            kVar.l();
        }
    }

    public final v I() {
        return this.f55119i;
    }

    public final Camera2PreviewView J() {
        return this.f55113c;
    }

    public final j0 K() {
        return this.f55136z;
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
            boolean r0 = r6 instanceof xn.e.h
            if (r0 == 0) goto L13
            r0 = r6
            xn.e$h r0 = (xn.e.h) r0
            int r1 = r0.f55154i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f55154i = r1
            goto L18
        L13:
            xn.e$h r0 = new xn.e$h
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f55152d
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f55154i
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
            ps.c1 r6 = ps.m0.c()
            xn.e$i r2 = new xn.e$i
            r4 = 0
            r2.<init>(r4)
            r0.f55154i = r3
            java.lang.Object r6 = ps.g.g(r6, r2, r0)
            if (r6 != r1) goto L47
            return r1
        L47:
            kotlin.Result r6 = (kotlin.Result) r6
            java.lang.Object r6 = r6.j()
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: xn.e.Q(kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final void S(boolean z10) {
        this.f55131u = z10;
    }

    public final void T() {
        boolean z10;
        if (this.f55116f && androidx.core.content.a.a(this.f55111a, "android.permission.RECORD_AUDIO") != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (androidx.core.content.a.a(this.f55111a, "android.permission.CAMERA") == 0 && !z10) {
            if (this.A) {
                return;
            }
            this.A = true;
            this.f55133w = false;
            this.B = new j();
            this.f55125o.n(new Function0() { // from class: xn.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit V;
                    V = e.V(e.this);
                    return V;
                }
            });
            this.f55113c.a();
            this.f55113c.getHolder().addCallback(this.B);
            this.f55117g.c();
            return;
        }
        this.f55135y.setValue(new d.c(new c.b()));
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
            boolean r0 = r5 instanceof xn.e.m
            if (r0 == 0) goto L13
            r0 = r5
            xn.e$m r0 = (xn.e.m) r0
            int r1 = r0.f55174o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f55174o = r1
            goto L18
        L13:
            xn.e$m r0 = new xn.e$m
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f55172e
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f55174o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r0 = r0.f55171d
            xn.e r0 = (xn.e) r0
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
            boolean r5 = r4.f55130t
            if (r5 == 0) goto L4a
            kotlin.Result$a r5 = kotlin.Result.f31762e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L4a:
            kotlin.Result$a r5 = kotlin.Result.f31762e     // Catch: java.lang.Throwable -> L2d
            xn.r r5 = r4.f55125o     // Catch: java.lang.Throwable -> L2d
            r0.f55171d = r4     // Catch: java.lang.Throwable -> L2d
            r0.f55174o = r3     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = r5.o(r0)     // Catch: java.lang.Throwable -> L2d
            if (r5 != r1) goto L59
            return r1
        L59:
            r0 = r4
        L5a:
            r0.f55130t = r3     // Catch: java.lang.Throwable -> L2d
            kotlin.Result$a r5 = kotlin.Result.f31762e     // Catch: java.lang.Throwable -> L2d
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r3)     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = kotlin.Result.b(r5)     // Catch: java.lang.Throwable -> L2d
            return r5
        L67:
            kotlin.Result$a r0 = kotlin.Result.f31762e
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: xn.e.W(kotlin.coroutines.Continuation):java.lang.Object");
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
            boolean r0 = r5 instanceof xn.e.n
            if (r0 == 0) goto L13
            r0 = r5
            xn.e$n r0 = (xn.e.n) r0
            int r1 = r0.f55177i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f55177i = r1
            goto L18
        L13:
            xn.e$n r0 = new xn.e$n
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f55175d
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f55177i
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
            boolean r5 = r4.f55130t
            if (r5 != 0) goto L48
            kotlin.Result$a r5 = kotlin.Result.f31762e
            vn.q0 r5 = new vn.q0
            r5.<init>()
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L48:
            r5 = 0
            r4.f55130t = r5
            xn.r r5 = r4.f55125o
            r0.f55177i = r3
            java.lang.Object r5 = r5.p(r0)
            if (r5 != r1) goto L56
            return r1
        L56:
            java.io.File r5 = (java.io.File) r5
            if (r5 != 0) goto L6c
            kotlin.Result$a r5 = kotlin.Result.f31762e
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
        throw new UnsupportedOperationException("Method not decompiled: xn.e.X(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
