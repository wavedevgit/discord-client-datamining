package hp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f26425d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26426e;

    /* renamed from: i  reason: collision with root package name */
    private final String f26427i;

    /* renamed from: o  reason: collision with root package name */
    private final String f26428o;

    /* renamed from: p  reason: collision with root package name */
    private final String f26429p;

    /* renamed from: q  reason: collision with root package name */
    private final String f26430q;

    /* renamed from: r  reason: collision with root package name */
    private final String f26431r;

    /* renamed from: s  reason: collision with root package name */
    private final String f26432s;

    /* renamed from: t  reason: collision with root package name */
    private final String f26433t;

    /* renamed from: u  reason: collision with root package name */
    private final String f26434u;

    /* renamed from: v  reason: collision with root package name */
    private final String f26435v;

    /* renamed from: w  reason: collision with root package name */
    private final String f26436w;

    /* renamed from: x  reason: collision with root package name */
    private final String f26437x;

    /* renamed from: y  reason: collision with root package name */
    private final String f26438y;

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
        this.f26425d = nfcScanPrompt;
        this.f26426e = authenticating;
        this.f26427i = reading;
        this.f26428o = cancelNfcScan;
        this.f26429p = nfcScanSuccess;
        this.f26430q = enablePassportNfcText;
        this.f26431r = enablePassportNfcConfirmButtonText;
        this.f26432s = enablePassportNfcCancelButtonText;
        this.f26433t = connectionLostText;
        this.f26434u = connectionLostConfirmButtonText;
        this.f26435v = authenticationErrorText;
        this.f26436w = authenticationErrorConfirmButtonText;
        this.f26437x = genericErrorText;
        this.f26438y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f26425d, mVar.f26425d) && Intrinsics.areEqual(this.f26426e, mVar.f26426e) && Intrinsics.areEqual(this.f26427i, mVar.f26427i) && Intrinsics.areEqual(this.f26428o, mVar.f26428o) && Intrinsics.areEqual(this.f26429p, mVar.f26429p) && Intrinsics.areEqual(this.f26430q, mVar.f26430q) && Intrinsics.areEqual(this.f26431r, mVar.f26431r) && Intrinsics.areEqual(this.f26432s, mVar.f26432s) && Intrinsics.areEqual(this.f26433t, mVar.f26433t) && Intrinsics.areEqual(this.f26434u, mVar.f26434u) && Intrinsics.areEqual(this.f26435v, mVar.f26435v) && Intrinsics.areEqual(this.f26436w, mVar.f26436w) && Intrinsics.areEqual(this.f26437x, mVar.f26437x) && Intrinsics.areEqual(this.f26438y, mVar.f26438y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f26425d.hashCode() * 31) + this.f26426e.hashCode()) * 31) + this.f26427i.hashCode()) * 31) + this.f26428o.hashCode()) * 31) + this.f26429p.hashCode()) * 31) + this.f26430q.hashCode()) * 31) + this.f26431r.hashCode()) * 31) + this.f26432s.hashCode()) * 31) + this.f26433t.hashCode()) * 31) + this.f26434u.hashCode()) * 31) + this.f26435v.hashCode()) * 31) + this.f26436w.hashCode()) * 31) + this.f26437x.hashCode()) * 31) + this.f26438y.hashCode();
    }

    public String toString() {
        String str = this.f26425d;
        String str2 = this.f26426e;
        String str3 = this.f26427i;
        String str4 = this.f26428o;
        String str5 = this.f26429p;
        String str6 = this.f26430q;
        String str7 = this.f26431r;
        String str8 = this.f26432s;
        String str9 = this.f26433t;
        String str10 = this.f26434u;
        String str11 = this.f26435v;
        String str12 = this.f26436w;
        String str13 = this.f26437x;
        String str14 = this.f26438y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f26425d);
        dest.writeString(this.f26426e);
        dest.writeString(this.f26427i);
        dest.writeString(this.f26428o);
        dest.writeString(this.f26429p);
        dest.writeString(this.f26430q);
        dest.writeString(this.f26431r);
        dest.writeString(this.f26432s);
        dest.writeString(this.f26433t);
        dest.writeString(this.f26434u);
        dest.writeString(this.f26435v);
        dest.writeString(this.f26436w);
        dest.writeString(this.f26437x);
        dest.writeString(this.f26438y);
    }
}
