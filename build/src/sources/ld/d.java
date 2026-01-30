package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends i {
    public static final Parcelable.Creator<d> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37141e;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f37142i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37143o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f37144p;

    /* renamed from: q  reason: collision with root package name */
    private final i[] f37145q;

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
        this.f37141e = str;
        this.f37142i = z10;
        this.f37143o = z11;
        this.f37144p = strArr;
        this.f37145q = iVarArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && d.class == obj.getClass()) {
            d dVar = (d) obj;
            if (this.f37142i == dVar.f37142i && this.f37143o == dVar.f37143o && w0.c(this.f37141e, dVar.f37141e) && Arrays.equals(this.f37144p, dVar.f37144p) && Arrays.equals(this.f37145q, dVar.f37145q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((527 + (this.f37142i ? 1 : 0)) * 31) + (this.f37143o ? 1 : 0)) * 31;
        String str = this.f37141e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37141e);
        parcel.writeByte(this.f37142i ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f37143o ? (byte) 1 : (byte) 0);
        parcel.writeStringArray(this.f37144p);
        parcel.writeInt(this.f37145q.length);
        for (i iVar : this.f37145q) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    d(Parcel parcel) {
        super("CTOC");
        this.f37141e = (String) w0.j(parcel.readString());
        this.f37142i = parcel.readByte() != 0;
        this.f37143o = parcel.readByte() != 0;
        this.f37144p = (String[]) w0.j(parcel.createStringArray());
        int readInt = parcel.readInt();
        this.f37145q = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f37145q[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
