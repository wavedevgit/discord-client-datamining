package nd;

import android.os.Parcel;
import android.os.Parcelable;
import ne.h0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends b {
    public static final Parcelable.Creator<g> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f38854d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38855e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public g createFromParcel(Parcel parcel) {
            return new g(parcel.readLong(), parcel.readLong(), null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public g[] newArray(int i10) {
            return new g[i10];
        }
    }

    /* synthetic */ g(long j10, long j11, a aVar) {
        this(j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g a(h0 h0Var, long j10, s0 s0Var) {
        long b10 = b(h0Var, j10);
        return new g(b10, s0Var.b(b10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long b(h0 h0Var, long j10) {
        long H = h0Var.H();
        if ((128 & H) != 0) {
            return 8589934591L & ((((H & 1) << 32) | h0Var.J()) + j10);
        }
        return -9223372036854775807L;
    }

    @Override // nd.b
    public String toString() {
        return "SCTE-35 TimeSignalCommand { ptsTime=" + this.f38854d + ", playbackPositionUs= " + this.f38855e + " }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f38854d);
        parcel.writeLong(this.f38855e);
    }

    private g(long j10, long j11) {
        this.f38854d = j10;
        this.f38855e = j11;
    }
}
