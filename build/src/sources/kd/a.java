package kd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import oe.h0;
import oe.w0;
import pi.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0444a();

    /* renamed from: d  reason: collision with root package name */
    public final int f31685d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31686e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31687i;

    /* renamed from: o  reason: collision with root package name */
    public final int f31688o;

    /* renamed from: p  reason: collision with root package name */
    public final int f31689p;

    /* renamed from: q  reason: collision with root package name */
    public final int f31690q;

    /* renamed from: r  reason: collision with root package name */
    public final int f31691r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f31692s;

    /* renamed from: kd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0444a implements Parcelable.Creator {
        C0444a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(int i10, String str, String str2, int i11, int i12, int i13, int i14, byte[] bArr) {
        this.f31685d = i10;
        this.f31686e = str;
        this.f31687i = str2;
        this.f31688o = i11;
        this.f31689p = i12;
        this.f31690q = i13;
        this.f31691r = i14;
        this.f31692s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f42735a);
        String E = h0Var.E(h0Var.q());
        int q11 = h0Var.q();
        int q12 = h0Var.q();
        int q13 = h0Var.q();
        int q14 = h0Var.q();
        int q15 = h0Var.q();
        byte[] bArr = new byte[q15];
        h0Var.l(bArr, 0, q15);
        return new a(q10, F, E, q11, q12, q13, q14, bArr);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f31685d == aVar.f31685d && this.f31686e.equals(aVar.f31686e) && this.f31687i.equals(aVar.f31687i) && this.f31688o == aVar.f31688o && this.f31689p == aVar.f31689p && this.f31690q == aVar.f31690q && this.f31691r == aVar.f31691r && Arrays.equals(this.f31692s, aVar.f31692s)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void f1(MediaMetadata.b bVar) {
        bVar.I(this.f31692s, this.f31685d);
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f31685d) * 31) + this.f31686e.hashCode()) * 31) + this.f31687i.hashCode()) * 31) + this.f31688o) * 31) + this.f31689p) * 31) + this.f31690q) * 31) + this.f31691r) * 31) + Arrays.hashCode(this.f31692s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f31686e + ", description=" + this.f31687i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f31685d);
        parcel.writeString(this.f31686e);
        parcel.writeString(this.f31687i);
        parcel.writeInt(this.f31688o);
        parcel.writeInt(this.f31689p);
        parcel.writeInt(this.f31690q);
        parcel.writeInt(this.f31691r);
        parcel.writeByteArray(this.f31692s);
    }

    a(Parcel parcel) {
        this.f31685d = parcel.readInt();
        this.f31686e = (String) w0.j(parcel.readString());
        this.f31687i = (String) w0.j(parcel.readString());
        this.f31688o = parcel.readInt();
        this.f31689p = parcel.readInt();
        this.f31690q = parcel.readInt();
        this.f31691r = parcel.readInt();
        this.f31692s = (byte[]) w0.j(parcel.createByteArray());
    }
}
