package mn;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Date;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<d0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Date f39176d;

    /* renamed from: e  reason: collision with root package name */
    private final Date f39177e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final d0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new d0((Date) parcel.readSerializable(), (Date) parcel.readSerializable());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final d0[] newArray(int i10) {
            return new d0[i10];
        }
    }

    public d0(Date dateOfBirth, Date expirationDate) {
        Intrinsics.checkNotNullParameter(dateOfBirth, "dateOfBirth");
        Intrinsics.checkNotNullParameter(expirationDate, "expirationDate");
        this.f39176d = dateOfBirth;
        this.f39177e = expirationDate;
    }

    public final Date a() {
        return this.f39176d;
    }

    public final Date b() {
        return this.f39177e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d0)) {
            return false;
        }
        d0 d0Var = (d0) obj;
        if (Intrinsics.areEqual(this.f39176d, d0Var.f39176d) && Intrinsics.areEqual(this.f39177e, d0Var.f39177e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f39176d.hashCode() * 31) + this.f39177e.hashCode();
    }

    public String toString() {
        Date date = this.f39176d;
        Date date2 = this.f39177e;
        return "ExtractedTexts(dateOfBirth=" + date + ", expirationDate=" + date2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeSerializable(this.f39176d);
        dest.writeSerializable(this.f39177e);
    }
}
