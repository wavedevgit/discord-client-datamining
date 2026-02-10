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
    public final String f53625d;

    /* renamed from: e  reason: collision with root package name */
    public final String f53626e;

    /* renamed from: i  reason: collision with root package name */
    public final List f53627i;

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
        this.f53625d = str;
        this.f53626e = str2;
        this.f53627i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f53625d, qVar.f53625d) && TextUtils.equals(this.f53626e, qVar.f53626e) && this.f53627i.equals(qVar.f53627i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f53625d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f53626e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f53627i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f53625d != null) {
            str = " [" + this.f53625d + ", " + this.f53626e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f53625d);
        parcel.writeString(this.f53626e);
        int size = this.f53627i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f53627i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f53625d = parcel.readString();
        this.f53626e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f53627i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f53628d;

        /* renamed from: e  reason: collision with root package name */
        public final int f53629e;

        /* renamed from: i  reason: collision with root package name */
        public final String f53630i;

        /* renamed from: o  reason: collision with root package name */
        public final String f53631o;

        /* renamed from: p  reason: collision with root package name */
        public final String f53632p;

        /* renamed from: q  reason: collision with root package name */
        public final String f53633q;

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
            this.f53628d = i10;
            this.f53629e = i11;
            this.f53630i = str;
            this.f53631o = str2;
            this.f53632p = str3;
            this.f53633q = str4;
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
                if (this.f53628d == bVar.f53628d && this.f53629e == bVar.f53629e && TextUtils.equals(this.f53630i, bVar.f53630i) && TextUtils.equals(this.f53631o, bVar.f53631o) && TextUtils.equals(this.f53632p, bVar.f53632p) && TextUtils.equals(this.f53633q, bVar.f53633q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f53628d * 31) + this.f53629e) * 31;
            String str = this.f53630i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f53631o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f53632p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f53633q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f53628d);
            parcel.writeInt(this.f53629e);
            parcel.writeString(this.f53630i);
            parcel.writeString(this.f53631o);
            parcel.writeString(this.f53632p);
            parcel.writeString(this.f53633q);
        }

        b(Parcel parcel) {
            this.f53628d = parcel.readInt();
            this.f53629e = parcel.readInt();
            this.f53630i = parcel.readString();
            this.f53631o = parcel.readString();
            this.f53632p = parcel.readString();
            this.f53633q = parcel.readString();
        }
    }
}
