package qd;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.g;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Comparable, Parcelable, g {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: o  reason: collision with root package name */
    private static final String f44595o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f44596p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f44597q = w0.B0(2);

    /* renamed from: d  reason: collision with root package name */
    public final int f44598d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44599e;

    /* renamed from: i  reason: collision with root package name */
    public final int f44600i;

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
        this.f44598d = i10;
        this.f44599e = i11;
        this.f44600i = i12;
    }

    public static c d(Bundle bundle) {
        return new c(bundle.getInt(f44595o, 0), bundle.getInt(f44596p, 0), bundle.getInt(f44597q, 0));
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int i10 = this.f44598d - cVar.f44598d;
        if (i10 == 0) {
            int i11 = this.f44599e - cVar.f44599e;
            if (i11 == 0) {
                return this.f44600i - cVar.f44600i;
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
            if (this.f44598d == cVar.f44598d && this.f44599e == cVar.f44599e && this.f44600i == cVar.f44600i) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44598d * 31) + this.f44599e) * 31) + this.f44600i;
    }

    public String toString() {
        return this.f44598d + "." + this.f44599e + "." + this.f44600i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f44598d);
        parcel.writeInt(this.f44599e);
        parcel.writeInt(this.f44600i);
    }

    c(Parcel parcel) {
        this.f44598d = parcel.readInt();
        this.f44599e = parcel.readInt();
        this.f44600i = parcel.readInt();
    }
}
