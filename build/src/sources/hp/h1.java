package hp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h1 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<h1> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final d0 f26313d;

    /* renamed from: e  reason: collision with root package name */
    private final g1 f26314e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final h1 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new h1(d0.valueOf(parcel.readString()), g1.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final h1[] newArray(int i10) {
            return new h1[i10];
        }
    }

    public h1(d0 permission, g1 result) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        Intrinsics.checkNotNullParameter(result, "result");
        this.f26313d = permission;
        this.f26314e = result;
    }

    public final g1 a() {
        return this.f26314e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (this.f26313d == h1Var.f26313d && this.f26314e == h1Var.f26314e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f26313d.hashCode() * 31) + this.f26314e.hashCode();
    }

    public String toString() {
        d0 d0Var = this.f26313d;
        g1 g1Var = this.f26314e;
        return "PermissionState(permission=" + d0Var + ", result=" + g1Var + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f26313d.name());
        dest.writeString(this.f26314e.name());
    }
}
