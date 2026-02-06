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
    public final int f29828d;

    /* renamed from: e  reason: collision with root package name */
    public final String f29829e;

    /* renamed from: i  reason: collision with root package name */
    public final String f29830i;

    /* renamed from: o  reason: collision with root package name */
    public final int f29831o;

    /* renamed from: p  reason: collision with root package name */
    public final int f29832p;

    /* renamed from: q  reason: collision with root package name */
    public final int f29833q;

    /* renamed from: r  reason: collision with root package name */
    public final int f29834r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f29835s;

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
        this.f29828d = i10;
        this.f29829e = str;
        this.f29830i = str2;
        this.f29831o = i11;
        this.f29832p = i12;
        this.f29833q = i13;
        this.f29834r = i14;
        this.f29835s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f37169a);
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
        bVar.I(this.f29835s, this.f29828d);
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
            if (this.f29828d == aVar.f29828d && this.f29829e.equals(aVar.f29829e) && this.f29830i.equals(aVar.f29830i) && this.f29831o == aVar.f29831o && this.f29832p == aVar.f29832p && this.f29833q == aVar.f29833q && this.f29834r == aVar.f29834r && Arrays.equals(this.f29835s, aVar.f29835s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f29828d) * 31) + this.f29829e.hashCode()) * 31) + this.f29830i.hashCode()) * 31) + this.f29831o) * 31) + this.f29832p) * 31) + this.f29833q) * 31) + this.f29834r) * 31) + Arrays.hashCode(this.f29835s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f29829e + ", description=" + this.f29830i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f29828d);
        parcel.writeString(this.f29829e);
        parcel.writeString(this.f29830i);
        parcel.writeInt(this.f29831o);
        parcel.writeInt(this.f29832p);
        parcel.writeInt(this.f29833q);
        parcel.writeInt(this.f29834r);
        parcel.writeByteArray(this.f29835s);
    }

    a(Parcel parcel) {
        this.f29828d = parcel.readInt();
        this.f29829e = (String) w0.j(parcel.readString());
        this.f29830i = (String) w0.j(parcel.readString());
        this.f29831o = parcel.readInt();
        this.f29832p = parcel.readInt();
        this.f29833q = parcel.readInt();
        this.f29834r = parcel.readInt();
        this.f29835s = (byte[]) w0.j(parcel.createByteArray());
    }
}
