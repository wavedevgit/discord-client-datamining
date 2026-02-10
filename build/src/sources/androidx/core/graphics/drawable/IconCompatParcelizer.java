package androidx.core.graphics.drawable;

import android.content.res.ColorStateList;
import android.os.Parcelable;
import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class IconCompatParcelizer {
    public static IconCompat read(a aVar) {
        IconCompat iconCompat = new IconCompat();
        iconCompat.f3309a = aVar.p(iconCompat.f3309a, 1);
        iconCompat.f3311c = aVar.j(iconCompat.f3311c, 2);
        iconCompat.f3312d = aVar.r(iconCompat.f3312d, 3);
        iconCompat.f3313e = aVar.p(iconCompat.f3313e, 4);
        iconCompat.f3314f = aVar.p(iconCompat.f3314f, 5);
        iconCompat.f3315g = (ColorStateList) aVar.r(iconCompat.f3315g, 6);
        iconCompat.f3317i = aVar.t(iconCompat.f3317i, 7);
        iconCompat.f3318j = aVar.t(iconCompat.f3318j, 8);
        iconCompat.s();
        return iconCompat;
    }

    public static void write(IconCompat iconCompat, a aVar) {
        aVar.x(true, true);
        iconCompat.t(aVar.f());
        int i10 = iconCompat.f3309a;
        if (-1 != i10) {
            aVar.F(i10, 1);
        }
        byte[] bArr = iconCompat.f3311c;
        if (bArr != null) {
            aVar.B(bArr, 2);
        }
        Parcelable parcelable = iconCompat.f3312d;
        if (parcelable != null) {
            aVar.H(parcelable, 3);
        }
        int i11 = iconCompat.f3313e;
        if (i11 != 0) {
            aVar.F(i11, 4);
        }
        int i12 = iconCompat.f3314f;
        if (i12 != 0) {
            aVar.F(i12, 5);
        }
        ColorStateList colorStateList = iconCompat.f3315g;
        if (colorStateList != null) {
            aVar.H(colorStateList, 6);
        }
        String str = iconCompat.f3317i;
        if (str != null) {
            aVar.J(str, 7);
        }
        String str2 = iconCompat.f3318j;
        if (str2 != null) {
            aVar.J(str2, 8);
        }
    }
}
