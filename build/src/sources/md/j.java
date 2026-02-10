package md;

import android.os.Parcel;
import android.os.Parcelable;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends i {
    public static final Parcelable.Creator<j> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36315e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36316i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36317o;

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
        this.f36315e = str;
        this.f36316i = str2;
        this.f36317o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && j.class == obj.getClass()) {
            j jVar = (j) obj;
            if (w0.c(this.f36316i, jVar.f36316i) && w0.c(this.f36315e, jVar.f36315e) && w0.c(this.f36317o, jVar.f36317o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36315e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36316i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36317o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // md.i
    public String toString() {
        return this.f36314d + ": domain=" + this.f36315e + ", description=" + this.f36316i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36314d);
        parcel.writeString(this.f36315e);
        parcel.writeString(this.f36317o);
    }

    j(Parcel parcel) {
        super("----");
        this.f36315e = (String) w0.j(parcel.readString());
        this.f36316i = (String) w0.j(parcel.readString());
        this.f36317o = (String) w0.j(parcel.readString());
    }
}
