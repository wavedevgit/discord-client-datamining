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
    private final String f45567d;

    /* renamed from: e  reason: collision with root package name */
    private final String f45568e;

    /* renamed from: i  reason: collision with root package name */
    private final String f45569i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45570o;

    /* renamed from: p  reason: collision with root package name */
    private final String f45571p;

    /* renamed from: q  reason: collision with root package name */
    private final String f45572q;

    /* renamed from: r  reason: collision with root package name */
    private final String f45573r;

    /* renamed from: s  reason: collision with root package name */
    private final String f45574s;

    /* renamed from: t  reason: collision with root package name */
    private final String f45575t;

    /* renamed from: u  reason: collision with root package name */
    private final String f45576u;

    /* renamed from: v  reason: collision with root package name */
    private final String f45577v;

    /* renamed from: w  reason: collision with root package name */
    private final String f45578w;

    /* renamed from: x  reason: collision with root package name */
    private final String f45579x;

    /* renamed from: y  reason: collision with root package name */
    private final String f45580y;

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
        this.f45567d = nfcScanPrompt;
        this.f45568e = authenticating;
        this.f45569i = reading;
        this.f45570o = cancelNfcScan;
        this.f45571p = nfcScanSuccess;
        this.f45572q = enablePassportNfcText;
        this.f45573r = enablePassportNfcConfirmButtonText;
        this.f45574s = enablePassportNfcCancelButtonText;
        this.f45575t = connectionLostText;
        this.f45576u = connectionLostConfirmButtonText;
        this.f45577v = authenticationErrorText;
        this.f45578w = authenticationErrorConfirmButtonText;
        this.f45579x = genericErrorText;
        this.f45580y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f45567d, mVar.f45567d) && Intrinsics.areEqual(this.f45568e, mVar.f45568e) && Intrinsics.areEqual(this.f45569i, mVar.f45569i) && Intrinsics.areEqual(this.f45570o, mVar.f45570o) && Intrinsics.areEqual(this.f45571p, mVar.f45571p) && Intrinsics.areEqual(this.f45572q, mVar.f45572q) && Intrinsics.areEqual(this.f45573r, mVar.f45573r) && Intrinsics.areEqual(this.f45574s, mVar.f45574s) && Intrinsics.areEqual(this.f45575t, mVar.f45575t) && Intrinsics.areEqual(this.f45576u, mVar.f45576u) && Intrinsics.areEqual(this.f45577v, mVar.f45577v) && Intrinsics.areEqual(this.f45578w, mVar.f45578w) && Intrinsics.areEqual(this.f45579x, mVar.f45579x) && Intrinsics.areEqual(this.f45580y, mVar.f45580y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f45567d.hashCode() * 31) + this.f45568e.hashCode()) * 31) + this.f45569i.hashCode()) * 31) + this.f45570o.hashCode()) * 31) + this.f45571p.hashCode()) * 31) + this.f45572q.hashCode()) * 31) + this.f45573r.hashCode()) * 31) + this.f45574s.hashCode()) * 31) + this.f45575t.hashCode()) * 31) + this.f45576u.hashCode()) * 31) + this.f45577v.hashCode()) * 31) + this.f45578w.hashCode()) * 31) + this.f45579x.hashCode()) * 31) + this.f45580y.hashCode();
    }

    public String toString() {
        String str = this.f45567d;
        String str2 = this.f45568e;
        String str3 = this.f45569i;
        String str4 = this.f45570o;
        String str5 = this.f45571p;
        String str6 = this.f45572q;
        String str7 = this.f45573r;
        String str8 = this.f45574s;
        String str9 = this.f45575t;
        String str10 = this.f45576u;
        String str11 = this.f45577v;
        String str12 = this.f45578w;
        String str13 = this.f45579x;
        String str14 = this.f45580y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f45567d);
        dest.writeString(this.f45568e);
        dest.writeString(this.f45569i);
        dest.writeString(this.f45570o);
        dest.writeString(this.f45571p);
        dest.writeString(this.f45572q);
        dest.writeString(this.f45573r);
        dest.writeString(this.f45574s);
        dest.writeString(this.f45575t);
        dest.writeString(this.f45576u);
        dest.writeString(this.f45577v);
        dest.writeString(this.f45578w);
        dest.writeString(this.f45579x);
        dest.writeString(this.f45580y);
    }
}
