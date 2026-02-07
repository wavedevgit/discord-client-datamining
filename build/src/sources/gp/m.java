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
    private final String f25514d;

    /* renamed from: e  reason: collision with root package name */
    private final String f25515e;

    /* renamed from: i  reason: collision with root package name */
    private final String f25516i;

    /* renamed from: o  reason: collision with root package name */
    private final String f25517o;

    /* renamed from: p  reason: collision with root package name */
    private final String f25518p;

    /* renamed from: q  reason: collision with root package name */
    private final String f25519q;

    /* renamed from: r  reason: collision with root package name */
    private final String f25520r;

    /* renamed from: s  reason: collision with root package name */
    private final String f25521s;

    /* renamed from: t  reason: collision with root package name */
    private final String f25522t;

    /* renamed from: u  reason: collision with root package name */
    private final String f25523u;

    /* renamed from: v  reason: collision with root package name */
    private final String f25524v;

    /* renamed from: w  reason: collision with root package name */
    private final String f25525w;

    /* renamed from: x  reason: collision with root package name */
    private final String f25526x;

    /* renamed from: y  reason: collision with root package name */
    private final String f25527y;

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
        this.f25514d = nfcScanPrompt;
        this.f25515e = authenticating;
        this.f25516i = reading;
        this.f25517o = cancelNfcScan;
        this.f25518p = nfcScanSuccess;
        this.f25519q = enablePassportNfcText;
        this.f25520r = enablePassportNfcConfirmButtonText;
        this.f25521s = enablePassportNfcCancelButtonText;
        this.f25522t = connectionLostText;
        this.f25523u = connectionLostConfirmButtonText;
        this.f25524v = authenticationErrorText;
        this.f25525w = authenticationErrorConfirmButtonText;
        this.f25526x = genericErrorText;
        this.f25527y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f25514d, mVar.f25514d) && Intrinsics.areEqual(this.f25515e, mVar.f25515e) && Intrinsics.areEqual(this.f25516i, mVar.f25516i) && Intrinsics.areEqual(this.f25517o, mVar.f25517o) && Intrinsics.areEqual(this.f25518p, mVar.f25518p) && Intrinsics.areEqual(this.f25519q, mVar.f25519q) && Intrinsics.areEqual(this.f25520r, mVar.f25520r) && Intrinsics.areEqual(this.f25521s, mVar.f25521s) && Intrinsics.areEqual(this.f25522t, mVar.f25522t) && Intrinsics.areEqual(this.f25523u, mVar.f25523u) && Intrinsics.areEqual(this.f25524v, mVar.f25524v) && Intrinsics.areEqual(this.f25525w, mVar.f25525w) && Intrinsics.areEqual(this.f25526x, mVar.f25526x) && Intrinsics.areEqual(this.f25527y, mVar.f25527y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f25514d.hashCode() * 31) + this.f25515e.hashCode()) * 31) + this.f25516i.hashCode()) * 31) + this.f25517o.hashCode()) * 31) + this.f25518p.hashCode()) * 31) + this.f25519q.hashCode()) * 31) + this.f25520r.hashCode()) * 31) + this.f25521s.hashCode()) * 31) + this.f25522t.hashCode()) * 31) + this.f25523u.hashCode()) * 31) + this.f25524v.hashCode()) * 31) + this.f25525w.hashCode()) * 31) + this.f25526x.hashCode()) * 31) + this.f25527y.hashCode();
    }

    public String toString() {
        String str = this.f25514d;
        String str2 = this.f25515e;
        String str3 = this.f25516i;
        String str4 = this.f25517o;
        String str5 = this.f25518p;
        String str6 = this.f25519q;
        String str7 = this.f25520r;
        String str8 = this.f25521s;
        String str9 = this.f25522t;
        String str10 = this.f25523u;
        String str11 = this.f25524v;
        String str12 = this.f25525w;
        String str13 = this.f25526x;
        String str14 = this.f25527y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f25514d);
        dest.writeString(this.f25515e);
        dest.writeString(this.f25516i);
        dest.writeString(this.f25517o);
        dest.writeString(this.f25518p);
        dest.writeString(this.f25519q);
        dest.writeString(this.f25520r);
        dest.writeString(this.f25521s);
        dest.writeString(this.f25522t);
        dest.writeString(this.f25523u);
        dest.writeString(this.f25524v);
        dest.writeString(this.f25525w);
        dest.writeString(this.f25526x);
        dest.writeString(this.f25527y);
    }
}
