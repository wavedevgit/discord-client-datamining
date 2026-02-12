package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36306e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36307i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36308o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36309p;

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
        this.f36306e = str;
        this.f36307i = str2;
        this.f36308o = str3;
        this.f36309p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f36306e, fVar.f36306e) && w0.c(this.f36307i, fVar.f36307i) && w0.c(this.f36308o, fVar.f36308o) && Arrays.equals(this.f36309p, fVar.f36309p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36306e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36307i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36308o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f36309p);
    }

    @Override // md.i
    public String toString() {
        return this.f36315d + ": mimeType=" + this.f36306e + ", filename=" + this.f36307i + ", description=" + this.f36308o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36306e);
        parcel.writeString(this.f36307i);
        parcel.writeString(this.f36308o);
        parcel.writeByteArray(this.f36309p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f36306e = (String) w0.j(parcel.readString());
        this.f36307i = (String) w0.j(parcel.readString());
        this.f36308o = (String) w0.j(parcel.readString());
        this.f36309p = (byte[]) w0.j(parcel.createByteArray());
    }
}
