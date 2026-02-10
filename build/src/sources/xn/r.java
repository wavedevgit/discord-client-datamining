package xn;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaRecorder;
import android.os.Build;
import android.view.Surface;
import java.io.File;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import ps.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: k  reason: collision with root package name */
    public static final a f55232k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f55233l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f55234a;

    /* renamed from: b  reason: collision with root package name */
    private final l f55235b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55236c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55237d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f55238e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f55239f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f55240g;

    /* renamed from: h  reason: collision with root package name */
    private File f55241h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f55242i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f55243j;

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
        int f55244d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f55244d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f55242i.start();
                } catch (IllegalStateException unused) {
                    r.this.f55242i.reset();
                    r.this.k(false);
                    r.this.f55242i.start();
                }
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55246d;

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
            xr.b.f();
            if (this.f55246d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f55242i.stop();
                    file = r.this.f55241h;
                } catch (RuntimeException unused) {
                    r.this.f55241h.delete();
                    file = null;
                }
                r.this.f55242i.release();
                r rVar = r.this;
                rVar.f55242i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f55234a = context;
        this.f55235b = cameraChoice;
        this.f55236c = i10;
        this.f55237d = i11;
        this.f55238e = z10;
        if (f55233l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f55240g = surface;
        this.f55241h = i();
        this.f55242i = j();
    }

    private final int g() {
        int width = this.f55235b.f().getWidth() * this.f55235b.f().getHeight();
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
        File cacheDir = this.f55234a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f55234a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f55241h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (sp.f.f(this.f55234a) && this.f55238e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f55242i.setVideoSource(2);
        if (z11) {
            this.f55242i.setAudioSource(1);
        }
        this.f55242i.setOutputFormat(2);
        this.f55242i.setVideoFrameRate(this.f55236c);
        this.f55242i.setVideoSize(this.f55235b.f().getWidth(), this.f55235b.f().getHeight());
        this.f55242i.setVideoEncoder(2);
        this.f55242i.setVideoEncodingBitRate(g());
        if (z11) {
            vn.c a10 = vn.d.a();
            if (a10 != null) {
                this.f55242i.setAudioSamplingRate(a10.a());
                this.f55242i.setAudioChannels(1);
            }
            this.f55242i.setAudioEncoder(3);
        }
        this.f55242i.setOrientationHint(this.f55237d);
        boolean z12 = f55233l;
        if (z12) {
            this.f55242i.setInputSurface(h());
        }
        this.f55242i.setOutputFile(this.f55241h.getAbsolutePath());
        this.f55242i.prepare();
        if (!z12 && !z10 && (function0 = this.f55239f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f55242i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f55241h.delete();
            throw th2;
        }
        this.f55241h.delete();
    }

    public final Surface h() {
        Surface surface = this.f55240g;
        if (surface == null) {
            Surface surface2 = this.f55242i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f55243j) {
            return;
        }
        this.f55243j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f55239f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = ps.g.g(m0.a(), new b(null), continuation);
        if (g10 == xr.b.f()) {
            return g10;
        }
        return Unit.f31765a;
    }

    public final Object p(Continuation continuation) {
        return ps.g.g(m0.a(), new c(null), continuation);
    }
}
