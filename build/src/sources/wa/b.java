package wa;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ColorSpace;
import android.graphics.Rect;
import android.os.Build;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.platform.PreverificationHelper;
import java.io.IOException;
import java.io.InputStream;
import o8.j;
import sa.k;
import va.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements d {

    /* renamed from: f  reason: collision with root package name */
    private static final Class f53502f = b.class;

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f53503g = {-1, -39};

    /* renamed from: a  reason: collision with root package name */
    private final va.d f53504a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53505b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f53506c;

    /* renamed from: d  reason: collision with root package name */
    private final PreverificationHelper f53507d;

    /* renamed from: e  reason: collision with root package name */
    final b2.d f53508e;

    public b(va.d dVar, b2.d dVar2, f fVar) {
        PreverificationHelper preverificationHelper;
        if (Build.VERSION.SDK_INT >= 26) {
            preverificationHelper = new PreverificationHelper();
        } else {
            preverificationHelper = null;
        }
        this.f53507d = preverificationHelper;
        this.f53504a = dVar;
        if (dVar instanceof m) {
            this.f53505b = fVar.a();
            this.f53506c = fVar.b();
        }
        this.f53508e = dVar2;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:103:0x008b A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:30:0x005e  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x0075  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x00c7 A[Catch: all -> 0x00a3, RuntimeException -> 0x00a6, IllegalArgumentException -> 0x00a8, TRY_LEAVE, TryCatch #8 {IllegalArgumentException -> 0x00a8, RuntimeException -> 0x00a6, blocks: (B:36:0x007d, B:39:0x0087, B:49:0x009f, B:68:0x00c7, B:64:0x00c0, B:65:0x00c3, B:62:0x00ba), top: B:98:0x007d, outer: #1 }] */
    /* JADX WARN: Removed duplicated region for block: B:71:0x00d2 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:79:0x00e8  */
    /* JADX WARN: Removed duplicated region for block: B:81:0x00f1  */
    /* JADX WARN: Type inference failed for: r0v1, types: [int] */
    /* JADX WARN: Type inference failed for: r0v7 */
    /* JADX WARN: Type inference failed for: r0v8 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private com.facebook.common.references.CloseableReference c(java.io.InputStream r9, android.graphics.BitmapFactory.Options r10, android.graphics.Rect r11, android.graphics.ColorSpace r12) {
        /*
            Method dump skipped, instructions count: 294
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: wa.b.c(java.io.InputStream, android.graphics.BitmapFactory$Options, android.graphics.Rect, android.graphics.ColorSpace):com.facebook.common.references.CloseableReference");
    }

    /* JADX WARN: Removed duplicated region for block: B:12:0x0028  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0042  */
    /* JADX WARN: Removed duplicated region for block: B:9:0x0022  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static android.graphics.BitmapFactory.Options e(sa.k r5, android.graphics.Bitmap.Config r6, boolean r7) {
        /*
            android.graphics.BitmapFactory$Options r0 = new android.graphics.BitmapFactory$Options
            r0.<init>()
            int r1 = r5.J()
            r0.inSampleSize = r1
            r1 = 1
            r0.inJustDecodeBounds = r1
            r0.inDither = r1
            int r2 = android.os.Build.VERSION.SDK_INT
            r3 = 26
            r4 = 0
            if (r2 < r3) goto L1f
            android.graphics.Bitmap$Config r2 = app.rive.runtime.kotlin.core.b.a()
            if (r6 != r2) goto L1f
            r2 = r1
            goto L20
        L1f:
            r2 = r4
        L20:
            if (r2 != 0) goto L24
            r0.inPreferredConfig = r6
        L24:
            r0.inMutable = r1
            if (r7 != 0) goto L40
            java.io.InputStream r5 = r5.C()
            r7 = 0
            android.graphics.BitmapFactory.decodeStream(r5, r7, r0)
            int r5 = r0.outWidth
            r7 = -1
            if (r5 == r7) goto L3a
            int r5 = r0.outHeight
            if (r5 == r7) goto L3a
            goto L40
        L3a:
            java.lang.IllegalArgumentException r5 = new java.lang.IllegalArgumentException
            r5.<init>()
            throw r5
        L40:
            if (r2 == 0) goto L44
            r0.inPreferredConfig = r6
        L44:
            r0.inJustDecodeBounds = r4
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: wa.b.e(sa.k, android.graphics.Bitmap$Config, boolean):android.graphics.BitmapFactory$Options");
    }

    @Override // wa.d
    public CloseableReference a(k kVar, Bitmap.Config config, Rect rect, ColorSpace colorSpace) {
        boolean z10;
        BitmapFactory.Options e10 = e(kVar, config, this.f53505b);
        if (e10.inPreferredConfig != Bitmap.Config.ARGB_8888) {
            z10 = true;
        } else {
            z10 = false;
        }
        try {
            return c((InputStream) j.g(kVar.C()), e10, rect, colorSpace);
        } catch (RuntimeException e11) {
            if (z10) {
                return a(kVar, Bitmap.Config.ARGB_8888, rect, colorSpace);
            }
            throw e11;
        }
    }

    @Override // wa.d
    public CloseableReference b(k kVar, Bitmap.Config config, Rect rect, int i10, ColorSpace colorSpace) {
        boolean z10;
        boolean I0 = kVar.I0(i10);
        BitmapFactory.Options e10 = e(kVar, config, this.f53505b);
        u8.b C = kVar.C();
        j.g(C);
        if (kVar.P() > i10) {
            C = new u8.a(C, i10);
        }
        if (!I0) {
            C = new u8.b(C, f53503g);
        }
        if (e10.inPreferredConfig != Bitmap.Config.ARGB_8888) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean z11 = z10;
        try {
            try {
                CloseableReference c10 = c(C, e10, rect, colorSpace);
                try {
                    C.close();
                    return c10;
                } catch (IOException e11) {
                    e11.printStackTrace();
                    return c10;
                }
            } catch (Throwable th2) {
                try {
                    C.close();
                } catch (IOException e12) {
                    e12.printStackTrace();
                }
                throw th2;
            }
        } catch (RuntimeException e13) {
            if (z11) {
                CloseableReference b10 = b(kVar, Bitmap.Config.ARGB_8888, rect, i10, colorSpace);
                try {
                    C.close();
                } catch (IOException e14) {
                    e14.printStackTrace();
                }
                return b10;
            }
            throw e13;
        }
    }

    public abstract int d(int i10, int i11, BitmapFactory.Options options);

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements s8.c {

        /* renamed from: a  reason: collision with root package name */
        private static final a f53509a = new a();

        private a() {
        }

        @Override // s8.c
        /* renamed from: b */
        public void release(Bitmap bitmap) {
        }
    }
}
