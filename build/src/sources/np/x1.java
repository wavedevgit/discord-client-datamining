package np;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import np.a0;
import np.a1;
import np.z;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import vn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f39570d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f39585e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f39586i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f39587o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f39588p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f39589q;

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
            this.f39585e = nextState;
            this.f39586i = completedPose;
            this.f39587o = x1Var;
            this.f39588p = cameraFacingMode;
            this.f39589q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39587o;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39588p;
        }

        @Override // np.x1
        public List r() {
            return this.f39585e.r();
        }

        public final a1.b u() {
            return this.f39586i;
        }

        public final x1 v() {
            return this.f39585e;
        }

        public final boolean w() {
            return this.f39589q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f39585e, i10);
            dest.writeString(this.f39586i.name());
            dest.writeParcelable(this.f39587o, i10);
            dest.writeString(this.f39588p.name());
            dest.writeInt(this.f39589q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f39590e;

        /* renamed from: i  reason: collision with root package name */
        private final zn.b f39591i;

        /* renamed from: o  reason: collision with root package name */
        private final long f39592o;

        /* renamed from: p  reason: collision with root package name */
        private final vn.v f39593p;

        /* renamed from: q  reason: collision with root package name */
        private final long f39594q;

        /* renamed from: r  reason: collision with root package name */
        private final float f39595r;

        /* renamed from: s  reason: collision with root package name */
        private final zn.a f39596s;

        /* renamed from: t  reason: collision with root package name */
        private final List f39597t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f39598u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f39599v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f39600w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f39601x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f39602y;

        /* renamed from: z  reason: collision with root package name */
        private final List f39603z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                zn.b valueOf;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = zn.b.valueOf(parcel.readString());
                }
                zn.b bVar = valueOf;
                long readLong = parcel.readLong();
                vn.v vVar = (vn.v) parcel.readParcelable(c.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                zn.a aVar = (zn.a) parcel.readParcelable(c.class.getClassLoader());
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

        public /* synthetic */ c(int i10, zn.b bVar, long j10, vn.v vVar, long j11, float f10, zn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, j10, vVar, j11, f10, aVar, list, x1Var, s0Var, z10, bVar2, z11);
        }

        public static /* synthetic */ c v(c cVar, int i10, zn.b bVar, long j10, vn.v vVar, long j11, float f10, zn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, Object obj) {
            int i12;
            zn.b bVar3;
            long j12;
            vn.v vVar2;
            long j13;
            float f11;
            zn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i12 = cVar.f39590e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f39591i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f39592o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f39593p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f39594q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f39595r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f39596s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f39597t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f39598u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f39599v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f39600w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f39601x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f39602y;
            } else {
                z13 = z11;
            }
            return cVar.u(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        public final float A() {
            return this.f39595r;
        }

        public final zn.b B() {
            return this.f39591i;
        }

        @Override // np.z
        public boolean a() {
            return this.f39600w;
        }

        public final vn.v b() {
            return this.f39593p;
        }

        @Override // np.z
        public List c() {
            return this.f39597t;
        }

        @Override // np.z
        public s0 d() {
            return this.f39599v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (this.f39590e == cVar.f39590e && this.f39591i == cVar.f39591i && this.f39592o == cVar.f39592o && Intrinsics.areEqual(this.f39593p, cVar.f39593p) && this.f39594q == cVar.f39594q && Float.compare(this.f39595r, cVar.f39595r) == 0 && Intrinsics.areEqual(this.f39596s, cVar.f39596s) && Intrinsics.areEqual(this.f39597t, cVar.f39597t) && Intrinsics.areEqual(this.f39598u, cVar.f39598u) && Intrinsics.areEqual(this.f39599v, cVar.f39599v) && this.f39600w == cVar.f39600w && this.f39601x == cVar.f39601x && this.f39602y == cVar.f39602y) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // np.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Integer.hashCode(this.f39590e) * 31;
            zn.b bVar = this.f39591i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f39592o)) * 31) + this.f39593p.hashCode()) * 31) + Long.hashCode(this.f39594q)) * 31) + Float.hashCode(this.f39595r)) * 31;
            zn.a aVar = this.f39596s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f39597t.hashCode()) * 31;
            x1 x1Var = this.f39598u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f39599v.hashCode()) * 31) + Boolean.hashCode(this.f39600w)) * 31) + this.f39601x.hashCode()) * 31) + Boolean.hashCode(this.f39602y);
        }

        public final long i() {
            return this.f39592o;
        }

        @Override // np.z
        public boolean l() {
            return this.f39602y;
        }

        public final long o() {
            return this.f39594q;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39598u;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39601x;
        }

        @Override // np.x1
        public List r() {
            return this.f39603z;
        }

        public String toString() {
            int i10 = this.f39590e;
            zn.b bVar = this.f39591i;
            long j10 = this.f39592o;
            vn.v vVar = this.f39593p;
            long j11 = this.f39594q;
            float f10 = this.f39595r;
            zn.a aVar = this.f39596s;
            List list = this.f39597t;
            x1 x1Var = this.f39598u;
            s0 s0Var = this.f39599v;
            boolean z10 = this.f39600w;
            v.b bVar2 = this.f39601x;
            boolean z11 = this.f39602y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final c u(int i10, zn.b bVar, long j10, vn.v cameraProperties, long j11, float f10, zn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final zn.a w() {
            return this.f39596s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f39590e);
            zn.b bVar = this.f39591i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f39592o);
            dest.writeParcelable(this.f39593p, i10);
            dest.writeLong(this.f39594q);
            dest.writeFloat(this.f39595r);
            dest.writeParcelable(this.f39596s, i10);
            List<a1.b> list = this.f39597t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f39598u, i10);
            this.f39599v.writeToParcel(dest, i10);
            dest.writeInt(this.f39600w ? 1 : 0);
            dest.writeString(this.f39601x.name());
            dest.writeInt(this.f39602y ? 1 : 0);
        }

        public final int x() {
            return this.f39590e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, zn.b bVar, long j10, vn.v cameraProperties, long j11, float f10, zn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39590e = i10;
            this.f39591i = bVar;
            this.f39592o = j10;
            this.f39593p = cameraProperties;
            this.f39594q = j11;
            this.f39595r = f10;
            this.f39596s = aVar;
            this.f39597t = posesNeeded;
            this.f39598u = x1Var;
            this.f39599v = poseConfigs;
            this.f39600w = z10;
            this.f39601x = cameraFacingMode;
            this.f39602y = z11;
            this.f39603z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f39604e;

        /* renamed from: i  reason: collision with root package name */
        private final zn.b f39605i;

        /* renamed from: o  reason: collision with root package name */
        private final vn.v f39606o;

        /* renamed from: p  reason: collision with root package name */
        private final List f39607p;

        /* renamed from: q  reason: collision with root package name */
        private final long f39608q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f39609r;

        /* renamed from: s  reason: collision with root package name */
        private final long f39610s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f39611t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f39612u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f39613v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f39614w;

        /* renamed from: x  reason: collision with root package name */
        private final List f39615x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                zn.b valueOf;
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
                    valueOf = zn.b.valueOf(parcel.readString());
                }
                zn.b bVar = valueOf;
                vn.v vVar = (vn.v) parcel.readParcelable(d.class.getClassLoader());
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

        public /* synthetic */ d(int i10, zn.b bVar, vn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, vVar, list, j10, (i11 & 32) != 0 ? true : z10, j11, x1Var, s0Var, bVar2, z11);
        }

        public static /* synthetic */ d v(d dVar, int i10, zn.b bVar, vn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, Object obj) {
            zn.b bVar3;
            vn.v vVar2;
            List list2;
            long j12;
            boolean z12;
            long j13;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i10 = dVar.f39604e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f39605i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f39606o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f39607p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f39608q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f39609r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f39610s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f39611t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f39612u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f39613v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f39614w;
            } else {
                z13 = z11;
            }
            return dVar.u(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // np.z
        public boolean a() {
            return this.f39609r;
        }

        @Override // np.a0
        public vn.v b() {
            return this.f39606o;
        }

        @Override // np.z
        public List c() {
            return this.f39607p;
        }

        @Override // np.z
        public s0 d() {
            return this.f39612u;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (this.f39604e == dVar.f39604e && this.f39605i == dVar.f39605i && Intrinsics.areEqual(this.f39606o, dVar.f39606o) && Intrinsics.areEqual(this.f39607p, dVar.f39607p) && this.f39608q == dVar.f39608q && this.f39609r == dVar.f39609r && this.f39610s == dVar.f39610s && Intrinsics.areEqual(this.f39611t, dVar.f39611t) && Intrinsics.areEqual(this.f39612u, dVar.f39612u) && this.f39613v == dVar.f39613v && this.f39614w == dVar.f39614w) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // np.z
        public a1.b h() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = Integer.hashCode(this.f39604e) * 31;
            zn.b bVar = this.f39605i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f39606o.hashCode()) * 31) + this.f39607p.hashCode()) * 31) + Long.hashCode(this.f39608q)) * 31) + Boolean.hashCode(this.f39609r)) * 31) + Long.hashCode(this.f39610s)) * 31;
            x1 x1Var = this.f39611t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f39612u.hashCode()) * 31) + this.f39613v.hashCode()) * 31) + Boolean.hashCode(this.f39614w);
        }

        @Override // np.a0
        public long i() {
            return this.f39608q;
        }

        @Override // np.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // np.z
        public boolean l() {
            return this.f39614w;
        }

        @Override // np.a0
        public long o() {
            return this.f39610s;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39611t;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39613v;
        }

        @Override // np.x1
        public List r() {
            return this.f39615x;
        }

        public String toString() {
            int i10 = this.f39604e;
            zn.b bVar = this.f39605i;
            vn.v vVar = this.f39606o;
            List list = this.f39607p;
            long j10 = this.f39608q;
            boolean z10 = this.f39609r;
            long j11 = this.f39610s;
            x1 x1Var = this.f39611t;
            s0 s0Var = this.f39612u;
            v.b bVar2 = this.f39613v;
            boolean z11 = this.f39614w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final d u(int i10, zn.b bVar, vn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public final int w() {
            return this.f39604e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f39604e);
            zn.b bVar = this.f39605i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f39606o, i10);
            List<a1.b> list = this.f39607p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f39608q);
            dest.writeInt(this.f39609r ? 1 : 0);
            dest.writeLong(this.f39610s);
            dest.writeParcelable(this.f39611t, i10);
            this.f39612u.writeToParcel(dest, i10);
            dest.writeString(this.f39613v.name());
            dest.writeInt(this.f39614w ? 1 : 0);
        }

        public final zn.b x() {
            return this.f39605i;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, zn.b bVar, vn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39604e = i10;
            this.f39605i = bVar;
            this.f39606o = cameraProperties;
            this.f39607p = posesNeeded;
            this.f39608q = j10;
            this.f39609r = z10;
            this.f39610s = j11;
            this.f39611t = x1Var;
            this.f39612u = poseConfigs;
            this.f39613v = cameraFacingMode;
            this.f39614w = z11;
            this.f39615x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f39616e;

        /* renamed from: i  reason: collision with root package name */
        private final long f39617i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f39618o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f39619p;

        /* renamed from: q  reason: collision with root package name */
        private final vn.v f39620q;

        /* renamed from: r  reason: collision with root package name */
        private final long f39621r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f39622s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f39623t;

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
                return new e(arrayList, j11, z11, z12, (vn.v) parcel.readParcelable(e.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(e.class.getClassLoader()), v.b.valueOf(parcel.readString()));
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
        public /* synthetic */ e(java.util.List r2, long r3, boolean r5, boolean r6, vn.v r7, long r8, np.x1 r10, vn.v.b r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
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
            throw new UnsupportedOperationException("Method not decompiled: np.x1.e.<init>(java.util.List, long, boolean, boolean, vn.v, long, np.x1, vn.v$b, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }

        public static /* synthetic */ e v(e eVar, List list, long j10, boolean z10, boolean z11, vn.v vVar, long j11, x1 x1Var, v.b bVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = eVar.f39616e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f39617i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f39618o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f39619p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f39620q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f39621r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f39622s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f39623t;
            }
            long j12 = j11;
            vn.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.u(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final boolean A() {
            return this.f39619p;
        }

        public final vn.v b() {
            return this.f39620q;
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
            if (Intrinsics.areEqual(this.f39616e, eVar.f39616e) && this.f39617i == eVar.f39617i && this.f39618o == eVar.f39618o && this.f39619p == eVar.f39619p && Intrinsics.areEqual(this.f39620q, eVar.f39620q) && this.f39621r == eVar.f39621r && Intrinsics.areEqual(this.f39622s, eVar.f39622s) && this.f39623t == eVar.f39623t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f39616e.hashCode() * 31) + Long.hashCode(this.f39617i)) * 31) + Boolean.hashCode(this.f39618o)) * 31) + Boolean.hashCode(this.f39619p)) * 31) + this.f39620q.hashCode()) * 31) + Long.hashCode(this.f39621r)) * 31;
            x1 x1Var = this.f39622s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f39623t.hashCode();
        }

        public final long o() {
            return this.f39621r;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39622s;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39623t;
        }

        @Override // np.x1
        public List r() {
            return this.f39616e;
        }

        public String toString() {
            List list = this.f39616e;
            long j10 = this.f39617i;
            boolean z10 = this.f39618o;
            boolean z11 = this.f39619p;
            vn.v vVar = this.f39620q;
            long j11 = this.f39621r;
            x1 x1Var = this.f39622s;
            v.b bVar = this.f39623t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final e u(List selfies, long j10, boolean z10, boolean z11, vn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public final long w() {
            return this.f39617i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f39616e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f39617i);
            dest.writeInt(this.f39618o ? 1 : 0);
            dest.writeInt(this.f39619p ? 1 : 0);
            dest.writeParcelable(this.f39620q, i10);
            dest.writeLong(this.f39621r);
            dest.writeParcelable(this.f39622s, i10);
            dest.writeString(this.f39623t.name());
        }

        public final boolean x() {
            return this.f39618o;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, vn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39616e = selfies;
            this.f39617i = j10;
            this.f39618o = z10;
            this.f39619p = z11;
            this.f39620q = cameraProperties;
            this.f39621r = j11;
            this.f39622s = x1Var;
            this.f39623t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f39624e;

        /* renamed from: i  reason: collision with root package name */
        private final vn.v f39625i;

        /* renamed from: o  reason: collision with root package name */
        private final long f39626o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f39627p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f39628q;

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
                return new f(arrayList, (vn.v) parcel.readParcelable(f.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(f.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(List selfies, vn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39624e = selfies;
            this.f39625i = cameraProperties;
            this.f39626o = j10;
            this.f39627p = x1Var;
            this.f39628q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39627p;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39628q;
        }

        @Override // np.x1
        public List r() {
            return this.f39624e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f39624e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f39625i, i10);
            dest.writeLong(this.f39626o);
            dest.writeParcelable(this.f39627p, i10);
            dest.writeString(this.f39628q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f39629d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f39630e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f39631i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f39632o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f39633p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f39634q;

        static {
            g[] a10 = a();
            f39633p = a10;
            f39634q = yr.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f39629d, f39630e, f39631i, f39632o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f39633p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f39635e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f39636i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f39637o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f39638p;

        /* renamed from: q  reason: collision with root package name */
        private final List f39639q;

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
            if (this.f39635e == hVar.f39635e && this.f39636i == hVar.f39636i && Intrinsics.areEqual(this.f39637o, hVar.f39637o) && this.f39638p == hVar.f39638p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f39635e) * 31) + Boolean.hashCode(this.f39636i)) * 31;
            x1 x1Var = this.f39637o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f39638p.hashCode();
        }

        @Override // np.x1
        public x1 p() {
            return this.f39637o;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39638p;
        }

        @Override // np.x1
        public List r() {
            return this.f39639q;
        }

        public String toString() {
            boolean z10 = this.f39635e;
            boolean z11 = this.f39636i;
            x1 x1Var = this.f39637o;
            v.b bVar = this.f39638p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f39635e ? 1 : 0);
            dest.writeInt(this.f39636i ? 1 : 0);
            dest.writeParcelable(this.f39637o, i10);
            dest.writeString(this.f39638p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39635e = z10;
            this.f39636i = z11;
            this.f39637o = x1Var;
            this.f39638p = cameraFacingMode;
            this.f39639q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f39640e;

        /* renamed from: i  reason: collision with root package name */
        private final List f39641i;

        /* renamed from: o  reason: collision with root package name */
        private final String f39642o;

        /* renamed from: p  reason: collision with root package name */
        private final vn.v f39643p;

        /* renamed from: q  reason: collision with root package name */
        private final long f39644q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f39645r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f39646s;

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
                return new i(arrayList, arrayList2, parcel.readString(), (vn.v) parcel.readParcelable(i.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(i.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(List selfies, List selfiesToReview, String str, vn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(selfiesToReview, "selfiesToReview");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39640e = selfies;
            this.f39641i = selfiesToReview;
            this.f39642o = str;
            this.f39643p = cameraProperties;
            this.f39644q = j10;
            this.f39645r = x1Var;
            this.f39646s = cameraFacingMode;
        }

        public final vn.v b() {
            return this.f39643p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f39644q;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39645r;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39646s;
        }

        @Override // np.x1
        public List r() {
            return this.f39640e;
        }

        public final List u() {
            return this.f39641i;
        }

        public final String v() {
            return this.f39642o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f39640e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f39641i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f39642o);
            dest.writeParcelable(this.f39643p, i10);
            dest.writeLong(this.f39644q);
            dest.writeParcelable(this.f39645r, i10);
            dest.writeString(this.f39646s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f39650e;

        /* renamed from: i  reason: collision with root package name */
        private final List f39651i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f39652o;

        /* renamed from: p  reason: collision with root package name */
        private final vn.v f39653p;

        /* renamed from: q  reason: collision with root package name */
        private final long f39654q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f39655r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f39656s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f39657t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f39658u;

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
                vn.v vVar = (vn.v) parcel.readParcelable(cls.getClassLoader());
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
        public k(List selfies, List posesNeeded, boolean z10, vn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39650e = selfies;
            this.f39651i = posesNeeded;
            this.f39652o = z10;
            this.f39653p = cameraProperties;
            this.f39654q = j10;
            this.f39655r = x1Var;
            this.f39656s = poseConfigs;
            this.f39657t = cameraFacingMode;
            this.f39658u = z11;
        }

        public static /* synthetic */ k v(k kVar, List list, List list2, boolean z10, vn.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f39650e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f39651i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f39652o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f39653p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f39654q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f39655r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f39656s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f39657t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f39658u;
            }
            long j11 = j10;
            boolean z12 = z10;
            vn.v vVar2 = vVar;
            return kVar.u(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // np.z
        public boolean a() {
            return this.f39652o;
        }

        public final vn.v b() {
            return this.f39653p;
        }

        @Override // np.z
        public List c() {
            return this.f39651i;
        }

        @Override // np.z
        public s0 d() {
            return this.f39656s;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (Intrinsics.areEqual(this.f39650e, kVar.f39650e) && Intrinsics.areEqual(this.f39651i, kVar.f39651i) && this.f39652o == kVar.f39652o && Intrinsics.areEqual(this.f39653p, kVar.f39653p) && this.f39654q == kVar.f39654q && Intrinsics.areEqual(this.f39655r, kVar.f39655r) && Intrinsics.areEqual(this.f39656s, kVar.f39656s) && this.f39657t == kVar.f39657t && this.f39658u == kVar.f39658u) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((this.f39650e.hashCode() * 31) + this.f39651i.hashCode()) * 31) + Boolean.hashCode(this.f39652o)) * 31) + this.f39653p.hashCode()) * 31) + Long.hashCode(this.f39654q)) * 31;
            x1 x1Var = this.f39655r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f39656s.hashCode()) * 31) + this.f39657t.hashCode()) * 31) + Boolean.hashCode(this.f39658u);
        }

        @Override // np.z
        public boolean l() {
            return this.f39658u;
        }

        public final long o() {
            return this.f39654q;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39655r;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39657t;
        }

        @Override // np.x1
        public List r() {
            return this.f39650e;
        }

        public String toString() {
            List list = this.f39650e;
            List list2 = this.f39651i;
            boolean z10 = this.f39652o;
            vn.v vVar = this.f39653p;
            long j10 = this.f39654q;
            x1 x1Var = this.f39655r;
            s0 s0Var = this.f39656s;
            v.b bVar = this.f39657t;
            boolean z11 = this.f39658u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final k u(List selfies, List posesNeeded, boolean z10, vn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new k(selfies, posesNeeded, z10, cameraProperties, j10, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f39650e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f39651i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f39652o ? 1 : 0);
            dest.writeParcelable(this.f39653p, i10);
            dest.writeLong(this.f39654q);
            dest.writeParcelable(this.f39655r, i10);
            this.f39656s.writeToParcel(dest, i10);
            dest.writeString(this.f39657t.name());
            dest.writeInt(this.f39658u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f39673e;

        /* renamed from: i  reason: collision with root package name */
        private final vn.v f39674i;

        /* renamed from: o  reason: collision with root package name */
        private final long f39675o;

        /* renamed from: p  reason: collision with root package name */
        private final float f39676p;

        /* renamed from: q  reason: collision with root package name */
        private final zn.a f39677q;

        /* renamed from: r  reason: collision with root package name */
        private final List f39678r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f39679s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f39680t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f39681u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f39682v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f39683w;

        /* renamed from: x  reason: collision with root package name */
        private final List f39684x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final m createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                long readLong = parcel.readLong();
                vn.v vVar = (vn.v) parcel.readParcelable(m.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                zn.a aVar = (zn.a) parcel.readParcelable(m.class.getClassLoader());
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
        public m(long j10, vn.v cameraProperties, long j11, float f10, zn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39673e = j10;
            this.f39674i = cameraProperties;
            this.f39675o = j11;
            this.f39676p = f10;
            this.f39677q = aVar;
            this.f39678r = posesNeeded;
            this.f39679s = x1Var;
            this.f39680t = poseConfigs;
            this.f39681u = z10;
            this.f39682v = cameraFacingMode;
            this.f39683w = z11;
            this.f39684x = CollectionsKt.l();
        }

        public static /* synthetic */ m v(m mVar, long j10, vn.v vVar, long j11, float f10, zn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            long j12;
            vn.v vVar2;
            long j13;
            float f11;
            zn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar2;
            boolean z13;
            if ((i10 & 1) != 0) {
                j12 = mVar.f39673e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f39674i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f39675o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f39676p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f39677q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f39678r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f39679s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f39680t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f39681u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f39682v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f39683w;
            } else {
                z13 = z11;
            }
            return mVar.u(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // np.z
        public boolean a() {
            return this.f39681u;
        }

        public final vn.v b() {
            return this.f39674i;
        }

        @Override // np.z
        public List c() {
            return this.f39678r;
        }

        @Override // np.z
        public s0 d() {
            return this.f39680t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (this.f39673e == mVar.f39673e && Intrinsics.areEqual(this.f39674i, mVar.f39674i) && this.f39675o == mVar.f39675o && Float.compare(this.f39676p, mVar.f39676p) == 0 && Intrinsics.areEqual(this.f39677q, mVar.f39677q) && Intrinsics.areEqual(this.f39678r, mVar.f39678r) && Intrinsics.areEqual(this.f39679s, mVar.f39679s) && Intrinsics.areEqual(this.f39680t, mVar.f39680t) && this.f39681u == mVar.f39681u && this.f39682v == mVar.f39682v && this.f39683w == mVar.f39683w) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // np.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Long.hashCode(this.f39673e) * 31) + this.f39674i.hashCode()) * 31) + Long.hashCode(this.f39675o)) * 31) + Float.hashCode(this.f39676p)) * 31;
            zn.a aVar = this.f39677q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f39678r.hashCode()) * 31;
            x1 x1Var = this.f39679s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f39680t.hashCode()) * 31) + Boolean.hashCode(this.f39681u)) * 31) + this.f39682v.hashCode()) * 31) + Boolean.hashCode(this.f39683w);
        }

        public final long i() {
            return this.f39673e;
        }

        @Override // np.z
        public boolean l() {
            return this.f39683w;
        }

        public final long o() {
            return this.f39675o;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39679s;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39682v;
        }

        @Override // np.x1
        public List r() {
            return this.f39684x;
        }

        public String toString() {
            long j10 = this.f39673e;
            vn.v vVar = this.f39674i;
            long j11 = this.f39675o;
            float f10 = this.f39676p;
            zn.a aVar = this.f39677q;
            List list = this.f39678r;
            x1 x1Var = this.f39679s;
            s0 s0Var = this.f39680t;
            boolean z10 = this.f39681u;
            v.b bVar = this.f39682v;
            boolean z11 = this.f39683w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final m u(long j10, vn.v cameraProperties, long j11, float f10, zn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final zn.a w() {
            return this.f39677q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f39673e);
            dest.writeParcelable(this.f39674i, i10);
            dest.writeLong(this.f39675o);
            dest.writeFloat(this.f39676p);
            dest.writeParcelable(this.f39677q, i10);
            List<a1.b> list = this.f39678r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f39679s, i10);
            this.f39680t.writeToParcel(dest, i10);
            dest.writeInt(this.f39681u ? 1 : 0);
            dest.writeString(this.f39682v.name());
            dest.writeInt(this.f39683w ? 1 : 0);
        }

        public final float x() {
            return this.f39676p;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f39685e;

        /* renamed from: i  reason: collision with root package name */
        private final String f39686i;

        /* renamed from: o  reason: collision with root package name */
        private final vn.v f39687o;

        /* renamed from: p  reason: collision with root package name */
        private final long f39688p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f39689q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f39690r;

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
                return new n(arrayList, parcel.readString(), (vn.v) parcel.readParcelable(n.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(n.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final n[] newArray(int i10) {
                return new n[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(List selfies, String str, vn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39685e = selfies;
            this.f39686i = str;
            this.f39687o = cameraProperties;
            this.f39688p = j10;
            this.f39689q = x1Var;
            this.f39690r = cameraFacingMode;
        }

        public final vn.v b() {
            return this.f39687o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f39688p;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39689q;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39690r;
        }

        @Override // np.x1
        public List r() {
            return this.f39685e;
        }

        public final String u() {
            return this.f39686i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f39685e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f39686i);
            dest.writeParcelable(this.f39687o, i10);
            dest.writeLong(this.f39688p);
            dest.writeParcelable(this.f39689q, i10);
            dest.writeString(this.f39690r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f39691e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f39692i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f39693o;

        /* renamed from: p  reason: collision with root package name */
        private final List f39694p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f39695q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f39696r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f39697s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f39698t;

        /* renamed from: u  reason: collision with root package name */
        private final List f39699u;

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

        public static /* synthetic */ o v(o oVar, boolean z10, boolean z11, x1 x1Var, List list, s0 s0Var, boolean z12, v.b bVar, boolean z13, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                z10 = oVar.f39691e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f39692i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f39693o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f39694p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f39695q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f39696r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f39697s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f39698t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.u(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // np.z
        public boolean a() {
            return this.f39696r;
        }

        @Override // np.z
        public List c() {
            return this.f39694p;
        }

        @Override // np.z
        public s0 d() {
            return this.f39695q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (this.f39691e == oVar.f39691e && this.f39692i == oVar.f39692i && Intrinsics.areEqual(this.f39693o, oVar.f39693o) && Intrinsics.areEqual(this.f39694p, oVar.f39694p) && Intrinsics.areEqual(this.f39695q, oVar.f39695q) && this.f39696r == oVar.f39696r && this.f39697s == oVar.f39697s && this.f39698t == oVar.f39698t) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f39691e) * 31) + Boolean.hashCode(this.f39692i)) * 31;
            x1 x1Var = this.f39693o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f39694p.hashCode()) * 31) + this.f39695q.hashCode()) * 31) + Boolean.hashCode(this.f39696r)) * 31) + this.f39697s.hashCode()) * 31) + Boolean.hashCode(this.f39698t);
        }

        @Override // np.z
        public boolean l() {
            return this.f39698t;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39693o;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39697s;
        }

        @Override // np.x1
        public List r() {
            return this.f39699u;
        }

        public String toString() {
            boolean z10 = this.f39691e;
            boolean z11 = this.f39692i;
            x1 x1Var = this.f39693o;
            List list = this.f39694p;
            s0 s0Var = this.f39695q;
            boolean z12 = this.f39696r;
            v.b bVar = this.f39697s;
            boolean z13 = this.f39698t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final o u(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public final boolean w() {
            return this.f39692i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f39691e ? 1 : 0);
            dest.writeInt(this.f39692i ? 1 : 0);
            dest.writeParcelable(this.f39693o, i10);
            List<a1.b> list = this.f39694p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f39695q.writeToParcel(dest, i10);
            dest.writeInt(this.f39696r ? 1 : 0);
            dest.writeString(this.f39697s.name());
            dest.writeInt(this.f39698t ? 1 : 0);
        }

        public final boolean x() {
            return this.f39691e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39691e = z10;
            this.f39692i = z11;
            this.f39693o = x1Var;
            this.f39694p = posesNeeded;
            this.f39695q = poseConfigs;
            this.f39696r = z12;
            this.f39697s = cameraFacingMode;
            this.f39698t = z13;
            this.f39699u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f39700e;

        /* renamed from: i  reason: collision with root package name */
        private final vn.v f39701i;

        /* renamed from: o  reason: collision with root package name */
        private final long f39702o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f39703p;

        /* renamed from: q  reason: collision with root package name */
        private final List f39704q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f39705r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f39706s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f39707t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f39708u;

        /* renamed from: v  reason: collision with root package name */
        private final List f39709v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final p createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                vn.v vVar = (vn.v) parcel.readParcelable(p.class.getClassLoader());
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
        public p(String str, vn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39700e = str;
            this.f39701i = cameraProperties;
            this.f39702o = j10;
            this.f39703p = x1Var;
            this.f39704q = posesNeeded;
            this.f39705r = poseConfigs;
            this.f39706s = z10;
            this.f39707t = cameraFacingMode;
            this.f39708u = z11;
            this.f39709v = CollectionsKt.l();
        }

        public static /* synthetic */ p v(p pVar, String str, vn.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f39700e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f39701i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f39702o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f39703p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f39704q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f39705r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f39706s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f39707t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f39708u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.u(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // np.z
        public boolean a() {
            return this.f39706s;
        }

        @Override // np.z
        public List c() {
            return this.f39704q;
        }

        @Override // np.z
        public s0 d() {
            return this.f39705r;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (Intrinsics.areEqual(this.f39700e, pVar.f39700e) && Intrinsics.areEqual(this.f39701i, pVar.f39701i) && this.f39702o == pVar.f39702o && Intrinsics.areEqual(this.f39703p, pVar.f39703p) && Intrinsics.areEqual(this.f39704q, pVar.f39704q) && Intrinsics.areEqual(this.f39705r, pVar.f39705r) && this.f39706s == pVar.f39706s && this.f39707t == pVar.f39707t && this.f39708u == pVar.f39708u) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            String str = this.f39700e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f39701i.hashCode()) * 31) + Long.hashCode(this.f39702o)) * 31;
            x1 x1Var = this.f39703p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f39704q.hashCode()) * 31) + this.f39705r.hashCode()) * 31) + Boolean.hashCode(this.f39706s)) * 31) + this.f39707t.hashCode()) * 31) + Boolean.hashCode(this.f39708u);
        }

        @Override // np.z
        public boolean l() {
            return this.f39708u;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39703p;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39707t;
        }

        @Override // np.x1
        public List r() {
            return this.f39709v;
        }

        public String toString() {
            String str = this.f39700e;
            vn.v vVar = this.f39701i;
            long j10 = this.f39702o;
            x1 x1Var = this.f39703p;
            List list = this.f39704q;
            s0 s0Var = this.f39705r;
            boolean z10 = this.f39706s;
            v.b bVar = this.f39707t;
            boolean z11 = this.f39708u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final p u(String str, vn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f39700e);
            dest.writeParcelable(this.f39701i, i10);
            dest.writeLong(this.f39702o);
            dest.writeParcelable(this.f39703p, i10);
            List<a1.b> list = this.f39704q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f39705r.writeToParcel(dest, i10);
            dest.writeInt(this.f39706s ? 1 : 0);
            dest.writeString(this.f39707t.name());
            dest.writeInt(this.f39708u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f39710e;

        /* renamed from: i  reason: collision with root package name */
        private final String f39711i;

        /* renamed from: o  reason: collision with root package name */
        private final vn.v f39712o;

        /* renamed from: p  reason: collision with root package name */
        private final long f39713p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f39714q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f39715r;

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
                return new q(arrayList, parcel.readString(), (vn.v) parcel.readParcelable(q.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(q.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final q[] newArray(int i10) {
                return new q[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(List selfies, String webRtcObjectId, vn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(webRtcObjectId, "webRtcObjectId");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39710e = selfies;
            this.f39711i = webRtcObjectId;
            this.f39712o = cameraProperties;
            this.f39713p = j10;
            this.f39714q = x1Var;
            this.f39715r = cameraFacingMode;
        }

        public final vn.v b() {
            return this.f39712o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f39713p;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39714q;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39715r;
        }

        @Override // np.x1
        public List r() {
            return this.f39710e;
        }

        public final String u() {
            return this.f39711i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f39710e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f39711i);
            dest.writeParcelable(this.f39712o, i10);
            dest.writeLong(this.f39713p);
            dest.writeParcelable(this.f39714q, i10);
            dest.writeString(this.f39715r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 p();

    public abstract v.b q();

    public abstract List r();

    public final void t(boolean z10) {
        this.f39570d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f39647e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f39648i;

        /* renamed from: o  reason: collision with root package name */
        private final List f39649o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f52740d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39647e;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39648i;
        }

        @Override // np.x1
        public List r() {
            return this.f39649o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f39647e, i10);
            dest.writeString(this.f39648i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39647e = x1Var;
            this.f39648i = cameraFacingMode;
            this.f39649o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f39659e;

        /* renamed from: i  reason: collision with root package name */
        private final zn.b f39660i;

        /* renamed from: o  reason: collision with root package name */
        private final float f39661o;

        /* renamed from: p  reason: collision with root package name */
        private final zn.a f39662p;

        /* renamed from: q  reason: collision with root package name */
        private final List f39663q;

        /* renamed from: r  reason: collision with root package name */
        private final long f39664r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f39665s;

        /* renamed from: t  reason: collision with root package name */
        private final long f39666t;

        /* renamed from: u  reason: collision with root package name */
        private final vn.v f39667u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f39668v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f39669w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f39670x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f39671y;

        /* renamed from: z  reason: collision with root package name */
        private final List f39672z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                boolean z10;
                zn.b valueOf;
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
                    valueOf = zn.b.valueOf(parcel.readString());
                }
                zn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                zn.a aVar = (zn.a) parcel.readParcelable(l.class.getClassLoader());
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
                vn.v vVar = (vn.v) parcel.readParcelable(l.class.getClassLoader());
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

        public /* synthetic */ l(boolean z10, zn.b bVar, float f10, zn.a aVar, List list, long j10, boolean z11, long j11, vn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? zn.b.f56549d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
        }

        public static /* synthetic */ l v(l lVar, boolean z10, zn.b bVar, float f10, zn.a aVar, List list, long j10, boolean z11, long j11, vn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, Object obj) {
            boolean z13;
            zn.b bVar3;
            float f11;
            zn.a aVar2;
            List list2;
            long j12;
            boolean z14;
            long j13;
            vn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z15;
            if ((i10 & 1) != 0) {
                z13 = lVar.f39659e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f39660i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f39661o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f39662p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f39663q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f39664r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f39665s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f39666t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f39667u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f39668v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f39669w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f39670x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f39671y;
            } else {
                z15 = z12;
            }
            return lVar.u(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        public final zn.b A() {
            return this.f39660i;
        }

        @Override // np.z
        public boolean a() {
            return this.f39665s;
        }

        @Override // np.a0
        public vn.v b() {
            return this.f39667u;
        }

        @Override // np.z
        public List c() {
            return this.f39663q;
        }

        @Override // np.z
        public s0 d() {
            return this.f39669w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (this.f39659e == lVar.f39659e && this.f39660i == lVar.f39660i && Float.compare(this.f39661o, lVar.f39661o) == 0 && Intrinsics.areEqual(this.f39662p, lVar.f39662p) && Intrinsics.areEqual(this.f39663q, lVar.f39663q) && this.f39664r == lVar.f39664r && this.f39665s == lVar.f39665s && this.f39666t == lVar.f39666t && Intrinsics.areEqual(this.f39667u, lVar.f39667u) && Intrinsics.areEqual(this.f39668v, lVar.f39668v) && Intrinsics.areEqual(this.f39669w, lVar.f39669w) && this.f39670x == lVar.f39670x && this.f39671y == lVar.f39671y) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // np.z
        public a1.b h() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Boolean.hashCode(this.f39659e) * 31;
            zn.b bVar = this.f39660i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f39661o)) * 31;
            zn.a aVar = this.f39662p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f39663q.hashCode()) * 31) + Long.hashCode(this.f39664r)) * 31) + Boolean.hashCode(this.f39665s)) * 31) + Long.hashCode(this.f39666t)) * 31) + this.f39667u.hashCode()) * 31;
            x1 x1Var = this.f39668v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f39669w.hashCode()) * 31) + this.f39670x.hashCode()) * 31) + Boolean.hashCode(this.f39671y);
        }

        @Override // np.a0
        public long i() {
            return this.f39664r;
        }

        @Override // np.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // np.z
        public boolean l() {
            return this.f39671y;
        }

        @Override // np.a0
        public long o() {
            return this.f39666t;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39668v;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39670x;
        }

        @Override // np.x1
        public List r() {
            return this.f39672z;
        }

        public String toString() {
            boolean z10 = this.f39659e;
            zn.b bVar = this.f39660i;
            float f10 = this.f39661o;
            zn.a aVar = this.f39662p;
            List list = this.f39663q;
            long j10 = this.f39664r;
            boolean z11 = this.f39665s;
            long j11 = this.f39666t;
            vn.v vVar = this.f39667u;
            x1 x1Var = this.f39668v;
            s0 s0Var = this.f39669w;
            v.b bVar2 = this.f39670x;
            boolean z12 = this.f39671y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final l u(boolean z10, zn.b bVar, float f10, zn.a aVar, List posesNeeded, long j10, boolean z11, long j11, vn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public final zn.a w() {
            return this.f39662p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f39659e ? 1 : 0);
            zn.b bVar = this.f39660i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f39661o);
            dest.writeParcelable(this.f39662p, i10);
            List<a1.b> list = this.f39663q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f39664r);
            dest.writeInt(this.f39665s ? 1 : 0);
            dest.writeLong(this.f39666t);
            dest.writeParcelable(this.f39667u, i10);
            dest.writeParcelable(this.f39668v, i10);
            this.f39669w.writeToParcel(dest, i10);
            dest.writeString(this.f39670x.name());
            dest.writeInt(this.f39671y ? 1 : 0);
        }

        public final float x() {
            return this.f39661o;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, zn.b bVar, float f10, zn.a aVar, List posesNeeded, long j10, boolean z11, long j11, vn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f39659e = z10;
            this.f39660i = bVar;
            this.f39661o = f10;
            this.f39662p = aVar;
            this.f39663q = posesNeeded;
            this.f39664r = j10;
            this.f39665s = z11;
            this.f39666t = j11;
            this.f39667u = cameraProperties;
            this.f39668v = x1Var;
            this.f39669w = poseConfigs;
            this.f39670x = cameraFacingMode;
            this.f39671y = z12;
            this.f39672z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0568a();

        /* renamed from: e  reason: collision with root package name */
        private final zn.b f39571e;

        /* renamed from: i  reason: collision with root package name */
        private final float f39572i;

        /* renamed from: o  reason: collision with root package name */
        private final zn.a f39573o;

        /* renamed from: p  reason: collision with root package name */
        private final List f39574p;

        /* renamed from: q  reason: collision with root package name */
        private final List f39575q;

        /* renamed from: r  reason: collision with root package name */
        private final long f39576r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f39577s;

        /* renamed from: t  reason: collision with root package name */
        private final long f39578t;

        /* renamed from: u  reason: collision with root package name */
        private final vn.v f39579u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f39580v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f39581w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f39582x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f39583y;

        /* renamed from: z  reason: collision with root package name */
        private final g f39584z;

        /* renamed from: np.x1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0568a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                zn.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = zn.b.valueOf(parcel.readString());
                }
                zn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                zn.a aVar = (zn.a) parcel.readParcelable(a.class.getClassLoader());
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
                vn.v vVar = (vn.v) parcel.readParcelable(a.class.getClassLoader());
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

        public /* synthetic */ a(zn.b bVar, float f10, zn.a aVar, List list, List list2, long j10, boolean z10, long j11, vn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f39629d : gVar);
        }

        public static /* synthetic */ a v(a aVar, zn.b bVar, float f10, zn.a aVar2, List list, List list2, long j10, boolean z10, long j11, vn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, Object obj) {
            zn.b bVar3;
            float f11;
            zn.a aVar3;
            List list3;
            List list4;
            long j12;
            boolean z12;
            long j13;
            vn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            g gVar2;
            if ((i10 & 1) != 0) {
                bVar3 = aVar.f39571e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f39572i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f39573o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f39574p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f39575q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f39576r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f39577s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f39578t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f39579u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f39580v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f39581w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f39582x;
            } else {
                bVar4 = bVar2;
            }
            zn.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f39583y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f39584z;
            } else {
                gVar2 = gVar;
            }
            return aVar.u(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        public final float A() {
            return this.f39572i;
        }

        public final zn.b B() {
            return this.f39571e;
        }

        @Override // np.z
        public boolean a() {
            return this.f39577s;
        }

        @Override // np.a0
        public vn.v b() {
            return this.f39579u;
        }

        @Override // np.z
        public List c() {
            return this.f39575q;
        }

        @Override // np.z
        public s0 d() {
            return this.f39581w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // np.z
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
            if (this.f39571e == aVar.f39571e && Float.compare(this.f39572i, aVar.f39572i) == 0 && Intrinsics.areEqual(this.f39573o, aVar.f39573o) && Intrinsics.areEqual(this.f39574p, aVar.f39574p) && Intrinsics.areEqual(this.f39575q, aVar.f39575q) && this.f39576r == aVar.f39576r && this.f39577s == aVar.f39577s && this.f39578t == aVar.f39578t && Intrinsics.areEqual(this.f39579u, aVar.f39579u) && Intrinsics.areEqual(this.f39580v, aVar.f39580v) && Intrinsics.areEqual(this.f39581w, aVar.f39581w) && this.f39582x == aVar.f39582x && this.f39583y == aVar.f39583y && this.f39584z == aVar.f39584z) {
                return true;
            }
            return false;
        }

        @Override // np.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // np.z
        public a1.b h() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            zn.b bVar = this.f39571e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f39572i)) * 31;
            zn.a aVar = this.f39573o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f39574p.hashCode()) * 31) + this.f39575q.hashCode()) * 31) + Long.hashCode(this.f39576r)) * 31) + Boolean.hashCode(this.f39577s)) * 31) + Long.hashCode(this.f39578t)) * 31) + this.f39579u.hashCode()) * 31;
            x1 x1Var = this.f39580v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f39581w.hashCode()) * 31) + this.f39582x.hashCode()) * 31) + Boolean.hashCode(this.f39583y)) * 31) + this.f39584z.hashCode();
        }

        @Override // np.a0
        public long i() {
            return this.f39576r;
        }

        @Override // np.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // np.z
        public boolean l() {
            return this.f39583y;
        }

        @Override // np.a0
        public long o() {
            return this.f39578t;
        }

        @Override // np.x1
        public x1 p() {
            return this.f39580v;
        }

        @Override // np.x1
        public v.b q() {
            return this.f39582x;
        }

        @Override // np.x1
        public List r() {
            return this.f39574p;
        }

        public String toString() {
            zn.b bVar = this.f39571e;
            float f10 = this.f39572i;
            zn.a aVar = this.f39573o;
            List list = this.f39574p;
            List list2 = this.f39575q;
            long j10 = this.f39576r;
            boolean z10 = this.f39577s;
            long j11 = this.f39578t;
            vn.v vVar = this.f39579u;
            x1 x1Var = this.f39580v;
            s0 s0Var = this.f39581w;
            v.b bVar2 = this.f39582x;
            boolean z11 = this.f39583y;
            g gVar = this.f39584z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final a u(zn.b bVar, float f10, zn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, vn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            return new a(bVar, f10, aVar, selfies, posesNeeded, j10, z10, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z11, flashState);
        }

        public final zn.a w() {
            return this.f39573o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            zn.b bVar = this.f39571e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f39572i);
            dest.writeParcelable(this.f39573o, i10);
            List<Parcelable> list = this.f39574p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f39575q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f39576r);
            dest.writeInt(this.f39577s ? 1 : 0);
            dest.writeLong(this.f39578t);
            dest.writeParcelable(this.f39579u, i10);
            dest.writeParcelable(this.f39580v, i10);
            this.f39581w.writeToParcel(dest, i10);
            dest.writeString(this.f39582x.name());
            dest.writeInt(this.f39583y ? 1 : 0);
            dest.writeString(this.f39584z.name());
        }

        public final g x() {
            return this.f39584z;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(zn.b bVar, float f10, zn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, vn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            this.f39571e = bVar;
            this.f39572i = f10;
            this.f39573o = aVar;
            this.f39574p = selfies;
            this.f39575q = posesNeeded;
            this.f39576r = j10;
            this.f39577s = z10;
            this.f39578t = j11;
            this.f39579u = cameraProperties;
            this.f39580v = x1Var;
            this.f39581w = poseConfigs;
            this.f39582x = cameraFacingMode;
            this.f39583y = z11;
            this.f39584z = flashState;
        }
    }
}
