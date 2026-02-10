package kd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ni.d;
import oe.h0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0464a();

    /* renamed from: d  reason: collision with root package name */
    public final int f30827d;

    /* renamed from: e  reason: collision with root package name */
    public final String f30828e;

    /* renamed from: i  reason: collision with root package name */
    public final String f30829i;

    /* renamed from: o  reason: collision with root package name */
    public final int f30830o;

    /* renamed from: p  reason: collision with root package name */
    public final int f30831p;

    /* renamed from: q  reason: collision with root package name */
    public final int f30832q;

    /* renamed from: r  reason: collision with root package name */
    public final int f30833r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f30834s;

    /* renamed from: kd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0464a implements Parcelable.Creator {
        C0464a() {
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
        this.f30827d = i10;
        this.f30828e = str;
        this.f30829i = str2;
        this.f30830o = i11;
        this.f30831p = i12;
        this.f30832q = i13;
        this.f30833r = i14;
        this.f30834s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f38902a);
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
    public void a1(MediaMetadata.b bVar) {
        bVar.I(this.f30834s, this.f30827d);
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
            if (this.f30827d == aVar.f30827d && this.f30828e.equals(aVar.f30828e) && this.f30829i.equals(aVar.f30829i) && this.f30830o == aVar.f30830o && this.f30831p == aVar.f30831p && this.f30832q == aVar.f30832q && this.f30833r == aVar.f30833r && Arrays.equals(this.f30834s, aVar.f30834s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f30827d) * 31) + this.f30828e.hashCode()) * 31) + this.f30829i.hashCode()) * 31) + this.f30830o) * 31) + this.f30831p) * 31) + this.f30832q) * 31) + this.f30833r) * 31) + Arrays.hashCode(this.f30834s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f30828e + ", description=" + this.f30829i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f30827d);
        parcel.writeString(this.f30828e);
        parcel.writeString(this.f30829i);
        parcel.writeInt(this.f30830o);
        parcel.writeInt(this.f30831p);
        parcel.writeInt(this.f30832q);
        parcel.writeInt(this.f30833r);
        parcel.writeByteArray(this.f30834s);
    }

    a(Parcel parcel) {
        this.f30827d = parcel.readInt();
        this.f30828e = (String) w0.j(parcel.readString());
        this.f30829i = (String) w0.j(parcel.readString());
        this.f30830o = parcel.readInt();
        this.f30831p = parcel.readInt();
        this.f30832q = parcel.readInt();
        this.f30833r = parcel.readInt();
        this.f30834s = (byte[]) w0.j(parcel.createByteArray());
    }
}
