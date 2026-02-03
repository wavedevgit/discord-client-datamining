package bp;

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
    private final String f6653d;

    /* renamed from: e  reason: collision with root package name */
    private final Date f6654e;

    /* renamed from: i  reason: collision with root package name */
    private final Date f6655i;

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
        this.f6653d = passportNumber;
        this.f6654e = expirationDate;
        this.f6655i = dateOfBirth;
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
        if (Intrinsics.areEqual(this.f6653d, bVar.f6653d) && Intrinsics.areEqual(this.f6654e, bVar.f6654e) && Intrinsics.areEqual(this.f6655i, bVar.f6655i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f6653d.hashCode() * 31) + this.f6654e.hashCode()) * 31) + this.f6655i.hashCode();
    }

    public String toString() {
        String str = this.f6653d;
        Date date = this.f6654e;
        Date date2 = this.f6655i;
        return "MrzKey(passportNumber=" + str + ", expirationDate=" + date + ", dateOfBirth=" + date2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f6653d);
        dest.writeSerializable(this.f6654e);
        dest.writeSerializable(this.f6655i);
    }
}
