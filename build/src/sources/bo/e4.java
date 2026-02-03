package bo;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e4 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<e4> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f6720d;

    /* renamed from: e  reason: collision with root package name */
    private final String f6721e;

    /* renamed from: i  reason: collision with root package name */
    private final List f6722i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final e4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            String readString2 = parcel.readString();
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(c4.CREATOR.createFromParcel(parcel));
            }
            return new e4(readString, readString2, arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final e4[] newArray(int i10) {
            return new e4[i10];
        }
    }

    public e4(String countryName, String countryCode, List ids) {
        Intrinsics.checkNotNullParameter(countryName, "countryName");
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(ids, "ids");
        this.f6720d = countryName;
        this.f6721e = countryCode;
        this.f6722i = ids;
    }

    public final String a() {
        return this.f6721e;
    }

    public final String b() {
        return this.f6720d;
    }

    public final List c() {
        return this.f6722i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e4)) {
            return false;
        }
        e4 e4Var = (e4) obj;
        if (Intrinsics.areEqual(this.f6720d, e4Var.f6720d) && Intrinsics.areEqual(this.f6721e, e4Var.f6721e) && Intrinsics.areEqual(this.f6722i, e4Var.f6722i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f6720d.hashCode() * 31) + this.f6721e.hashCode()) * 31) + this.f6722i.hashCode();
    }

    public String toString() {
        String str = this.f6720d;
        String str2 = this.f6721e;
        List list = this.f6722i;
        return "IdConfigForCountry(countryName=" + str + ", countryCode=" + str2 + ", ids=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f6720d);
        dest.writeString(this.f6721e);
        List<c4> list = this.f6722i;
        dest.writeInt(list.size());
        for (c4 c4Var : list) {
            c4Var.writeToParcel(dest, i10);
        }
    }
}
