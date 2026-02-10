package od;

import android.os.Parcel;
import android.os.Parcelable;
import oe.h0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends b {
    public static final Parcelable.Creator<a> CREATOR = new C0587a();

    /* renamed from: d  reason: collision with root package name */
    public final long f40517d;

    /* renamed from: e  reason: collision with root package name */
    public final long f40518e;

    /* renamed from: i  reason: collision with root package name */
    public final byte[] f40519i;

    /* renamed from: od.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0587a implements Parcelable.Creator {
        C0587a() {
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

    /* synthetic */ a(Parcel parcel, C0587a c0587a) {
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

    @Override // od.b
    public String toString() {
        return "SCTE-35 PrivateCommand { ptsAdjustment=" + this.f40517d + ", identifier= " + this.f40518e + " }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f40517d);
        parcel.writeLong(this.f40518e);
        parcel.writeByteArray(this.f40519i);
    }

    private a(long j10, byte[] bArr, long j11) {
        this.f40517d = j11;
        this.f40518e = j10;
        this.f40519i = bArr;
    }

    private a(Parcel parcel) {
        this.f40517d = parcel.readLong();
        this.f40518e = parcel.readLong();
        this.f40519i = (byte[]) w0.j(parcel.createByteArray());
    }
}
