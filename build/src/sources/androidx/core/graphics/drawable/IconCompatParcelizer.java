package androidx.core.graphics.drawable;

import android.content.res.ColorStateList;
import android.os.Parcelable;
import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class IconCompatParcelizer {
    public static IconCompat read(a aVar) {
        IconCompat iconCompat = new IconCompat();
        iconCompat.f3306a = aVar.p(iconCompat.f3306a, 1);
        iconCompat.f3308c = aVar.j(iconCompat.f3308c, 2);
        iconCompat.f3309d = aVar.r(iconCompat.f3309d, 3);
        iconCompat.f3310e = aVar.p(iconCompat.f3310e, 4);
        iconCompat.f3311f = aVar.p(iconCompat.f3311f, 5);
        iconCompat.f3312g = (ColorStateList) aVar.r(iconCompat.f3312g, 6);
        iconCompat.f3314i = aVar.t(iconCompat.f3314i, 7);
        iconCompat.f3315j = aVar.t(iconCompat.f3315j, 8);
        iconCompat.s();
        return iconCompat;
    }

    public static void write(IconCompat iconCompat, a aVar) {
        aVar.x(true, true);
        iconCompat.t(aVar.f());
        int i10 = iconCompat.f3306a;
        if (-1 != i10) {
            aVar.F(i10, 1);
        }
        byte[] bArr = iconCompat.f3308c;
        if (bArr != null) {
            aVar.B(bArr, 2);
        }
        Parcelable parcelable = iconCompat.f3309d;
        if (parcelable != null) {
            aVar.H(parcelable, 3);
        }
        int i11 = iconCompat.f3310e;
        if (i11 != 0) {
            aVar.F(i11, 4);
        }
        int i12 = iconCompat.f3311f;
        if (i12 != 0) {
            aVar.F(i12, 5);
        }
        ColorStateList colorStateList = iconCompat.f3312g;
        if (colorStateList != null) {
            aVar.H(colorStateList, 6);
        }
        String str = iconCompat.f3314i;
        if (str != null) {
            aVar.J(str, 7);
        }
        String str2 = iconCompat.f3315j;
        if (str2 != null) {
            aVar.J(str2, 8);
        }
    }
}
