package on;

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
import gs.j1;
import gs.m0;
import java.io.File;
import java.io.FileOutputStream;
import js.c0;
import js.j0;
import js.l0;
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
import mn.v;
import on.e;
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
    private final Context f44459a;

    /* renamed from: b  reason: collision with root package name */
    private final on.l f44460b;

    /* renamed from: c  reason: collision with root package name */
    private final Camera2PreviewView f44461c;

    /* renamed from: d  reason: collision with root package name */
    private final on.b f44462d;

    /* renamed from: e  reason: collision with root package name */
    private final sn.a f44463e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f44464f;

    /* renamed from: g  reason: collision with root package name */
    private final rn.a f44465g;

    /* renamed from: h  reason: collision with root package name */
    private final op.c f44466h;

    /* renamed from: i  reason: collision with root package name */
    private final v f44467i;

    /* renamed from: j  reason: collision with root package name */
    private final CoroutineScope f44468j;

    /* renamed from: k  reason: collision with root package name */
    private final String f44469k;

    /* renamed from: l  reason: collision with root package name */
    private final CameraManager f44470l;

    /* renamed from: m  reason: collision with root package name */
    private final CameraCharacteristics f44471m;

    /* renamed from: n  reason: collision with root package name */
    private final int f44472n;

    /* renamed from: o  reason: collision with root package name */
    private final r f44473o;

    /* renamed from: p  reason: collision with root package name */
    private CameraDevice f44474p;

    /* renamed from: q  reason: collision with root package name */
    private final HandlerThread f44475q;

    /* renamed from: r  reason: collision with root package name */
    private final Handler f44476r;

    /* renamed from: s  reason: collision with root package name */
    private on.k f44477s;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f44478t;

    /* renamed from: u  reason: collision with root package name */
    private volatile boolean f44479u;

    /* renamed from: v  reason: collision with root package name */
    private volatile boolean f44480v;

    /* renamed from: w  reason: collision with root package name */
    private volatile boolean f44481w;

    /* renamed from: x  reason: collision with root package name */
    private final MutableStateFlow f44482x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f44483y;

    /* renamed from: z  reason: collision with root package name */
    private final j0 f44484z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44485d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: on.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0544a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e f44487d;

            C0544a(e eVar) {
                this.f44487d = eVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(Image image, Continuation continuation) {
                this.f44487d.P(image);
                return Unit.f33282a;
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
            Object f10 = or.b.f();
            int i10 = this.f44485d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = e.this.E;
                C0544a c0544a = new C0544a(e.this);
                this.f44485d = 1;
                if (mutableSharedFlow.collect(c0544a, this) == f10) {
                    return f10;
                }
            }
            throw new ir.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
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
            public static final a f44488a = new a();

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
            public static final b f44489a = new b();

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
            private final c f44490a;

            public c(c error) {
                Intrinsics.checkNotNullParameter(error, "error");
                this.f44490a = error;
            }

            public final c a() {
                return this.f44490a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f44490a, ((c) obj).f44490a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f44490a.hashCode();
            }

            public String toString() {
                c cVar = this.f44490a;
                return "Error(error=" + cVar + ")";
            }
        }

        /* renamed from: on.e$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0545d implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final C0545d f44491a = new C0545d();

            private C0545d() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0545d)) {
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
    /* renamed from: on.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0546e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44492d;

        C0546e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0546e(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f44492d == 0) {
                kotlin.c.b(obj);
                Object value = e.this.f44483y.getValue();
                d.b bVar = d.b.f44489a;
                if (Intrinsics.areEqual(value, bVar)) {
                    return Unit.f33282a;
                }
                e.this.f44483y.setValue(bVar);
                e.this.J().getHolder().removeCallback(e.this.B);
                e.this.F.block(2000L);
                e.this.f44473o.f();
                e.this.D.close();
                on.k kVar = e.this.f44477s;
                if (kVar != null) {
                    kVar.e();
                }
                e.this.f44477s = null;
                CameraDevice cameraDevice = e.this.f44474p;
                if (cameraDevice != null) {
                    cameraDevice.close();
                }
                e.this.f44474p = null;
                e.this.f44465g.b();
                kotlinx.coroutines.i.f(e.this.f44468j, null, 1, null);
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0546e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f44494d;

        /* renamed from: e  reason: collision with root package name */
        int f44495e;

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
            throw new UnsupportedOperationException("Method not decompiled: on.e.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f44497a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ e f44498b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f44499c;

        g(CancellableContinuation cancellableContinuation, e eVar, String str) {
            this.f44497a = cancellableContinuation;
            this.f44498b = eVar;
            this.f44499c = str;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f44498b.f44474p = null;
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
            String str2 = this.f44499c;
            RuntimeException runtimeException = new RuntimeException("Camera " + str2 + " error: (" + i10 + ") " + str);
            if (this.f44497a.a()) {
                CancellableContinuation cancellableContinuation = this.f44497a;
                Result.a aVar = Result.f33279e;
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(runtimeException)));
            }
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f44497a.resumeWith(Result.b(device));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f44500d;

        /* renamed from: i  reason: collision with root package name */
        int f44502i;

        h(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44500d = obj;
            this.f44502i |= Integer.MIN_VALUE;
            Object Q = e.this.Q(this);
            if (Q == or.b.f()) {
                return Q;
            }
            return Result.a(Q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44503d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f44505d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f44506e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: on.e$i$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0547a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f44507d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ e f44508e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0547a(e eVar, Continuation continuation) {
                    super(2, continuation);
                    this.f44508e = eVar;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0547a(this.f44508e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = or.b.f();
                    int i10 = this.f44507d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return obj;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    Flow r10 = js.g.r(this.f44508e.f44482x);
                    this.f44507d = 1;
                    Object s10 = js.g.s(r10, this);
                    if (s10 == f10) {
                        return f10;
                    }
                    return s10;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0547a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f44506e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f44506e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f44505d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                CoroutineContext coroutineContext = this.f44506e.f44468j.getCoroutineContext();
                C0547a c0547a = new C0547a(this.f44506e, null);
                this.f44505d = 1;
                Object g10 = gs.g.g(coroutineContext, c0547a, this);
                if (g10 == f10) {
                    return f10;
                }
                return g10;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
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
            Object f10 = or.b.f();
            int i10 = this.f44503d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                if (!e.this.f44480v) {
                    e.this.f44482x.setValue(null);
                    e.this.f44480v = true;
                    CoroutineDispatcher b10 = m0.b();
                    a aVar = new a(e.this, null);
                    this.f44503d = 1;
                    obj = gs.g.g(b10, aVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else {
                    Result.a aVar2 = Result.f33279e;
                    return Result.a(Result.b(kotlin.c.a(new RuntimeException("Image capture already requested."))));
                }
            }
            Object j10 = ((Result) obj).j();
            e.this.f44480v = false;
            return Result.a(j10);
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j implements SurfaceHolder.Callback {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f44510d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f44511e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f44511e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f44511e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f44510d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f44511e;
                    this.f44510d = 1;
                    if (e.U(eVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33282a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f44512d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f44513e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f44513e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f44513e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f44512d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f44513e;
                    this.f44512d = 1;
                    if (eVar.F(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33282a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        j() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(e eVar) {
            gs.i.d(eVar.f44468j, null, null, new a(eVar, null), 3, null);
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder holder, int i10, int i11, int i12) {
            Intrinsics.checkNotNullParameter(holder, "holder");
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f44481w = true;
            e.this.J().b(e.this.f44460b.f().getWidth(), e.this.f44460b.f().getHeight(), e.this.f44472n);
            Camera2PreviewView J = e.this.J();
            final e eVar = e.this;
            J.post(new Runnable() { // from class: on.f
                @Override // java.lang.Runnable
                public final void run() {
                    e.j.b(e.this);
                }
            });
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f44481w = false;
            gs.i.d(e.this.f44468j, null, null, new b(e.this, null), 3, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44514d;

        k(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f44514d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f44514d = 1;
                if (e.U(eVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f44516d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f44517e;

        /* renamed from: i  reason: collision with root package name */
        int f44518i;

        l(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44517e = obj;
            this.f44518i |= Integer.MIN_VALUE;
            return e.U(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f44519d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f44520e;

        /* renamed from: o  reason: collision with root package name */
        int f44522o;

        m(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44520e = obj;
            this.f44522o |= Integer.MIN_VALUE;
            Object W = e.this.W(this);
            if (W == or.b.f()) {
                return W;
            }
            return Result.a(W);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f44523d;

        /* renamed from: i  reason: collision with root package name */
        int f44525i;

        n(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44523d = obj;
            this.f44525i |= Integer.MIN_VALUE;
            Object X = e.this.X(this);
            if (X == or.b.f()) {
                return X;
            }
            return Result.a(X);
        }
    }

    public e(Context context, on.l cameraChoice, Camera2PreviewView previewView, on.b analyzer, sn.a videoCaptureMethod, lq.a aVar, boolean z10, rn.a cameraStatsManager, op.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f44459a = context;
        this.f44460b = cameraChoice;
        this.f44461c = previewView;
        this.f44462d = analyzer;
        this.f44463e = videoCaptureMethod;
        this.f44464f = z10;
        this.f44465g = cameraStatsManager;
        this.f44466h = sdkFilesManager;
        this.f44467i = cameraChoice.b();
        CoroutineScope a10 = kotlinx.coroutines.i.a(m0.a().U0(j1.b(null, 1, null)));
        this.f44468j = a10;
        String d10 = cameraChoice.d();
        this.f44469k = d10;
        Object systemService = context.getSystemService("camera");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.camera2.CameraManager");
        CameraManager cameraManager = (CameraManager) systemService;
        this.f44470l = cameraManager;
        CameraCharacteristics cameraCharacteristics = cameraManager.getCameraCharacteristics(d10);
        Intrinsics.checkNotNullExpressionValue(cameraCharacteristics, "getCameraCharacteristics(...)");
        this.f44471m = cameraCharacteristics;
        Object obj = cameraCharacteristics.get(CameraCharacteristics.SENSOR_ORIENTATION);
        if (obj != null) {
            int intValue = ((Number) obj).intValue();
            this.f44472n = intValue;
            Comparable upper = cameraChoice.g().getUpper();
            Intrinsics.checkNotNullExpressionValue(upper, "getUpper(...)");
            this.f44473o = new r(context, cameraChoice, ((Number) upper).intValue(), intValue, z10);
            HandlerThread handlerThread = new HandlerThread("CameraThread");
            handlerThread.start();
            this.f44475q = handlerThread;
            this.f44476r = new Handler(handlerThread.getLooper());
            this.f44479u = true;
            this.f44482x = l0.a(null);
            MutableStateFlow a11 = l0.a(d.a.f44488a);
            this.f44483y = a11;
            this.f44484z = a11;
            this.C = 1.0f;
            this.D = M();
            this.E = c0.b(0, 1, is.a.f31125d, 1, null);
            this.F = new ConditionVariable();
            gs.i.d(a10, null, null, new a(null), 3, null);
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object F(Continuation continuation) {
        Object g10 = gs.g.g(m0.a(), new C0546e(null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33282a;
    }

    private final Object L(Continuation continuation) {
        Object g10 = gs.g.g(m0.c(), new f(null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ImageReader M() {
        ImageReader newInstance = ImageReader.newInstance((int) (this.f44460b.f().getWidth() * this.C), (int) (this.f44460b.f().getHeight() * this.C), 35, 3);
        newInstance.setOnImageAvailableListener(new ImageReader.OnImageAvailableListener() { // from class: on.c
            @Override // android.media.ImageReader.OnImageAvailableListener
            public final void onImageAvailable(ImageReader imageReader) {
                e.N(e.this, imageReader);
            }
        }, this.f44476r);
        Intrinsics.checkNotNullExpressionValue(newInstance, "also(...)");
        return newInstance;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(e eVar, ImageReader imageReader) {
        Image acquireNextImage = imageReader.acquireNextImage();
        eVar.f44460b.e();
        sn.a aVar = sn.a.f49090d;
        if (acquireNextImage != null && !eVar.E.b(acquireNextImage)) {
            acquireNextImage.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object O(CameraManager cameraManager, String str, Handler handler, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(or.b.c(continuation), 1);
        eVar.H();
        cameraManager.openCamera(str, new g(eVar, this, str), handler);
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void P(Image image) {
        try {
            if (Intrinsics.areEqual(this.f44483y.getValue(), d.b.f44489a)) {
                this.F.open();
                ur.a.a(image, null);
            } else if (!this.f44479u && !this.f44480v) {
                ur.a.a(image, null);
            } else {
                if (this.f44480v) {
                    File R = R(image);
                    if (R != null) {
                        this.f44482x.setValue(Result.a(Result.b(R)));
                    }
                } else if (this.f44479u) {
                    try {
                        this.f44462d.f(image, this.f44472n);
                    } catch (Exception unused) {
                    }
                }
                Unit unit = Unit.f33282a;
                ur.a.a(image, null);
            }
        } catch (IllegalArgumentException unused2) {
        }
    }

    private final File R(Image image) {
        Bitmap c10 = mn.m0.c(image, this.f44472n);
        if (c10 == null) {
            return null;
        }
        File c11 = this.f44466h.c("jpg");
        FileOutputStream fileOutputStream = new FileOutputStream(c11);
        try {
            c10.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            tr.c.a(fileOutputStream, null);
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
        r4.f44483y.setValue(new on.e.d.c(new on.e.c.a("Unable to initialize Camera2 classes", r5)));
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object U(on.e r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof on.e.l
            if (r0 == 0) goto L13
            r0 = r5
            on.e$l r0 = (on.e.l) r0
            int r1 = r0.f44518i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44518i = r1
            goto L18
        L13:
            on.e$l r0 = new on.e$l
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f44517e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f44518i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r4 = r0.f44516d
            on.e r4 = (on.e) r4
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
            r0.f44516d = r4     // Catch: java.lang.Exception -> L2d
            r0.f44518i = r3     // Catch: java.lang.Exception -> L2d
            java.lang.Object r5 = r4.L(r0)     // Catch: java.lang.Exception -> L2d
            if (r5 != r1) goto L45
            return r1
        L45:
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f44483y     // Catch: java.lang.Exception -> L2d
            on.e$d$d r0 = on.e.d.C0545d.f44491a     // Catch: java.lang.Exception -> L2d
            r5.setValue(r0)     // Catch: java.lang.Exception -> L2d
            goto L5e
        L4d:
            kotlinx.coroutines.flow.MutableStateFlow r4 = r4.f44483y
            on.e$d$c r0 = new on.e$d$c
            on.e$c$a r1 = new on.e$c$a
            java.lang.String r2 = "Unable to initialize Camera2 classes"
            r1.<init>(r2, r5)
            r0.<init>(r1)
            r4.setValue(r0)
        L5e:
            kotlin.Unit r4 = kotlin.Unit.f33282a
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: on.e.U(on.e, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(e eVar) {
        if (eVar.f44481w) {
            gs.i.d(eVar.f44468j, null, null, new k(null), 3, null);
        }
        return Unit.f33282a;
    }

    public final void G(boolean z10) {
        on.k kVar = this.f44477s;
        if (kVar != null) {
            kVar.i(z10);
            kVar.l();
        }
    }

    public final void H() {
        on.k kVar = this.f44477s;
        if (kVar != null) {
            kVar.j(this.f44460b.f().getWidth() / 2, this.f44460b.f().getHeight() / 2, new Size((int) (this.f44460b.f().getWidth() * 0.15d), (int) (this.f44460b.f().getHeight() * 0.15d)), 5000L);
            kVar.l();
        }
    }

    public final v I() {
        return this.f44467i;
    }

    public final Camera2PreviewView J() {
        return this.f44461c;
    }

    public final j0 K() {
        return this.f44484z;
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
            boolean r0 = r6 instanceof on.e.h
            if (r0 == 0) goto L13
            r0 = r6
            on.e$h r0 = (on.e.h) r0
            int r1 = r0.f44502i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44502i = r1
            goto L18
        L13:
            on.e$h r0 = new on.e$h
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f44500d
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f44502i
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
            gs.c1 r6 = gs.m0.c()
            on.e$i r2 = new on.e$i
            r4 = 0
            r2.<init>(r4)
            r0.f44502i = r3
            java.lang.Object r6 = gs.g.g(r6, r2, r0)
            if (r6 != r1) goto L47
            return r1
        L47:
            kotlin.Result r6 = (kotlin.Result) r6
            java.lang.Object r6 = r6.j()
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: on.e.Q(kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final void S(boolean z10) {
        this.f44479u = z10;
    }

    public final void T() {
        boolean z10;
        if (this.f44464f && androidx.core.content.a.a(this.f44459a, "android.permission.RECORD_AUDIO") != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (androidx.core.content.a.a(this.f44459a, "android.permission.CAMERA") == 0 && !z10) {
            if (this.A) {
                return;
            }
            this.A = true;
            this.f44481w = false;
            this.B = new j();
            this.f44473o.n(new Function0() { // from class: on.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit V;
                    V = e.V(e.this);
                    return V;
                }
            });
            this.f44461c.a();
            this.f44461c.getHolder().addCallback(this.B);
            this.f44465g.c();
            return;
        }
        this.f44483y.setValue(new d.c(new c.b()));
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
            boolean r0 = r5 instanceof on.e.m
            if (r0 == 0) goto L13
            r0 = r5
            on.e$m r0 = (on.e.m) r0
            int r1 = r0.f44522o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44522o = r1
            goto L18
        L13:
            on.e$m r0 = new on.e$m
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f44520e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f44522o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r0 = r0.f44519d
            on.e r0 = (on.e) r0
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
            boolean r5 = r4.f44478t
            if (r5 == 0) goto L4a
            kotlin.Result$a r5 = kotlin.Result.f33279e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L4a:
            kotlin.Result$a r5 = kotlin.Result.f33279e     // Catch: java.lang.Throwable -> L2d
            on.r r5 = r4.f44473o     // Catch: java.lang.Throwable -> L2d
            r0.f44519d = r4     // Catch: java.lang.Throwable -> L2d
            r0.f44522o = r3     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = r5.o(r0)     // Catch: java.lang.Throwable -> L2d
            if (r5 != r1) goto L59
            return r1
        L59:
            r0 = r4
        L5a:
            r0.f44478t = r3     // Catch: java.lang.Throwable -> L2d
            kotlin.Result$a r5 = kotlin.Result.f33279e     // Catch: java.lang.Throwable -> L2d
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r3)     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = kotlin.Result.b(r5)     // Catch: java.lang.Throwable -> L2d
            return r5
        L67:
            kotlin.Result$a r0 = kotlin.Result.f33279e
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: on.e.W(kotlin.coroutines.Continuation):java.lang.Object");
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
            boolean r0 = r5 instanceof on.e.n
            if (r0 == 0) goto L13
            r0 = r5
            on.e$n r0 = (on.e.n) r0
            int r1 = r0.f44525i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44525i = r1
            goto L18
        L13:
            on.e$n r0 = new on.e$n
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f44523d
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f44525i
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
            boolean r5 = r4.f44478t
            if (r5 != 0) goto L48
            kotlin.Result$a r5 = kotlin.Result.f33279e
            mn.q0 r5 = new mn.q0
            r5.<init>()
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L48:
            r5 = 0
            r4.f44478t = r5
            on.r r5 = r4.f44473o
            r0.f44525i = r3
            java.lang.Object r5 = r5.p(r0)
            if (r5 != r1) goto L56
            return r1
        L56:
            java.io.File r5 = (java.io.File) r5
            if (r5 != 0) goto L6c
            kotlin.Result$a r5 = kotlin.Result.f33279e
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
        throw new UnsupportedOperationException("Method not decompiled: on.e.X(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
