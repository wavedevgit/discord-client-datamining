package wd;

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
    public final String f53223d;

    /* renamed from: e  reason: collision with root package name */
    public final String f53224e;

    /* renamed from: i  reason: collision with root package name */
    public final List f53225i;

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
        this.f53223d = str;
        this.f53224e = str2;
        this.f53225i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f53223d, qVar.f53223d) && TextUtils.equals(this.f53224e, qVar.f53224e) && this.f53225i.equals(qVar.f53225i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f53223d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f53224e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f53225i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f53223d != null) {
            str = " [" + this.f53223d + ", " + this.f53224e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f53223d);
        parcel.writeString(this.f53224e);
        int size = this.f53225i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f53225i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f53223d = parcel.readString();
        this.f53224e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f53225i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f53226d;

        /* renamed from: e  reason: collision with root package name */
        public final int f53227e;

        /* renamed from: i  reason: collision with root package name */
        public final String f53228i;

        /* renamed from: o  reason: collision with root package name */
        public final String f53229o;

        /* renamed from: p  reason: collision with root package name */
        public final String f53230p;

        /* renamed from: q  reason: collision with root package name */
        public final String f53231q;

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
            this.f53226d = i10;
            this.f53227e = i11;
            this.f53228i = str;
            this.f53229o = str2;
            this.f53230p = str3;
            this.f53231q = str4;
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
                if (this.f53226d == bVar.f53226d && this.f53227e == bVar.f53227e && TextUtils.equals(this.f53228i, bVar.f53228i) && TextUtils.equals(this.f53229o, bVar.f53229o) && TextUtils.equals(this.f53230p, bVar.f53230p) && TextUtils.equals(this.f53231q, bVar.f53231q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f53226d * 31) + this.f53227e) * 31;
            String str = this.f53228i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f53229o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f53230p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f53231q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f53226d);
            parcel.writeInt(this.f53227e);
            parcel.writeString(this.f53228i);
            parcel.writeString(this.f53229o);
            parcel.writeString(this.f53230p);
            parcel.writeString(this.f53231q);
        }

        b(Parcel parcel) {
            this.f53226d = parcel.readInt();
            this.f53227e = parcel.readInt();
            this.f53228i = parcel.readString();
            this.f53229o = parcel.readString();
            this.f53230p = parcel.readString();
            this.f53231q = parcel.readString();
        }
    }
}
