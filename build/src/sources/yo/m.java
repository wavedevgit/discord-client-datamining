package yo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f54891d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54892e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54893i;

    /* renamed from: o  reason: collision with root package name */
    private final String f54894o;

    /* renamed from: p  reason: collision with root package name */
    private final String f54895p;

    /* renamed from: q  reason: collision with root package name */
    private final String f54896q;

    /* renamed from: r  reason: collision with root package name */
    private final String f54897r;

    /* renamed from: s  reason: collision with root package name */
    private final String f54898s;

    /* renamed from: t  reason: collision with root package name */
    private final String f54899t;

    /* renamed from: u  reason: collision with root package name */
    private final String f54900u;

    /* renamed from: v  reason: collision with root package name */
    private final String f54901v;

    /* renamed from: w  reason: collision with root package name */
    private final String f54902w;

    /* renamed from: x  reason: collision with root package name */
    private final String f54903x;

    /* renamed from: y  reason: collision with root package name */
    private final String f54904y;

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
        this.f54891d = nfcScanPrompt;
        this.f54892e = authenticating;
        this.f54893i = reading;
        this.f54894o = cancelNfcScan;
        this.f54895p = nfcScanSuccess;
        this.f54896q = enablePassportNfcText;
        this.f54897r = enablePassportNfcConfirmButtonText;
        this.f54898s = enablePassportNfcCancelButtonText;
        this.f54899t = connectionLostText;
        this.f54900u = connectionLostConfirmButtonText;
        this.f54901v = authenticationErrorText;
        this.f54902w = authenticationErrorConfirmButtonText;
        this.f54903x = genericErrorText;
        this.f54904y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f54891d, mVar.f54891d) && Intrinsics.areEqual(this.f54892e, mVar.f54892e) && Intrinsics.areEqual(this.f54893i, mVar.f54893i) && Intrinsics.areEqual(this.f54894o, mVar.f54894o) && Intrinsics.areEqual(this.f54895p, mVar.f54895p) && Intrinsics.areEqual(this.f54896q, mVar.f54896q) && Intrinsics.areEqual(this.f54897r, mVar.f54897r) && Intrinsics.areEqual(this.f54898s, mVar.f54898s) && Intrinsics.areEqual(this.f54899t, mVar.f54899t) && Intrinsics.areEqual(this.f54900u, mVar.f54900u) && Intrinsics.areEqual(this.f54901v, mVar.f54901v) && Intrinsics.areEqual(this.f54902w, mVar.f54902w) && Intrinsics.areEqual(this.f54903x, mVar.f54903x) && Intrinsics.areEqual(this.f54904y, mVar.f54904y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f54891d.hashCode() * 31) + this.f54892e.hashCode()) * 31) + this.f54893i.hashCode()) * 31) + this.f54894o.hashCode()) * 31) + this.f54895p.hashCode()) * 31) + this.f54896q.hashCode()) * 31) + this.f54897r.hashCode()) * 31) + this.f54898s.hashCode()) * 31) + this.f54899t.hashCode()) * 31) + this.f54900u.hashCode()) * 31) + this.f54901v.hashCode()) * 31) + this.f54902w.hashCode()) * 31) + this.f54903x.hashCode()) * 31) + this.f54904y.hashCode();
    }

    public String toString() {
        String str = this.f54891d;
        String str2 = this.f54892e;
        String str3 = this.f54893i;
        String str4 = this.f54894o;
        String str5 = this.f54895p;
        String str6 = this.f54896q;
        String str7 = this.f54897r;
        String str8 = this.f54898s;
        String str9 = this.f54899t;
        String str10 = this.f54900u;
        String str11 = this.f54901v;
        String str12 = this.f54902w;
        String str13 = this.f54903x;
        String str14 = this.f54904y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54891d);
        dest.writeString(this.f54892e);
        dest.writeString(this.f54893i);
        dest.writeString(this.f54894o);
        dest.writeString(this.f54895p);
        dest.writeString(this.f54896q);
        dest.writeString(this.f54897r);
        dest.writeString(this.f54898s);
        dest.writeString(this.f54899t);
        dest.writeString(this.f54900u);
        dest.writeString(this.f54901v);
        dest.writeString(this.f54902w);
        dest.writeString(this.f54903x);
        dest.writeString(this.f54904y);
    }
}
