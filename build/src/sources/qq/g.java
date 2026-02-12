package qq;

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
    private final Uri f45627d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f45628e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f45629i;

    /* renamed from: o  reason: collision with root package name */
    private final qp.a f45630o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), qp.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, qp.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f45627d = dg1Uri;
        this.f45628e = dg2Uri;
        this.f45629i = sodUri;
        this.f45630o = chipAuthenticationStatus;
    }

    public final qp.a a() {
        return this.f45630o;
    }

    public final Uri b() {
        return this.f45627d;
    }

    public final Uri c() {
        return this.f45628e;
    }

    public final Uri d() {
        return this.f45629i;
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
        if (Intrinsics.areEqual(this.f45627d, gVar.f45627d) && Intrinsics.areEqual(this.f45628e, gVar.f45628e) && Intrinsics.areEqual(this.f45629i, gVar.f45629i) && this.f45630o == gVar.f45630o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f45627d.hashCode() * 31) + this.f45628e.hashCode()) * 31) + this.f45629i.hashCode()) * 31) + this.f45630o.hashCode();
    }

    public String toString() {
        Uri uri = this.f45627d;
        Uri uri2 = this.f45628e;
        Uri uri3 = this.f45629i;
        qp.a aVar = this.f45630o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f45627d, i10);
        dest.writeParcelable(this.f45628e, i10);
        dest.writeParcelable(this.f45629i, i10);
        dest.writeString(this.f45630o.name());
    }
}
