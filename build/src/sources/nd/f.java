package nd;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends nd.b {
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final List f39485d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public f createFromParcel(Parcel parcel) {
            return new f(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public f[] newArray(int i10) {
            return new f[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f39486a;

        /* renamed from: b  reason: collision with root package name */
        public final long f39487b;

        /* synthetic */ b(int i10, long j10, a aVar) {
            this(i10, j10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b c(Parcel parcel) {
            return new b(parcel.readInt(), parcel.readLong());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void d(Parcel parcel) {
            parcel.writeInt(this.f39486a);
            parcel.writeLong(this.f39487b);
        }

        private b(int i10, long j10) {
            this.f39486a = i10;
            this.f39487b = j10;
        }
    }

    /* synthetic */ f(Parcel parcel, a aVar) {
        this(parcel);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f a(h0 h0Var) {
        int H = h0Var.H();
        ArrayList arrayList = new ArrayList(H);
        for (int i10 = 0; i10 < H; i10++) {
            arrayList.add(c.e(h0Var));
        }
        return new f(arrayList);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int size = this.f39485d.size();
        parcel.writeInt(size);
        for (int i11 = 0; i11 < size; i11++) {
            ((c) this.f39485d.get(i11)).f(parcel);
        }
    }

    private f(List list) {
        this.f39485d = Collections.unmodifiableList(list);
    }

    private f(Parcel parcel) {
        int readInt = parcel.readInt();
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add(c.d(parcel));
        }
        this.f39485d = Collections.unmodifiableList(arrayList);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final long f39488a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f39489b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f39490c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f39491d;

        /* renamed from: e  reason: collision with root package name */
        public final long f39492e;

        /* renamed from: f  reason: collision with root package name */
        public final List f39493f;

        /* renamed from: g  reason: collision with root package name */
        public final boolean f39494g;

        /* renamed from: h  reason: collision with root package name */
        public final long f39495h;

        /* renamed from: i  reason: collision with root package name */
        public final int f39496i;

        /* renamed from: j  reason: collision with root package name */
        public final int f39497j;

        /* renamed from: k  reason: collision with root package name */
        public final int f39498k;

        private c(long j10, boolean z10, boolean z11, boolean z12, List list, long j11, boolean z13, long j12, int i10, int i11, int i12) {
            this.f39488a = j10;
            this.f39489b = z10;
            this.f39490c = z11;
            this.f39491d = z12;
            this.f39493f = Collections.unmodifiableList(list);
            this.f39492e = j11;
            this.f39494g = z13;
            this.f39495h = j12;
            this.f39496i = i10;
            this.f39497j = i11;
            this.f39498k = i12;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static c d(Parcel parcel) {
            return new c(parcel);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static c e(h0 h0Var) {
            boolean z10;
            ArrayList arrayList;
            boolean z11;
            boolean z12;
            long j10;
            boolean z13;
            long j11;
            int i10;
            int i11;
            int i12;
            boolean z14;
            boolean z15;
            boolean z16;
            long j12;
            boolean z17;
            long j13;
            boolean z18;
            long J = h0Var.J();
            boolean z19 = true;
            if ((h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z10 = true;
            } else {
                z10 = true;
                z19 = false;
            }
            ArrayList arrayList2 = new ArrayList();
            if (!z19) {
                int H = h0Var.H();
                if ((H & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z14 = z10;
                } else {
                    z14 = false;
                }
                if ((H & 64) != 0) {
                    z15 = z10;
                } else {
                    z15 = false;
                }
                if ((H & 32) != 0) {
                    z16 = z10;
                } else {
                    z16 = false;
                }
                if (z15) {
                    j12 = h0Var.J();
                } else {
                    j12 = -9223372036854775807L;
                }
                if (!z15) {
                    int H2 = h0Var.H();
                    ArrayList arrayList3 = new ArrayList(H2);
                    int i13 = 0;
                    while (i13 < H2) {
                        arrayList3.add(new b(h0Var.H(), h0Var.J(), null));
                        i13++;
                        H2 = H2;
                    }
                    arrayList2 = arrayList3;
                }
                if (z16) {
                    long H3 = h0Var.H();
                    if ((128 & H3) != 0) {
                        z18 = true;
                    } else {
                        z18 = false;
                    }
                    j13 = ((((H3 & 1) << 32) | h0Var.J()) * 1000) / 90;
                    z17 = z18;
                } else {
                    z17 = false;
                    j13 = -9223372036854775807L;
                }
                int N = h0Var.N();
                int H4 = h0Var.H();
                boolean z20 = z14;
                z13 = z17;
                z11 = z20;
                i12 = h0Var.H();
                long j14 = j12;
                i10 = N;
                i11 = H4;
                long j15 = j13;
                arrayList = arrayList2;
                z12 = z15;
                j10 = j14;
                j11 = j15;
            } else {
                arrayList = arrayList2;
                z11 = false;
                z12 = false;
                j10 = -9223372036854775807L;
                z13 = false;
                j11 = -9223372036854775807L;
                i10 = 0;
                i11 = 0;
                i12 = 0;
            }
            return new c(J, z19, z11, z12, arrayList, j10, z13, j11, i10, i11, i12);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void f(Parcel parcel) {
            parcel.writeLong(this.f39488a);
            parcel.writeByte(this.f39489b ? (byte) 1 : (byte) 0);
            parcel.writeByte(this.f39490c ? (byte) 1 : (byte) 0);
            parcel.writeByte(this.f39491d ? (byte) 1 : (byte) 0);
            int size = this.f39493f.size();
            parcel.writeInt(size);
            for (int i10 = 0; i10 < size; i10++) {
                ((b) this.f39493f.get(i10)).d(parcel);
            }
            parcel.writeLong(this.f39492e);
            parcel.writeByte(this.f39494g ? (byte) 1 : (byte) 0);
            parcel.writeLong(this.f39495h);
            parcel.writeInt(this.f39496i);
            parcel.writeInt(this.f39497j);
            parcel.writeInt(this.f39498k);
        }

        private c(Parcel parcel) {
            this.f39488a = parcel.readLong();
            this.f39489b = parcel.readByte() == 1;
            this.f39490c = parcel.readByte() == 1;
            this.f39491d = parcel.readByte() == 1;
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 < readInt; i10++) {
                arrayList.add(b.c(parcel));
            }
            this.f39493f = Collections.unmodifiableList(arrayList);
            this.f39492e = parcel.readLong();
            this.f39494g = parcel.readByte() == 1;
            this.f39495h = parcel.readLong();
            this.f39496i = parcel.readInt();
            this.f39497j = parcel.readInt();
            this.f39498k = parcel.readInt();
        }
    }
}
