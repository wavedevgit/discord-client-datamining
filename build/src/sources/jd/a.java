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
    public final int f31956d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31957e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31958i;

    /* renamed from: o  reason: collision with root package name */
    public final int f31959o;

    /* renamed from: p  reason: collision with root package name */
    public final int f31960p;

    /* renamed from: q  reason: collision with root package name */
    public final int f31961q;

    /* renamed from: r  reason: collision with root package name */
    public final int f31962r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f31963s;

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
        this.f31956d = i10;
        this.f31957e = str;
        this.f31958i = str2;
        this.f31959o = i11;
        this.f31960p = i12;
        this.f31961q = i13;
        this.f31962r = i14;
        this.f31963s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f28519a);
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
        bVar.I(this.f31963s, this.f31956d);
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
            if (this.f31956d == aVar.f31956d && this.f31957e.equals(aVar.f31957e) && this.f31958i.equals(aVar.f31958i) && this.f31959o == aVar.f31959o && this.f31960p == aVar.f31960p && this.f31961q == aVar.f31961q && this.f31962r == aVar.f31962r && Arrays.equals(this.f31963s, aVar.f31963s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f31956d) * 31) + this.f31957e.hashCode()) * 31) + this.f31958i.hashCode()) * 31) + this.f31959o) * 31) + this.f31960p) * 31) + this.f31961q) * 31) + this.f31962r) * 31) + Arrays.hashCode(this.f31963s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f31957e + ", description=" + this.f31958i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f31956d);
        parcel.writeString(this.f31957e);
        parcel.writeString(this.f31958i);
        parcel.writeInt(this.f31959o);
        parcel.writeInt(this.f31960p);
        parcel.writeInt(this.f31961q);
        parcel.writeInt(this.f31962r);
        parcel.writeByteArray(this.f31963s);
    }

    a(Parcel parcel) {
        this.f31956d = parcel.readInt();
        this.f31957e = (String) w0.j(parcel.readString());
        this.f31958i = (String) w0.j(parcel.readString());
        this.f31959o = parcel.readInt();
        this.f31960p = parcel.readInt();
        this.f31961q = parcel.readInt();
        this.f31962r = parcel.readInt();
        this.f31963s = (byte[]) w0.j(parcel.createByteArray());
    }
}
