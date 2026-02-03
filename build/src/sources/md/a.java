package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0485a();

    /* renamed from: d  reason: collision with root package name */
    public final String f37805d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f37806e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37807i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37808o;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0485a implements Parcelable.Creator {
        C0485a() {
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

    /* synthetic */ a(Parcel parcel, C0485a c0485a) {
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
            if (this.f37805d.equals(aVar.f37805d) && Arrays.equals(this.f37806e, aVar.f37806e) && this.f37807i == aVar.f37807i && this.f37808o == aVar.f37808o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f37805d.hashCode()) * 31) + Arrays.hashCode(this.f37806e)) * 31) + this.f37807i) * 31) + this.f37808o;
    }

    public String toString() {
        String E;
        int i10 = this.f37808o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f37806e);
                } else {
                    E = String.valueOf(w0.l1(this.f37806e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f37806e));
            }
        } else {
            E = w0.E(this.f37806e);
        }
        return "mdta: key=" + this.f37805d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37805d);
        parcel.writeByteArray(this.f37806e);
        parcel.writeInt(this.f37807i);
        parcel.writeInt(this.f37808o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f37805d = str;
        this.f37806e = bArr;
        this.f37807i = i10;
        this.f37808o = i11;
    }

    private a(Parcel parcel) {
        this.f37805d = (String) w0.j(parcel.readString());
        this.f37806e = (byte[]) w0.j(parcel.createByteArray());
        this.f37807i = parcel.readInt();
        this.f37808o = parcel.readInt();
    }
}
