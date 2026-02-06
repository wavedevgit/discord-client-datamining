package oq;

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
    private final Date f43328d;

    /* renamed from: e  reason: collision with root package name */
    private final Date f43329e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final b createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new b((Date) parcel.readSerializable(), (Date) parcel.readSerializable());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final b[] newArray(int i10) {
            return new b[i10];
        }
    }

    public b(Date date, Date date2) {
        this.f43328d = date;
        this.f43329e = date2;
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
        if (Intrinsics.areEqual(this.f43328d, bVar.f43328d) && Intrinsics.areEqual(this.f43329e, bVar.f43329e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        Date date = this.f43328d;
        int i10 = 0;
        if (date == null) {
            hashCode = 0;
        } else {
            hashCode = date.hashCode();
        }
        int i11 = hashCode * 31;
        Date date2 = this.f43329e;
        if (date2 != null) {
            i10 = date2.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        Date date = this.f43328d;
        Date date2 = this.f43329e;
        return "CollectedGovernmentIdDetails(dateOfBirth=" + date + ", expirationDate=" + date2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeSerializable(this.f43328d);
        dest.writeSerializable(this.f43329e);
    }
}
