package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37119e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37120i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37121o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37122p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37123q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f37124r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public c createFromParcel(Parcel parcel) {
            return new c(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(String str, int i10, int i11, long j10, long j11, i[] iVarArr) {
        super("CHAP");
        this.f37119e = str;
        this.f37120i = i10;
        this.f37121o = i11;
        this.f37122p = j10;
        this.f37123q = j11;
        this.f37124r = iVarArr;
    }

    @Override // ld.i, android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f37120i == cVar.f37120i && this.f37121o == cVar.f37121o && this.f37122p == cVar.f37122p && this.f37123q == cVar.f37123q && w0.c(this.f37119e, cVar.f37119e) && Arrays.equals(this.f37124r, cVar.f37124r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f37120i) * 31) + this.f37121o) * 31) + ((int) this.f37122p)) * 31) + ((int) this.f37123q)) * 31;
        String str = this.f37119e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37119e);
        parcel.writeInt(this.f37120i);
        parcel.writeInt(this.f37121o);
        parcel.writeLong(this.f37122p);
        parcel.writeLong(this.f37123q);
        parcel.writeInt(this.f37124r.length);
        for (i iVar : this.f37124r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f37119e = (String) w0.j(parcel.readString());
        this.f37120i = parcel.readInt();
        this.f37121o = parcel.readInt();
        this.f37122p = parcel.readLong();
        this.f37123q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f37124r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f37124r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
