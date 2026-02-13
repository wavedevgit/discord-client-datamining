package nd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0528a();

    /* renamed from: d  reason: collision with root package name */
    public final String f37729d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f37730e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37731i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37732o;

    /* renamed from: nd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0528a implements Parcelable.Creator {
        C0528a() {
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

    /* synthetic */ a(Parcel parcel, C0528a c0528a) {
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
            if (this.f37729d.equals(aVar.f37729d) && Arrays.equals(this.f37730e, aVar.f37730e) && this.f37731i == aVar.f37731i && this.f37732o == aVar.f37732o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f37729d.hashCode()) * 31) + Arrays.hashCode(this.f37730e)) * 31) + this.f37731i) * 31) + this.f37732o;
    }

    public String toString() {
        String E;
        int i10 = this.f37732o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f37730e);
                } else {
                    E = String.valueOf(w0.l1(this.f37730e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f37730e));
            }
        } else {
            E = w0.E(this.f37730e);
        }
        return "mdta: key=" + this.f37729d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37729d);
        parcel.writeByteArray(this.f37730e);
        parcel.writeInt(this.f37731i);
        parcel.writeInt(this.f37732o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f37729d = str;
        this.f37730e = bArr;
        this.f37731i = i10;
        this.f37732o = i11;
    }

    private a(Parcel parcel) {
        this.f37729d = (String) w0.j(parcel.readString());
        this.f37730e = (byte[]) w0.j(parcel.createByteArray());
        this.f37731i = parcel.readInt();
        this.f37732o = parcel.readInt();
    }
}
