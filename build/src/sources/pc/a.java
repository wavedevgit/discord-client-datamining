package pc;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import qi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0612a();

    /* renamed from: d  reason: collision with root package name */
    public final long f43087d;

    /* renamed from: pc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0612a implements Parcelable.Creator {
        C0612a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* synthetic */ a(Parcel parcel, C0612a c0612a) {
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
        if ((obj instanceof a) && this.f43087d == ((a) obj).f43087d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return g.b(this.f43087d);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Creation time: ");
        long j10 = this.f43087d;
        if (j10 == -2082844800000L) {
            valueOf = "unset";
        } else {
            valueOf = Long.valueOf(j10);
        }
        sb2.append(valueOf);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f43087d);
    }

    public a(long j10) {
        this.f43087d = j10;
    }

    private a(Parcel parcel) {
        this.f43087d = parcel.readLong();
    }
}
