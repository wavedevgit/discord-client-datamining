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
    public final String f51031d;

    /* renamed from: e  reason: collision with root package name */
    public final String f51032e;

    /* renamed from: i  reason: collision with root package name */
    public final List f51033i;

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
        this.f51031d = str;
        this.f51032e = str2;
        this.f51033i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f51031d, qVar.f51031d) && TextUtils.equals(this.f51032e, qVar.f51032e) && this.f51033i.equals(qVar.f51033i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f51031d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f51032e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f51033i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f51031d != null) {
            str = " [" + this.f51031d + ", " + this.f51032e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f51031d);
        parcel.writeString(this.f51032e);
        int size = this.f51033i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f51033i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f51031d = parcel.readString();
        this.f51032e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f51033i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f51034d;

        /* renamed from: e  reason: collision with root package name */
        public final int f51035e;

        /* renamed from: i  reason: collision with root package name */
        public final String f51036i;

        /* renamed from: o  reason: collision with root package name */
        public final String f51037o;

        /* renamed from: p  reason: collision with root package name */
        public final String f51038p;

        /* renamed from: q  reason: collision with root package name */
        public final String f51039q;

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
            this.f51034d = i10;
            this.f51035e = i11;
            this.f51036i = str;
            this.f51037o = str2;
            this.f51038p = str3;
            this.f51039q = str4;
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
                if (this.f51034d == bVar.f51034d && this.f51035e == bVar.f51035e && TextUtils.equals(this.f51036i, bVar.f51036i) && TextUtils.equals(this.f51037o, bVar.f51037o) && TextUtils.equals(this.f51038p, bVar.f51038p) && TextUtils.equals(this.f51039q, bVar.f51039q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f51034d * 31) + this.f51035e) * 31;
            String str = this.f51036i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f51037o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f51038p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f51039q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f51034d);
            parcel.writeInt(this.f51035e);
            parcel.writeString(this.f51036i);
            parcel.writeString(this.f51037o);
            parcel.writeString(this.f51038p);
            parcel.writeString(this.f51039q);
        }

        b(Parcel parcel) {
            this.f51034d = parcel.readInt();
            this.f51035e = parcel.readInt();
            this.f51036i = parcel.readString();
            this.f51037o = parcel.readString();
            this.f51038p = parcel.readString();
            this.f51039q = parcel.readString();
        }
    }
}
