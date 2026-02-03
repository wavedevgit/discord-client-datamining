package bq;

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
    private final Uri f6745d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f6746e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f6747i;

    /* renamed from: o  reason: collision with root package name */
    private final bp.a f6748o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), bp.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, bp.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f6745d = dg1Uri;
        this.f6746e = dg2Uri;
        this.f6747i = sodUri;
        this.f6748o = chipAuthenticationStatus;
    }

    public final bp.a a() {
        return this.f6748o;
    }

    public final Uri b() {
        return this.f6745d;
    }

    public final Uri c() {
        return this.f6746e;
    }

    public final Uri d() {
        return this.f6747i;
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
        if (Intrinsics.areEqual(this.f6745d, gVar.f6745d) && Intrinsics.areEqual(this.f6746e, gVar.f6746e) && Intrinsics.areEqual(this.f6747i, gVar.f6747i) && this.f6748o == gVar.f6748o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f6745d.hashCode() * 31) + this.f6746e.hashCode()) * 31) + this.f6747i.hashCode()) * 31) + this.f6748o.hashCode();
    }

    public String toString() {
        Uri uri = this.f6745d;
        Uri uri2 = this.f6746e;
        Uri uri3 = this.f6747i;
        bp.a aVar = this.f6748o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f6745d, i10);
        dest.writeParcelable(this.f6746e, i10);
        dest.writeParcelable(this.f6747i, i10);
        dest.writeString(this.f6748o.name());
    }
}
