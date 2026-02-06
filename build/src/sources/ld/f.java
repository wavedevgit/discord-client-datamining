package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36052e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36053i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36054o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36055p;

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
        this.f36052e = str;
        this.f36053i = str2;
        this.f36054o = str3;
        this.f36055p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f36052e, fVar.f36052e) && w0.c(this.f36053i, fVar.f36053i) && w0.c(this.f36054o, fVar.f36054o) && Arrays.equals(this.f36055p, fVar.f36055p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36052e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36053i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36054o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f36055p);
    }

    @Override // ld.i
    public String toString() {
        return this.f36061d + ": mimeType=" + this.f36052e + ", filename=" + this.f36053i + ", description=" + this.f36054o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36052e);
        parcel.writeString(this.f36053i);
        parcel.writeString(this.f36054o);
        parcel.writeByteArray(this.f36055p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f36052e = (String) w0.j(parcel.readString());
        this.f36053i = (String) w0.j(parcel.readString());
        this.f36054o = (String) w0.j(parcel.readString());
        this.f36055p = (byte[]) w0.j(parcel.createByteArray());
    }
}
