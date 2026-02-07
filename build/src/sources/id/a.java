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
    public final String f26697d;

    /* renamed from: e  reason: collision with root package name */
    public final String f26698e;

    /* renamed from: i  reason: collision with root package name */
    public final long f26699i;

    /* renamed from: o  reason: collision with root package name */
    public final long f26700o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f26701p;

    /* renamed from: q  reason: collision with root package name */
    private int f26702q;

    /* renamed from: r  reason: collision with root package name */
    private static final Format f26695r = new Format.b().g0("application/id3").G();

    /* renamed from: s  reason: collision with root package name */
    private static final Format f26696s = new Format.b().g0("application/x-scte35").G();
    public static final Parcelable.Creator<a> CREATOR = new C0378a();

    /* renamed from: id.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0378a implements Parcelable.Creator {
        C0378a() {
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
        this.f26697d = str;
        this.f26698e = str2;
        this.f26699i = j10;
        this.f26700o = j11;
        this.f26701p = bArr;
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
            if (this.f26699i == aVar.f26699i && this.f26700o == aVar.f26700o && w0.c(this.f26697d, aVar.f26697d) && w0.c(this.f26698e, aVar.f26698e) && Arrays.equals(this.f26701p, aVar.f26701p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        if (this.f26702q == 0) {
            String str = this.f26697d;
            int i11 = 0;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String str2 = this.f26698e;
            if (str2 != null) {
                i11 = str2.hashCode();
            }
            long j10 = this.f26699i;
            long j11 = this.f26700o;
            this.f26702q = ((((((i12 + i11) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + Arrays.hashCode(this.f26701p);
        }
        return this.f26702q;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public byte[] j2() {
        if (y() != null) {
            return this.f26701p;
        }
        return null;
    }

    public String toString() {
        return "EMSG: scheme=" + this.f26697d + ", id=" + this.f26700o + ", durationMs=" + this.f26699i + ", value=" + this.f26698e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f26697d);
        parcel.writeString(this.f26698e);
        parcel.writeLong(this.f26699i);
        parcel.writeLong(this.f26700o);
        parcel.writeByteArray(this.f26701p);
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public Format y() {
        String str = this.f26697d;
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
                return f26696s;
            case 1:
            case 2:
                return f26695r;
            default:
                return null;
        }
    }

    a(Parcel parcel) {
        this.f26697d = (String) w0.j(parcel.readString());
        this.f26698e = (String) w0.j(parcel.readString());
        this.f26699i = parcel.readLong();
        this.f26700o = parcel.readLong();
        this.f26701p = (byte[]) w0.j(parcel.createByteArray());
    }
}
