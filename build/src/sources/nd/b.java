package nd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import qi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f38160d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38161e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38162i;

    /* renamed from: o  reason: collision with root package name */
    public final long f38163o;

    /* renamed from: p  reason: collision with root package name */
    public final long f38164p;

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
            if (this.f38160d == bVar.f38160d && this.f38161e == bVar.f38161e && this.f38162i == bVar.f38162i && this.f38163o == bVar.f38163o && this.f38164p == bVar.f38164p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f38160d)) * 31) + g.b(this.f38161e)) * 31) + g.b(this.f38162i)) * 31) + g.b(this.f38163o)) * 31) + g.b(this.f38164p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f38160d + ", photoSize=" + this.f38161e + ", photoPresentationTimestampUs=" + this.f38162i + ", videoStartPosition=" + this.f38163o + ", videoSize=" + this.f38164p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f38160d);
        parcel.writeLong(this.f38161e);
        parcel.writeLong(this.f38162i);
        parcel.writeLong(this.f38163o);
        parcel.writeLong(this.f38164p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f38160d = j10;
        this.f38161e = j11;
        this.f38162i = j12;
        this.f38163o = j13;
        this.f38164p = j14;
    }

    private b(Parcel parcel) {
        this.f38160d = parcel.readLong();
        this.f38161e = parcel.readLong();
        this.f38162i = parcel.readLong();
        this.f38163o = parcel.readLong();
        this.f38164p = parcel.readLong();
    }
}
