package rn;

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
import js.j1;
import js.m0;
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
import ms.c0;
import ms.j0;
import ms.l0;
import pn.v;
import rn.e;
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
    private final Context f48898a;

    /* renamed from: b  reason: collision with root package name */
    private final rn.l f48899b;

    /* renamed from: c  reason: collision with root package name */
    private final Camera2PreviewView f48900c;

    /* renamed from: d  reason: collision with root package name */
    private final rn.b f48901d;

    /* renamed from: e  reason: collision with root package name */
    private final vn.a f48902e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48903f;

    /* renamed from: g  reason: collision with root package name */
    private final un.a f48904g;

    /* renamed from: h  reason: collision with root package name */
    private final rp.c f48905h;

    /* renamed from: i  reason: collision with root package name */
    private final v f48906i;

    /* renamed from: j  reason: collision with root package name */
    private final CoroutineScope f48907j;

    /* renamed from: k  reason: collision with root package name */
    private final String f48908k;

    /* renamed from: l  reason: collision with root package name */
    private final CameraManager f48909l;

    /* renamed from: m  reason: collision with root package name */
    private final CameraCharacteristics f48910m;

    /* renamed from: n  reason: collision with root package name */
    private final int f48911n;

    /* renamed from: o  reason: collision with root package name */
    private final r f48912o;

    /* renamed from: p  reason: collision with root package name */
    private CameraDevice f48913p;

    /* renamed from: q  reason: collision with root package name */
    private final HandlerThread f48914q;

    /* renamed from: r  reason: collision with root package name */
    private final Handler f48915r;

    /* renamed from: s  reason: collision with root package name */
    private rn.k f48916s;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f48917t;

    /* renamed from: u  reason: collision with root package name */
    private volatile boolean f48918u;

    /* renamed from: v  reason: collision with root package name */
    private volatile boolean f48919v;

    /* renamed from: w  reason: collision with root package name */
    private volatile boolean f48920w;

    /* renamed from: x  reason: collision with root package name */
    private final MutableStateFlow f48921x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f48922y;

    /* renamed from: z  reason: collision with root package name */
    private final j0 f48923z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48924d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rn.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0602a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e f48926d;

            C0602a(e eVar) {
                this.f48926d = eVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(Image image, Continuation continuation) {
                this.f48926d.P(image);
                return Unit.f32464a;
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
            Object f10 = rr.b.f();
            int i10 = this.f48924d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = e.this.E;
                C0602a c0602a = new C0602a(e.this);
                this.f48924d = 1;
                if (mutableSharedFlow.collect(c0602a, this) == f10) {
                    return f10;
                }
            }
            throw new lr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
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
            public static final a f48927a = new a();

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
            public static final b f48928a = new b();

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
            private final c f48929a;

            public c(c error) {
                Intrinsics.checkNotNullParameter(error, "error");
                this.f48929a = error;
            }

            public final c a() {
                return this.f48929a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f48929a, ((c) obj).f48929a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f48929a.hashCode();
            }

            public String toString() {
                c cVar = this.f48929a;
                return "Error(error=" + cVar + ")";
            }
        }

        /* renamed from: rn.e$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0603d implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final C0603d f48930a = new C0603d();

            private C0603d() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0603d)) {
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
    /* renamed from: rn.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0604e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48931d;

        C0604e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0604e(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f48931d == 0) {
                kotlin.c.b(obj);
                Object value = e.this.f48922y.getValue();
                d.b bVar = d.b.f48928a;
                if (Intrinsics.areEqual(value, bVar)) {
                    return Unit.f32464a;
                }
                e.this.f48922y.setValue(bVar);
                e.this.J().getHolder().removeCallback(e.this.B);
                e.this.F.block(2000L);
                e.this.f48912o.f();
                e.this.D.close();
                rn.k kVar = e.this.f48916s;
                if (kVar != null) {
                    kVar.e();
                }
                e.this.f48916s = null;
                CameraDevice cameraDevice = e.this.f48913p;
                if (cameraDevice != null) {
                    cameraDevice.close();
                }
                e.this.f48913p = null;
                e.this.f48904g.b();
                kotlinx.coroutines.i.f(e.this.f48907j, null, 1, null);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0604e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f48933d;

        /* renamed from: e  reason: collision with root package name */
        int f48934e;

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
            throw new UnsupportedOperationException("Method not decompiled: rn.e.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f48936a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ e f48937b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f48938c;

        g(CancellableContinuation cancellableContinuation, e eVar, String str) {
            this.f48936a = cancellableContinuation;
            this.f48937b = eVar;
            this.f48938c = str;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f48937b.f48913p = null;
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
            String str2 = this.f48938c;
            RuntimeException runtimeException = new RuntimeException("Camera " + str2 + " error: (" + i10 + ") " + str);
            if (this.f48936a.a()) {
                CancellableContinuation cancellableContinuation = this.f48936a;
                Result.a aVar = Result.f32461e;
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(runtimeException)));
            }
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(CameraDevice device) {
            Intrinsics.checkNotNullParameter(device, "device");
            this.f48936a.resumeWith(Result.b(device));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f48939d;

        /* renamed from: i  reason: collision with root package name */
        int f48941i;

        h(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48939d = obj;
            this.f48941i |= Integer.MIN_VALUE;
            Object Q = e.this.Q(this);
            if (Q == rr.b.f()) {
                return Q;
            }
            return Result.a(Q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48942d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f48944d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f48945e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: rn.e$i$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0605a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f48946d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ e f48947e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0605a(e eVar, Continuation continuation) {
                    super(2, continuation);
                    this.f48947e = eVar;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0605a(this.f48947e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = rr.b.f();
                    int i10 = this.f48946d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return obj;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    Flow r10 = ms.g.r(this.f48947e.f48921x);
                    this.f48946d = 1;
                    Object s10 = ms.g.s(r10, this);
                    if (s10 == f10) {
                        return f10;
                    }
                    return s10;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0605a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f48945e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f48945e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f48944d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                CoroutineContext coroutineContext = this.f48945e.f48907j.getCoroutineContext();
                C0605a c0605a = new C0605a(this.f48945e, null);
                this.f48944d = 1;
                Object g10 = js.g.g(coroutineContext, c0605a, this);
                if (g10 == f10) {
                    return f10;
                }
                return g10;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
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
            Object f10 = rr.b.f();
            int i10 = this.f48942d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                if (!e.this.f48919v) {
                    e.this.f48921x.setValue(null);
                    e.this.f48919v = true;
                    CoroutineDispatcher b10 = m0.b();
                    a aVar = new a(e.this, null);
                    this.f48942d = 1;
                    obj = js.g.g(b10, aVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else {
                    Result.a aVar2 = Result.f32461e;
                    return Result.a(Result.b(kotlin.c.a(new RuntimeException("Image capture already requested."))));
                }
            }
            Object j10 = ((Result) obj).j();
            e.this.f48919v = false;
            return Result.a(j10);
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j implements SurfaceHolder.Callback {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f48949d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f48950e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f48950e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f48950e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f48949d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f48950e;
                    this.f48949d = 1;
                    if (e.U(eVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32464a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f48951d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f48952e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(e eVar, Continuation continuation) {
                super(2, continuation);
                this.f48952e = eVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f48952e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f48951d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    e eVar = this.f48952e;
                    this.f48951d = 1;
                    if (eVar.F(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32464a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        j() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(e eVar) {
            js.i.d(eVar.f48907j, null, null, new a(eVar, null), 3, null);
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder holder, int i10, int i11, int i12) {
            Intrinsics.checkNotNullParameter(holder, "holder");
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f48920w = true;
            e.this.J().b(e.this.f48899b.f().getWidth(), e.this.f48899b.f().getHeight(), e.this.f48911n);
            Camera2PreviewView J = e.this.J();
            final e eVar = e.this;
            J.post(new Runnable() { // from class: rn.f
                @Override // java.lang.Runnable
                public final void run() {
                    e.j.b(e.this);
                }
            });
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder holder) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            e.this.f48920w = false;
            js.i.d(e.this.f48907j, null, null, new b(e.this, null), 3, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48953d;

        k(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f48953d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f48953d = 1;
                if (e.U(eVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f48955d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f48956e;

        /* renamed from: i  reason: collision with root package name */
        int f48957i;

        l(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48956e = obj;
            this.f48957i |= Integer.MIN_VALUE;
            return e.U(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f48958d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f48959e;

        /* renamed from: o  reason: collision with root package name */
        int f48961o;

        m(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48959e = obj;
            this.f48961o |= Integer.MIN_VALUE;
            Object W = e.this.W(this);
            if (W == rr.b.f()) {
                return W;
            }
            return Result.a(W);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f48962d;

        /* renamed from: i  reason: collision with root package name */
        int f48964i;

        n(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48962d = obj;
            this.f48964i |= Integer.MIN_VALUE;
            Object X = e.this.X(this);
            if (X == rr.b.f()) {
                return X;
            }
            return Result.a(X);
        }
    }

    public e(Context context, rn.l cameraChoice, Camera2PreviewView previewView, rn.b analyzer, vn.a videoCaptureMethod, oq.a aVar, boolean z10, un.a cameraStatsManager, rp.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f48898a = context;
        this.f48899b = cameraChoice;
        this.f48900c = previewView;
        this.f48901d = analyzer;
        this.f48902e = videoCaptureMethod;
        this.f48903f = z10;
        this.f48904g = cameraStatsManager;
        this.f48905h = sdkFilesManager;
        this.f48906i = cameraChoice.b();
        CoroutineScope a10 = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f48907j = a10;
        String d10 = cameraChoice.d();
        this.f48908k = d10;
        Object systemService = context.getSystemService("camera");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.camera2.CameraManager");
        CameraManager cameraManager = (CameraManager) systemService;
        this.f48909l = cameraManager;
        CameraCharacteristics cameraCharacteristics = cameraManager.getCameraCharacteristics(d10);
        Intrinsics.checkNotNullExpressionValue(cameraCharacteristics, "getCameraCharacteristics(...)");
        this.f48910m = cameraCharacteristics;
        Object obj = cameraCharacteristics.get(CameraCharacteristics.SENSOR_ORIENTATION);
        if (obj != null) {
            int intValue = ((Number) obj).intValue();
            this.f48911n = intValue;
            Comparable upper = cameraChoice.g().getUpper();
            Intrinsics.checkNotNullExpressionValue(upper, "getUpper(...)");
            this.f48912o = new r(context, cameraChoice, ((Number) upper).intValue(), intValue, z10);
            HandlerThread handlerThread = new HandlerThread("CameraThread");
            handlerThread.start();
            this.f48914q = handlerThread;
            this.f48915r = new Handler(handlerThread.getLooper());
            this.f48918u = true;
            this.f48921x = l0.a(null);
            MutableStateFlow a11 = l0.a(d.a.f48927a);
            this.f48922y = a11;
            this.f48923z = a11;
            this.C = 1.0f;
            this.D = M();
            this.E = c0.b(0, 1, ls.a.f37142d, 1, null);
            this.F = new ConditionVariable();
            js.i.d(a10, null, null, new a(null), 3, null);
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object F(Continuation continuation) {
        Object g10 = js.g.g(m0.a(), new C0604e(null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    private final Object L(Continuation continuation) {
        Object g10 = js.g.g(m0.c(), new f(null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ImageReader M() {
        ImageReader newInstance = ImageReader.newInstance((int) (this.f48899b.f().getWidth() * this.C), (int) (this.f48899b.f().getHeight() * this.C), 35, 3);
        newInstance.setOnImageAvailableListener(new ImageReader.OnImageAvailableListener() { // from class: rn.c
            @Override // android.media.ImageReader.OnImageAvailableListener
            public final void onImageAvailable(ImageReader imageReader) {
                e.N(e.this, imageReader);
            }
        }, this.f48915r);
        Intrinsics.checkNotNullExpressionValue(newInstance, "also(...)");
        return newInstance;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(e eVar, ImageReader imageReader) {
        Image acquireNextImage = imageReader.acquireNextImage();
        eVar.f48899b.e();
        vn.a aVar = vn.a.f51697d;
        if (acquireNextImage != null && !eVar.E.b(acquireNextImage)) {
            acquireNextImage.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object O(CameraManager cameraManager, String str, Handler handler, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(rr.b.c(continuation), 1);
        eVar.H();
        cameraManager.openCamera(str, new g(eVar, this, str), handler);
        Object B = eVar.B();
        if (B == rr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void P(Image image) {
        try {
            if (Intrinsics.areEqual(this.f48922y.getValue(), d.b.f48928a)) {
                this.F.open();
                xr.a.a(image, null);
            } else if (!this.f48918u && !this.f48919v) {
                xr.a.a(image, null);
            } else {
                if (this.f48919v) {
                    File R = R(image);
                    if (R != null) {
                        this.f48921x.setValue(Result.a(Result.b(R)));
                    }
                } else if (this.f48918u) {
                    try {
                        this.f48901d.f(image, this.f48911n);
                    } catch (Exception unused) {
                    }
                }
                Unit unit = Unit.f32464a;
                xr.a.a(image, null);
            }
        } catch (IllegalArgumentException unused2) {
        }
    }

    private final File R(Image image) {
        Bitmap c10 = pn.m0.c(image, this.f48911n);
        if (c10 == null) {
            return null;
        }
        File c11 = this.f48905h.c("jpg");
        FileOutputStream fileOutputStream = new FileOutputStream(c11);
        try {
            c10.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            wr.c.a(fileOutputStream, null);
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
        r4.f48922y.setValue(new rn.e.d.c(new rn.e.c.a("Unable to initialize Camera2 classes", r5)));
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object U(rn.e r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof rn.e.l
            if (r0 == 0) goto L13
            r0 = r5
            rn.e$l r0 = (rn.e.l) r0
            int r1 = r0.f48957i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48957i = r1
            goto L18
        L13:
            rn.e$l r0 = new rn.e$l
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48956e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48957i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r4 = r0.f48955d
            rn.e r4 = (rn.e) r4
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
            r0.f48955d = r4     // Catch: java.lang.Exception -> L2d
            r0.f48957i = r3     // Catch: java.lang.Exception -> L2d
            java.lang.Object r5 = r4.L(r0)     // Catch: java.lang.Exception -> L2d
            if (r5 != r1) goto L45
            return r1
        L45:
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f48922y     // Catch: java.lang.Exception -> L2d
            rn.e$d$d r0 = rn.e.d.C0603d.f48930a     // Catch: java.lang.Exception -> L2d
            r5.setValue(r0)     // Catch: java.lang.Exception -> L2d
            goto L5e
        L4d:
            kotlinx.coroutines.flow.MutableStateFlow r4 = r4.f48922y
            rn.e$d$c r0 = new rn.e$d$c
            rn.e$c$a r1 = new rn.e$c$a
            java.lang.String r2 = "Unable to initialize Camera2 classes"
            r1.<init>(r2, r5)
            r0.<init>(r1)
            r4.setValue(r0)
        L5e:
            kotlin.Unit r4 = kotlin.Unit.f32464a
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.e.U(rn.e, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(e eVar) {
        if (eVar.f48920w) {
            js.i.d(eVar.f48907j, null, null, new k(null), 3, null);
        }
        return Unit.f32464a;
    }

    public final void G(boolean z10) {
        rn.k kVar = this.f48916s;
        if (kVar != null) {
            kVar.i(z10);
            kVar.l();
        }
    }

    public final void H() {
        rn.k kVar = this.f48916s;
        if (kVar != null) {
            kVar.j(this.f48899b.f().getWidth() / 2, this.f48899b.f().getHeight() / 2, new Size((int) (this.f48899b.f().getWidth() * 0.15d), (int) (this.f48899b.f().getHeight() * 0.15d)), 5000L);
            kVar.l();
        }
    }

    public final v I() {
        return this.f48906i;
    }

    public final Camera2PreviewView J() {
        return this.f48900c;
    }

    public final j0 K() {
        return this.f48923z;
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
            boolean r0 = r6 instanceof rn.e.h
            if (r0 == 0) goto L13
            r0 = r6
            rn.e$h r0 = (rn.e.h) r0
            int r1 = r0.f48941i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48941i = r1
            goto L18
        L13:
            rn.e$h r0 = new rn.e$h
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f48939d
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48941i
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
            js.c1 r6 = js.m0.c()
            rn.e$i r2 = new rn.e$i
            r4 = 0
            r2.<init>(r4)
            r0.f48941i = r3
            java.lang.Object r6 = js.g.g(r6, r2, r0)
            if (r6 != r1) goto L47
            return r1
        L47:
            kotlin.Result r6 = (kotlin.Result) r6
            java.lang.Object r6 = r6.j()
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.e.Q(kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final void S(boolean z10) {
        this.f48918u = z10;
    }

    public final void T() {
        boolean z10;
        if (this.f48903f && androidx.core.content.a.a(this.f48898a, "android.permission.RECORD_AUDIO") != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (androidx.core.content.a.a(this.f48898a, "android.permission.CAMERA") == 0 && !z10) {
            if (this.A) {
                return;
            }
            this.A = true;
            this.f48920w = false;
            this.B = new j();
            this.f48912o.n(new Function0() { // from class: rn.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit V;
                    V = e.V(e.this);
                    return V;
                }
            });
            this.f48900c.a();
            this.f48900c.getHolder().addCallback(this.B);
            this.f48904g.c();
            return;
        }
        this.f48922y.setValue(new d.c(new c.b()));
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
            boolean r0 = r5 instanceof rn.e.m
            if (r0 == 0) goto L13
            r0 = r5
            rn.e$m r0 = (rn.e.m) r0
            int r1 = r0.f48961o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48961o = r1
            goto L18
        L13:
            rn.e$m r0 = new rn.e$m
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48959e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48961o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r0 = r0.f48958d
            rn.e r0 = (rn.e) r0
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
            boolean r5 = r4.f48917t
            if (r5 == 0) goto L4a
            kotlin.Result$a r5 = kotlin.Result.f32461e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L4a:
            kotlin.Result$a r5 = kotlin.Result.f32461e     // Catch: java.lang.Throwable -> L2d
            rn.r r5 = r4.f48912o     // Catch: java.lang.Throwable -> L2d
            r0.f48958d = r4     // Catch: java.lang.Throwable -> L2d
            r0.f48961o = r3     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = r5.o(r0)     // Catch: java.lang.Throwable -> L2d
            if (r5 != r1) goto L59
            return r1
        L59:
            r0 = r4
        L5a:
            r0.f48917t = r3     // Catch: java.lang.Throwable -> L2d
            kotlin.Result$a r5 = kotlin.Result.f32461e     // Catch: java.lang.Throwable -> L2d
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r3)     // Catch: java.lang.Throwable -> L2d
            java.lang.Object r5 = kotlin.Result.b(r5)     // Catch: java.lang.Throwable -> L2d
            return r5
        L67:
            kotlin.Result$a r0 = kotlin.Result.f32461e
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.e.W(kotlin.coroutines.Continuation):java.lang.Object");
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
            boolean r0 = r5 instanceof rn.e.n
            if (r0 == 0) goto L13
            r0 = r5
            rn.e$n r0 = (rn.e.n) r0
            int r1 = r0.f48964i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48964i = r1
            goto L18
        L13:
            rn.e$n r0 = new rn.e$n
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48962d
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48964i
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
            boolean r5 = r4.f48917t
            if (r5 != 0) goto L48
            kotlin.Result$a r5 = kotlin.Result.f32461e
            pn.q0 r5 = new pn.q0
            r5.<init>()
            java.lang.Object r5 = kotlin.c.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L48:
            r5 = 0
            r4.f48917t = r5
            rn.r r5 = r4.f48912o
            r0.f48964i = r3
            java.lang.Object r5 = r5.p(r0)
            if (r5 != r1) goto L56
            return r1
        L56:
            java.io.File r5 = (java.io.File) r5
            if (r5 != 0) goto L6c
            kotlin.Result$a r5 = kotlin.Result.f32461e
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
        throw new UnsupportedOperationException("Method not decompiled: rn.e.X(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
