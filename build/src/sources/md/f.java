package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36930e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36931i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36932o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36933p;

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
        this.f36930e = str;
        this.f36931i = str2;
        this.f36932o = str3;
        this.f36933p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f36930e, fVar.f36930e) && w0.c(this.f36931i, fVar.f36931i) && w0.c(this.f36932o, fVar.f36932o) && Arrays.equals(this.f36933p, fVar.f36933p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36930e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36931i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36932o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f36933p);
    }

    @Override // md.i
    public String toString() {
        return this.f36939d + ": mimeType=" + this.f36930e + ", filename=" + this.f36931i + ", description=" + this.f36932o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36930e);
        parcel.writeString(this.f36931i);
        parcel.writeString(this.f36932o);
        parcel.writeByteArray(this.f36933p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f36930e = (String) w0.j(parcel.readString());
        this.f36931i = (String) w0.j(parcel.readString());
        this.f36932o = (String) w0.j(parcel.readString());
        this.f36933p = (byte[]) w0.j(parcel.createByteArray());
    }
}
