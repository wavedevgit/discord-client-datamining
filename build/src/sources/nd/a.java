package nd;

import android.os.Parcel;
import android.os.Parcelable;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends b {
    public static final Parcelable.Creator<a> CREATOR = new C0536a();

    /* renamed from: d  reason: collision with root package name */
    public final long f38866d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38867e;

    /* renamed from: i  reason: collision with root package name */
    public final byte[] f38868i;

    /* renamed from: nd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0536a implements Parcelable.Creator {
        C0536a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* synthetic */ a(Parcel parcel, C0536a c0536a) {
        this(parcel);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a a(h0 h0Var, int i10, long j10) {
        long J = h0Var.J();
        int i11 = i10 - 4;
        byte[] bArr = new byte[i11];
        h0Var.l(bArr, 0, i11);
        return new a(J, bArr, j10);
    }

    @Override // nd.b
    public String toString() {
        return "SCTE-35 PrivateCommand { ptsAdjustment=" + this.f38866d + ", identifier= " + this.f38867e + " }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f38866d);
        parcel.writeLong(this.f38867e);
        parcel.writeByteArray(this.f38868i);
    }

    private a(long j10, byte[] bArr, long j11) {
        this.f38866d = j11;
        this.f38867e = j10;
        this.f38868i = bArr;
    }

    private a(Parcel parcel) {
        this.f38866d = parcel.readLong();
        this.f38867e = parcel.readLong();
        this.f38868i = (byte[]) w0.j(parcel.createByteArray());
    }
}
