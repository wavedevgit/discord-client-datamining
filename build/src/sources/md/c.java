package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36291e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36292i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36293o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36294p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36295q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36296r;

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
        this.f36291e = str;
        this.f36292i = i10;
        this.f36293o = i11;
        this.f36294p = j10;
        this.f36295q = j11;
        this.f36296r = iVarArr;
    }

    @Override // md.i, android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f36292i == cVar.f36292i && this.f36293o == cVar.f36293o && this.f36294p == cVar.f36294p && this.f36295q == cVar.f36295q && w0.c(this.f36291e, cVar.f36291e) && Arrays.equals(this.f36296r, cVar.f36296r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36292i) * 31) + this.f36293o) * 31) + ((int) this.f36294p)) * 31) + ((int) this.f36295q)) * 31;
        String str = this.f36291e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36291e);
        parcel.writeInt(this.f36292i);
        parcel.writeInt(this.f36293o);
        parcel.writeLong(this.f36294p);
        parcel.writeLong(this.f36295q);
        parcel.writeInt(this.f36296r.length);
        for (i iVar : this.f36296r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36291e = (String) w0.j(parcel.readString());
        this.f36292i = parcel.readInt();
        this.f36293o = parcel.readInt();
        this.f36294p = parcel.readLong();
        this.f36295q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36296r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36296r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
