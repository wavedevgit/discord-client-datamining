package og;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wi implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        double d10 = 0.0d;
        int i10 = 0;
        int i11 = 0;
        boolean z10 = false;
        String str = null;
        String str2 = null;
        Point[] pointArr = null;
        ra raVar = null;
        ud udVar = null;
        ve veVar = null;
        yg ygVar = null;
        xf xfVar = null;
        sb sbVar = null;
        o7 o7Var = null;
        p8 p8Var = null;
        q9 q9Var = null;
        byte[] bArr = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 2:
                    i10 = jf.b.t(parcel, r10);
                    break;
                case 3:
                    str = jf.b.f(parcel, r10);
                    break;
                case 4:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 5:
                    i11 = jf.b.t(parcel, r10);
                    break;
                case 6:
                    pointArr = (Point[]) jf.b.i(parcel, r10, Point.CREATOR);
                    break;
                case 7:
                    raVar = (ra) jf.b.e(parcel, r10, ra.CREATOR);
                    break;
                case 8:
                    udVar = (ud) jf.b.e(parcel, r10, ud.CREATOR);
                    break;
                case 9:
                    veVar = (ve) jf.b.e(parcel, r10, ve.CREATOR);
                    break;
                case 10:
                    ygVar = (yg) jf.b.e(parcel, r10, yg.CREATOR);
                    break;
                case 11:
                    xfVar = (xf) jf.b.e(parcel, r10, xf.CREATOR);
                    break;
                case 12:
                    sbVar = (sb) jf.b.e(parcel, r10, sb.CREATOR);
                    break;
                case 13:
                    o7Var = (o7) jf.b.e(parcel, r10, o7.CREATOR);
                    break;
                case 14:
                    p8Var = (p8) jf.b.e(parcel, r10, p8.CREATOR);
                    break;
                case 15:
                    q9Var = (q9) jf.b.e(parcel, r10, q9.CREATOR);
                    break;
                case 16:
                    bArr = jf.b.b(parcel, r10);
                    break;
                case 17:
                    z10 = jf.b.m(parcel, r10);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    d10 = jf.b.o(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new zh(i10, str, str2, i11, pointArr, raVar, udVar, veVar, ygVar, xfVar, sbVar, o7Var, p8Var, q9Var, bArr, z10, d10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new zh[i10];
    }
}
