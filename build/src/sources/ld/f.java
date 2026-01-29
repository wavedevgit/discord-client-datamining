package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37133e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37134i;

    /* renamed from: o  reason: collision with root package name */
    public final String f37135o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f37136p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public f createFromParcel(Parcel parcel) {
            return new f(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public f[] newArray(int i10) {
            return new f[i10];
        }
    }

    public f(String str, String str2, String str3, byte[] bArr) {
        super("GEOB");
        this.f37133e = str;
        this.f37134i = str2;
        this.f37135o = str3;
        this.f37136p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f37133e, fVar.f37133e) && w0.c(this.f37134i, fVar.f37134i) && w0.c(this.f37135o, fVar.f37135o) && Arrays.equals(this.f37136p, fVar.f37136p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f37133e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f37134i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f37135o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f37136p);
    }

    @Override // ld.i
    public String toString() {
        return this.f37142d + ": mimeType=" + this.f37133e + ", filename=" + this.f37134i + ", description=" + this.f37135o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37133e);
        parcel.writeString(this.f37134i);
        parcel.writeString(this.f37135o);
        parcel.writeByteArray(this.f37136p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f37133e = (String) w0.j(parcel.readString());
        this.f37134i = (String) w0.j(parcel.readString());
        this.f37135o = (String) w0.j(parcel.readString());
        this.f37136p = (byte[]) w0.j(parcel.createByteArray());
    }
}
