package gp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f25466d;

    /* renamed from: e  reason: collision with root package name */
    private final String f25467e;

    /* renamed from: i  reason: collision with root package name */
    private final String f25468i;

    /* renamed from: o  reason: collision with root package name */
    private final String f25469o;

    /* renamed from: p  reason: collision with root package name */
    private final String f25470p;

    /* renamed from: q  reason: collision with root package name */
    private final String f25471q;

    /* renamed from: r  reason: collision with root package name */
    private final String f25472r;

    /* renamed from: s  reason: collision with root package name */
    private final String f25473s;

    /* renamed from: t  reason: collision with root package name */
    private final String f25474t;

    /* renamed from: u  reason: collision with root package name */
    private final String f25475u;

    /* renamed from: v  reason: collision with root package name */
    private final String f25476v;

    /* renamed from: w  reason: collision with root package name */
    private final String f25477w;

    /* renamed from: x  reason: collision with root package name */
    private final String f25478x;

    /* renamed from: y  reason: collision with root package name */
    private final String f25479y;

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
        this.f25466d = nfcScanPrompt;
        this.f25467e = authenticating;
        this.f25468i = reading;
        this.f25469o = cancelNfcScan;
        this.f25470p = nfcScanSuccess;
        this.f25471q = enablePassportNfcText;
        this.f25472r = enablePassportNfcConfirmButtonText;
        this.f25473s = enablePassportNfcCancelButtonText;
        this.f25474t = connectionLostText;
        this.f25475u = connectionLostConfirmButtonText;
        this.f25476v = authenticationErrorText;
        this.f25477w = authenticationErrorConfirmButtonText;
        this.f25478x = genericErrorText;
        this.f25479y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f25466d, mVar.f25466d) && Intrinsics.areEqual(this.f25467e, mVar.f25467e) && Intrinsics.areEqual(this.f25468i, mVar.f25468i) && Intrinsics.areEqual(this.f25469o, mVar.f25469o) && Intrinsics.areEqual(this.f25470p, mVar.f25470p) && Intrinsics.areEqual(this.f25471q, mVar.f25471q) && Intrinsics.areEqual(this.f25472r, mVar.f25472r) && Intrinsics.areEqual(this.f25473s, mVar.f25473s) && Intrinsics.areEqual(this.f25474t, mVar.f25474t) && Intrinsics.areEqual(this.f25475u, mVar.f25475u) && Intrinsics.areEqual(this.f25476v, mVar.f25476v) && Intrinsics.areEqual(this.f25477w, mVar.f25477w) && Intrinsics.areEqual(this.f25478x, mVar.f25478x) && Intrinsics.areEqual(this.f25479y, mVar.f25479y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f25466d.hashCode() * 31) + this.f25467e.hashCode()) * 31) + this.f25468i.hashCode()) * 31) + this.f25469o.hashCode()) * 31) + this.f25470p.hashCode()) * 31) + this.f25471q.hashCode()) * 31) + this.f25472r.hashCode()) * 31) + this.f25473s.hashCode()) * 31) + this.f25474t.hashCode()) * 31) + this.f25475u.hashCode()) * 31) + this.f25476v.hashCode()) * 31) + this.f25477w.hashCode()) * 31) + this.f25478x.hashCode()) * 31) + this.f25479y.hashCode();
    }

    public String toString() {
        String str = this.f25466d;
        String str2 = this.f25467e;
        String str3 = this.f25468i;
        String str4 = this.f25469o;
        String str5 = this.f25470p;
        String str6 = this.f25471q;
        String str7 = this.f25472r;
        String str8 = this.f25473s;
        String str9 = this.f25474t;
        String str10 = this.f25475u;
        String str11 = this.f25476v;
        String str12 = this.f25477w;
        String str13 = this.f25478x;
        String str14 = this.f25479y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f25466d);
        dest.writeString(this.f25467e);
        dest.writeString(this.f25468i);
        dest.writeString(this.f25469o);
        dest.writeString(this.f25470p);
        dest.writeString(this.f25471q);
        dest.writeString(this.f25472r);
        dest.writeString(this.f25473s);
        dest.writeString(this.f25474t);
        dest.writeString(this.f25475u);
        dest.writeString(this.f25476v);
        dest.writeString(this.f25477w);
        dest.writeString(this.f25478x);
        dest.writeString(this.f25479y);
    }
}
