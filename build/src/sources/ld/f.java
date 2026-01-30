package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37149e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37150i;

    /* renamed from: o  reason: collision with root package name */
    public final String f37151o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f37152p;

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
        this.f37149e = str;
        this.f37150i = str2;
        this.f37151o = str3;
        this.f37152p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f37149e, fVar.f37149e) && w0.c(this.f37150i, fVar.f37150i) && w0.c(this.f37151o, fVar.f37151o) && Arrays.equals(this.f37152p, fVar.f37152p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f37149e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f37150i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f37151o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f37152p);
    }

    @Override // ld.i
    public String toString() {
        return this.f37158d + ": mimeType=" + this.f37149e + ", filename=" + this.f37150i + ", description=" + this.f37151o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37149e);
        parcel.writeString(this.f37150i);
        parcel.writeString(this.f37151o);
        parcel.writeByteArray(this.f37152p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f37149e = (String) w0.j(parcel.readString());
        this.f37150i = (String) w0.j(parcel.readString());
        this.f37151o = (String) w0.j(parcel.readString());
        this.f37152p = (byte[]) w0.j(parcel.createByteArray());
    }
}
