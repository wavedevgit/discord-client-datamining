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
    private final String f54875d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54876e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54877i;

    /* renamed from: o  reason: collision with root package name */
    private final String f54878o;

    /* renamed from: p  reason: collision with root package name */
    private final String f54879p;

    /* renamed from: q  reason: collision with root package name */
    private final String f54880q;

    /* renamed from: r  reason: collision with root package name */
    private final String f54881r;

    /* renamed from: s  reason: collision with root package name */
    private final String f54882s;

    /* renamed from: t  reason: collision with root package name */
    private final String f54883t;

    /* renamed from: u  reason: collision with root package name */
    private final String f54884u;

    /* renamed from: v  reason: collision with root package name */
    private final String f54885v;

    /* renamed from: w  reason: collision with root package name */
    private final String f54886w;

    /* renamed from: x  reason: collision with root package name */
    private final String f54887x;

    /* renamed from: y  reason: collision with root package name */
    private final String f54888y;

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
        this.f54875d = nfcScanPrompt;
        this.f54876e = authenticating;
        this.f54877i = reading;
        this.f54878o = cancelNfcScan;
        this.f54879p = nfcScanSuccess;
        this.f54880q = enablePassportNfcText;
        this.f54881r = enablePassportNfcConfirmButtonText;
        this.f54882s = enablePassportNfcCancelButtonText;
        this.f54883t = connectionLostText;
        this.f54884u = connectionLostConfirmButtonText;
        this.f54885v = authenticationErrorText;
        this.f54886w = authenticationErrorConfirmButtonText;
        this.f54887x = genericErrorText;
        this.f54888y = genericErrorConfirmButtonText;
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
        if (Intrinsics.areEqual(this.f54875d, mVar.f54875d) && Intrinsics.areEqual(this.f54876e, mVar.f54876e) && Intrinsics.areEqual(this.f54877i, mVar.f54877i) && Intrinsics.areEqual(this.f54878o, mVar.f54878o) && Intrinsics.areEqual(this.f54879p, mVar.f54879p) && Intrinsics.areEqual(this.f54880q, mVar.f54880q) && Intrinsics.areEqual(this.f54881r, mVar.f54881r) && Intrinsics.areEqual(this.f54882s, mVar.f54882s) && Intrinsics.areEqual(this.f54883t, mVar.f54883t) && Intrinsics.areEqual(this.f54884u, mVar.f54884u) && Intrinsics.areEqual(this.f54885v, mVar.f54885v) && Intrinsics.areEqual(this.f54886w, mVar.f54886w) && Intrinsics.areEqual(this.f54887x, mVar.f54887x) && Intrinsics.areEqual(this.f54888y, mVar.f54888y)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.f54875d.hashCode() * 31) + this.f54876e.hashCode()) * 31) + this.f54877i.hashCode()) * 31) + this.f54878o.hashCode()) * 31) + this.f54879p.hashCode()) * 31) + this.f54880q.hashCode()) * 31) + this.f54881r.hashCode()) * 31) + this.f54882s.hashCode()) * 31) + this.f54883t.hashCode()) * 31) + this.f54884u.hashCode()) * 31) + this.f54885v.hashCode()) * 31) + this.f54886w.hashCode()) * 31) + this.f54887x.hashCode()) * 31) + this.f54888y.hashCode();
    }

    public String toString() {
        String str = this.f54875d;
        String str2 = this.f54876e;
        String str3 = this.f54877i;
        String str4 = this.f54878o;
        String str5 = this.f54879p;
        String str6 = this.f54880q;
        String str7 = this.f54881r;
        String str8 = this.f54882s;
        String str9 = this.f54883t;
        String str10 = this.f54884u;
        String str11 = this.f54885v;
        String str12 = this.f54886w;
        String str13 = this.f54887x;
        String str14 = this.f54888y;
        return "PassportNfcStrings(nfcScanPrompt=" + str + ", authenticating=" + str2 + ", reading=" + str3 + ", cancelNfcScan=" + str4 + ", nfcScanSuccess=" + str5 + ", enablePassportNfcText=" + str6 + ", enablePassportNfcConfirmButtonText=" + str7 + ", enablePassportNfcCancelButtonText=" + str8 + ", connectionLostText=" + str9 + ", connectionLostConfirmButtonText=" + str10 + ", authenticationErrorText=" + str11 + ", authenticationErrorConfirmButtonText=" + str12 + ", genericErrorText=" + str13 + ", genericErrorConfirmButtonText=" + str14 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54875d);
        dest.writeString(this.f54876e);
        dest.writeString(this.f54877i);
        dest.writeString(this.f54878o);
        dest.writeString(this.f54879p);
        dest.writeString(this.f54880q);
        dest.writeString(this.f54881r);
        dest.writeString(this.f54882s);
        dest.writeString(this.f54883t);
        dest.writeString(this.f54884u);
        dest.writeString(this.f54885v);
        dest.writeString(this.f54886w);
        dest.writeString(this.f54887x);
        dest.writeString(this.f54888y);
    }
}
