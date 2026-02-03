package rn;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaRecorder;
import android.os.Build;
import android.view.Surface;
import java.io.File;
import js.m0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: k  reason: collision with root package name */
    public static final a f49022k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f49023l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f49024a;

    /* renamed from: b  reason: collision with root package name */
    private final l f49025b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49026c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49027d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49028e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f49029f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f49030g;

    /* renamed from: h  reason: collision with root package name */
    private File f49031h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f49032i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f49033j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f49034d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f49034d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f49032i.start();
                } catch (IllegalStateException unused) {
                    r.this.f49032i.reset();
                    r.this.k(false);
                    r.this.f49032i.start();
                }
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f49036d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            File file;
            rr.b.f();
            if (this.f49036d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f49032i.stop();
                    file = r.this.f49031h;
                } catch (RuntimeException unused) {
                    r.this.f49031h.delete();
                    file = null;
                }
                r.this.f49032i.release();
                r rVar = r.this;
                rVar.f49032i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f49024a = context;
        this.f49025b = cameraChoice;
        this.f49026c = i10;
        this.f49027d = i11;
        this.f49028e = z10;
        if (f49023l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f49030g = surface;
        this.f49031h = i();
        this.f49032i = j();
    }

    private final int g() {
        int width = this.f49025b.f().getWidth() * this.f49025b.f().getHeight();
        if (width <= 172800) {
            return 400000;
        }
        if (width <= 409920) {
            return 500000;
        }
        if (width <= 921600) {
            return 1500000;
        }
        if (width <= 2073600) {
            return 3000000;
        }
        if (width <= 3686400) {
            return 6000000;
        }
        return 10000000;
    }

    private final File i() {
        File cacheDir = this.f49024a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f49024a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f49031h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (mp.f.f(this.f49024a) && this.f49028e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f49032i.setVideoSource(2);
        if (z11) {
            this.f49032i.setAudioSource(1);
        }
        this.f49032i.setOutputFormat(2);
        this.f49032i.setVideoFrameRate(this.f49026c);
        this.f49032i.setVideoSize(this.f49025b.f().getWidth(), this.f49025b.f().getHeight());
        this.f49032i.setVideoEncoder(2);
        this.f49032i.setVideoEncodingBitRate(g());
        if (z11) {
            pn.c a10 = pn.d.a();
            if (a10 != null) {
                this.f49032i.setAudioSamplingRate(a10.a());
                this.f49032i.setAudioChannels(1);
            }
            this.f49032i.setAudioEncoder(3);
        }
        this.f49032i.setOrientationHint(this.f49027d);
        boolean z12 = f49023l;
        if (z12) {
            this.f49032i.setInputSurface(h());
        }
        this.f49032i.setOutputFile(this.f49031h.getAbsolutePath());
        this.f49032i.prepare();
        if (!z12 && !z10 && (function0 = this.f49029f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f49032i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f49031h.delete();
            throw th2;
        }
        this.f49031h.delete();
    }

    public final Surface h() {
        Surface surface = this.f49030g;
        if (surface == null) {
            Surface surface2 = this.f49032i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f49033j) {
            return;
        }
        this.f49033j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f49029f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = js.g.g(m0.a(), new b(null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    public final Object p(Continuation continuation) {
        return js.g.g(m0.a(), new c(null), continuation);
    }
}
