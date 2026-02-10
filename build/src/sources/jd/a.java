package jd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {

    /* renamed from: d  reason: collision with root package name */
    public final String f30102d;

    /* renamed from: e  reason: collision with root package name */
    public final String f30103e;

    /* renamed from: i  reason: collision with root package name */
    public final long f30104i;

    /* renamed from: o  reason: collision with root package name */
    public final long f30105o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f30106p;

    /* renamed from: q  reason: collision with root package name */
    private int f30107q;

    /* renamed from: r  reason: collision with root package name */
    private static final Format f30100r = new Format.b().g0("application/id3").G();

    /* renamed from: s  reason: collision with root package name */
    private static final Format f30101s = new Format.b().g0("application/x-scte35").G();
    public static final Parcelable.Creator<a> CREATOR = new C0451a();

    /* renamed from: jd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0451a implements Parcelable.Creator {
        C0451a() {
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
        this.f30102d = str;
        this.f30103e = str2;
        this.f30104i = j10;
        this.f30105o = j11;
        this.f30106p = bArr;
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
            if (this.f30104i == aVar.f30104i && this.f30105o == aVar.f30105o && w0.c(this.f30102d, aVar.f30102d) && w0.c(this.f30103e, aVar.f30103e) && Arrays.equals(this.f30106p, aVar.f30106p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        if (this.f30107q == 0) {
            String str = this.f30102d;
            int i11 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String str2 = this.f30103e;
            if (str2 != null) {
                i11 = str2.hashCode();
            }
            long j10 = this.f30104i;
            long j11 = this.f30105o;
            this.f30107q = ((((((i12 + i11) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + Arrays.hashCode(this.f30106p);
        }
        return this.f30107q;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public byte[] j2() {
        if (y() != null) {
            return this.f30106p;
        }
        return null;
    }

    public String toString() {
        return "EMSG: scheme=" + this.f30102d + ", id=" + this.f30105o + ", durationMs=" + this.f30104i + ", value=" + this.f30103e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f30102d);
        parcel.writeString(this.f30103e);
        parcel.writeLong(this.f30104i);
        parcel.writeLong(this.f30105o);
        parcel.writeByteArray(this.f30106p);
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public Format y() {
        String str = this.f30102d;
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
                return f30101s;
            case 1:
            case 2:
                return f30100r;
            default:
                return null;
        }
    }

    a(Parcel parcel) {
        this.f30102d = (String) w0.j(parcel.readString());
        this.f30103e = (String) w0.j(parcel.readString());
        this.f30104i = parcel.readLong();
        this.f30105o = parcel.readLong();
        this.f30106p = (byte[]) w0.j(parcel.createByteArray());
    }
}
