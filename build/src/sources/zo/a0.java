package zo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final b0 f55839d;

    /* renamed from: e  reason: collision with root package name */
    private final c0 f55840e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new a0(b0.valueOf(parcel.readString()), c0.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a0[] newArray(int i10) {
            return new a0[i10];
        }
    }

    public a0(b0 feature, c0 result) {
        Intrinsics.checkNotNullParameter(feature, "feature");
        Intrinsics.checkNotNullParameter(result, "result");
        this.f55839d = feature;
        this.f55840e = result;
    }

    public final c0 a() {
        return this.f55840e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a0)) {
            return false;
        }
        a0 a0Var = (a0) obj;
        if (this.f55839d == a0Var.f55839d && this.f55840e == a0Var.f55840e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55839d.hashCode() * 31) + this.f55840e.hashCode();
    }

    public String toString() {
        b0 b0Var = this.f55839d;
        c0 c0Var = this.f55840e;
        return "DeviceFeatureState(feature=" + b0Var + ", result=" + c0Var + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f55839d.name());
        dest.writeString(this.f55840e.name());
    }
}
