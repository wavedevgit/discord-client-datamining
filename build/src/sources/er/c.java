package er;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.media.ExifInterface;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import java.io.File;
import java.io.FileOutputStream;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import or.v;
import or.w;
import zr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final String f21795a = File.separator;

    private static final String a(Context context) {
        StringBuilder sb2 = new StringBuilder();
        File cacheDir = context.getCacheDir();
        Intrinsics.checkExpressionValueIsNotNull(cacheDir, "context.cacheDir");
        sb2.append(cacheDir.getPath());
        String str = f21795a;
        sb2.append(str);
        sb2.append("compressor");
        sb2.append(str);
        return sb2.toString();
    }

    public static final int b(BitmapFactory.Options options, int i10, int i11) {
        Intrinsics.checkParameterIsNotNull(options, "options");
        Pair a10 = v.a(Integer.valueOf(options.outHeight), Integer.valueOf(options.outWidth));
        int intValue = ((Number) a10.a()).intValue();
        int intValue2 = ((Number) a10.b()).intValue();
        int i12 = 1;
        if (intValue <= i11 && intValue2 <= i10) {
            return 1;
        }
        int i13 = intValue / 2;
        int i14 = intValue2 / 2;
        while (i13 / i12 >= i11 && i14 / i12 >= i10) {
            i12 *= 2;
        }
        return i12;
    }

    public static final Bitmap.CompressFormat c(File compressFormat) {
        Intrinsics.checkParameterIsNotNull(compressFormat, "$this$compressFormat");
        String s10 = j.s(compressFormat);
        if (s10 != null) {
            String lowerCase = s10.toLowerCase();
            Intrinsics.checkExpressionValueIsNotNull(lowerCase, "(this as java.lang.String).toLowerCase()");
            int hashCode = lowerCase.hashCode();
            if (hashCode != 111145) {
                if (hashCode != 3198679) {
                    if (hashCode == 3645340 && lowerCase.equals("webp")) {
                        return Bitmap.CompressFormat.WEBP;
                    }
                } else if (lowerCase.equals("heic")) {
                    return null;
                }
            } else if (lowerCase.equals("png")) {
                return Bitmap.CompressFormat.PNG;
            }
            return Bitmap.CompressFormat.JPEG;
        }
        throw new w("null cannot be cast to non-null type java.lang.String");
    }

    public static final File d(Context context, Uri srcFileUri) {
        Intrinsics.checkParameterIsNotNull(context, "context");
        Intrinsics.checkParameterIsNotNull(srcFileUri, "srcFileUri");
        File file = new File(a(context) + h(context, srcFileUri));
        File parentFile = file.getParentFile();
        if (parentFile != null) {
            parentFile.mkdirs();
        }
        if (file.exists()) {
            file.delete();
        }
        file.createNewFile();
        file.deleteOnExit();
        ParcelFileDescriptor.AutoCloseInputStream autoCloseInputStream = new ParcelFileDescriptor.AutoCloseInputStream(context.getContentResolver().openFileDescriptor(srcFileUri, "r"));
        FileOutputStream fileOutputStream = new FileOutputStream(file);
        try {
            zr.b.b(autoCloseInputStream, fileOutputStream, 0, 2, null);
            zr.c.a(fileOutputStream, null);
            zr.c.a(autoCloseInputStream, null);
            return file;
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                zr.c.a(autoCloseInputStream, th2);
                throw th3;
            }
        }
    }

    public static final Bitmap e(File imageFile, int i10, int i11) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(imageFile.getAbsolutePath(), options);
        options.inSampleSize = b(options, i10, i11);
        options.inJustDecodeBounds = false;
        Bitmap decodeFile = BitmapFactory.decodeFile(imageFile.getAbsolutePath(), options);
        Intrinsics.checkExpressionValueIsNotNull(decodeFile, "BitmapFactory.decodeFile…eFile.absolutePath, this)");
        Intrinsics.checkExpressionValueIsNotNull(decodeFile, "BitmapFactory.Options().…absolutePath, this)\n    }");
        return decodeFile;
    }

    public static final Bitmap f(File imageFile, Bitmap bitmap) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        Intrinsics.checkParameterIsNotNull(bitmap, "bitmap");
        int attributeInt = new ExifInterface(imageFile.getAbsolutePath()).getAttributeInt("Orientation", 0);
        Matrix matrix = new Matrix();
        if (attributeInt != 3) {
            if (attributeInt != 6) {
                if (attributeInt == 8) {
                    matrix.postRotate(270.0f);
                }
            } else {
                matrix.postRotate(90.0f);
            }
        } else {
            matrix.postRotate(180.0f);
        }
        Bitmap createBitmap = Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
        Intrinsics.checkExpressionValueIsNotNull(createBitmap, "Bitmap.createBitmap(bitm…map.height, matrix, true)");
        return createBitmap;
    }

    public static final String g(Bitmap.CompressFormat extension) {
        Intrinsics.checkParameterIsNotNull(extension, "$this$extension");
        int i10 = b.f21794a[extension.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return "jpg";
            }
            return "webp";
        }
        return "png";
    }

    /* JADX WARN: Removed duplicated region for block: B:55:0x0077 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.String h(android.content.Context r8, android.net.Uri r9) {
        /*
            Method dump skipped, instructions count: 282
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: er.c.h(android.content.Context, android.net.Uri):java.lang.String");
    }

    public static final Bitmap i(File imageFile) {
        boolean z10;
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        Bitmap decodeFile = BitmapFactory.decodeFile(imageFile.getAbsolutePath());
        if (decodeFile != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            return f(imageFile, decodeFile);
        }
        throw new IllegalArgumentException(("Failed to load bitmap from " + imageFile).toString());
    }

    public static final File j(File imageFile, Bitmap bitmap, Bitmap.CompressFormat format, int i10) {
        File file;
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        Intrinsics.checkParameterIsNotNull(bitmap, "bitmap");
        Intrinsics.checkParameterIsNotNull(format, "format");
        if (format == c(imageFile)) {
            file = imageFile;
        } else {
            StringBuilder sb2 = new StringBuilder();
            String absolutePath = imageFile.getAbsolutePath();
            Intrinsics.checkExpressionValueIsNotNull(absolutePath, "imageFile.absolutePath");
            sb2.append(StringsKt.i1(absolutePath, ".", null, 2, null));
            sb2.append('.');
            sb2.append(g(format));
            file = new File(sb2.toString());
        }
        imageFile.delete();
        l(bitmap, file, format, i10);
        return file;
    }

    public static /* synthetic */ File k(File file, Bitmap bitmap, Bitmap.CompressFormat compressFormat, int i10, int i11, Object obj) {
        if ((i11 & 4) != 0 && (compressFormat = c(file)) == null) {
            compressFormat = Bitmap.CompressFormat.JPEG;
        }
        if ((i11 & 8) != 0) {
            i10 = 100;
        }
        return j(file, bitmap, compressFormat, i10);
    }

    public static final void l(Bitmap bitmap, File destination, Bitmap.CompressFormat format, int i10) {
        Intrinsics.checkParameterIsNotNull(bitmap, "bitmap");
        Intrinsics.checkParameterIsNotNull(destination, "destination");
        Intrinsics.checkParameterIsNotNull(format, "format");
        File parentFile = destination.getParentFile();
        if (parentFile != null) {
            parentFile.mkdirs();
        }
        FileOutputStream fileOutputStream = null;
        try {
            FileOutputStream fileOutputStream2 = new FileOutputStream(destination.getAbsolutePath());
            try {
                bitmap.compress(format, i10, fileOutputStream2);
                fileOutputStream2.flush();
                fileOutputStream2.close();
            } catch (Throwable th2) {
                th = th2;
                fileOutputStream = fileOutputStream2;
                if (fileOutputStream != null) {
                    fileOutputStream.flush();
                    fileOutputStream.close();
                }
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
        }
    }
}
