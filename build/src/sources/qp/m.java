package qp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f46135d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46136e;

    /* renamed from: i  reason: collision with root package name */
    private final String f46137i;

    /* renamed from: o  reason: collision with root package name */
    private final String f46138o;

    /* renamed from: p  reason: collision with root package name */
    private final String f46139p;

    /* renamed from: q  reason: collision with root package name */
    private final String f46140q;

    /* renamed from: r  reason: collision with root package name */
    private final String f46141r;

    /* renamed from: s  reason: collision with root package name */
    private final String f46142s;

    /* renamed from: t  reason: collision with root package name */
    private final String f46143t;

    /* renamed from: u  reason: collision with root package name */
    private final String f46144u;

    /* renamed from: v  reason: collision with root package name */
    private final String f46145v;

    /* renamed from: w  reason: collision with root package name */
    private final String f46146w;

    /* renamed from: x  reason: collision with root package name */
    private final String f46147x;

    /* renamed from: y  reason: collision with root package name */
    private final String f46148y;

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
        this.f46135d = nfcScanPrompt;
        this.f46136e = authenticating;
        this.f46137i = reading;
        this.f46138o = cancelNfcScan;
        this.f46139p = nfcScanSuccess;
        this.f46140q = enablePassportNfcText;
        this.f46141r = enablePassportNfcConfirmButtonText;
        this.f46142s = enablePassportNfcCancelButtonText;
        this.f46143t = connectionLostText;
        this.f46144u = connectionLostConfirmButtonText;
        this.f46145v = authenticationErrorText;
        this.f46146w = authenticationErrorConfirmButtonText;
        this.f46147x = genericErrorText;
        this.f46148y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f46135d, mVar.f46135d) && Intrinsics.areEqual(this.f46136e, mVar.f46136e) && Intrinsics.areEqual(this.f46137i, mVar.f46137i) && Intrinsics.areEqual(this.f46138o, mVar.f46138o) && Intrinsics.areEqual(this.f46139p, mVar.f46139p) && Intrinsics.areEqual(this.f46140q, mVar.f46140q) && Intrinsics.areEqual(this.f46141r, mVar.f46141r) && Intrinsics.areEqual(this.f46142s, mVar.f46142s) && Intrinsics.areEqual(this.f46143t, mVar.f46143t) && Intrinsics.areEqual(this.f46144u, mVar.f46144u) && Intrinsics.areEqual(this.f46145v, mVar.f46145v) && Intrinsics.areEqual(this.f46146w, mVar.f46146w) && Intrinsics.areEqual(this.f46147x, mVar.f46147x) && Intrinsics.areEqual(this.f46148y, mVar.f46148y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f46135d.hashCode() * 31) + this.f46136e.hashCode()) * 31) + this.f46137i.hashCode()) * 31) + this.f46138o.hashCode()) * 31) + this.f46139p.hashCode()) * 31) + this.f46140q.hashCode()) * 31) + this.f46141r.hashCode()) * 31) + this.f46142s.hashCode()) * 31) + this.f46143t.hashCode()) * 31) + this.f46144u.hashCode()) * 31) + this.f46145v.hashCode()) * 31) + this.f46146w.hashCode()) * 31) + this.f46147x.hashCode()) * 31) + this.f46148y.hashCode();
    }

    public String toString() {
        String str = this.f46135d;
        String str2 = this.f46136e;
        String str3 = this.f46137i;
        String str4 = this.f46138o;
        String str5 = this.f46139p;
        String str6 = this.f46140q;
        String str7 = this.f46141r;
        String str8 = this.f46142s;
        String str9 = this.f46143t;
        String str10 = this.f46144u;
        String str11 = this.f46145v;
        String str12 = this.f46146w;
        String str13 = this.f46147x;
        String str14 = this.f46148y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f46135d);
        dest.writeString(this.f46136e);
        dest.writeString(this.f46137i);
        dest.writeString(this.f46138o);
        dest.writeString(this.f46139p);
        dest.writeString(this.f46140q);
        dest.writeString(this.f46141r);
        dest.writeString(this.f46142s);
        dest.writeString(this.f46143t);
        dest.writeString(this.f46144u);
        dest.writeString(this.f46145v);
        dest.writeString(this.f46146w);
        dest.writeString(this.f46147x);
        dest.writeString(this.f46148y);
    }
}
