package nd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0551a();

    /* renamed from: d  reason: collision with root package name */
    public final String f38156d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f38157e;

    /* renamed from: i  reason: collision with root package name */
    public final int f38158i;

    /* renamed from: o  reason: collision with root package name */
    public final int f38159o;

    /* renamed from: nd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0551a implements Parcelable.Creator {
        C0551a() {
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

    /* synthetic */ a(Parcel parcel, C0551a c0551a) {
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
            if (this.f38156d.equals(aVar.f38156d) && Arrays.equals(this.f38157e, aVar.f38157e) && this.f38158i == aVar.f38158i && this.f38159o == aVar.f38159o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f38156d.hashCode()) * 31) + Arrays.hashCode(this.f38157e)) * 31) + this.f38158i) * 31) + this.f38159o;
    }

    public String toString() {
        String E;
        int i10 = this.f38159o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f38157e);
                } else {
                    E = String.valueOf(w0.l1(this.f38157e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f38157e));
            }
        } else {
            E = w0.E(this.f38157e);
        }
        return "mdta: key=" + this.f38156d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f38156d);
        parcel.writeByteArray(this.f38157e);
        parcel.writeInt(this.f38158i);
        parcel.writeInt(this.f38159o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f38156d = str;
        this.f38157e = bArr;
        this.f38158i = i10;
        this.f38159o = i11;
    }

    private a(Parcel parcel) {
        this.f38156d = (String) w0.j(parcel.readString());
        this.f38157e = (byte[]) w0.j(parcel.createByteArray());
        this.f38158i = parcel.readInt();
        this.f38159o = parcel.readInt();
    }
}
