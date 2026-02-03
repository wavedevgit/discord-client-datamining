package bp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f6685d;

    /* renamed from: e  reason: collision with root package name */
    private final String f6686e;

    /* renamed from: i  reason: collision with root package name */
    private final String f6687i;

    /* renamed from: o  reason: collision with root package name */
    private final String f6688o;

    /* renamed from: p  reason: collision with root package name */
    private final String f6689p;

    /* renamed from: q  reason: collision with root package name */
    private final String f6690q;

    /* renamed from: r  reason: collision with root package name */
    private final String f6691r;

    /* renamed from: s  reason: collision with root package name */
    private final String f6692s;

    /* renamed from: t  reason: collision with root package name */
    private final String f6693t;

    /* renamed from: u  reason: collision with root package name */
    private final String f6694u;

    /* renamed from: v  reason: collision with root package name */
    private final String f6695v;

    /* renamed from: w  reason: collision with root package name */
    private final String f6696w;

    /* renamed from: x  reason: collision with root package name */
    private final String f6697x;

    /* renamed from: y  reason: collision with root package name */
    private final String f6698y;

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
        this.f6685d = nfcScanPrompt;
        this.f6686e = authenticating;
        this.f6687i = reading;
        this.f6688o = cancelNfcScan;
        this.f6689p = nfcScanSuccess;
        this.f6690q = enablePassportNfcText;
        this.f6691r = enablePassportNfcConfirmButtonText;
        this.f6692s = enablePassportNfcCancelButtonText;
        this.f6693t = connectionLostText;
        this.f6694u = connectionLostConfirmButtonText;
        this.f6695v = authenticationErrorText;
        this.f6696w = authenticationErrorConfirmButtonText;
        this.f6697x = genericErrorText;
        this.f6698y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f6685d, mVar.f6685d) && Intrinsics.areEqual(this.f6686e, mVar.f6686e) && Intrinsics.areEqual(this.f6687i, mVar.f6687i) && Intrinsics.areEqual(this.f6688o, mVar.f6688o) && Intrinsics.areEqual(this.f6689p, mVar.f6689p) && Intrinsics.areEqual(this.f6690q, mVar.f6690q) && Intrinsics.areEqual(this.f6691r, mVar.f6691r) && Intrinsics.areEqual(this.f6692s, mVar.f6692s) && Intrinsics.areEqual(this.f6693t, mVar.f6693t) && Intrinsics.areEqual(this.f6694u, mVar.f6694u) && Intrinsics.areEqual(this.f6695v, mVar.f6695v) && Intrinsics.areEqual(this.f6696w, mVar.f6696w) && Intrinsics.areEqual(this.f6697x, mVar.f6697x) && Intrinsics.areEqual(this.f6698y, mVar.f6698y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f6685d.hashCode() * 31) + this.f6686e.hashCode()) * 31) + this.f6687i.hashCode()) * 31) + this.f6688o.hashCode()) * 31) + this.f6689p.hashCode()) * 31) + this.f6690q.hashCode()) * 31) + this.f6691r.hashCode()) * 31) + this.f6692s.hashCode()) * 31) + this.f6693t.hashCode()) * 31) + this.f6694u.hashCode()) * 31) + this.f6695v.hashCode()) * 31) + this.f6696w.hashCode()) * 31) + this.f6697x.hashCode()) * 31) + this.f6698y.hashCode();
    }

    public String toString() {
        String str = this.f6685d;
        String str2 = this.f6686e;
        String str3 = this.f6687i;
        String str4 = this.f6688o;
        String str5 = this.f6689p;
        String str6 = this.f6690q;
        String str7 = this.f6691r;
        String str8 = this.f6692s;
        String str9 = this.f6693t;
        String str10 = this.f6694u;
        String str11 = this.f6695v;
        String str12 = this.f6696w;
        String str13 = this.f6697x;
        String str14 = this.f6698y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f6685d);
        dest.writeString(this.f6686e);
        dest.writeString(this.f6687i);
        dest.writeString(this.f6688o);
        dest.writeString(this.f6689p);
        dest.writeString(this.f6690q);
        dest.writeString(this.f6691r);
        dest.writeString(this.f6692s);
        dest.writeString(this.f6693t);
        dest.writeString(this.f6694u);
        dest.writeString(this.f6695v);
        dest.writeString(this.f6696w);
        dest.writeString(this.f6697x);
        dest.writeString(this.f6698y);
    }
}
