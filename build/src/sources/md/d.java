package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends i {
    public static final Parcelable.Creator<d> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36866e;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f36867i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f36868o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f36869p;

    /* renamed from: q  reason: collision with root package name */
    private final i[] f36870q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public d createFromParcel(Parcel parcel) {
            return new d(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public d[] newArray(int i10) {
            return new d[i10];
        }
    }

    public d(String str, boolean z10, boolean z11, String[] strArr, i[] iVarArr) {
        super("CTOC");
        this.f36866e = str;
        this.f36867i = z10;
        this.f36868o = z11;
        this.f36869p = strArr;
        this.f36870q = iVarArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && d.class == obj.getClass()) {
            d dVar = (d) obj;
            if (this.f36867i == dVar.f36867i && this.f36868o == dVar.f36868o && w0.c(this.f36866e, dVar.f36866e) && Arrays.equals(this.f36869p, dVar.f36869p) && Arrays.equals(this.f36870q, dVar.f36870q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((527 + (this.f36867i ? 1 : 0)) * 31) + (this.f36868o ? 1 : 0)) * 31;
        String str = this.f36866e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36866e);
        parcel.writeByte(this.f36867i ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f36868o ? (byte) 1 : (byte) 0);
        parcel.writeStringArray(this.f36869p);
        parcel.writeInt(this.f36870q.length);
        for (i iVar : this.f36870q) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    d(Parcel parcel) {
        super("CTOC");
        this.f36866e = (String) w0.j(parcel.readString());
        this.f36867i = parcel.readByte() != 0;
        this.f36868o = parcel.readByte() != 0;
        this.f36869p = (String[]) w0.j(parcel.createStringArray());
        int readInt = parcel.readInt();
        this.f36870q = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36870q[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
