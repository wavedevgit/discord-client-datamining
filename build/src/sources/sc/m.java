package sc;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m implements Comparator, Parcelable {
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final b[] f48025d;

    /* renamed from: e  reason: collision with root package name */
    private int f48026e;

    /* renamed from: i  reason: collision with root package name */
    public final String f48027i;

    /* renamed from: o  reason: collision with root package name */
    public final int f48028o;

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
        private int f48029d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f48030e;

        /* renamed from: i  reason: collision with root package name */
        public final String f48031i;

        /* renamed from: o  reason: collision with root package name */
        public final String f48032o;

        /* renamed from: p  reason: collision with root package name */
        public final byte[] f48033p;

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
            if (c() && !bVar.c() && d(bVar.f48030e)) {
                return true;
            }
            return false;
        }

        public b b(byte[] bArr) {
            return new b(this.f48030e, this.f48031i, this.f48032o, bArr);
        }

        public boolean c() {
            if (this.f48033p != null) {
                return true;
            }
            return false;
        }

        public boolean d(UUID uuid) {
            if (!mc.d.f36226a.equals(this.f48030e) && !uuid.equals(this.f48030e)) {
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
            if (!w0.c(this.f48031i, bVar.f48031i) || !w0.c(this.f48032o, bVar.f48032o) || !w0.c(this.f48030e, bVar.f48030e) || !Arrays.equals(this.f48033p, bVar.f48033p)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            if (this.f48029d == 0) {
                int hashCode2 = this.f48030e.hashCode() * 31;
                String str = this.f48031i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                this.f48029d = ((((hashCode2 + hashCode) * 31) + this.f48032o.hashCode()) * 31) + Arrays.hashCode(this.f48033p);
            }
            return this.f48029d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f48030e.getMostSignificantBits());
            parcel.writeLong(this.f48030e.getLeastSignificantBits());
            parcel.writeString(this.f48031i);
            parcel.writeString(this.f48032o);
            parcel.writeByteArray(this.f48033p);
        }

        public b(UUID uuid, String str, String str2, byte[] bArr) {
            this.f48030e = (UUID) oe.a.e(uuid);
            this.f48031i = str;
            this.f48032o = (String) oe.a.e(str2);
            this.f48033p = bArr;
        }

        b(Parcel parcel) {
            this.f48030e = new UUID(parcel.readLong(), parcel.readLong());
            this.f48031i = parcel.readString();
            this.f48032o = (String) w0.j(parcel.readString());
            this.f48033p = parcel.createByteArray();
        }
    }

    public m(List list) {
        this(null, false, (b[]) list.toArray(new b[0]));
    }

    private static boolean b(ArrayList arrayList, int i10, UUID uuid) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (((b) arrayList.get(i11)).f48030e.equals(uuid)) {
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
            str = mVar.f48027i;
            for (b bVar : mVar.f48025d) {
                if (bVar.c()) {
                    arrayList.add(bVar);
                }
            }
        } else {
            str = null;
        }
        if (mVar2 != null) {
            if (str == null) {
                str = mVar2.f48027i;
            }
            int size = arrayList.size();
            for (b bVar2 : mVar2.f48025d) {
                if (bVar2.c() && !b(arrayList, size, bVar2.f48030e)) {
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
        UUID uuid = mc.d.f36226a;
        if (uuid.equals(bVar.f48030e)) {
            if (uuid.equals(bVar2.f48030e)) {
                return 0;
            }
            return 1;
        }
        return bVar.f48030e.compareTo(bVar2.f48030e);
    }

    public m c(String str) {
        if (w0.c(this.f48027i, str)) {
            return this;
        }
        return new m(str, false, this.f48025d);
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
            if (w0.c(this.f48027i, mVar.f48027i) && Arrays.equals(this.f48025d, mVar.f48025d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        if (this.f48026e == 0) {
            String str = this.f48027i;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            this.f48026e = (hashCode * 31) + Arrays.hashCode(this.f48025d);
        }
        return this.f48026e;
    }

    public b o(int i10) {
        return this.f48025d[i10];
    }

    public m p(m mVar) {
        boolean z10;
        String str;
        String str2 = this.f48027i;
        if (str2 != null && (str = mVar.f48027i) != null && !TextUtils.equals(str2, str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        oe.a.g(z10);
        String str3 = this.f48027i;
        if (str3 == null) {
            str3 = mVar.f48027i;
        }
        return new m(str3, (b[]) w0.O0(this.f48025d, mVar.f48025d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f48027i);
        parcel.writeTypedArray(this.f48025d, 0);
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
        this.f48027i = str;
        bVarArr = z10 ? (b[]) bVarArr.clone() : bVarArr;
        this.f48025d = bVarArr;
        this.f48028o = bVarArr.length;
        Arrays.sort(bVarArr, this);
    }

    m(Parcel parcel) {
        this.f48027i = parcel.readString();
        b[] bVarArr = (b[]) w0.j((b[]) parcel.createTypedArray(b.CREATOR));
        this.f48025d = bVarArr;
        this.f48028o = bVarArr.length;
    }
}
