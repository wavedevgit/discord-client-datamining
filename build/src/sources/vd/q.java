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
    public final String f51047d;

    /* renamed from: e  reason: collision with root package name */
    public final String f51048e;

    /* renamed from: i  reason: collision with root package name */
    public final List f51049i;

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
        this.f51047d = str;
        this.f51048e = str2;
        this.f51049i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f51047d, qVar.f51047d) && TextUtils.equals(this.f51048e, qVar.f51048e) && this.f51049i.equals(qVar.f51049i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f51047d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f51048e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f51049i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f51047d != null) {
            str = " [" + this.f51047d + ", " + this.f51048e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f51047d);
        parcel.writeString(this.f51048e);
        int size = this.f51049i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f51049i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f51047d = parcel.readString();
        this.f51048e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f51049i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f51050d;

        /* renamed from: e  reason: collision with root package name */
        public final int f51051e;

        /* renamed from: i  reason: collision with root package name */
        public final String f51052i;

        /* renamed from: o  reason: collision with root package name */
        public final String f51053o;

        /* renamed from: p  reason: collision with root package name */
        public final String f51054p;

        /* renamed from: q  reason: collision with root package name */
        public final String f51055q;

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
            this.f51050d = i10;
            this.f51051e = i11;
            this.f51052i = str;
            this.f51053o = str2;
            this.f51054p = str3;
            this.f51055q = str4;
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
                if (this.f51050d == bVar.f51050d && this.f51051e == bVar.f51051e && TextUtils.equals(this.f51052i, bVar.f51052i) && TextUtils.equals(this.f51053o, bVar.f51053o) && TextUtils.equals(this.f51054p, bVar.f51054p) && TextUtils.equals(this.f51055q, bVar.f51055q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f51050d * 31) + this.f51051e) * 31;
            String str = this.f51052i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f51053o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f51054p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f51055q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f51050d);
            parcel.writeInt(this.f51051e);
            parcel.writeString(this.f51052i);
            parcel.writeString(this.f51053o);
            parcel.writeString(this.f51054p);
            parcel.writeString(this.f51055q);
        }

        b(Parcel parcel) {
            this.f51050d = parcel.readInt();
            this.f51051e = parcel.readInt();
            this.f51052i = parcel.readString();
            this.f51053o = parcel.readString();
            this.f51054p = parcel.readString();
            this.f51055q = parcel.readString();
        }
    }
}
