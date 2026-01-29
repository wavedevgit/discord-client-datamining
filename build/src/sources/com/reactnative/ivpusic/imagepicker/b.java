package com.reactnative.ivpusic.imagepicker;

import android.media.ExifInterface;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class b {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static WritableMap a(String str) {
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        List<String> b10 = b();
        b10.addAll(c());
        ExifInterface exifInterface = new ExifInterface(str);
        try {
            wl.a aVar = new wl.a(exifInterface);
            if (aVar.b() != null && aVar.c() != null) {
                writableNativeMap.putDouble("Latitude", aVar.b().floatValue());
                writableNativeMap.putDouble("Longitude", aVar.c().floatValue());
            }
        } catch (Exception e10) {
            e10.printStackTrace();
        }
        for (String str2 : b10) {
            writableNativeMap.putString(str2, exifInterface.getAttribute(str2));
        }
        return writableNativeMap;
    }

    private static List b() {
        return new ArrayList(Arrays.asList("FNumber", "DateTime", "ExposureTime", "Flash", "FocalLength", "GPSAltitude", "GPSAltitudeRef", "GPSDateStamp", "GPSLatitude", "GPSLatitudeRef", "GPSLongitude", "GPSLongitudeRef", "GPSProcessingMethod", "GPSTimeStamp", "ImageLength", "ImageWidth", "ISOSpeedRatings", "Make", "Model", "Orientation", "WhiteBalance"));
    }

    private static List c() {
        return new ArrayList(Arrays.asList("DateTimeDigitized", "SubSecTime", "SubSecTimeDigitized", "SubSecTimeOriginal"));
    }
}
