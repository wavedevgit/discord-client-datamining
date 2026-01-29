package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends i {
    public static final Parcelable.Creator<l> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37151e;

    /* renamed from: i  reason: collision with root package name */
    public final byte[] f37152i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public l createFromParcel(Parcel parcel) {
            return new l(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public l[] newArray(int i10) {
            return new l[i10];
        }
    }

    public l(String str, byte[] bArr) {
        super("PRIV");
        this.f37151e = str;
        this.f37152i = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && l.class == obj.getClass()) {
            l lVar = (l) obj;
            if (w0.c(this.f37151e, lVar.f37151e) && Arrays.equals(this.f37152i, lVar.f37152i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f37151e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return ((527 + i10) * 31) + Arrays.hashCode(this.f37152i);
    }

    @Override // ld.i
    public String toString() {
        return this.f37142d + ": owner=" + this.f37151e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37151e);
        parcel.writeByteArray(this.f37152i);
    }

    l(Parcel parcel) {
        super("PRIV");
        this.f37151e = (String) w0.j(parcel.readString());
        this.f37152i = (byte[]) w0.j(parcel.createByteArray());
    }
}
