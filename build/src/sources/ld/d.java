package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends i {
    public static final Parcelable.Creator<d> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36651e;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f36652i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f36653o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f36654p;

    /* renamed from: q  reason: collision with root package name */
    private final i[] f36655q;

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
        this.f36651e = str;
        this.f36652i = z10;
        this.f36653o = z11;
        this.f36654p = strArr;
        this.f36655q = iVarArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && d.class == obj.getClass()) {
            d dVar = (d) obj;
            if (this.f36652i == dVar.f36652i && this.f36653o == dVar.f36653o && w0.c(this.f36651e, dVar.f36651e) && Arrays.equals(this.f36654p, dVar.f36654p) && Arrays.equals(this.f36655q, dVar.f36655q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((527 + (this.f36652i ? 1 : 0)) * 31) + (this.f36653o ? 1 : 0)) * 31;
        String str = this.f36651e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36651e);
        parcel.writeByte(this.f36652i ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f36653o ? (byte) 1 : (byte) 0);
        parcel.writeStringArray(this.f36654p);
        parcel.writeInt(this.f36655q.length);
        for (i iVar : this.f36655q) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    d(Parcel parcel) {
        super("CTOC");
        this.f36651e = (String) w0.j(parcel.readString());
        this.f36652i = parcel.readByte() != 0;
        this.f36653o = parcel.readByte() != 0;
        this.f36654p = (String[]) w0.j(parcel.createStringArray());
        int readInt = parcel.readInt();
        this.f36655q = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36655q[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
