package vd;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q implements Metadata.b {
    public static final Parcelable.Creator<q> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final String f52550d;

    /* renamed from: e  reason: collision with root package name */
    public final String f52551e;

    /* renamed from: i  reason: collision with root package name */
    public final List f52552i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public q createFromParcel(Parcel parcel) {
            return new q(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public q[] newArray(int i10) {
            return new q[i10];
        }
    }

    public q(String str, String str2, List list) {
        this.f52550d = str;
        this.f52551e = str2;
        this.f52552i = Collections.unmodifiableList(new ArrayList(list));
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && q.class == obj.getClass()) {
            q qVar = (q) obj;
            if (TextUtils.equals(this.f52550d, qVar.f52550d) && TextUtils.equals(this.f52551e, qVar.f52551e) && this.f52552i.equals(qVar.f52552i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f52550d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f52551e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f52552i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f52550d != null) {
            str = " [" + this.f52550d + ", " + this.f52551e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f52550d);
        parcel.writeString(this.f52551e);
        int size = this.f52552i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f52552i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f52550d = parcel.readString();
        this.f52551e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f52552i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f52553d;

        /* renamed from: e  reason: collision with root package name */
        public final int f52554e;

        /* renamed from: i  reason: collision with root package name */
        public final String f52555i;

        /* renamed from: o  reason: collision with root package name */
        public final String f52556o;

        /* renamed from: p  reason: collision with root package name */
        public final String f52557p;

        /* renamed from: q  reason: collision with root package name */
        public final String f52558q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public b createFromParcel(Parcel parcel) {
                return new b(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(int i10, int i11, String str, String str2, String str3, String str4) {
            this.f52553d = i10;
            this.f52554e = i11;
            this.f52555i = str;
            this.f52556o = str2;
            this.f52557p = str3;
            this.f52558q = str4;
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
                if (this.f52553d == bVar.f52553d && this.f52554e == bVar.f52554e && TextUtils.equals(this.f52555i, bVar.f52555i) && TextUtils.equals(this.f52556o, bVar.f52556o) && TextUtils.equals(this.f52557p, bVar.f52557p) && TextUtils.equals(this.f52558q, bVar.f52558q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f52553d * 31) + this.f52554e) * 31;
            String str = this.f52555i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f52556o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f52557p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f52558q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f52553d);
            parcel.writeInt(this.f52554e);
            parcel.writeString(this.f52555i);
            parcel.writeString(this.f52556o);
            parcel.writeString(this.f52557p);
            parcel.writeString(this.f52558q);
        }

        b(Parcel parcel) {
            this.f52553d = parcel.readInt();
            this.f52554e = parcel.readInt();
            this.f52555i = parcel.readString();
            this.f52556o = parcel.readString();
            this.f52557p = parcel.readString();
            this.f52558q = parcel.readString();
        }
    }
}
