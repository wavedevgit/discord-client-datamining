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
    private final g4 f48971d;

    /* renamed from: e  reason: collision with root package name */
    private final c4 f48972e;

    /* renamed from: i  reason: collision with root package name */
    private final String f48973i;

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
        this.f48971d = icon;
        this.f48972e = idConfig;
        this.f48973i = name;
    }

    public final g4 a() {
        return this.f48971d;
    }

    public final c4 b() {
        return this.f48972e;
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
        if (this.f48971d == b0Var.f48971d && Intrinsics.areEqual(this.f48972e, b0Var.f48972e) && Intrinsics.areEqual(this.f48973i, b0Var.f48973i)) {
            return true;
        }
        return false;
    }

    public final String getName() {
        return this.f48973i;
    }

    public int hashCode() {
        return (((this.f48971d.hashCode() * 31) + this.f48972e.hashCode()) * 31) + this.f48973i.hashCode();
    }

    public String toString() {
        g4 g4Var = this.f48971d;
        c4 c4Var = this.f48972e;
        String str = this.f48973i;
        return "EnabledIdClass(icon=" + g4Var + ", idConfig=" + c4Var + ", name=" + str + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f48971d.name());
        this.f48972e.writeToParcel(dest, i10);
        dest.writeString(this.f48973i);
    }
}
