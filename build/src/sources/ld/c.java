package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36086e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36087i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36088o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36089p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36090q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36091r;

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
        this.f36086e = str;
        this.f36087i = i10;
        this.f36088o = i11;
        this.f36089p = j10;
        this.f36090q = j11;
        this.f36091r = iVarArr;
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
            if (this.f36087i == cVar.f36087i && this.f36088o == cVar.f36088o && this.f36089p == cVar.f36089p && this.f36090q == cVar.f36090q && w0.c(this.f36086e, cVar.f36086e) && Arrays.equals(this.f36091r, cVar.f36091r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36087i) * 31) + this.f36088o) * 31) + ((int) this.f36089p)) * 31) + ((int) this.f36090q)) * 31;
        String str = this.f36086e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36086e);
        parcel.writeInt(this.f36087i);
        parcel.writeInt(this.f36088o);
        parcel.writeLong(this.f36089p);
        parcel.writeLong(this.f36090q);
        parcel.writeInt(this.f36091r.length);
        for (i iVar : this.f36091r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36086e = (String) w0.j(parcel.readString());
        this.f36087i = parcel.readInt();
        this.f36088o = parcel.readInt();
        this.f36089p = parcel.readLong();
        this.f36090q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36091r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36091r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
