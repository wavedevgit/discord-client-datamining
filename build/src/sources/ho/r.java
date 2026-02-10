package ho;

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
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: k  reason: collision with root package name */
    public static final a f27620k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f27621l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f27622a;

    /* renamed from: b  reason: collision with root package name */
    private final l f27623b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27624c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27625d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f27626e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f27627f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f27628g;

    /* renamed from: h  reason: collision with root package name */
    private File f27629h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f27630i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f27631j;

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
        int f27632d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f27632d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f27630i.start();
                } catch (IllegalStateException unused) {
                    r.this.f27630i.reset();
                    r.this.k(false);
                    r.this.f27630i.start();
                }
                return Unit.f31987a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27634d;

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
            gs.b.f();
            if (this.f27634d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f27630i.stop();
                    file = r.this.f27629h;
                } catch (RuntimeException unused) {
                    r.this.f27629h.delete();
                    file = null;
                }
                r.this.f27630i.release();
                r rVar = r.this;
                rVar.f27630i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f27622a = context;
        this.f27623b = cameraChoice;
        this.f27624c = i10;
        this.f27625d = i11;
        this.f27626e = z10;
        if (f27621l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f27628g = surface;
        this.f27629h = i();
        this.f27630i = j();
    }

    private final int g() {
        int width = this.f27623b.f().getWidth() * this.f27623b.f().getHeight();
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
        File cacheDir = this.f27622a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f27622a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f27629h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (bq.f.f(this.f27622a) && this.f27626e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f27630i.setVideoSource(2);
        if (z11) {
            this.f27630i.setAudioSource(1);
        }
        this.f27630i.setOutputFormat(2);
        this.f27630i.setVideoFrameRate(this.f27624c);
        this.f27630i.setVideoSize(this.f27623b.f().getWidth(), this.f27623b.f().getHeight());
        this.f27630i.setVideoEncoder(2);
        this.f27630i.setVideoEncodingBitRate(g());
        if (z11) {
            fo.c a10 = fo.d.a();
            if (a10 != null) {
                this.f27630i.setAudioSamplingRate(a10.a());
                this.f27630i.setAudioChannels(1);
            }
            this.f27630i.setAudioEncoder(3);
        }
        this.f27630i.setOrientationHint(this.f27625d);
        boolean z12 = f27621l;
        if (z12) {
            this.f27630i.setInputSurface(h());
        }
        this.f27630i.setOutputFile(this.f27629h.getAbsolutePath());
        this.f27630i.prepare();
        if (!z12 && !z10 && (function0 = this.f27627f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f27630i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f27629h.delete();
            throw th2;
        }
        this.f27629h.delete();
    }

    public final Surface h() {
        Surface surface = this.f27628g;
        if (surface == null) {
            Surface surface2 = this.f27630i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f27631j) {
            return;
        }
        this.f27631j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f27627f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = ys.g.g(m0.a(), new b(null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f31987a;
    }

    public final Object p(Continuation continuation) {
        return ys.g.g(m0.a(), new c(null), continuation);
    }
}
