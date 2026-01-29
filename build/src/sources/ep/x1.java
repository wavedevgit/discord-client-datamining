package ep;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ep.a0;
import ep.a1;
import ep.z;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mn.v;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f23562d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f23577e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f23578i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f23579o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f23580p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f23581q;

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
            this.f23577e = nextState;
            this.f23578i = completedPose;
            this.f23579o = x1Var;
            this.f23580p = cameraFacingMode;
            this.f23581q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23579o;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23580p;
        }

        @Override // ep.x1
        public List p() {
            return this.f23577e.p();
        }

        public final a1.b r() {
            return this.f23578i;
        }

        public final x1 s() {
            return this.f23577e;
        }

        public final boolean t() {
            return this.f23581q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f23577e, i10);
            dest.writeString(this.f23578i.name());
            dest.writeParcelable(this.f23579o, i10);
            dest.writeString(this.f23580p.name());
            dest.writeInt(this.f23581q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f23582e;

        /* renamed from: i  reason: collision with root package name */
        private final qn.b f23583i;

        /* renamed from: o  reason: collision with root package name */
        private final long f23584o;

        /* renamed from: p  reason: collision with root package name */
        private final mn.v f23585p;

        /* renamed from: q  reason: collision with root package name */
        private final long f23586q;

        /* renamed from: r  reason: collision with root package name */
        private final float f23587r;

        /* renamed from: s  reason: collision with root package name */
        private final qn.a f23588s;

        /* renamed from: t  reason: collision with root package name */
        private final List f23589t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f23590u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f23591v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f23592w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f23593x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f23594y;

        /* renamed from: z  reason: collision with root package name */
        private final List f23595z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                qn.b valueOf;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = qn.b.valueOf(parcel.readString());
                }
                qn.b bVar = valueOf;
                long readLong = parcel.readLong();
                mn.v vVar = (mn.v) parcel.readParcelable(c.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                qn.a aVar = (qn.a) parcel.readParcelable(c.class.getClassLoader());
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

        public /* synthetic */ c(int i10, qn.b bVar, long j10, mn.v vVar, long j11, float f10, qn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, j10, vVar, j11, f10, aVar, list, x1Var, s0Var, z10, bVar2, z11);
        }

        public static /* synthetic */ c s(c cVar, int i10, qn.b bVar, long j10, mn.v vVar, long j11, float f10, qn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, Object obj) {
            int i12;
            qn.b bVar3;
            long j12;
            mn.v vVar2;
            long j13;
            float f11;
            qn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i12 = cVar.f23582e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f23583i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f23584o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f23585p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f23586q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f23587r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f23588s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f23589t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f23590u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f23591v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f23592w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f23593x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f23594y;
            } else {
                z13 = z11;
            }
            return cVar.r(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23592w;
        }

        public final mn.v b() {
            return this.f23585p;
        }

        @Override // ep.z
        public List c() {
            return this.f23589t;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23591v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (this.f23582e == cVar.f23582e && this.f23583i == cVar.f23583i && this.f23584o == cVar.f23584o && Intrinsics.areEqual(this.f23585p, cVar.f23585p) && this.f23586q == cVar.f23586q && Float.compare(this.f23587r, cVar.f23587r) == 0 && Intrinsics.areEqual(this.f23588s, cVar.f23588s) && Intrinsics.areEqual(this.f23589t, cVar.f23589t) && Intrinsics.areEqual(this.f23590u, cVar.f23590u) && Intrinsics.areEqual(this.f23591v, cVar.f23591v) && this.f23592w == cVar.f23592w && this.f23593x == cVar.f23593x && this.f23594y == cVar.f23594y) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // ep.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Integer.hashCode(this.f23582e) * 31;
            qn.b bVar = this.f23583i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f23584o)) * 31) + this.f23585p.hashCode()) * 31) + Long.hashCode(this.f23586q)) * 31) + Float.hashCode(this.f23587r)) * 31;
            qn.a aVar = this.f23588s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f23589t.hashCode()) * 31;
            x1 x1Var = this.f23590u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f23591v.hashCode()) * 31) + Boolean.hashCode(this.f23592w)) * 31) + this.f23593x.hashCode()) * 31) + Boolean.hashCode(this.f23594y);
        }

        public final long i() {
            return this.f23584o;
        }

        @Override // ep.z
        public boolean k() {
            return this.f23594y;
        }

        public final long m() {
            return this.f23586q;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23590u;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23593x;
        }

        @Override // ep.x1
        public List p() {
            return this.f23595z;
        }

        public final c r(int i10, qn.b bVar, long j10, mn.v cameraProperties, long j11, float f10, qn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final qn.a t() {
            return this.f23588s;
        }

        public String toString() {
            int i10 = this.f23582e;
            qn.b bVar = this.f23583i;
            long j10 = this.f23584o;
            mn.v vVar = this.f23585p;
            long j11 = this.f23586q;
            float f10 = this.f23587r;
            qn.a aVar = this.f23588s;
            List list = this.f23589t;
            x1 x1Var = this.f23590u;
            s0 s0Var = this.f23591v;
            boolean z10 = this.f23592w;
            v.b bVar2 = this.f23593x;
            boolean z11 = this.f23594y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final int u() {
            return this.f23582e;
        }

        public final float v() {
            return this.f23587r;
        }

        public final qn.b w() {
            return this.f23583i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f23582e);
            qn.b bVar = this.f23583i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f23584o);
            dest.writeParcelable(this.f23585p, i10);
            dest.writeLong(this.f23586q);
            dest.writeFloat(this.f23587r);
            dest.writeParcelable(this.f23588s, i10);
            List<a1.b> list = this.f23589t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f23590u, i10);
            this.f23591v.writeToParcel(dest, i10);
            dest.writeInt(this.f23592w ? 1 : 0);
            dest.writeString(this.f23593x.name());
            dest.writeInt(this.f23594y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, qn.b bVar, long j10, mn.v cameraProperties, long j11, float f10, qn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23582e = i10;
            this.f23583i = bVar;
            this.f23584o = j10;
            this.f23585p = cameraProperties;
            this.f23586q = j11;
            this.f23587r = f10;
            this.f23588s = aVar;
            this.f23589t = posesNeeded;
            this.f23590u = x1Var;
            this.f23591v = poseConfigs;
            this.f23592w = z10;
            this.f23593x = cameraFacingMode;
            this.f23594y = z11;
            this.f23595z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f23596e;

        /* renamed from: i  reason: collision with root package name */
        private final qn.b f23597i;

        /* renamed from: o  reason: collision with root package name */
        private final mn.v f23598o;

        /* renamed from: p  reason: collision with root package name */
        private final List f23599p;

        /* renamed from: q  reason: collision with root package name */
        private final long f23600q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f23601r;

        /* renamed from: s  reason: collision with root package name */
        private final long f23602s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f23603t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f23604u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f23605v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f23606w;

        /* renamed from: x  reason: collision with root package name */
        private final List f23607x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                qn.b valueOf;
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
                    valueOf = qn.b.valueOf(parcel.readString());
                }
                qn.b bVar = valueOf;
                mn.v vVar = (mn.v) parcel.readParcelable(d.class.getClassLoader());
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

        public /* synthetic */ d(int i10, qn.b bVar, mn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, vVar, list, j10, (i11 & 32) != 0 ? true : z10, j11, x1Var, s0Var, bVar2, z11);
        }

        public static /* synthetic */ d s(d dVar, int i10, qn.b bVar, mn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, Object obj) {
            qn.b bVar3;
            mn.v vVar2;
            List list2;
            long j12;
            boolean z12;
            long j13;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i10 = dVar.f23596e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f23597i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f23598o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f23599p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f23600q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f23601r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f23602s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f23603t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f23604u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f23605v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f23606w;
            } else {
                z13 = z11;
            }
            return dVar.r(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23601r;
        }

        @Override // ep.a0
        public mn.v b() {
            return this.f23598o;
        }

        @Override // ep.z
        public List c() {
            return this.f23599p;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23604u;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (this.f23596e == dVar.f23596e && this.f23597i == dVar.f23597i && Intrinsics.areEqual(this.f23598o, dVar.f23598o) && Intrinsics.areEqual(this.f23599p, dVar.f23599p) && this.f23600q == dVar.f23600q && this.f23601r == dVar.f23601r && this.f23602s == dVar.f23602s && Intrinsics.areEqual(this.f23603t, dVar.f23603t) && Intrinsics.areEqual(this.f23604u, dVar.f23604u) && this.f23605v == dVar.f23605v && this.f23606w == dVar.f23606w) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // ep.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = Integer.hashCode(this.f23596e) * 31;
            qn.b bVar = this.f23597i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f23598o.hashCode()) * 31) + this.f23599p.hashCode()) * 31) + Long.hashCode(this.f23600q)) * 31) + Boolean.hashCode(this.f23601r)) * 31) + Long.hashCode(this.f23602s)) * 31;
            x1 x1Var = this.f23603t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f23604u.hashCode()) * 31) + this.f23605v.hashCode()) * 31) + Boolean.hashCode(this.f23606w);
        }

        @Override // ep.a0
        public long i() {
            return this.f23600q;
        }

        @Override // ep.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // ep.z
        public boolean k() {
            return this.f23606w;
        }

        @Override // ep.a0
        public long m() {
            return this.f23602s;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23603t;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23605v;
        }

        @Override // ep.x1
        public List p() {
            return this.f23607x;
        }

        public final d r(int i10, qn.b bVar, mn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public final int t() {
            return this.f23596e;
        }

        public String toString() {
            int i10 = this.f23596e;
            qn.b bVar = this.f23597i;
            mn.v vVar = this.f23598o;
            List list = this.f23599p;
            long j10 = this.f23600q;
            boolean z10 = this.f23601r;
            long j11 = this.f23602s;
            x1 x1Var = this.f23603t;
            s0 s0Var = this.f23604u;
            v.b bVar2 = this.f23605v;
            boolean z11 = this.f23606w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final qn.b u() {
            return this.f23597i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f23596e);
            qn.b bVar = this.f23597i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f23598o, i10);
            List<a1.b> list = this.f23599p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f23600q);
            dest.writeInt(this.f23601r ? 1 : 0);
            dest.writeLong(this.f23602s);
            dest.writeParcelable(this.f23603t, i10);
            this.f23604u.writeToParcel(dest, i10);
            dest.writeString(this.f23605v.name());
            dest.writeInt(this.f23606w ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, qn.b bVar, mn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23596e = i10;
            this.f23597i = bVar;
            this.f23598o = cameraProperties;
            this.f23599p = posesNeeded;
            this.f23600q = j10;
            this.f23601r = z10;
            this.f23602s = j11;
            this.f23603t = x1Var;
            this.f23604u = poseConfigs;
            this.f23605v = cameraFacingMode;
            this.f23606w = z11;
            this.f23607x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f23608e;

        /* renamed from: i  reason: collision with root package name */
        private final long f23609i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f23610o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f23611p;

        /* renamed from: q  reason: collision with root package name */
        private final mn.v f23612q;

        /* renamed from: r  reason: collision with root package name */
        private final long f23613r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f23614s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f23615t;

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
                return new e(arrayList, j11, z11, z12, (mn.v) parcel.readParcelable(e.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(e.class.getClassLoader()), v.b.valueOf(parcel.readString()));
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
        public /* synthetic */ e(java.util.List r2, long r3, boolean r5, boolean r6, mn.v r7, long r8, ep.x1 r10, mn.v.b r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
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
            throw new UnsupportedOperationException("Method not decompiled: ep.x1.e.<init>(java.util.List, long, boolean, boolean, mn.v, long, ep.x1, mn.v$b, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }

        public static /* synthetic */ e s(e eVar, List list, long j10, boolean z10, boolean z11, mn.v vVar, long j11, x1 x1Var, v.b bVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = eVar.f23608e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f23609i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f23610o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f23611p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f23612q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f23613r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f23614s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f23615t;
            }
            long j12 = j11;
            mn.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.r(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final mn.v b() {
            return this.f23612q;
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
            if (Intrinsics.areEqual(this.f23608e, eVar.f23608e) && this.f23609i == eVar.f23609i && this.f23610o == eVar.f23610o && this.f23611p == eVar.f23611p && Intrinsics.areEqual(this.f23612q, eVar.f23612q) && this.f23613r == eVar.f23613r && Intrinsics.areEqual(this.f23614s, eVar.f23614s) && this.f23615t == eVar.f23615t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f23608e.hashCode() * 31) + Long.hashCode(this.f23609i)) * 31) + Boolean.hashCode(this.f23610o)) * 31) + Boolean.hashCode(this.f23611p)) * 31) + this.f23612q.hashCode()) * 31) + Long.hashCode(this.f23613r)) * 31;
            x1 x1Var = this.f23614s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f23615t.hashCode();
        }

        public final long m() {
            return this.f23613r;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23614s;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23615t;
        }

        @Override // ep.x1
        public List p() {
            return this.f23608e;
        }

        public final e r(List selfies, long j10, boolean z10, boolean z11, mn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public final long t() {
            return this.f23609i;
        }

        public String toString() {
            List list = this.f23608e;
            long j10 = this.f23609i;
            boolean z10 = this.f23610o;
            boolean z11 = this.f23611p;
            mn.v vVar = this.f23612q;
            long j11 = this.f23613r;
            x1 x1Var = this.f23614s;
            v.b bVar = this.f23615t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final boolean u() {
            return this.f23610o;
        }

        public final boolean v() {
            return this.f23611p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f23608e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f23609i);
            dest.writeInt(this.f23610o ? 1 : 0);
            dest.writeInt(this.f23611p ? 1 : 0);
            dest.writeParcelable(this.f23612q, i10);
            dest.writeLong(this.f23613r);
            dest.writeParcelable(this.f23614s, i10);
            dest.writeString(this.f23615t.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, mn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23608e = selfies;
            this.f23609i = j10;
            this.f23610o = z10;
            this.f23611p = z11;
            this.f23612q = cameraProperties;
            this.f23613r = j11;
            this.f23614s = x1Var;
            this.f23615t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f23616e;

        /* renamed from: i  reason: collision with root package name */
        private final mn.v f23617i;

        /* renamed from: o  reason: collision with root package name */
        private final long f23618o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f23619p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f23620q;

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
                return new f(arrayList, (mn.v) parcel.readParcelable(f.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(f.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(List selfies, mn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23616e = selfies;
            this.f23617i = cameraProperties;
            this.f23618o = j10;
            this.f23619p = x1Var;
            this.f23620q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23619p;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23620q;
        }

        @Override // ep.x1
        public List p() {
            return this.f23616e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f23616e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f23617i, i10);
            dest.writeLong(this.f23618o);
            dest.writeParcelable(this.f23619p, i10);
            dest.writeString(this.f23620q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f23621d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f23622e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f23623i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f23624o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f23625p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f23626q;

        static {
            g[] a10 = a();
            f23625p = a10;
            f23626q = pr.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f23621d, f23622e, f23623i, f23624o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f23625p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f23627e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f23628i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f23629o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f23630p;

        /* renamed from: q  reason: collision with root package name */
        private final List f23631q;

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
            if (this.f23627e == hVar.f23627e && this.f23628i == hVar.f23628i && Intrinsics.areEqual(this.f23629o, hVar.f23629o) && this.f23630p == hVar.f23630p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f23627e) * 31) + Boolean.hashCode(this.f23628i)) * 31;
            x1 x1Var = this.f23629o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f23630p.hashCode();
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23629o;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23630p;
        }

        @Override // ep.x1
        public List p() {
            return this.f23631q;
        }

        public String toString() {
            boolean z10 = this.f23627e;
            boolean z11 = this.f23628i;
            x1 x1Var = this.f23629o;
            v.b bVar = this.f23630p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f23627e ? 1 : 0);
            dest.writeInt(this.f23628i ? 1 : 0);
            dest.writeParcelable(this.f23629o, i10);
            dest.writeString(this.f23630p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23627e = z10;
            this.f23628i = z11;
            this.f23629o = x1Var;
            this.f23630p = cameraFacingMode;
            this.f23631q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f23632e;

        /* renamed from: i  reason: collision with root package name */
        private final List f23633i;

        /* renamed from: o  reason: collision with root package name */
        private final String f23634o;

        /* renamed from: p  reason: collision with root package name */
        private final mn.v f23635p;

        /* renamed from: q  reason: collision with root package name */
        private final long f23636q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f23637r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f23638s;

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
                return new i(arrayList, arrayList2, parcel.readString(), (mn.v) parcel.readParcelable(i.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(i.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(List selfies, List selfiesToReview, String str, mn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(selfiesToReview, "selfiesToReview");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23632e = selfies;
            this.f23633i = selfiesToReview;
            this.f23634o = str;
            this.f23635p = cameraProperties;
            this.f23636q = j10;
            this.f23637r = x1Var;
            this.f23638s = cameraFacingMode;
        }

        public final mn.v b() {
            return this.f23635p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f23636q;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23637r;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23638s;
        }

        @Override // ep.x1
        public List p() {
            return this.f23632e;
        }

        public final List r() {
            return this.f23633i;
        }

        public final String s() {
            return this.f23634o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f23632e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f23633i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f23634o);
            dest.writeParcelable(this.f23635p, i10);
            dest.writeLong(this.f23636q);
            dest.writeParcelable(this.f23637r, i10);
            dest.writeString(this.f23638s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f23642e;

        /* renamed from: i  reason: collision with root package name */
        private final List f23643i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f23644o;

        /* renamed from: p  reason: collision with root package name */
        private final mn.v f23645p;

        /* renamed from: q  reason: collision with root package name */
        private final long f23646q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f23647r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f23648s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f23649t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f23650u;

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
                mn.v vVar = (mn.v) parcel.readParcelable(cls.getClassLoader());
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
        public k(List selfies, List posesNeeded, boolean z10, mn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23642e = selfies;
            this.f23643i = posesNeeded;
            this.f23644o = z10;
            this.f23645p = cameraProperties;
            this.f23646q = j10;
            this.f23647r = x1Var;
            this.f23648s = poseConfigs;
            this.f23649t = cameraFacingMode;
            this.f23650u = z11;
        }

        public static /* synthetic */ k s(k kVar, List list, List list2, boolean z10, mn.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f23642e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f23643i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f23644o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f23645p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f23646q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f23647r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f23648s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f23649t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f23650u;
            }
            long j11 = j10;
            boolean z12 = z10;
            mn.v vVar2 = vVar;
            return kVar.r(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23644o;
        }

        public final mn.v b() {
            return this.f23645p;
        }

        @Override // ep.z
        public List c() {
            return this.f23643i;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23648s;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (Intrinsics.areEqual(this.f23642e, kVar.f23642e) && Intrinsics.areEqual(this.f23643i, kVar.f23643i) && this.f23644o == kVar.f23644o && Intrinsics.areEqual(this.f23645p, kVar.f23645p) && this.f23646q == kVar.f23646q && Intrinsics.areEqual(this.f23647r, kVar.f23647r) && Intrinsics.areEqual(this.f23648s, kVar.f23648s) && this.f23649t == kVar.f23649t && this.f23650u == kVar.f23650u) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((this.f23642e.hashCode() * 31) + this.f23643i.hashCode()) * 31) + Boolean.hashCode(this.f23644o)) * 31) + this.f23645p.hashCode()) * 31) + Long.hashCode(this.f23646q)) * 31;
            x1 x1Var = this.f23647r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f23648s.hashCode()) * 31) + this.f23649t.hashCode()) * 31) + Boolean.hashCode(this.f23650u);
        }

        @Override // ep.z
        public boolean k() {
            return this.f23650u;
        }

        public final long m() {
            return this.f23646q;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23647r;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23649t;
        }

        @Override // ep.x1
        public List p() {
            return this.f23642e;
        }

        public final k r(List selfies, List posesNeeded, boolean z10, mn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new k(selfies, posesNeeded, z10, cameraProperties, j10, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            List list = this.f23642e;
            List list2 = this.f23643i;
            boolean z10 = this.f23644o;
            mn.v vVar = this.f23645p;
            long j10 = this.f23646q;
            x1 x1Var = this.f23647r;
            s0 s0Var = this.f23648s;
            v.b bVar = this.f23649t;
            boolean z11 = this.f23650u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f23642e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f23643i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f23644o ? 1 : 0);
            dest.writeParcelable(this.f23645p, i10);
            dest.writeLong(this.f23646q);
            dest.writeParcelable(this.f23647r, i10);
            this.f23648s.writeToParcel(dest, i10);
            dest.writeString(this.f23649t.name());
            dest.writeInt(this.f23650u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f23665e;

        /* renamed from: i  reason: collision with root package name */
        private final mn.v f23666i;

        /* renamed from: o  reason: collision with root package name */
        private final long f23667o;

        /* renamed from: p  reason: collision with root package name */
        private final float f23668p;

        /* renamed from: q  reason: collision with root package name */
        private final qn.a f23669q;

        /* renamed from: r  reason: collision with root package name */
        private final List f23670r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f23671s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f23672t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f23673u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f23674v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f23675w;

        /* renamed from: x  reason: collision with root package name */
        private final List f23676x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final m createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                long readLong = parcel.readLong();
                mn.v vVar = (mn.v) parcel.readParcelable(m.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                qn.a aVar = (qn.a) parcel.readParcelable(m.class.getClassLoader());
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
        public m(long j10, mn.v cameraProperties, long j11, float f10, qn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23665e = j10;
            this.f23666i = cameraProperties;
            this.f23667o = j11;
            this.f23668p = f10;
            this.f23669q = aVar;
            this.f23670r = posesNeeded;
            this.f23671s = x1Var;
            this.f23672t = poseConfigs;
            this.f23673u = z10;
            this.f23674v = cameraFacingMode;
            this.f23675w = z11;
            this.f23676x = CollectionsKt.l();
        }

        public static /* synthetic */ m s(m mVar, long j10, mn.v vVar, long j11, float f10, qn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            long j12;
            mn.v vVar2;
            long j13;
            float f11;
            qn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar2;
            boolean z13;
            if ((i10 & 1) != 0) {
                j12 = mVar.f23665e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f23666i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f23667o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f23668p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f23669q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f23670r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f23671s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f23672t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f23673u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f23674v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f23675w;
            } else {
                z13 = z11;
            }
            return mVar.r(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23673u;
        }

        public final mn.v b() {
            return this.f23666i;
        }

        @Override // ep.z
        public List c() {
            return this.f23670r;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23672t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (this.f23665e == mVar.f23665e && Intrinsics.areEqual(this.f23666i, mVar.f23666i) && this.f23667o == mVar.f23667o && Float.compare(this.f23668p, mVar.f23668p) == 0 && Intrinsics.areEqual(this.f23669q, mVar.f23669q) && Intrinsics.areEqual(this.f23670r, mVar.f23670r) && Intrinsics.areEqual(this.f23671s, mVar.f23671s) && Intrinsics.areEqual(this.f23672t, mVar.f23672t) && this.f23673u == mVar.f23673u && this.f23674v == mVar.f23674v && this.f23675w == mVar.f23675w) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // ep.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Long.hashCode(this.f23665e) * 31) + this.f23666i.hashCode()) * 31) + Long.hashCode(this.f23667o)) * 31) + Float.hashCode(this.f23668p)) * 31;
            qn.a aVar = this.f23669q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f23670r.hashCode()) * 31;
            x1 x1Var = this.f23671s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f23672t.hashCode()) * 31) + Boolean.hashCode(this.f23673u)) * 31) + this.f23674v.hashCode()) * 31) + Boolean.hashCode(this.f23675w);
        }

        public final long i() {
            return this.f23665e;
        }

        @Override // ep.z
        public boolean k() {
            return this.f23675w;
        }

        public final long m() {
            return this.f23667o;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23671s;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23674v;
        }

        @Override // ep.x1
        public List p() {
            return this.f23676x;
        }

        public final m r(long j10, mn.v cameraProperties, long j11, float f10, qn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final qn.a t() {
            return this.f23669q;
        }

        public String toString() {
            long j10 = this.f23665e;
            mn.v vVar = this.f23666i;
            long j11 = this.f23667o;
            float f10 = this.f23668p;
            qn.a aVar = this.f23669q;
            List list = this.f23670r;
            x1 x1Var = this.f23671s;
            s0 s0Var = this.f23672t;
            boolean z10 = this.f23673u;
            v.b bVar = this.f23674v;
            boolean z11 = this.f23675w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final float u() {
            return this.f23668p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f23665e);
            dest.writeParcelable(this.f23666i, i10);
            dest.writeLong(this.f23667o);
            dest.writeFloat(this.f23668p);
            dest.writeParcelable(this.f23669q, i10);
            List<a1.b> list = this.f23670r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f23671s, i10);
            this.f23672t.writeToParcel(dest, i10);
            dest.writeInt(this.f23673u ? 1 : 0);
            dest.writeString(this.f23674v.name());
            dest.writeInt(this.f23675w ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f23677e;

        /* renamed from: i  reason: collision with root package name */
        private final String f23678i;

        /* renamed from: o  reason: collision with root package name */
        private final mn.v f23679o;

        /* renamed from: p  reason: collision with root package name */
        private final long f23680p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f23681q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f23682r;

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
                return new n(arrayList, parcel.readString(), (mn.v) parcel.readParcelable(n.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(n.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final n[] newArray(int i10) {
                return new n[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(List selfies, String str, mn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23677e = selfies;
            this.f23678i = str;
            this.f23679o = cameraProperties;
            this.f23680p = j10;
            this.f23681q = x1Var;
            this.f23682r = cameraFacingMode;
        }

        public final mn.v b() {
            return this.f23679o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f23680p;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23681q;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23682r;
        }

        @Override // ep.x1
        public List p() {
            return this.f23677e;
        }

        public final String r() {
            return this.f23678i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f23677e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f23678i);
            dest.writeParcelable(this.f23679o, i10);
            dest.writeLong(this.f23680p);
            dest.writeParcelable(this.f23681q, i10);
            dest.writeString(this.f23682r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f23683e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f23684i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f23685o;

        /* renamed from: p  reason: collision with root package name */
        private final List f23686p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f23687q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f23688r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f23689s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f23690t;

        /* renamed from: u  reason: collision with root package name */
        private final List f23691u;

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
                z10 = oVar.f23683e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f23684i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f23685o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f23686p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f23687q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f23688r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f23689s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f23690t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.r(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23688r;
        }

        @Override // ep.z
        public List c() {
            return this.f23686p;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23687q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (this.f23683e == oVar.f23683e && this.f23684i == oVar.f23684i && Intrinsics.areEqual(this.f23685o, oVar.f23685o) && Intrinsics.areEqual(this.f23686p, oVar.f23686p) && Intrinsics.areEqual(this.f23687q, oVar.f23687q) && this.f23688r == oVar.f23688r && this.f23689s == oVar.f23689s && this.f23690t == oVar.f23690t) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f23683e) * 31) + Boolean.hashCode(this.f23684i)) * 31;
            x1 x1Var = this.f23685o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f23686p.hashCode()) * 31) + this.f23687q.hashCode()) * 31) + Boolean.hashCode(this.f23688r)) * 31) + this.f23689s.hashCode()) * 31) + Boolean.hashCode(this.f23690t);
        }

        @Override // ep.z
        public boolean k() {
            return this.f23690t;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23685o;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23689s;
        }

        @Override // ep.x1
        public List p() {
            return this.f23691u;
        }

        public final o r(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public final boolean t() {
            return this.f23684i;
        }

        public String toString() {
            boolean z10 = this.f23683e;
            boolean z11 = this.f23684i;
            x1 x1Var = this.f23685o;
            List list = this.f23686p;
            s0 s0Var = this.f23687q;
            boolean z12 = this.f23688r;
            v.b bVar = this.f23689s;
            boolean z13 = this.f23690t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final boolean u() {
            return this.f23683e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f23683e ? 1 : 0);
            dest.writeInt(this.f23684i ? 1 : 0);
            dest.writeParcelable(this.f23685o, i10);
            List<a1.b> list = this.f23686p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f23687q.writeToParcel(dest, i10);
            dest.writeInt(this.f23688r ? 1 : 0);
            dest.writeString(this.f23689s.name());
            dest.writeInt(this.f23690t ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23683e = z10;
            this.f23684i = z11;
            this.f23685o = x1Var;
            this.f23686p = posesNeeded;
            this.f23687q = poseConfigs;
            this.f23688r = z12;
            this.f23689s = cameraFacingMode;
            this.f23690t = z13;
            this.f23691u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f23692e;

        /* renamed from: i  reason: collision with root package name */
        private final mn.v f23693i;

        /* renamed from: o  reason: collision with root package name */
        private final long f23694o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f23695p;

        /* renamed from: q  reason: collision with root package name */
        private final List f23696q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f23697r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f23698s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f23699t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f23700u;

        /* renamed from: v  reason: collision with root package name */
        private final List f23701v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final p createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                mn.v vVar = (mn.v) parcel.readParcelable(p.class.getClassLoader());
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
        public p(String str, mn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23692e = str;
            this.f23693i = cameraProperties;
            this.f23694o = j10;
            this.f23695p = x1Var;
            this.f23696q = posesNeeded;
            this.f23697r = poseConfigs;
            this.f23698s = z10;
            this.f23699t = cameraFacingMode;
            this.f23700u = z11;
            this.f23701v = CollectionsKt.l();
        }

        public static /* synthetic */ p s(p pVar, String str, mn.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f23692e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f23693i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f23694o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f23695p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f23696q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f23697r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f23698s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f23699t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f23700u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.r(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23698s;
        }

        @Override // ep.z
        public List c() {
            return this.f23696q;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23697r;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (Intrinsics.areEqual(this.f23692e, pVar.f23692e) && Intrinsics.areEqual(this.f23693i, pVar.f23693i) && this.f23694o == pVar.f23694o && Intrinsics.areEqual(this.f23695p, pVar.f23695p) && Intrinsics.areEqual(this.f23696q, pVar.f23696q) && Intrinsics.areEqual(this.f23697r, pVar.f23697r) && this.f23698s == pVar.f23698s && this.f23699t == pVar.f23699t && this.f23700u == pVar.f23700u) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            String str = this.f23692e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f23693i.hashCode()) * 31) + Long.hashCode(this.f23694o)) * 31;
            x1 x1Var = this.f23695p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f23696q.hashCode()) * 31) + this.f23697r.hashCode()) * 31) + Boolean.hashCode(this.f23698s)) * 31) + this.f23699t.hashCode()) * 31) + Boolean.hashCode(this.f23700u);
        }

        @Override // ep.z
        public boolean k() {
            return this.f23700u;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23695p;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23699t;
        }

        @Override // ep.x1
        public List p() {
            return this.f23701v;
        }

        public final p r(String str, mn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            String str = this.f23692e;
            mn.v vVar = this.f23693i;
            long j10 = this.f23694o;
            x1 x1Var = this.f23695p;
            List list = this.f23696q;
            s0 s0Var = this.f23697r;
            boolean z10 = this.f23698s;
            v.b bVar = this.f23699t;
            boolean z11 = this.f23700u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f23692e);
            dest.writeParcelable(this.f23693i, i10);
            dest.writeLong(this.f23694o);
            dest.writeParcelable(this.f23695p, i10);
            List<a1.b> list = this.f23696q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f23697r.writeToParcel(dest, i10);
            dest.writeInt(this.f23698s ? 1 : 0);
            dest.writeString(this.f23699t.name());
            dest.writeInt(this.f23700u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f23702e;

        /* renamed from: i  reason: collision with root package name */
        private final String f23703i;

        /* renamed from: o  reason: collision with root package name */
        private final mn.v f23704o;

        /* renamed from: p  reason: collision with root package name */
        private final long f23705p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f23706q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f23707r;

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
                return new q(arrayList, parcel.readString(), (mn.v) parcel.readParcelable(q.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(q.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final q[] newArray(int i10) {
                return new q[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(List selfies, String webRtcObjectId, mn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(webRtcObjectId, "webRtcObjectId");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23702e = selfies;
            this.f23703i = webRtcObjectId;
            this.f23704o = cameraProperties;
            this.f23705p = j10;
            this.f23706q = x1Var;
            this.f23707r = cameraFacingMode;
        }

        public final mn.v b() {
            return this.f23704o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f23705p;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23706q;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23707r;
        }

        @Override // ep.x1
        public List p() {
            return this.f23702e;
        }

        public final String r() {
            return this.f23703i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f23702e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f23703i);
            dest.writeParcelable(this.f23704o, i10);
            dest.writeLong(this.f23705p);
            dest.writeParcelable(this.f23706q, i10);
            dest.writeString(this.f23707r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 n();

    public abstract v.b o();

    public abstract List p();

    public final void q(boolean z10) {
        this.f23562d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f23639e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f23640i;

        /* renamed from: o  reason: collision with root package name */
        private final List f23641o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f39319d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23639e;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23640i;
        }

        @Override // ep.x1
        public List p() {
            return this.f23641o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f23639e, i10);
            dest.writeString(this.f23640i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23639e = x1Var;
            this.f23640i = cameraFacingMode;
            this.f23641o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f23651e;

        /* renamed from: i  reason: collision with root package name */
        private final qn.b f23652i;

        /* renamed from: o  reason: collision with root package name */
        private final float f23653o;

        /* renamed from: p  reason: collision with root package name */
        private final qn.a f23654p;

        /* renamed from: q  reason: collision with root package name */
        private final List f23655q;

        /* renamed from: r  reason: collision with root package name */
        private final long f23656r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f23657s;

        /* renamed from: t  reason: collision with root package name */
        private final long f23658t;

        /* renamed from: u  reason: collision with root package name */
        private final mn.v f23659u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f23660v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f23661w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f23662x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f23663y;

        /* renamed from: z  reason: collision with root package name */
        private final List f23664z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                boolean z10;
                qn.b valueOf;
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
                    valueOf = qn.b.valueOf(parcel.readString());
                }
                qn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                qn.a aVar = (qn.a) parcel.readParcelable(l.class.getClassLoader());
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
                mn.v vVar = (mn.v) parcel.readParcelable(l.class.getClassLoader());
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

        public /* synthetic */ l(boolean z10, qn.b bVar, float f10, qn.a aVar, List list, long j10, boolean z11, long j11, mn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? qn.b.f47521d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
        }

        public static /* synthetic */ l s(l lVar, boolean z10, qn.b bVar, float f10, qn.a aVar, List list, long j10, boolean z11, long j11, mn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, Object obj) {
            boolean z13;
            qn.b bVar3;
            float f11;
            qn.a aVar2;
            List list2;
            long j12;
            boolean z14;
            long j13;
            mn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z15;
            if ((i10 & 1) != 0) {
                z13 = lVar.f23651e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f23652i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f23653o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f23654p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f23655q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f23656r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f23657s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f23658t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f23659u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f23660v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f23661w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f23662x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f23663y;
            } else {
                z15 = z12;
            }
            return lVar.r(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23657s;
        }

        @Override // ep.a0
        public mn.v b() {
            return this.f23659u;
        }

        @Override // ep.z
        public List c() {
            return this.f23655q;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23661w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (this.f23651e == lVar.f23651e && this.f23652i == lVar.f23652i && Float.compare(this.f23653o, lVar.f23653o) == 0 && Intrinsics.areEqual(this.f23654p, lVar.f23654p) && Intrinsics.areEqual(this.f23655q, lVar.f23655q) && this.f23656r == lVar.f23656r && this.f23657s == lVar.f23657s && this.f23658t == lVar.f23658t && Intrinsics.areEqual(this.f23659u, lVar.f23659u) && Intrinsics.areEqual(this.f23660v, lVar.f23660v) && Intrinsics.areEqual(this.f23661w, lVar.f23661w) && this.f23662x == lVar.f23662x && this.f23663y == lVar.f23663y) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // ep.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Boolean.hashCode(this.f23651e) * 31;
            qn.b bVar = this.f23652i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f23653o)) * 31;
            qn.a aVar = this.f23654p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f23655q.hashCode()) * 31) + Long.hashCode(this.f23656r)) * 31) + Boolean.hashCode(this.f23657s)) * 31) + Long.hashCode(this.f23658t)) * 31) + this.f23659u.hashCode()) * 31;
            x1 x1Var = this.f23660v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f23661w.hashCode()) * 31) + this.f23662x.hashCode()) * 31) + Boolean.hashCode(this.f23663y);
        }

        @Override // ep.a0
        public long i() {
            return this.f23656r;
        }

        @Override // ep.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // ep.z
        public boolean k() {
            return this.f23663y;
        }

        @Override // ep.a0
        public long m() {
            return this.f23658t;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23660v;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23662x;
        }

        @Override // ep.x1
        public List p() {
            return this.f23664z;
        }

        public final l r(boolean z10, qn.b bVar, float f10, qn.a aVar, List posesNeeded, long j10, boolean z11, long j11, mn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public final qn.a t() {
            return this.f23654p;
        }

        public String toString() {
            boolean z10 = this.f23651e;
            qn.b bVar = this.f23652i;
            float f10 = this.f23653o;
            qn.a aVar = this.f23654p;
            List list = this.f23655q;
            long j10 = this.f23656r;
            boolean z11 = this.f23657s;
            long j11 = this.f23658t;
            mn.v vVar = this.f23659u;
            x1 x1Var = this.f23660v;
            s0 s0Var = this.f23661w;
            v.b bVar2 = this.f23662x;
            boolean z12 = this.f23663y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final float u() {
            return this.f23653o;
        }

        public final qn.b v() {
            return this.f23652i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f23651e ? 1 : 0);
            qn.b bVar = this.f23652i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f23653o);
            dest.writeParcelable(this.f23654p, i10);
            List<a1.b> list = this.f23655q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f23656r);
            dest.writeInt(this.f23657s ? 1 : 0);
            dest.writeLong(this.f23658t);
            dest.writeParcelable(this.f23659u, i10);
            dest.writeParcelable(this.f23660v, i10);
            this.f23661w.writeToParcel(dest, i10);
            dest.writeString(this.f23662x.name());
            dest.writeInt(this.f23663y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, qn.b bVar, float f10, qn.a aVar, List posesNeeded, long j10, boolean z11, long j11, mn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f23651e = z10;
            this.f23652i = bVar;
            this.f23653o = f10;
            this.f23654p = aVar;
            this.f23655q = posesNeeded;
            this.f23656r = j10;
            this.f23657s = z11;
            this.f23658t = j11;
            this.f23659u = cameraProperties;
            this.f23660v = x1Var;
            this.f23661w = poseConfigs;
            this.f23662x = cameraFacingMode;
            this.f23663y = z12;
            this.f23664z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0306a();

        /* renamed from: e  reason: collision with root package name */
        private final qn.b f23563e;

        /* renamed from: i  reason: collision with root package name */
        private final float f23564i;

        /* renamed from: o  reason: collision with root package name */
        private final qn.a f23565o;

        /* renamed from: p  reason: collision with root package name */
        private final List f23566p;

        /* renamed from: q  reason: collision with root package name */
        private final List f23567q;

        /* renamed from: r  reason: collision with root package name */
        private final long f23568r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f23569s;

        /* renamed from: t  reason: collision with root package name */
        private final long f23570t;

        /* renamed from: u  reason: collision with root package name */
        private final mn.v f23571u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f23572v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f23573w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f23574x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f23575y;

        /* renamed from: z  reason: collision with root package name */
        private final g f23576z;

        /* renamed from: ep.x1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0306a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                qn.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = qn.b.valueOf(parcel.readString());
                }
                qn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                qn.a aVar = (qn.a) parcel.readParcelable(a.class.getClassLoader());
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
                mn.v vVar = (mn.v) parcel.readParcelable(a.class.getClassLoader());
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

        public /* synthetic */ a(qn.b bVar, float f10, qn.a aVar, List list, List list2, long j10, boolean z10, long j11, mn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f23621d : gVar);
        }

        public static /* synthetic */ a s(a aVar, qn.b bVar, float f10, qn.a aVar2, List list, List list2, long j10, boolean z10, long j11, mn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, Object obj) {
            qn.b bVar3;
            float f11;
            qn.a aVar3;
            List list3;
            List list4;
            long j12;
            boolean z12;
            long j13;
            mn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            g gVar2;
            if ((i10 & 1) != 0) {
                bVar3 = aVar.f23563e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f23564i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f23565o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f23566p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f23567q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f23568r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f23569s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f23570t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f23571u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f23572v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f23573w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f23574x;
            } else {
                bVar4 = bVar2;
            }
            qn.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f23575y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f23576z;
            } else {
                gVar2 = gVar;
            }
            return aVar.r(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        @Override // ep.z
        public boolean a() {
            return this.f23569s;
        }

        @Override // ep.a0
        public mn.v b() {
            return this.f23571u;
        }

        @Override // ep.z
        public List c() {
            return this.f23567q;
        }

        @Override // ep.z
        public s0 d() {
            return this.f23573w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ep.z
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
            if (this.f23563e == aVar.f23563e && Float.compare(this.f23564i, aVar.f23564i) == 0 && Intrinsics.areEqual(this.f23565o, aVar.f23565o) && Intrinsics.areEqual(this.f23566p, aVar.f23566p) && Intrinsics.areEqual(this.f23567q, aVar.f23567q) && this.f23568r == aVar.f23568r && this.f23569s == aVar.f23569s && this.f23570t == aVar.f23570t && Intrinsics.areEqual(this.f23571u, aVar.f23571u) && Intrinsics.areEqual(this.f23572v, aVar.f23572v) && Intrinsics.areEqual(this.f23573w, aVar.f23573w) && this.f23574x == aVar.f23574x && this.f23575y == aVar.f23575y && this.f23576z == aVar.f23576z) {
                return true;
            }
            return false;
        }

        @Override // ep.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // ep.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            qn.b bVar = this.f23563e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f23564i)) * 31;
            qn.a aVar = this.f23565o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f23566p.hashCode()) * 31) + this.f23567q.hashCode()) * 31) + Long.hashCode(this.f23568r)) * 31) + Boolean.hashCode(this.f23569s)) * 31) + Long.hashCode(this.f23570t)) * 31) + this.f23571u.hashCode()) * 31;
            x1 x1Var = this.f23572v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f23573w.hashCode()) * 31) + this.f23574x.hashCode()) * 31) + Boolean.hashCode(this.f23575y)) * 31) + this.f23576z.hashCode();
        }

        @Override // ep.a0
        public long i() {
            return this.f23568r;
        }

        @Override // ep.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // ep.z
        public boolean k() {
            return this.f23575y;
        }

        @Override // ep.a0
        public long m() {
            return this.f23570t;
        }

        @Override // ep.x1
        public x1 n() {
            return this.f23572v;
        }

        @Override // ep.x1
        public v.b o() {
            return this.f23574x;
        }

        @Override // ep.x1
        public List p() {
            return this.f23566p;
        }

        public final a r(qn.b bVar, float f10, qn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, mn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            return new a(bVar, f10, aVar, selfies, posesNeeded, j10, z10, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z11, flashState);
        }

        public final qn.a t() {
            return this.f23565o;
        }

        public String toString() {
            qn.b bVar = this.f23563e;
            float f10 = this.f23564i;
            qn.a aVar = this.f23565o;
            List list = this.f23566p;
            List list2 = this.f23567q;
            long j10 = this.f23568r;
            boolean z10 = this.f23569s;
            long j11 = this.f23570t;
            mn.v vVar = this.f23571u;
            x1 x1Var = this.f23572v;
            s0 s0Var = this.f23573w;
            v.b bVar2 = this.f23574x;
            boolean z11 = this.f23575y;
            g gVar = this.f23576z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final g u() {
            return this.f23576z;
        }

        public final float v() {
            return this.f23564i;
        }

        public final qn.b w() {
            return this.f23563e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            qn.b bVar = this.f23563e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f23564i);
            dest.writeParcelable(this.f23565o, i10);
            List<Parcelable> list = this.f23566p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f23567q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f23568r);
            dest.writeInt(this.f23569s ? 1 : 0);
            dest.writeLong(this.f23570t);
            dest.writeParcelable(this.f23571u, i10);
            dest.writeParcelable(this.f23572v, i10);
            this.f23573w.writeToParcel(dest, i10);
            dest.writeString(this.f23574x.name());
            dest.writeInt(this.f23575y ? 1 : 0);
            dest.writeString(this.f23576z.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(qn.b bVar, float f10, qn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, mn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            this.f23563e = bVar;
            this.f23564i = f10;
            this.f23565o = aVar;
            this.f23566p = selfies;
            this.f23567q = posesNeeded;
            this.f23568r = j10;
            this.f23569s = z10;
            this.f23570t = j11;
            this.f23571u = cameraProperties;
            this.f23572v = x1Var;
            this.f23573w = poseConfigs;
            this.f23574x = cameraFacingMode;
            this.f23575y = z11;
            this.f23576z = flashState;
        }
    }
}
