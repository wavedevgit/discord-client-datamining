package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends i {
    public static final Parcelable.Creator<d> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36724e;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f36725i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f36726o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f36727p;

    /* renamed from: q  reason: collision with root package name */
    private final i[] f36728q;

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
        this.f36724e = str;
        this.f36725i = z10;
        this.f36726o = z11;
        this.f36727p = strArr;
        this.f36728q = iVarArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && d.class == obj.getClass()) {
            d dVar = (d) obj;
            if (this.f36725i == dVar.f36725i && this.f36726o == dVar.f36726o && w0.c(this.f36724e, dVar.f36724e) && Arrays.equals(this.f36727p, dVar.f36727p) && Arrays.equals(this.f36728q, dVar.f36728q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((527 + (this.f36725i ? 1 : 0)) * 31) + (this.f36726o ? 1 : 0)) * 31;
        String str = this.f36724e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36724e);
        parcel.writeByte(this.f36725i ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f36726o ? (byte) 1 : (byte) 0);
        parcel.writeStringArray(this.f36727p);
        parcel.writeInt(this.f36728q.length);
        for (i iVar : this.f36728q) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    d(Parcel parcel) {
        super("CTOC");
        this.f36724e = (String) w0.j(parcel.readString());
        this.f36725i = parcel.readByte() != 0;
        this.f36726o = parcel.readByte() != 0;
        this.f36727p = (String[]) w0.j(parcel.createStringArray());
        int readInt = parcel.readInt();
        this.f36728q = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36728q[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
