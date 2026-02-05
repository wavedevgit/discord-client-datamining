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
    public final String f27312d;

    /* renamed from: e  reason: collision with root package name */
    public final String f27313e;

    /* renamed from: i  reason: collision with root package name */
    public final long f27314i;

    /* renamed from: o  reason: collision with root package name */
    public final long f27315o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f27316p;

    /* renamed from: q  reason: collision with root package name */
    private int f27317q;

    /* renamed from: r  reason: collision with root package name */
    private static final Format f27310r = new Format.b().g0("application/id3").G();

    /* renamed from: s  reason: collision with root package name */
    private static final Format f27311s = new Format.b().g0("application/x-scte35").G();
    public static final Parcelable.Creator<a> CREATOR = new C0381a();

    /* renamed from: id.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0381a implements Parcelable.Creator {
        C0381a() {
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
        this.f27312d = str;
        this.f27313e = str2;
        this.f27314i = j10;
        this.f27315o = j11;
        this.f27316p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public Format F() {
        String str = this.f27312d;
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
                return f27311s;
            case 1:
            case 2:
                return f27310r;
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
            if (this.f27314i == aVar.f27314i && this.f27315o == aVar.f27315o && w0.c(this.f27312d, aVar.f27312d) && w0.c(this.f27313e, aVar.f27313e) && Arrays.equals(this.f27316p, aVar.f27316p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        if (this.f27317q == 0) {
            String str = this.f27312d;
            int i11 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String str2 = this.f27313e;
            if (str2 != null) {
                i11 = str2.hashCode();
            }
            long j10 = this.f27314i;
            long j11 = this.f27315o;
            this.f27317q = ((((((i12 + i11) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + Arrays.hashCode(this.f27316p);
        }
        return this.f27317q;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public byte[] j2() {
        if (F() != null) {
            return this.f27316p;
        }
        return null;
    }

    public String toString() {
        return "EMSG: scheme=" + this.f27312d + ", id=" + this.f27315o + ", durationMs=" + this.f27314i + ", value=" + this.f27313e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f27312d);
        parcel.writeString(this.f27313e);
        parcel.writeLong(this.f27314i);
        parcel.writeLong(this.f27315o);
        parcel.writeByteArray(this.f27316p);
    }

    a(Parcel parcel) {
        this.f27312d = (String) w0.j(parcel.readString());
        this.f27313e = (String) w0.j(parcel.readString());
        this.f27314i = parcel.readLong();
        this.f27315o = parcel.readLong();
        this.f27316p = (byte[]) w0.j(parcel.createByteArray());
    }
}
