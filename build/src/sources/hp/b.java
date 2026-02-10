package hp;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Date;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f26393d;

    /* renamed from: e  reason: collision with root package name */
    private final Date f26394e;

    /* renamed from: i  reason: collision with root package name */
    private final Date f26395i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final b createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new b(parcel.readString(), (Date) parcel.readSerializable(), (Date) parcel.readSerializable());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final b[] newArray(int i10) {
            return new b[i10];
        }
    }

    public b(String passportNumber, Date expirationDate, Date dateOfBirth) {
        Intrinsics.checkNotNullParameter(passportNumber, "passportNumber");
        Intrinsics.checkNotNullParameter(expirationDate, "expirationDate");
        Intrinsics.checkNotNullParameter(dateOfBirth, "dateOfBirth");
        this.f26393d = passportNumber;
        this.f26394e = expirationDate;
        this.f26395i = dateOfBirth;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f26393d, bVar.f26393d) && Intrinsics.areEqual(this.f26394e, bVar.f26394e) && Intrinsics.areEqual(this.f26395i, bVar.f26395i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f26393d.hashCode() * 31) + this.f26394e.hashCode()) * 31) + this.f26395i.hashCode();
    }

    public String toString() {
        String str = this.f26393d;
        Date date = this.f26394e;
        Date date2 = this.f26395i;
        return "MrzKey(passportNumber=" + str + ", expirationDate=" + date + ", dateOfBirth=" + date2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f26393d);
        dest.writeSerializable(this.f26394e);
        dest.writeSerializable(this.f26395i);
    }
}
