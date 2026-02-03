package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends i {
    public static final Parcelable.Creator<l> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37281e;

    /* renamed from: i  reason: collision with root package name */
    public final byte[] f37282i;

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
        this.f37281e = str;
        this.f37282i = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && l.class == obj.getClass()) {
            l lVar = (l) obj;
            if (w0.c(this.f37281e, lVar.f37281e) && Arrays.equals(this.f37282i, lVar.f37282i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f37281e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return ((527 + i10) * 31) + Arrays.hashCode(this.f37282i);
    }

    @Override // ld.i
    public String toString() {
        return this.f37272d + ": owner=" + this.f37281e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37281e);
        parcel.writeByteArray(this.f37282i);
    }

    l(Parcel parcel) {
        super("PRIV");
        this.f37281e = (String) w0.j(parcel.readString());
        this.f37282i = (byte[]) w0.j(parcel.createByteArray());
    }
}
