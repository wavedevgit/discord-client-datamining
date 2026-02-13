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
    public final int f32254d;

    /* renamed from: e  reason: collision with root package name */
    public final String f32255e;

    /* renamed from: i  reason: collision with root package name */
    public final String f32256i;

    /* renamed from: o  reason: collision with root package name */
    public final int f32257o;

    /* renamed from: p  reason: collision with root package name */
    public final int f32258p;

    /* renamed from: q  reason: collision with root package name */
    public final int f32259q;

    /* renamed from: r  reason: collision with root package name */
    public final int f32260r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f32261s;

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
        this.f32254d = i10;
        this.f32255e = str;
        this.f32256i = str2;
        this.f32257o = i11;
        this.f32258p = i12;
        this.f32259q = i13;
        this.f32260r = i14;
        this.f32261s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f43304a);
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
            if (this.f32254d == aVar.f32254d && this.f32255e.equals(aVar.f32255e) && this.f32256i.equals(aVar.f32256i) && this.f32257o == aVar.f32257o && this.f32258p == aVar.f32258p && this.f32259q == aVar.f32259q && this.f32260r == aVar.f32260r && Arrays.equals(this.f32261s, aVar.f32261s)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void f1(MediaMetadata.b bVar) {
        bVar.I(this.f32261s, this.f32254d);
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f32254d) * 31) + this.f32255e.hashCode()) * 31) + this.f32256i.hashCode()) * 31) + this.f32257o) * 31) + this.f32258p) * 31) + this.f32259q) * 31) + this.f32260r) * 31) + Arrays.hashCode(this.f32261s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f32255e + ", description=" + this.f32256i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f32254d);
        parcel.writeString(this.f32255e);
        parcel.writeString(this.f32256i);
        parcel.writeInt(this.f32257o);
        parcel.writeInt(this.f32258p);
        parcel.writeInt(this.f32259q);
        parcel.writeInt(this.f32260r);
        parcel.writeByteArray(this.f32261s);
    }

    a(Parcel parcel) {
        this.f32254d = parcel.readInt();
        this.f32255e = (String) w0.j(parcel.readString());
        this.f32256i = (String) w0.j(parcel.readString());
        this.f32257o = parcel.readInt();
        this.f32258p = parcel.readInt();
        this.f32259q = parcel.readInt();
        this.f32260r = parcel.readInt();
        this.f32261s = (byte[]) w0.j(parcel.createByteArray());
    }
}
