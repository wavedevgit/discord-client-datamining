package ld;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Metadata.b {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f35711d;

    /* renamed from: e  reason: collision with root package name */
    public final String f35712e;

    /* renamed from: i  reason: collision with root package name */
    public final String f35713i;

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
        this.f35711d = bArr;
        this.f35712e = str;
        this.f35713i = str2;
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
            return Arrays.equals(this.f35711d, ((c) obj).f35711d);
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void f1(MediaMetadata.b bVar) {
        String str = this.f35712e;
        if (str != null) {
            bVar.m0(str);
        }
    }

    public int hashCode() {
        return Arrays.hashCode(this.f35711d);
    }

    public String toString() {
        return String.format("ICY: title=\"%s\", url=\"%s\", rawMetadata.length=\"%s\"", this.f35712e, this.f35713i, Integer.valueOf(this.f35711d.length));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeByteArray(this.f35711d);
        parcel.writeString(this.f35712e);
        parcel.writeString(this.f35713i);
    }

    c(Parcel parcel) {
        this.f35711d = (byte[]) oe.a.e(parcel.createByteArray());
        this.f35712e = parcel.readString();
        this.f35713i = parcel.readString();
    }
}
