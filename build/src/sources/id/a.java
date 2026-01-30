package id;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {

    /* renamed from: d  reason: collision with root package name */
    public final String f28453d;

    /* renamed from: e  reason: collision with root package name */
    public final String f28454e;

    /* renamed from: i  reason: collision with root package name */
    public final long f28455i;

    /* renamed from: o  reason: collision with root package name */
    public final long f28456o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f28457p;

    /* renamed from: q  reason: collision with root package name */
    private int f28458q;

    /* renamed from: r  reason: collision with root package name */
    private static final Format f28451r = new Format.b().g0("application/id3").G();

    /* renamed from: s  reason: collision with root package name */
    private static final Format f28452s = new Format.b().g0("application/x-scte35").G();
    public static final Parcelable.Creator<a> CREATOR = new C0373a();

    /* renamed from: id.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0373a implements Parcelable.Creator {
        C0373a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(String str, String str2, long j10, long j11, byte[] bArr) {
        this.f28453d = str;
        this.f28454e = str2;
        this.f28455i = j10;
        this.f28456o = j11;
        this.f28457p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public Format F() {
        String str = this.f28453d;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1468477611:
                if (str.equals("urn:scte:scte35:2014:bin")) {
                    c10 = 0;
                    break;
                }
                break;
            case -795945609:
                if (str.equals("https://aomedia.org/emsg/ID3")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1303648457:
                if (str.equals("https://developer.apple.com/streaming/emsg-id3")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return f28452s;
            case 1:
            case 2:
                return f28451r;
            default:
                return null;
        }
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
            if (this.f28455i == aVar.f28455i && this.f28456o == aVar.f28456o && w0.c(this.f28453d, aVar.f28453d) && w0.c(this.f28454e, aVar.f28454e) && Arrays.equals(this.f28457p, aVar.f28457p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        if (this.f28458q == 0) {
            String str = this.f28453d;
            int i11 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String str2 = this.f28454e;
            if (str2 != null) {
                i11 = str2.hashCode();
            }
            long j10 = this.f28455i;
            long j11 = this.f28456o;
            this.f28458q = ((((((i12 + i11) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + Arrays.hashCode(this.f28457p);
        }
        return this.f28458q;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public byte[] j2() {
        if (F() != null) {
            return this.f28457p;
        }
        return null;
    }

    public String toString() {
        return "EMSG: scheme=" + this.f28453d + ", id=" + this.f28456o + ", durationMs=" + this.f28455i + ", value=" + this.f28454e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f28453d);
        parcel.writeString(this.f28454e);
        parcel.writeLong(this.f28455i);
        parcel.writeLong(this.f28456o);
        parcel.writeByteArray(this.f28457p);
    }

    a(Parcel parcel) {
        this.f28453d = (String) w0.j(parcel.readString());
        this.f28454e = (String) w0.j(parcel.readString());
        this.f28455i = parcel.readLong();
        this.f28456o = parcel.readLong();
        this.f28457p = (byte[]) w0.j(parcel.createByteArray());
    }
}
