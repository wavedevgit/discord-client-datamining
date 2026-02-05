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
    private static final String f44999o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f45000p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f45001q = w0.B0(2);

    /* renamed from: d  reason: collision with root package name */
    public final int f45002d;

    /* renamed from: e  reason: collision with root package name */
    public final int f45003e;

    /* renamed from: i  reason: collision with root package name */
    public final int f45004i;

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
        this.f45002d = i10;
        this.f45003e = i11;
        this.f45004i = i12;
    }

    public static c d(Bundle bundle) {
        return new c(bundle.getInt(f44999o, 0), bundle.getInt(f45000p, 0), bundle.getInt(f45001q, 0));
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int i10 = this.f45002d - cVar.f45002d;
        if (i10 == 0) {
            int i11 = this.f45003e - cVar.f45003e;
            if (i11 == 0) {
                return this.f45004i - cVar.f45004i;
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
            if (this.f45002d == cVar.f45002d && this.f45003e == cVar.f45003e && this.f45004i == cVar.f45004i) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f45002d * 31) + this.f45003e) * 31) + this.f45004i;
    }

    public String toString() {
        return this.f45002d + "." + this.f45003e + "." + this.f45004i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f45002d);
        parcel.writeInt(this.f45003e);
        parcel.writeInt(this.f45004i);
    }

    c(Parcel parcel) {
        this.f45002d = parcel.readInt();
        this.f45003e = parcel.readInt();
        this.f45004i = parcel.readInt();
    }
}
