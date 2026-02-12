package to;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<b0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final g4 f48972d;

    /* renamed from: e  reason: collision with root package name */
    private final c4 f48973e;

    /* renamed from: i  reason: collision with root package name */
    private final String f48974i;

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
        this.f48972d = icon;
        this.f48973e = idConfig;
        this.f48974i = name;
    }

    public final g4 a() {
        return this.f48972d;
    }

    public final c4 b() {
        return this.f48973e;
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
        if (this.f48972d == b0Var.f48972d && Intrinsics.areEqual(this.f48973e, b0Var.f48973e) && Intrinsics.areEqual(this.f48974i, b0Var.f48974i)) {
            return true;
        }
        return false;
    }

    public final String getName() {
        return this.f48974i;
    }

    public int hashCode() {
        return (((this.f48972d.hashCode() * 31) + this.f48973e.hashCode()) * 31) + this.f48974i.hashCode();
    }

    public String toString() {
        g4 g4Var = this.f48972d;
        c4 c4Var = this.f48973e;
        String str = this.f48974i;
        return "EnabledIdClass(icon=" + g4Var + ", idConfig=" + c4Var + ", name=" + str + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f48972d.name());
        this.f48973e.writeToParcel(dest, i10);
        dest.writeString(this.f48974i);
    }
}
