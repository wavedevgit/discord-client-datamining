package ld;

import android.os.Parcel;
import android.os.Parcelable;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {
    public static final Parcelable.Creator<n> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37172e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37173i;

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
        this.f37172e = str2;
        this.f37173i = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && n.class == obj.getClass()) {
            n nVar = (n) obj;
            if (this.f37158d.equals(nVar.f37158d) && w0.c(this.f37172e, nVar.f37172e) && w0.c(this.f37173i, nVar.f37173i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = (527 + this.f37158d.hashCode()) * 31;
        String str = this.f37172e;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str2 = this.f37173i;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return i12 + i11;
    }

    @Override // ld.i
    public String toString() {
        return this.f37158d + ": url=" + this.f37173i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37158d);
        parcel.writeString(this.f37172e);
        parcel.writeString(this.f37173i);
    }

    n(Parcel parcel) {
        super((String) w0.j(parcel.readString()));
        this.f37172e = parcel.readString();
        this.f37173i = (String) w0.j(parcel.readString());
    }
}
