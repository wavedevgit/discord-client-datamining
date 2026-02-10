package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36305e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36306i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36307o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36308p;

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
        this.f36305e = str;
        this.f36306i = str2;
        this.f36307o = str3;
        this.f36308p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f36305e, fVar.f36305e) && w0.c(this.f36306i, fVar.f36306i) && w0.c(this.f36307o, fVar.f36307o) && Arrays.equals(this.f36308p, fVar.f36308p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36305e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36306i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36307o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f36308p);
    }

    @Override // md.i
    public String toString() {
        return this.f36314d + ": mimeType=" + this.f36305e + ", filename=" + this.f36306i + ", description=" + this.f36307o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36305e);
        parcel.writeString(this.f36306i);
        parcel.writeString(this.f36307o);
        parcel.writeByteArray(this.f36308p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f36305e = (String) w0.j(parcel.readString());
        this.f36306i = (String) w0.j(parcel.readString());
        this.f36307o = (String) w0.j(parcel.readString());
        this.f36308p = (byte[]) w0.j(parcel.createByteArray());
    }
}
