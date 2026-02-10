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
    public final String f52654d;

    /* renamed from: e  reason: collision with root package name */
    public final String f52655e;

    /* renamed from: i  reason: collision with root package name */
    public final List f52656i;

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
        this.f52654d = str;
        this.f52655e = str2;
        this.f52656i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f52654d, qVar.f52654d) && TextUtils.equals(this.f52655e, qVar.f52655e) && this.f52656i.equals(qVar.f52656i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f52654d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f52655e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f52656i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f52654d != null) {
            str = " [" + this.f52654d + ", " + this.f52655e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f52654d);
        parcel.writeString(this.f52655e);
        int size = this.f52656i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f52656i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f52654d = parcel.readString();
        this.f52655e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f52656i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f52657d;

        /* renamed from: e  reason: collision with root package name */
        public final int f52658e;

        /* renamed from: i  reason: collision with root package name */
        public final String f52659i;

        /* renamed from: o  reason: collision with root package name */
        public final String f52660o;

        /* renamed from: p  reason: collision with root package name */
        public final String f52661p;

        /* renamed from: q  reason: collision with root package name */
        public final String f52662q;

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
            this.f52657d = i10;
            this.f52658e = i11;
            this.f52659i = str;
            this.f52660o = str2;
            this.f52661p = str3;
            this.f52662q = str4;
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
                if (this.f52657d == bVar.f52657d && this.f52658e == bVar.f52658e && TextUtils.equals(this.f52659i, bVar.f52659i) && TextUtils.equals(this.f52660o, bVar.f52660o) && TextUtils.equals(this.f52661p, bVar.f52661p) && TextUtils.equals(this.f52662q, bVar.f52662q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f52657d * 31) + this.f52658e) * 31;
            String str = this.f52659i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f52660o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f52661p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f52662q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f52657d);
            parcel.writeInt(this.f52658e);
            parcel.writeString(this.f52659i);
            parcel.writeString(this.f52660o);
            parcel.writeString(this.f52661p);
            parcel.writeString(this.f52662q);
        }

        b(Parcel parcel) {
            this.f52657d = parcel.readInt();
            this.f52658e = parcel.readInt();
            this.f52659i = parcel.readString();
            this.f52660o = parcel.readString();
            this.f52661p = parcel.readString();
            this.f52662q = parcel.readString();
        }
    }
}
