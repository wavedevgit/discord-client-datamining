package androidx.core.graphics.drawable;

import android.content.res.ColorStateList;
import android.os.Parcelable;
import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class IconCompatParcelizer {
    public static IconCompat read(a aVar) {
        IconCompat iconCompat = new IconCompat();
        iconCompat.f3609a = aVar.p(iconCompat.f3609a, 1);
        iconCompat.f3611c = aVar.j(iconCompat.f3611c, 2);
        iconCompat.f3612d = aVar.r(iconCompat.f3612d, 3);
        iconCompat.f3613e = aVar.p(iconCompat.f3613e, 4);
        iconCompat.f3614f = aVar.p(iconCompat.f3614f, 5);
        iconCompat.f3615g = (ColorStateList) aVar.r(iconCompat.f3615g, 6);
        iconCompat.f3617i = aVar.t(iconCompat.f3617i, 7);
        iconCompat.f3618j = aVar.t(iconCompat.f3618j, 8);
        iconCompat.s();
        return iconCompat;
    }

    public static void write(IconCompat iconCompat, a aVar) {
        aVar.x(true, true);
        iconCompat.t(aVar.f());
        int i10 = iconCompat.f3609a;
        if (-1 != i10) {
            aVar.F(i10, 1);
        }
        byte[] bArr = iconCompat.f3611c;
        if (bArr != null) {
            aVar.B(bArr, 2);
        }
        Parcelable parcelable = iconCompat.f3612d;
        if (parcelable != null) {
            aVar.H(parcelable, 3);
        }
        int i11 = iconCompat.f3613e;
        if (i11 != 0) {
            aVar.F(i11, 4);
        }
        int i12 = iconCompat.f3614f;
        if (i12 != 0) {
            aVar.F(i12, 5);
        }
        ColorStateList colorStateList = iconCompat.f3615g;
        if (colorStateList != null) {
            aVar.H(colorStateList, 6);
        }
        String str = iconCompat.f3617i;
        if (str != null) {
            aVar.J(str, 7);
        }
        String str2 = iconCompat.f3618j;
        if (str2 != null) {
            aVar.J(str2, 8);
        }
    }
}
