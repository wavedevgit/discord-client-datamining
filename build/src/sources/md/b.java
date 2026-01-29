package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import li.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f38016d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38017e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38018i;

    /* renamed from: o  reason: collision with root package name */
    public final long f38019o;

    /* renamed from: p  reason: collision with root package name */
    public final long f38020p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public b createFromParcel(Parcel parcel) {
            return new b(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public b[] newArray(int i10) {
            return new b[i10];
        }
    }

    /* synthetic */ b(Parcel parcel, a aVar) {
        this(parcel);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f38016d == bVar.f38016d && this.f38017e == bVar.f38017e && this.f38018i == bVar.f38018i && this.f38019o == bVar.f38019o && this.f38020p == bVar.f38020p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f38016d)) * 31) + g.b(this.f38017e)) * 31) + g.b(this.f38018i)) * 31) + g.b(this.f38019o)) * 31) + g.b(this.f38020p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f38016d + ", photoSize=" + this.f38017e + ", photoPresentationTimestampUs=" + this.f38018i + ", videoStartPosition=" + this.f38019o + ", videoSize=" + this.f38020p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f38016d);
        parcel.writeLong(this.f38017e);
        parcel.writeLong(this.f38018i);
        parcel.writeLong(this.f38019o);
        parcel.writeLong(this.f38020p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f38016d = j10;
        this.f38017e = j11;
        this.f38018i = j12;
        this.f38019o = j13;
        this.f38020p = j14;
    }

    private b(Parcel parcel) {
        this.f38016d = parcel.readLong();
        this.f38017e = parcel.readLong();
        this.f38018i = parcel.readLong();
        this.f38019o = parcel.readLong();
        this.f38020p = parcel.readLong();
    }
}
