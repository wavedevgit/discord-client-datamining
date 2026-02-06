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
    private final b[] f48835d;

    /* renamed from: e  reason: collision with root package name */
    private int f48836e;

    /* renamed from: i  reason: collision with root package name */
    public final String f48837i;

    /* renamed from: o  reason: collision with root package name */
    public final int f48838o;

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
        private int f48839d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f48840e;

        /* renamed from: i  reason: collision with root package name */
        public final String f48841i;

        /* renamed from: o  reason: collision with root package name */
        public final String f48842o;

        /* renamed from: p  reason: collision with root package name */
        public final byte[] f48843p;

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
            if (c() && !bVar.c() && d(bVar.f48840e)) {
                return true;
            }
            return false;
        }

        public b b(byte[] bArr) {
            return new b(this.f48840e, this.f48841i, this.f48842o, bArr);
        }

        public boolean c() {
            if (this.f48843p != null) {
                return true;
            }
            return false;
        }

        public boolean d(UUID uuid) {
            if (!lc.d.f35972a.equals(this.f48840e) && !uuid.equals(this.f48840e)) {
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
            if (!w0.c(this.f48841i, bVar.f48841i) || !w0.c(this.f48842o, bVar.f48842o) || !w0.c(this.f48840e, bVar.f48840e) || !Arrays.equals(this.f48843p, bVar.f48843p)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            if (this.f48839d == 0) {
                int hashCode2 = this.f48840e.hashCode() * 31;
                String str = this.f48841i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                this.f48839d = ((((hashCode2 + hashCode) * 31) + this.f48842o.hashCode()) * 31) + Arrays.hashCode(this.f48843p);
            }
            return this.f48839d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f48840e.getMostSignificantBits());
            parcel.writeLong(this.f48840e.getLeastSignificantBits());
            parcel.writeString(this.f48841i);
            parcel.writeString(this.f48842o);
            parcel.writeByteArray(this.f48843p);
        }

        public b(UUID uuid, String str, String str2, byte[] bArr) {
            this.f48840e = (UUID) ne.a.e(uuid);
            this.f48841i = str;
            this.f48842o = (String) ne.a.e(str2);
            this.f48843p = bArr;
        }

        b(Parcel parcel) {
            this.f48840e = new UUID(parcel.readLong(), parcel.readLong());
            this.f48841i = parcel.readString();
            this.f48842o = (String) w0.j(parcel.readString());
            this.f48843p = parcel.createByteArray();
        }
    }

    public m(List list) {
        this(null, false, (b[]) list.toArray(new b[0]));
    }

    private static boolean b(ArrayList arrayList, int i10, UUID uuid) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (((b) arrayList.get(i11)).f48840e.equals(uuid)) {
                return true;
            }
        }
        return false;
    }

    public static m l(m mVar, m mVar2) {
        String str;
        b[] bVarArr;
        b[] bVarArr2;
        ArrayList arrayList = new ArrayList();
        if (mVar != null) {
            str = mVar.f48837i;
            for (b bVar : mVar.f48835d) {
                if (bVar.c()) {
                    arrayList.add(bVar);
                }
            }
        } else {
            str = null;
        }
        if (mVar2 != null) {
            if (str == null) {
                str = mVar2.f48837i;
            }
            int size = arrayList.size();
            for (b bVar2 : mVar2.f48835d) {
                if (bVar2.c() && !b(arrayList, size, bVar2.f48840e)) {
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
        UUID uuid = lc.d.f35972a;
        if (uuid.equals(bVar.f48840e)) {
            if (uuid.equals(bVar2.f48840e)) {
                return 0;
            }
            return 1;
        }
        return bVar.f48840e.compareTo(bVar2.f48840e);
    }

    public m c(String str) {
        if (w0.c(this.f48837i, str)) {
            return this;
        }
        return new m(str, false, this.f48835d);
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
            if (w0.c(this.f48837i, mVar.f48837i) && Arrays.equals(this.f48835d, mVar.f48835d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        if (this.f48836e == 0) {
            String str = this.f48837i;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            this.f48836e = (hashCode * 31) + Arrays.hashCode(this.f48835d);
        }
        return this.f48836e;
    }

    public b o(int i10) {
        return this.f48835d[i10];
    }

    public m p(m mVar) {
        boolean z10;
        String str;
        String str2 = this.f48837i;
        if (str2 != null && (str = mVar.f48837i) != null && !TextUtils.equals(str2, str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.g(z10);
        String str3 = this.f48837i;
        if (str3 == null) {
            str3 = mVar.f48837i;
        }
        return new m(str3, (b[]) w0.O0(this.f48835d, mVar.f48835d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f48837i);
        parcel.writeTypedArray(this.f48835d, 0);
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
        this.f48837i = str;
        bVarArr = z10 ? (b[]) bVarArr.clone() : bVarArr;
        this.f48835d = bVarArr;
        this.f48838o = bVarArr.length;
        Arrays.sort(bVarArr, this);
    }

    m(Parcel parcel) {
        this.f48837i = parcel.readString();
        b[] bVarArr = (b[]) w0.j((b[]) parcel.createTypedArray(b.CREATOR));
        this.f48835d = bVarArr;
        this.f48838o = bVarArr.length;
    }
}
