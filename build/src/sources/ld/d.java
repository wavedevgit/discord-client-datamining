package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends i {
    public static final Parcelable.Creator<d> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37125e;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f37126i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37127o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f37128p;

    /* renamed from: q  reason: collision with root package name */
    private final i[] f37129q;

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
        this.f37125e = str;
        this.f37126i = z10;
        this.f37127o = z11;
        this.f37128p = strArr;
        this.f37129q = iVarArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && d.class == obj.getClass()) {
            d dVar = (d) obj;
            if (this.f37126i == dVar.f37126i && this.f37127o == dVar.f37127o && w0.c(this.f37125e, dVar.f37125e) && Arrays.equals(this.f37128p, dVar.f37128p) && Arrays.equals(this.f37129q, dVar.f37129q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((527 + (this.f37126i ? 1 : 0)) * 31) + (this.f37127o ? 1 : 0)) * 31;
        String str = this.f37125e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37125e);
        parcel.writeByte(this.f37126i ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f37127o ? (byte) 1 : (byte) 0);
        parcel.writeStringArray(this.f37128p);
        parcel.writeInt(this.f37129q.length);
        for (i iVar : this.f37129q) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    d(Parcel parcel) {
        super("CTOC");
        this.f37125e = (String) w0.j(parcel.readString());
        this.f37126i = parcel.readByte() != 0;
        this.f37127o = parcel.readByte() != 0;
        this.f37128p = (String[]) w0.j(parcel.createStringArray());
        int readInt = parcel.readInt();
        this.f37129q = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f37129q[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
