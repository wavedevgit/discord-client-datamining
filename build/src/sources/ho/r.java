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
    public static final a f28189k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f28190l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f28191a;

    /* renamed from: b  reason: collision with root package name */
    private final l f28192b;

    /* renamed from: c  reason: collision with root package name */
    private final int f28193c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28194d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f28195e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f28196f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f28197g;

    /* renamed from: h  reason: collision with root package name */
    private File f28198h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f28199i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f28200j;

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
        int f28201d;

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
            if (this.f28201d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f28199i.start();
                } catch (IllegalStateException unused) {
                    r.this.f28199i.reset();
                    r.this.k(false);
                    r.this.f28199i.start();
                }
                return Unit.f32556a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28203d;

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
            if (this.f28203d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f28199i.stop();
                    file = r.this.f28198h;
                } catch (RuntimeException unused) {
                    r.this.f28198h.delete();
                    file = null;
                }
                r.this.f28199i.release();
                r rVar = r.this;
                rVar.f28199i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f28191a = context;
        this.f28192b = cameraChoice;
        this.f28193c = i10;
        this.f28194d = i11;
        this.f28195e = z10;
        if (f28190l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f28197g = surface;
        this.f28198h = i();
        this.f28199i = j();
    }

    private final int g() {
        int width = this.f28192b.f().getWidth() * this.f28192b.f().getHeight();
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
        File cacheDir = this.f28191a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f28191a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f28198h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (bq.f.f(this.f28191a) && this.f28195e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f28199i.setVideoSource(2);
        if (z11) {
            this.f28199i.setAudioSource(1);
        }
        this.f28199i.setOutputFormat(2);
        this.f28199i.setVideoFrameRate(this.f28193c);
        this.f28199i.setVideoSize(this.f28192b.f().getWidth(), this.f28192b.f().getHeight());
        this.f28199i.setVideoEncoder(2);
        this.f28199i.setVideoEncodingBitRate(g());
        if (z11) {
            fo.c a10 = fo.d.a();
            if (a10 != null) {
                this.f28199i.setAudioSamplingRate(a10.a());
                this.f28199i.setAudioChannels(1);
            }
            this.f28199i.setAudioEncoder(3);
        }
        this.f28199i.setOrientationHint(this.f28194d);
        boolean z12 = f28190l;
        if (z12) {
            this.f28199i.setInputSurface(h());
        }
        this.f28199i.setOutputFile(this.f28198h.getAbsolutePath());
        this.f28199i.prepare();
        if (!z12 && !z10 && (function0 = this.f28196f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f28199i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f28198h.delete();
            throw th2;
        }
        this.f28198h.delete();
    }

    public final Surface h() {
        Surface surface = this.f28197g;
        if (surface == null) {
            Surface surface2 = this.f28199i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f28200j) {
            return;
        }
        this.f28200j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f28196f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = ys.g.g(m0.a(), new b(null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f32556a;
    }

    public final Object p(Continuation continuation) {
        return ys.g.g(m0.a(), new c(null), continuation);
    }
}
