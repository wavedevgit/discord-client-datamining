package zo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f55971d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55972e;

    /* renamed from: i  reason: collision with root package name */
    private final String f55973i;

    /* renamed from: o  reason: collision with root package name */
    private final String f55974o;

    /* renamed from: p  reason: collision with root package name */
    private final String f55975p;

    /* renamed from: q  reason: collision with root package name */
    private final String f55976q;

    /* renamed from: r  reason: collision with root package name */
    private final String f55977r;

    /* renamed from: s  reason: collision with root package name */
    private final String f55978s;

    /* renamed from: t  reason: collision with root package name */
    private final String f55979t;

    /* renamed from: u  reason: collision with root package name */
    private final String f55980u;

    /* renamed from: v  reason: collision with root package name */
    private final String f55981v;

    /* renamed from: w  reason: collision with root package name */
    private final String f55982w;

    /* renamed from: x  reason: collision with root package name */
    private final String f55983x;

    /* renamed from: y  reason: collision with root package name */
    private final String f55984y;

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
        this.f55971d = nfcScanPrompt;
        this.f55972e = authenticating;
        this.f55973i = reading;
        this.f55974o = cancelNfcScan;
        this.f55975p = nfcScanSuccess;
        this.f55976q = enablePassportNfcText;
        this.f55977r = enablePassportNfcConfirmButtonText;
        this.f55978s = enablePassportNfcCancelButtonText;
        this.f55979t = connectionLostText;
        this.f55980u = connectionLostConfirmButtonText;
        this.f55981v = authenticationErrorText;
        this.f55982w = authenticationErrorConfirmButtonText;
        this.f55983x = genericErrorText;
        this.f55984y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f55971d, mVar.f55971d) && Intrinsics.areEqual(this.f55972e, mVar.f55972e) && Intrinsics.areEqual(this.f55973i, mVar.f55973i) && Intrinsics.areEqual(this.f55974o, mVar.f55974o) && Intrinsics.areEqual(this.f55975p, mVar.f55975p) && Intrinsics.areEqual(this.f55976q, mVar.f55976q) && Intrinsics.areEqual(this.f55977r, mVar.f55977r) && Intrinsics.areEqual(this.f55978s, mVar.f55978s) && Intrinsics.areEqual(this.f55979t, mVar.f55979t) && Intrinsics.areEqual(this.f55980u, mVar.f55980u) && Intrinsics.areEqual(this.f55981v, mVar.f55981v) && Intrinsics.areEqual(this.f55982w, mVar.f55982w) && Intrinsics.areEqual(this.f55983x, mVar.f55983x) && Intrinsics.areEqual(this.f55984y, mVar.f55984y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f55971d.hashCode() * 31) + this.f55972e.hashCode()) * 31) + this.f55973i.hashCode()) * 31) + this.f55974o.hashCode()) * 31) + this.f55975p.hashCode()) * 31) + this.f55976q.hashCode()) * 31) + this.f55977r.hashCode()) * 31) + this.f55978s.hashCode()) * 31) + this.f55979t.hashCode()) * 31) + this.f55980u.hashCode()) * 31) + this.f55981v.hashCode()) * 31) + this.f55982w.hashCode()) * 31) + this.f55983x.hashCode()) * 31) + this.f55984y.hashCode();
    }

    public String toString() {
        String str = this.f55971d;
        String str2 = this.f55972e;
        String str3 = this.f55973i;
        String str4 = this.f55974o;
        String str5 = this.f55975p;
        String str6 = this.f55976q;
        String str7 = this.f55977r;
        String str8 = this.f55978s;
        String str9 = this.f55979t;
        String str10 = this.f55980u;
        String str11 = this.f55981v;
        String str12 = this.f55982w;
        String str13 = this.f55983x;
        String str14 = this.f55984y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f55971d);
        dest.writeString(this.f55972e);
        dest.writeString(this.f55973i);
        dest.writeString(this.f55974o);
        dest.writeString(this.f55975p);
        dest.writeString(this.f55976q);
        dest.writeString(this.f55977r);
        dest.writeString(this.f55978s);
        dest.writeString(this.f55979t);
        dest.writeString(this.f55980u);
        dest.writeString(this.f55981v);
        dest.writeString(this.f55982w);
        dest.writeString(this.f55983x);
        dest.writeString(this.f55984y);
    }
}
