package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0495a();

    /* renamed from: d  reason: collision with root package name */
    public final String f38028d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f38029e;

    /* renamed from: i  reason: collision with root package name */
    public final int f38030i;

    /* renamed from: o  reason: collision with root package name */
    public final int f38031o;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0495a implements Parcelable.Creator {
        C0495a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* synthetic */ a(Parcel parcel, C0495a c0495a) {
        this(parcel);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f38028d.equals(aVar.f38028d) && Arrays.equals(this.f38029e, aVar.f38029e) && this.f38030i == aVar.f38030i && this.f38031o == aVar.f38031o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f38028d.hashCode()) * 31) + Arrays.hashCode(this.f38029e)) * 31) + this.f38030i) * 31) + this.f38031o;
    }

    public String toString() {
        String E;
        int i10 = this.f38031o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f38029e);
                } else {
                    E = String.valueOf(w0.l1(this.f38029e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f38029e));
            }
        } else {
            E = w0.E(this.f38029e);
        }
        return "mdta: key=" + this.f38028d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f38028d);
        parcel.writeByteArray(this.f38029e);
        parcel.writeInt(this.f38030i);
        parcel.writeInt(this.f38031o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f38028d = str;
        this.f38029e = bArr;
        this.f38030i = i10;
        this.f38031o = i11;
    }

    private a(Parcel parcel) {
        this.f38028d = (String) w0.j(parcel.readString());
        this.f38029e = (byte[]) w0.j(parcel.createByteArray());
        this.f38030i = parcel.readInt();
        this.f38031o = parcel.readInt();
    }
}
