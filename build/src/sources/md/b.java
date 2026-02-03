package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import li.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f37809d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37810e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37811i;

    /* renamed from: o  reason: collision with root package name */
    public final long f37812o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37813p;

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
            if (this.f37809d == bVar.f37809d && this.f37810e == bVar.f37810e && this.f37811i == bVar.f37811i && this.f37812o == bVar.f37812o && this.f37813p == bVar.f37813p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f37809d)) * 31) + g.b(this.f37810e)) * 31) + g.b(this.f37811i)) * 31) + g.b(this.f37812o)) * 31) + g.b(this.f37813p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f37809d + ", photoSize=" + this.f37810e + ", photoPresentationTimestampUs=" + this.f37811i + ", videoStartPosition=" + this.f37812o + ", videoSize=" + this.f37813p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f37809d);
        parcel.writeLong(this.f37810e);
        parcel.writeLong(this.f37811i);
        parcel.writeLong(this.f37812o);
        parcel.writeLong(this.f37813p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f37809d = j10;
        this.f37810e = j11;
        this.f37811i = j12;
        this.f37812o = j13;
        this.f37813p = j14;
    }

    private b(Parcel parcel) {
        this.f37809d = parcel.readLong();
        this.f37810e = parcel.readLong();
        this.f37811i = parcel.readLong();
        this.f37812o = parcel.readLong();
        this.f37813p = parcel.readLong();
    }
}
