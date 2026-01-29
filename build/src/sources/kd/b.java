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
    public final int f33072d;

    /* renamed from: e  reason: collision with root package name */
    public final String f33073e;

    /* renamed from: i  reason: collision with root package name */
    public final String f33074i;

    /* renamed from: o  reason: collision with root package name */
    public final String f33075o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f33076p;

    /* renamed from: q  reason: collision with root package name */
    public final int f33077q;

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
        this.f33072d = i10;
        this.f33073e = str;
        this.f33074i = str2;
        this.f33075o = str3;
        this.f33076p = z10;
        this.f33077q = i11;
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

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        String str = this.f33074i;
        if (str != null) {
            bVar.k0(str);
        }
        String str2 = this.f33073e;
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
            if (this.f33072d == bVar.f33072d && w0.c(this.f33073e, bVar.f33073e) && w0.c(this.f33074i, bVar.f33074i) && w0.c(this.f33075o, bVar.f33075o) && this.f33076p == bVar.f33076p && this.f33077q == bVar.f33077q) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (527 + this.f33072d) * 31;
        String str = this.f33073e;
        int i13 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i14 = (i12 + i10) * 31;
        String str2 = this.f33074i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i15 = (i14 + i11) * 31;
        String str3 = this.f33075o;
        if (str3 != null) {
            i13 = str3.hashCode();
        }
        return ((((i15 + i13) * 31) + (this.f33076p ? 1 : 0)) * 31) + this.f33077q;
    }

    public String toString() {
        return "IcyHeaders: name=\"" + this.f33074i + "\", genre=\"" + this.f33073e + "\", bitrate=" + this.f33072d + ", metadataInterval=" + this.f33077q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f33072d);
        parcel.writeString(this.f33073e);
        parcel.writeString(this.f33074i);
        parcel.writeString(this.f33075o);
        w0.q1(parcel, this.f33076p);
        parcel.writeInt(this.f33077q);
    }

    b(Parcel parcel) {
        this.f33072d = parcel.readInt();
        this.f33073e = parcel.readString();
        this.f33074i = parcel.readString();
        this.f33075o = parcel.readString();
        this.f33076p = w0.U0(parcel);
        this.f33077q = parcel.readInt();
    }
}
