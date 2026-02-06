package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36038e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36039i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36040o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36041p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36042q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36043r;

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
        this.f36038e = str;
        this.f36039i = i10;
        this.f36040o = i11;
        this.f36041p = j10;
        this.f36042q = j11;
        this.f36043r = iVarArr;
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
            if (this.f36039i == cVar.f36039i && this.f36040o == cVar.f36040o && this.f36041p == cVar.f36041p && this.f36042q == cVar.f36042q && w0.c(this.f36038e, cVar.f36038e) && Arrays.equals(this.f36043r, cVar.f36043r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36039i) * 31) + this.f36040o) * 31) + ((int) this.f36041p)) * 31) + ((int) this.f36042q)) * 31;
        String str = this.f36038e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36038e);
        parcel.writeInt(this.f36039i);
        parcel.writeInt(this.f36040o);
        parcel.writeLong(this.f36041p);
        parcel.writeLong(this.f36042q);
        parcel.writeInt(this.f36043r.length);
        for (i iVar : this.f36043r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36038e = (String) w0.j(parcel.readString());
        this.f36039i = parcel.readInt();
        this.f36040o = parcel.readInt();
        this.f36041p = parcel.readLong();
        this.f36042q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36043r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36043r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
