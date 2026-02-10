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
    private final b[] f49708d;

    /* renamed from: e  reason: collision with root package name */
    private int f49709e;

    /* renamed from: i  reason: collision with root package name */
    public final String f49710i;

    /* renamed from: o  reason: collision with root package name */
    public final int f49711o;

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
        private int f49712d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f49713e;

        /* renamed from: i  reason: collision with root package name */
        public final String f49714i;

        /* renamed from: o  reason: collision with root package name */
        public final String f49715o;

        /* renamed from: p  reason: collision with root package name */
        public final byte[] f49716p;

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
            if (c() && !bVar.c() && d(bVar.f49713e)) {
                return true;
            }
            return false;
        }

        public b b(byte[] bArr) {
            return new b(this.f49713e, this.f49714i, this.f49715o, bArr);
        }

        public boolean c() {
            if (this.f49716p != null) {
                return true;
            }
            return false;
        }

        public boolean d(UUID uuid) {
            if (!mc.d.f36850a.equals(this.f49713e) && !uuid.equals(this.f49713e)) {
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
            if (!w0.c(this.f49714i, bVar.f49714i) || !w0.c(this.f49715o, bVar.f49715o) || !w0.c(this.f49713e, bVar.f49713e) || !Arrays.equals(this.f49716p, bVar.f49716p)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            if (this.f49712d == 0) {
                int hashCode2 = this.f49713e.hashCode() * 31;
                String str = this.f49714i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                this.f49712d = ((((hashCode2 + hashCode) * 31) + this.f49715o.hashCode()) * 31) + Arrays.hashCode(this.f49716p);
            }
            return this.f49712d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f49713e.getMostSignificantBits());
            parcel.writeLong(this.f49713e.getLeastSignificantBits());
            parcel.writeString(this.f49714i);
            parcel.writeString(this.f49715o);
            parcel.writeByteArray(this.f49716p);
        }

        public b(UUID uuid, String str, String str2, byte[] bArr) {
            this.f49713e = (UUID) oe.a.e(uuid);
            this.f49714i = str;
            this.f49715o = (String) oe.a.e(str2);
            this.f49716p = bArr;
        }

        b(Parcel parcel) {
            this.f49713e = new UUID(parcel.readLong(), parcel.readLong());
            this.f49714i = parcel.readString();
            this.f49715o = (String) w0.j(parcel.readString());
            this.f49716p = parcel.createByteArray();
        }
    }

    public m(List list) {
        this(null, false, (b[]) list.toArray(new b[0]));
    }

    private static boolean b(ArrayList arrayList, int i10, UUID uuid) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (((b) arrayList.get(i11)).f49713e.equals(uuid)) {
                return true;
            }
        }
        return false;
    }

    public static m h(m mVar, m mVar2) {
        String str;
        b[] bVarArr;
        b[] bVarArr2;
        ArrayList arrayList = new ArrayList();
        if (mVar != null) {
            str = mVar.f49710i;
            for (b bVar : mVar.f49708d) {
                if (bVar.c()) {
                    arrayList.add(bVar);
                }
            }
        } else {
            str = null;
        }
        if (mVar2 != null) {
            if (str == null) {
                str = mVar2.f49710i;
            }
            int size = arrayList.size();
            for (b bVar2 : mVar2.f49708d) {
                if (bVar2.c() && !b(arrayList, size, bVar2.f49713e)) {
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
        UUID uuid = mc.d.f36850a;
        if (uuid.equals(bVar.f49713e)) {
            if (uuid.equals(bVar2.f49713e)) {
                return 0;
            }
            return 1;
        }
        return bVar.f49713e.compareTo(bVar2.f49713e);
    }

    public m c(String str) {
        if (w0.c(this.f49710i, str)) {
            return this;
        }
        return new m(str, false, this.f49708d);
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
            if (w0.c(this.f49710i, mVar.f49710i) && Arrays.equals(this.f49708d, mVar.f49708d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        if (this.f49709e == 0) {
            String str = this.f49710i;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            this.f49709e = (hashCode * 31) + Arrays.hashCode(this.f49708d);
        }
        return this.f49709e;
    }

    public b i(int i10) {
        return this.f49708d[i10];
    }

    public m j(m mVar) {
        boolean z10;
        String str;
        String str2 = this.f49710i;
        if (str2 != null && (str = mVar.f49710i) != null && !TextUtils.equals(str2, str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        oe.a.g(z10);
        String str3 = this.f49710i;
        if (str3 == null) {
            str3 = mVar.f49710i;
        }
        return new m(str3, (b[]) w0.O0(this.f49708d, mVar.f49708d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f49710i);
        parcel.writeTypedArray(this.f49708d, 0);
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
        this.f49710i = str;
        bVarArr = z10 ? (b[]) bVarArr.clone() : bVarArr;
        this.f49708d = bVarArr;
        this.f49711o = bVarArr.length;
        Arrays.sort(bVarArr, this);
    }

    m(Parcel parcel) {
        this.f49710i = parcel.readString();
        b[] bVarArr = (b[]) w0.j((b[]) parcel.createTypedArray(b.CREATOR));
        this.f49708d = bVarArr;
        this.f49711o = bVarArr.length;
    }
}
