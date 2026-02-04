package za;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ColorSpace;
import android.graphics.Matrix;
import android.os.Build;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import java.io.OutputStream;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f55700d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f55701a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55702b;

    /* renamed from: c  reason: collision with root package name */
    private final String f55703c = "SimpleImageTranscoder";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Bitmap.CompressFormat b(fa.c cVar) {
            if (cVar == null) {
                return Bitmap.CompressFormat.JPEG;
            }
            if (cVar == fa.b.f23671b) {
                return Bitmap.CompressFormat.JPEG;
            }
            if (cVar == fa.b.f23672c) {
                return Bitmap.CompressFormat.PNG;
            }
            if (fa.b.a(cVar)) {
                return Bitmap.CompressFormat.WEBP;
            }
            return Bitmap.CompressFormat.JPEG;
        }

        private a() {
        }
    }

    public g(boolean z10, int i10) {
        this.f55701a = z10;
        this.f55702b = i10;
    }

    private final int e(k kVar, RotationOptions rotationOptions, ResizeOptions resizeOptions) {
        if (!this.f55701a) {
            return 1;
        }
        return za.a.b(rotationOptions, resizeOptions, kVar, this.f55702b);
    }

    @Override // za.c
    public String a() {
        return this.f55703c;
    }

    @Override // za.c
    public boolean b(k encodedImage, RotationOptions rotationOptions, ResizeOptions resizeOptions) {
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        if (rotationOptions == null) {
            rotationOptions = RotationOptions.f10066c.a();
        }
        if (this.f55701a && za.a.b(rotationOptions, resizeOptions, encodedImage, this.f55702b) > 1) {
            return true;
        }
        return false;
    }

    @Override // za.c
    public b c(k encodedImage, OutputStream outputStream, RotationOptions rotationOptions, ResizeOptions resizeOptions, fa.c cVar, Integer num, ColorSpace colorSpace) {
        Integer num2;
        RotationOptions rotationOptions2;
        Bitmap bitmap;
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        Intrinsics.checkNotNullParameter(outputStream, "outputStream");
        if (num == null) {
            num2 = 85;
        } else {
            num2 = num;
        }
        if (rotationOptions == null) {
            rotationOptions2 = RotationOptions.f10066c.a();
        } else {
            rotationOptions2 = rotationOptions;
        }
        int e10 = e(encodedImage, rotationOptions2, resizeOptions);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inSampleSize = e10;
        if (colorSpace != null && Build.VERSION.SDK_INT >= 26) {
            options.inPreferredColorSpace = colorSpace;
        }
        try {
            Bitmap decodeStream = BitmapFactory.decodeStream(encodedImage.N(), null, options);
            if (decodeStream == null) {
                p8.a.m("SimpleImageTranscoder", "Couldn't decode the EncodedImage InputStream ! ");
                return new b(2);
            }
            Matrix g10 = e.g(encodedImage, rotationOptions2);
            if (g10 != null) {
                try {
                    bitmap = Bitmap.createBitmap(decodeStream, 0, 0, decodeStream.getWidth(), decodeStream.getHeight(), g10, false);
                } catch (OutOfMemoryError e11) {
                    e = e11;
                    bitmap = decodeStream;
                    p8.a.n("SimpleImageTranscoder", "Out-Of-Memory during transcode", e);
                    b bVar = new b(2);
                    bitmap.recycle();
                    decodeStream.recycle();
                    return bVar;
                } catch (Throwable th2) {
                    th = th2;
                    bitmap = decodeStream;
                    bitmap.recycle();
                    decodeStream.recycle();
                    throw th;
                }
            } else {
                bitmap = decodeStream;
            }
            try {
                try {
                    bitmap.compress(f55700d.b(cVar), num2.intValue(), outputStream);
                    int i10 = 1;
                    if (e10 > 1) {
                        i10 = 0;
                    }
                    b bVar2 = new b(i10);
                    bitmap.recycle();
                    decodeStream.recycle();
                    return bVar2;
                } catch (OutOfMemoryError e12) {
                    e = e12;
                    p8.a.n("SimpleImageTranscoder", "Out-Of-Memory during transcode", e);
                    b bVar3 = new b(2);
                    bitmap.recycle();
                    decodeStream.recycle();
                    return bVar3;
                }
            } catch (Throwable th3) {
                th = th3;
                bitmap.recycle();
                decodeStream.recycle();
                throw th;
            }
        } catch (OutOfMemoryError e13) {
            p8.a.n("SimpleImageTranscoder", "Out-Of-Memory during transcode", e13);
            return new b(2);
        }
    }

    @Override // za.c
    public boolean d(fa.c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != fa.b.f23681l && imageFormat != fa.b.f23671b) {
            return false;
        }
        return true;
    }
}
