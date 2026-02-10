package ld;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final int f35807d;

    /* renamed from: e  reason: collision with root package name */
    public final String f35808e;

    /* renamed from: i  reason: collision with root package name */
    public final String f35809i;

    /* renamed from: o  reason: collision with root package name */
    public final String f35810o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f35811p;

    /* renamed from: q  reason: collision with root package name */
    public final int f35812q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public b createFromParcel(Parcel parcel) {
            return new b(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public b[] newArray(int i10) {
            return new b[i10];
        }
    }

    public b(int i10, String str, String str2, String str3, boolean z10, int i11) {
        oe.a.a(i11 == -1 || i11 > 0);
        this.f35807d = i10;
        this.f35808e = str;
        this.f35809i = str2;
        this.f35810o = str3;
        this.f35811p = z10;
        this.f35812q = i11;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:17:0x005d  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0067  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x0072  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x007b  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0086  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x008f  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x009a  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x00a9  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00b4  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x00ee  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static ld.b a(java.util.Map r13) {
        /*
            Method dump skipped, instructions count: 245
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ld.b.a(java.util.Map):ld.b");
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void a1(MediaMetadata.b bVar) {
        String str = this.f35809i;
        if (str != null) {
            bVar.k0(str);
        }
        String str2 = this.f35808e;
        if (str2 != null) {
            bVar.Z(str2);
        }
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f35807d == bVar.f35807d && w0.c(this.f35808e, bVar.f35808e) && w0.c(this.f35809i, bVar.f35809i) && w0.c(this.f35810o, bVar.f35810o) && this.f35811p == bVar.f35811p && this.f35812q == bVar.f35812q) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (527 + this.f35807d) * 31;
        String str = this.f35808e;
        int i13 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i14 = (i12 + i10) * 31;
        String str2 = this.f35809i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i15 = (i14 + i11) * 31;
        String str3 = this.f35810o;
        if (str3 != null) {
            i13 = str3.hashCode();
        }
        return ((((i15 + i13) * 31) + (this.f35811p ? 1 : 0)) * 31) + this.f35812q;
    }

    public String toString() {
        return "IcyHeaders: name=\"" + this.f35809i + "\", genre=\"" + this.f35808e + "\", bitrate=" + this.f35807d + ", metadataInterval=" + this.f35812q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f35807d);
        parcel.writeString(this.f35808e);
        parcel.writeString(this.f35809i);
        parcel.writeString(this.f35810o);
        w0.q1(parcel, this.f35811p);
        parcel.writeInt(this.f35812q);
    }

    b(Parcel parcel) {
        this.f35807d = parcel.readInt();
        this.f35808e = parcel.readString();
        this.f35809i = parcel.readString();
        this.f35810o = parcel.readString();
        this.f35811p = w0.U0(parcel);
        this.f35812q = parcel.readInt();
    }
}
