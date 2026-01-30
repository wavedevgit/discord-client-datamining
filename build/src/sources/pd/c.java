package pd;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.g;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Comparable, Parcelable, g {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: o  reason: collision with root package name */
    private static final String f45037o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f45038p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f45039q = w0.B0(2);

    /* renamed from: d  reason: collision with root package name */
    public final int f45040d;

    /* renamed from: e  reason: collision with root package name */
    public final int f45041e;

    /* renamed from: i  reason: collision with root package name */
    public final int f45042i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public c createFromParcel(Parcel parcel) {
            return new c(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(int i10, int i11, int i12) {
        this.f45040d = i10;
        this.f45041e = i11;
        this.f45042i = i12;
    }

    public static c d(Bundle bundle) {
        return new c(bundle.getInt(f45037o, 0), bundle.getInt(f45038p, 0), bundle.getInt(f45039q, 0));
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int i10 = this.f45040d - cVar.f45040d;
        if (i10 == 0) {
            int i11 = this.f45041e - cVar.f45041e;
            if (i11 == 0) {
                return this.f45042i - cVar.f45042i;
            }
            return i11;
        }
        return i10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f45040d == cVar.f45040d && this.f45041e == cVar.f45041e && this.f45042i == cVar.f45042i) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f45040d * 31) + this.f45041e) * 31) + this.f45042i;
    }

    public String toString() {
        return this.f45040d + "." + this.f45041e + "." + this.f45042i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f45040d);
        parcel.writeInt(this.f45041e);
        parcel.writeInt(this.f45042i);
    }

    c(Parcel parcel) {
        this.f45040d = parcel.readInt();
        this.f45041e = parcel.readInt();
        this.f45042i = parcel.readInt();
    }
}
