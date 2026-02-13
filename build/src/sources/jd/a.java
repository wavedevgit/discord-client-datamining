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
    public final String f31471d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31472e;

    /* renamed from: i  reason: collision with root package name */
    public final long f31473i;

    /* renamed from: o  reason: collision with root package name */
    public final long f31474o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f31475p;

    /* renamed from: q  reason: collision with root package name */
    private int f31476q;

    /* renamed from: r  reason: collision with root package name */
    private static final Format f31469r = new Format.b().g0("application/id3").G();

    /* renamed from: s  reason: collision with root package name */
    private static final Format f31470s = new Format.b().g0("application/x-scte35").G();
    public static final Parcelable.Creator<a> CREATOR = new C0419a();

    /* renamed from: jd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0419a implements Parcelable.Creator {
        C0419a() {
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
        this.f31471d = str;
        this.f31472e = str2;
        this.f31473i = j10;
        this.f31474o = j11;
        this.f31475p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public Format I() {
        String str = this.f31471d;
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
                return f31470s;
            case 1:
            case 2:
                return f31469r;
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
            if (this.f31473i == aVar.f31473i && this.f31474o == aVar.f31474o && w0.c(this.f31471d, aVar.f31471d) && w0.c(this.f31472e, aVar.f31472e) && Arrays.equals(this.f31475p, aVar.f31475p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        if (this.f31476q == 0) {
            String str = this.f31471d;
            int i11 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String str2 = this.f31472e;
            if (str2 != null) {
                i11 = str2.hashCode();
            }
            long j10 = this.f31473i;
            long j11 = this.f31474o;
            this.f31476q = ((((((i12 + i11) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + Arrays.hashCode(this.f31475p);
        }
        return this.f31476q;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public byte[] o2() {
        if (I() != null) {
            return this.f31475p;
        }
        return null;
    }

    public String toString() {
        return "EMSG: scheme=" + this.f31471d + ", id=" + this.f31474o + ", durationMs=" + this.f31473i + ", value=" + this.f31472e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f31471d);
        parcel.writeString(this.f31472e);
        parcel.writeLong(this.f31473i);
        parcel.writeLong(this.f31474o);
        parcel.writeByteArray(this.f31475p);
    }

    a(Parcel parcel) {
        this.f31471d = (String) w0.j(parcel.readString());
        this.f31472e = (String) w0.j(parcel.readString());
        this.f31473i = parcel.readLong();
        this.f31474o = parcel.readLong();
        this.f31475p = (byte[]) w0.j(parcel.createByteArray());
    }
}
