package com.google.android.exoplayer2.metadata;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.Arrays;
import java.util.List;
import ne.w0;
import oi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Metadata implements Parcelable {
    public static final Parcelable.Creator<Metadata> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final b[] f12660d;

    /* renamed from: e  reason: collision with root package name */
    public final long f12661e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public Metadata createFromParcel(Parcel parcel) {
            return new Metadata(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public Metadata[] newArray(int i10) {
            return new Metadata[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b extends Parcelable {
        default Format F() {
            return null;
        }

        default void e1(MediaMetadata.b bVar) {
        }

        default byte[] j2() {
            return null;
        }
    }

    public Metadata(b... bVarArr) {
        this(-9223372036854775807L, bVarArr);
    }

    public Metadata a(b... bVarArr) {
        if (bVarArr.length == 0) {
            return this;
        }
        return new Metadata(this.f12661e, (b[]) w0.O0(this.f12660d, bVarArr));
    }

    public Metadata b(Metadata metadata) {
        if (metadata == null) {
            return this;
        }
        return a(metadata.f12660d);
    }

    public Metadata c(long j10) {
        if (this.f12661e == j10) {
            return this;
        }
        return new Metadata(j10, this.f12660d);
    }

    public b d(int i10) {
        return this.f12660d[i10];
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public int e() {
        return this.f12660d.length;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && Metadata.class == obj.getClass()) {
            Metadata metadata = (Metadata) obj;
            if (Arrays.equals(this.f12660d, metadata.f12660d) && this.f12661e == metadata.f12661e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (Arrays.hashCode(this.f12660d) * 31) + g.b(this.f12661e);
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("entries=");
        sb2.append(Arrays.toString(this.f12660d));
        if (this.f12661e == -9223372036854775807L) {
            str = "";
        } else {
            str = ", presentationTimeUs=" + this.f12661e;
        }
        sb2.append(str);
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f12660d.length);
        for (b bVar : this.f12660d) {
            parcel.writeParcelable(bVar, 0);
        }
        parcel.writeLong(this.f12661e);
    }

    public Metadata(long j10, b... bVarArr) {
        this.f12661e = j10;
        this.f12660d = bVarArr;
    }

    public Metadata(List list) {
        this((b[]) list.toArray(new b[0]));
    }

    public Metadata(long j10, List list) {
        this(j10, (b[]) list.toArray(new b[0]));
    }

    Metadata(Parcel parcel) {
        this.f12660d = new b[parcel.readInt()];
        int i10 = 0;
        while (true) {
            b[] bVarArr = this.f12660d;
            if (i10 < bVarArr.length) {
                bVarArr[i10] = (b) parcel.readParcelable(b.class.getClassLoader());
                i10++;
            } else {
                this.f12661e = parcel.readLong();
                return;
            }
        }
    }
}
