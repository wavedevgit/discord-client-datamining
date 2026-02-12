package fo;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.media.Image;
import fo.m0;
import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements j0 {

        /* renamed from: a  reason: collision with root package name */
        private final Image f24056a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f24057b;

        /* renamed from: c  reason: collision with root package name */
        private final Lazy f24058c;

        /* renamed from: d  reason: collision with root package name */
        private final int f24059d;

        /* renamed from: e  reason: collision with root package name */
        private final int f24060e;

        /* renamed from: f  reason: collision with root package name */
        private final int f24061f;

        a(final Image image, final int i10) {
            this.f24056a = image;
            this.f24057b = as.l.b(new Function0() { // from class: fo.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    ck.a g10;
                    g10 = m0.a.g(image, i10);
                    return g10;
                }
            });
            this.f24058c = as.l.b(new Function0() { // from class: fo.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Bitmap c10;
                    c10 = m0.a.c(image, i10);
                    return c10;
                }
            });
            this.f24059d = image.getWidth();
            this.f24060e = image.getHeight();
            this.f24061f = i10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Bitmap c(Image image, int i10) {
            return m0.c(image, i10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final ck.a g(Image image, int i10) {
            ck.a c10 = ck.a.c(image, i10);
            Intrinsics.checkNotNullExpressionValue(c10, "fromMediaImage(...)");
            return c10;
        }

        @Override // fo.j0
        public Image F() {
            return this.f24056a;
        }

        @Override // fo.j0
        public int d() {
            return this.f24061f;
        }

        @Override // fo.j0
        public Bitmap e() {
            return (Bitmap) this.f24058c.getValue();
        }

        @Override // fo.j0
        public ck.a f() {
            return (ck.a) this.f24057b.getValue();
        }

        @Override // fo.j0
        public int getHeight() {
            return this.f24060e;
        }

        @Override // fo.j0
        public int getWidth() {
            return this.f24059d;
        }
    }

    private static final Bitmap a(ByteBuffer byteBuffer, e0 e0Var) {
        byteBuffer.rewind();
        int limit = byteBuffer.limit();
        byte[] bArr = new byte[limit];
        byteBuffer.get(bArr, 0, limit);
        try {
            YuvImage yuvImage = new YuvImage(bArr, 17, e0Var.c(), e0Var.a(), null);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            yuvImage.compressToJpeg(new Rect(0, 0, e0Var.c(), e0Var.a()), 80, byteArrayOutputStream);
            Bitmap decodeByteArray = BitmapFactory.decodeByteArray(byteArrayOutputStream.toByteArray(), 0, byteArrayOutputStream.size());
            ls.c.a(byteArrayOutputStream, null);
            Intrinsics.checkNotNull(decodeByteArray);
            return b(decodeByteArray, e0Var.b());
        } catch (Exception unused) {
            return null;
        }
    }

    private static final Bitmap b(Bitmap bitmap, int i10) {
        Matrix matrix = new Matrix();
        matrix.postRotate(i10);
        Bitmap createBitmap = Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        if (!Intrinsics.areEqual(createBitmap, bitmap)) {
            bitmap.recycle();
        }
        return createBitmap;
    }

    public static final Bitmap c(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "<this>");
        e0 e0Var = new e0(image.getWidth(), image.getHeight(), i10);
        h hVar = h.f24034a;
        Image.Plane[] planes = image.getPlanes();
        if (planes == null) {
            return null;
        }
        return a(hVar.c(planes, image.getWidth(), image.getHeight()), e0Var);
    }

    public static final j0 d(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "<this>");
        return new a(image, i10);
    }

    public static final j0 e(androidx.camera.core.n nVar) {
        Intrinsics.checkNotNullParameter(nVar, "<this>");
        try {
            Image F = nVar.F();
            if (F == null) {
                return null;
            }
            return d(F, nVar.E().d());
        } catch (IllegalStateException | NullPointerException unused) {
            return null;
        }
    }
}
