package hp;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import hp.a0;
import hp.a1;
import hp.z;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import pn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f27688d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f27703e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f27704i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f27705o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f27706p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f27707q;

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
            this.f27703e = nextState;
            this.f27704i = completedPose;
            this.f27705o = x1Var;
            this.f27706p = cameraFacingMode;
            this.f27707q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27705o;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27706p;
        }

        @Override // hp.x1
        public List p() {
            return this.f27703e.p();
        }

        public final a1.b r() {
            return this.f27704i;
        }

        public final x1 s() {
            return this.f27703e;
        }

        public final boolean t() {
            return this.f27707q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f27703e, i10);
            dest.writeString(this.f27704i.name());
            dest.writeParcelable(this.f27705o, i10);
            dest.writeString(this.f27706p.name());
            dest.writeInt(this.f27707q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f27708e;

        /* renamed from: i  reason: collision with root package name */
        private final tn.b f27709i;

        /* renamed from: o  reason: collision with root package name */
        private final long f27710o;

        /* renamed from: p  reason: collision with root package name */
        private final pn.v f27711p;

        /* renamed from: q  reason: collision with root package name */
        private final long f27712q;

        /* renamed from: r  reason: collision with root package name */
        private final float f27713r;

        /* renamed from: s  reason: collision with root package name */
        private final tn.a f27714s;

        /* renamed from: t  reason: collision with root package name */
        private final List f27715t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f27716u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f27717v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f27718w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f27719x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f27720y;

        /* renamed from: z  reason: collision with root package name */
        private final List f27721z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                tn.b valueOf;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = tn.b.valueOf(parcel.readString());
                }
                tn.b bVar = valueOf;
                long readLong = parcel.readLong();
                pn.v vVar = (pn.v) parcel.readParcelable(c.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                tn.a aVar = (tn.a) parcel.readParcelable(c.class.getClassLoader());
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

        public /* synthetic */ c(int i10, tn.b bVar, long j10, pn.v vVar, long j11, float f10, tn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, j10, vVar, j11, f10, aVar, list, x1Var, s0Var, z10, bVar2, z11);
        }

        public static /* synthetic */ c s(c cVar, int i10, tn.b bVar, long j10, pn.v vVar, long j11, float f10, tn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, Object obj) {
            int i12;
            tn.b bVar3;
            long j12;
            pn.v vVar2;
            long j13;
            float f11;
            tn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i12 = cVar.f27708e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f27709i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f27710o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f27711p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f27712q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f27713r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f27714s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f27715t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f27716u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f27717v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f27718w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f27719x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f27720y;
            } else {
                z13 = z11;
            }
            return cVar.r(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27718w;
        }

        public final pn.v b() {
            return this.f27711p;
        }

        @Override // hp.z
        public List c() {
            return this.f27715t;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27717v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (this.f27708e == cVar.f27708e && this.f27709i == cVar.f27709i && this.f27710o == cVar.f27710o && Intrinsics.areEqual(this.f27711p, cVar.f27711p) && this.f27712q == cVar.f27712q && Float.compare(this.f27713r, cVar.f27713r) == 0 && Intrinsics.areEqual(this.f27714s, cVar.f27714s) && Intrinsics.areEqual(this.f27715t, cVar.f27715t) && Intrinsics.areEqual(this.f27716u, cVar.f27716u) && Intrinsics.areEqual(this.f27717v, cVar.f27717v) && this.f27718w == cVar.f27718w && this.f27719x == cVar.f27719x && this.f27720y == cVar.f27720y) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // hp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Integer.hashCode(this.f27708e) * 31;
            tn.b bVar = this.f27709i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f27710o)) * 31) + this.f27711p.hashCode()) * 31) + Long.hashCode(this.f27712q)) * 31) + Float.hashCode(this.f27713r)) * 31;
            tn.a aVar = this.f27714s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f27715t.hashCode()) * 31;
            x1 x1Var = this.f27716u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f27717v.hashCode()) * 31) + Boolean.hashCode(this.f27718w)) * 31) + this.f27719x.hashCode()) * 31) + Boolean.hashCode(this.f27720y);
        }

        public final long i() {
            return this.f27710o;
        }

        @Override // hp.z
        public boolean k() {
            return this.f27720y;
        }

        public final long m() {
            return this.f27712q;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27716u;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27719x;
        }

        @Override // hp.x1
        public List p() {
            return this.f27721z;
        }

        public final c r(int i10, tn.b bVar, long j10, pn.v cameraProperties, long j11, float f10, tn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final tn.a t() {
            return this.f27714s;
        }

        public String toString() {
            int i10 = this.f27708e;
            tn.b bVar = this.f27709i;
            long j10 = this.f27710o;
            pn.v vVar = this.f27711p;
            long j11 = this.f27712q;
            float f10 = this.f27713r;
            tn.a aVar = this.f27714s;
            List list = this.f27715t;
            x1 x1Var = this.f27716u;
            s0 s0Var = this.f27717v;
            boolean z10 = this.f27718w;
            v.b bVar2 = this.f27719x;
            boolean z11 = this.f27720y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final int u() {
            return this.f27708e;
        }

        public final float v() {
            return this.f27713r;
        }

        public final tn.b w() {
            return this.f27709i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f27708e);
            tn.b bVar = this.f27709i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f27710o);
            dest.writeParcelable(this.f27711p, i10);
            dest.writeLong(this.f27712q);
            dest.writeFloat(this.f27713r);
            dest.writeParcelable(this.f27714s, i10);
            List<a1.b> list = this.f27715t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f27716u, i10);
            this.f27717v.writeToParcel(dest, i10);
            dest.writeInt(this.f27718w ? 1 : 0);
            dest.writeString(this.f27719x.name());
            dest.writeInt(this.f27720y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, tn.b bVar, long j10, pn.v cameraProperties, long j11, float f10, tn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27708e = i10;
            this.f27709i = bVar;
            this.f27710o = j10;
            this.f27711p = cameraProperties;
            this.f27712q = j11;
            this.f27713r = f10;
            this.f27714s = aVar;
            this.f27715t = posesNeeded;
            this.f27716u = x1Var;
            this.f27717v = poseConfigs;
            this.f27718w = z10;
            this.f27719x = cameraFacingMode;
            this.f27720y = z11;
            this.f27721z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f27722e;

        /* renamed from: i  reason: collision with root package name */
        private final tn.b f27723i;

        /* renamed from: o  reason: collision with root package name */
        private final pn.v f27724o;

        /* renamed from: p  reason: collision with root package name */
        private final List f27725p;

        /* renamed from: q  reason: collision with root package name */
        private final long f27726q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f27727r;

        /* renamed from: s  reason: collision with root package name */
        private final long f27728s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f27729t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f27730u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f27731v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f27732w;

        /* renamed from: x  reason: collision with root package name */
        private final List f27733x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                tn.b valueOf;
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
                    valueOf = tn.b.valueOf(parcel.readString());
                }
                tn.b bVar = valueOf;
                pn.v vVar = (pn.v) parcel.readParcelable(d.class.getClassLoader());
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

        public /* synthetic */ d(int i10, tn.b bVar, pn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, vVar, list, j10, (i11 & 32) != 0 ? true : z10, j11, x1Var, s0Var, bVar2, z11);
        }

        public static /* synthetic */ d s(d dVar, int i10, tn.b bVar, pn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, Object obj) {
            tn.b bVar3;
            pn.v vVar2;
            List list2;
            long j12;
            boolean z12;
            long j13;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i10 = dVar.f27722e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f27723i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f27724o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f27725p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f27726q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f27727r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f27728s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f27729t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f27730u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f27731v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f27732w;
            } else {
                z13 = z11;
            }
            return dVar.r(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27727r;
        }

        @Override // hp.a0
        public pn.v b() {
            return this.f27724o;
        }

        @Override // hp.z
        public List c() {
            return this.f27725p;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27730u;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (this.f27722e == dVar.f27722e && this.f27723i == dVar.f27723i && Intrinsics.areEqual(this.f27724o, dVar.f27724o) && Intrinsics.areEqual(this.f27725p, dVar.f27725p) && this.f27726q == dVar.f27726q && this.f27727r == dVar.f27727r && this.f27728s == dVar.f27728s && Intrinsics.areEqual(this.f27729t, dVar.f27729t) && Intrinsics.areEqual(this.f27730u, dVar.f27730u) && this.f27731v == dVar.f27731v && this.f27732w == dVar.f27732w) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // hp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = Integer.hashCode(this.f27722e) * 31;
            tn.b bVar = this.f27723i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f27724o.hashCode()) * 31) + this.f27725p.hashCode()) * 31) + Long.hashCode(this.f27726q)) * 31) + Boolean.hashCode(this.f27727r)) * 31) + Long.hashCode(this.f27728s)) * 31;
            x1 x1Var = this.f27729t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f27730u.hashCode()) * 31) + this.f27731v.hashCode()) * 31) + Boolean.hashCode(this.f27732w);
        }

        @Override // hp.a0
        public long i() {
            return this.f27726q;
        }

        @Override // hp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // hp.z
        public boolean k() {
            return this.f27732w;
        }

        @Override // hp.a0
        public long m() {
            return this.f27728s;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27729t;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27731v;
        }

        @Override // hp.x1
        public List p() {
            return this.f27733x;
        }

        public final d r(int i10, tn.b bVar, pn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public final int t() {
            return this.f27722e;
        }

        public String toString() {
            int i10 = this.f27722e;
            tn.b bVar = this.f27723i;
            pn.v vVar = this.f27724o;
            List list = this.f27725p;
            long j10 = this.f27726q;
            boolean z10 = this.f27727r;
            long j11 = this.f27728s;
            x1 x1Var = this.f27729t;
            s0 s0Var = this.f27730u;
            v.b bVar2 = this.f27731v;
            boolean z11 = this.f27732w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final tn.b u() {
            return this.f27723i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f27722e);
            tn.b bVar = this.f27723i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f27724o, i10);
            List<a1.b> list = this.f27725p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f27726q);
            dest.writeInt(this.f27727r ? 1 : 0);
            dest.writeLong(this.f27728s);
            dest.writeParcelable(this.f27729t, i10);
            this.f27730u.writeToParcel(dest, i10);
            dest.writeString(this.f27731v.name());
            dest.writeInt(this.f27732w ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, tn.b bVar, pn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27722e = i10;
            this.f27723i = bVar;
            this.f27724o = cameraProperties;
            this.f27725p = posesNeeded;
            this.f27726q = j10;
            this.f27727r = z10;
            this.f27728s = j11;
            this.f27729t = x1Var;
            this.f27730u = poseConfigs;
            this.f27731v = cameraFacingMode;
            this.f27732w = z11;
            this.f27733x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f27734e;

        /* renamed from: i  reason: collision with root package name */
        private final long f27735i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f27736o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f27737p;

        /* renamed from: q  reason: collision with root package name */
        private final pn.v f27738q;

        /* renamed from: r  reason: collision with root package name */
        private final long f27739r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f27740s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f27741t;

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
                return new e(arrayList, j11, z11, z12, (pn.v) parcel.readParcelable(e.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(e.class.getClassLoader()), v.b.valueOf(parcel.readString()));
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
        public /* synthetic */ e(java.util.List r2, long r3, boolean r5, boolean r6, pn.v r7, long r8, hp.x1 r10, pn.v.b r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
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
            throw new UnsupportedOperationException("Method not decompiled: hp.x1.e.<init>(java.util.List, long, boolean, boolean, pn.v, long, hp.x1, pn.v$b, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }

        public static /* synthetic */ e s(e eVar, List list, long j10, boolean z10, boolean z11, pn.v vVar, long j11, x1 x1Var, v.b bVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = eVar.f27734e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f27735i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f27736o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f27737p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f27738q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f27739r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f27740s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f27741t;
            }
            long j12 = j11;
            pn.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.r(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final pn.v b() {
            return this.f27738q;
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
            if (Intrinsics.areEqual(this.f27734e, eVar.f27734e) && this.f27735i == eVar.f27735i && this.f27736o == eVar.f27736o && this.f27737p == eVar.f27737p && Intrinsics.areEqual(this.f27738q, eVar.f27738q) && this.f27739r == eVar.f27739r && Intrinsics.areEqual(this.f27740s, eVar.f27740s) && this.f27741t == eVar.f27741t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f27734e.hashCode() * 31) + Long.hashCode(this.f27735i)) * 31) + Boolean.hashCode(this.f27736o)) * 31) + Boolean.hashCode(this.f27737p)) * 31) + this.f27738q.hashCode()) * 31) + Long.hashCode(this.f27739r)) * 31;
            x1 x1Var = this.f27740s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f27741t.hashCode();
        }

        public final long m() {
            return this.f27739r;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27740s;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27741t;
        }

        @Override // hp.x1
        public List p() {
            return this.f27734e;
        }

        public final e r(List selfies, long j10, boolean z10, boolean z11, pn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public final long t() {
            return this.f27735i;
        }

        public String toString() {
            List list = this.f27734e;
            long j10 = this.f27735i;
            boolean z10 = this.f27736o;
            boolean z11 = this.f27737p;
            pn.v vVar = this.f27738q;
            long j11 = this.f27739r;
            x1 x1Var = this.f27740s;
            v.b bVar = this.f27741t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final boolean u() {
            return this.f27736o;
        }

        public final boolean v() {
            return this.f27737p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f27734e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f27735i);
            dest.writeInt(this.f27736o ? 1 : 0);
            dest.writeInt(this.f27737p ? 1 : 0);
            dest.writeParcelable(this.f27738q, i10);
            dest.writeLong(this.f27739r);
            dest.writeParcelable(this.f27740s, i10);
            dest.writeString(this.f27741t.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, pn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27734e = selfies;
            this.f27735i = j10;
            this.f27736o = z10;
            this.f27737p = z11;
            this.f27738q = cameraProperties;
            this.f27739r = j11;
            this.f27740s = x1Var;
            this.f27741t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f27742e;

        /* renamed from: i  reason: collision with root package name */
        private final pn.v f27743i;

        /* renamed from: o  reason: collision with root package name */
        private final long f27744o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f27745p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f27746q;

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
                return new f(arrayList, (pn.v) parcel.readParcelable(f.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(f.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(List selfies, pn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27742e = selfies;
            this.f27743i = cameraProperties;
            this.f27744o = j10;
            this.f27745p = x1Var;
            this.f27746q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27745p;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27746q;
        }

        @Override // hp.x1
        public List p() {
            return this.f27742e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f27742e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f27743i, i10);
            dest.writeLong(this.f27744o);
            dest.writeParcelable(this.f27745p, i10);
            dest.writeString(this.f27746q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f27747d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f27748e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f27749i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f27750o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f27751p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27752q;

        static {
            g[] a10 = a();
            f27751p = a10;
            f27752q = sr.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f27747d, f27748e, f27749i, f27750o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f27751p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f27753e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f27754i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f27755o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f27756p;

        /* renamed from: q  reason: collision with root package name */
        private final List f27757q;

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
            if (this.f27753e == hVar.f27753e && this.f27754i == hVar.f27754i && Intrinsics.areEqual(this.f27755o, hVar.f27755o) && this.f27756p == hVar.f27756p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f27753e) * 31) + Boolean.hashCode(this.f27754i)) * 31;
            x1 x1Var = this.f27755o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f27756p.hashCode();
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27755o;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27756p;
        }

        @Override // hp.x1
        public List p() {
            return this.f27757q;
        }

        public String toString() {
            boolean z10 = this.f27753e;
            boolean z11 = this.f27754i;
            x1 x1Var = this.f27755o;
            v.b bVar = this.f27756p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f27753e ? 1 : 0);
            dest.writeInt(this.f27754i ? 1 : 0);
            dest.writeParcelable(this.f27755o, i10);
            dest.writeString(this.f27756p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27753e = z10;
            this.f27754i = z11;
            this.f27755o = x1Var;
            this.f27756p = cameraFacingMode;
            this.f27757q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f27758e;

        /* renamed from: i  reason: collision with root package name */
        private final List f27759i;

        /* renamed from: o  reason: collision with root package name */
        private final String f27760o;

        /* renamed from: p  reason: collision with root package name */
        private final pn.v f27761p;

        /* renamed from: q  reason: collision with root package name */
        private final long f27762q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f27763r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f27764s;

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
                return new i(arrayList, arrayList2, parcel.readString(), (pn.v) parcel.readParcelable(i.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(i.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(List selfies, List selfiesToReview, String str, pn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(selfiesToReview, "selfiesToReview");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27758e = selfies;
            this.f27759i = selfiesToReview;
            this.f27760o = str;
            this.f27761p = cameraProperties;
            this.f27762q = j10;
            this.f27763r = x1Var;
            this.f27764s = cameraFacingMode;
        }

        public final pn.v b() {
            return this.f27761p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f27762q;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27763r;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27764s;
        }

        @Override // hp.x1
        public List p() {
            return this.f27758e;
        }

        public final List r() {
            return this.f27759i;
        }

        public final String s() {
            return this.f27760o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f27758e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f27759i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f27760o);
            dest.writeParcelable(this.f27761p, i10);
            dest.writeLong(this.f27762q);
            dest.writeParcelable(this.f27763r, i10);
            dest.writeString(this.f27764s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f27768e;

        /* renamed from: i  reason: collision with root package name */
        private final List f27769i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f27770o;

        /* renamed from: p  reason: collision with root package name */
        private final pn.v f27771p;

        /* renamed from: q  reason: collision with root package name */
        private final long f27772q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f27773r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f27774s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f27775t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f27776u;

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
                pn.v vVar = (pn.v) parcel.readParcelable(cls.getClassLoader());
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
        public k(List selfies, List posesNeeded, boolean z10, pn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27768e = selfies;
            this.f27769i = posesNeeded;
            this.f27770o = z10;
            this.f27771p = cameraProperties;
            this.f27772q = j10;
            this.f27773r = x1Var;
            this.f27774s = poseConfigs;
            this.f27775t = cameraFacingMode;
            this.f27776u = z11;
        }

        public static /* synthetic */ k s(k kVar, List list, List list2, boolean z10, pn.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f27768e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f27769i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f27770o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f27771p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f27772q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f27773r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f27774s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f27775t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f27776u;
            }
            long j11 = j10;
            boolean z12 = z10;
            pn.v vVar2 = vVar;
            return kVar.r(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27770o;
        }

        public final pn.v b() {
            return this.f27771p;
        }

        @Override // hp.z
        public List c() {
            return this.f27769i;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27774s;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (Intrinsics.areEqual(this.f27768e, kVar.f27768e) && Intrinsics.areEqual(this.f27769i, kVar.f27769i) && this.f27770o == kVar.f27770o && Intrinsics.areEqual(this.f27771p, kVar.f27771p) && this.f27772q == kVar.f27772q && Intrinsics.areEqual(this.f27773r, kVar.f27773r) && Intrinsics.areEqual(this.f27774s, kVar.f27774s) && this.f27775t == kVar.f27775t && this.f27776u == kVar.f27776u) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((this.f27768e.hashCode() * 31) + this.f27769i.hashCode()) * 31) + Boolean.hashCode(this.f27770o)) * 31) + this.f27771p.hashCode()) * 31) + Long.hashCode(this.f27772q)) * 31;
            x1 x1Var = this.f27773r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f27774s.hashCode()) * 31) + this.f27775t.hashCode()) * 31) + Boolean.hashCode(this.f27776u);
        }

        @Override // hp.z
        public boolean k() {
            return this.f27776u;
        }

        public final long m() {
            return this.f27772q;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27773r;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27775t;
        }

        @Override // hp.x1
        public List p() {
            return this.f27768e;
        }

        public final k r(List selfies, List posesNeeded, boolean z10, pn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new k(selfies, posesNeeded, z10, cameraProperties, j10, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            List list = this.f27768e;
            List list2 = this.f27769i;
            boolean z10 = this.f27770o;
            pn.v vVar = this.f27771p;
            long j10 = this.f27772q;
            x1 x1Var = this.f27773r;
            s0 s0Var = this.f27774s;
            v.b bVar = this.f27775t;
            boolean z11 = this.f27776u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f27768e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f27769i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f27770o ? 1 : 0);
            dest.writeParcelable(this.f27771p, i10);
            dest.writeLong(this.f27772q);
            dest.writeParcelable(this.f27773r, i10);
            this.f27774s.writeToParcel(dest, i10);
            dest.writeString(this.f27775t.name());
            dest.writeInt(this.f27776u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f27791e;

        /* renamed from: i  reason: collision with root package name */
        private final pn.v f27792i;

        /* renamed from: o  reason: collision with root package name */
        private final long f27793o;

        /* renamed from: p  reason: collision with root package name */
        private final float f27794p;

        /* renamed from: q  reason: collision with root package name */
        private final tn.a f27795q;

        /* renamed from: r  reason: collision with root package name */
        private final List f27796r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f27797s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f27798t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f27799u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f27800v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f27801w;

        /* renamed from: x  reason: collision with root package name */
        private final List f27802x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final m createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                long readLong = parcel.readLong();
                pn.v vVar = (pn.v) parcel.readParcelable(m.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                tn.a aVar = (tn.a) parcel.readParcelable(m.class.getClassLoader());
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
        public m(long j10, pn.v cameraProperties, long j11, float f10, tn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27791e = j10;
            this.f27792i = cameraProperties;
            this.f27793o = j11;
            this.f27794p = f10;
            this.f27795q = aVar;
            this.f27796r = posesNeeded;
            this.f27797s = x1Var;
            this.f27798t = poseConfigs;
            this.f27799u = z10;
            this.f27800v = cameraFacingMode;
            this.f27801w = z11;
            this.f27802x = CollectionsKt.l();
        }

        public static /* synthetic */ m s(m mVar, long j10, pn.v vVar, long j11, float f10, tn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            long j12;
            pn.v vVar2;
            long j13;
            float f11;
            tn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar2;
            boolean z13;
            if ((i10 & 1) != 0) {
                j12 = mVar.f27791e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f27792i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f27793o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f27794p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f27795q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f27796r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f27797s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f27798t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f27799u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f27800v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f27801w;
            } else {
                z13 = z11;
            }
            return mVar.r(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27799u;
        }

        public final pn.v b() {
            return this.f27792i;
        }

        @Override // hp.z
        public List c() {
            return this.f27796r;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27798t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (this.f27791e == mVar.f27791e && Intrinsics.areEqual(this.f27792i, mVar.f27792i) && this.f27793o == mVar.f27793o && Float.compare(this.f27794p, mVar.f27794p) == 0 && Intrinsics.areEqual(this.f27795q, mVar.f27795q) && Intrinsics.areEqual(this.f27796r, mVar.f27796r) && Intrinsics.areEqual(this.f27797s, mVar.f27797s) && Intrinsics.areEqual(this.f27798t, mVar.f27798t) && this.f27799u == mVar.f27799u && this.f27800v == mVar.f27800v && this.f27801w == mVar.f27801w) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // hp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Long.hashCode(this.f27791e) * 31) + this.f27792i.hashCode()) * 31) + Long.hashCode(this.f27793o)) * 31) + Float.hashCode(this.f27794p)) * 31;
            tn.a aVar = this.f27795q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f27796r.hashCode()) * 31;
            x1 x1Var = this.f27797s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f27798t.hashCode()) * 31) + Boolean.hashCode(this.f27799u)) * 31) + this.f27800v.hashCode()) * 31) + Boolean.hashCode(this.f27801w);
        }

        public final long i() {
            return this.f27791e;
        }

        @Override // hp.z
        public boolean k() {
            return this.f27801w;
        }

        public final long m() {
            return this.f27793o;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27797s;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27800v;
        }

        @Override // hp.x1
        public List p() {
            return this.f27802x;
        }

        public final m r(long j10, pn.v cameraProperties, long j11, float f10, tn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public final tn.a t() {
            return this.f27795q;
        }

        public String toString() {
            long j10 = this.f27791e;
            pn.v vVar = this.f27792i;
            long j11 = this.f27793o;
            float f10 = this.f27794p;
            tn.a aVar = this.f27795q;
            List list = this.f27796r;
            x1 x1Var = this.f27797s;
            s0 s0Var = this.f27798t;
            boolean z10 = this.f27799u;
            v.b bVar = this.f27800v;
            boolean z11 = this.f27801w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final float u() {
            return this.f27794p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f27791e);
            dest.writeParcelable(this.f27792i, i10);
            dest.writeLong(this.f27793o);
            dest.writeFloat(this.f27794p);
            dest.writeParcelable(this.f27795q, i10);
            List<a1.b> list = this.f27796r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f27797s, i10);
            this.f27798t.writeToParcel(dest, i10);
            dest.writeInt(this.f27799u ? 1 : 0);
            dest.writeString(this.f27800v.name());
            dest.writeInt(this.f27801w ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f27803e;

        /* renamed from: i  reason: collision with root package name */
        private final String f27804i;

        /* renamed from: o  reason: collision with root package name */
        private final pn.v f27805o;

        /* renamed from: p  reason: collision with root package name */
        private final long f27806p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f27807q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f27808r;

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
                return new n(arrayList, parcel.readString(), (pn.v) parcel.readParcelable(n.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(n.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final n[] newArray(int i10) {
                return new n[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(List selfies, String str, pn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27803e = selfies;
            this.f27804i = str;
            this.f27805o = cameraProperties;
            this.f27806p = j10;
            this.f27807q = x1Var;
            this.f27808r = cameraFacingMode;
        }

        public final pn.v b() {
            return this.f27805o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f27806p;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27807q;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27808r;
        }

        @Override // hp.x1
        public List p() {
            return this.f27803e;
        }

        public final String r() {
            return this.f27804i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f27803e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f27804i);
            dest.writeParcelable(this.f27805o, i10);
            dest.writeLong(this.f27806p);
            dest.writeParcelable(this.f27807q, i10);
            dest.writeString(this.f27808r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f27809e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f27810i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f27811o;

        /* renamed from: p  reason: collision with root package name */
        private final List f27812p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f27813q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f27814r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f27815s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f27816t;

        /* renamed from: u  reason: collision with root package name */
        private final List f27817u;

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
                z10 = oVar.f27809e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f27810i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f27811o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f27812p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f27813q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f27814r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f27815s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f27816t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.r(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27814r;
        }

        @Override // hp.z
        public List c() {
            return this.f27812p;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27813q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (this.f27809e == oVar.f27809e && this.f27810i == oVar.f27810i && Intrinsics.areEqual(this.f27811o, oVar.f27811o) && Intrinsics.areEqual(this.f27812p, oVar.f27812p) && Intrinsics.areEqual(this.f27813q, oVar.f27813q) && this.f27814r == oVar.f27814r && this.f27815s == oVar.f27815s && this.f27816t == oVar.f27816t) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f27809e) * 31) + Boolean.hashCode(this.f27810i)) * 31;
            x1 x1Var = this.f27811o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f27812p.hashCode()) * 31) + this.f27813q.hashCode()) * 31) + Boolean.hashCode(this.f27814r)) * 31) + this.f27815s.hashCode()) * 31) + Boolean.hashCode(this.f27816t);
        }

        @Override // hp.z
        public boolean k() {
            return this.f27816t;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27811o;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27815s;
        }

        @Override // hp.x1
        public List p() {
            return this.f27817u;
        }

        public final o r(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public final boolean t() {
            return this.f27810i;
        }

        public String toString() {
            boolean z10 = this.f27809e;
            boolean z11 = this.f27810i;
            x1 x1Var = this.f27811o;
            List list = this.f27812p;
            s0 s0Var = this.f27813q;
            boolean z12 = this.f27814r;
            v.b bVar = this.f27815s;
            boolean z13 = this.f27816t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final boolean u() {
            return this.f27809e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f27809e ? 1 : 0);
            dest.writeInt(this.f27810i ? 1 : 0);
            dest.writeParcelable(this.f27811o, i10);
            List<a1.b> list = this.f27812p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f27813q.writeToParcel(dest, i10);
            dest.writeInt(this.f27814r ? 1 : 0);
            dest.writeString(this.f27815s.name());
            dest.writeInt(this.f27816t ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27809e = z10;
            this.f27810i = z11;
            this.f27811o = x1Var;
            this.f27812p = posesNeeded;
            this.f27813q = poseConfigs;
            this.f27814r = z12;
            this.f27815s = cameraFacingMode;
            this.f27816t = z13;
            this.f27817u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f27818e;

        /* renamed from: i  reason: collision with root package name */
        private final pn.v f27819i;

        /* renamed from: o  reason: collision with root package name */
        private final long f27820o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f27821p;

        /* renamed from: q  reason: collision with root package name */
        private final List f27822q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f27823r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f27824s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f27825t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f27826u;

        /* renamed from: v  reason: collision with root package name */
        private final List f27827v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final p createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                pn.v vVar = (pn.v) parcel.readParcelable(p.class.getClassLoader());
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
        public p(String str, pn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27818e = str;
            this.f27819i = cameraProperties;
            this.f27820o = j10;
            this.f27821p = x1Var;
            this.f27822q = posesNeeded;
            this.f27823r = poseConfigs;
            this.f27824s = z10;
            this.f27825t = cameraFacingMode;
            this.f27826u = z11;
            this.f27827v = CollectionsKt.l();
        }

        public static /* synthetic */ p s(p pVar, String str, pn.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f27818e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f27819i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f27820o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f27821p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f27822q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f27823r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f27824s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f27825t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f27826u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.r(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27824s;
        }

        @Override // hp.z
        public List c() {
            return this.f27822q;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27823r;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (Intrinsics.areEqual(this.f27818e, pVar.f27818e) && Intrinsics.areEqual(this.f27819i, pVar.f27819i) && this.f27820o == pVar.f27820o && Intrinsics.areEqual(this.f27821p, pVar.f27821p) && Intrinsics.areEqual(this.f27822q, pVar.f27822q) && Intrinsics.areEqual(this.f27823r, pVar.f27823r) && this.f27824s == pVar.f27824s && this.f27825t == pVar.f27825t && this.f27826u == pVar.f27826u) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            String str = this.f27818e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f27819i.hashCode()) * 31) + Long.hashCode(this.f27820o)) * 31;
            x1 x1Var = this.f27821p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f27822q.hashCode()) * 31) + this.f27823r.hashCode()) * 31) + Boolean.hashCode(this.f27824s)) * 31) + this.f27825t.hashCode()) * 31) + Boolean.hashCode(this.f27826u);
        }

        @Override // hp.z
        public boolean k() {
            return this.f27826u;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27821p;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27825t;
        }

        @Override // hp.x1
        public List p() {
            return this.f27827v;
        }

        public final p r(String str, pn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            String str = this.f27818e;
            pn.v vVar = this.f27819i;
            long j10 = this.f27820o;
            x1 x1Var = this.f27821p;
            List list = this.f27822q;
            s0 s0Var = this.f27823r;
            boolean z10 = this.f27824s;
            v.b bVar = this.f27825t;
            boolean z11 = this.f27826u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f27818e);
            dest.writeParcelable(this.f27819i, i10);
            dest.writeLong(this.f27820o);
            dest.writeParcelable(this.f27821p, i10);
            List<a1.b> list = this.f27822q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f27823r.writeToParcel(dest, i10);
            dest.writeInt(this.f27824s ? 1 : 0);
            dest.writeString(this.f27825t.name());
            dest.writeInt(this.f27826u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f27828e;

        /* renamed from: i  reason: collision with root package name */
        private final String f27829i;

        /* renamed from: o  reason: collision with root package name */
        private final pn.v f27830o;

        /* renamed from: p  reason: collision with root package name */
        private final long f27831p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f27832q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f27833r;

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
                return new q(arrayList, parcel.readString(), (pn.v) parcel.readParcelable(q.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(q.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final q[] newArray(int i10) {
                return new q[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(List selfies, String webRtcObjectId, pn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(webRtcObjectId, "webRtcObjectId");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27828e = selfies;
            this.f27829i = webRtcObjectId;
            this.f27830o = cameraProperties;
            this.f27831p = j10;
            this.f27832q = x1Var;
            this.f27833r = cameraFacingMode;
        }

        public final pn.v b() {
            return this.f27830o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long m() {
            return this.f27831p;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27832q;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27833r;
        }

        @Override // hp.x1
        public List p() {
            return this.f27828e;
        }

        public final String r() {
            return this.f27829i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f27828e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f27829i);
            dest.writeParcelable(this.f27830o, i10);
            dest.writeLong(this.f27831p);
            dest.writeParcelable(this.f27832q, i10);
            dest.writeString(this.f27833r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 n();

    public abstract v.b o();

    public abstract List p();

    public final void q(boolean z10) {
        this.f27688d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f27765e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f27766i;

        /* renamed from: o  reason: collision with root package name */
        private final List f27767o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f46370d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27765e;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27766i;
        }

        @Override // hp.x1
        public List p() {
            return this.f27767o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f27765e, i10);
            dest.writeString(this.f27766i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27765e = x1Var;
            this.f27766i = cameraFacingMode;
            this.f27767o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f27777e;

        /* renamed from: i  reason: collision with root package name */
        private final tn.b f27778i;

        /* renamed from: o  reason: collision with root package name */
        private final float f27779o;

        /* renamed from: p  reason: collision with root package name */
        private final tn.a f27780p;

        /* renamed from: q  reason: collision with root package name */
        private final List f27781q;

        /* renamed from: r  reason: collision with root package name */
        private final long f27782r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f27783s;

        /* renamed from: t  reason: collision with root package name */
        private final long f27784t;

        /* renamed from: u  reason: collision with root package name */
        private final pn.v f27785u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f27786v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f27787w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f27788x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f27789y;

        /* renamed from: z  reason: collision with root package name */
        private final List f27790z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                boolean z10;
                tn.b valueOf;
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
                    valueOf = tn.b.valueOf(parcel.readString());
                }
                tn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                tn.a aVar = (tn.a) parcel.readParcelable(l.class.getClassLoader());
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
                pn.v vVar = (pn.v) parcel.readParcelable(l.class.getClassLoader());
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

        public /* synthetic */ l(boolean z10, tn.b bVar, float f10, tn.a aVar, List list, long j10, boolean z11, long j11, pn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? tn.b.f50140d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
        }

        public static /* synthetic */ l s(l lVar, boolean z10, tn.b bVar, float f10, tn.a aVar, List list, long j10, boolean z11, long j11, pn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, Object obj) {
            boolean z13;
            tn.b bVar3;
            float f11;
            tn.a aVar2;
            List list2;
            long j12;
            boolean z14;
            long j13;
            pn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z15;
            if ((i10 & 1) != 0) {
                z13 = lVar.f27777e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f27778i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f27779o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f27780p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f27781q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f27782r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f27783s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f27784t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f27785u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f27786v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f27787w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f27788x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f27789y;
            } else {
                z15 = z12;
            }
            return lVar.r(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27783s;
        }

        @Override // hp.a0
        public pn.v b() {
            return this.f27785u;
        }

        @Override // hp.z
        public List c() {
            return this.f27781q;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27787w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (this.f27777e == lVar.f27777e && this.f27778i == lVar.f27778i && Float.compare(this.f27779o, lVar.f27779o) == 0 && Intrinsics.areEqual(this.f27780p, lVar.f27780p) && Intrinsics.areEqual(this.f27781q, lVar.f27781q) && this.f27782r == lVar.f27782r && this.f27783s == lVar.f27783s && this.f27784t == lVar.f27784t && Intrinsics.areEqual(this.f27785u, lVar.f27785u) && Intrinsics.areEqual(this.f27786v, lVar.f27786v) && Intrinsics.areEqual(this.f27787w, lVar.f27787w) && this.f27788x == lVar.f27788x && this.f27789y == lVar.f27789y) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // hp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Boolean.hashCode(this.f27777e) * 31;
            tn.b bVar = this.f27778i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f27779o)) * 31;
            tn.a aVar = this.f27780p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f27781q.hashCode()) * 31) + Long.hashCode(this.f27782r)) * 31) + Boolean.hashCode(this.f27783s)) * 31) + Long.hashCode(this.f27784t)) * 31) + this.f27785u.hashCode()) * 31;
            x1 x1Var = this.f27786v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f27787w.hashCode()) * 31) + this.f27788x.hashCode()) * 31) + Boolean.hashCode(this.f27789y);
        }

        @Override // hp.a0
        public long i() {
            return this.f27782r;
        }

        @Override // hp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // hp.z
        public boolean k() {
            return this.f27789y;
        }

        @Override // hp.a0
        public long m() {
            return this.f27784t;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27786v;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27788x;
        }

        @Override // hp.x1
        public List p() {
            return this.f27790z;
        }

        public final l r(boolean z10, tn.b bVar, float f10, tn.a aVar, List posesNeeded, long j10, boolean z11, long j11, pn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public final tn.a t() {
            return this.f27780p;
        }

        public String toString() {
            boolean z10 = this.f27777e;
            tn.b bVar = this.f27778i;
            float f10 = this.f27779o;
            tn.a aVar = this.f27780p;
            List list = this.f27781q;
            long j10 = this.f27782r;
            boolean z11 = this.f27783s;
            long j11 = this.f27784t;
            pn.v vVar = this.f27785u;
            x1 x1Var = this.f27786v;
            s0 s0Var = this.f27787w;
            v.b bVar2 = this.f27788x;
            boolean z12 = this.f27789y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final float u() {
            return this.f27779o;
        }

        public final tn.b v() {
            return this.f27778i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f27777e ? 1 : 0);
            tn.b bVar = this.f27778i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f27779o);
            dest.writeParcelable(this.f27780p, i10);
            List<a1.b> list = this.f27781q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f27782r);
            dest.writeInt(this.f27783s ? 1 : 0);
            dest.writeLong(this.f27784t);
            dest.writeParcelable(this.f27785u, i10);
            dest.writeParcelable(this.f27786v, i10);
            this.f27787w.writeToParcel(dest, i10);
            dest.writeString(this.f27788x.name());
            dest.writeInt(this.f27789y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, tn.b bVar, float f10, tn.a aVar, List posesNeeded, long j10, boolean z11, long j11, pn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f27777e = z10;
            this.f27778i = bVar;
            this.f27779o = f10;
            this.f27780p = aVar;
            this.f27781q = posesNeeded;
            this.f27782r = j10;
            this.f27783s = z11;
            this.f27784t = j11;
            this.f27785u = cameraProperties;
            this.f27786v = x1Var;
            this.f27787w = poseConfigs;
            this.f27788x = cameraFacingMode;
            this.f27789y = z12;
            this.f27790z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0358a();

        /* renamed from: e  reason: collision with root package name */
        private final tn.b f27689e;

        /* renamed from: i  reason: collision with root package name */
        private final float f27690i;

        /* renamed from: o  reason: collision with root package name */
        private final tn.a f27691o;

        /* renamed from: p  reason: collision with root package name */
        private final List f27692p;

        /* renamed from: q  reason: collision with root package name */
        private final List f27693q;

        /* renamed from: r  reason: collision with root package name */
        private final long f27694r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f27695s;

        /* renamed from: t  reason: collision with root package name */
        private final long f27696t;

        /* renamed from: u  reason: collision with root package name */
        private final pn.v f27697u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f27698v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f27699w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f27700x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f27701y;

        /* renamed from: z  reason: collision with root package name */
        private final g f27702z;

        /* renamed from: hp.x1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0358a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                tn.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = tn.b.valueOf(parcel.readString());
                }
                tn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                tn.a aVar = (tn.a) parcel.readParcelable(a.class.getClassLoader());
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
                pn.v vVar = (pn.v) parcel.readParcelable(a.class.getClassLoader());
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

        public /* synthetic */ a(tn.b bVar, float f10, tn.a aVar, List list, List list2, long j10, boolean z10, long j11, pn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f27747d : gVar);
        }

        public static /* synthetic */ a s(a aVar, tn.b bVar, float f10, tn.a aVar2, List list, List list2, long j10, boolean z10, long j11, pn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, Object obj) {
            tn.b bVar3;
            float f11;
            tn.a aVar3;
            List list3;
            List list4;
            long j12;
            boolean z12;
            long j13;
            pn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            g gVar2;
            if ((i10 & 1) != 0) {
                bVar3 = aVar.f27689e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f27690i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f27691o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f27692p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f27693q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f27694r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f27695s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f27696t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f27697u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f27698v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f27699w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f27700x;
            } else {
                bVar4 = bVar2;
            }
            tn.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f27701y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f27702z;
            } else {
                gVar2 = gVar;
            }
            return aVar.r(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        @Override // hp.z
        public boolean a() {
            return this.f27695s;
        }

        @Override // hp.a0
        public pn.v b() {
            return this.f27697u;
        }

        @Override // hp.z
        public List c() {
            return this.f27693q;
        }

        @Override // hp.z
        public s0 d() {
            return this.f27699w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // hp.z
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
            if (this.f27689e == aVar.f27689e && Float.compare(this.f27690i, aVar.f27690i) == 0 && Intrinsics.areEqual(this.f27691o, aVar.f27691o) && Intrinsics.areEqual(this.f27692p, aVar.f27692p) && Intrinsics.areEqual(this.f27693q, aVar.f27693q) && this.f27694r == aVar.f27694r && this.f27695s == aVar.f27695s && this.f27696t == aVar.f27696t && Intrinsics.areEqual(this.f27697u, aVar.f27697u) && Intrinsics.areEqual(this.f27698v, aVar.f27698v) && Intrinsics.areEqual(this.f27699w, aVar.f27699w) && this.f27700x == aVar.f27700x && this.f27701y == aVar.f27701y && this.f27702z == aVar.f27702z) {
                return true;
            }
            return false;
        }

        @Override // hp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // hp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            tn.b bVar = this.f27689e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f27690i)) * 31;
            tn.a aVar = this.f27691o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f27692p.hashCode()) * 31) + this.f27693q.hashCode()) * 31) + Long.hashCode(this.f27694r)) * 31) + Boolean.hashCode(this.f27695s)) * 31) + Long.hashCode(this.f27696t)) * 31) + this.f27697u.hashCode()) * 31;
            x1 x1Var = this.f27698v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f27699w.hashCode()) * 31) + this.f27700x.hashCode()) * 31) + Boolean.hashCode(this.f27701y)) * 31) + this.f27702z.hashCode();
        }

        @Override // hp.a0
        public long i() {
            return this.f27694r;
        }

        @Override // hp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // hp.z
        public boolean k() {
            return this.f27701y;
        }

        @Override // hp.a0
        public long m() {
            return this.f27696t;
        }

        @Override // hp.x1
        public x1 n() {
            return this.f27698v;
        }

        @Override // hp.x1
        public v.b o() {
            return this.f27700x;
        }

        @Override // hp.x1
        public List p() {
            return this.f27692p;
        }

        public final a r(tn.b bVar, float f10, tn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, pn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            return new a(bVar, f10, aVar, selfies, posesNeeded, j10, z10, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z11, flashState);
        }

        public final tn.a t() {
            return this.f27691o;
        }

        public String toString() {
            tn.b bVar = this.f27689e;
            float f10 = this.f27690i;
            tn.a aVar = this.f27691o;
            List list = this.f27692p;
            List list2 = this.f27693q;
            long j10 = this.f27694r;
            boolean z10 = this.f27695s;
            long j11 = this.f27696t;
            pn.v vVar = this.f27697u;
            x1 x1Var = this.f27698v;
            s0 s0Var = this.f27699w;
            v.b bVar2 = this.f27700x;
            boolean z11 = this.f27701y;
            g gVar = this.f27702z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final g u() {
            return this.f27702z;
        }

        public final float v() {
            return this.f27690i;
        }

        public final tn.b w() {
            return this.f27689e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            tn.b bVar = this.f27689e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f27690i);
            dest.writeParcelable(this.f27691o, i10);
            List<Parcelable> list = this.f27692p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f27693q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f27694r);
            dest.writeInt(this.f27695s ? 1 : 0);
            dest.writeLong(this.f27696t);
            dest.writeParcelable(this.f27697u, i10);
            dest.writeParcelable(this.f27698v, i10);
            this.f27699w.writeToParcel(dest, i10);
            dest.writeString(this.f27700x.name());
            dest.writeInt(this.f27701y ? 1 : 0);
            dest.writeString(this.f27702z.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(tn.b bVar, float f10, tn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, pn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            this.f27689e = bVar;
            this.f27690i = f10;
            this.f27691o = aVar;
            this.f27692p = selfies;
            this.f27693q = posesNeeded;
            this.f27694r = j10;
            this.f27695s = z10;
            this.f27696t = j11;
            this.f27697u = cameraProperties;
            this.f27698v = x1Var;
            this.f27699w = poseConfigs;
            this.f27700x = cameraFacingMode;
            this.f27701y = z11;
            this.f27702z = flashState;
        }
    }
}
