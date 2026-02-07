package ld;

import android.os.Parcel;
import android.os.Parcelable;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends i {
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36097e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36098i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36099o;

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
        this.f36097e = str;
        this.f36098i = str2;
        this.f36099o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f36098i, eVar.f36098i) && w0.c(this.f36097e, eVar.f36097e) && w0.c(this.f36099o, eVar.f36099o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36097e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36098i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36099o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // ld.i
    public String toString() {
        return this.f36109d + ": language=" + this.f36097e + ", description=" + this.f36098i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36109d);
        parcel.writeString(this.f36097e);
        parcel.writeString(this.f36099o);
    }

    e(Parcel parcel) {
        super("COMM");
        this.f36097e = (String) w0.j(parcel.readString());
        this.f36098i = (String) w0.j(parcel.readString());
        this.f36099o = (String) w0.j(parcel.readString());
    }
}
