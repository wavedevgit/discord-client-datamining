package fp;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import fp.a0;
import fp.a1;
import fp.z;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import nn.v;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f25093d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f25108e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f25109i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f25110o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f25111p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f25112q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                boolean z10;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                x1 x1Var = (x1) parcel.readParcelable(b.class.getClassLoader());
                a1.b valueOf = a1.b.valueOf(parcel.readString());
                x1 x1Var2 = (x1) parcel.readParcelable(b.class.getClassLoader());
                v.b valueOf2 = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                return new b(x1Var, valueOf, x1Var2, valueOf2, z10);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(x1 nextState, a1.b completedPose, x1 x1Var, v.b cameraFacingMode, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(nextState, "nextState");
            Intrinsics.checkNotNullParameter(completedPose, "completedPose");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25108e = nextState;
            this.f25109i = completedPose;
            this.f25110o = x1Var;
            this.f25111p = cameraFacingMode;
            this.f25112q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25110o;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25111p;
        }

        @Override // fp.x1
        public List p() {
            return this.f25108e.p();
        }

        public final a1.b r() {
            return this.f25109i;
        }

        public final x1 s() {
            return this.f25108e;
        }

        public final boolean t() {
            return this.f25112q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f25108e, i10);
            dest.writeString(this.f25109i.name());
            dest.writeParcelable(this.f25110o, i10);
            dest.writeString(this.f25111p.name());
            dest.writeInt(this.f25112q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f25113e;

        /* renamed from: i  reason: collision with root package name */
        private final rn.b f25114i;

        /* renamed from: o  reason: collision with root package name */
        private final long f25115o;

        /* renamed from: p  reason: collision with root package name */
        private final nn.v f25116p;

        /* renamed from: q  reason: collision with root package name */
        private final long f25117q;

        /* renamed from: r  reason: collision with root package name */
        private final float f25118r;

        /* renamed from: s  reason: collision with root package name */
        private final rn.a f25119s;

        /* renamed from: t  reason: collision with root package name */
        private final List f25120t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f25121u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f25122v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f25123w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f25124x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f25125y;

        /* renamed from: z  reason: collision with root package name */
        private final List f25126z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                rn.b valueOf;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = rn.b.valueOf(parcel.readString());
                }
                rn.b bVar = valueOf;
                long readLong = parcel.readLong();
                nn.v vVar = (nn.v) parcel.readParcelable(c.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                rn.a aVar = (rn.a) parcel.readParcelable(c.class.getClassLoader());
                int readInt2 = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt2);
                for (int i10 = 0; i10 != readInt2; i10++) {
                    arrayList.add(a1.b.valueOf(parcel.readString()));
                }
                x1 x1Var = (x1) parcel.readParcelable(c.class.getClassLoader());
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                boolean z12 = true;
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = true;
                    z12 = false;
                }
                v.b valueOf2 = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z11 = z10;
                } else {
                    z11 = false;
                }
                return new c(readInt, bVar, readLong, vVar, readLong2, readFloat, aVar, arrayList, x1Var, createFromParcel, z12, valueOf2, z11);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public /* synthetic */ c(int i10, rn.b bVar, long j10, nn.v vVar, long j11, float f10, rn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, j10, vVar, j11, f10, aVar, list, x1Var, s0Var, z10, bVar2, z11);
        }

        public static /* synthetic */ c s(c cVar, int i10, rn.b bVar, long j10, nn.v vVar, long j11, float f10, rn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, Object obj) {
            int i12;
            rn.b bVar3;
            long j12;
            nn.v vVar2;
            long j13;
            float f11;
            rn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i12 = cVar.f25113e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f25114i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f25115o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f25116p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f25117q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f25118r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f25119s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f25120t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f25121u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f25122v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f25123w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f25124x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f25125y;
            } else {
                z13 = z11;
            }
            return cVar.r(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25123w;
        }

        public final nn.v b() {
            return this.f25116p;
        }

        @Override // fp.z
        public List c() {
            return this.f25120t;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25122v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return z.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f25113e == cVar.f25113e && this.f25114i == cVar.f25114i && this.f25115o == cVar.f25115o && Intrinsics.areEqual(this.f25116p, cVar.f25116p) && this.f25117q == cVar.f25117q && Float.compare(this.f25118r, cVar.f25118r) == 0 && Intrinsics.areEqual(this.f25119s, cVar.f25119s) && Intrinsics.areEqual(this.f25120t, cVar.f25120t) && Intrinsics.areEqual(this.f25121u, cVar.f25121u) && Intrinsics.areEqual(this.f25122v, cVar.f25122v) && this.f25123w == cVar.f25123w && this.f25124x == cVar.f25124x && this.f25125y == cVar.f25125y) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // fp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Integer.hashCode(this.f25113e) * 31;
            rn.b bVar = this.f25114i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f25115o)) * 31) + this.f25116p.hashCode()) * 31) + Long.hashCode(this.f25117q)) * 31) + Float.hashCode(this.f25118r)) * 31;
            rn.a aVar = this.f25119s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f25120t.hashCode()) * 31;
            x1 x1Var = this.f25121u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f25122v.hashCode()) * 31) + Boolean.hashCode(this.f25123w)) * 31) + this.f25124x.hashCode()) * 31) + Boolean.hashCode(this.f25125y);
        }

        public final long i() {
            return this.f25115o;
        }

        @Override // fp.z
        public boolean k() {
            return this.f25125y;
        }

        public final long m() {
            return this.f25117q;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25121u;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25124x;
        }

        @Override // fp.x1
        public List p() {
            return this.f25126z;
        }

        public final c r(int i10, rn.b bVar, long j10, nn.v cameraProperties, long j11, float f10, rn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final rn.a t() {
            return this.f25119s;
        }

        public String toString() {
            int i10 = this.f25113e;
            rn.b bVar = this.f25114i;
            long j10 = this.f25115o;
            nn.v vVar = this.f25116p;
            long j11 = this.f25117q;
            float f10 = this.f25118r;
            rn.a aVar = this.f25119s;
            List list = this.f25120t;
            x1 x1Var = this.f25121u;
            s0 s0Var = this.f25122v;
            boolean z10 = this.f25123w;
            v.b bVar2 = this.f25124x;
            boolean z11 = this.f25125y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final int u() {
            return this.f25113e;
        }

        public final float v() {
            return this.f25118r;
        }

        public final rn.b w() {
            return this.f25114i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f25113e);
            rn.b bVar = this.f25114i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f25115o);
            dest.writeParcelable(this.f25116p, i10);
            dest.writeLong(this.f25117q);
            dest.writeFloat(this.f25118r);
            dest.writeParcelable(this.f25119s, i10);
            List<a1.b> list = this.f25120t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f25121u, i10);
            this.f25122v.writeToParcel(dest, i10);
            dest.writeInt(this.f25123w ? 1 : 0);
            dest.writeString(this.f25124x.name());
            dest.writeInt(this.f25125y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, rn.b bVar, long j10, nn.v cameraProperties, long j11, float f10, rn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25113e = i10;
            this.f25114i = bVar;
            this.f25115o = j10;
            this.f25116p = cameraProperties;
            this.f25117q = j11;
            this.f25118r = f10;
            this.f25119s = aVar;
            this.f25120t = posesNeeded;
            this.f25121u = x1Var;
            this.f25122v = poseConfigs;
            this.f25123w = z10;
            this.f25124x = cameraFacingMode;
            this.f25125y = z11;
            this.f25126z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f25127e;

        /* renamed from: i  reason: collision with root package name */
        private final rn.b f25128i;

        /* renamed from: o  reason: collision with root package name */
        private final nn.v f25129o;

        /* renamed from: p  reason: collision with root package name */
        private final List f25130p;

        /* renamed from: q  reason: collision with root package name */
        private final long f25131q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f25132r;

        /* renamed from: s  reason: collision with root package name */
        private final long f25133s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f25134t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f25135u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f25136v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f25137w;

        /* renamed from: x  reason: collision with root package name */
        private final List f25138x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                rn.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = rn.b.valueOf(parcel.readString());
                }
                rn.b bVar = valueOf;
                nn.v vVar = (nn.v) parcel.readParcelable(d.class.getClassLoader());
                int readInt2 = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt2);
                for (int i10 = 0; i10 != readInt2; i10++) {
                    arrayList.add(a1.b.valueOf(parcel.readString()));
                }
                long readLong = parcel.readLong();
                if (parcel.readInt() != 0) {
                    z10 = false;
                    j10 = readLong;
                    z12 = true;
                    z11 = true;
                } else {
                    z10 = false;
                    z11 = true;
                    j10 = readLong;
                    z12 = false;
                }
                long readLong2 = parcel.readLong();
                x1 x1Var = (x1) parcel.readParcelable(d.class.getClassLoader());
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                v.b valueOf2 = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z13 = z11;
                } else {
                    z13 = z10;
                }
                return new d(readInt, bVar, vVar, arrayList, j10, z12, readLong2, x1Var, createFromParcel, valueOf2, z13);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        public /* synthetic */ d(int i10, rn.b bVar, nn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, vVar, list, j10, (i11 & 32) != 0 ? true : z10, j11, x1Var, s0Var, bVar2, z11);
        }

        public static /* synthetic */ d s(d dVar, int i10, rn.b bVar, nn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, Object obj) {
            rn.b bVar3;
            nn.v vVar2;
            List list2;
            long j12;
            boolean z12;
            long j13;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i10 = dVar.f25127e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f25128i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f25129o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f25130p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f25131q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f25132r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f25133s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f25134t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f25135u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f25136v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f25137w;
            } else {
                z13 = z11;
            }
            return dVar.r(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25132r;
        }

        @Override // fp.a0
        public nn.v b() {
            return this.f25129o;
        }

        @Override // fp.z
        public List c() {
            return this.f25130p;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25135u;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return a0.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f25127e == dVar.f25127e && this.f25128i == dVar.f25128i && Intrinsics.areEqual(this.f25129o, dVar.f25129o) && Intrinsics.areEqual(this.f25130p, dVar.f25130p) && this.f25131q == dVar.f25131q && this.f25132r == dVar.f25132r && this.f25133s == dVar.f25133s && Intrinsics.areEqual(this.f25134t, dVar.f25134t) && Intrinsics.areEqual(this.f25135u, dVar.f25135u) && this.f25136v == dVar.f25136v && this.f25137w == dVar.f25137w) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // fp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = Integer.hashCode(this.f25127e) * 31;
            rn.b bVar = this.f25128i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f25129o.hashCode()) * 31) + this.f25130p.hashCode()) * 31) + Long.hashCode(this.f25131q)) * 31) + Boolean.hashCode(this.f25132r)) * 31) + Long.hashCode(this.f25133s)) * 31;
            x1 x1Var = this.f25134t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f25135u.hashCode()) * 31) + this.f25136v.hashCode()) * 31) + Boolean.hashCode(this.f25137w);
        }

        @Override // fp.a0
        public long i() {
            return this.f25131q;
        }

        @Override // fp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // fp.z
        public boolean k() {
            return this.f25137w;
        }

        @Override // fp.a0
        public long m() {
            return this.f25133s;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25134t;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25136v;
        }

        @Override // fp.x1
        public List p() {
            return this.f25138x;
        }

        public final d r(int i10, rn.b bVar, nn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public final int t() {
            return this.f25127e;
        }

        public String toString() {
            int i10 = this.f25127e;
            rn.b bVar = this.f25128i;
            nn.v vVar = this.f25129o;
            List list = this.f25130p;
            long j10 = this.f25131q;
            boolean z10 = this.f25132r;
            long j11 = this.f25133s;
            x1 x1Var = this.f25134t;
            s0 s0Var = this.f25135u;
            v.b bVar2 = this.f25136v;
            boolean z11 = this.f25137w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final rn.b u() {
            return this.f25128i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f25127e);
            rn.b bVar = this.f25128i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f25129o, i10);
            List<a1.b> list = this.f25130p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f25131q);
            dest.writeInt(this.f25132r ? 1 : 0);
            dest.writeLong(this.f25133s);
            dest.writeParcelable(this.f25134t, i10);
            this.f25135u.writeToParcel(dest, i10);
            dest.writeString(this.f25136v.name());
            dest.writeInt(this.f25137w ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, rn.b bVar, nn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25127e = i10;
            this.f25128i = bVar;
            this.f25129o = cameraProperties;
            this.f25130p = posesNeeded;
            this.f25131q = j10;
            this.f25132r = z10;
            this.f25133s = j11;
            this.f25134t = x1Var;
            this.f25135u = poseConfigs;
            this.f25136v = cameraFacingMode;
            this.f25137w = z11;
            this.f25138x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f25139e;

        /* renamed from: i  reason: collision with root package name */
        private final long f25140i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f25141o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f25142p;

        /* renamed from: q  reason: collision with root package name */
        private final nn.v f25143q;

        /* renamed from: r  reason: collision with root package name */
        private final long f25144r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f25145s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f25146t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                boolean z10;
                long j10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                boolean z12 = false;
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(e.class.getClassLoader()));
                }
                long readLong = parcel.readLong();
                if (parcel.readInt() != 0) {
                    z10 = true;
                    j10 = readLong;
                    z11 = true;
                } else {
                    z10 = true;
                    j10 = readLong;
                    z11 = false;
                }
                long j11 = j10;
                if (parcel.readInt() != 0) {
                    z12 = z10;
                }
                return new e(arrayList, j11, z11, z12, (nn.v) parcel.readParcelable(e.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(e.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final e[] newArray(int i10) {
                return new e[i10];
            }
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public /* synthetic */ e(java.util.List r2, long r3, boolean r5, boolean r6, nn.v r7, long r8, fp.x1 r10, nn.v.b r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
            /*
                r1 = this;
                r13 = r12 & 4
                r0 = 0
                if (r13 == 0) goto L6
                r5 = r0
            L6:
                r12 = r12 & 8
                if (r12 == 0) goto L14
                r12 = r11
                r11 = r10
                r9 = r8
                r8 = r7
                r7 = r0
            Lf:
                r6 = r5
                r4 = r3
                r3 = r2
                r2 = r1
                goto L1a
            L14:
                r12 = r11
                r11 = r10
                r9 = r8
                r8 = r7
                r7 = r6
                goto Lf
            L1a:
                r2.<init>(r3, r4, r6, r7, r8, r9, r11, r12)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: fp.x1.e.<init>(java.util.List, long, boolean, boolean, nn.v, long, fp.x1, nn.v$b, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }

        public static /* synthetic */ e s(e eVar, List list, long j10, boolean z10, boolean z11, nn.v vVar, long j11, x1 x1Var, v.b bVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = eVar.f25139e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f25140i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f25141o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f25142p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f25143q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f25144r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f25145s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f25146t;
            }
            long j12 = j11;
            nn.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.r(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final nn.v b() {
            return this.f25143q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f25139e, eVar.f25139e) && this.f25140i == eVar.f25140i && this.f25141o == eVar.f25141o && this.f25142p == eVar.f25142p && Intrinsics.areEqual(this.f25143q, eVar.f25143q) && this.f25144r == eVar.f25144r && Intrinsics.areEqual(this.f25145s, eVar.f25145s) && this.f25146t == eVar.f25146t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f25139e.hashCode() * 31) + Long.hashCode(this.f25140i)) * 31) + Boolean.hashCode(this.f25141o)) * 31) + Boolean.hashCode(this.f25142p)) * 31) + this.f25143q.hashCode()) * 31) + Long.hashCode(this.f25144r)) * 31;
            x1 x1Var = this.f25145s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f25146t.hashCode();
        }

        public final long m() {
            return this.f25144r;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25145s;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25146t;
        }

        @Override // fp.x1
        public List p() {
            return this.f25139e;
        }

        public final e r(List selfies, long j10, boolean z10, boolean z11, nn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public final long t() {
            return this.f25140i;
        }

        public String toString() {
            List list = this.f25139e;
            long j10 = this.f25140i;
            boolean z10 = this.f25141o;
            boolean z11 = this.f25142p;
            nn.v vVar = this.f25143q;
            long j11 = this.f25144r;
            x1 x1Var = this.f25145s;
            v.b bVar = this.f25146t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final boolean u() {
            return this.f25141o;
        }

        public final boolean v() {
            return this.f25142p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f25139e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f25140i);
            dest.writeInt(this.f25141o ? 1 : 0);
            dest.writeInt(this.f25142p ? 1 : 0);
            dest.writeParcelable(this.f25143q, i10);
            dest.writeLong(this.f25144r);
            dest.writeParcelable(this.f25145s, i10);
            dest.writeString(this.f25146t.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, nn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25139e = selfies;
            this.f25140i = j10;
            this.f25141o = z10;
            this.f25142p = z11;
            this.f25143q = cameraProperties;
            this.f25144r = j11;
            this.f25145s = x1Var;
            this.f25146t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f25147e;

        /* renamed from: i  reason: collision with root package name */
        private final nn.v f25148i;

        /* renamed from: o  reason: collision with root package name */
        private final long f25149o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f25150p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f25151q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final f createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(f.class.getClassLoader()));
                }
                return new f(arrayList, (nn.v) parcel.readParcelable(f.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(f.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(List selfies, nn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25147e = selfies;
            this.f25148i = cameraProperties;
            this.f25149o = j10;
            this.f25150p = x1Var;
            this.f25151q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25150p;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25151q;
        }

        @Override // fp.x1
        public List p() {
            return this.f25147e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f25147e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f25148i, i10);
            dest.writeLong(this.f25149o);
            dest.writeParcelable(this.f25150p, i10);
            dest.writeString(this.f25151q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f25152d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f25153e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f25154i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f25155o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f25156p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f25157q;

        static {
            g[] a10 = a();
            f25156p = a10;
            f25157q = qr.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f25152d, f25153e, f25154i, f25155o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f25156p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f25158e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f25159i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f25160o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f25161p;

        /* renamed from: q  reason: collision with root package name */
        private final List f25162q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final h createFromParcel(Parcel parcel) {
                boolean z10;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                boolean z11 = false;
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (parcel.readInt() != 0) {
                    z11 = true;
                }
                return new h(z10, z11, (x1) parcel.readParcelable(h.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final h[] newArray(int i10) {
                return new h[i10];
            }
        }

        public /* synthetic */ h(boolean z10, boolean z11, x1 x1Var, v.b bVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, x1Var, bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f25158e == hVar.f25158e && this.f25159i == hVar.f25159i && Intrinsics.areEqual(this.f25160o, hVar.f25160o) && this.f25161p == hVar.f25161p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f25158e) * 31) + Boolean.hashCode(this.f25159i)) * 31;
            x1 x1Var = this.f25160o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f25161p.hashCode();
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25160o;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25161p;
        }

        @Override // fp.x1
        public List p() {
            return this.f25162q;
        }

        public String toString() {
            boolean z10 = this.f25158e;
            boolean z11 = this.f25159i;
            x1 x1Var = this.f25160o;
            v.b bVar = this.f25161p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f25158e ? 1 : 0);
            dest.writeInt(this.f25159i ? 1 : 0);
            dest.writeParcelable(this.f25160o, i10);
            dest.writeString(this.f25161p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25158e = z10;
            this.f25159i = z11;
            this.f25160o = x1Var;
            this.f25161p = cameraFacingMode;
            this.f25162q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f25163e;

        /* renamed from: i  reason: collision with root package name */
        private final List f25164i;

        /* renamed from: o  reason: collision with root package name */
        private final String f25165o;

        /* renamed from: p  reason: collision with root package name */
        private final nn.v f25166p;

        /* renamed from: q  reason: collision with root package name */
        private final long f25167q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f25168r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f25169s;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final i createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(i.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(i.class.getClassLoader()));
                }
                return new i(arrayList, arrayList2, parcel.readString(), (nn.v) parcel.readParcelable(i.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(i.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(List selfies, List selfiesToReview, String str, nn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(selfiesToReview, "selfiesToReview");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25163e = selfies;
            this.f25164i = selfiesToReview;
            this.f25165o = str;
            this.f25166p = cameraProperties;
            this.f25167q = j10;
            this.f25168r = x1Var;
            this.f25169s = cameraFacingMode;
        }

        public final nn.v b() {
            return this.f25166p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f25167q;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25168r;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25169s;
        }

        @Override // fp.x1
        public List p() {
            return this.f25163e;
        }

        public final List r() {
            return this.f25164i;
        }

        public final String s() {
            return this.f25165o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f25163e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f25164i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f25165o);
            dest.writeParcelable(this.f25166p, i10);
            dest.writeLong(this.f25167q);
            dest.writeParcelable(this.f25168r, i10);
            dest.writeString(this.f25169s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f25173e;

        /* renamed from: i  reason: collision with root package name */
        private final List f25174i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f25175o;

        /* renamed from: p  reason: collision with root package name */
        private final nn.v f25176p;

        /* renamed from: q  reason: collision with root package name */
        private final long f25177q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f25178r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f25179s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f25180t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f25181u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                Class cls;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(k.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(a1.b.valueOf(parcel.readString()));
                }
                if (parcel.readInt() != 0) {
                    cls = k.class;
                    z10 = true;
                } else {
                    cls = k.class;
                    z10 = false;
                }
                nn.v vVar = (nn.v) parcel.readParcelable(cls.getClassLoader());
                long readLong = parcel.readLong();
                x1 x1Var = (x1) parcel.readParcelable(cls.getClassLoader());
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                v.b valueOf = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                return new k(arrayList, arrayList2, z10, vVar, readLong, x1Var, createFromParcel, valueOf, z11);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(List selfies, List posesNeeded, boolean z10, nn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25173e = selfies;
            this.f25174i = posesNeeded;
            this.f25175o = z10;
            this.f25176p = cameraProperties;
            this.f25177q = j10;
            this.f25178r = x1Var;
            this.f25179s = poseConfigs;
            this.f25180t = cameraFacingMode;
            this.f25181u = z11;
        }

        public static /* synthetic */ k s(k kVar, List list, List list2, boolean z10, nn.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f25173e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f25174i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f25175o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f25176p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f25177q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f25178r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f25179s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f25180t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f25181u;
            }
            long j11 = j10;
            boolean z12 = z10;
            nn.v vVar2 = vVar;
            return kVar.r(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25175o;
        }

        public final nn.v b() {
            return this.f25176p;
        }

        @Override // fp.z
        public List c() {
            return this.f25174i;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25179s;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return z.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f25173e, kVar.f25173e) && Intrinsics.areEqual(this.f25174i, kVar.f25174i) && this.f25175o == kVar.f25175o && Intrinsics.areEqual(this.f25176p, kVar.f25176p) && this.f25177q == kVar.f25177q && Intrinsics.areEqual(this.f25178r, kVar.f25178r) && Intrinsics.areEqual(this.f25179s, kVar.f25179s) && this.f25180t == kVar.f25180t && this.f25181u == kVar.f25181u) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((this.f25173e.hashCode() * 31) + this.f25174i.hashCode()) * 31) + Boolean.hashCode(this.f25175o)) * 31) + this.f25176p.hashCode()) * 31) + Long.hashCode(this.f25177q)) * 31;
            x1 x1Var = this.f25178r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f25179s.hashCode()) * 31) + this.f25180t.hashCode()) * 31) + Boolean.hashCode(this.f25181u);
        }

        @Override // fp.z
        public boolean k() {
            return this.f25181u;
        }

        public final long m() {
            return this.f25177q;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25178r;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25180t;
        }

        @Override // fp.x1
        public List p() {
            return this.f25173e;
        }

        public final k r(List selfies, List posesNeeded, boolean z10, nn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new k(selfies, posesNeeded, z10, cameraProperties, j10, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            List list = this.f25173e;
            List list2 = this.f25174i;
            boolean z10 = this.f25175o;
            nn.v vVar = this.f25176p;
            long j10 = this.f25177q;
            x1 x1Var = this.f25178r;
            s0 s0Var = this.f25179s;
            v.b bVar = this.f25180t;
            boolean z11 = this.f25181u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f25173e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f25174i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f25175o ? 1 : 0);
            dest.writeParcelable(this.f25176p, i10);
            dest.writeLong(this.f25177q);
            dest.writeParcelable(this.f25178r, i10);
            this.f25179s.writeToParcel(dest, i10);
            dest.writeString(this.f25180t.name());
            dest.writeInt(this.f25181u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f25196e;

        /* renamed from: i  reason: collision with root package name */
        private final nn.v f25197i;

        /* renamed from: o  reason: collision with root package name */
        private final long f25198o;

        /* renamed from: p  reason: collision with root package name */
        private final float f25199p;

        /* renamed from: q  reason: collision with root package name */
        private final rn.a f25200q;

        /* renamed from: r  reason: collision with root package name */
        private final List f25201r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f25202s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f25203t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f25204u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f25205v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f25206w;

        /* renamed from: x  reason: collision with root package name */
        private final List f25207x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final m createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                long readLong = parcel.readLong();
                nn.v vVar = (nn.v) parcel.readParcelable(m.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                rn.a aVar = (rn.a) parcel.readParcelable(m.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(a1.b.valueOf(parcel.readString()));
                }
                x1 x1Var = (x1) parcel.readParcelable(m.class.getClassLoader());
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                boolean z12 = true;
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = true;
                    z12 = false;
                }
                v.b valueOf = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z11 = z10;
                } else {
                    z11 = false;
                }
                return new m(readLong, vVar, readLong2, readFloat, aVar, arrayList, x1Var, createFromParcel, z12, valueOf, z11);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final m[] newArray(int i10) {
                return new m[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public m(long j10, nn.v cameraProperties, long j11, float f10, rn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25196e = j10;
            this.f25197i = cameraProperties;
            this.f25198o = j11;
            this.f25199p = f10;
            this.f25200q = aVar;
            this.f25201r = posesNeeded;
            this.f25202s = x1Var;
            this.f25203t = poseConfigs;
            this.f25204u = z10;
            this.f25205v = cameraFacingMode;
            this.f25206w = z11;
            this.f25207x = CollectionsKt.l();
        }

        public static /* synthetic */ m s(m mVar, long j10, nn.v vVar, long j11, float f10, rn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            long j12;
            nn.v vVar2;
            long j13;
            float f11;
            rn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar2;
            boolean z13;
            if ((i10 & 1) != 0) {
                j12 = mVar.f25196e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f25197i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f25198o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f25199p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f25200q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f25201r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f25202s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f25203t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f25204u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f25205v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f25206w;
            } else {
                z13 = z11;
            }
            return mVar.r(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25204u;
        }

        public final nn.v b() {
            return this.f25197i;
        }

        @Override // fp.z
        public List c() {
            return this.f25201r;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25203t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return z.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof m)) {
                return false;
            }
            m mVar = (m) obj;
            if (this.f25196e == mVar.f25196e && Intrinsics.areEqual(this.f25197i, mVar.f25197i) && this.f25198o == mVar.f25198o && Float.compare(this.f25199p, mVar.f25199p) == 0 && Intrinsics.areEqual(this.f25200q, mVar.f25200q) && Intrinsics.areEqual(this.f25201r, mVar.f25201r) && Intrinsics.areEqual(this.f25202s, mVar.f25202s) && Intrinsics.areEqual(this.f25203t, mVar.f25203t) && this.f25204u == mVar.f25204u && this.f25205v == mVar.f25205v && this.f25206w == mVar.f25206w) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // fp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Long.hashCode(this.f25196e) * 31) + this.f25197i.hashCode()) * 31) + Long.hashCode(this.f25198o)) * 31) + Float.hashCode(this.f25199p)) * 31;
            rn.a aVar = this.f25200q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f25201r.hashCode()) * 31;
            x1 x1Var = this.f25202s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f25203t.hashCode()) * 31) + Boolean.hashCode(this.f25204u)) * 31) + this.f25205v.hashCode()) * 31) + Boolean.hashCode(this.f25206w);
        }

        public final long i() {
            return this.f25196e;
        }

        @Override // fp.z
        public boolean k() {
            return this.f25206w;
        }

        public final long m() {
            return this.f25198o;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25202s;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25205v;
        }

        @Override // fp.x1
        public List p() {
            return this.f25207x;
        }

        public final m r(long j10, nn.v cameraProperties, long j11, float f10, rn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final rn.a t() {
            return this.f25200q;
        }

        public String toString() {
            long j10 = this.f25196e;
            nn.v vVar = this.f25197i;
            long j11 = this.f25198o;
            float f10 = this.f25199p;
            rn.a aVar = this.f25200q;
            List list = this.f25201r;
            x1 x1Var = this.f25202s;
            s0 s0Var = this.f25203t;
            boolean z10 = this.f25204u;
            v.b bVar = this.f25205v;
            boolean z11 = this.f25206w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final float u() {
            return this.f25199p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f25196e);
            dest.writeParcelable(this.f25197i, i10);
            dest.writeLong(this.f25198o);
            dest.writeFloat(this.f25199p);
            dest.writeParcelable(this.f25200q, i10);
            List<a1.b> list = this.f25201r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f25202s, i10);
            this.f25203t.writeToParcel(dest, i10);
            dest.writeInt(this.f25204u ? 1 : 0);
            dest.writeString(this.f25205v.name());
            dest.writeInt(this.f25206w ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f25208e;

        /* renamed from: i  reason: collision with root package name */
        private final String f25209i;

        /* renamed from: o  reason: collision with root package name */
        private final nn.v f25210o;

        /* renamed from: p  reason: collision with root package name */
        private final long f25211p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f25212q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f25213r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final n createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(n.class.getClassLoader()));
                }
                return new n(arrayList, parcel.readString(), (nn.v) parcel.readParcelable(n.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(n.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final n[] newArray(int i10) {
                return new n[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(List selfies, String str, nn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25208e = selfies;
            this.f25209i = str;
            this.f25210o = cameraProperties;
            this.f25211p = j10;
            this.f25212q = x1Var;
            this.f25213r = cameraFacingMode;
        }

        public final nn.v b() {
            return this.f25210o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f25211p;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25212q;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25213r;
        }

        @Override // fp.x1
        public List p() {
            return this.f25208e;
        }

        public final String r() {
            return this.f25209i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f25208e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f25209i);
            dest.writeParcelable(this.f25210o, i10);
            dest.writeLong(this.f25211p);
            dest.writeParcelable(this.f25212q, i10);
            dest.writeString(this.f25213r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f25214e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f25215i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f25216o;

        /* renamed from: p  reason: collision with root package name */
        private final List f25217p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f25218q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f25219r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f25220s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f25221t;

        /* renamed from: u  reason: collision with root package name */
        private final List f25222u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final o createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (parcel.readInt() != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                x1 x1Var = (x1) parcel.readParcelable(o.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(a1.b.valueOf(parcel.readString()));
                }
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                if (parcel.readInt() != 0) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                v.b valueOf = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                return new o(z10, z11, x1Var, arrayList, createFromParcel, z12, valueOf, z13);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final o[] newArray(int i10) {
                return new o[i10];
            }
        }

        public /* synthetic */ o(boolean z10, boolean z11, x1 x1Var, List list, s0 s0Var, boolean z12, v.b bVar, boolean z13, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, x1Var, list, s0Var, (i10 & 32) != 0 ? true : z12, bVar, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z13);
        }

        public static /* synthetic */ o s(o oVar, boolean z10, boolean z11, x1 x1Var, List list, s0 s0Var, boolean z12, v.b bVar, boolean z13, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                z10 = oVar.f25214e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f25215i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f25216o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f25217p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f25218q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f25219r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f25220s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f25221t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.r(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25219r;
        }

        @Override // fp.z
        public List c() {
            return this.f25217p;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25218q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return z.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof o)) {
                return false;
            }
            o oVar = (o) obj;
            if (this.f25214e == oVar.f25214e && this.f25215i == oVar.f25215i && Intrinsics.areEqual(this.f25216o, oVar.f25216o) && Intrinsics.areEqual(this.f25217p, oVar.f25217p) && Intrinsics.areEqual(this.f25218q, oVar.f25218q) && this.f25219r == oVar.f25219r && this.f25220s == oVar.f25220s && this.f25221t == oVar.f25221t) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f25214e) * 31) + Boolean.hashCode(this.f25215i)) * 31;
            x1 x1Var = this.f25216o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f25217p.hashCode()) * 31) + this.f25218q.hashCode()) * 31) + Boolean.hashCode(this.f25219r)) * 31) + this.f25220s.hashCode()) * 31) + Boolean.hashCode(this.f25221t);
        }

        @Override // fp.z
        public boolean k() {
            return this.f25221t;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25216o;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25220s;
        }

        @Override // fp.x1
        public List p() {
            return this.f25222u;
        }

        public final o r(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public final boolean t() {
            return this.f25215i;
        }

        public String toString() {
            boolean z10 = this.f25214e;
            boolean z11 = this.f25215i;
            x1 x1Var = this.f25216o;
            List list = this.f25217p;
            s0 s0Var = this.f25218q;
            boolean z12 = this.f25219r;
            v.b bVar = this.f25220s;
            boolean z13 = this.f25221t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final boolean u() {
            return this.f25214e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f25214e ? 1 : 0);
            dest.writeInt(this.f25215i ? 1 : 0);
            dest.writeParcelable(this.f25216o, i10);
            List<a1.b> list = this.f25217p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f25218q.writeToParcel(dest, i10);
            dest.writeInt(this.f25219r ? 1 : 0);
            dest.writeString(this.f25220s.name());
            dest.writeInt(this.f25221t ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25214e = z10;
            this.f25215i = z11;
            this.f25216o = x1Var;
            this.f25217p = posesNeeded;
            this.f25218q = poseConfigs;
            this.f25219r = z12;
            this.f25220s = cameraFacingMode;
            this.f25221t = z13;
            this.f25222u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f25223e;

        /* renamed from: i  reason: collision with root package name */
        private final nn.v f25224i;

        /* renamed from: o  reason: collision with root package name */
        private final long f25225o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f25226p;

        /* renamed from: q  reason: collision with root package name */
        private final List f25227q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f25228r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f25229s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f25230t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f25231u;

        /* renamed from: v  reason: collision with root package name */
        private final List f25232v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final p createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                nn.v vVar = (nn.v) parcel.readParcelable(p.class.getClassLoader());
                long readLong = parcel.readLong();
                x1 x1Var = (x1) parcel.readParcelable(p.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(a1.b.valueOf(parcel.readString()));
                }
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                boolean z12 = true;
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = true;
                    z12 = false;
                }
                v.b valueOf = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z11 = z10;
                } else {
                    z11 = false;
                }
                return new p(readString, vVar, readLong, x1Var, arrayList, createFromParcel, z12, valueOf, z11);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final p[] newArray(int i10) {
                return new p[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public p(String str, nn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25223e = str;
            this.f25224i = cameraProperties;
            this.f25225o = j10;
            this.f25226p = x1Var;
            this.f25227q = posesNeeded;
            this.f25228r = poseConfigs;
            this.f25229s = z10;
            this.f25230t = cameraFacingMode;
            this.f25231u = z11;
            this.f25232v = CollectionsKt.l();
        }

        public static /* synthetic */ p s(p pVar, String str, nn.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f25223e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f25224i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f25225o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f25226p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f25227q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f25228r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f25229s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f25230t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f25231u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.r(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25229s;
        }

        @Override // fp.z
        public List c() {
            return this.f25227q;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25228r;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return z.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof p)) {
                return false;
            }
            p pVar = (p) obj;
            if (Intrinsics.areEqual(this.f25223e, pVar.f25223e) && Intrinsics.areEqual(this.f25224i, pVar.f25224i) && this.f25225o == pVar.f25225o && Intrinsics.areEqual(this.f25226p, pVar.f25226p) && Intrinsics.areEqual(this.f25227q, pVar.f25227q) && Intrinsics.areEqual(this.f25228r, pVar.f25228r) && this.f25229s == pVar.f25229s && this.f25230t == pVar.f25230t && this.f25231u == pVar.f25231u) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            String str = this.f25223e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f25224i.hashCode()) * 31) + Long.hashCode(this.f25225o)) * 31;
            x1 x1Var = this.f25226p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f25227q.hashCode()) * 31) + this.f25228r.hashCode()) * 31) + Boolean.hashCode(this.f25229s)) * 31) + this.f25230t.hashCode()) * 31) + Boolean.hashCode(this.f25231u);
        }

        @Override // fp.z
        public boolean k() {
            return this.f25231u;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25226p;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25230t;
        }

        @Override // fp.x1
        public List p() {
            return this.f25232v;
        }

        public final p r(String str, nn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            String str = this.f25223e;
            nn.v vVar = this.f25224i;
            long j10 = this.f25225o;
            x1 x1Var = this.f25226p;
            List list = this.f25227q;
            s0 s0Var = this.f25228r;
            boolean z10 = this.f25229s;
            v.b bVar = this.f25230t;
            boolean z11 = this.f25231u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f25223e);
            dest.writeParcelable(this.f25224i, i10);
            dest.writeLong(this.f25225o);
            dest.writeParcelable(this.f25226p, i10);
            List<a1.b> list = this.f25227q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f25228r.writeToParcel(dest, i10);
            dest.writeInt(this.f25229s ? 1 : 0);
            dest.writeString(this.f25230t.name());
            dest.writeInt(this.f25231u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f25233e;

        /* renamed from: i  reason: collision with root package name */
        private final String f25234i;

        /* renamed from: o  reason: collision with root package name */
        private final nn.v f25235o;

        /* renamed from: p  reason: collision with root package name */
        private final long f25236p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f25237q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f25238r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final q createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(q.class.getClassLoader()));
                }
                return new q(arrayList, parcel.readString(), (nn.v) parcel.readParcelable(q.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(q.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final q[] newArray(int i10) {
                return new q[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(List selfies, String webRtcObjectId, nn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(webRtcObjectId, "webRtcObjectId");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25233e = selfies;
            this.f25234i = webRtcObjectId;
            this.f25235o = cameraProperties;
            this.f25236p = j10;
            this.f25237q = x1Var;
            this.f25238r = cameraFacingMode;
        }

        public final nn.v b() {
            return this.f25235o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f25236p;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25237q;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25238r;
        }

        @Override // fp.x1
        public List p() {
            return this.f25233e;
        }

        public final String r() {
            return this.f25234i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f25233e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f25234i);
            dest.writeParcelable(this.f25235o, i10);
            dest.writeLong(this.f25236p);
            dest.writeParcelable(this.f25237q, i10);
            dest.writeString(this.f25238r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 n();

    public abstract v.b o();

    public abstract List p();

    public final void q(boolean z10) {
        this.f25093d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f25170e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f25171i;

        /* renamed from: o  reason: collision with root package name */
        private final List f25172o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final j createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new j((x1) parcel.readParcelable(j.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final j[] newArray(int i10) {
                return new j[i10];
            }
        }

        public /* synthetic */ j(x1 x1Var, v.b bVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(x1Var, (i10 & 2) != 0 ? v.b.f42078d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25170e;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25171i;
        }

        @Override // fp.x1
        public List p() {
            return this.f25172o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f25170e, i10);
            dest.writeString(this.f25171i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25170e = x1Var;
            this.f25171i = cameraFacingMode;
            this.f25172o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f25182e;

        /* renamed from: i  reason: collision with root package name */
        private final rn.b f25183i;

        /* renamed from: o  reason: collision with root package name */
        private final float f25184o;

        /* renamed from: p  reason: collision with root package name */
        private final rn.a f25185p;

        /* renamed from: q  reason: collision with root package name */
        private final List f25186q;

        /* renamed from: r  reason: collision with root package name */
        private final long f25187r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f25188s;

        /* renamed from: t  reason: collision with root package name */
        private final long f25189t;

        /* renamed from: u  reason: collision with root package name */
        private final nn.v f25190u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f25191v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f25192w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f25193x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f25194y;

        /* renamed from: z  reason: collision with root package name */
        private final List f25195z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                boolean z10;
                rn.b valueOf;
                boolean z11;
                boolean z12;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = rn.b.valueOf(parcel.readString());
                }
                rn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                rn.a aVar = (rn.a) parcel.readParcelable(l.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(a1.b.valueOf(parcel.readString()));
                }
                long readLong = parcel.readLong();
                if (parcel.readInt() != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                long readLong2 = parcel.readLong();
                nn.v vVar = (nn.v) parcel.readParcelable(l.class.getClassLoader());
                x1 x1Var = (x1) parcel.readParcelable(l.class.getClassLoader());
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                v.b valueOf2 = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                return new l(z10, bVar, readFloat, aVar, arrayList, readLong, z11, readLong2, vVar, x1Var, createFromParcel, valueOf2, z12);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(boolean z10, rn.b bVar, float f10, rn.a aVar, List list, long j10, boolean z11, long j11, nn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? rn.b.f48563d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
        }

        public static /* synthetic */ l s(l lVar, boolean z10, rn.b bVar, float f10, rn.a aVar, List list, long j10, boolean z11, long j11, nn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, Object obj) {
            boolean z13;
            rn.b bVar3;
            float f11;
            rn.a aVar2;
            List list2;
            long j12;
            boolean z14;
            long j13;
            nn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z15;
            if ((i10 & 1) != 0) {
                z13 = lVar.f25182e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f25183i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f25184o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f25185p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f25186q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f25187r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f25188s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f25189t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f25190u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f25191v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f25192w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f25193x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f25194y;
            } else {
                z15 = z12;
            }
            return lVar.r(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25188s;
        }

        @Override // fp.a0
        public nn.v b() {
            return this.f25190u;
        }

        @Override // fp.z
        public List c() {
            return this.f25186q;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25192w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return a0.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (this.f25182e == lVar.f25182e && this.f25183i == lVar.f25183i && Float.compare(this.f25184o, lVar.f25184o) == 0 && Intrinsics.areEqual(this.f25185p, lVar.f25185p) && Intrinsics.areEqual(this.f25186q, lVar.f25186q) && this.f25187r == lVar.f25187r && this.f25188s == lVar.f25188s && this.f25189t == lVar.f25189t && Intrinsics.areEqual(this.f25190u, lVar.f25190u) && Intrinsics.areEqual(this.f25191v, lVar.f25191v) && Intrinsics.areEqual(this.f25192w, lVar.f25192w) && this.f25193x == lVar.f25193x && this.f25194y == lVar.f25194y) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // fp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Boolean.hashCode(this.f25182e) * 31;
            rn.b bVar = this.f25183i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f25184o)) * 31;
            rn.a aVar = this.f25185p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f25186q.hashCode()) * 31) + Long.hashCode(this.f25187r)) * 31) + Boolean.hashCode(this.f25188s)) * 31) + Long.hashCode(this.f25189t)) * 31) + this.f25190u.hashCode()) * 31;
            x1 x1Var = this.f25191v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f25192w.hashCode()) * 31) + this.f25193x.hashCode()) * 31) + Boolean.hashCode(this.f25194y);
        }

        @Override // fp.a0
        public long i() {
            return this.f25187r;
        }

        @Override // fp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // fp.z
        public boolean k() {
            return this.f25194y;
        }

        @Override // fp.a0
        public long m() {
            return this.f25189t;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25191v;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25193x;
        }

        @Override // fp.x1
        public List p() {
            return this.f25195z;
        }

        public final l r(boolean z10, rn.b bVar, float f10, rn.a aVar, List posesNeeded, long j10, boolean z11, long j11, nn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public final rn.a t() {
            return this.f25185p;
        }

        public String toString() {
            boolean z10 = this.f25182e;
            rn.b bVar = this.f25183i;
            float f10 = this.f25184o;
            rn.a aVar = this.f25185p;
            List list = this.f25186q;
            long j10 = this.f25187r;
            boolean z11 = this.f25188s;
            long j11 = this.f25189t;
            nn.v vVar = this.f25190u;
            x1 x1Var = this.f25191v;
            s0 s0Var = this.f25192w;
            v.b bVar2 = this.f25193x;
            boolean z12 = this.f25194y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final float u() {
            return this.f25184o;
        }

        public final rn.b v() {
            return this.f25183i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f25182e ? 1 : 0);
            rn.b bVar = this.f25183i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f25184o);
            dest.writeParcelable(this.f25185p, i10);
            List<a1.b> list = this.f25186q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f25187r);
            dest.writeInt(this.f25188s ? 1 : 0);
            dest.writeLong(this.f25189t);
            dest.writeParcelable(this.f25190u, i10);
            dest.writeParcelable(this.f25191v, i10);
            this.f25192w.writeToParcel(dest, i10);
            dest.writeString(this.f25193x.name());
            dest.writeInt(this.f25194y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, rn.b bVar, float f10, rn.a aVar, List posesNeeded, long j10, boolean z11, long j11, nn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f25182e = z10;
            this.f25183i = bVar;
            this.f25184o = f10;
            this.f25185p = aVar;
            this.f25186q = posesNeeded;
            this.f25187r = j10;
            this.f25188s = z11;
            this.f25189t = j11;
            this.f25190u = cameraProperties;
            this.f25191v = x1Var;
            this.f25192w = poseConfigs;
            this.f25193x = cameraFacingMode;
            this.f25194y = z12;
            this.f25195z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0330a();

        /* renamed from: e  reason: collision with root package name */
        private final rn.b f25094e;

        /* renamed from: i  reason: collision with root package name */
        private final float f25095i;

        /* renamed from: o  reason: collision with root package name */
        private final rn.a f25096o;

        /* renamed from: p  reason: collision with root package name */
        private final List f25097p;

        /* renamed from: q  reason: collision with root package name */
        private final List f25098q;

        /* renamed from: r  reason: collision with root package name */
        private final long f25099r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f25100s;

        /* renamed from: t  reason: collision with root package name */
        private final long f25101t;

        /* renamed from: u  reason: collision with root package name */
        private final nn.v f25102u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f25103v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f25104w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f25105x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f25106y;

        /* renamed from: z  reason: collision with root package name */
        private final g f25107z;

        /* renamed from: fp.x1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0330a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                rn.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = rn.b.valueOf(parcel.readString());
                }
                rn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                rn.a aVar = (rn.a) parcel.readParcelable(a.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(a1.b.valueOf(parcel.readString()));
                }
                long readLong = parcel.readLong();
                if (parcel.readInt() != 0) {
                    z10 = false;
                    j10 = readLong;
                    z12 = true;
                    z11 = true;
                } else {
                    z10 = false;
                    z11 = true;
                    j10 = readLong;
                    z12 = false;
                }
                long readLong2 = parcel.readLong();
                nn.v vVar = (nn.v) parcel.readParcelable(a.class.getClassLoader());
                x1 x1Var = (x1) parcel.readParcelable(a.class.getClassLoader());
                s0 createFromParcel = s0.CREATOR.createFromParcel(parcel);
                v.b valueOf2 = v.b.valueOf(parcel.readString());
                if (parcel.readInt() != 0) {
                    z13 = z11;
                } else {
                    z13 = z10;
                }
                return new a(bVar, readFloat, aVar, arrayList, arrayList2, j10, z12, readLong2, vVar, x1Var, createFromParcel, valueOf2, z13, g.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(rn.b bVar, float f10, rn.a aVar, List list, List list2, long j10, boolean z10, long j11, nn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f25152d : gVar);
        }

        public static /* synthetic */ a s(a aVar, rn.b bVar, float f10, rn.a aVar2, List list, List list2, long j10, boolean z10, long j11, nn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, Object obj) {
            rn.b bVar3;
            float f11;
            rn.a aVar3;
            List list3;
            List list4;
            long j12;
            boolean z12;
            long j13;
            nn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            g gVar2;
            if ((i10 & 1) != 0) {
                bVar3 = aVar.f25094e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f25095i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f25096o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f25097p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f25098q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f25099r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f25100s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f25101t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f25102u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f25103v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f25104w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f25105x;
            } else {
                bVar4 = bVar2;
            }
            rn.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f25106y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f25107z;
            } else {
                gVar2 = gVar;
            }
            return aVar.r(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        @Override // fp.z
        public boolean a() {
            return this.f25100s;
        }

        @Override // fp.a0
        public nn.v b() {
            return this.f25102u;
        }

        @Override // fp.z
        public List c() {
            return this.f25098q;
        }

        @Override // fp.z
        public s0 d() {
            return this.f25104w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // fp.z
        public a1.b e() {
            return a0.a.a(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f25094e == aVar.f25094e && Float.compare(this.f25095i, aVar.f25095i) == 0 && Intrinsics.areEqual(this.f25096o, aVar.f25096o) && Intrinsics.areEqual(this.f25097p, aVar.f25097p) && Intrinsics.areEqual(this.f25098q, aVar.f25098q) && this.f25099r == aVar.f25099r && this.f25100s == aVar.f25100s && this.f25101t == aVar.f25101t && Intrinsics.areEqual(this.f25102u, aVar.f25102u) && Intrinsics.areEqual(this.f25103v, aVar.f25103v) && Intrinsics.areEqual(this.f25104w, aVar.f25104w) && this.f25105x == aVar.f25105x && this.f25106y == aVar.f25106y && this.f25107z == aVar.f25107z) {
                return true;
            }
            return false;
        }

        @Override // fp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // fp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            rn.b bVar = this.f25094e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f25095i)) * 31;
            rn.a aVar = this.f25096o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f25097p.hashCode()) * 31) + this.f25098q.hashCode()) * 31) + Long.hashCode(this.f25099r)) * 31) + Boolean.hashCode(this.f25100s)) * 31) + Long.hashCode(this.f25101t)) * 31) + this.f25102u.hashCode()) * 31;
            x1 x1Var = this.f25103v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f25104w.hashCode()) * 31) + this.f25105x.hashCode()) * 31) + Boolean.hashCode(this.f25106y)) * 31) + this.f25107z.hashCode();
        }

        @Override // fp.a0
        public long i() {
            return this.f25099r;
        }

        @Override // fp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // fp.z
        public boolean k() {
            return this.f25106y;
        }

        @Override // fp.a0
        public long m() {
            return this.f25101t;
        }

        @Override // fp.x1
        public x1 n() {
            return this.f25103v;
        }

        @Override // fp.x1
        public v.b o() {
            return this.f25105x;
        }

        @Override // fp.x1
        public List p() {
            return this.f25097p;
        }

        public final a r(rn.b bVar, float f10, rn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, nn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            return new a(bVar, f10, aVar, selfies, posesNeeded, j10, z10, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z11, flashState);
        }

        public final rn.a t() {
            return this.f25096o;
        }

        public String toString() {
            rn.b bVar = this.f25094e;
            float f10 = this.f25095i;
            rn.a aVar = this.f25096o;
            List list = this.f25097p;
            List list2 = this.f25098q;
            long j10 = this.f25099r;
            boolean z10 = this.f25100s;
            long j11 = this.f25101t;
            nn.v vVar = this.f25102u;
            x1 x1Var = this.f25103v;
            s0 s0Var = this.f25104w;
            v.b bVar2 = this.f25105x;
            boolean z11 = this.f25106y;
            g gVar = this.f25107z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final g u() {
            return this.f25107z;
        }

        public final float v() {
            return this.f25095i;
        }

        public final rn.b w() {
            return this.f25094e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            rn.b bVar = this.f25094e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f25095i);
            dest.writeParcelable(this.f25096o, i10);
            List<Parcelable> list = this.f25097p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f25098q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f25099r);
            dest.writeInt(this.f25100s ? 1 : 0);
            dest.writeLong(this.f25101t);
            dest.writeParcelable(this.f25102u, i10);
            dest.writeParcelable(this.f25103v, i10);
            this.f25104w.writeToParcel(dest, i10);
            dest.writeString(this.f25105x.name());
            dest.writeInt(this.f25106y ? 1 : 0);
            dest.writeString(this.f25107z.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(rn.b bVar, float f10, rn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, nn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            this.f25094e = bVar;
            this.f25095i = f10;
            this.f25096o = aVar;
            this.f25097p = selfies;
            this.f25098q = posesNeeded;
            this.f25099r = j10;
            this.f25100s = z10;
            this.f25101t = j11;
            this.f25102u = cameraProperties;
            this.f25103v = x1Var;
            this.f25104w = poseConfigs;
            this.f25105x = cameraFacingMode;
            this.f25106y = z11;
            this.f25107z = flashState;
        }
    }
}
