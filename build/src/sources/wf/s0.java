package wf;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import com.google.android.gms.fido.fido2.api.common.AuthenticationExtensions;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        u uVar = null;
        w wVar = null;
        byte[] bArr = null;
        ArrayList arrayList = null;
        Double d10 = null;
        ArrayList arrayList2 = null;
        j jVar = null;
        Integer num = null;
        com.google.android.gms.fido.fido2.api.common.a aVar = null;
        String str = null;
        AuthenticationExtensions authenticationExtensions = null;
        String str2 = null;
        ResultReceiver resultReceiver = null;
        ArrayList arrayList3 = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    uVar = (u) hf.b.e(parcel, r10, u.CREATOR);
                    break;
                case 3:
                    wVar = (w) hf.b.e(parcel, r10, w.CREATOR);
                    break;
                case 4:
                    bArr = hf.b.b(parcel, r10);
                    break;
                case 5:
                    arrayList = hf.b.j(parcel, r10, t.CREATOR);
                    break;
                case 6:
                    d10 = hf.b.p(parcel, r10);
                    break;
                case 7:
                    arrayList2 = hf.b.j(parcel, r10, s.CREATOR);
                    break;
                case 8:
                    jVar = (j) hf.b.e(parcel, r10, j.CREATOR);
                    break;
                case 9:
                    num = hf.b.u(parcel, r10);
                    break;
                case 10:
                    aVar = (com.google.android.gms.fido.fido2.api.common.a) hf.b.e(parcel, r10, com.google.android.gms.fido.fido2.api.common.a.CREATOR);
                    break;
                case 11:
                    str = hf.b.f(parcel, r10);
                    break;
                case 12:
                    authenticationExtensions = (AuthenticationExtensions) hf.b.e(parcel, r10, AuthenticationExtensions.CREATOR);
                    break;
                case 13:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 14:
                    resultReceiver = (ResultReceiver) hf.b.e(parcel, r10, ResultReceiver.CREATOR);
                    break;
                case 15:
                    arrayList3 = hf.b.h(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new r(uVar, wVar, bArr, arrayList, d10, arrayList2, jVar, num, aVar, str, authenticationExtensions, str2, resultReceiver, arrayList3);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new r[i10];
    }
}
