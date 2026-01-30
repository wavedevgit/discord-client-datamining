package rc;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m implements Comparator, Parcelable {
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final b[] f48233d;

    /* renamed from: e  reason: collision with root package name */
    private int f48234e;

    /* renamed from: i  reason: collision with root package name */
    public final String f48235i;

    /* renamed from: o  reason: collision with root package name */
    public final int f48236o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public m createFromParcel(Parcel parcel) {
            return new m(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public m[] newArray(int i10) {
            return new m[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements Parcelable {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private int f48237d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f48238e;

        /* renamed from: i  reason: collision with root package name */
        public final String f48239i;

        /* renamed from: o  reason: collision with root package name */
        public final String f48240o;

        /* renamed from: p  reason: collision with root package name */
        public final byte[] f48241p;

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

        public b(UUID uuid, String str, byte[] bArr) {
            this(uuid, null, str, bArr);
        }

        public boolean a(b bVar) {
            if (c() && !bVar.c() && d(bVar.f48238e)) {
                return true;
            }
            return false;
        }

        public b b(byte[] bArr) {
            return new b(this.f48238e, this.f48239i, this.f48240o, bArr);
        }

        public boolean c() {
            if (this.f48241p != null) {
                return true;
            }
            return false;
        }

        public boolean d(UUID uuid) {
            if (!lc.d.f37069a.equals(this.f48238e) && !uuid.equals(this.f48238e)) {
                return false;
            }
            return true;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            if (obj == this) {
                return true;
            }
            b bVar = (b) obj;
            if (!w0.c(this.f48239i, bVar.f48239i) || !w0.c(this.f48240o, bVar.f48240o) || !w0.c(this.f48238e, bVar.f48238e) || !Arrays.equals(this.f48241p, bVar.f48241p)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            if (this.f48237d == 0) {
                int hashCode2 = this.f48238e.hashCode() * 31;
                String str = this.f48239i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                this.f48237d = ((((hashCode2 + hashCode) * 31) + this.f48240o.hashCode()) * 31) + Arrays.hashCode(this.f48241p);
            }
            return this.f48237d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f48238e.getMostSignificantBits());
            parcel.writeLong(this.f48238e.getLeastSignificantBits());
            parcel.writeString(this.f48239i);
            parcel.writeString(this.f48240o);
            parcel.writeByteArray(this.f48241p);
        }

        public b(UUID uuid, String str, String str2, byte[] bArr) {
            this.f48238e = (UUID) ne.a.e(uuid);
            this.f48239i = str;
            this.f48240o = (String) ne.a.e(str2);
            this.f48241p = bArr;
        }

        b(Parcel parcel) {
            this.f48238e = new UUID(parcel.readLong(), parcel.readLong());
            this.f48239i = parcel.readString();
            this.f48240o = (String) w0.j(parcel.readString());
            this.f48241p = parcel.createByteArray();
        }
    }

    public m(List list) {
        this(null, false, (b[]) list.toArray(new b[0]));
    }

    private static boolean b(ArrayList arrayList, int i10, UUID uuid) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (((b) arrayList.get(i11)).f48238e.equals(uuid)) {
                return true;
            }
        }
        return false;
    }

    public static m j(m mVar, m mVar2) {
        String str;
        b[] bVarArr;
        b[] bVarArr2;
        ArrayList arrayList = new ArrayList();
        if (mVar != null) {
            str = mVar.f48235i;
            for (b bVar : mVar.f48233d) {
                if (bVar.c()) {
                    arrayList.add(bVar);
                }
            }
        } else {
            str = null;
        }
        if (mVar2 != null) {
            if (str == null) {
                str = mVar2.f48235i;
            }
            int size = arrayList.size();
            for (b bVar2 : mVar2.f48233d) {
                if (bVar2.c() && !b(arrayList, size, bVar2.f48238e)) {
                    arrayList.add(bVar2);
                }
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new m(str, arrayList);
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(b bVar, b bVar2) {
        UUID uuid = lc.d.f37069a;
        if (uuid.equals(bVar.f48238e)) {
            if (uuid.equals(bVar2.f48238e)) {
                return 0;
            }
            return 1;
        }
        return bVar.f48238e.compareTo(bVar2.f48238e);
    }

    public m c(String str) {
        if (w0.c(this.f48235i, str)) {
            return this;
        }
        return new m(str, false, this.f48233d);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            m mVar = (m) obj;
            if (w0.c(this.f48235i, mVar.f48235i) && Arrays.equals(this.f48233d, mVar.f48233d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        if (this.f48234e == 0) {
            String str = this.f48235i;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            this.f48234e = (hashCode * 31) + Arrays.hashCode(this.f48233d);
        }
        return this.f48234e;
    }

    public b k(int i10) {
        return this.f48233d[i10];
    }

    public m m(m mVar) {
        boolean z10;
        String str;
        String str2 = this.f48235i;
        if (str2 != null && (str = mVar.f48235i) != null && !TextUtils.equals(str2, str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.g(z10);
        String str3 = this.f48235i;
        if (str3 == null) {
            str3 = mVar.f48235i;
        }
        return new m(str3, (b[]) w0.O0(this.f48233d, mVar.f48233d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f48235i);
        parcel.writeTypedArray(this.f48233d, 0);
    }

    public m(String str, List list) {
        this(str, false, (b[]) list.toArray(new b[0]));
    }

    public m(b... bVarArr) {
        this((String) null, bVarArr);
    }

    public m(String str, b... bVarArr) {
        this(str, true, bVarArr);
    }

    private m(String str, boolean z10, b... bVarArr) {
        this.f48235i = str;
        bVarArr = z10 ? (b[]) bVarArr.clone() : bVarArr;
        this.f48233d = bVarArr;
        this.f48236o = bVarArr.length;
        Arrays.sort(bVarArr, this);
    }

    m(Parcel parcel) {
        this.f48235i = parcel.readString();
        b[] bVarArr = (b[]) w0.j((b[]) parcel.createTypedArray(b.CREATOR));
        this.f48233d = bVarArr;
        this.f48236o = bVarArr.length;
    }
}
