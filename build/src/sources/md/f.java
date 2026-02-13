package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends i {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36874e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36875i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36876o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36877p;

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
        this.f36874e = str;
        this.f36875i = str2;
        this.f36876o = str3;
        this.f36877p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (w0.c(this.f36874e, fVar.f36874e) && w0.c(this.f36875i, fVar.f36875i) && w0.c(this.f36876o, fVar.f36876o) && Arrays.equals(this.f36877p, fVar.f36877p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36874e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36875i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36876o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return ((i14 + i12) * 31) + Arrays.hashCode(this.f36877p);
    }

    @Override // md.i
    public String toString() {
        return this.f36883d + ": mimeType=" + this.f36874e + ", filename=" + this.f36875i + ", description=" + this.f36876o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36874e);
        parcel.writeString(this.f36875i);
        parcel.writeString(this.f36876o);
        parcel.writeByteArray(this.f36877p);
    }

    f(Parcel parcel) {
        super("GEOB");
        this.f36874e = (String) w0.j(parcel.readString());
        this.f36875i = (String) w0.j(parcel.readString());
        this.f36876o = (String) w0.j(parcel.readString());
        this.f36877p = (byte[]) w0.j(parcel.createByteArray());
    }
}
