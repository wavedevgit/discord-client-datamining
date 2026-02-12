package to;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Date;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<k0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Date f49334d;

    /* renamed from: e  reason: collision with root package name */
    private final Date f49335e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final k0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new k0((Date) parcel.readSerializable(), (Date) parcel.readSerializable());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final k0[] newArray(int i10) {
            return new k0[i10];
        }
    }

    public k0(Date date, Date date2) {
        this.f49334d = date;
        this.f49335e = date2;
    }

    public final Date a() {
        return this.f49334d;
    }

    public final Date b() {
        return this.f49335e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof k0)) {
            return false;
        }
        k0 k0Var = (k0) obj;
        if (Intrinsics.areEqual(this.f49334d, k0Var.f49334d) && Intrinsics.areEqual(this.f49335e, k0Var.f49335e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        Date date = this.f49334d;
        int i10 = 0;
        if (date == null) {
            hashCode = 0;
        } else {
            hashCode = date.hashCode();
        }
        int i11 = hashCode * 31;
        Date date2 = this.f49335e;
        if (date2 != null) {
            i10 = date2.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        Date date = this.f49334d;
        Date date2 = this.f49335e;
        return "GovernmentIdDetails(dateOfBirth=" + date + ", expirationDate=" + date2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeSerializable(this.f49334d);
        dest.writeSerializable(this.f49335e);
    }
}
