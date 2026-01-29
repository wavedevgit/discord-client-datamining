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
    public final String f28437d;

    /* renamed from: e  reason: collision with root package name */
    public final String f28438e;

    /* renamed from: i  reason: collision with root package name */
    public final long f28439i;

    /* renamed from: o  reason: collision with root package name */
    public final long f28440o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f28441p;

    /* renamed from: q  reason: collision with root package name */
    private int f28442q;

    /* renamed from: r  reason: collision with root package name */
    private static final Format f28435r = new Format.b().g0("application/id3").G();

    /* renamed from: s  reason: collision with root package name */
    private static final Format f28436s = new Format.b().g0("application/x-scte35").G();
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
        this.f28437d = str;
        this.f28438e = str2;
        this.f28439i = j10;
        this.f28440o = j11;
        this.f28441p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public Format F() {
        String str = this.f28437d;
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
                return f28436s;
            case 1:
            case 2:
                return f28435r;
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
            if (this.f28439i == aVar.f28439i && this.f28440o == aVar.f28440o && w0.c(this.f28437d, aVar.f28437d) && w0.c(this.f28438e, aVar.f28438e) && Arrays.equals(this.f28441p, aVar.f28441p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        if (this.f28442q == 0) {
            String str = this.f28437d;
            int i11 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String str2 = this.f28438e;
            if (str2 != null) {
                i11 = str2.hashCode();
            }
            long j10 = this.f28439i;
            long j11 = this.f28440o;
            this.f28442q = ((((((i12 + i11) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + Arrays.hashCode(this.f28441p);
        }
        return this.f28442q;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public byte[] j2() {
        if (F() != null) {
            return this.f28441p;
        }
        return null;
    }

    public String toString() {
        return "EMSG: scheme=" + this.f28437d + ", id=" + this.f28440o + ", durationMs=" + this.f28439i + ", value=" + this.f28438e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f28437d);
        parcel.writeString(this.f28438e);
        parcel.writeLong(this.f28439i);
        parcel.writeLong(this.f28440o);
        parcel.writeByteArray(this.f28441p);
    }

    a(Parcel parcel) {
        this.f28437d = (String) w0.j(parcel.readString());
        this.f28438e = (String) w0.j(parcel.readString());
        this.f28439i = parcel.readLong();
        this.f28440o = parcel.readLong();
        this.f28441p = (byte[]) w0.j(parcel.createByteArray());
    }
}
