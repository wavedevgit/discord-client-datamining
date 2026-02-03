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
    public final String f28100d;

    /* renamed from: e  reason: collision with root package name */
    public final String f28101e;

    /* renamed from: i  reason: collision with root package name */
    public final long f28102i;

    /* renamed from: o  reason: collision with root package name */
    public final long f28103o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f28104p;

    /* renamed from: q  reason: collision with root package name */
    private int f28105q;

    /* renamed from: r  reason: collision with root package name */
    private static final Format f28098r = new Format.b().g0("application/id3").G();

    /* renamed from: s  reason: collision with root package name */
    private static final Format f28099s = new Format.b().g0("application/x-scte35").G();
    public static final Parcelable.Creator<a> CREATOR = new C0374a();

    /* renamed from: id.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0374a implements Parcelable.Creator {
        C0374a() {
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
        this.f28100d = str;
        this.f28101e = str2;
        this.f28102i = j10;
        this.f28103o = j11;
        this.f28104p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public Format F() {
        String str = this.f28100d;
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
                return f28099s;
            case 1:
            case 2:
                return f28098r;
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
            if (this.f28102i == aVar.f28102i && this.f28103o == aVar.f28103o && w0.c(this.f28100d, aVar.f28100d) && w0.c(this.f28101e, aVar.f28101e) && Arrays.equals(this.f28104p, aVar.f28104p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        if (this.f28105q == 0) {
            String str = this.f28100d;
            int i11 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String str2 = this.f28101e;
            if (str2 != null) {
                i11 = str2.hashCode();
            }
            long j10 = this.f28102i;
            long j11 = this.f28103o;
            this.f28105q = ((((((i12 + i11) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + Arrays.hashCode(this.f28104p);
        }
        return this.f28105q;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public byte[] j2() {
        if (F() != null) {
            return this.f28104p;
        }
        return null;
    }

    public String toString() {
        return "EMSG: scheme=" + this.f28100d + ", id=" + this.f28103o + ", durationMs=" + this.f28102i + ", value=" + this.f28101e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f28100d);
        parcel.writeString(this.f28101e);
        parcel.writeLong(this.f28102i);
        parcel.writeLong(this.f28103o);
        parcel.writeByteArray(this.f28104p);
    }

    a(Parcel parcel) {
        this.f28100d = (String) w0.j(parcel.readString());
        this.f28101e = (String) w0.j(parcel.readString());
        this.f28102i = parcel.readLong();
        this.f28103o = parcel.readLong();
        this.f28104p = (byte[]) w0.j(parcel.createByteArray());
    }
}
