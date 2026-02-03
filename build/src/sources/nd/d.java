package nd;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import ne.h0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends nd.b {
    public static final Parcelable.Creator<d> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final long f39970d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f39971e;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f39972i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f39973o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f39974p;

    /* renamed from: q  reason: collision with root package name */
    public final long f39975q;

    /* renamed from: r  reason: collision with root package name */
    public final long f39976r;

    /* renamed from: s  reason: collision with root package name */
    public final List f39977s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f39978t;

    /* renamed from: u  reason: collision with root package name */
    public final long f39979u;

    /* renamed from: v  reason: collision with root package name */
    public final int f39980v;

    /* renamed from: w  reason: collision with root package name */
    public final int f39981w;

    /* renamed from: x  reason: collision with root package name */
    public final int f39982x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public d createFromParcel(Parcel parcel) {
            return new d(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public d[] newArray(int i10) {
            return new d[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f39983a;

        /* renamed from: b  reason: collision with root package name */
        public final long f39984b;

        /* renamed from: c  reason: collision with root package name */
        public final long f39985c;

        /* synthetic */ b(int i10, long j10, long j11, a aVar) {
            this(i10, j10, j11);
        }

        public static b a(Parcel parcel) {
            return new b(parcel.readInt(), parcel.readLong(), parcel.readLong());
        }

        public void b(Parcel parcel) {
            parcel.writeInt(this.f39983a);
            parcel.writeLong(this.f39984b);
            parcel.writeLong(this.f39985c);
        }

        private b(int i10, long j10, long j11) {
            this.f39983a = i10;
            this.f39984b = j10;
            this.f39985c = j11;
        }
    }

    /* synthetic */ d(Parcel parcel, a aVar) {
        this(parcel);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d a(h0 h0Var, long j10, s0 s0Var) {
        boolean z10;
        List list;
        long j11;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        int i10;
        int i11;
        int i12;
        boolean z15;
        boolean z16;
        boolean z17;
        boolean z18;
        long j12;
        boolean z19;
        boolean z20;
        int i13;
        long j13;
        long J = h0Var.J();
        if ((h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        List list2 = Collections.EMPTY_LIST;
        long j14 = -9223372036854775807L;
        if (!z10) {
            int H = h0Var.H();
            if ((H & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z15 = true;
            } else {
                z15 = false;
            }
            if ((H & 64) != 0) {
                z16 = true;
            } else {
                z16 = false;
            }
            if ((H & 32) != 0) {
                z17 = true;
            } else {
                z17 = false;
            }
            if ((H & 16) != 0) {
                z18 = true;
            } else {
                z18 = false;
            }
            if (z16 && !z18) {
                j12 = g.b(h0Var, j10);
            } else {
                j12 = -9223372036854775807L;
            }
            if (!z16) {
                int H2 = h0Var.H();
                ArrayList arrayList = new ArrayList(H2);
                int i14 = 0;
                while (i14 < H2) {
                    int H3 = h0Var.H();
                    if (!z18) {
                        i13 = H2;
                        j13 = g.b(h0Var, j10);
                    } else {
                        i13 = H2;
                        j13 = -9223372036854775807L;
                    }
                    arrayList.add(new b(H3, j13, s0Var.b(j13), null));
                    i14++;
                    H2 = i13;
                }
                list2 = arrayList;
            }
            if (z17) {
                long H4 = h0Var.H();
                if ((128 & H4) != 0) {
                    z20 = true;
                } else {
                    z20 = false;
                }
                j14 = ((((H4 & 1) << 32) | h0Var.J()) * 1000) / 90;
                z19 = z20;
            } else {
                z19 = false;
            }
            int N = h0Var.N();
            long j15 = j12;
            j11 = j14;
            j14 = j15;
            i11 = h0Var.H();
            i12 = h0Var.H();
            i10 = N;
            z14 = z19;
            z11 = z15;
            z12 = z16;
            list = list2;
            z13 = z18;
        } else {
            list = list2;
            j11 = -9223372036854775807L;
            z11 = false;
            z12 = false;
            z13 = false;
            z14 = false;
            i10 = 0;
            i11 = 0;
            i12 = 0;
        }
        return new d(J, z10, z11, z12, z13, j14, s0Var.b(j14), list, z14, j11, i10, i11, i12);
    }

    @Override // nd.b
    public String toString() {
        return "SCTE-35 SpliceInsertCommand { programSplicePts=" + this.f39975q + ", programSplicePlaybackPositionUs= " + this.f39976r + " }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeLong(this.f39970d);
        parcel.writeByte(this.f39971e ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f39972i ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f39973o ? (byte) 1 : (byte) 0);
        parcel.writeByte(this.f39974p ? (byte) 1 : (byte) 0);
        parcel.writeLong(this.f39975q);
        parcel.writeLong(this.f39976r);
        int size = this.f39977s.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            ((b) this.f39977s.get(i11)).b(parcel);
        }
        parcel.writeByte(this.f39978t ? (byte) 1 : (byte) 0);
        parcel.writeLong(this.f39979u);
        parcel.writeInt(this.f39980v);
        parcel.writeInt(this.f39981w);
        parcel.writeInt(this.f39982x);
    }

    private d(long j10, boolean z10, boolean z11, boolean z12, boolean z13, long j11, long j12, List list, boolean z14, long j13, int i10, int i11, int i12) {
        this.f39970d = j10;
        this.f39971e = z10;
        this.f39972i = z11;
        this.f39973o = z12;
        this.f39974p = z13;
        this.f39975q = j11;
        this.f39976r = j12;
        this.f39977s = Collections.unmodifiableList(list);
        this.f39978t = z14;
        this.f39979u = j13;
        this.f39980v = i10;
        this.f39981w = i11;
        this.f39982x = i12;
    }

    private d(Parcel parcel) {
        this.f39970d = parcel.readLong();
        this.f39971e = parcel.readByte() == 1;
        this.f39972i = parcel.readByte() == 1;
        this.f39973o = parcel.readByte() == 1;
        this.f39974p = parcel.readByte() == 1;
        this.f39975q = parcel.readLong();
        this.f39976r = parcel.readLong();
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add(b.a(parcel));
        }
        this.f39977s = Collections.unmodifiableList(arrayList);
        this.f39978t = parcel.readByte() == 1;
        this.f39979u = parcel.readLong();
        this.f39980v = parcel.readInt();
        this.f39981w = parcel.readInt();
        this.f39982x = parcel.readInt();
    }
}
