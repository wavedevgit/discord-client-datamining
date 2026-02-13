package nd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import si.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f37733d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37734e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37735i;

    /* renamed from: o  reason: collision with root package name */
    public final long f37736o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37737p;

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
            if (this.f37733d == bVar.f37733d && this.f37734e == bVar.f37734e && this.f37735i == bVar.f37735i && this.f37736o == bVar.f37736o && this.f37737p == bVar.f37737p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f37733d)) * 31) + g.b(this.f37734e)) * 31) + g.b(this.f37735i)) * 31) + g.b(this.f37736o)) * 31) + g.b(this.f37737p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f37733d + ", photoSize=" + this.f37734e + ", photoPresentationTimestampUs=" + this.f37735i + ", videoStartPosition=" + this.f37736o + ", videoSize=" + this.f37737p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f37733d);
        parcel.writeLong(this.f37734e);
        parcel.writeLong(this.f37735i);
        parcel.writeLong(this.f37736o);
        parcel.writeLong(this.f37737p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f37733d = j10;
        this.f37734e = j11;
        this.f37735i = j12;
        this.f37736o = j13;
        this.f37737p = j14;
    }

    private b(Parcel parcel) {
        this.f37733d = parcel.readLong();
        this.f37734e = parcel.readLong();
        this.f37735i = parcel.readLong();
        this.f37736o = parcel.readLong();
        this.f37737p = parcel.readLong();
    }
}
