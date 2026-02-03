package nn;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.media.Image;
import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import nn.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements j0 {

        /* renamed from: a  reason: collision with root package name */
        private final Image f41998a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f41999b;

        /* renamed from: c  reason: collision with root package name */
        private final Lazy f42000c;

        /* renamed from: d  reason: collision with root package name */
        private final int f42001d;

        /* renamed from: e  reason: collision with root package name */
        private final int f42002e;

        /* renamed from: f  reason: collision with root package name */
        private final int f42003f;

        a(final Image image, final int i10) {
            this.f41998a = image;
            this.f41999b = jr.l.b(new Function0() { // from class: nn.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    vj.a g10;
                    g10 = m0.a.g(image, i10);
                    return g10;
                }
            });
            this.f42000c = jr.l.b(new Function0() { // from class: nn.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Bitmap c10;
                    c10 = m0.a.c(image, i10);
                    return c10;
                }
            });
            this.f42001d = image.getWidth();
            this.f42002e = image.getHeight();
            this.f42003f = i10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Bitmap c(Image image, int i10) {
            return m0.c(image, i10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final vj.a g(Image image, int i10) {
            vj.a c10 = vj.a.c(image, i10);
            Intrinsics.checkNotNullExpressionValue(c10, "fromMediaImage(...)");
            return c10;
        }

        @Override // nn.j0
        public Image A() {
            return this.f41998a;
        }

        @Override // nn.j0
        public int d() {
            return this.f42003f;
        }

        @Override // nn.j0
        public Bitmap e() {
            return (Bitmap) this.f42000c.getValue();
        }

        @Override // nn.j0
        public vj.a f() {
            return (vj.a) this.f41999b.getValue();
        }

        @Override // nn.j0
        public int getHeight() {
            return this.f42002e;
        }

        @Override // nn.j0
        public int getWidth() {
            return this.f42001d;
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
            ur.c.a(byteArrayOutputStream, null);
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
        h hVar = h.f41976a;
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
            Image A = nVar.A();
            if (A == null) {
                return null;
            }
            return d(A, nVar.z().d());
        } catch (IllegalStateException | NullPointerException unused) {
            return null;
        }
    }
}
