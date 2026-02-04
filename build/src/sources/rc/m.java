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
    private final b[] f48741d;

    /* renamed from: e  reason: collision with root package name */
    private int f48742e;

    /* renamed from: i  reason: collision with root package name */
    public final String f48743i;

    /* renamed from: o  reason: collision with root package name */
    public final int f48744o;

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
        private int f48745d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f48746e;

        /* renamed from: i  reason: collision with root package name */
        public final String f48747i;

        /* renamed from: o  reason: collision with root package name */
        public final String f48748o;

        /* renamed from: p  reason: collision with root package name */
        public final byte[] f48749p;

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
            if (c() && !bVar.c() && d(bVar.f48746e)) {
                return true;
            }
            return false;
        }

        public b b(byte[] bArr) {
            return new b(this.f48746e, this.f48747i, this.f48748o, bArr);
        }

        public boolean c() {
            if (this.f48749p != null) {
                return true;
            }
            return false;
        }

        public boolean d(UUID uuid) {
            if (!lc.d.f36652a.equals(this.f48746e) && !uuid.equals(this.f48746e)) {
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
            if (!w0.c(this.f48747i, bVar.f48747i) || !w0.c(this.f48748o, bVar.f48748o) || !w0.c(this.f48746e, bVar.f48746e) || !Arrays.equals(this.f48749p, bVar.f48749p)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            if (this.f48745d == 0) {
                int hashCode2 = this.f48746e.hashCode() * 31;
                String str = this.f48747i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                this.f48745d = ((((hashCode2 + hashCode) * 31) + this.f48748o.hashCode()) * 31) + Arrays.hashCode(this.f48749p);
            }
            return this.f48745d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f48746e.getMostSignificantBits());
            parcel.writeLong(this.f48746e.getLeastSignificantBits());
            parcel.writeString(this.f48747i);
            parcel.writeString(this.f48748o);
            parcel.writeByteArray(this.f48749p);
        }

        public b(UUID uuid, String str, String str2, byte[] bArr) {
            this.f48746e = (UUID) ne.a.e(uuid);
            this.f48747i = str;
            this.f48748o = (String) ne.a.e(str2);
            this.f48749p = bArr;
        }

        b(Parcel parcel) {
            this.f48746e = new UUID(parcel.readLong(), parcel.readLong());
            this.f48747i = parcel.readString();
            this.f48748o = (String) w0.j(parcel.readString());
            this.f48749p = parcel.createByteArray();
        }
    }

    public m(List list) {
        this(null, false, (b[]) list.toArray(new b[0]));
    }

    private static boolean b(ArrayList arrayList, int i10, UUID uuid) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (((b) arrayList.get(i11)).f48746e.equals(uuid)) {
                return true;
            }
        }
        return false;
    }

    public static m m(m mVar, m mVar2) {
        String str;
        b[] bVarArr;
        b[] bVarArr2;
        ArrayList arrayList = new ArrayList();
        if (mVar != null) {
            str = mVar.f48743i;
            for (b bVar : mVar.f48741d) {
                if (bVar.c()) {
                    arrayList.add(bVar);
                }
            }
        } else {
            str = null;
        }
        if (mVar2 != null) {
            if (str == null) {
                str = mVar2.f48743i;
            }
            int size = arrayList.size();
            for (b bVar2 : mVar2.f48741d) {
                if (bVar2.c() && !b(arrayList, size, bVar2.f48746e)) {
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
        UUID uuid = lc.d.f36652a;
        if (uuid.equals(bVar.f48746e)) {
            if (uuid.equals(bVar2.f48746e)) {
                return 0;
            }
            return 1;
        }
        return bVar.f48746e.compareTo(bVar2.f48746e);
    }

    public m c(String str) {
        if (w0.c(this.f48743i, str)) {
            return this;
        }
        return new m(str, false, this.f48741d);
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
            if (w0.c(this.f48743i, mVar.f48743i) && Arrays.equals(this.f48741d, mVar.f48741d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        if (this.f48742e == 0) {
            String str = this.f48743i;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            this.f48742e = (hashCode * 31) + Arrays.hashCode(this.f48741d);
        }
        return this.f48742e;
    }

    public b n(int i10) {
        return this.f48741d[i10];
    }

    public m o(m mVar) {
        boolean z10;
        String str;
        String str2 = this.f48743i;
        if (str2 != null && (str = mVar.f48743i) != null && !TextUtils.equals(str2, str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.g(z10);
        String str3 = this.f48743i;
        if (str3 == null) {
            str3 = mVar.f48743i;
        }
        return new m(str3, (b[]) w0.O0(this.f48741d, mVar.f48741d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f48743i);
        parcel.writeTypedArray(this.f48741d, 0);
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
        this.f48743i = str;
        bVarArr = z10 ? (b[]) bVarArr.clone() : bVarArr;
        this.f48741d = bVarArr;
        this.f48744o = bVarArr.length;
        Arrays.sort(bVarArr, this);
    }

    m(Parcel parcel) {
        this.f48743i = parcel.readString();
        b[] bVarArr = (b[]) w0.j((b[]) parcel.createTypedArray(b.CREATOR));
        this.f48741d = bVarArr;
        this.f48744o = bVarArr.length;
    }
}
