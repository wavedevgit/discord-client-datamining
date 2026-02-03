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
    private final b[] f48744d;

    /* renamed from: e  reason: collision with root package name */
    private int f48745e;

    /* renamed from: i  reason: collision with root package name */
    public final String f48746i;

    /* renamed from: o  reason: collision with root package name */
    public final int f48747o;

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
        private int f48748d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f48749e;

        /* renamed from: i  reason: collision with root package name */
        public final String f48750i;

        /* renamed from: o  reason: collision with root package name */
        public final String f48751o;

        /* renamed from: p  reason: collision with root package name */
        public final byte[] f48752p;

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
            if (c() && !bVar.c() && d(bVar.f48749e)) {
                return true;
            }
            return false;
        }

        public b b(byte[] bArr) {
            return new b(this.f48749e, this.f48750i, this.f48751o, bArr);
        }

        public boolean c() {
            if (this.f48752p != null) {
                return true;
            }
            return false;
        }

        public boolean d(UUID uuid) {
            if (!lc.d.f36652a.equals(this.f48749e) && !uuid.equals(this.f48749e)) {
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
            if (!w0.c(this.f48750i, bVar.f48750i) || !w0.c(this.f48751o, bVar.f48751o) || !w0.c(this.f48749e, bVar.f48749e) || !Arrays.equals(this.f48752p, bVar.f48752p)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            if (this.f48748d == 0) {
                int hashCode2 = this.f48749e.hashCode() * 31;
                String str = this.f48750i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                this.f48748d = ((((hashCode2 + hashCode) * 31) + this.f48751o.hashCode()) * 31) + Arrays.hashCode(this.f48752p);
            }
            return this.f48748d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f48749e.getMostSignificantBits());
            parcel.writeLong(this.f48749e.getLeastSignificantBits());
            parcel.writeString(this.f48750i);
            parcel.writeString(this.f48751o);
            parcel.writeByteArray(this.f48752p);
        }

        public b(UUID uuid, String str, String str2, byte[] bArr) {
            this.f48749e = (UUID) ne.a.e(uuid);
            this.f48750i = str;
            this.f48751o = (String) ne.a.e(str2);
            this.f48752p = bArr;
        }

        b(Parcel parcel) {
            this.f48749e = new UUID(parcel.readLong(), parcel.readLong());
            this.f48750i = parcel.readString();
            this.f48751o = (String) w0.j(parcel.readString());
            this.f48752p = parcel.createByteArray();
        }
    }

    public m(List list) {
        this(null, false, (b[]) list.toArray(new b[0]));
    }

    private static boolean b(ArrayList arrayList, int i10, UUID uuid) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (((b) arrayList.get(i11)).f48749e.equals(uuid)) {
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
            str = mVar.f48746i;
            for (b bVar : mVar.f48744d) {
                if (bVar.c()) {
                    arrayList.add(bVar);
                }
            }
        } else {
            str = null;
        }
        if (mVar2 != null) {
            if (str == null) {
                str = mVar2.f48746i;
            }
            int size = arrayList.size();
            for (b bVar2 : mVar2.f48744d) {
                if (bVar2.c() && !b(arrayList, size, bVar2.f48749e)) {
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
        if (uuid.equals(bVar.f48749e)) {
            if (uuid.equals(bVar2.f48749e)) {
                return 0;
            }
            return 1;
        }
        return bVar.f48749e.compareTo(bVar2.f48749e);
    }

    public m c(String str) {
        if (w0.c(this.f48746i, str)) {
            return this;
        }
        return new m(str, false, this.f48744d);
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
            if (w0.c(this.f48746i, mVar.f48746i) && Arrays.equals(this.f48744d, mVar.f48744d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        if (this.f48745e == 0) {
            String str = this.f48746i;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            this.f48745e = (hashCode * 31) + Arrays.hashCode(this.f48744d);
        }
        return this.f48745e;
    }

    public b n(int i10) {
        return this.f48744d[i10];
    }

    public m o(m mVar) {
        boolean z10;
        String str;
        String str2 = this.f48746i;
        if (str2 != null && (str = mVar.f48746i) != null && !TextUtils.equals(str2, str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.g(z10);
        String str3 = this.f48746i;
        if (str3 == null) {
            str3 = mVar.f48746i;
        }
        return new m(str3, (b[]) w0.O0(this.f48744d, mVar.f48744d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f48746i);
        parcel.writeTypedArray(this.f48744d, 0);
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
        this.f48746i = str;
        bVarArr = z10 ? (b[]) bVarArr.clone() : bVarArr;
        this.f48744d = bVarArr;
        this.f48747o = bVarArr.length;
        Arrays.sort(bVarArr, this);
    }

    m(Parcel parcel) {
        this.f48746i = parcel.readString();
        b[] bVarArr = (b[]) w0.j((b[]) parcel.createTypedArray(b.CREATOR));
        this.f48744d = bVarArr;
        this.f48747o = bVarArr.length;
    }
}
