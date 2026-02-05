package androidx.core.graphics.drawable;

import android.content.res.ColorStateList;
import android.os.Parcelable;
import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class IconCompatParcelizer {
    public static IconCompat read(a aVar) {
        IconCompat iconCompat = new IconCompat();
        iconCompat.f3280a = aVar.p(iconCompat.f3280a, 1);
        iconCompat.f3282c = aVar.j(iconCompat.f3282c, 2);
        iconCompat.f3283d = aVar.r(iconCompat.f3283d, 3);
        iconCompat.f3284e = aVar.p(iconCompat.f3284e, 4);
        iconCompat.f3285f = aVar.p(iconCompat.f3285f, 5);
        iconCompat.f3286g = (ColorStateList) aVar.r(iconCompat.f3286g, 6);
        iconCompat.f3288i = aVar.t(iconCompat.f3288i, 7);
        iconCompat.f3289j = aVar.t(iconCompat.f3289j, 8);
        iconCompat.s();
        return iconCompat;
    }

    public static void write(IconCompat iconCompat, a aVar) {
        aVar.x(true, true);
        iconCompat.t(aVar.f());
        int i10 = iconCompat.f3280a;
        if (-1 != i10) {
            aVar.F(i10, 1);
        }
        byte[] bArr = iconCompat.f3282c;
        if (bArr != null) {
            aVar.B(bArr, 2);
        }
        Parcelable parcelable = iconCompat.f3283d;
        if (parcelable != null) {
            aVar.H(parcelable, 3);
        }
        int i11 = iconCompat.f3284e;
        if (i11 != 0) {
            aVar.F(i11, 4);
        }
        int i12 = iconCompat.f3285f;
        if (i12 != 0) {
            aVar.F(i12, 5);
        }
        ColorStateList colorStateList = iconCompat.f3286g;
        if (colorStateList != null) {
            aVar.H(colorStateList, 6);
        }
        String str = iconCompat.f3288i;
        if (str != null) {
            aVar.J(str, 7);
        }
        String str2 = iconCompat.f3289j;
        if (str2 != null) {
            aVar.J(str2, 8);
        }
    }
}
