package mp;

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
import mp.a0;
import mp.a1;
import mp.z;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import un.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f37885d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f37900e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f37901i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f37902o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f37903p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f37904q;

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
            this.f37900e = nextState;
            this.f37901i = completedPose;
            this.f37902o = x1Var;
            this.f37903p = cameraFacingMode;
            this.f37904q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37902o;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37903p;
        }

        @Override // mp.x1
        public List r() {
            return this.f37900e.r();
        }

        public final a1.b u() {
            return this.f37901i;
        }

        public final x1 v() {
            return this.f37900e;
        }

        public final boolean w() {
            return this.f37904q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f37900e, i10);
            dest.writeString(this.f37901i.name());
            dest.writeParcelable(this.f37902o, i10);
            dest.writeString(this.f37903p.name());
            dest.writeInt(this.f37904q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f37905e;

        /* renamed from: i  reason: collision with root package name */
        private final yn.b f37906i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37907o;

        /* renamed from: p  reason: collision with root package name */
        private final un.v f37908p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37909q;

        /* renamed from: r  reason: collision with root package name */
        private final float f37910r;

        /* renamed from: s  reason: collision with root package name */
        private final yn.a f37911s;

        /* renamed from: t  reason: collision with root package name */
        private final List f37912t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f37913u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f37914v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f37915w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f37916x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f37917y;

        /* renamed from: z  reason: collision with root package name */
        private final List f37918z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                yn.b valueOf;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = yn.b.valueOf(parcel.readString());
                }
                yn.b bVar = valueOf;
                long readLong = parcel.readLong();
                un.v vVar = (un.v) parcel.readParcelable(c.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                yn.a aVar = (yn.a) parcel.readParcelable(c.class.getClassLoader());
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

        public /* synthetic */ c(int i10, yn.b bVar, long j10, un.v vVar, long j11, float f10, yn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, j10, vVar, j11, f10, aVar, list, x1Var, s0Var, z10, bVar2, z11);
        }

        public static /* synthetic */ c v(c cVar, int i10, yn.b bVar, long j10, un.v vVar, long j11, float f10, yn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, Object obj) {
            int i12;
            yn.b bVar3;
            long j12;
            un.v vVar2;
            long j13;
            float f11;
            yn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i12 = cVar.f37905e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f37906i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f37907o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f37908p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f37909q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f37910r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f37911s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f37912t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f37913u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f37914v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f37915w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f37916x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f37917y;
            } else {
                z13 = z11;
            }
            return cVar.u(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        public final float A() {
            return this.f37910r;
        }

        public final yn.b B() {
            return this.f37906i;
        }

        @Override // mp.z
        public boolean a() {
            return this.f37915w;
        }

        public final un.v b() {
            return this.f37908p;
        }

        @Override // mp.z
        public List c() {
            return this.f37912t;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37914v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (this.f37905e == cVar.f37905e && this.f37906i == cVar.f37906i && this.f37907o == cVar.f37907o && Intrinsics.areEqual(this.f37908p, cVar.f37908p) && this.f37909q == cVar.f37909q && Float.compare(this.f37910r, cVar.f37910r) == 0 && Intrinsics.areEqual(this.f37911s, cVar.f37911s) && Intrinsics.areEqual(this.f37912t, cVar.f37912t) && Intrinsics.areEqual(this.f37913u, cVar.f37913u) && Intrinsics.areEqual(this.f37914v, cVar.f37914v) && this.f37915w == cVar.f37915w && this.f37916x == cVar.f37916x && this.f37917y == cVar.f37917y) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // mp.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Integer.hashCode(this.f37905e) * 31;
            yn.b bVar = this.f37906i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f37907o)) * 31) + this.f37908p.hashCode()) * 31) + Long.hashCode(this.f37909q)) * 31) + Float.hashCode(this.f37910r)) * 31;
            yn.a aVar = this.f37911s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f37912t.hashCode()) * 31;
            x1 x1Var = this.f37913u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f37914v.hashCode()) * 31) + Boolean.hashCode(this.f37915w)) * 31) + this.f37916x.hashCode()) * 31) + Boolean.hashCode(this.f37917y);
        }

        public final long i() {
            return this.f37907o;
        }

        @Override // mp.z
        public boolean l() {
            return this.f37917y;
        }

        public final long o() {
            return this.f37909q;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37913u;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37916x;
        }

        @Override // mp.x1
        public List r() {
            return this.f37918z;
        }

        public String toString() {
            int i10 = this.f37905e;
            yn.b bVar = this.f37906i;
            long j10 = this.f37907o;
            un.v vVar = this.f37908p;
            long j11 = this.f37909q;
            float f10 = this.f37910r;
            yn.a aVar = this.f37911s;
            List list = this.f37912t;
            x1 x1Var = this.f37913u;
            s0 s0Var = this.f37914v;
            boolean z10 = this.f37915w;
            v.b bVar2 = this.f37916x;
            boolean z11 = this.f37917y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final c u(int i10, yn.b bVar, long j10, un.v cameraProperties, long j11, float f10, yn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final yn.a w() {
            return this.f37911s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37905e);
            yn.b bVar = this.f37906i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f37907o);
            dest.writeParcelable(this.f37908p, i10);
            dest.writeLong(this.f37909q);
            dest.writeFloat(this.f37910r);
            dest.writeParcelable(this.f37911s, i10);
            List<a1.b> list = this.f37912t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f37913u, i10);
            this.f37914v.writeToParcel(dest, i10);
            dest.writeInt(this.f37915w ? 1 : 0);
            dest.writeString(this.f37916x.name());
            dest.writeInt(this.f37917y ? 1 : 0);
        }

        public final int x() {
            return this.f37905e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, yn.b bVar, long j10, un.v cameraProperties, long j11, float f10, yn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37905e = i10;
            this.f37906i = bVar;
            this.f37907o = j10;
            this.f37908p = cameraProperties;
            this.f37909q = j11;
            this.f37910r = f10;
            this.f37911s = aVar;
            this.f37912t = posesNeeded;
            this.f37913u = x1Var;
            this.f37914v = poseConfigs;
            this.f37915w = z10;
            this.f37916x = cameraFacingMode;
            this.f37917y = z11;
            this.f37918z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f37919e;

        /* renamed from: i  reason: collision with root package name */
        private final yn.b f37920i;

        /* renamed from: o  reason: collision with root package name */
        private final un.v f37921o;

        /* renamed from: p  reason: collision with root package name */
        private final List f37922p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37923q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f37924r;

        /* renamed from: s  reason: collision with root package name */
        private final long f37925s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f37926t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f37927u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f37928v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f37929w;

        /* renamed from: x  reason: collision with root package name */
        private final List f37930x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                yn.b valueOf;
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
                    valueOf = yn.b.valueOf(parcel.readString());
                }
                yn.b bVar = valueOf;
                un.v vVar = (un.v) parcel.readParcelable(d.class.getClassLoader());
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

        public /* synthetic */ d(int i10, yn.b bVar, un.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, vVar, list, j10, (i11 & 32) != 0 ? true : z10, j11, x1Var, s0Var, bVar2, z11);
        }

        public static /* synthetic */ d v(d dVar, int i10, yn.b bVar, un.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, Object obj) {
            yn.b bVar3;
            un.v vVar2;
            List list2;
            long j12;
            boolean z12;
            long j13;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i10 = dVar.f37919e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f37920i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f37921o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f37922p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f37923q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f37924r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f37925s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f37926t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f37927u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f37928v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f37929w;
            } else {
                z13 = z11;
            }
            return dVar.u(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37924r;
        }

        @Override // mp.a0
        public un.v b() {
            return this.f37921o;
        }

        @Override // mp.z
        public List c() {
            return this.f37922p;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37927u;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (this.f37919e == dVar.f37919e && this.f37920i == dVar.f37920i && Intrinsics.areEqual(this.f37921o, dVar.f37921o) && Intrinsics.areEqual(this.f37922p, dVar.f37922p) && this.f37923q == dVar.f37923q && this.f37924r == dVar.f37924r && this.f37925s == dVar.f37925s && Intrinsics.areEqual(this.f37926t, dVar.f37926t) && Intrinsics.areEqual(this.f37927u, dVar.f37927u) && this.f37928v == dVar.f37928v && this.f37929w == dVar.f37929w) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // mp.z
        public a1.b h() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = Integer.hashCode(this.f37919e) * 31;
            yn.b bVar = this.f37920i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f37921o.hashCode()) * 31) + this.f37922p.hashCode()) * 31) + Long.hashCode(this.f37923q)) * 31) + Boolean.hashCode(this.f37924r)) * 31) + Long.hashCode(this.f37925s)) * 31;
            x1 x1Var = this.f37926t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f37927u.hashCode()) * 31) + this.f37928v.hashCode()) * 31) + Boolean.hashCode(this.f37929w);
        }

        @Override // mp.a0
        public long i() {
            return this.f37923q;
        }

        @Override // mp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37929w;
        }

        @Override // mp.a0
        public long o() {
            return this.f37925s;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37926t;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37928v;
        }

        @Override // mp.x1
        public List r() {
            return this.f37930x;
        }

        public String toString() {
            int i10 = this.f37919e;
            yn.b bVar = this.f37920i;
            un.v vVar = this.f37921o;
            List list = this.f37922p;
            long j10 = this.f37923q;
            boolean z10 = this.f37924r;
            long j11 = this.f37925s;
            x1 x1Var = this.f37926t;
            s0 s0Var = this.f37927u;
            v.b bVar2 = this.f37928v;
            boolean z11 = this.f37929w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final d u(int i10, yn.b bVar, un.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public final int w() {
            return this.f37919e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37919e);
            yn.b bVar = this.f37920i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f37921o, i10);
            List<a1.b> list = this.f37922p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f37923q);
            dest.writeInt(this.f37924r ? 1 : 0);
            dest.writeLong(this.f37925s);
            dest.writeParcelable(this.f37926t, i10);
            this.f37927u.writeToParcel(dest, i10);
            dest.writeString(this.f37928v.name());
            dest.writeInt(this.f37929w ? 1 : 0);
        }

        public final yn.b x() {
            return this.f37920i;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, yn.b bVar, un.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37919e = i10;
            this.f37920i = bVar;
            this.f37921o = cameraProperties;
            this.f37922p = posesNeeded;
            this.f37923q = j10;
            this.f37924r = z10;
            this.f37925s = j11;
            this.f37926t = x1Var;
            this.f37927u = poseConfigs;
            this.f37928v = cameraFacingMode;
            this.f37929w = z11;
            this.f37930x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37931e;

        /* renamed from: i  reason: collision with root package name */
        private final long f37932i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f37933o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f37934p;

        /* renamed from: q  reason: collision with root package name */
        private final un.v f37935q;

        /* renamed from: r  reason: collision with root package name */
        private final long f37936r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f37937s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f37938t;

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
                return new e(arrayList, j11, z11, z12, (un.v) parcel.readParcelable(e.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(e.class.getClassLoader()), v.b.valueOf(parcel.readString()));
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
        public /* synthetic */ e(java.util.List r2, long r3, boolean r5, boolean r6, un.v r7, long r8, mp.x1 r10, un.v.b r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
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
            throw new UnsupportedOperationException("Method not decompiled: mp.x1.e.<init>(java.util.List, long, boolean, boolean, un.v, long, mp.x1, un.v$b, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }

        public static /* synthetic */ e v(e eVar, List list, long j10, boolean z10, boolean z11, un.v vVar, long j11, x1 x1Var, v.b bVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = eVar.f37931e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f37932i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f37933o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f37934p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f37935q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f37936r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f37937s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f37938t;
            }
            long j12 = j11;
            un.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.u(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final boolean A() {
            return this.f37934p;
        }

        public final un.v b() {
            return this.f37935q;
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
            if (Intrinsics.areEqual(this.f37931e, eVar.f37931e) && this.f37932i == eVar.f37932i && this.f37933o == eVar.f37933o && this.f37934p == eVar.f37934p && Intrinsics.areEqual(this.f37935q, eVar.f37935q) && this.f37936r == eVar.f37936r && Intrinsics.areEqual(this.f37937s, eVar.f37937s) && this.f37938t == eVar.f37938t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f37931e.hashCode() * 31) + Long.hashCode(this.f37932i)) * 31) + Boolean.hashCode(this.f37933o)) * 31) + Boolean.hashCode(this.f37934p)) * 31) + this.f37935q.hashCode()) * 31) + Long.hashCode(this.f37936r)) * 31;
            x1 x1Var = this.f37937s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f37938t.hashCode();
        }

        public final long o() {
            return this.f37936r;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37937s;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37938t;
        }

        @Override // mp.x1
        public List r() {
            return this.f37931e;
        }

        public String toString() {
            List list = this.f37931e;
            long j10 = this.f37932i;
            boolean z10 = this.f37933o;
            boolean z11 = this.f37934p;
            un.v vVar = this.f37935q;
            long j11 = this.f37936r;
            x1 x1Var = this.f37937s;
            v.b bVar = this.f37938t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final e u(List selfies, long j10, boolean z10, boolean z11, un.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public final long w() {
            return this.f37932i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37931e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f37932i);
            dest.writeInt(this.f37933o ? 1 : 0);
            dest.writeInt(this.f37934p ? 1 : 0);
            dest.writeParcelable(this.f37935q, i10);
            dest.writeLong(this.f37936r);
            dest.writeParcelable(this.f37937s, i10);
            dest.writeString(this.f37938t.name());
        }

        public final boolean x() {
            return this.f37933o;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, un.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37931e = selfies;
            this.f37932i = j10;
            this.f37933o = z10;
            this.f37934p = z11;
            this.f37935q = cameraProperties;
            this.f37936r = j11;
            this.f37937s = x1Var;
            this.f37938t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37939e;

        /* renamed from: i  reason: collision with root package name */
        private final un.v f37940i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37941o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f37942p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f37943q;

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
                return new f(arrayList, (un.v) parcel.readParcelable(f.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(f.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(List selfies, un.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37939e = selfies;
            this.f37940i = cameraProperties;
            this.f37941o = j10;
            this.f37942p = x1Var;
            this.f37943q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37942p;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37943q;
        }

        @Override // mp.x1
        public List r() {
            return this.f37939e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37939e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f37940i, i10);
            dest.writeLong(this.f37941o);
            dest.writeParcelable(this.f37942p, i10);
            dest.writeString(this.f37943q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f37944d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f37945e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f37946i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f37947o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f37948p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37949q;

        static {
            g[] a10 = a();
            f37948p = a10;
            f37949q = xr.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f37944d, f37945e, f37946i, f37947o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f37948p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f37950e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f37951i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f37952o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f37953p;

        /* renamed from: q  reason: collision with root package name */
        private final List f37954q;

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
            if (this.f37950e == hVar.f37950e && this.f37951i == hVar.f37951i && Intrinsics.areEqual(this.f37952o, hVar.f37952o) && this.f37953p == hVar.f37953p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f37950e) * 31) + Boolean.hashCode(this.f37951i)) * 31;
            x1 x1Var = this.f37952o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f37953p.hashCode();
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37952o;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37953p;
        }

        @Override // mp.x1
        public List r() {
            return this.f37954q;
        }

        public String toString() {
            boolean z10 = this.f37950e;
            boolean z11 = this.f37951i;
            x1 x1Var = this.f37952o;
            v.b bVar = this.f37953p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37950e ? 1 : 0);
            dest.writeInt(this.f37951i ? 1 : 0);
            dest.writeParcelable(this.f37952o, i10);
            dest.writeString(this.f37953p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37950e = z10;
            this.f37951i = z11;
            this.f37952o = x1Var;
            this.f37953p = cameraFacingMode;
            this.f37954q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37955e;

        /* renamed from: i  reason: collision with root package name */
        private final List f37956i;

        /* renamed from: o  reason: collision with root package name */
        private final String f37957o;

        /* renamed from: p  reason: collision with root package name */
        private final un.v f37958p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37959q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f37960r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f37961s;

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
                return new i(arrayList, arrayList2, parcel.readString(), (un.v) parcel.readParcelable(i.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(i.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(List selfies, List selfiesToReview, String str, un.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(selfiesToReview, "selfiesToReview");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37955e = selfies;
            this.f37956i = selfiesToReview;
            this.f37957o = str;
            this.f37958p = cameraProperties;
            this.f37959q = j10;
            this.f37960r = x1Var;
            this.f37961s = cameraFacingMode;
        }

        public final un.v b() {
            return this.f37958p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f37959q;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37960r;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37961s;
        }

        @Override // mp.x1
        public List r() {
            return this.f37955e;
        }

        public final List u() {
            return this.f37956i;
        }

        public final String v() {
            return this.f37957o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37955e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f37956i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f37957o);
            dest.writeParcelable(this.f37958p, i10);
            dest.writeLong(this.f37959q);
            dest.writeParcelable(this.f37960r, i10);
            dest.writeString(this.f37961s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37965e;

        /* renamed from: i  reason: collision with root package name */
        private final List f37966i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f37967o;

        /* renamed from: p  reason: collision with root package name */
        private final un.v f37968p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37969q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f37970r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f37971s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f37972t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f37973u;

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
                un.v vVar = (un.v) parcel.readParcelable(cls.getClassLoader());
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
        public k(List selfies, List posesNeeded, boolean z10, un.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37965e = selfies;
            this.f37966i = posesNeeded;
            this.f37967o = z10;
            this.f37968p = cameraProperties;
            this.f37969q = j10;
            this.f37970r = x1Var;
            this.f37971s = poseConfigs;
            this.f37972t = cameraFacingMode;
            this.f37973u = z11;
        }

        public static /* synthetic */ k v(k kVar, List list, List list2, boolean z10, un.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f37965e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f37966i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f37967o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f37968p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f37969q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f37970r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f37971s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f37972t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f37973u;
            }
            long j11 = j10;
            boolean z12 = z10;
            un.v vVar2 = vVar;
            return kVar.u(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37967o;
        }

        public final un.v b() {
            return this.f37968p;
        }

        @Override // mp.z
        public List c() {
            return this.f37966i;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37971s;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (Intrinsics.areEqual(this.f37965e, kVar.f37965e) && Intrinsics.areEqual(this.f37966i, kVar.f37966i) && this.f37967o == kVar.f37967o && Intrinsics.areEqual(this.f37968p, kVar.f37968p) && this.f37969q == kVar.f37969q && Intrinsics.areEqual(this.f37970r, kVar.f37970r) && Intrinsics.areEqual(this.f37971s, kVar.f37971s) && this.f37972t == kVar.f37972t && this.f37973u == kVar.f37973u) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((this.f37965e.hashCode() * 31) + this.f37966i.hashCode()) * 31) + Boolean.hashCode(this.f37967o)) * 31) + this.f37968p.hashCode()) * 31) + Long.hashCode(this.f37969q)) * 31;
            x1 x1Var = this.f37970r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f37971s.hashCode()) * 31) + this.f37972t.hashCode()) * 31) + Boolean.hashCode(this.f37973u);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37973u;
        }

        public final long o() {
            return this.f37969q;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37970r;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37972t;
        }

        @Override // mp.x1
        public List r() {
            return this.f37965e;
        }

        public String toString() {
            List list = this.f37965e;
            List list2 = this.f37966i;
            boolean z10 = this.f37967o;
            un.v vVar = this.f37968p;
            long j10 = this.f37969q;
            x1 x1Var = this.f37970r;
            s0 s0Var = this.f37971s;
            v.b bVar = this.f37972t;
            boolean z11 = this.f37973u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final k u(List selfies, List posesNeeded, boolean z10, un.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
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
            List<Parcelable> list = this.f37965e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f37966i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f37967o ? 1 : 0);
            dest.writeParcelable(this.f37968p, i10);
            dest.writeLong(this.f37969q);
            dest.writeParcelable(this.f37970r, i10);
            this.f37971s.writeToParcel(dest, i10);
            dest.writeString(this.f37972t.name());
            dest.writeInt(this.f37973u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f37988e;

        /* renamed from: i  reason: collision with root package name */
        private final un.v f37989i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37990o;

        /* renamed from: p  reason: collision with root package name */
        private final float f37991p;

        /* renamed from: q  reason: collision with root package name */
        private final yn.a f37992q;

        /* renamed from: r  reason: collision with root package name */
        private final List f37993r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f37994s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f37995t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f37996u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f37997v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f37998w;

        /* renamed from: x  reason: collision with root package name */
        private final List f37999x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final m createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                long readLong = parcel.readLong();
                un.v vVar = (un.v) parcel.readParcelable(m.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                yn.a aVar = (yn.a) parcel.readParcelable(m.class.getClassLoader());
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
        public m(long j10, un.v cameraProperties, long j11, float f10, yn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37988e = j10;
            this.f37989i = cameraProperties;
            this.f37990o = j11;
            this.f37991p = f10;
            this.f37992q = aVar;
            this.f37993r = posesNeeded;
            this.f37994s = x1Var;
            this.f37995t = poseConfigs;
            this.f37996u = z10;
            this.f37997v = cameraFacingMode;
            this.f37998w = z11;
            this.f37999x = CollectionsKt.l();
        }

        public static /* synthetic */ m v(m mVar, long j10, un.v vVar, long j11, float f10, yn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            long j12;
            un.v vVar2;
            long j13;
            float f11;
            yn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar2;
            boolean z13;
            if ((i10 & 1) != 0) {
                j12 = mVar.f37988e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f37989i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f37990o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f37991p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f37992q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f37993r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f37994s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f37995t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f37996u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f37997v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f37998w;
            } else {
                z13 = z11;
            }
            return mVar.u(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37996u;
        }

        public final un.v b() {
            return this.f37989i;
        }

        @Override // mp.z
        public List c() {
            return this.f37993r;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37995t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (this.f37988e == mVar.f37988e && Intrinsics.areEqual(this.f37989i, mVar.f37989i) && this.f37990o == mVar.f37990o && Float.compare(this.f37991p, mVar.f37991p) == 0 && Intrinsics.areEqual(this.f37992q, mVar.f37992q) && Intrinsics.areEqual(this.f37993r, mVar.f37993r) && Intrinsics.areEqual(this.f37994s, mVar.f37994s) && Intrinsics.areEqual(this.f37995t, mVar.f37995t) && this.f37996u == mVar.f37996u && this.f37997v == mVar.f37997v && this.f37998w == mVar.f37998w) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // mp.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Long.hashCode(this.f37988e) * 31) + this.f37989i.hashCode()) * 31) + Long.hashCode(this.f37990o)) * 31) + Float.hashCode(this.f37991p)) * 31;
            yn.a aVar = this.f37992q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f37993r.hashCode()) * 31;
            x1 x1Var = this.f37994s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f37995t.hashCode()) * 31) + Boolean.hashCode(this.f37996u)) * 31) + this.f37997v.hashCode()) * 31) + Boolean.hashCode(this.f37998w);
        }

        public final long i() {
            return this.f37988e;
        }

        @Override // mp.z
        public boolean l() {
            return this.f37998w;
        }

        public final long o() {
            return this.f37990o;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37994s;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37997v;
        }

        @Override // mp.x1
        public List r() {
            return this.f37999x;
        }

        public String toString() {
            long j10 = this.f37988e;
            un.v vVar = this.f37989i;
            long j11 = this.f37990o;
            float f10 = this.f37991p;
            yn.a aVar = this.f37992q;
            List list = this.f37993r;
            x1 x1Var = this.f37994s;
            s0 s0Var = this.f37995t;
            boolean z10 = this.f37996u;
            v.b bVar = this.f37997v;
            boolean z11 = this.f37998w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final m u(long j10, un.v cameraProperties, long j11, float f10, yn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final yn.a w() {
            return this.f37992q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f37988e);
            dest.writeParcelable(this.f37989i, i10);
            dest.writeLong(this.f37990o);
            dest.writeFloat(this.f37991p);
            dest.writeParcelable(this.f37992q, i10);
            List<a1.b> list = this.f37993r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f37994s, i10);
            this.f37995t.writeToParcel(dest, i10);
            dest.writeInt(this.f37996u ? 1 : 0);
            dest.writeString(this.f37997v.name());
            dest.writeInt(this.f37998w ? 1 : 0);
        }

        public final float x() {
            return this.f37991p;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f38000e;

        /* renamed from: i  reason: collision with root package name */
        private final String f38001i;

        /* renamed from: o  reason: collision with root package name */
        private final un.v f38002o;

        /* renamed from: p  reason: collision with root package name */
        private final long f38003p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f38004q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f38005r;

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
                return new n(arrayList, parcel.readString(), (un.v) parcel.readParcelable(n.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(n.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final n[] newArray(int i10) {
                return new n[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(List selfies, String str, un.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f38000e = selfies;
            this.f38001i = str;
            this.f38002o = cameraProperties;
            this.f38003p = j10;
            this.f38004q = x1Var;
            this.f38005r = cameraFacingMode;
        }

        public final un.v b() {
            return this.f38002o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f38003p;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f38004q;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f38005r;
        }

        @Override // mp.x1
        public List r() {
            return this.f38000e;
        }

        public final String u() {
            return this.f38001i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f38000e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f38001i);
            dest.writeParcelable(this.f38002o, i10);
            dest.writeLong(this.f38003p);
            dest.writeParcelable(this.f38004q, i10);
            dest.writeString(this.f38005r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f38006e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f38007i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f38008o;

        /* renamed from: p  reason: collision with root package name */
        private final List f38009p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f38010q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f38011r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f38012s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f38013t;

        /* renamed from: u  reason: collision with root package name */
        private final List f38014u;

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
                z10 = oVar.f38006e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f38007i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f38008o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f38009p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f38010q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f38011r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f38012s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f38013t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.u(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // mp.z
        public boolean a() {
            return this.f38011r;
        }

        @Override // mp.z
        public List c() {
            return this.f38009p;
        }

        @Override // mp.z
        public s0 d() {
            return this.f38010q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (this.f38006e == oVar.f38006e && this.f38007i == oVar.f38007i && Intrinsics.areEqual(this.f38008o, oVar.f38008o) && Intrinsics.areEqual(this.f38009p, oVar.f38009p) && Intrinsics.areEqual(this.f38010q, oVar.f38010q) && this.f38011r == oVar.f38011r && this.f38012s == oVar.f38012s && this.f38013t == oVar.f38013t) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f38006e) * 31) + Boolean.hashCode(this.f38007i)) * 31;
            x1 x1Var = this.f38008o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f38009p.hashCode()) * 31) + this.f38010q.hashCode()) * 31) + Boolean.hashCode(this.f38011r)) * 31) + this.f38012s.hashCode()) * 31) + Boolean.hashCode(this.f38013t);
        }

        @Override // mp.z
        public boolean l() {
            return this.f38013t;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f38008o;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f38012s;
        }

        @Override // mp.x1
        public List r() {
            return this.f38014u;
        }

        public String toString() {
            boolean z10 = this.f38006e;
            boolean z11 = this.f38007i;
            x1 x1Var = this.f38008o;
            List list = this.f38009p;
            s0 s0Var = this.f38010q;
            boolean z12 = this.f38011r;
            v.b bVar = this.f38012s;
            boolean z13 = this.f38013t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final o u(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public final boolean w() {
            return this.f38007i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f38006e ? 1 : 0);
            dest.writeInt(this.f38007i ? 1 : 0);
            dest.writeParcelable(this.f38008o, i10);
            List<a1.b> list = this.f38009p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f38010q.writeToParcel(dest, i10);
            dest.writeInt(this.f38011r ? 1 : 0);
            dest.writeString(this.f38012s.name());
            dest.writeInt(this.f38013t ? 1 : 0);
        }

        public final boolean x() {
            return this.f38006e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f38006e = z10;
            this.f38007i = z11;
            this.f38008o = x1Var;
            this.f38009p = posesNeeded;
            this.f38010q = poseConfigs;
            this.f38011r = z12;
            this.f38012s = cameraFacingMode;
            this.f38013t = z13;
            this.f38014u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f38015e;

        /* renamed from: i  reason: collision with root package name */
        private final un.v f38016i;

        /* renamed from: o  reason: collision with root package name */
        private final long f38017o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f38018p;

        /* renamed from: q  reason: collision with root package name */
        private final List f38019q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f38020r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f38021s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f38022t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f38023u;

        /* renamed from: v  reason: collision with root package name */
        private final List f38024v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final p createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                un.v vVar = (un.v) parcel.readParcelable(p.class.getClassLoader());
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
        public p(String str, un.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f38015e = str;
            this.f38016i = cameraProperties;
            this.f38017o = j10;
            this.f38018p = x1Var;
            this.f38019q = posesNeeded;
            this.f38020r = poseConfigs;
            this.f38021s = z10;
            this.f38022t = cameraFacingMode;
            this.f38023u = z11;
            this.f38024v = CollectionsKt.l();
        }

        public static /* synthetic */ p v(p pVar, String str, un.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f38015e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f38016i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f38017o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f38018p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f38019q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f38020r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f38021s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f38022t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f38023u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.u(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // mp.z
        public boolean a() {
            return this.f38021s;
        }

        @Override // mp.z
        public List c() {
            return this.f38019q;
        }

        @Override // mp.z
        public s0 d() {
            return this.f38020r;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (Intrinsics.areEqual(this.f38015e, pVar.f38015e) && Intrinsics.areEqual(this.f38016i, pVar.f38016i) && this.f38017o == pVar.f38017o && Intrinsics.areEqual(this.f38018p, pVar.f38018p) && Intrinsics.areEqual(this.f38019q, pVar.f38019q) && Intrinsics.areEqual(this.f38020r, pVar.f38020r) && this.f38021s == pVar.f38021s && this.f38022t == pVar.f38022t && this.f38023u == pVar.f38023u) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public a1.b h() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            String str = this.f38015e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f38016i.hashCode()) * 31) + Long.hashCode(this.f38017o)) * 31;
            x1 x1Var = this.f38018p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f38019q.hashCode()) * 31) + this.f38020r.hashCode()) * 31) + Boolean.hashCode(this.f38021s)) * 31) + this.f38022t.hashCode()) * 31) + Boolean.hashCode(this.f38023u);
        }

        @Override // mp.z
        public boolean l() {
            return this.f38023u;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f38018p;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f38022t;
        }

        @Override // mp.x1
        public List r() {
            return this.f38024v;
        }

        public String toString() {
            String str = this.f38015e;
            un.v vVar = this.f38016i;
            long j10 = this.f38017o;
            x1 x1Var = this.f38018p;
            List list = this.f38019q;
            s0 s0Var = this.f38020r;
            boolean z10 = this.f38021s;
            v.b bVar = this.f38022t;
            boolean z11 = this.f38023u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final p u(String str, un.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f38015e);
            dest.writeParcelable(this.f38016i, i10);
            dest.writeLong(this.f38017o);
            dest.writeParcelable(this.f38018p, i10);
            List<a1.b> list = this.f38019q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f38020r.writeToParcel(dest, i10);
            dest.writeInt(this.f38021s ? 1 : 0);
            dest.writeString(this.f38022t.name());
            dest.writeInt(this.f38023u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f38025e;

        /* renamed from: i  reason: collision with root package name */
        private final String f38026i;

        /* renamed from: o  reason: collision with root package name */
        private final un.v f38027o;

        /* renamed from: p  reason: collision with root package name */
        private final long f38028p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f38029q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f38030r;

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
                return new q(arrayList, parcel.readString(), (un.v) parcel.readParcelable(q.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(q.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final q[] newArray(int i10) {
                return new q[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(List selfies, String webRtcObjectId, un.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(webRtcObjectId, "webRtcObjectId");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f38025e = selfies;
            this.f38026i = webRtcObjectId;
            this.f38027o = cameraProperties;
            this.f38028p = j10;
            this.f38029q = x1Var;
            this.f38030r = cameraFacingMode;
        }

        public final un.v b() {
            return this.f38027o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f38028p;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f38029q;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f38030r;
        }

        @Override // mp.x1
        public List r() {
            return this.f38025e;
        }

        public final String u() {
            return this.f38026i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f38025e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f38026i);
            dest.writeParcelable(this.f38027o, i10);
            dest.writeLong(this.f38028p);
            dest.writeParcelable(this.f38029q, i10);
            dest.writeString(this.f38030r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 p();

    public abstract v.b q();

    public abstract List r();

    public final void t(boolean z10) {
        this.f37885d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f37962e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f37963i;

        /* renamed from: o  reason: collision with root package name */
        private final List f37964o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f51880d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37962e;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37963i;
        }

        @Override // mp.x1
        public List r() {
            return this.f37964o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f37962e, i10);
            dest.writeString(this.f37963i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37962e = x1Var;
            this.f37963i = cameraFacingMode;
            this.f37964o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f37974e;

        /* renamed from: i  reason: collision with root package name */
        private final yn.b f37975i;

        /* renamed from: o  reason: collision with root package name */
        private final float f37976o;

        /* renamed from: p  reason: collision with root package name */
        private final yn.a f37977p;

        /* renamed from: q  reason: collision with root package name */
        private final List f37978q;

        /* renamed from: r  reason: collision with root package name */
        private final long f37979r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f37980s;

        /* renamed from: t  reason: collision with root package name */
        private final long f37981t;

        /* renamed from: u  reason: collision with root package name */
        private final un.v f37982u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f37983v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f37984w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f37985x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f37986y;

        /* renamed from: z  reason: collision with root package name */
        private final List f37987z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                boolean z10;
                yn.b valueOf;
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
                    valueOf = yn.b.valueOf(parcel.readString());
                }
                yn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                yn.a aVar = (yn.a) parcel.readParcelable(l.class.getClassLoader());
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
                un.v vVar = (un.v) parcel.readParcelable(l.class.getClassLoader());
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

        public /* synthetic */ l(boolean z10, yn.b bVar, float f10, yn.a aVar, List list, long j10, boolean z11, long j11, un.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? yn.b.f55524d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
        }

        public static /* synthetic */ l v(l lVar, boolean z10, yn.b bVar, float f10, yn.a aVar, List list, long j10, boolean z11, long j11, un.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, Object obj) {
            boolean z13;
            yn.b bVar3;
            float f11;
            yn.a aVar2;
            List list2;
            long j12;
            boolean z14;
            long j13;
            un.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z15;
            if ((i10 & 1) != 0) {
                z13 = lVar.f37974e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f37975i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f37976o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f37977p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f37978q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f37979r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f37980s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f37981t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f37982u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f37983v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f37984w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f37985x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f37986y;
            } else {
                z15 = z12;
            }
            return lVar.u(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        public final yn.b A() {
            return this.f37975i;
        }

        @Override // mp.z
        public boolean a() {
            return this.f37980s;
        }

        @Override // mp.a0
        public un.v b() {
            return this.f37982u;
        }

        @Override // mp.z
        public List c() {
            return this.f37978q;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37984w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (this.f37974e == lVar.f37974e && this.f37975i == lVar.f37975i && Float.compare(this.f37976o, lVar.f37976o) == 0 && Intrinsics.areEqual(this.f37977p, lVar.f37977p) && Intrinsics.areEqual(this.f37978q, lVar.f37978q) && this.f37979r == lVar.f37979r && this.f37980s == lVar.f37980s && this.f37981t == lVar.f37981t && Intrinsics.areEqual(this.f37982u, lVar.f37982u) && Intrinsics.areEqual(this.f37983v, lVar.f37983v) && Intrinsics.areEqual(this.f37984w, lVar.f37984w) && this.f37985x == lVar.f37985x && this.f37986y == lVar.f37986y) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // mp.z
        public a1.b h() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Boolean.hashCode(this.f37974e) * 31;
            yn.b bVar = this.f37975i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f37976o)) * 31;
            yn.a aVar = this.f37977p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f37978q.hashCode()) * 31) + Long.hashCode(this.f37979r)) * 31) + Boolean.hashCode(this.f37980s)) * 31) + Long.hashCode(this.f37981t)) * 31) + this.f37982u.hashCode()) * 31;
            x1 x1Var = this.f37983v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f37984w.hashCode()) * 31) + this.f37985x.hashCode()) * 31) + Boolean.hashCode(this.f37986y);
        }

        @Override // mp.a0
        public long i() {
            return this.f37979r;
        }

        @Override // mp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37986y;
        }

        @Override // mp.a0
        public long o() {
            return this.f37981t;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37983v;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37985x;
        }

        @Override // mp.x1
        public List r() {
            return this.f37987z;
        }

        public String toString() {
            boolean z10 = this.f37974e;
            yn.b bVar = this.f37975i;
            float f10 = this.f37976o;
            yn.a aVar = this.f37977p;
            List list = this.f37978q;
            long j10 = this.f37979r;
            boolean z11 = this.f37980s;
            long j11 = this.f37981t;
            un.v vVar = this.f37982u;
            x1 x1Var = this.f37983v;
            s0 s0Var = this.f37984w;
            v.b bVar2 = this.f37985x;
            boolean z12 = this.f37986y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final l u(boolean z10, yn.b bVar, float f10, yn.a aVar, List posesNeeded, long j10, boolean z11, long j11, un.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public final yn.a w() {
            return this.f37977p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37974e ? 1 : 0);
            yn.b bVar = this.f37975i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f37976o);
            dest.writeParcelable(this.f37977p, i10);
            List<a1.b> list = this.f37978q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f37979r);
            dest.writeInt(this.f37980s ? 1 : 0);
            dest.writeLong(this.f37981t);
            dest.writeParcelable(this.f37982u, i10);
            dest.writeParcelable(this.f37983v, i10);
            this.f37984w.writeToParcel(dest, i10);
            dest.writeString(this.f37985x.name());
            dest.writeInt(this.f37986y ? 1 : 0);
        }

        public final float x() {
            return this.f37976o;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, yn.b bVar, float f10, yn.a aVar, List posesNeeded, long j10, boolean z11, long j11, un.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37974e = z10;
            this.f37975i = bVar;
            this.f37976o = f10;
            this.f37977p = aVar;
            this.f37978q = posesNeeded;
            this.f37979r = j10;
            this.f37980s = z11;
            this.f37981t = j11;
            this.f37982u = cameraProperties;
            this.f37983v = x1Var;
            this.f37984w = poseConfigs;
            this.f37985x = cameraFacingMode;
            this.f37986y = z12;
            this.f37987z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0514a();

        /* renamed from: e  reason: collision with root package name */
        private final yn.b f37886e;

        /* renamed from: i  reason: collision with root package name */
        private final float f37887i;

        /* renamed from: o  reason: collision with root package name */
        private final yn.a f37888o;

        /* renamed from: p  reason: collision with root package name */
        private final List f37889p;

        /* renamed from: q  reason: collision with root package name */
        private final List f37890q;

        /* renamed from: r  reason: collision with root package name */
        private final long f37891r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f37892s;

        /* renamed from: t  reason: collision with root package name */
        private final long f37893t;

        /* renamed from: u  reason: collision with root package name */
        private final un.v f37894u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f37895v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f37896w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f37897x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f37898y;

        /* renamed from: z  reason: collision with root package name */
        private final g f37899z;

        /* renamed from: mp.x1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0514a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                yn.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = yn.b.valueOf(parcel.readString());
                }
                yn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                yn.a aVar = (yn.a) parcel.readParcelable(a.class.getClassLoader());
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
                un.v vVar = (un.v) parcel.readParcelable(a.class.getClassLoader());
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

        public /* synthetic */ a(yn.b bVar, float f10, yn.a aVar, List list, List list2, long j10, boolean z10, long j11, un.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f37944d : gVar);
        }

        public static /* synthetic */ a v(a aVar, yn.b bVar, float f10, yn.a aVar2, List list, List list2, long j10, boolean z10, long j11, un.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, Object obj) {
            yn.b bVar3;
            float f11;
            yn.a aVar3;
            List list3;
            List list4;
            long j12;
            boolean z12;
            long j13;
            un.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            g gVar2;
            if ((i10 & 1) != 0) {
                bVar3 = aVar.f37886e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f37887i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f37888o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f37889p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f37890q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f37891r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f37892s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f37893t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f37894u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f37895v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f37896w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f37897x;
            } else {
                bVar4 = bVar2;
            }
            yn.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f37898y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f37899z;
            } else {
                gVar2 = gVar;
            }
            return aVar.u(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        public final float A() {
            return this.f37887i;
        }

        public final yn.b B() {
            return this.f37886e;
        }

        @Override // mp.z
        public boolean a() {
            return this.f37892s;
        }

        @Override // mp.a0
        public un.v b() {
            return this.f37894u;
        }

        @Override // mp.z
        public List c() {
            return this.f37890q;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37896w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.z
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
            if (this.f37886e == aVar.f37886e && Float.compare(this.f37887i, aVar.f37887i) == 0 && Intrinsics.areEqual(this.f37888o, aVar.f37888o) && Intrinsics.areEqual(this.f37889p, aVar.f37889p) && Intrinsics.areEqual(this.f37890q, aVar.f37890q) && this.f37891r == aVar.f37891r && this.f37892s == aVar.f37892s && this.f37893t == aVar.f37893t && Intrinsics.areEqual(this.f37894u, aVar.f37894u) && Intrinsics.areEqual(this.f37895v, aVar.f37895v) && Intrinsics.areEqual(this.f37896w, aVar.f37896w) && this.f37897x == aVar.f37897x && this.f37898y == aVar.f37898y && this.f37899z == aVar.f37899z) {
                return true;
            }
            return false;
        }

        @Override // mp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // mp.z
        public a1.b h() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            yn.b bVar = this.f37886e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f37887i)) * 31;
            yn.a aVar = this.f37888o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f37889p.hashCode()) * 31) + this.f37890q.hashCode()) * 31) + Long.hashCode(this.f37891r)) * 31) + Boolean.hashCode(this.f37892s)) * 31) + Long.hashCode(this.f37893t)) * 31) + this.f37894u.hashCode()) * 31;
            x1 x1Var = this.f37895v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f37896w.hashCode()) * 31) + this.f37897x.hashCode()) * 31) + Boolean.hashCode(this.f37898y)) * 31) + this.f37899z.hashCode();
        }

        @Override // mp.a0
        public long i() {
            return this.f37891r;
        }

        @Override // mp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37898y;
        }

        @Override // mp.a0
        public long o() {
            return this.f37893t;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37895v;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37897x;
        }

        @Override // mp.x1
        public List r() {
            return this.f37889p;
        }

        public String toString() {
            yn.b bVar = this.f37886e;
            float f10 = this.f37887i;
            yn.a aVar = this.f37888o;
            List list = this.f37889p;
            List list2 = this.f37890q;
            long j10 = this.f37891r;
            boolean z10 = this.f37892s;
            long j11 = this.f37893t;
            un.v vVar = this.f37894u;
            x1 x1Var = this.f37895v;
            s0 s0Var = this.f37896w;
            v.b bVar2 = this.f37897x;
            boolean z11 = this.f37898y;
            g gVar = this.f37899z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final a u(yn.b bVar, float f10, yn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, un.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            return new a(bVar, f10, aVar, selfies, posesNeeded, j10, z10, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z11, flashState);
        }

        public final yn.a w() {
            return this.f37888o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            yn.b bVar = this.f37886e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f37887i);
            dest.writeParcelable(this.f37888o, i10);
            List<Parcelable> list = this.f37889p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f37890q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f37891r);
            dest.writeInt(this.f37892s ? 1 : 0);
            dest.writeLong(this.f37893t);
            dest.writeParcelable(this.f37894u, i10);
            dest.writeParcelable(this.f37895v, i10);
            this.f37896w.writeToParcel(dest, i10);
            dest.writeString(this.f37897x.name());
            dest.writeInt(this.f37898y ? 1 : 0);
            dest.writeString(this.f37899z.name());
        }

        public final g x() {
            return this.f37899z;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(yn.b bVar, float f10, yn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, un.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            this.f37886e = bVar;
            this.f37887i = f10;
            this.f37888o = aVar;
            this.f37889p = selfies;
            this.f37890q = posesNeeded;
            this.f37891r = j10;
            this.f37892s = z10;
            this.f37893t = j11;
            this.f37894u = cameraProperties;
            this.f37895v = x1Var;
            this.f37896w = poseConfigs;
            this.f37897x = cameraFacingMode;
            this.f37898y = z11;
            this.f37899z = flashState;
        }
    }
}
