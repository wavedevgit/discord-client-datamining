package gq;

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
    private final Uri f25574d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f25575e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f25576i;

    /* renamed from: o  reason: collision with root package name */
    private final gp.a f25577o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), gp.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, gp.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f25574d = dg1Uri;
        this.f25575e = dg2Uri;
        this.f25576i = sodUri;
        this.f25577o = chipAuthenticationStatus;
    }

    public final gp.a a() {
        return this.f25577o;
    }

    public final Uri b() {
        return this.f25574d;
    }

    public final Uri c() {
        return this.f25575e;
    }

    public final Uri d() {
        return this.f25576i;
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
        if (Intrinsics.areEqual(this.f25574d, gVar.f25574d) && Intrinsics.areEqual(this.f25575e, gVar.f25575e) && Intrinsics.areEqual(this.f25576i, gVar.f25576i) && this.f25577o == gVar.f25577o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f25574d.hashCode() * 31) + this.f25575e.hashCode()) * 31) + this.f25576i.hashCode()) * 31) + this.f25577o.hashCode();
    }

    public String toString() {
        Uri uri = this.f25574d;
        Uri uri2 = this.f25575e;
        Uri uri3 = this.f25576i;
        gp.a aVar = this.f25577o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f25574d, i10);
        dest.writeParcelable(this.f25575e, i10);
        dest.writeParcelable(this.f25576i, i10);
        dest.writeString(this.f25577o.name());
    }
}
