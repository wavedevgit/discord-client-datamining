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
    public static final Parcelable.Creator<a> CREATOR = new C0426a();

    /* renamed from: d  reason: collision with root package name */
    public final int f31710d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31711e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31712i;

    /* renamed from: o  reason: collision with root package name */
    public final int f31713o;

    /* renamed from: p  reason: collision with root package name */
    public final int f31714p;

    /* renamed from: q  reason: collision with root package name */
    public final int f31715q;

    /* renamed from: r  reason: collision with root package name */
    public final int f31716r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f31717s;

    /* renamed from: jd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0426a implements Parcelable.Creator {
        C0426a() {
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
        this.f31710d = i10;
        this.f31711e = str;
        this.f31712i = str2;
        this.f31713o = i11;
        this.f31714p = i12;
        this.f31715q = i13;
        this.f31716r = i14;
        this.f31717s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f28182a);
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

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void e1(MediaMetadata.b bVar) {
        bVar.I(this.f31717s, this.f31710d);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f31710d == aVar.f31710d && this.f31711e.equals(aVar.f31711e) && this.f31712i.equals(aVar.f31712i) && this.f31713o == aVar.f31713o && this.f31714p == aVar.f31714p && this.f31715q == aVar.f31715q && this.f31716r == aVar.f31716r && Arrays.equals(this.f31717s, aVar.f31717s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f31710d) * 31) + this.f31711e.hashCode()) * 31) + this.f31712i.hashCode()) * 31) + this.f31713o) * 31) + this.f31714p) * 31) + this.f31715q) * 31) + this.f31716r) * 31) + Arrays.hashCode(this.f31717s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f31711e + ", description=" + this.f31712i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f31710d);
        parcel.writeString(this.f31711e);
        parcel.writeString(this.f31712i);
        parcel.writeInt(this.f31713o);
        parcel.writeInt(this.f31714p);
        parcel.writeInt(this.f31715q);
        parcel.writeInt(this.f31716r);
        parcel.writeByteArray(this.f31717s);
    }

    a(Parcel parcel) {
        this.f31710d = parcel.readInt();
        this.f31711e = (String) w0.j(parcel.readString());
        this.f31712i = (String) w0.j(parcel.readString());
        this.f31713o = parcel.readInt();
        this.f31714p = parcel.readInt();
        this.f31715q = parcel.readInt();
        this.f31716r = parcel.readInt();
        this.f31717s = (byte[]) w0.j(parcel.createByteArray());
    }
}
