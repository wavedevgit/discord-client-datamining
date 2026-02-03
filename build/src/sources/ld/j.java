package ld;

import android.os.Parcel;
import android.os.Parcelable;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends i {
    public static final Parcelable.Creator<j> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37273e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37274i;

    /* renamed from: o  reason: collision with root package name */
    public final String f37275o;

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
        this.f37273e = str;
        this.f37274i = str2;
        this.f37275o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && j.class == obj.getClass()) {
            j jVar = (j) obj;
            if (w0.c(this.f37274i, jVar.f37274i) && w0.c(this.f37273e, jVar.f37273e) && w0.c(this.f37275o, jVar.f37275o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f37273e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f37274i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f37275o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // ld.i
    public String toString() {
        return this.f37272d + ": domain=" + this.f37273e + ", description=" + this.f37274i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37272d);
        parcel.writeString(this.f37273e);
        parcel.writeString(this.f37275o);
    }

    j(Parcel parcel) {
        super("----");
        this.f37273e = (String) w0.j(parcel.readString());
        this.f37274i = (String) w0.j(parcel.readString());
        this.f37275o = (String) w0.j(parcel.readString());
    }
}
