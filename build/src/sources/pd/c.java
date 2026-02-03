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
    private static final String f45069o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f45070p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f45071q = w0.B0(2);

    /* renamed from: d  reason: collision with root package name */
    public final int f45072d;

    /* renamed from: e  reason: collision with root package name */
    public final int f45073e;

    /* renamed from: i  reason: collision with root package name */
    public final int f45074i;

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
        this.f45072d = i10;
        this.f45073e = i11;
        this.f45074i = i12;
    }

    public static c d(Bundle bundle) {
        return new c(bundle.getInt(f45069o, 0), bundle.getInt(f45070p, 0), bundle.getInt(f45071q, 0));
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int i10 = this.f45072d - cVar.f45072d;
        if (i10 == 0) {
            int i11 = this.f45073e - cVar.f45073e;
            if (i11 == 0) {
                return this.f45074i - cVar.f45074i;
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
            if (this.f45072d == cVar.f45072d && this.f45073e == cVar.f45073e && this.f45074i == cVar.f45074i) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f45072d * 31) + this.f45073e) * 31) + this.f45074i;
    }

    public String toString() {
        return this.f45072d + "." + this.f45073e + "." + this.f45074i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f45072d);
        parcel.writeInt(this.f45073e);
        parcel.writeInt(this.f45074i);
    }

    c(Parcel parcel) {
        this.f45072d = parcel.readInt();
        this.f45073e = parcel.readInt();
        this.f45074i = parcel.readInt();
    }
}
