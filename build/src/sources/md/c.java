package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import ii.j;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import ji.m;
import md.c;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Metadata.b {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final List f37814d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public c createFromParcel(Parcel parcel) {
            ArrayList arrayList = new ArrayList();
            parcel.readList(arrayList, b.class.getClassLoader());
            return new c(arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public c[] newArray(int i10) {
            return new c[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        public final long f37816d;

        /* renamed from: e  reason: collision with root package name */
        public final long f37817e;

        /* renamed from: i  reason: collision with root package name */
        public final int f37818i;

        /* renamed from: o  reason: collision with root package name */
        public static final Comparator f37815o = new Comparator() { // from class: md.d
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int i10;
                i10 = m.j().e(r1.f37816d, r2.f37816d).e(r1.f37817e, r2.f37817e).d(((c.b) obj).f37818i, ((c.b) obj2).f37818i).i();
                return i10;
            }
        };
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public b createFromParcel(Parcel parcel) {
                return new b(parcel.readLong(), parcel.readLong(), parcel.readInt());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(long j10, long j11, int i10) {
            boolean z10;
            if (j10 < j11) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f37816d = j10;
            this.f37817e = j11;
            this.f37818i = i10;
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
                if (this.f37816d == bVar.f37816d && this.f37817e == bVar.f37817e && this.f37818i == bVar.f37818i) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return j.b(Long.valueOf(this.f37816d), Long.valueOf(this.f37817e), Integer.valueOf(this.f37818i));
        }

        public String toString() {
            return w0.D("Segment: startTimeMs=%d, endTimeMs=%d, speedDivisor=%d", Long.valueOf(this.f37816d), Long.valueOf(this.f37817e), Integer.valueOf(this.f37818i));
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f37816d);
            parcel.writeLong(this.f37817e);
            parcel.writeInt(this.f37818i);
        }
    }

    public c(List list) {
        this.f37814d = list;
        ne.a.a(!a(list));
    }

    private static boolean a(List list) {
        if (list.isEmpty()) {
            return false;
        }
        long j10 = ((b) list.get(0)).f37817e;
        for (int i10 = 1; i10 < list.size(); i10++) {
            if (((b) list.get(i10)).f37816d < j10) {
                return true;
            }
            j10 = ((b) list.get(i10)).f37817e;
        }
        return false;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            return this.f37814d.equals(((c) obj).f37814d);
        }
        return false;
    }

    public int hashCode() {
        return this.f37814d.hashCode();
    }

    public String toString() {
        return "SlowMotion: segments=" + this.f37814d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeList(this.f37814d);
    }
}
