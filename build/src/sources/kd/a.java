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
    public final int f31686d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31687e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31688i;

    /* renamed from: o  reason: collision with root package name */
    public final int f31689o;

    /* renamed from: p  reason: collision with root package name */
    public final int f31690p;

    /* renamed from: q  reason: collision with root package name */
    public final int f31691q;

    /* renamed from: r  reason: collision with root package name */
    public final int f31692r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f31693s;

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
        this.f31686d = i10;
        this.f31687e = str;
        this.f31688i = str2;
        this.f31689o = i11;
        this.f31690p = i12;
        this.f31691q = i13;
        this.f31692r = i14;
        this.f31693s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f42736a);
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
            if (this.f31686d == aVar.f31686d && this.f31687e.equals(aVar.f31687e) && this.f31688i.equals(aVar.f31688i) && this.f31689o == aVar.f31689o && this.f31690p == aVar.f31690p && this.f31691q == aVar.f31691q && this.f31692r == aVar.f31692r && Arrays.equals(this.f31693s, aVar.f31693s)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void f1(MediaMetadata.b bVar) {
        bVar.I(this.f31693s, this.f31686d);
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f31686d) * 31) + this.f31687e.hashCode()) * 31) + this.f31688i.hashCode()) * 31) + this.f31689o) * 31) + this.f31690p) * 31) + this.f31691q) * 31) + this.f31692r) * 31) + Arrays.hashCode(this.f31693s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f31687e + ", description=" + this.f31688i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f31686d);
        parcel.writeString(this.f31687e);
        parcel.writeString(this.f31688i);
        parcel.writeInt(this.f31689o);
        parcel.writeInt(this.f31690p);
        parcel.writeInt(this.f31691q);
        parcel.writeInt(this.f31692r);
        parcel.writeByteArray(this.f31693s);
    }

    a(Parcel parcel) {
        this.f31686d = parcel.readInt();
        this.f31687e = (String) w0.j(parcel.readString());
        this.f31688i = (String) w0.j(parcel.readString());
        this.f31689o = parcel.readInt();
        this.f31690p = parcel.readInt();
        this.f31691q = parcel.readInt();
        this.f31692r = parcel.readInt();
        this.f31693s = (byte[]) w0.j(parcel.createByteArray());
    }
}
