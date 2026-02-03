package x4;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.os.Build;
import com.reactnativecommunity.clipboard.ClipboardModule;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.Source;
import x4.k;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements k {

    /* renamed from: e  reason: collision with root package name */
    public static final a f53097e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final r f53098a;

    /* renamed from: b  reason: collision with root package name */
    private final g5.m f53099b;

    /* renamed from: c  reason: collision with root package name */
    private final ss.g f53100c;

    /* renamed from: d  reason: collision with root package name */
    private final n f53101d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends lu.k {

        /* renamed from: d  reason: collision with root package name */
        private Exception f53102d;

        public b(Source source) {
            super(source);
        }

        public final Exception a() {
            return this.f53102d;
        }

        @Override // lu.k, okio.Source
        public long read(Buffer buffer, long j10) {
            try {
                return super.read(buffer, j10);
            } catch (Exception e10) {
                this.f53102d = e10;
                throw e10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements k.a {

        /* renamed from: a  reason: collision with root package name */
        private final n f53103a;

        /* renamed from: b  reason: collision with root package name */
        private final ss.g f53104b;

        public c(int i10, n nVar) {
            this.f53103a = nVar;
            this.f53104b = ss.k.b(i10, 0, 2, null);
        }

        @Override // x4.k.a
        public k a(a5.l lVar, g5.m mVar, v4.h hVar) {
            return new f(lVar.c(), mVar, this.f53104b, this.f53103a);
        }

        public boolean equals(Object obj) {
            return obj instanceof c;
        }

        public int hashCode() {
            return c.class.hashCode();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f53105d;

        /* renamed from: e  reason: collision with root package name */
        Object f53106e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f53107i;

        /* renamed from: p  reason: collision with root package name */
        int f53109p;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f53107i = obj;
            this.f53109p |= Integer.MIN_VALUE;
            return f.this.a(this);
        }
    }

    public f(r rVar, g5.m mVar, ss.g gVar, n nVar) {
        this.f53098a = rVar;
        this.f53099b = mVar;
        this.f53100c = gVar;
        this.f53101d = nVar;
    }

    private final void c(BitmapFactory.Options options, l lVar) {
        Bitmap.Config config;
        Bitmap.Config config2;
        Bitmap.Config config3;
        Bitmap.Config f10 = this.f53099b.f();
        if (lVar.b() || p.a(lVar)) {
            f10 = k5.a.e(f10);
        }
        if (this.f53099b.d() && f10 == Bitmap.Config.ARGB_8888 && Intrinsics.areEqual(options.outMimeType, ClipboardModule.MIMETYPE_JPEG)) {
            f10 = Bitmap.Config.RGB_565;
        }
        if (Build.VERSION.SDK_INT >= 26) {
            config = options.outConfig;
            config2 = Bitmap.Config.RGBA_F16;
            if (config == config2) {
                config3 = Bitmap.Config.HARDWARE;
                if (f10 != config3) {
                    f10 = config2;
                }
            }
        }
        options.inPreferredConfig = f10;
    }

    private final void d(BitmapFactory.Options options, l lVar) {
        int i10;
        int i11;
        int A;
        int A2;
        r.a a10 = this.f53098a.a();
        boolean z10 = true;
        if ((a10 instanceof v) && h5.b.b(this.f53099b.o())) {
            options.inSampleSize = 1;
            options.inScaled = true;
            options.inDensity = ((v) a10).a();
            options.inTargetDensity = this.f53099b.g().getResources().getDisplayMetrics().densityDpi;
        } else if (options.outWidth > 0 && options.outHeight > 0) {
            if (p.b(lVar)) {
                i10 = options.outHeight;
            } else {
                i10 = options.outWidth;
            }
            if (p.b(lVar)) {
                i11 = options.outWidth;
            } else {
                i11 = options.outHeight;
            }
            h5.i o10 = this.f53099b.o();
            h5.h n10 = this.f53099b.n();
            if (h5.b.b(o10)) {
                A = i10;
            } else {
                A = k5.k.A(o10.d(), n10);
            }
            h5.i o11 = this.f53099b.o();
            h5.h n11 = this.f53099b.n();
            if (h5.b.b(o11)) {
                A2 = i11;
            } else {
                A2 = k5.k.A(o11.c(), n11);
            }
            int a11 = j.a(i10, i11, A, A2, this.f53099b.n());
            options.inSampleSize = a11;
            double b10 = j.b(i10 / a11, i11 / a11, A, A2, this.f53099b.n());
            if (this.f53099b.c()) {
                b10 = kotlin.ranges.d.g(b10, 1.0d);
            }
            if (b10 != 1.0d) {
                z10 = false;
            }
            options.inScaled = !z10;
            if (!z10) {
                if (b10 > 1.0d) {
                    options.inDensity = as.a.b(Integer.MAX_VALUE / b10);
                    options.inTargetDensity = Integer.MAX_VALUE;
                    return;
                }
                options.inDensity = Integer.MAX_VALUE;
                options.inTargetDensity = as.a.b(Integer.MAX_VALUE * b10);
            }
        } else {
            options.inSampleSize = 1;
            options.inScaled = false;
        }
    }

    private final i e(BitmapFactory.Options options) {
        b bVar = new b(this.f53098a.h());
        BufferedSource d10 = lu.x.d(bVar);
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeStream(d10.peek().n2(), null, options);
        Exception a10 = bVar.a();
        if (a10 == null) {
            options.inJustDecodeBounds = false;
            o oVar = o.f53132a;
            l a11 = oVar.a(options.outMimeType, d10, this.f53101d);
            Exception a12 = bVar.a();
            if (a12 == null) {
                options.inMutable = false;
                if (Build.VERSION.SDK_INT >= 26 && this.f53099b.e() != null) {
                    options.inPreferredColorSpace = this.f53099b.e();
                }
                options.inPremultiplied = this.f53099b.m();
                c(options, a11);
                d(options, a11);
                try {
                    Bitmap decodeStream = BitmapFactory.decodeStream(d10.n2(), null, options);
                    wr.c.a(d10, null);
                    Exception a13 = bVar.a();
                    if (a13 == null) {
                        if (decodeStream != null) {
                            decodeStream.setDensity(this.f53099b.g().getResources().getDisplayMetrics().densityDpi);
                            BitmapDrawable bitmapDrawable = new BitmapDrawable(this.f53099b.g().getResources(), oVar.b(decodeStream, a11));
                            if (options.inSampleSize <= 1 && !options.inScaled) {
                                z10 = false;
                            }
                            return new i(bitmapDrawable, z10);
                        }
                        throw new IllegalStateException("BitmapFactory returned a null bitmap. Often this means BitmapFactory could not decode the image data read from the input source (e.g. network, disk, or memory) as it's not encoded as a valid image format.");
                    }
                    throw a13;
                } finally {
                }
            } else {
                throw a12;
            }
        } else {
            throw a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final i f(f fVar) {
        return fVar.e(new BitmapFactory.Options());
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0047  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x006d  */
    @Override // x4.k
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(kotlin.coroutines.Continuation r8) {
        /*
            r7 = this;
            boolean r0 = r8 instanceof x4.f.d
            if (r0 == 0) goto L13
            r0 = r8
            x4.f$d r0 = (x4.f.d) r0
            int r1 = r0.f53109p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f53109p = r1
            goto L18
        L13:
            x4.f$d r0 = new x4.f$d
            r0.<init>(r8)
        L18:
            java.lang.Object r8 = r0.f53107i
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f53109p
            r3 = 2
            r4 = 1
            if (r2 == 0) goto L47
            if (r2 == r4) goto L3a
            if (r2 != r3) goto L32
            java.lang.Object r0 = r0.f53105d
            ss.g r0 = (ss.g) r0
            kotlin.c.b(r8)     // Catch: java.lang.Throwable -> L30
            goto L70
        L30:
            r8 = move-exception
            goto L7a
        L32:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r0)
            throw r8
        L3a:
            java.lang.Object r2 = r0.f53106e
            ss.g r2 = (ss.g) r2
            java.lang.Object r5 = r0.f53105d
            x4.f r5 = (x4.f) r5
            kotlin.c.b(r8)
            r8 = r2
            goto L5a
        L47:
            kotlin.c.b(r8)
            ss.g r8 = r7.f53100c
            r0.f53105d = r7
            r0.f53106e = r8
            r0.f53109p = r4
            java.lang.Object r2 = r8.a(r0)
            if (r2 != r1) goto L59
            goto L6c
        L59:
            r5 = r7
        L5a:
            x4.e r2 = new x4.e     // Catch: java.lang.Throwable -> L76
            r2.<init>()     // Catch: java.lang.Throwable -> L76
            r0.f53105d = r8     // Catch: java.lang.Throwable -> L76
            r5 = 0
            r0.f53106e = r5     // Catch: java.lang.Throwable -> L76
            r0.f53109p = r3     // Catch: java.lang.Throwable -> L76
            java.lang.Object r0 = js.x0.c(r5, r2, r0, r4, r5)     // Catch: java.lang.Throwable -> L76
            if (r0 != r1) goto L6d
        L6c:
            return r1
        L6d:
            r6 = r0
            r0 = r8
            r8 = r6
        L70:
            x4.i r8 = (x4.i) r8     // Catch: java.lang.Throwable -> L30
            r0.release()
            return r8
        L76:
            r0 = move-exception
            r6 = r0
            r0 = r8
            r8 = r6
        L7a:
            r0.release()
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: x4.f.a(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
