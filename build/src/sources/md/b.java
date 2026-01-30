package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import li.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f38032d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38033e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38034i;

    /* renamed from: o  reason: collision with root package name */
    public final long f38035o;

    /* renamed from: p  reason: collision with root package name */
    public final long f38036p;

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
            if (this.f38032d == bVar.f38032d && this.f38033e == bVar.f38033e && this.f38034i == bVar.f38034i && this.f38035o == bVar.f38035o && this.f38036p == bVar.f38036p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f38032d)) * 31) + g.b(this.f38033e)) * 31) + g.b(this.f38034i)) * 31) + g.b(this.f38035o)) * 31) + g.b(this.f38036p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f38032d + ", photoSize=" + this.f38033e + ", photoPresentationTimestampUs=" + this.f38034i + ", videoStartPosition=" + this.f38035o + ", videoSize=" + this.f38036p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f38032d);
        parcel.writeLong(this.f38033e);
        parcel.writeLong(this.f38034i);
        parcel.writeLong(this.f38035o);
        parcel.writeLong(this.f38036p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f38032d = j10;
        this.f38033e = j11;
        this.f38034i = j12;
        this.f38035o = j13;
        this.f38036p = j14;
    }

    private b(Parcel parcel) {
        this.f38032d = parcel.readLong();
        this.f38033e = parcel.readLong();
        this.f38034i = parcel.readLong();
        this.f38035o = parcel.readLong();
        this.f38036p = parcel.readLong();
    }
}
