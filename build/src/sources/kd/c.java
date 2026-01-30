package kd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Metadata.b {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f33094d;

    /* renamed from: e  reason: collision with root package name */
    public final String f33095e;

    /* renamed from: i  reason: collision with root package name */
    public final String f33096i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public c createFromParcel(Parcel parcel) {
            return new c(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(byte[] bArr, String str, String str2) {
        this.f33094d = bArr;
        this.f33095e = str;
        this.f33096i = str2;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        String str = this.f33095e;
        if (str != null) {
            bVar.m0(str);
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
        if (obj != null && c.class == obj.getClass()) {
            return Arrays.equals(this.f33094d, ((c) obj).f33094d);
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(this.f33094d);
    }

    public String toString() {
        return String.format("ICY: title=\"%s\", url=\"%s\", rawMetadata.length=\"%s\"", this.f33095e, this.f33096i, Integer.valueOf(this.f33094d.length));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeByteArray(this.f33094d);
        parcel.writeString(this.f33095e);
        parcel.writeString(this.f33096i);
    }

    c(Parcel parcel) {
        this.f33094d = (byte[]) ne.a.e(parcel.createByteArray());
        this.f33095e = parcel.readString();
        this.f33096i = parcel.readString();
    }
}
