package pn;

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
import hs.j1;
import hs.m0;
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
import ks.c0;
import ks.j0;
import ks.l0;
import nn.v;
import pn.e;
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
    private final Context f46265a;

    /* renamed from: b  reason: collision with root package name */
    private final pn.l f46266b;

    /* renamed from: c  reason: collision with root package name */
    private final Camera2PreviewView f46267c;

    /* renamed from: d  reason: collision with root package name */
    private final pn.b f46268d;

    /* renamed from: e  reason: collision with root package name */
    private final tn.a f46269e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f46270f;

    /* renamed from: g  reason: collision with root package name */
    private final sn.a f46271g;

    /* renamed from: h  reason: collision with root package name */
    private final pp.c f46272h;

    /* renamed from: i  reason: collision with root package name */
    private final v f46273i;

    /* renamed from: j  reason: collision with root package name */
    private final CoroutineScope f46274j;

    /* renamed from: k  reason: collision with root package name */
    private final String f46275k;

    /* renamed from: l  reason: collision with root package name */
    private final CameraManager f46276l;

    /* renamed from: m  reason: collision with root package name */
    private final CameraCharacteristics f46277m;

    /* renamed from: n  reason: collision with root package name */
    private final int f46278n;

    /* renamed from: o  reason: collision with root package name */
    private final r f46279o;

    /* renamed from: p  reason: collision with root package name */
    private CameraDevice f46280p;

    /* renamed from: q  reason: collision with root package name */
    private final HandlerThread f46281q;

    /* renamed from: r  reason: collision with root package name */
    private final Handler f46282r;

    /* renamed from: s  reason: collision with root package name */
    private pn.k f46283s;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f46284t;

    /* renamed from: u  reason: collision with root package name */
    private volatile boolean f46285u;

    /* renamed from: v  reason: collision with root package name */
    private volatile boolean f46286v;

    /* renamed from: w  reason: collision with root package name */
    private volatile boolean f46287w;

    /* renamed from: x  reason: collision with root package name */
    private final MutableStateFlow f46288x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f46289y;

    /* renamed from: z  reason: collision with root package name */
    private final j0 f46290z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46291d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: pn.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0565a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e f46293d;

            C0565a(e eVar) {
                this.f46293d = eVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(Image image, Continuation continuation) {
                this.f46293d.P(image);
                return Unit.f33074a;
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
            Object f10 = pr.b.f();
            int i10 = this.f46291d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = e.this.E;
                C0565a c0565a = new C0565a(e.this);
                this.f46291d = 1;
                if (mutableSharedFlow.collect(c0565a, this) == f10) {
                    return f10;
                }
            }
            throw new jr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
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
            public static final a f46294a = new a();

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
            public static final b f46295a = new b();

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
            private final c f46296a;

            public c(c error) {
                Intrinsics.checkNotNullParameter(error, "error");
                this.f46296a = error;
            }

            public final c a() {
                return this.f46296a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f46296a, ((c) obj).f46296a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f46296a.hashCode();
            }

            public String toString() {
                c cVar = this.f46296a;
                return "Error(error=" + cVar + ")";
            }
        }

        /* renamed from: pn.e$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0566d implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final C0566d f46297a = new C0566d();

            private C0566d() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0566d)) {
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
    /* renamed from: pn.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0567e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46298d;

        C0567e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0567e(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f46298d == 0) {
                kotlin.c.b(obj);
                Object value = e.this.f46289y.getValue();
                d.b bVar = d.b.f46295a;
                if (Intrinsics.areEqual(value, bVar)) {
                    return Unit.f33074a;
                }
                e.this.f46289y.setValue(bVar);
                e.this.J().getHolder().removeCallback(e.this.B);
                e.this.F.block(2000L);
                e.this.f46279o.f();
                e.this.D.close();
                pn.k kVar = e.this.f46283s;
                if (kVar != null) {
                    kVar.e();
                }
                e.this.f46283s = null;
                CameraDevice cameraDevice = e.this.f46280p;
                if (cameraDevice != null) {
                    cameraDevice.close();
                }
                e.this.f46280p = null;
                e.this.f46271g.b();
                kotlinx.coroutines.i.f(e.this.f46274j, null, 1, null);
                return Unit.f33074a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0567e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f46300d;

        /* renamed from: e  reason: collision with root package name */
        int f46301e;

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
            throw new UnsupportedOperationException("Method not decompiled: pn.e.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f46303a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ e f46304b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f46305c;

        g(CancellableContinuation cancellableContinuation, e eVar, String str) {
            this.f46303a = cancellableContinuation;
            this.f46304b = eVar;
            this.f46305c = str;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f46304b.f46280p = null;
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
            String str2 = this.f46305c;
            RuntimeException runtimeException = new RuntimeException("Camera " + str2 + " error: (" + i10 + ") " + str);
            if (this.f46303a.a()) {
                CancellableContinuation cancellableContinuation = this.f46303a;
                Result.a aVar = Result.f33071e;
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(runtimeException)));
            }
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f46303a.resumeWith(Result.b(device));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f46306d;

        /* renamed from: i  reason: collision with root package name */
        int f46308i;

        h(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46306d = obj;
            this.f46308i |= Integer.MIN_VALUE;
            Object Q = e.this.Q(this);
            if (Q == pr.b.f()) {
                return Q;
            }
            return Result.a(Q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46309d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f46311d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f46312e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: pn.e$i$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0568a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f46313d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ e f46314e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0568a(e eVar, Continuation continuation) {
                    super(2, continuation);
                    this.f46314e = eVar;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0568a(this.f46314e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = pr.b.f();
                    int i10 = this.f46313d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return obj;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    Flow r10 = ks.g.r(this.f46314e.f46288x);
                    this.f46313d = 1;
                    Object s10 = ks.g.s(r10, this);
                    if (s10 == f10) {
                        return f10;
                    }
                    return s10;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0568a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f46312e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f46312e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f46311d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                CoroutineContext coroutineContext = this.f46312e.f46274j.getCoroutineContext();
                C0568a c0568a = new C0568a(this.f46312e, null);
                this.f46311d = 1;
                Object g10 = hs.g.g(coroutineContext, c0568a, this);
                if (g10 == f10) {
                    return f10;
                }
                return g10;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
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
            Object f10 = pr.b.f();
            int i10 = this.f46309d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                if (!e.this.f46286v) {
                    e.this.f46288x.setValue(null);
                    e.this.f46286v = true;
                    CoroutineDispatcher b10 = m0.b();
                    a aVar = new a(e.this, null);
                    this.f46309d = 1;
                    obj = hs.g.g(b10, aVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else {
                    Result.a aVar2 = Result.f33071e;
                    return Result.a(Result.b(kotlin.c.a(new RuntimeException("Image capture already requested."))));
                }
            }
            Object j10 = ((Result) obj).j();
            e.this.f46286v = false;
            return Result.a(j10);
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j implements SurfaceHolder.Callback {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f46316d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f46317e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f46317e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f46317e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f46316d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f46317e;
                    this.f46316d = 1;
                    if (e.U(eVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f46318d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f46319e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f46319e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f46319e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f46318d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f46319e;
                    this.f46318d = 1;
                    if (eVar.F(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        j() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(e eVar) {
            hs.i.d(eVar.f46274j, null, null, new a(eVar, null), 3, null);
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder holder, int i10, int i11, int i12) {
            Intrinsics.checkNotNullParameter(holder, "holder");
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f46287w = true;
            e.this.J().b(e.this.f46266b.f().getWidth(), e.this.f46266b.f().getHeight(), e.this.f46278n);
            Camera2PreviewView J = e.this.J();
            final e eVar = e.this;
            J.post(new Runnable() { // from class: pn.f
                @Override // java.lang.Runnable
                public final void run() {
                    e.j.b(e.this);
                }
            });
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f46287w = false;
            hs.i.d(e.this.f46274j, null, null, new b(e.this, null), 3, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46320d;

        k(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f46320d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f46320d = 1;
                if (e.U(eVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f46322d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f46323e;

        /* renamed from: i  reason: collision with root package name */
        int f46324i;

        l(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46323e = obj;
            this.f46324i |= Integer.MIN_VALUE;
            return e.U(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f46325d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f46326e;

        /* renamed from: o  reason: collision with root package name */
        int f46328o;

        m(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46326e = obj;
            this.f46328o |= Integer.MIN_VALUE;
            Object W = e.this.W(this);
            if (W == pr.b.f()) {
                return W;
            }
            return Result.a(W);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f46329d;

        /* renamed from: i  reason: collision with root package name */
        int f46331i;

        n(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46329d = obj;
            this.f46331i |= Integer.MIN_VALUE;
            Object X = e.this.X(this);
            if (X == pr.b.f()) {
                return X;
            }
            return Result.a(X);
        }
    }

    public e(Context context, pn.l cameraChoice, Camera2PreviewView previewView, pn.b analyzer, tn.a videoCaptureMethod, mq.a aVar, boolean z10, sn.a cameraStatsManager, pp.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f46265a = context;
        this.f46266b = cameraChoice;
        this.f46267c = previewView;
        this.f46268d = analyzer;
        this.f46269e = videoCaptureMethod;
        this.f46270f = z10;
        this.f46271g = cameraStatsManager;
        this.f46272h = sdkFilesManager;
        this.f46273i = cameraChoice.b();
        CoroutineScope a10 = kotlinx.coroutines.i.a(m0.a().Z0(j1.b(null, 1, null)));
        this.f46274j = a10;
        String d10 = cameraChoice.d();
        this.f46275k = d10;
        Object systemService = context.getSystemService("camera");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.camera2.CameraManager");
        CameraManager cameraManager = (CameraManager) systemService;
        this.f46276l = cameraManager;
        CameraCharacteristics cameraCharacteristics = cameraManager.getCameraCharacteristics(d10);
        Intrinsics.checkNotNullExpressionValue(cameraCharacteristics, "getCameraCharacteristics(...)");
        this.f46277m = cameraCharacteristics;
        Object obj = cameraCharacteristics.get(CameraCharacteristics.SENSOR_ORIENTATION);
        if (obj != null) {
            int intValue = ((Number) obj).intValue();
            this.f46278n = intValue;
            Comparable upper = cameraChoice.g().getUpper();
            Intrinsics.checkNotNullExpressionValue(upper, "getUpper(...)");
            this.f46279o = new r(context, cameraChoice, ((Number) upper).intValue(), intValue, z10);
            HandlerThread handlerThread = new HandlerThread("CameraThread");
            handlerThread.start();
            this.f46281q = handlerThread;
            this.f46282r = new Handler(handlerThread.getLooper());
            this.f46285u = true;
            this.f46288x = l0.a(null);
            MutableStateFlow a11 = l0.a(d.a.f46294a);
            this.f46289y = a11;
            this.f46290z = a11;
            this.C = 1.0f;
            this.D = M();
            this.E = c0.b(0, 1, js.a.f32204d, 1, null);
            this.F = new ConditionVariable();
            hs.i.d(a10, null, null, new a(null), 3, null);
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object F(Continuation continuation) {
        Object g10 = hs.g.g(m0.a(), new C0567e(null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    private final Object L(Continuation continuation) {
        Object g10 = hs.g.g(m0.c(), new f(null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ImageReader M() {
        ImageReader newInstance = ImageReader.newInstance((int) (this.f46266b.f().getWidth() * this.C), (int) (this.f46266b.f().getHeight() * this.C), 35, 3);
        newInstance.setOnImageAvailableListener(new ImageReader.OnImageAvailableListener() { // from class: pn.c
            @Override // android.media.ImageReader.OnImageAvailableListener
            public final void onImageAvailable(ImageReader imageReader) {
                e.N(e.this, imageReader);
            }
        }, this.f46282r);
        Intrinsics.checkNotNullExpressionValue(newInstance, "also(...)");
        return newInstance;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(e eVar, ImageReader imageReader) {
        Image acquireNextImage = imageReader.acquireNextImage();
        eVar.f46266b.e();
        tn.a aVar = tn.a.f49944d;
        if (acquireNextImage != null && !eVar.E.b(acquireNextImage)) {
            acquireNextImage.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object O(CameraManager cameraManager, String str, Handler handler, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(pr.b.c(continuation), 1);
        eVar.H();
        cameraManager.openCamera(str, new g(eVar, this, str), handler);
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void P(Image image) {
        try {
            if (Intrinsics.areEqual(this.f46289y.getValue(), d.b.f46295a)) {
                this.F.open();
                vr.a.a(image, null);
            } else if (!this.f46285u && !this.f46286v) {
                vr.a.a(image, null);
            } else {
                if (this.f46286v) {
                    File R = R(image);
                    if (R != null) {
                        this.f46288x.setValue(Result.a(Result.b(R)));
                    }
                } else if (this.f46285u) {
                    try {
                        this.f46268d.e(image, this.f46278n);
                    } catch (Exception unused) {
                    }
                }
                Unit unit = Unit.f33074a;
                vr.a.a(image, null);
            }
        } catch (IllegalArgumentException unused2) {
        }
    }

    private final File R(Image image) {
        Bitmap c10 = nn.m0.c(image, this.f46278n);
        if (c10 == null) {
            return null;
        }
        File c11 = this.f46272h.c("jpg");
        FileOutputStream fileOutputStream = new FileOutputStream(c11);
        try {
            c10.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            ur.c.a(fileOutputStream, null);
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
        r4.f46289y.setValue(new pn.e.d.c(new pn.e.c.a("Unable to initialize Camera2 classes", r5)));
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object U(pn.e r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof pn.e.l
            if (r0 == 0) goto L13
            r0 = r5
            pn.e$l r0 = (pn.e.l) r0
            int r1 = r0.f46324i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46324i = r1
            goto L18
        L13:
            pn.e$l r0 = new pn.e$l
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f46323e
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46324i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r4 = r0.f46322d
            pn.e r4 = (pn.e) r4
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
            r0.f46322d = r4     // Catch: java.lang.Exception -> L2d
            r0.f46324i = r3     // Catch: java.lang.Exception -> L2d
            java.lang.Object r5 = r4.L(r0)     // Catch: java.lang.Exception -> L2d
            if (r5 != r1) goto L45
            return r1
        L45:
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f46289y     // Catch: java.lang.Exception -> L2d
            pn.e$d$d r0 = pn.e.d.C0566d.f46297a     // Catch: java.lang.Exception -> L2d
            r5.setValue(r0)     // Catch: java.lang.Exception -> L2d
            goto L5e
        L4d:
            kotlinx.coroutines.flow.MutableStateFlow r4 = r4.f46289y
            pn.e$d$c r0 = new pn.e$d$c
            pn.e$c$a r1 = new pn.e$c$a
            java.lang.String r2 = "Unable to initialize Camera2 classes"
            r1.<init>(r2, r5)
            r0.<init>(r1)
            r4.setValue(r0)
        L5e:
            kotlin.Unit r4 = kotlin.Unit.f33074a
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.e.U(pn.e, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(e eVar) {
        if (eVar.f46287w) {
            hs.i.d(eVar.f46274j, null, null, new k(null), 3, null);
        }
        return Unit.f33074a;
    }

    public final void G(boolean z10) {
        pn.k kVar = this.f46283s;
        if (kVar != null) {
            kVar.i(z10);
            kVar.l();
        }
    }

    public final void H() {
        pn.k kVar = this.f46283s;
        if (kVar != null) {
            kVar.j(this.f46266b.f().getWidth() / 2, this.f46266b.f().getHeight() / 2, new Size((int) (this.f46266b.f().getWidth() * 0.15d), (int) (this.f46266b.f().getHeight() * 0.15d)), 5000L);
            kVar.l();
        }
    }

    public final v I() {
        return this.f46273i;
    }

    public final Camera2PreviewView J() {
        return this.f46267c;
    }

    public final j0 K() {
        return this.f46290z;
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
            boolean r0 = r6 instanceof pn.e.h
            if (r0 == 0) goto L13
            r0 = r6
            pn.e$h r0 = (pn.e.h) r0
            int r1 = r0.f46308i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46308i = r1
            goto L18
        L13:
            pn.e$h r0 = new pn.e$h
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f46306d
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46308i
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
            hs.c1 r6 = hs.m0.c()
            pn.e$i r2 = new pn.e$i
            r4 = 0
            r2.<init>(r4)
            r0.f46308i = r3
            java.lang.Object r6 = hs.g.g(r6, r2, r0)
            if (r6 != r1) goto L47
            return r1
        L47:
            kotlin.Result r6 = (kotlin.Result) r6
            java.lang.Object r6 = r6.j()
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.e.Q(kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final void S(boolean z10) {
        this.f46285u = z10;
    }

    public final void T() {
        boolean z10;
        if (this.f46270f && androidx.core.content.a.a(this.f46265a, "android.permission.RECORD_AUDIO") != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (androidx.core.content.a.a(this.f46265a, "android.permission.CAMERA") == 0 && !z10) {
            if (this.A) {
                return;
            }
            this.A = true;
            this.f46287w = false;
            this.B = new j();
            this.f46279o.n(new Function0() { // from class: pn.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit V;
                    V = e.V(e.this);
                    return V;
                }
            });
            this.f46267c.a();
            this.f46267c.getHolder().addCallback(this.B);
            this.f46271g.c();
            return;
        }
        this.f46289y.setValue(new d.c(new c.b()));
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
            boolean r0 = r5 instanceof pn.e.m
            if (r0 == 0) goto L13
            r0 = r5
            pn.e$m r0 = (pn.e.m) r0
            int r1 = r0.f46328o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46328o = r1
            goto L18
        L13:
            pn.e$m r0 = new pn.e$m
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f46326e
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46328o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r0 = r0.f46325d
            pn.e r0 = (pn.e) r0
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
            boolean r5 = r4.f46284t
            if (r5 == 0) goto L4a
            kotlin.Result$a r5 = kotlin.Result.f33071e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L4a:
            kotlin.Result$a r5 = kotlin.Result.f33071e     // Catch: java.lang.Throwable -> L2d
            pn.r r5 = r4.f46279o     // Catch: java.lang.Throwable -> L2d
            r0.f46325d = r4     // Catch: java.lang.Throwable -> L2d
            r0.f46328o = r3     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = r5.o(r0)     // Catch: java.lang.Throwable -> L2d
            if (r5 != r1) goto L59
            return r1
        L59:
            r0 = r4
        L5a:
            r0.f46284t = r3     // Catch: java.lang.Throwable -> L2d
            kotlin.Result$a r5 = kotlin.Result.f33071e     // Catch: java.lang.Throwable -> L2d
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r3)     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = kotlin.Result.b(r5)     // Catch: java.lang.Throwable -> L2d
            return r5
        L67:
            kotlin.Result$a r0 = kotlin.Result.f33071e
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.e.W(kotlin.coroutines.Continuation):java.lang.Object");
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
            boolean r0 = r5 instanceof pn.e.n
            if (r0 == 0) goto L13
            r0 = r5
            pn.e$n r0 = (pn.e.n) r0
            int r1 = r0.f46331i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46331i = r1
            goto L18
        L13:
            pn.e$n r0 = new pn.e$n
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f46329d
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46331i
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
            boolean r5 = r4.f46284t
            if (r5 != 0) goto L48
            kotlin.Result$a r5 = kotlin.Result.f33071e
            nn.q0 r5 = new nn.q0
            r5.<init>()
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L48:
            r5 = 0
            r4.f46284t = r5
            pn.r r5 = r4.f46279o
            r0.f46331i = r3
            java.lang.Object r5 = r5.p(r0)
            if (r5 != r1) goto L56
            return r1
        L56:
            java.io.File r5 = (java.io.File) r5
            if (r5 != 0) goto L6c
            kotlin.Result$a r5 = kotlin.Result.f33071e
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
        throw new UnsupportedOperationException("Method not decompiled: pn.e.X(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
