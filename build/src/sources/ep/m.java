package ep;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f21711d;

    /* renamed from: e  reason: collision with root package name */
    private final String f21712e;

    /* renamed from: i  reason: collision with root package name */
    private final String f21713i;

    /* renamed from: o  reason: collision with root package name */
    private final String f21714o;

    /* renamed from: p  reason: collision with root package name */
    private final String f21715p;

    /* renamed from: q  reason: collision with root package name */
    private final String f21716q;

    /* renamed from: r  reason: collision with root package name */
    private final String f21717r;

    /* renamed from: s  reason: collision with root package name */
    private final String f21718s;

    /* renamed from: t  reason: collision with root package name */
    private final String f21719t;

    /* renamed from: u  reason: collision with root package name */
    private final String f21720u;

    /* renamed from: v  reason: collision with root package name */
    private final String f21721v;

    /* renamed from: w  reason: collision with root package name */
    private final String f21722w;

    /* renamed from: x  reason: collision with root package name */
    private final String f21723x;

    /* renamed from: y  reason: collision with root package name */
    private final String f21724y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final m createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new m(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final m[] newArray(int i10) {
            return new m[i10];
        }
    }

    public m(String nfcScanPrompt, String authenticating, String reading, String cancelNfcScan, String nfcScanSuccess, String enablePassportNfcText, String enablePassportNfcConfirmButtonText, String enablePassportNfcCancelButtonText, String connectionLostText, String connectionLostConfirmButtonText, String authenticationErrorText, String authenticationErrorConfirmButtonText, String genericErrorText, String genericErrorConfirmButtonText) {
        Intrinsics.checkNotNullParameter(nfcScanPrompt, "nfcScanPrompt");
        Intrinsics.checkNotNullParameter(authenticating, "authenticating");
        Intrinsics.checkNotNullParameter(reading, "reading");
        Intrinsics.checkNotNullParameter(cancelNfcScan, "cancelNfcScan");
        Intrinsics.checkNotNullParameter(nfcScanSuccess, "nfcScanSuccess");
        Intrinsics.checkNotNullParameter(enablePassportNfcText, "enablePassportNfcText");
        Intrinsics.checkNotNullParameter(enablePassportNfcConfirmButtonText, "enablePassportNfcConfirmButtonText");
        Intrinsics.checkNotNullParameter(enablePassportNfcCancelButtonText, "enablePassportNfcCancelButtonText");
        Intrinsics.checkNotNullParameter(connectionLostText, "connectionLostText");
        Intrinsics.checkNotNullParameter(connectionLostConfirmButtonText, "connectionLostConfirmButtonText");
        Intrinsics.checkNotNullParameter(authenticationErrorText, "authenticationErrorText");
        Intrinsics.checkNotNullParameter(authenticationErrorConfirmButtonText, "authenticationErrorConfirmButtonText");
        Intrinsics.checkNotNullParameter(genericErrorText, "genericErrorText");
        Intrinsics.checkNotNullParameter(genericErrorConfirmButtonText, "genericErrorConfirmButtonText");
        this.f21711d = nfcScanPrompt;
        this.f21712e = authenticating;
        this.f21713i = reading;
        this.f21714o = cancelNfcScan;
        this.f21715p = nfcScanSuccess;
        this.f21716q = enablePassportNfcText;
        this.f21717r = enablePassportNfcConfirmButtonText;
        this.f21718s = enablePassportNfcCancelButtonText;
        this.f21719t = connectionLostText;
        this.f21720u = connectionLostConfirmButtonText;
        this.f21721v = authenticationErrorText;
        this.f21722w = authenticationErrorConfirmButtonText;
        this.f21723x = genericErrorText;
        this.f21724y = genericErrorConfirmButtonText;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f21711d, mVar.f21711d) && Intrinsics.areEqual(this.f21712e, mVar.f21712e) && Intrinsics.areEqual(this.f21713i, mVar.f21713i) && Intrinsics.areEqual(this.f21714o, mVar.f21714o) && Intrinsics.areEqual(this.f21715p, mVar.f21715p) && Intrinsics.areEqual(this.f21716q, mVar.f21716q) && Intrinsics.areEqual(this.f21717r, mVar.f21717r) && Intrinsics.areEqual(this.f21718s, mVar.f21718s) && Intrinsics.areEqual(this.f21719t, mVar.f21719t) && Intrinsics.areEqual(this.f21720u, mVar.f21720u) && Intrinsics.areEqual(this.f21721v, mVar.f21721v) && Intrinsics.areEqual(this.f21722w, mVar.f21722w) && Intrinsics.areEqual(this.f21723x, mVar.f21723x) && Intrinsics.areEqual(this.f21724y, mVar.f21724y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f21711d.hashCode() * 31) + this.f21712e.hashCode()) * 31) + this.f21713i.hashCode()) * 31) + this.f21714o.hashCode()) * 31) + this.f21715p.hashCode()) * 31) + this.f21716q.hashCode()) * 31) + this.f21717r.hashCode()) * 31) + this.f21718s.hashCode()) * 31) + this.f21719t.hashCode()) * 31) + this.f21720u.hashCode()) * 31) + this.f21721v.hashCode()) * 31) + this.f21722w.hashCode()) * 31) + this.f21723x.hashCode()) * 31) + this.f21724y.hashCode();
    }

    public String toString() {
        String str = this.f21711d;
        String str2 = this.f21712e;
        String str3 = this.f21713i;
        String str4 = this.f21714o;
        String str5 = this.f21715p;
        String str6 = this.f21716q;
        String str7 = this.f21717r;
        String str8 = this.f21718s;
        String str9 = this.f21719t;
        String str10 = this.f21720u;
        String str11 = this.f21721v;
        String str12 = this.f21722w;
        String str13 = this.f21723x;
        String str14 = this.f21724y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21711d);
        dest.writeString(this.f21712e);
        dest.writeString(this.f21713i);
        dest.writeString(this.f21714o);
        dest.writeString(this.f21715p);
        dest.writeString(this.f21716q);
        dest.writeString(this.f21717r);
        dest.writeString(this.f21718s);
        dest.writeString(this.f21719t);
        dest.writeString(this.f21720u);
        dest.writeString(this.f21721v);
        dest.writeString(this.f21722w);
        dest.writeString(this.f21723x);
        dest.writeString(this.f21724y);
    }
}
