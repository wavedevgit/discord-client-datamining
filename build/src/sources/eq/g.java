package eq;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Uri f21771d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f21772e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f21773i;

    /* renamed from: o  reason: collision with root package name */
    private final ep.a f21774o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), ep.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, ep.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f21771d = dg1Uri;
        this.f21772e = dg2Uri;
        this.f21773i = sodUri;
        this.f21774o = chipAuthenticationStatus;
    }

    public final ep.a a() {
        return this.f21774o;
    }

    public final Uri b() {
        return this.f21771d;
    }

    public final Uri c() {
        return this.f21772e;
    }

    public final Uri d() {
        return this.f21773i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f21771d, gVar.f21771d) && Intrinsics.areEqual(this.f21772e, gVar.f21772e) && Intrinsics.areEqual(this.f21773i, gVar.f21773i) && this.f21774o == gVar.f21774o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f21771d.hashCode() * 31) + this.f21772e.hashCode()) * 31) + this.f21773i.hashCode()) * 31) + this.f21774o.hashCode();
    }

    public String toString() {
        Uri uri = this.f21771d;
        Uri uri2 = this.f21772e;
        Uri uri3 = this.f21773i;
        ep.a aVar = this.f21774o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f21771d, i10);
        dest.writeParcelable(this.f21772e, i10);
        dest.writeParcelable(this.f21773i, i10);
        dest.writeString(this.f21774o.name());
    }
}
