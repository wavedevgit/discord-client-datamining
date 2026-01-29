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
    private static final String f45021o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f45022p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f45023q = w0.B0(2);

    /* renamed from: d  reason: collision with root package name */
    public final int f45024d;

    /* renamed from: e  reason: collision with root package name */
    public final int f45025e;

    /* renamed from: i  reason: collision with root package name */
    public final int f45026i;

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
        this.f45024d = i10;
        this.f45025e = i11;
        this.f45026i = i12;
    }

    public static c d(Bundle bundle) {
        return new c(bundle.getInt(f45021o, 0), bundle.getInt(f45022p, 0), bundle.getInt(f45023q, 0));
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int i10 = this.f45024d - cVar.f45024d;
        if (i10 == 0) {
            int i11 = this.f45025e - cVar.f45025e;
            if (i11 == 0) {
                return this.f45026i - cVar.f45026i;
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
            if (this.f45024d == cVar.f45024d && this.f45025e == cVar.f45025e && this.f45026i == cVar.f45026i) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f45024d * 31) + this.f45025e) * 31) + this.f45026i;
    }

    public String toString() {
        return this.f45024d + "." + this.f45025e + "." + this.f45026i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f45024d);
        parcel.writeInt(this.f45025e);
        parcel.writeInt(this.f45026i);
    }

    c(Parcel parcel) {
        this.f45024d = parcel.readInt();
        this.f45025e = parcel.readInt();
        this.f45026i = parcel.readInt();
    }
}
