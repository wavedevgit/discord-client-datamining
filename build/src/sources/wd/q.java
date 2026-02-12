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
    public final String f52655d;

    /* renamed from: e  reason: collision with root package name */
    public final String f52656e;

    /* renamed from: i  reason: collision with root package name */
    public final List f52657i;

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
        this.f52655d = str;
        this.f52656e = str2;
        this.f52657i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f52655d, qVar.f52655d) && TextUtils.equals(this.f52656e, qVar.f52656e) && this.f52657i.equals(qVar.f52657i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f52655d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f52656e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f52657i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f52655d != null) {
            str = " [" + this.f52655d + ", " + this.f52656e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f52655d);
        parcel.writeString(this.f52656e);
        int size = this.f52657i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f52657i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f52655d = parcel.readString();
        this.f52656e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f52657i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f52658d;

        /* renamed from: e  reason: collision with root package name */
        public final int f52659e;

        /* renamed from: i  reason: collision with root package name */
        public final String f52660i;

        /* renamed from: o  reason: collision with root package name */
        public final String f52661o;

        /* renamed from: p  reason: collision with root package name */
        public final String f52662p;

        /* renamed from: q  reason: collision with root package name */
        public final String f52663q;

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
            this.f52658d = i10;
            this.f52659e = i11;
            this.f52660i = str;
            this.f52661o = str2;
            this.f52662p = str3;
            this.f52663q = str4;
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
                if (this.f52658d == bVar.f52658d && this.f52659e == bVar.f52659e && TextUtils.equals(this.f52660i, bVar.f52660i) && TextUtils.equals(this.f52661o, bVar.f52661o) && TextUtils.equals(this.f52662p, bVar.f52662p) && TextUtils.equals(this.f52663q, bVar.f52663q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f52658d * 31) + this.f52659e) * 31;
            String str = this.f52660i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f52661o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f52662p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f52663q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f52658d);
            parcel.writeInt(this.f52659e);
            parcel.writeString(this.f52660i);
            parcel.writeString(this.f52661o);
            parcel.writeString(this.f52662p);
            parcel.writeString(this.f52663q);
        }

        b(Parcel parcel) {
            this.f52658d = parcel.readInt();
            this.f52659e = parcel.readInt();
            this.f52660i = parcel.readString();
            this.f52661o = parcel.readString();
            this.f52662p = parcel.readString();
            this.f52663q = parcel.readString();
        }
    }
}
