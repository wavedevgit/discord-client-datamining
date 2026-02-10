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
    private final String f45566d;

    /* renamed from: e  reason: collision with root package name */
    private final String f45567e;

    /* renamed from: i  reason: collision with root package name */
    private final String f45568i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45569o;

    /* renamed from: p  reason: collision with root package name */
    private final String f45570p;

    /* renamed from: q  reason: collision with root package name */
    private final String f45571q;

    /* renamed from: r  reason: collision with root package name */
    private final String f45572r;

    /* renamed from: s  reason: collision with root package name */
    private final String f45573s;

    /* renamed from: t  reason: collision with root package name */
    private final String f45574t;

    /* renamed from: u  reason: collision with root package name */
    private final String f45575u;

    /* renamed from: v  reason: collision with root package name */
    private final String f45576v;

    /* renamed from: w  reason: collision with root package name */
    private final String f45577w;

    /* renamed from: x  reason: collision with root package name */
    private final String f45578x;

    /* renamed from: y  reason: collision with root package name */
    private final String f45579y;

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
        this.f45566d = nfcScanPrompt;
        this.f45567e = authenticating;
        this.f45568i = reading;
        this.f45569o = cancelNfcScan;
        this.f45570p = nfcScanSuccess;
        this.f45571q = enablePassportNfcText;
        this.f45572r = enablePassportNfcConfirmButtonText;
        this.f45573s = enablePassportNfcCancelButtonText;
        this.f45574t = connectionLostText;
        this.f45575u = connectionLostConfirmButtonText;
        this.f45576v = authenticationErrorText;
        this.f45577w = authenticationErrorConfirmButtonText;
        this.f45578x = genericErrorText;
        this.f45579y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f45566d, mVar.f45566d) && Intrinsics.areEqual(this.f45567e, mVar.f45567e) && Intrinsics.areEqual(this.f45568i, mVar.f45568i) && Intrinsics.areEqual(this.f45569o, mVar.f45569o) && Intrinsics.areEqual(this.f45570p, mVar.f45570p) && Intrinsics.areEqual(this.f45571q, mVar.f45571q) && Intrinsics.areEqual(this.f45572r, mVar.f45572r) && Intrinsics.areEqual(this.f45573s, mVar.f45573s) && Intrinsics.areEqual(this.f45574t, mVar.f45574t) && Intrinsics.areEqual(this.f45575u, mVar.f45575u) && Intrinsics.areEqual(this.f45576v, mVar.f45576v) && Intrinsics.areEqual(this.f45577w, mVar.f45577w) && Intrinsics.areEqual(this.f45578x, mVar.f45578x) && Intrinsics.areEqual(this.f45579y, mVar.f45579y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f45566d.hashCode() * 31) + this.f45567e.hashCode()) * 31) + this.f45568i.hashCode()) * 31) + this.f45569o.hashCode()) * 31) + this.f45570p.hashCode()) * 31) + this.f45571q.hashCode()) * 31) + this.f45572r.hashCode()) * 31) + this.f45573s.hashCode()) * 31) + this.f45574t.hashCode()) * 31) + this.f45575u.hashCode()) * 31) + this.f45576v.hashCode()) * 31) + this.f45577w.hashCode()) * 31) + this.f45578x.hashCode()) * 31) + this.f45579y.hashCode();
    }

    public String toString() {
        String str = this.f45566d;
        String str2 = this.f45567e;
        String str3 = this.f45568i;
        String str4 = this.f45569o;
        String str5 = this.f45570p;
        String str6 = this.f45571q;
        String str7 = this.f45572r;
        String str8 = this.f45573s;
        String str9 = this.f45574t;
        String str10 = this.f45575u;
        String str11 = this.f45576v;
        String str12 = this.f45577w;
        String str13 = this.f45578x;
        String str14 = this.f45579y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f45566d);
        dest.writeString(this.f45567e);
        dest.writeString(this.f45568i);
        dest.writeString(this.f45569o);
        dest.writeString(this.f45570p);
        dest.writeString(this.f45571q);
        dest.writeString(this.f45572r);
        dest.writeString(this.f45573s);
        dest.writeString(this.f45574t);
        dest.writeString(this.f45575u);
        dest.writeString(this.f45576v);
        dest.writeString(this.f45577w);
        dest.writeString(this.f45578x);
        dest.writeString(this.f45579y);
    }
}
