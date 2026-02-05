package ep;

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
    private final String f21679d;

    /* renamed from: e  reason: collision with root package name */
    private final Date f21680e;

    /* renamed from: i  reason: collision with root package name */
    private final Date f21681i;

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
        this.f21679d = passportNumber;
        this.f21680e = expirationDate;
        this.f21681i = dateOfBirth;
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
        if (Intrinsics.areEqual(this.f21679d, bVar.f21679d) && Intrinsics.areEqual(this.f21680e, bVar.f21680e) && Intrinsics.areEqual(this.f21681i, bVar.f21681i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f21679d.hashCode() * 31) + this.f21680e.hashCode()) * 31) + this.f21681i.hashCode();
    }

    public String toString() {
        String str = this.f21679d;
        Date date = this.f21680e;
        Date date2 = this.f21681i;
        return "MrzKey(passportNumber=" + str + ", expirationDate=" + date + ", dateOfBirth=" + date2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21679d);
        dest.writeSerializable(this.f21680e);
        dest.writeSerializable(this.f21681i);
    }
}
