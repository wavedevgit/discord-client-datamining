package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36860e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36861i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36862o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36863p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36864q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36865r;

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
        this.f36860e = str;
        this.f36861i = i10;
        this.f36862o = i11;
        this.f36863p = j10;
        this.f36864q = j11;
        this.f36865r = iVarArr;
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
            if (this.f36861i == cVar.f36861i && this.f36862o == cVar.f36862o && this.f36863p == cVar.f36863p && this.f36864q == cVar.f36864q && w0.c(this.f36860e, cVar.f36860e) && Arrays.equals(this.f36865r, cVar.f36865r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36861i) * 31) + this.f36862o) * 31) + ((int) this.f36863p)) * 31) + ((int) this.f36864q)) * 31;
        String str = this.f36860e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36860e);
        parcel.writeInt(this.f36861i);
        parcel.writeInt(this.f36862o);
        parcel.writeLong(this.f36863p);
        parcel.writeLong(this.f36864q);
        parcel.writeInt(this.f36865r.length);
        for (i iVar : this.f36865r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36860e = (String) w0.j(parcel.readString());
        this.f36861i = parcel.readInt();
        this.f36862o = parcel.readInt();
        this.f36863p = parcel.readLong();
        this.f36864q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36865r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36865r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
