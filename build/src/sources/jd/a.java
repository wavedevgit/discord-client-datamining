package jd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import li.d;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0428a();

    /* renamed from: d  reason: collision with root package name */
    public final int f30855d;

    /* renamed from: e  reason: collision with root package name */
    public final String f30856e;

    /* renamed from: i  reason: collision with root package name */
    public final String f30857i;

    /* renamed from: o  reason: collision with root package name */
    public final int f30858o;

    /* renamed from: p  reason: collision with root package name */
    public final int f30859p;

    /* renamed from: q  reason: collision with root package name */
    public final int f30860q;

    /* renamed from: r  reason: collision with root package name */
    public final int f30861r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f30862s;

    /* renamed from: jd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0428a implements Parcelable.Creator {
        C0428a() {
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
        this.f30855d = i10;
        this.f30856e = str;
        this.f30857i = str2;
        this.f30858o = i11;
        this.f30859p = i12;
        this.f30860q = i13;
        this.f30861r = i14;
        this.f30862s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f36880a);
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
        bVar.I(this.f30862s, this.f30855d);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f30855d == aVar.f30855d && this.f30856e.equals(aVar.f30856e) && this.f30857i.equals(aVar.f30857i) && this.f30858o == aVar.f30858o && this.f30859p == aVar.f30859p && this.f30860q == aVar.f30860q && this.f30861r == aVar.f30861r && Arrays.equals(this.f30862s, aVar.f30862s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f30855d) * 31) + this.f30856e.hashCode()) * 31) + this.f30857i.hashCode()) * 31) + this.f30858o) * 31) + this.f30859p) * 31) + this.f30860q) * 31) + this.f30861r) * 31) + Arrays.hashCode(this.f30862s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f30856e + ", description=" + this.f30857i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f30855d);
        parcel.writeString(this.f30856e);
        parcel.writeString(this.f30857i);
        parcel.writeInt(this.f30858o);
        parcel.writeInt(this.f30859p);
        parcel.writeInt(this.f30860q);
        parcel.writeInt(this.f30861r);
        parcel.writeByteArray(this.f30862s);
    }

    a(Parcel parcel) {
        this.f30855d = parcel.readInt();
        this.f30856e = (String) w0.j(parcel.readString());
        this.f30857i = (String) w0.j(parcel.readString());
        this.f30858o = parcel.readInt();
        this.f30859p = parcel.readInt();
        this.f30860q = parcel.readInt();
        this.f30861r = parcel.readInt();
        this.f30862s = (byte[]) w0.j(parcel.createByteArray());
    }
}
