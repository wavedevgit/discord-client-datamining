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
    public final String f52598d;

    /* renamed from: e  reason: collision with root package name */
    public final String f52599e;

    /* renamed from: i  reason: collision with root package name */
    public final List f52600i;

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
        this.f52598d = str;
        this.f52599e = str2;
        this.f52600i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f52598d, qVar.f52598d) && TextUtils.equals(this.f52599e, qVar.f52599e) && this.f52600i.equals(qVar.f52600i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f52598d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f52599e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f52600i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f52598d != null) {
            str = " [" + this.f52598d + ", " + this.f52599e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f52598d);
        parcel.writeString(this.f52599e);
        int size = this.f52600i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f52600i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f52598d = parcel.readString();
        this.f52599e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f52600i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f52601d;

        /* renamed from: e  reason: collision with root package name */
        public final int f52602e;

        /* renamed from: i  reason: collision with root package name */
        public final String f52603i;

        /* renamed from: o  reason: collision with root package name */
        public final String f52604o;

        /* renamed from: p  reason: collision with root package name */
        public final String f52605p;

        /* renamed from: q  reason: collision with root package name */
        public final String f52606q;

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
            this.f52601d = i10;
            this.f52602e = i11;
            this.f52603i = str;
            this.f52604o = str2;
            this.f52605p = str3;
            this.f52606q = str4;
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
                if (this.f52601d == bVar.f52601d && this.f52602e == bVar.f52602e && TextUtils.equals(this.f52603i, bVar.f52603i) && TextUtils.equals(this.f52604o, bVar.f52604o) && TextUtils.equals(this.f52605p, bVar.f52605p) && TextUtils.equals(this.f52606q, bVar.f52606q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f52601d * 31) + this.f52602e) * 31;
            String str = this.f52603i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f52604o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f52605p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f52606q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f52601d);
            parcel.writeInt(this.f52602e);
            parcel.writeString(this.f52603i);
            parcel.writeString(this.f52604o);
            parcel.writeString(this.f52605p);
            parcel.writeString(this.f52606q);
        }

        b(Parcel parcel) {
            this.f52601d = parcel.readInt();
            this.f52602e = parcel.readInt();
            this.f52603i = parcel.readString();
            this.f52604o = parcel.readString();
            this.f52605p = parcel.readString();
            this.f52606q = parcel.readString();
        }
    }
}
