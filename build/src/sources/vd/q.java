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
    public final String f51171d;

    /* renamed from: e  reason: collision with root package name */
    public final String f51172e;

    /* renamed from: i  reason: collision with root package name */
    public final List f51173i;

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
        this.f51171d = str;
        this.f51172e = str2;
        this.f51173i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f51171d, qVar.f51171d) && TextUtils.equals(this.f51172e, qVar.f51172e) && this.f51173i.equals(qVar.f51173i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f51171d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f51172e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f51173i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f51171d != null) {
            str = " [" + this.f51171d + ", " + this.f51172e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f51171d);
        parcel.writeString(this.f51172e);
        int size = this.f51173i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f51173i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f51171d = parcel.readString();
        this.f51172e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f51173i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f51174d;

        /* renamed from: e  reason: collision with root package name */
        public final int f51175e;

        /* renamed from: i  reason: collision with root package name */
        public final String f51176i;

        /* renamed from: o  reason: collision with root package name */
        public final String f51177o;

        /* renamed from: p  reason: collision with root package name */
        public final String f51178p;

        /* renamed from: q  reason: collision with root package name */
        public final String f51179q;

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
            this.f51174d = i10;
            this.f51175e = i11;
            this.f51176i = str;
            this.f51177o = str2;
            this.f51178p = str3;
            this.f51179q = str4;
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
                if (this.f51174d == bVar.f51174d && this.f51175e == bVar.f51175e && TextUtils.equals(this.f51176i, bVar.f51176i) && TextUtils.equals(this.f51177o, bVar.f51177o) && TextUtils.equals(this.f51178p, bVar.f51178p) && TextUtils.equals(this.f51179q, bVar.f51179q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f51174d * 31) + this.f51175e) * 31;
            String str = this.f51176i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f51177o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f51178p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f51179q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f51174d);
            parcel.writeInt(this.f51175e);
            parcel.writeString(this.f51176i);
            parcel.writeString(this.f51177o);
            parcel.writeString(this.f51178p);
            parcel.writeString(this.f51179q);
        }

        b(Parcel parcel) {
            this.f51174d = parcel.readInt();
            this.f51175e = parcel.readInt();
            this.f51176i = parcel.readString();
            this.f51177o = parcel.readString();
            this.f51178p = parcel.readString();
            this.f51179q = parcel.readString();
        }
    }
}
