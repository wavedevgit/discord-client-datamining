package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import pi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f37053d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37054e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37055i;

    /* renamed from: o  reason: collision with root package name */
    public final long f37056o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37057p;

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
            if (this.f37053d == bVar.f37053d && this.f37054e == bVar.f37054e && this.f37055i == bVar.f37055i && this.f37056o == bVar.f37056o && this.f37057p == bVar.f37057p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f37053d)) * 31) + g.b(this.f37054e)) * 31) + g.b(this.f37055i)) * 31) + g.b(this.f37056o)) * 31) + g.b(this.f37057p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f37053d + ", photoSize=" + this.f37054e + ", photoPresentationTimestampUs=" + this.f37055i + ", videoStartPosition=" + this.f37056o + ", videoSize=" + this.f37057p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f37053d);
        parcel.writeLong(this.f37054e);
        parcel.writeLong(this.f37055i);
        parcel.writeLong(this.f37056o);
        parcel.writeLong(this.f37057p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f37053d = j10;
        this.f37054e = j11;
        this.f37055i = j12;
        this.f37056o = j13;
        this.f37057p = j14;
    }

    private b(Parcel parcel) {
        this.f37053d = parcel.readLong();
        this.f37054e = parcel.readLong();
        this.f37055i = parcel.readLong();
        this.f37056o = parcel.readLong();
        this.f37057p = parcel.readLong();
    }
}
