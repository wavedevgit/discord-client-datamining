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
    private final b[] f48751d;

    /* renamed from: e  reason: collision with root package name */
    private int f48752e;

    /* renamed from: i  reason: collision with root package name */
    public final String f48753i;

    /* renamed from: o  reason: collision with root package name */
    public final int f48754o;

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
        private int f48755d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f48756e;

        /* renamed from: i  reason: collision with root package name */
        public final String f48757i;

        /* renamed from: o  reason: collision with root package name */
        public final String f48758o;

        /* renamed from: p  reason: collision with root package name */
        public final byte[] f48759p;

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
            if (c() && !bVar.c() && d(bVar.f48756e)) {
                return true;
            }
            return false;
        }

        public b b(byte[] bArr) {
            return new b(this.f48756e, this.f48757i, this.f48758o, bArr);
        }

        public boolean c() {
            if (this.f48759p != null) {
                return true;
            }
            return false;
        }

        public boolean d(UUID uuid) {
            if (!lc.d.f36579a.equals(this.f48756e) && !uuid.equals(this.f48756e)) {
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
            if (!w0.c(this.f48757i, bVar.f48757i) || !w0.c(this.f48758o, bVar.f48758o) || !w0.c(this.f48756e, bVar.f48756e) || !Arrays.equals(this.f48759p, bVar.f48759p)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            if (this.f48755d == 0) {
                int hashCode2 = this.f48756e.hashCode() * 31;
                String str = this.f48757i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                this.f48755d = ((((hashCode2 + hashCode) * 31) + this.f48758o.hashCode()) * 31) + Arrays.hashCode(this.f48759p);
            }
            return this.f48755d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeLong(this.f48756e.getMostSignificantBits());
            parcel.writeLong(this.f48756e.getLeastSignificantBits());
            parcel.writeString(this.f48757i);
            parcel.writeString(this.f48758o);
            parcel.writeByteArray(this.f48759p);
        }

        public b(UUID uuid, String str, String str2, byte[] bArr) {
            this.f48756e = (UUID) ne.a.e(uuid);
            this.f48757i = str;
            this.f48758o = (String) ne.a.e(str2);
            this.f48759p = bArr;
        }

        b(Parcel parcel) {
            this.f48756e = new UUID(parcel.readLong(), parcel.readLong());
            this.f48757i = parcel.readString();
            this.f48758o = (String) w0.j(parcel.readString());
            this.f48759p = parcel.createByteArray();
        }
    }

    public m(List list) {
        this(null, false, (b[]) list.toArray(new b[0]));
    }

    private static boolean b(ArrayList arrayList, int i10, UUID uuid) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (((b) arrayList.get(i11)).f48756e.equals(uuid)) {
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
            str = mVar.f48753i;
            for (b bVar : mVar.f48751d) {
                if (bVar.c()) {
                    arrayList.add(bVar);
                }
            }
        } else {
            str = null;
        }
        if (mVar2 != null) {
            if (str == null) {
                str = mVar2.f48753i;
            }
            int size = arrayList.size();
            for (b bVar2 : mVar2.f48751d) {
                if (bVar2.c() && !b(arrayList, size, bVar2.f48756e)) {
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
        UUID uuid = lc.d.f36579a;
        if (uuid.equals(bVar.f48756e)) {
            if (uuid.equals(bVar2.f48756e)) {
                return 0;
            }
            return 1;
        }
        return bVar.f48756e.compareTo(bVar2.f48756e);
    }

    public m c(String str) {
        if (w0.c(this.f48753i, str)) {
            return this;
        }
        return new m(str, false, this.f48751d);
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
            if (w0.c(this.f48753i, mVar.f48753i) && Arrays.equals(this.f48751d, mVar.f48751d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        if (this.f48752e == 0) {
            String str = this.f48753i;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            this.f48752e = (hashCode * 31) + Arrays.hashCode(this.f48751d);
        }
        return this.f48752e;
    }

    public b o(int i10) {
        return this.f48751d[i10];
    }

    public m p(m mVar) {
        boolean z10;
        String str;
        String str2 = this.f48753i;
        if (str2 != null && (str = mVar.f48753i) != null && !TextUtils.equals(str2, str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.g(z10);
        String str3 = this.f48753i;
        if (str3 == null) {
            str3 = mVar.f48753i;
        }
        return new m(str3, (b[]) w0.O0(this.f48751d, mVar.f48751d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f48753i);
        parcel.writeTypedArray(this.f48751d, 0);
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
        this.f48753i = str;
        bVarArr = z10 ? (b[]) bVarArr.clone() : bVarArr;
        this.f48751d = bVarArr;
        this.f48754o = bVarArr.length;
        Arrays.sort(bVarArr, this);
    }

    m(Parcel parcel) {
        this.f48753i = parcel.readString();
        b[] bVarArr = (b[]) w0.j((b[]) parcel.createTypedArray(b.CREATOR));
        this.f48751d = bVarArr;
        this.f48754o = bVarArr.length;
    }
}
