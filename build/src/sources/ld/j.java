package ld;

import android.os.Parcel;
import android.os.Parcelable;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends i {
    public static final Parcelable.Creator<j> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37159e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37160i;

    /* renamed from: o  reason: collision with root package name */
    public final String f37161o;

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
        this.f37159e = str;
        this.f37160i = str2;
        this.f37161o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && j.class == obj.getClass()) {
            j jVar = (j) obj;
            if (w0.c(this.f37160i, jVar.f37160i) && w0.c(this.f37159e, jVar.f37159e) && w0.c(this.f37161o, jVar.f37161o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f37159e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f37160i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f37161o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // ld.i
    public String toString() {
        return this.f37158d + ": domain=" + this.f37159e + ", description=" + this.f37160i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37158d);
        parcel.writeString(this.f37159e);
        parcel.writeString(this.f37161o);
    }

    j(Parcel parcel) {
        super("----");
        this.f37159e = (String) w0.j(parcel.readString());
        this.f37160i = (String) w0.j(parcel.readString());
        this.f37161o = (String) w0.j(parcel.readString());
    }
}
