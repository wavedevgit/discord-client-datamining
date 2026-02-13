package qp;

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
    private final String f46103d;

    /* renamed from: e  reason: collision with root package name */
    private final Date f46104e;

    /* renamed from: i  reason: collision with root package name */
    private final Date f46105i;

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
        this.f46103d = passportNumber;
        this.f46104e = expirationDate;
        this.f46105i = dateOfBirth;
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
        if (Intrinsics.areEqual(this.f46103d, bVar.f46103d) && Intrinsics.areEqual(this.f46104e, bVar.f46104e) && Intrinsics.areEqual(this.f46105i, bVar.f46105i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f46103d.hashCode() * 31) + this.f46104e.hashCode()) * 31) + this.f46105i.hashCode();
    }

    public String toString() {
        String str = this.f46103d;
        Date date = this.f46104e;
        Date date2 = this.f46105i;
        return "MrzKey(passportNumber=" + str + ", expirationDate=" + date + ", dateOfBirth=" + date2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f46103d);
        dest.writeSerializable(this.f46104e);
        dest.writeSerializable(this.f46105i);
    }
}
