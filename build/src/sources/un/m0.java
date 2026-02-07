package un;

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
import un.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements j0 {

        /* renamed from: a  reason: collision with root package name */
        private final Image f51800a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f51801b;

        /* renamed from: c  reason: collision with root package name */
        private final Lazy f51802c;

        /* renamed from: d  reason: collision with root package name */
        private final int f51803d;

        /* renamed from: e  reason: collision with root package name */
        private final int f51804e;

        /* renamed from: f  reason: collision with root package name */
        private final int f51805f;

        a(final Image image, final int i10) {
            this.f51800a = image;
            this.f51801b = qr.l.a(new Function0() { // from class: un.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    zj.a g10;
                    g10 = m0.a.g(image, i10);
                    return g10;
                }
            });
            this.f51802c = qr.l.a(new Function0() { // from class: un.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Bitmap c10;
                    c10 = m0.a.c(image, i10);
                    return c10;
                }
            });
            this.f51803d = image.getWidth();
            this.f51804e = image.getHeight();
            this.f51805f = i10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Bitmap c(Image image, int i10) {
            return m0.c(image, i10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final zj.a g(Image image, int i10) {
            zj.a c10 = zj.a.c(image, i10);
            Intrinsics.checkNotNullExpressionValue(c10, "fromMediaImage(...)");
            return c10;
        }

        @Override // un.j0
        public Image F() {
            return this.f51800a;
        }

        @Override // un.j0
        public int d() {
            return this.f51805f;
        }

        @Override // un.j0
        public Bitmap e() {
            return (Bitmap) this.f51802c.getValue();
        }

        @Override // un.j0
        public zj.a f() {
            return (zj.a) this.f51801b.getValue();
        }

        @Override // un.j0
        public int getHeight() {
            return this.f51804e;
        }

        @Override // un.j0
        public int getWidth() {
            return this.f51803d;
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
            bs.c.a(byteArrayOutputStream, null);
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
        h hVar = h.f51778a;
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
