package md;

import android.os.Parcel;
import android.os.Parcelable;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends i {
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36871e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36872i;

    /* renamed from: o  reason: collision with root package name */
    public final String f36873o;

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
        this.f36871e = str;
        this.f36872i = str2;
        this.f36873o = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f36872i, eVar.f36872i) && w0.c(this.f36871e, eVar.f36871e) && w0.c(this.f36873o, eVar.f36873o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        String str = this.f36871e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (527 + i10) * 31;
        String str2 = this.f36872i;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        String str3 = this.f36873o;
        if (str3 != null) {
            i12 = str3.hashCode();
        }
        return i14 + i12;
    }

    @Override // md.i
    public String toString() {
        return this.f36883d + ": language=" + this.f36871e + ", description=" + this.f36872i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36883d);
        parcel.writeString(this.f36871e);
        parcel.writeString(this.f36873o);
    }

    e(Parcel parcel) {
        super("COMM");
        this.f36871e = (String) w0.j(parcel.readString());
        this.f36872i = (String) w0.j(parcel.readString());
        this.f36873o = (String) w0.j(parcel.readString());
    }
}
