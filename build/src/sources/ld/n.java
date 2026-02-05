package ld;

import android.os.Parcel;
import android.os.Parcelable;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {
    public static final Parcelable.Creator<n> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36682e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36683i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public n createFromParcel(Parcel parcel) {
            return new n(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public n[] newArray(int i10) {
            return new n[i10];
        }
    }

    public n(String str, String str2, String str3) {
        super(str);
        this.f36682e = str2;
        this.f36683i = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && n.class == obj.getClass()) {
            n nVar = (n) obj;
            if (this.f36668d.equals(nVar.f36668d) && w0.c(this.f36682e, nVar.f36682e) && w0.c(this.f36683i, nVar.f36683i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = (527 + this.f36668d.hashCode()) * 31;
        String str = this.f36682e;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str2 = this.f36683i;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return i12 + i11;
    }

    @Override // ld.i
    public String toString() {
        return this.f36668d + ": url=" + this.f36683i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36668d);
        parcel.writeString(this.f36682e);
        parcel.writeString(this.f36683i);
    }

    n(Parcel parcel) {
        super((String) w0.j(parcel.readString()));
        this.f36682e = parcel.readString();
        this.f36683i = (String) w0.j(parcel.readString());
    }
}
