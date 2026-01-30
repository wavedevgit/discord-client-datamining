package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37135e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37136i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37137o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37138p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37139q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f37140r;

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
        this.f37135e = str;
        this.f37136i = i10;
        this.f37137o = i11;
        this.f37138p = j10;
        this.f37139q = j11;
        this.f37140r = iVarArr;
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
            if (this.f37136i == cVar.f37136i && this.f37137o == cVar.f37137o && this.f37138p == cVar.f37138p && this.f37139q == cVar.f37139q && w0.c(this.f37135e, cVar.f37135e) && Arrays.equals(this.f37140r, cVar.f37140r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f37136i) * 31) + this.f37137o) * 31) + ((int) this.f37138p)) * 31) + ((int) this.f37139q)) * 31;
        String str = this.f37135e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37135e);
        parcel.writeInt(this.f37136i);
        parcel.writeInt(this.f37137o);
        parcel.writeLong(this.f37138p);
        parcel.writeLong(this.f37139q);
        parcel.writeInt(this.f37140r.length);
        for (i iVar : this.f37140r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f37135e = (String) w0.j(parcel.readString());
        this.f37136i = parcel.readInt();
        this.f37137o = parcel.readInt();
        this.f37138p = parcel.readLong();
        this.f37139q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f37140r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f37140r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
