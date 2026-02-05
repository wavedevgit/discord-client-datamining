package ho;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<b0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final g4 f25984d;

    /* renamed from: e  reason: collision with root package name */
    private final c4 f25985e;

    /* renamed from: i  reason: collision with root package name */
    private final String f25986i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final b0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new b0(g4.valueOf(parcel.readString()), c4.CREATOR.createFromParcel(parcel), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final b0[] newArray(int i10) {
            return new b0[i10];
        }
    }

    public b0(g4 icon, c4 idConfig, String name) {
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(idConfig, "idConfig");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f25984d = icon;
        this.f25985e = idConfig;
        this.f25986i = name;
    }

    public final g4 a() {
        return this.f25984d;
    }

    public final c4 b() {
        return this.f25985e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b0)) {
            return false;
        }
        b0 b0Var = (b0) obj;
        if (this.f25984d == b0Var.f25984d && Intrinsics.areEqual(this.f25985e, b0Var.f25985e) && Intrinsics.areEqual(this.f25986i, b0Var.f25986i)) {
            return true;
        }
        return false;
    }

    public final String getName() {
        return this.f25986i;
    }

    public int hashCode() {
        return (((this.f25984d.hashCode() * 31) + this.f25985e.hashCode()) * 31) + this.f25986i.hashCode();
    }

    public String toString() {
        g4 g4Var = this.f25984d;
        c4 c4Var = this.f25985e;
        String str = this.f25986i;
        return "EnabledIdClass(icon=" + g4Var + ", idConfig=" + c4Var + ", name=" + str + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f25984d.name());
        this.f25985e.writeToParcel(dest, i10);
        dest.writeString(this.f25986i);
    }
}
