package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36100e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36101i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36102o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36103p;

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
        this.f36100e = str;
        this.f36101i = str2;
        this.f36102o = str3;
        this.f36103p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f36100e, fVar.f36100e) && w0.c(this.f36101i, fVar.f36101i) && w0.c(this.f36102o, fVar.f36102o) && Arrays.equals(this.f36103p, fVar.f36103p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36100e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36101i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36102o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f36103p);
    }

    @Override // ld.i
    public String toString() {
        return this.f36109d + ": mimeType=" + this.f36100e + ", filename=" + this.f36101i + ", description=" + this.f36102o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36100e);
        parcel.writeString(this.f36101i);
        parcel.writeString(this.f36102o);
        parcel.writeByteArray(this.f36103p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f36100e = (String) w0.j(parcel.readString());
        this.f36101i = (String) w0.j(parcel.readString());
        this.f36102o = (String) w0.j(parcel.readString());
        this.f36103p = (byte[]) w0.j(parcel.createByteArray());
    }
}
