package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends i {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f36644e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public b createFromParcel(Parcel parcel) {
            return new b(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public b[] newArray(int i10) {
            return new b[i10];
        }
    }

    public b(String str, byte[] bArr) {
        super(str);
        this.f36644e = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f36668d.equals(bVar.f36668d) && Arrays.equals(this.f36644e, bVar.f36644e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f36668d.hashCode()) * 31) + Arrays.hashCode(this.f36644e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36668d);
        parcel.writeByteArray(this.f36644e);
    }

    b(Parcel parcel) {
        super((String) w0.j(parcel.readString()));
        this.f36644e = (byte[]) w0.j(parcel.createByteArray());
    }
}
