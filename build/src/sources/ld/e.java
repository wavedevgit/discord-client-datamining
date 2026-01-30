package ld;

import android.os.Parcel;
import android.os.Parcelable;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends i {
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37146e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37147i;

    /* renamed from: o  reason: collision with root package name */
    public final String f37148o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public e createFromParcel(Parcel parcel) {
            return new e(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public e[] newArray(int i10) {
            return new e[i10];
        }
    }

    public e(String str, String str2, String str3) {
        super("COMM");
        this.f37146e = str;
        this.f37147i = str2;
        this.f37148o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f37147i, eVar.f37147i) && w0.c(this.f37146e, eVar.f37146e) && w0.c(this.f37148o, eVar.f37148o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f37146e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f37147i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f37148o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // ld.i
    public String toString() {
        return this.f37158d + ": language=" + this.f37146e + ", description=" + this.f37147i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37158d);
        parcel.writeString(this.f37146e);
        parcel.writeString(this.f37148o);
    }

    e(Parcel parcel) {
        super("COMM");
        this.f37146e = (String) w0.j(parcel.readString());
        this.f37147i = (String) w0.j(parcel.readString());
        this.f37148o = (String) w0.j(parcel.readString());
    }
}
