package yp;

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
    private final Uri f54935d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f54936e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f54937i;

    /* renamed from: o  reason: collision with root package name */
    private final yo.a f54938o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), yo.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, yo.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f54935d = dg1Uri;
        this.f54936e = dg2Uri;
        this.f54937i = sodUri;
        this.f54938o = chipAuthenticationStatus;
    }

    public final yo.a a() {
        return this.f54938o;
    }

    public final Uri b() {
        return this.f54935d;
    }

    public final Uri c() {
        return this.f54936e;
    }

    public final Uri d() {
        return this.f54937i;
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
        if (Intrinsics.areEqual(this.f54935d, gVar.f54935d) && Intrinsics.areEqual(this.f54936e, gVar.f54936e) && Intrinsics.areEqual(this.f54937i, gVar.f54937i) && this.f54938o == gVar.f54938o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f54935d.hashCode() * 31) + this.f54936e.hashCode()) * 31) + this.f54937i.hashCode()) * 31) + this.f54938o.hashCode();
    }

    public String toString() {
        Uri uri = this.f54935d;
        Uri uri2 = this.f54936e;
        Uri uri3 = this.f54937i;
        yo.a aVar = this.f54938o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f54935d, i10);
        dest.writeParcelable(this.f54936e, i10);
        dest.writeParcelable(this.f54937i, i10);
        dest.writeString(this.f54938o.name());
    }
}
