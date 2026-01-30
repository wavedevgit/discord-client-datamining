package jd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import ii.d;
import java.util.Arrays;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0415a();

    /* renamed from: d  reason: collision with root package name */
    public final int f31972d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31973e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31974i;

    /* renamed from: o  reason: collision with root package name */
    public final int f31975o;

    /* renamed from: p  reason: collision with root package name */
    public final int f31976p;

    /* renamed from: q  reason: collision with root package name */
    public final int f31977q;

    /* renamed from: r  reason: collision with root package name */
    public final int f31978r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f31979s;

    /* renamed from: jd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0415a implements Parcelable.Creator {
        C0415a() {
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
        this.f31972d = i10;
        this.f31973e = str;
        this.f31974i = str2;
        this.f31975o = i11;
        this.f31976p = i12;
        this.f31977q = i13;
        this.f31978r = i14;
        this.f31979s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f28535a);
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

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        bVar.I(this.f31979s, this.f31972d);
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
            if (this.f31972d == aVar.f31972d && this.f31973e.equals(aVar.f31973e) && this.f31974i.equals(aVar.f31974i) && this.f31975o == aVar.f31975o && this.f31976p == aVar.f31976p && this.f31977q == aVar.f31977q && this.f31978r == aVar.f31978r && Arrays.equals(this.f31979s, aVar.f31979s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f31972d) * 31) + this.f31973e.hashCode()) * 31) + this.f31974i.hashCode()) * 31) + this.f31975o) * 31) + this.f31976p) * 31) + this.f31977q) * 31) + this.f31978r) * 31) + Arrays.hashCode(this.f31979s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f31973e + ", description=" + this.f31974i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f31972d);
        parcel.writeString(this.f31973e);
        parcel.writeString(this.f31974i);
        parcel.writeInt(this.f31975o);
        parcel.writeInt(this.f31976p);
        parcel.writeInt(this.f31977q);
        parcel.writeInt(this.f31978r);
        parcel.writeByteArray(this.f31979s);
    }

    a(Parcel parcel) {
        this.f31972d = parcel.readInt();
        this.f31973e = (String) w0.j(parcel.readString());
        this.f31974i = (String) w0.j(parcel.readString());
        this.f31975o = parcel.readInt();
        this.f31976p = parcel.readInt();
        this.f31977q = parcel.readInt();
        this.f31978r = parcel.readInt();
        this.f31979s = (byte[]) w0.j(parcel.createByteArray());
    }
}
