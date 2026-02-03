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
    public static final Parcelable.Creator<a> CREATOR = new C0416a();

    /* renamed from: d  reason: collision with root package name */
    public final int f31506d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31507e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31508i;

    /* renamed from: o  reason: collision with root package name */
    public final int f31509o;

    /* renamed from: p  reason: collision with root package name */
    public final int f31510p;

    /* renamed from: q  reason: collision with root package name */
    public final int f31511q;

    /* renamed from: r  reason: collision with root package name */
    public final int f31512r;

    /* renamed from: s  reason: collision with root package name */
    public final byte[] f31513s;

    /* renamed from: jd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0416a implements Parcelable.Creator {
        C0416a() {
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
        this.f31506d = i10;
        this.f31507e = str;
        this.f31508i = str2;
        this.f31509o = i11;
        this.f31510p = i12;
        this.f31511q = i13;
        this.f31512r = i14;
        this.f31513s = bArr;
    }

    public static a a(h0 h0Var) {
        int q10 = h0Var.q();
        String F = h0Var.F(h0Var.q(), d.f28405a);
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
        bVar.I(this.f31513s, this.f31506d);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f31506d == aVar.f31506d && this.f31507e.equals(aVar.f31507e) && this.f31508i.equals(aVar.f31508i) && this.f31509o == aVar.f31509o && this.f31510p == aVar.f31510p && this.f31511q == aVar.f31511q && this.f31512r == aVar.f31512r && Arrays.equals(this.f31513s, aVar.f31513s)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((527 + this.f31506d) * 31) + this.f31507e.hashCode()) * 31) + this.f31508i.hashCode()) * 31) + this.f31509o) * 31) + this.f31510p) * 31) + this.f31511q) * 31) + this.f31512r) * 31) + Arrays.hashCode(this.f31513s);
    }

    public String toString() {
        return "Picture: mimeType=" + this.f31507e + ", description=" + this.f31508i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f31506d);
        parcel.writeString(this.f31507e);
        parcel.writeString(this.f31508i);
        parcel.writeInt(this.f31509o);
        parcel.writeInt(this.f31510p);
        parcel.writeInt(this.f31511q);
        parcel.writeInt(this.f31512r);
        parcel.writeByteArray(this.f31513s);
    }

    a(Parcel parcel) {
        this.f31506d = parcel.readInt();
        this.f31507e = (String) w0.j(parcel.readString());
        this.f31508i = (String) w0.j(parcel.readString());
        this.f31509o = parcel.readInt();
        this.f31510p = parcel.readInt();
        this.f31511q = parcel.readInt();
        this.f31512r = parcel.readInt();
        this.f31513s = (byte[]) w0.j(parcel.createByteArray());
    }
}
