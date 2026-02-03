package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import li.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f38012d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38013e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38014i;

    /* renamed from: o  reason: collision with root package name */
    public final long f38015o;

    /* renamed from: p  reason: collision with root package name */
    public final long f38016p;

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
            if (this.f38012d == bVar.f38012d && this.f38013e == bVar.f38013e && this.f38014i == bVar.f38014i && this.f38015o == bVar.f38015o && this.f38016p == bVar.f38016p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f38012d)) * 31) + g.b(this.f38013e)) * 31) + g.b(this.f38014i)) * 31) + g.b(this.f38015o)) * 31) + g.b(this.f38016p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f38012d + ", photoSize=" + this.f38013e + ", photoPresentationTimestampUs=" + this.f38014i + ", videoStartPosition=" + this.f38015o + ", videoSize=" + this.f38016p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f38012d);
        parcel.writeLong(this.f38013e);
        parcel.writeLong(this.f38014i);
        parcel.writeLong(this.f38015o);
        parcel.writeLong(this.f38016p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f38012d = j10;
        this.f38013e = j11;
        this.f38014i = j12;
        this.f38015o = j13;
        this.f38016p = j14;
    }

    private b(Parcel parcel) {
        this.f38012d = parcel.readLong();
        this.f38013e = parcel.readLong();
        this.f38014i = parcel.readLong();
        this.f38015o = parcel.readLong();
        this.f38016p = parcel.readLong();
    }
}
