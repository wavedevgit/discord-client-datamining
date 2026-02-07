package jd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import mi.d;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0418a();

    /* renamed from: d  reason: collision with root package name */
    public final int f29876d;

    /* renamed from: e  reason: collision with root package name */
    public final String f29877e;

    /* renamed from: i  reason: collision with root package name */
    public final String f29878i;

    /* renamed from: o  reason: collision with root package name */
    public final int f29879o;

    /* renamed from: p  reason: collision with root package name */
    public final int f29880p;

    /* renamed from: q  reason: collision with root package name */
    public final int f29881q;

    /* renamed from: r  reason: collision with root package name */
    public final int f29882r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f29883s;

    /* renamed from: jd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0418a implements Parcelable.Creator {
        C0418a() {
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
        this.f29876d = i10;
        this.f29877e = str;
        this.f29878i = str2;
        this.f29879o = i11;
        this.f29880p = i12;
        this.f29881q = i13;
        this.f29882r = i14;
        this.f29883s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f37217a);
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
        bVar.I(this.f29883s, this.f29876d);
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
            if (this.f29876d == aVar.f29876d && this.f29877e.equals(aVar.f29877e) && this.f29878i.equals(aVar.f29878i) && this.f29879o == aVar.f29879o && this.f29880p == aVar.f29880p && this.f29881q == aVar.f29881q && this.f29882r == aVar.f29882r && Arrays.equals(this.f29883s, aVar.f29883s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f29876d) * 31) + this.f29877e.hashCode()) * 31) + this.f29878i.hashCode()) * 31) + this.f29879o) * 31) + this.f29880p) * 31) + this.f29881q) * 31) + this.f29882r) * 31) + Arrays.hashCode(this.f29883s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f29877e + ", description=" + this.f29878i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f29876d);
        parcel.writeString(this.f29877e);
        parcel.writeString(this.f29878i);
        parcel.writeInt(this.f29879o);
        parcel.writeInt(this.f29880p);
        parcel.writeInt(this.f29881q);
        parcel.writeInt(this.f29882r);
        parcel.writeByteArray(this.f29883s);
    }

    a(Parcel parcel) {
        this.f29876d = parcel.readInt();
        this.f29877e = (String) w0.j(parcel.readString());
        this.f29878i = (String) w0.j(parcel.readString());
        this.f29879o = parcel.readInt();
        this.f29880p = parcel.readInt();
        this.f29881q = parcel.readInt();
        this.f29882r = parcel.readInt();
        this.f29883s = (byte[]) w0.j(parcel.createByteArray());
    }
}
