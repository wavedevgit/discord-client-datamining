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
    private static final String f44026o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f44027p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f44028q = w0.B0(2);

    /* renamed from: d  reason: collision with root package name */
    public final int f44029d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44030e;

    /* renamed from: i  reason: collision with root package name */
    public final int f44031i;

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
        this.f44029d = i10;
        this.f44030e = i11;
        this.f44031i = i12;
    }

    public static c d(Bundle bundle) {
        return new c(bundle.getInt(f44026o, 0), bundle.getInt(f44027p, 0), bundle.getInt(f44028q, 0));
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int i10 = this.f44029d - cVar.f44029d;
        if (i10 == 0) {
            int i11 = this.f44030e - cVar.f44030e;
            if (i11 == 0) {
                return this.f44031i - cVar.f44031i;
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
            if (this.f44029d == cVar.f44029d && this.f44030e == cVar.f44030e && this.f44031i == cVar.f44031i) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44029d * 31) + this.f44030e) * 31) + this.f44031i;
    }

    public String toString() {
        return this.f44029d + "." + this.f44030e + "." + this.f44031i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f44029d);
        parcel.writeInt(this.f44030e);
        parcel.writeInt(this.f44031i);
    }

    c(Parcel parcel) {
        this.f44029d = parcel.readInt();
        this.f44030e = parcel.readInt();
        this.f44031i = parcel.readInt();
    }
}
