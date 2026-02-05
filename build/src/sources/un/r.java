package un;

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
import ms.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: k  reason: collision with root package name */
    public static final a f51621k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f51622l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f51623a;

    /* renamed from: b  reason: collision with root package name */
    private final l f51624b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51625c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51626d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51627e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f51628f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f51629g;

    /* renamed from: h  reason: collision with root package name */
    private File f51630h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f51631i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f51632j;

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
        int f51633d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f51633d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f51631i.start();
                } catch (IllegalStateException unused) {
                    r.this.f51631i.reset();
                    r.this.k(false);
                    r.this.f51631i.start();
                }
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51635d;

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
            ur.b.f();
            if (this.f51635d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f51631i.stop();
                    file = r.this.f51630h;
                } catch (RuntimeException unused) {
                    r.this.f51630h.delete();
                    file = null;
                }
                r.this.f51631i.release();
                r rVar = r.this;
                rVar.f51631i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f51623a = context;
        this.f51624b = cameraChoice;
        this.f51625c = i10;
        this.f51626d = i11;
        this.f51627e = z10;
        if (f51622l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f51629g = surface;
        this.f51630h = i();
        this.f51631i = j();
    }

    private final int g() {
        int width = this.f51624b.f().getWidth() * this.f51624b.f().getHeight();
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
        File cacheDir = this.f51623a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f51623a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f51630h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (pp.f.f(this.f51623a) && this.f51627e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f51631i.setVideoSource(2);
        if (z11) {
            this.f51631i.setAudioSource(1);
        }
        this.f51631i.setOutputFormat(2);
        this.f51631i.setVideoFrameRate(this.f51625c);
        this.f51631i.setVideoSize(this.f51624b.f().getWidth(), this.f51624b.f().getHeight());
        this.f51631i.setVideoEncoder(2);
        this.f51631i.setVideoEncodingBitRate(g());
        if (z11) {
            sn.c a10 = sn.d.a();
            if (a10 != null) {
                this.f51631i.setAudioSamplingRate(a10.a());
                this.f51631i.setAudioChannels(1);
            }
            this.f51631i.setAudioEncoder(3);
        }
        this.f51631i.setOrientationHint(this.f51626d);
        boolean z12 = f51622l;
        if (z12) {
            this.f51631i.setInputSurface(h());
        }
        this.f51631i.setOutputFile(this.f51630h.getAbsolutePath());
        this.f51631i.prepare();
        if (!z12 && !z10 && (function0 = this.f51628f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f51631i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f51630h.delete();
            throw th2;
        }
        this.f51630h.delete();
    }

    public final Surface h() {
        Surface surface = this.f51629g;
        if (surface == null) {
            Surface surface2 = this.f51631i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f51632j) {
            return;
        }
        this.f51632j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f51628f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = ms.g.g(m0.a(), new b(null), continuation);
        if (g10 == ur.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    public final Object p(Continuation continuation) {
        return ms.g.g(m0.a(), new c(null), continuation);
    }
}
