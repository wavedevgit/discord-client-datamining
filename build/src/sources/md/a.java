package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i {
    public static final Parcelable.Creator<a> CREATOR = new C0514a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36287e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36288i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36289o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36290p;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0514a implements Parcelable.Creator {
        C0514a() {
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

    public a(String str, String str2, int i10, byte[] bArr) {
        super("APIC");
        this.f36287e = str;
        this.f36288i = str2;
        this.f36289o = i10;
        this.f36290p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f36289o == aVar.f36289o && w0.c(this.f36287e, aVar.f36287e) && w0.c(this.f36288i, aVar.f36288i) && Arrays.equals(this.f36290p, aVar.f36290p)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void f1(MediaMetadata.b bVar) {
        bVar.I(this.f36290p, this.f36289o);
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f36289o) * 31;
        String str = this.f36287e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f36288i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f36290p);
    }

    @Override // md.i
    public String toString() {
        return this.f36315d + ": mimeType=" + this.f36287e + ", description=" + this.f36288i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36287e);
        parcel.writeString(this.f36288i);
        parcel.writeInt(this.f36289o);
        parcel.writeByteArray(this.f36290p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f36287e = (String) w0.j(parcel.readString());
        this.f36288i = parcel.readString();
        this.f36289o = parcel.readInt();
        this.f36290p = (byte[]) w0.j(parcel.createByteArray());
    }
}
