package com.reactnative.ivpusic.imagepicker;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.ExifInterface;
import android.os.Environment;
import android.util.Log;
import android.util.Pair;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;
import com.reactnativecommunity.clipboard.ClipboardModule;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class a {
    private int a(int i10, int i11, int i12, int i13) {
        int i14 = 1;
        if (i10 <= i12 && i11 <= i13) {
            return 1;
        }
        int i15 = i10 / 2;
        int i16 = i11 / 2;
        while (i15 / i14 >= i12 && i16 / i14 >= i13) {
            i14 *= 2;
        }
        return i14;
    }

    private Pair b(int i10, int i11, int i12, int i13) {
        if (i10 > i12) {
            i11 = (int) (i11 * (i12 / i10));
            i10 = i12;
        }
        if (i11 > i13) {
            i10 = (int) (i10 * (i13 / i11));
        } else {
            i13 = i11;
        }
        return Pair.create(Integer.valueOf(i10), Integer.valueOf(i13));
    }

    private boolean f(String str) {
        if (!str.equals(String.valueOf(1)) && !str.equals(String.valueOf(0))) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public File c(Context context, ReadableMap readableMap, String str, BitmapFactory.Options options) {
        Integer num;
        Integer num2;
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        Double d10 = null;
        if (readableMap.hasKey("compressImageMaxWidth")) {
            num = Integer.valueOf(readableMap.getInt("compressImageMaxWidth"));
        } else {
            num = null;
        }
        if (readableMap.hasKey("compressImageMaxHeight")) {
            num2 = Integer.valueOf(readableMap.getInt("compressImageMaxHeight"));
        } else {
            num2 = null;
        }
        if (readableMap.hasKey("compressImageQuality")) {
            d10 = Double.valueOf(readableMap.getDouble("compressImageQuality"));
        }
        boolean z13 = true;
        if (d10 != null && d10.doubleValue() != 1.0d) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (num != null && num.intValue() < options.outWidth) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (num2 != null && num2.intValue() < options.outHeight) {
            z12 = false;
        } else {
            z12 = true;
        }
        List asList = Arrays.asList(ClipboardModule.MIMETYPE_JPEG, ClipboardModule.MIMETYPE_JPG, ClipboardModule.MIMETYPE_PNG, "image/gif", "image/tiff");
        String str2 = options.outMimeType;
        if (str2 == null || !asList.contains(str2.toLowerCase())) {
            z13 = false;
        }
        if (z10 && z11 && z12 && z13) {
            Log.d("image-crop-picker", "Skipping image compression");
            return new File(str);
        }
        Log.d("image-crop-picker", "Image compression activated");
        if (d10 != null) {
            i10 = (int) (d10.doubleValue() * 100.0d);
        } else {
            i10 = 100;
        }
        int i11 = i10;
        Log.d("image-crop-picker", "Compressing image with quality " + i11);
        if (num == null) {
            num = Integer.valueOf(options.outWidth);
        }
        if (num2 == null) {
            num2 = Integer.valueOf(options.outHeight);
        }
        return e(context, str, options.outWidth, options.outHeight, num.intValue(), num2.intValue(), i11, options.outMimeType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void d(Activity activity, ReadableMap readableMap, String str, String str2, Promise promise) {
        promise.resolve(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public File e(Context context, String str, int i10, int i11, int i12, int i13, int i14, String str2) {
        Bitmap decodeFile;
        String str3;
        Pair b10 = b(i10, i11, i12, i13);
        int intValue = ((Integer) b10.first).intValue();
        int intValue2 = ((Integer) b10.second).intValue();
        if (i10 <= i12 && i11 <= i13) {
            decodeFile = BitmapFactory.decodeFile(str);
        } else {
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inSampleSize = a(i10, i11, intValue, intValue2);
            decodeFile = BitmapFactory.decodeFile(str, options);
        }
        String attribute = new ExifInterface(str).getAttribute("Orientation");
        Bitmap createScaledBitmap = Bitmap.createScaledBitmap(decodeFile, intValue, intValue2, true);
        File externalFilesDir = context.getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        if (!externalFilesDir.exists()) {
            Log.d("image-crop-picker", "Pictures Directory is not existing. Will create this directory.");
            externalFilesDir.mkdirs();
        }
        if (xl.b.a(str2) == Bitmap.CompressFormat.PNG) {
            str3 = ".png";
        } else {
            str3 = ".jpg";
        }
        File file = new File(externalFilesDir, UUID.randomUUID() + str3);
        BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(new FileOutputStream(file));
        createScaledBitmap.compress(xl.b.a(str2), i14, bufferedOutputStream);
        if (f(attribute)) {
            ExifInterface exifInterface = new ExifInterface(file.getAbsolutePath());
            exifInterface.setAttribute("Orientation", attribute);
            exifInterface.saveAttributes();
        }
        bufferedOutputStream.close();
        createScaledBitmap.recycle();
        return file;
    }
}
