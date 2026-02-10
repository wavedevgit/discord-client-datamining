package md;

import android.os.Parcel;
import android.os.Parcelable;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends i {
    public static final Parcelable.Creator<j> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36940e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36941i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36942o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public j createFromParcel(Parcel parcel) {
            return new j(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public j[] newArray(int i10) {
            return new j[i10];
        }
    }

    public j(String str, String str2, String str3) {
        super("----");
        this.f36940e = str;
        this.f36941i = str2;
        this.f36942o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && j.class == obj.getClass()) {
            j jVar = (j) obj;
            if (w0.c(this.f36941i, jVar.f36941i) && w0.c(this.f36940e, jVar.f36940e) && w0.c(this.f36942o, jVar.f36942o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36940e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36941i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36942o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // md.i
    public String toString() {
        return this.f36939d + ": domain=" + this.f36940e + ", description=" + this.f36941i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36939d);
        parcel.writeString(this.f36940e);
        parcel.writeString(this.f36942o);
    }

    j(Parcel parcel) {
        super("----");
        this.f36940e = (String) w0.j(parcel.readString());
        this.f36941i = (String) w0.j(parcel.readString());
        this.f36942o = (String) w0.j(parcel.readString());
    }
}
