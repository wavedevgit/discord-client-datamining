package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import md.c;
import mi.j;
import ne.w0;
import ni.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Metadata.b {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final List f37106d;

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
        public final long f37108d;

        /* renamed from: e  reason: collision with root package name */
        public final long f37109e;

        /* renamed from: i  reason: collision with root package name */
        public final int f37110i;

        /* renamed from: o  reason: collision with root package name */
        public static final Comparator f37107o = new Comparator() { // from class: md.d
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int i10;
                i10 = m.j().e(r1.f37108d, r2.f37108d).e(r1.f37109e, r2.f37109e).d(((c.b) obj).f37110i, ((c.b) obj2).f37110i).i();
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
            this.f37108d = j10;
            this.f37109e = j11;
            this.f37110i = i10;
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
                if (this.f37108d == bVar.f37108d && this.f37109e == bVar.f37109e && this.f37110i == bVar.f37110i) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return j.b(Long.valueOf(this.f37108d), Long.valueOf(this.f37109e), Integer.valueOf(this.f37110i));
        }

        public String toString() {
            return w0.D("Segment: startTimeMs=%d, endTimeMs=%d, speedDivisor=%d", Long.valueOf(this.f37108d), Long.valueOf(this.f37109e), Integer.valueOf(this.f37110i));
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f37108d);
            parcel.writeLong(this.f37109e);
            parcel.writeInt(this.f37110i);
        }
    }

    public c(List list) {
        this.f37106d = list;
        ne.a.a(!a(list));
    }

    private static boolean a(List list) {
        if (list.isEmpty()) {
            return false;
        }
        long j10 = ((b) list.get(0)).f37109e;
        for (int i10 = 1; i10 < list.size(); i10++) {
            if (((b) list.get(i10)).f37108d < j10) {
                return true;
            }
            j10 = ((b) list.get(i10)).f37109e;
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
            return this.f37106d.equals(((c) obj).f37106d);
        }
        return false;
    }

    public int hashCode() {
        return this.f37106d.hashCode();
    }

    public String toString() {
        return "SlowMotion: segments=" + this.f37106d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeList(this.f37106d);
    }
}
