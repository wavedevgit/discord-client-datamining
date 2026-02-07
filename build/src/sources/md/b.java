package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import pi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f37101d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37102e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37103i;

    /* renamed from: o  reason: collision with root package name */
    public final long f37104o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37105p;

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
            if (this.f37101d == bVar.f37101d && this.f37102e == bVar.f37102e && this.f37103i == bVar.f37103i && this.f37104o == bVar.f37104o && this.f37105p == bVar.f37105p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f37101d)) * 31) + g.b(this.f37102e)) * 31) + g.b(this.f37103i)) * 31) + g.b(this.f37104o)) * 31) + g.b(this.f37105p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f37101d + ", photoSize=" + this.f37102e + ", photoPresentationTimestampUs=" + this.f37103i + ", videoStartPosition=" + this.f37104o + ", videoSize=" + this.f37105p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f37101d);
        parcel.writeLong(this.f37102e);
        parcel.writeLong(this.f37103i);
        parcel.writeLong(this.f37104o);
        parcel.writeLong(this.f37105p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f37101d = j10;
        this.f37102e = j11;
        this.f37103i = j12;
        this.f37104o = j13;
        this.f37105p = j14;
    }

    private b(Parcel parcel) {
        this.f37101d = parcel.readLong();
        this.f37102e = parcel.readLong();
        this.f37103i = parcel.readLong();
        this.f37104o = parcel.readLong();
        this.f37105p = parcel.readLong();
    }
}
