package pn;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaRecorder;
import android.os.Build;
import android.view.Surface;
import hs.m0;
import java.io.File;
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
    public static final a f46386k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f46387l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f46388a;

    /* renamed from: b  reason: collision with root package name */
    private final l f46389b;

    /* renamed from: c  reason: collision with root package name */
    private final int f46390c;

    /* renamed from: d  reason: collision with root package name */
    private final int f46391d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f46392e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f46393f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f46394g;

    /* renamed from: h  reason: collision with root package name */
    private File f46395h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f46396i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f46397j;

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
        int f46398d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f46398d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f46396i.start();
                } catch (IllegalStateException unused) {
                    r.this.f46396i.reset();
                    r.this.k(false);
                    r.this.f46396i.start();
                }
                return Unit.f33074a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46400d;

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
            pr.b.f();
            if (this.f46400d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f46396i.stop();
                    file = r.this.f46395h;
                } catch (RuntimeException unused) {
                    r.this.f46395h.delete();
                    file = null;
                }
                r.this.f46396i.release();
                r rVar = r.this;
                rVar.f46396i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f46388a = context;
        this.f46389b = cameraChoice;
        this.f46390c = i10;
        this.f46391d = i11;
        this.f46392e = z10;
        if (f46387l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f46394g = surface;
        this.f46395h = i();
        this.f46396i = j();
    }

    private final int g() {
        int width = this.f46389b.f().getWidth() * this.f46389b.f().getHeight();
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
        File cacheDir = this.f46388a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f46388a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f46395h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (kp.f.f(this.f46388a) && this.f46392e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f46396i.setVideoSource(2);
        if (z11) {
            this.f46396i.setAudioSource(1);
        }
        this.f46396i.setOutputFormat(2);
        this.f46396i.setVideoFrameRate(this.f46390c);
        this.f46396i.setVideoSize(this.f46389b.f().getWidth(), this.f46389b.f().getHeight());
        this.f46396i.setVideoEncoder(2);
        this.f46396i.setVideoEncodingBitRate(g());
        if (z11) {
            nn.c a10 = nn.d.a();
            if (a10 != null) {
                this.f46396i.setAudioSamplingRate(a10.a());
                this.f46396i.setAudioChannels(1);
            }
            this.f46396i.setAudioEncoder(3);
        }
        this.f46396i.setOrientationHint(this.f46391d);
        boolean z12 = f46387l;
        if (z12) {
            this.f46396i.setInputSurface(h());
        }
        this.f46396i.setOutputFile(this.f46395h.getAbsolutePath());
        this.f46396i.prepare();
        if (!z12 && !z10 && (function0 = this.f46393f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f46396i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f46395h.delete();
            throw th2;
        }
        this.f46395h.delete();
    }

    public final Surface h() {
        Surface surface = this.f46394g;
        if (surface == null) {
            Surface surface2 = this.f46396i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f46397j) {
            return;
        }
        this.f46397j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f46393f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = hs.g.g(m0.a(), new b(null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    public final Object p(Continuation continuation) {
        return hs.g.g(m0.a(), new c(null), continuation);
    }
}
