package go;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0341a();

    /* renamed from: d  reason: collision with root package name */
    private final String f27052d;

    /* renamed from: e  reason: collision with root package name */
    private final String f27053e;

    /* renamed from: i  reason: collision with root package name */
    private final String f27054i;

    /* renamed from: o  reason: collision with root package name */
    private final List f27055o;

    /* renamed from: go.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0341a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            String readString2 = parcel.readString();
            String readString3 = parcel.readString();
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(b.CREATOR.createFromParcel(parcel));
            }
            return new a(readString, readString2, readString3, arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(String merchantId, String nonce, String fieldKeyMobileDriversLicense, List digitalIdRequests) {
        Intrinsics.checkNotNullParameter(merchantId, "merchantId");
        Intrinsics.checkNotNullParameter(nonce, "nonce");
        Intrinsics.checkNotNullParameter(fieldKeyMobileDriversLicense, "fieldKeyMobileDriversLicense");
        Intrinsics.checkNotNullParameter(digitalIdRequests, "digitalIdRequests");
        this.f27052d = merchantId;
        this.f27053e = nonce;
        this.f27054i = fieldKeyMobileDriversLicense;
        this.f27055o = digitalIdRequests;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f27052d);
        dest.writeString(this.f27053e);
        dest.writeString(this.f27054i);
        List<b> list = this.f27055o;
        dest.writeInt(list.size());
        for (b bVar : list) {
            bVar.writeToParcel(dest, i10);
        }
    }
}
