package hq;

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
    private final Uri f26485d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f26486e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f26487i;

    /* renamed from: o  reason: collision with root package name */
    private final hp.a f26488o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), hp.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, hp.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f26485d = dg1Uri;
        this.f26486e = dg2Uri;
        this.f26487i = sodUri;
        this.f26488o = chipAuthenticationStatus;
    }

    public final hp.a a() {
        return this.f26488o;
    }

    public final Uri b() {
        return this.f26485d;
    }

    public final Uri c() {
        return this.f26486e;
    }

    public final Uri d() {
        return this.f26487i;
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
        if (Intrinsics.areEqual(this.f26485d, gVar.f26485d) && Intrinsics.areEqual(this.f26486e, gVar.f26486e) && Intrinsics.areEqual(this.f26487i, gVar.f26487i) && this.f26488o == gVar.f26488o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f26485d.hashCode() * 31) + this.f26486e.hashCode()) * 31) + this.f26487i.hashCode()) * 31) + this.f26488o.hashCode();
    }

    public String toString() {
        Uri uri = this.f26485d;
        Uri uri2 = this.f26486e;
        Uri uri3 = this.f26487i;
        hp.a aVar = this.f26488o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f26485d, i10);
        dest.writeParcelable(this.f26486e, i10);
        dest.writeParcelable(this.f26487i, i10);
        dest.writeString(this.f26488o.name());
    }
}
