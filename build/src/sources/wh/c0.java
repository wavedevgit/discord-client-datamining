package wh;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 extends x implements d0 {
    public c0() {
        super("com.google.android.play.core.assetpacks.protocol.IAssetModuleServiceCallback");
    }

    @Override // wh.x
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        switch (i10) {
            case 2:
                y.b(parcel);
                r(parcel.readInt(), (Bundle) y.a(parcel, Bundle.CREATOR));
                return true;
            case 3:
                y.b(parcel);
                x0(parcel.readInt(), (Bundle) y.a(parcel, Bundle.CREATOR));
                return true;
            case 4:
                y.b(parcel);
                b0(parcel.readInt(), (Bundle) y.a(parcel, Bundle.CREATOR));
                return true;
            case 5:
                ArrayList createTypedArrayList = parcel.createTypedArrayList(Bundle.CREATOR);
                y.b(parcel);
                s(createTypedArrayList);
                return true;
            case 6:
                Parcelable.Creator creator = Bundle.CREATOR;
                y.b(parcel);
                p0((Bundle) y.a(parcel, creator), (Bundle) y.a(parcel, creator));
                return true;
            case 7:
                y.b(parcel);
                g((Bundle) y.a(parcel, Bundle.CREATOR));
                return true;
            case 8:
                Parcelable.Creator creator2 = Bundle.CREATOR;
                y.b(parcel);
                t0((Bundle) y.a(parcel, creator2), (Bundle) y.a(parcel, creator2));
                return true;
            case 9:
            default:
                return false;
            case 10:
                Parcelable.Creator creator3 = Bundle.CREATOR;
                y.b(parcel);
                E((Bundle) y.a(parcel, creator3), (Bundle) y.a(parcel, creator3));
                return true;
            case 11:
                Parcelable.Creator creator4 = Bundle.CREATOR;
                y.b(parcel);
                j0((Bundle) y.a(parcel, creator4), (Bundle) y.a(parcel, creator4));
                return true;
            case 12:
                Parcelable.Creator creator5 = Bundle.CREATOR;
                y.b(parcel);
                O0((Bundle) y.a(parcel, creator5), (Bundle) y.a(parcel, creator5));
                return true;
            case 13:
                Parcelable.Creator creator6 = Bundle.CREATOR;
                y.b(parcel);
                M((Bundle) y.a(parcel, creator6), (Bundle) y.a(parcel, creator6));
                return true;
            case 14:
                Parcelable.Creator creator7 = Bundle.CREATOR;
                y.b(parcel);
                G((Bundle) y.a(parcel, creator7), (Bundle) y.a(parcel, creator7));
                return true;
            case 15:
                y.b(parcel);
                c((Bundle) y.a(parcel, Bundle.CREATOR));
                return true;
        }
    }
}
