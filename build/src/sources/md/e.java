package md;

import android.os.Parcel;
import android.os.Parcelable;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends i {
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36303e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36304i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36305o;

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
        this.f36303e = str;
        this.f36304i = str2;
        this.f36305o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f36304i, eVar.f36304i) && w0.c(this.f36303e, eVar.f36303e) && w0.c(this.f36305o, eVar.f36305o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36303e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36304i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36305o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // md.i
    public String toString() {
        return this.f36315d + ": language=" + this.f36303e + ", description=" + this.f36304i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36315d);
        parcel.writeString(this.f36303e);
        parcel.writeString(this.f36305o);
    }

    e(Parcel parcel) {
        super("COMM");
        this.f36303e = (String) w0.j(parcel.readString());
        this.f36304i = (String) w0.j(parcel.readString());
        this.f36305o = (String) w0.j(parcel.readString());
    }
}
