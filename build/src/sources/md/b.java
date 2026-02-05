package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import oi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f37471d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37472e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37473i;

    /* renamed from: o  reason: collision with root package name */
    public final long f37474o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37475p;

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
            if (this.f37471d == bVar.f37471d && this.f37472e == bVar.f37472e && this.f37473i == bVar.f37473i && this.f37474o == bVar.f37474o && this.f37475p == bVar.f37475p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + g.b(this.f37471d)) * 31) + g.b(this.f37472e)) * 31) + g.b(this.f37473i)) * 31) + g.b(this.f37474o)) * 31) + g.b(this.f37475p);
    }

    public String toString() {
        return "Motion photo metadata: photoStartPosition=" + this.f37471d + ", photoSize=" + this.f37472e + ", photoPresentationTimestampUs=" + this.f37473i + ", videoStartPosition=" + this.f37474o + ", videoSize=" + this.f37475p;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f37471d);
        parcel.writeLong(this.f37472e);
        parcel.writeLong(this.f37473i);
        parcel.writeLong(this.f37474o);
        parcel.writeLong(this.f37475p);
    }

    public b(long j10, long j11, long j12, long j13, long j14) {
        this.f37471d = j10;
        this.f37472e = j11;
        this.f37473i = j12;
        this.f37474o = j13;
        this.f37475p = j14;
    }

    private b(Parcel parcel) {
        this.f37471d = parcel.readLong();
        this.f37472e = parcel.readLong();
        this.f37473i = parcel.readLong();
        this.f37474o = parcel.readLong();
        this.f37475p = parcel.readLong();
    }
}
