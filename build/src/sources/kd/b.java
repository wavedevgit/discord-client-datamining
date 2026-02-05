package kd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final int f31695d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31696e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31697i;

    /* renamed from: o  reason: collision with root package name */
    public final String f31698o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f31699p;

    /* renamed from: q  reason: collision with root package name */
    public final int f31700q;

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
        ne.a.a(i11 == -1 || i11 > 0);
        this.f31695d = i10;
        this.f31696e = str;
        this.f31697i = str2;
        this.f31698o = str3;
        this.f31699p = z10;
        this.f31700q = i11;
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
    public static kd.b a(java.util.Map r13) {
        /*
            Method dump skipped, instructions count: 245
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kd.b.a(java.util.Map):kd.b");
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void e1(MediaMetadata.b bVar) {
        String str = this.f31697i;
        if (str != null) {
            bVar.k0(str);
        }
        String str2 = this.f31696e;
        if (str2 != null) {
            bVar.Z(str2);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f31695d == bVar.f31695d && w0.c(this.f31696e, bVar.f31696e) && w0.c(this.f31697i, bVar.f31697i) && w0.c(this.f31698o, bVar.f31698o) && this.f31699p == bVar.f31699p && this.f31700q == bVar.f31700q) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (527 + this.f31695d) * 31;
        String str = this.f31696e;
        int i13 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i14 = (i12 + i10) * 31;
        String str2 = this.f31697i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i15 = (i14 + i11) * 31;
        String str3 = this.f31698o;
        if (str3 != null) {
            i13 = str3.hashCode();
        }
        return ((((i15 + i13) * 31) + (this.f31699p ? 1 : 0)) * 31) + this.f31700q;
    }

    public String toString() {
        return "IcyHeaders: name=\"" + this.f31697i + "\", genre=\"" + this.f31696e + "\", bitrate=" + this.f31695d + ", metadataInterval=" + this.f31700q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f31695d);
        parcel.writeString(this.f31696e);
        parcel.writeString(this.f31697i);
        parcel.writeString(this.f31698o);
        w0.q1(parcel, this.f31699p);
        parcel.writeInt(this.f31700q);
    }

    b(Parcel parcel) {
        this.f31695d = parcel.readInt();
        this.f31696e = parcel.readString();
        this.f31697i = parcel.readString();
        this.f31698o = parcel.readString();
        this.f31699p = w0.U0(parcel);
        this.f31700q = parcel.readInt();
    }
}
