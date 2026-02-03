package zp;

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
    private final Uri f56031d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f56032e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f56033i;

    /* renamed from: o  reason: collision with root package name */
    private final zo.a f56034o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), zo.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, zo.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f56031d = dg1Uri;
        this.f56032e = dg2Uri;
        this.f56033i = sodUri;
        this.f56034o = chipAuthenticationStatus;
    }

    public final zo.a a() {
        return this.f56034o;
    }

    public final Uri b() {
        return this.f56031d;
    }

    public final Uri c() {
        return this.f56032e;
    }

    public final Uri d() {
        return this.f56033i;
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
        if (Intrinsics.areEqual(this.f56031d, gVar.f56031d) && Intrinsics.areEqual(this.f56032e, gVar.f56032e) && Intrinsics.areEqual(this.f56033i, gVar.f56033i) && this.f56034o == gVar.f56034o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f56031d.hashCode() * 31) + this.f56032e.hashCode()) * 31) + this.f56033i.hashCode()) * 31) + this.f56034o.hashCode();
    }

    public String toString() {
        Uri uri = this.f56031d;
        Uri uri2 = this.f56032e;
        Uri uri3 = this.f56033i;
        zo.a aVar = this.f56034o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f56031d, i10);
        dest.writeParcelable(this.f56032e, i10);
        dest.writeParcelable(this.f56033i, i10);
        dest.writeString(this.f56034o.name());
    }
}
