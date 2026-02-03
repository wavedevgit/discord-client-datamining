package sp;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {
    private final int b(BitmapFactory.Options options, int i10, int i11) {
        int i12 = options.outHeight;
        int i13 = options.outWidth;
        if (i12 <= i11 && i13 <= i10) {
            return 1;
        }
        return Math.min(as.a.c(i12 / i11), as.a.c(i13 / i10));
    }

    private final Map c(File file) {
        try {
            List o10 = CollectionsKt.o("DateTime", "DateTimeDigitized", "ExposureTime", "Flash", "FocalLength", "GPSAltitude", "GPSAltitudeRef", "GPSDateStamp", "GPSLatitude", "GPSLatitudeRef", "GPSLongitude", "GPSLongitudeRef", "GPSProcessingMethod", "GPSTimeStamp", "Make", "Model", "Orientation", "SubSecTime", "WhiteBalance");
            FileInputStream fileInputStream = new FileInputStream(file);
            e3.a aVar = new e3.a(fileInputStream);
            List list = o10;
            LinkedHashMap linkedHashMap = new LinkedHashMap(d.d(o0.e(CollectionsKt.w(list, 10)), 16));
            for (Object obj : list) {
                linkedHashMap.put(obj, aVar.k((String) obj));
            }
            wr.c.a(fileInputStream, null);
            return linkedHashMap;
        } catch (IOException unused) {
            return o0.i();
        }
    }

    private final void d(File file, Map map) {
        try {
            e3.a aVar = new e3.a(file.getAbsolutePath());
            for (Map.Entry entry : map.entrySet()) {
                String str = (String) entry.getKey();
                String str2 = (String) entry.getValue();
                if (str2 != null) {
                    aVar.h0(str, str2);
                }
            }
            aVar.c0();
        } catch (IOException unused) {
        }
    }

    @Override // sp.a
    public void a(File file) {
        Intrinsics.checkNotNullParameter(file, "file");
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(file.getAbsolutePath(), options);
        Map c10 = c(file);
        try {
            String absolutePath = file.getAbsolutePath();
            BitmapFactory.Options options2 = new BitmapFactory.Options();
            options2.inSampleSize = b(options, 2000, 2000);
            Bitmap decodeFile = BitmapFactory.decodeFile(absolutePath, options2);
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            if (decodeFile != null) {
                decodeFile.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            }
            wr.c.a(fileOutputStream, null);
            if (decodeFile != null) {
                decodeFile.recycle();
            }
        } catch (IllegalArgumentException unused) {
        }
        d(file, c10);
    }
}
