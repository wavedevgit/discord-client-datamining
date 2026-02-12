package nd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import si.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f37165d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37166e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37167i;

    /* renamed from: o  reason: collision with root package name */
    public final long f37168o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37169p;

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
            if (this.f37165d == bVar.f37165d && this.f37166e == bVar.f37166e && this.f37167i == bVar.f37167i && this.f37168o == bVar.f37168o && this.f37169p == bVar.f37169p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f37165d)) * 31) + g.b(this.f37166e)) * 31) + g.b(this.f37167i)) * 31) + g.b(this.f37168o)) * 31) + g.b(this.f37169p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f37165d + ", photoSize=" + this.f37166e + ", photoPresentationTimestampUs=" + this.f37167i + ", videoStartPosition=" + this.f37168o + ", videoSize=" + this.f37169p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f37165d);
        parcel.writeLong(this.f37166e);
        parcel.writeLong(this.f37167i);
        parcel.writeLong(this.f37168o);
        parcel.writeLong(this.f37169p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f37165d = j10;
        this.f37166e = j11;
        this.f37167i = j12;
        this.f37168o = j13;
        this.f37169p = j14;
    }

    private b(Parcel parcel) {
        this.f37165d = parcel.readLong();
        this.f37166e = parcel.readLong();
        this.f37167i = parcel.readLong();
        this.f37168o = parcel.readLong();
        this.f37169p = parcel.readLong();
    }
}
