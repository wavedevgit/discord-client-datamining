package wl;

import android.media.ExifInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    Float f52695a;

    /* renamed from: b  reason: collision with root package name */
    Float f52696b;

    public a(ExifInterface exifInterface) {
        String attribute = exifInterface.getAttribute("GPSLatitude");
        String attribute2 = exifInterface.getAttribute("GPSLatitudeRef");
        String attribute3 = exifInterface.getAttribute("GPSLongitude");
        String attribute4 = exifInterface.getAttribute("GPSLongitudeRef");
        if (attribute != null && attribute2 != null && attribute3 != null && attribute4 != null) {
            if (attribute2.equals("N")) {
                this.f52695a = a(attribute);
            } else {
                this.f52695a = Float.valueOf(0.0f - a(attribute).floatValue());
            }
            if (attribute4.equals("E")) {
                this.f52696b = a(attribute3);
            } else {
                this.f52696b = Float.valueOf(0.0f - a(attribute3).floatValue());
            }
        }
    }

    private Float a(String str) {
        String[] split = str.split(",", 3);
        String[] split2 = split[0].split("/", 2);
        Double valueOf = Double.valueOf(split2[0]);
        Double valueOf2 = Double.valueOf(split2[1]);
        String[] split3 = split[1].split("/", 2);
        Double valueOf3 = Double.valueOf(split3[0]);
        Double valueOf4 = Double.valueOf(split3[1]);
        String[] split4 = split[2].split("/", 2);
        return Float.valueOf((float) ((valueOf.doubleValue() / valueOf2.doubleValue()) + ((valueOf3.doubleValue() / valueOf4.doubleValue()) / 60.0d) + ((Double.valueOf(split4[0]).doubleValue() / Double.valueOf(split4[1]).doubleValue()) / 3600.0d)));
    }

    public Float b() {
        return this.f52695a;
    }

    public Float c() {
        return this.f52696b;
    }
}
