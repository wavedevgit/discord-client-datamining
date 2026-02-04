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
    public final String f51496d;

    /* renamed from: e  reason: collision with root package name */
    public final String f51497e;

    /* renamed from: i  reason: collision with root package name */
    public final List f51498i;

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
        this.f51496d = str;
        this.f51497e = str2;
        this.f51498i = Collections.unmodifiableList(new ArrayList(list));
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
            if (TextUtils.equals(this.f51496d, qVar.f51496d) && TextUtils.equals(this.f51497e, qVar.f51497e) && this.f51498i.equals(qVar.f51498i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        String str = this.f51496d;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * 31;
        String str2 = this.f51497e;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return ((i12 + i11) * 31) + this.f51498i.hashCode();
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HlsTrackMetadataEntry");
        if (this.f51496d != null) {
            str = " [" + this.f51496d + ", " + this.f51497e + "]";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f51496d);
        parcel.writeString(this.f51497e);
        int size = this.f51498i.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            parcel.writeParcelable((Parcelable) this.f51498i.get(i11), 0);
        }
    }

    q(Parcel parcel) {
        this.f51496d = parcel.readString();
        this.f51497e = parcel.readString();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add((b) parcel.readParcelable(b.class.getClassLoader()));
        }
        this.f51498i = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        public final int f51499d;

        /* renamed from: e  reason: collision with root package name */
        public final int f51500e;

        /* renamed from: i  reason: collision with root package name */
        public final String f51501i;

        /* renamed from: o  reason: collision with root package name */
        public final String f51502o;

        /* renamed from: p  reason: collision with root package name */
        public final String f51503p;

        /* renamed from: q  reason: collision with root package name */
        public final String f51504q;

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
            this.f51499d = i10;
            this.f51500e = i11;
            this.f51501i = str;
            this.f51502o = str2;
            this.f51503p = str3;
            this.f51504q = str4;
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
                if (this.f51499d == bVar.f51499d && this.f51500e == bVar.f51500e && TextUtils.equals(this.f51501i, bVar.f51501i) && TextUtils.equals(this.f51502o, bVar.f51502o) && TextUtils.equals(this.f51503p, bVar.f51503p) && TextUtils.equals(this.f51504q, bVar.f51504q)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11;
            int i12;
            int i13 = ((this.f51499d * 31) + this.f51500e) * 31;
            String str = this.f51501i;
            int i14 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i15 = (i13 + i10) * 31;
            String str2 = this.f51502o;
            if (str2 != null) {
                i11 = str2.hashCode();
            } else {
                i11 = 0;
            }
            int i16 = (i15 + i11) * 31;
            String str3 = this.f51503p;
            if (str3 != null) {
                i12 = str3.hashCode();
            } else {
                i12 = 0;
            }
            int i17 = (i16 + i12) * 31;
            String str4 = this.f51504q;
            if (str4 != null) {
                i14 = str4.hashCode();
            }
            return i17 + i14;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f51499d);
            parcel.writeInt(this.f51500e);
            parcel.writeString(this.f51501i);
            parcel.writeString(this.f51502o);
            parcel.writeString(this.f51503p);
            parcel.writeString(this.f51504q);
        }

        b(Parcel parcel) {
            this.f51499d = parcel.readInt();
            this.f51500e = parcel.readInt();
            this.f51501i = parcel.readString();
            this.f51502o = parcel.readString();
            this.f51503p = parcel.readString();
            this.f51504q = parcel.readString();
        }
    }
}
