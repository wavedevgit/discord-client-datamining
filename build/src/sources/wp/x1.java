package wp;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import fo.v;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import wp.a0;
import wp.a1;
import wp.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f54089d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f54104e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f54105i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f54106o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f54107p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f54108q;

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
            this.f54104e = nextState;
            this.f54105i = completedPose;
            this.f54106o = x1Var;
            this.f54107p = cameraFacingMode;
            this.f54108q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54106o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54107p;
        }

        @Override // wp.x1
        public List q() {
            return this.f54104e.q();
        }

        public final a1.b s() {
            return this.f54105i;
        }

        public final x1 t() {
            return this.f54104e;
        }

        public final boolean u() {
            return this.f54108q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f54104e, i10);
            dest.writeString(this.f54105i.name());
            dest.writeParcelable(this.f54106o, i10);
            dest.writeString(this.f54107p.name());
            dest.writeInt(this.f54108q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f54109e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f54110i;

        /* renamed from: o  reason: collision with root package name */
        private final long f54111o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f54112p;

        /* renamed from: q  reason: collision with root package name */
        private final long f54113q;

        /* renamed from: r  reason: collision with root package name */
        private final float f54114r;

        /* renamed from: s  reason: collision with root package name */
        private final jo.a f54115s;

        /* renamed from: t  reason: collision with root package name */
        private final List f54116t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f54117u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f54118v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f54119w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f54120x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f54121y;

        /* renamed from: z  reason: collision with root package name */
        private final List f54122z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                jo.b valueOf;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = jo.b.valueOf(parcel.readString());
                }
                jo.b bVar = valueOf;
                long readLong = parcel.readLong();
                fo.v vVar = (fo.v) parcel.readParcelable(c.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                jo.a aVar = (jo.a) parcel.readParcelable(c.class.getClassLoader());
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

        public /* synthetic */ c(int i10, jo.b bVar, long j10, fo.v vVar, long j11, float f10, jo.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, j10, vVar, j11, f10, aVar, list, x1Var, s0Var, z10, bVar2, z11);
        }

        public static /* synthetic */ c t(c cVar, int i10, jo.b bVar, long j10, fo.v vVar, long j11, float f10, jo.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, Object obj) {
            int i12;
            jo.b bVar3;
            long j12;
            fo.v vVar2;
            long j13;
            float f11;
            jo.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i12 = cVar.f54109e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f54110i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f54111o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f54112p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f54113q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f54114r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f54115s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f54116t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f54117u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f54118v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f54119w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f54120x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f54121y;
            } else {
                z13 = z11;
            }
            return cVar.s(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54119w;
        }

        public final fo.v b() {
            return this.f54112p;
        }

        @Override // wp.z
        public List c() {
            return this.f54116t;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54118v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (this.f54109e == cVar.f54109e && this.f54110i == cVar.f54110i && this.f54111o == cVar.f54111o && Intrinsics.areEqual(this.f54112p, cVar.f54112p) && this.f54113q == cVar.f54113q && Float.compare(this.f54114r, cVar.f54114r) == 0 && Intrinsics.areEqual(this.f54115s, cVar.f54115s) && Intrinsics.areEqual(this.f54116t, cVar.f54116t) && Intrinsics.areEqual(this.f54117u, cVar.f54117u) && Intrinsics.areEqual(this.f54118v, cVar.f54118v) && this.f54119w == cVar.f54119w && this.f54120x == cVar.f54120x && this.f54121y == cVar.f54121y) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // wp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Integer.hashCode(this.f54109e) * 31;
            jo.b bVar = this.f54110i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f54111o)) * 31) + this.f54112p.hashCode()) * 31) + Long.hashCode(this.f54113q)) * 31) + Float.hashCode(this.f54114r)) * 31;
            jo.a aVar = this.f54115s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f54116t.hashCode()) * 31;
            x1 x1Var = this.f54117u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f54118v.hashCode()) * 31) + Boolean.hashCode(this.f54119w)) * 31) + this.f54120x.hashCode()) * 31) + Boolean.hashCode(this.f54121y);
        }

        public final long i() {
            return this.f54111o;
        }

        @Override // wp.z
        public boolean k() {
            return this.f54121y;
        }

        public final long l() {
            return this.f54113q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54117u;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54120x;
        }

        @Override // wp.x1
        public List q() {
            return this.f54122z;
        }

        public final c s(int i10, jo.b bVar, long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f54109e;
            jo.b bVar = this.f54110i;
            long j10 = this.f54111o;
            fo.v vVar = this.f54112p;
            long j11 = this.f54113q;
            float f10 = this.f54114r;
            jo.a aVar = this.f54115s;
            List list = this.f54116t;
            x1 x1Var = this.f54117u;
            s0 s0Var = this.f54118v;
            boolean z10 = this.f54119w;
            v.b bVar2 = this.f54120x;
            boolean z11 = this.f54121y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final jo.a u() {
            return this.f54115s;
        }

        public final int v() {
            return this.f54109e;
        }

        public final float w() {
            return this.f54114r;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f54109e);
            jo.b bVar = this.f54110i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f54111o);
            dest.writeParcelable(this.f54112p, i10);
            dest.writeLong(this.f54113q);
            dest.writeFloat(this.f54114r);
            dest.writeParcelable(this.f54115s, i10);
            List<a1.b> list = this.f54116t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f54117u, i10);
            this.f54118v.writeToParcel(dest, i10);
            dest.writeInt(this.f54119w ? 1 : 0);
            dest.writeString(this.f54120x.name());
            dest.writeInt(this.f54121y ? 1 : 0);
        }

        public final jo.b x() {
            return this.f54110i;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, jo.b bVar, long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54109e = i10;
            this.f54110i = bVar;
            this.f54111o = j10;
            this.f54112p = cameraProperties;
            this.f54113q = j11;
            this.f54114r = f10;
            this.f54115s = aVar;
            this.f54116t = posesNeeded;
            this.f54117u = x1Var;
            this.f54118v = poseConfigs;
            this.f54119w = z10;
            this.f54120x = cameraFacingMode;
            this.f54121y = z11;
            this.f54122z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f54123e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f54124i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f54125o;

        /* renamed from: p  reason: collision with root package name */
        private final List f54126p;

        /* renamed from: q  reason: collision with root package name */
        private final long f54127q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f54128r;

        /* renamed from: s  reason: collision with root package name */
        private final long f54129s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f54130t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f54131u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f54132v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f54133w;

        /* renamed from: x  reason: collision with root package name */
        private final List f54134x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                jo.b valueOf;
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
                    valueOf = jo.b.valueOf(parcel.readString());
                }
                jo.b bVar = valueOf;
                fo.v vVar = (fo.v) parcel.readParcelable(d.class.getClassLoader());
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

        public /* synthetic */ d(int i10, jo.b bVar, fo.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, vVar, list, j10, (i11 & 32) != 0 ? true : z10, j11, x1Var, s0Var, bVar2, z11);
        }

        public static /* synthetic */ d t(d dVar, int i10, jo.b bVar, fo.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, Object obj) {
            jo.b bVar3;
            fo.v vVar2;
            List list2;
            long j12;
            boolean z12;
            long j13;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i10 = dVar.f54123e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f54124i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f54125o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f54126p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f54127q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f54128r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f54129s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f54130t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f54131u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f54132v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f54133w;
            } else {
                z13 = z11;
            }
            return dVar.s(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54128r;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f54125o;
        }

        @Override // wp.z
        public List c() {
            return this.f54126p;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54131u;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (this.f54123e == dVar.f54123e && this.f54124i == dVar.f54124i && Intrinsics.areEqual(this.f54125o, dVar.f54125o) && Intrinsics.areEqual(this.f54126p, dVar.f54126p) && this.f54127q == dVar.f54127q && this.f54128r == dVar.f54128r && this.f54129s == dVar.f54129s && Intrinsics.areEqual(this.f54130t, dVar.f54130t) && Intrinsics.areEqual(this.f54131u, dVar.f54131u) && this.f54132v == dVar.f54132v && this.f54133w == dVar.f54133w) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // wp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = Integer.hashCode(this.f54123e) * 31;
            jo.b bVar = this.f54124i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f54125o.hashCode()) * 31) + this.f54126p.hashCode()) * 31) + Long.hashCode(this.f54127q)) * 31) + Boolean.hashCode(this.f54128r)) * 31) + Long.hashCode(this.f54129s)) * 31;
            x1 x1Var = this.f54130t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f54131u.hashCode()) * 31) + this.f54132v.hashCode()) * 31) + Boolean.hashCode(this.f54133w);
        }

        @Override // wp.a0
        public long i() {
            return this.f54127q;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f54133w;
        }

        @Override // wp.a0
        public long l() {
            return this.f54129s;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54130t;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54132v;
        }

        @Override // wp.x1
        public List q() {
            return this.f54134x;
        }

        public final d s(int i10, jo.b bVar, fo.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f54123e;
            jo.b bVar = this.f54124i;
            fo.v vVar = this.f54125o;
            List list = this.f54126p;
            long j10 = this.f54127q;
            boolean z10 = this.f54128r;
            long j11 = this.f54129s;
            x1 x1Var = this.f54130t;
            s0 s0Var = this.f54131u;
            v.b bVar2 = this.f54132v;
            boolean z11 = this.f54133w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final int u() {
            return this.f54123e;
        }

        public final jo.b v() {
            return this.f54124i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f54123e);
            jo.b bVar = this.f54124i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f54125o, i10);
            List<a1.b> list = this.f54126p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f54127q);
            dest.writeInt(this.f54128r ? 1 : 0);
            dest.writeLong(this.f54129s);
            dest.writeParcelable(this.f54130t, i10);
            this.f54131u.writeToParcel(dest, i10);
            dest.writeString(this.f54132v.name());
            dest.writeInt(this.f54133w ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, jo.b bVar, fo.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54123e = i10;
            this.f54124i = bVar;
            this.f54125o = cameraProperties;
            this.f54126p = posesNeeded;
            this.f54127q = j10;
            this.f54128r = z10;
            this.f54129s = j11;
            this.f54130t = x1Var;
            this.f54131u = poseConfigs;
            this.f54132v = cameraFacingMode;
            this.f54133w = z11;
            this.f54134x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f54135e;

        /* renamed from: i  reason: collision with root package name */
        private final long f54136i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f54137o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f54138p;

        /* renamed from: q  reason: collision with root package name */
        private final fo.v f54139q;

        /* renamed from: r  reason: collision with root package name */
        private final long f54140r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f54141s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f54142t;

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
                return new e(arrayList, j11, z11, z12, (fo.v) parcel.readParcelable(e.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(e.class.getClassLoader()), v.b.valueOf(parcel.readString()));
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
        public /* synthetic */ e(java.util.List r2, long r3, boolean r5, boolean r6, fo.v r7, long r8, wp.x1 r10, fo.v.b r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
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
            throw new UnsupportedOperationException("Method not decompiled: wp.x1.e.<init>(java.util.List, long, boolean, boolean, fo.v, long, wp.x1, fo.v$b, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }

        public static /* synthetic */ e t(e eVar, List list, long j10, boolean z10, boolean z11, fo.v vVar, long j11, x1 x1Var, v.b bVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = eVar.f54135e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f54136i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f54137o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f54138p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f54139q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f54140r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f54141s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f54142t;
            }
            long j12 = j11;
            fo.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.s(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final fo.v b() {
            return this.f54139q;
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
            if (Intrinsics.areEqual(this.f54135e, eVar.f54135e) && this.f54136i == eVar.f54136i && this.f54137o == eVar.f54137o && this.f54138p == eVar.f54138p && Intrinsics.areEqual(this.f54139q, eVar.f54139q) && this.f54140r == eVar.f54140r && Intrinsics.areEqual(this.f54141s, eVar.f54141s) && this.f54142t == eVar.f54142t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f54135e.hashCode() * 31) + Long.hashCode(this.f54136i)) * 31) + Boolean.hashCode(this.f54137o)) * 31) + Boolean.hashCode(this.f54138p)) * 31) + this.f54139q.hashCode()) * 31) + Long.hashCode(this.f54140r)) * 31;
            x1 x1Var = this.f54141s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f54142t.hashCode();
        }

        public final long l() {
            return this.f54140r;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54141s;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54142t;
        }

        @Override // wp.x1
        public List q() {
            return this.f54135e;
        }

        public final e s(List selfies, long j10, boolean z10, boolean z11, fo.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public String toString() {
            List list = this.f54135e;
            long j10 = this.f54136i;
            boolean z10 = this.f54137o;
            boolean z11 = this.f54138p;
            fo.v vVar = this.f54139q;
            long j11 = this.f54140r;
            x1 x1Var = this.f54141s;
            v.b bVar = this.f54142t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final long u() {
            return this.f54136i;
        }

        public final boolean v() {
            return this.f54137o;
        }

        public final boolean w() {
            return this.f54138p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f54135e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f54136i);
            dest.writeInt(this.f54137o ? 1 : 0);
            dest.writeInt(this.f54138p ? 1 : 0);
            dest.writeParcelable(this.f54139q, i10);
            dest.writeLong(this.f54140r);
            dest.writeParcelable(this.f54141s, i10);
            dest.writeString(this.f54142t.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, fo.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54135e = selfies;
            this.f54136i = j10;
            this.f54137o = z10;
            this.f54138p = z11;
            this.f54139q = cameraProperties;
            this.f54140r = j11;
            this.f54141s = x1Var;
            this.f54142t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f54143e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f54144i;

        /* renamed from: o  reason: collision with root package name */
        private final long f54145o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f54146p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f54147q;

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
                return new f(arrayList, (fo.v) parcel.readParcelable(f.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(f.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(List selfies, fo.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54143e = selfies;
            this.f54144i = cameraProperties;
            this.f54145o = j10;
            this.f54146p = x1Var;
            this.f54147q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54146p;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54147q;
        }

        @Override // wp.x1
        public List q() {
            return this.f54143e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f54143e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f54144i, i10);
            dest.writeLong(this.f54145o);
            dest.writeParcelable(this.f54146p, i10);
            dest.writeString(this.f54147q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f54148d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f54149e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f54150i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f54151o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f54152p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f54153q;

        static {
            g[] a10 = a();
            f54152p = a10;
            f54153q = hs.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f54148d, f54149e, f54150i, f54151o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f54152p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f54154e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f54155i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f54156o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f54157p;

        /* renamed from: q  reason: collision with root package name */
        private final List f54158q;

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
            if (this.f54154e == hVar.f54154e && this.f54155i == hVar.f54155i && Intrinsics.areEqual(this.f54156o, hVar.f54156o) && this.f54157p == hVar.f54157p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f54154e) * 31) + Boolean.hashCode(this.f54155i)) * 31;
            x1 x1Var = this.f54156o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f54157p.hashCode();
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54156o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54157p;
        }

        @Override // wp.x1
        public List q() {
            return this.f54158q;
        }

        public String toString() {
            boolean z10 = this.f54154e;
            boolean z11 = this.f54155i;
            x1 x1Var = this.f54156o;
            v.b bVar = this.f54157p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f54154e ? 1 : 0);
            dest.writeInt(this.f54155i ? 1 : 0);
            dest.writeParcelable(this.f54156o, i10);
            dest.writeString(this.f54157p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54154e = z10;
            this.f54155i = z11;
            this.f54156o = x1Var;
            this.f54157p = cameraFacingMode;
            this.f54158q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f54159e;

        /* renamed from: i  reason: collision with root package name */
        private final List f54160i;

        /* renamed from: o  reason: collision with root package name */
        private final String f54161o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f54162p;

        /* renamed from: q  reason: collision with root package name */
        private final long f54163q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f54164r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f54165s;

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
                return new i(arrayList, arrayList2, parcel.readString(), (fo.v) parcel.readParcelable(i.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(i.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(List selfies, List selfiesToReview, String str, fo.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(selfiesToReview, "selfiesToReview");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54159e = selfies;
            this.f54160i = selfiesToReview;
            this.f54161o = str;
            this.f54162p = cameraProperties;
            this.f54163q = j10;
            this.f54164r = x1Var;
            this.f54165s = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f54162p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f54163q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54164r;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54165s;
        }

        @Override // wp.x1
        public List q() {
            return this.f54159e;
        }

        public final List s() {
            return this.f54160i;
        }

        public final String t() {
            return this.f54161o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f54159e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f54160i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f54161o);
            dest.writeParcelable(this.f54162p, i10);
            dest.writeLong(this.f54163q);
            dest.writeParcelable(this.f54164r, i10);
            dest.writeString(this.f54165s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f54169e;

        /* renamed from: i  reason: collision with root package name */
        private final List f54170i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f54171o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f54172p;

        /* renamed from: q  reason: collision with root package name */
        private final long f54173q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f54174r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f54175s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f54176t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f54177u;

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
                fo.v vVar = (fo.v) parcel.readParcelable(cls.getClassLoader());
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
        public k(List selfies, List posesNeeded, boolean z10, fo.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54169e = selfies;
            this.f54170i = posesNeeded;
            this.f54171o = z10;
            this.f54172p = cameraProperties;
            this.f54173q = j10;
            this.f54174r = x1Var;
            this.f54175s = poseConfigs;
            this.f54176t = cameraFacingMode;
            this.f54177u = z11;
        }

        public static /* synthetic */ k t(k kVar, List list, List list2, boolean z10, fo.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f54169e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f54170i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f54171o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f54172p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f54173q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f54174r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f54175s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f54176t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f54177u;
            }
            long j11 = j10;
            boolean z12 = z10;
            fo.v vVar2 = vVar;
            return kVar.s(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54171o;
        }

        public final fo.v b() {
            return this.f54172p;
        }

        @Override // wp.z
        public List c() {
            return this.f54170i;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54175s;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (Intrinsics.areEqual(this.f54169e, kVar.f54169e) && Intrinsics.areEqual(this.f54170i, kVar.f54170i) && this.f54171o == kVar.f54171o && Intrinsics.areEqual(this.f54172p, kVar.f54172p) && this.f54173q == kVar.f54173q && Intrinsics.areEqual(this.f54174r, kVar.f54174r) && Intrinsics.areEqual(this.f54175s, kVar.f54175s) && this.f54176t == kVar.f54176t && this.f54177u == kVar.f54177u) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((this.f54169e.hashCode() * 31) + this.f54170i.hashCode()) * 31) + Boolean.hashCode(this.f54171o)) * 31) + this.f54172p.hashCode()) * 31) + Long.hashCode(this.f54173q)) * 31;
            x1 x1Var = this.f54174r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f54175s.hashCode()) * 31) + this.f54176t.hashCode()) * 31) + Boolean.hashCode(this.f54177u);
        }

        @Override // wp.z
        public boolean k() {
            return this.f54177u;
        }

        public final long l() {
            return this.f54173q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54174r;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54176t;
        }

        @Override // wp.x1
        public List q() {
            return this.f54169e;
        }

        public final k s(List selfies, List posesNeeded, boolean z10, fo.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new k(selfies, posesNeeded, z10, cameraProperties, j10, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            List list = this.f54169e;
            List list2 = this.f54170i;
            boolean z10 = this.f54171o;
            fo.v vVar = this.f54172p;
            long j10 = this.f54173q;
            x1 x1Var = this.f54174r;
            s0 s0Var = this.f54175s;
            v.b bVar = this.f54176t;
            boolean z11 = this.f54177u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f54169e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f54170i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f54171o ? 1 : 0);
            dest.writeParcelable(this.f54172p, i10);
            dest.writeLong(this.f54173q);
            dest.writeParcelable(this.f54174r, i10);
            this.f54175s.writeToParcel(dest, i10);
            dest.writeString(this.f54176t.name());
            dest.writeInt(this.f54177u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f54192e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f54193i;

        /* renamed from: o  reason: collision with root package name */
        private final long f54194o;

        /* renamed from: p  reason: collision with root package name */
        private final float f54195p;

        /* renamed from: q  reason: collision with root package name */
        private final jo.a f54196q;

        /* renamed from: r  reason: collision with root package name */
        private final List f54197r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f54198s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f54199t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f54200u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f54201v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f54202w;

        /* renamed from: x  reason: collision with root package name */
        private final List f54203x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final m createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                long readLong = parcel.readLong();
                fo.v vVar = (fo.v) parcel.readParcelable(m.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                jo.a aVar = (jo.a) parcel.readParcelable(m.class.getClassLoader());
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
        public m(long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54192e = j10;
            this.f54193i = cameraProperties;
            this.f54194o = j11;
            this.f54195p = f10;
            this.f54196q = aVar;
            this.f54197r = posesNeeded;
            this.f54198s = x1Var;
            this.f54199t = poseConfigs;
            this.f54200u = z10;
            this.f54201v = cameraFacingMode;
            this.f54202w = z11;
            this.f54203x = CollectionsKt.l();
        }

        public static /* synthetic */ m t(m mVar, long j10, fo.v vVar, long j11, float f10, jo.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            long j12;
            fo.v vVar2;
            long j13;
            float f11;
            jo.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar2;
            boolean z13;
            if ((i10 & 1) != 0) {
                j12 = mVar.f54192e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f54193i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f54194o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f54195p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f54196q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f54197r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f54198s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f54199t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f54200u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f54201v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f54202w;
            } else {
                z13 = z11;
            }
            return mVar.s(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54200u;
        }

        public final fo.v b() {
            return this.f54193i;
        }

        @Override // wp.z
        public List c() {
            return this.f54197r;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54199t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (this.f54192e == mVar.f54192e && Intrinsics.areEqual(this.f54193i, mVar.f54193i) && this.f54194o == mVar.f54194o && Float.compare(this.f54195p, mVar.f54195p) == 0 && Intrinsics.areEqual(this.f54196q, mVar.f54196q) && Intrinsics.areEqual(this.f54197r, mVar.f54197r) && Intrinsics.areEqual(this.f54198s, mVar.f54198s) && Intrinsics.areEqual(this.f54199t, mVar.f54199t) && this.f54200u == mVar.f54200u && this.f54201v == mVar.f54201v && this.f54202w == mVar.f54202w) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // wp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Long.hashCode(this.f54192e) * 31) + this.f54193i.hashCode()) * 31) + Long.hashCode(this.f54194o)) * 31) + Float.hashCode(this.f54195p)) * 31;
            jo.a aVar = this.f54196q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f54197r.hashCode()) * 31;
            x1 x1Var = this.f54198s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f54199t.hashCode()) * 31) + Boolean.hashCode(this.f54200u)) * 31) + this.f54201v.hashCode()) * 31) + Boolean.hashCode(this.f54202w);
        }

        public final long i() {
            return this.f54192e;
        }

        @Override // wp.z
        public boolean k() {
            return this.f54202w;
        }

        public final long l() {
            return this.f54194o;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54198s;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54201v;
        }

        @Override // wp.x1
        public List q() {
            return this.f54203x;
        }

        public final m s(long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            long j10 = this.f54192e;
            fo.v vVar = this.f54193i;
            long j11 = this.f54194o;
            float f10 = this.f54195p;
            jo.a aVar = this.f54196q;
            List list = this.f54197r;
            x1 x1Var = this.f54198s;
            s0 s0Var = this.f54199t;
            boolean z10 = this.f54200u;
            v.b bVar = this.f54201v;
            boolean z11 = this.f54202w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final jo.a u() {
            return this.f54196q;
        }

        public final float v() {
            return this.f54195p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f54192e);
            dest.writeParcelable(this.f54193i, i10);
            dest.writeLong(this.f54194o);
            dest.writeFloat(this.f54195p);
            dest.writeParcelable(this.f54196q, i10);
            List<a1.b> list = this.f54197r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f54198s, i10);
            this.f54199t.writeToParcel(dest, i10);
            dest.writeInt(this.f54200u ? 1 : 0);
            dest.writeString(this.f54201v.name());
            dest.writeInt(this.f54202w ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f54204e;

        /* renamed from: i  reason: collision with root package name */
        private final String f54205i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f54206o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54207p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f54208q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f54209r;

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
                return new n(arrayList, parcel.readString(), (fo.v) parcel.readParcelable(n.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(n.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final n[] newArray(int i10) {
                return new n[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(List selfies, String str, fo.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54204e = selfies;
            this.f54205i = str;
            this.f54206o = cameraProperties;
            this.f54207p = j10;
            this.f54208q = x1Var;
            this.f54209r = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f54206o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f54207p;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54208q;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54209r;
        }

        @Override // wp.x1
        public List q() {
            return this.f54204e;
        }

        public final String s() {
            return this.f54205i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f54204e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f54205i);
            dest.writeParcelable(this.f54206o, i10);
            dest.writeLong(this.f54207p);
            dest.writeParcelable(this.f54208q, i10);
            dest.writeString(this.f54209r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f54210e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f54211i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f54212o;

        /* renamed from: p  reason: collision with root package name */
        private final List f54213p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f54214q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f54215r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f54216s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f54217t;

        /* renamed from: u  reason: collision with root package name */
        private final List f54218u;

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

        public static /* synthetic */ o t(o oVar, boolean z10, boolean z11, x1 x1Var, List list, s0 s0Var, boolean z12, v.b bVar, boolean z13, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                z10 = oVar.f54210e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f54211i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f54212o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f54213p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f54214q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f54215r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f54216s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f54217t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.s(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54215r;
        }

        @Override // wp.z
        public List c() {
            return this.f54213p;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54214q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (this.f54210e == oVar.f54210e && this.f54211i == oVar.f54211i && Intrinsics.areEqual(this.f54212o, oVar.f54212o) && Intrinsics.areEqual(this.f54213p, oVar.f54213p) && Intrinsics.areEqual(this.f54214q, oVar.f54214q) && this.f54215r == oVar.f54215r && this.f54216s == oVar.f54216s && this.f54217t == oVar.f54217t) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f54210e) * 31) + Boolean.hashCode(this.f54211i)) * 31;
            x1 x1Var = this.f54212o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f54213p.hashCode()) * 31) + this.f54214q.hashCode()) * 31) + Boolean.hashCode(this.f54215r)) * 31) + this.f54216s.hashCode()) * 31) + Boolean.hashCode(this.f54217t);
        }

        @Override // wp.z
        public boolean k() {
            return this.f54217t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54212o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54216s;
        }

        @Override // wp.x1
        public List q() {
            return this.f54218u;
        }

        public final o s(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public String toString() {
            boolean z10 = this.f54210e;
            boolean z11 = this.f54211i;
            x1 x1Var = this.f54212o;
            List list = this.f54213p;
            s0 s0Var = this.f54214q;
            boolean z12 = this.f54215r;
            v.b bVar = this.f54216s;
            boolean z13 = this.f54217t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final boolean u() {
            return this.f54211i;
        }

        public final boolean v() {
            return this.f54210e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f54210e ? 1 : 0);
            dest.writeInt(this.f54211i ? 1 : 0);
            dest.writeParcelable(this.f54212o, i10);
            List<a1.b> list = this.f54213p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f54214q.writeToParcel(dest, i10);
            dest.writeInt(this.f54215r ? 1 : 0);
            dest.writeString(this.f54216s.name());
            dest.writeInt(this.f54217t ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54210e = z10;
            this.f54211i = z11;
            this.f54212o = x1Var;
            this.f54213p = posesNeeded;
            this.f54214q = poseConfigs;
            this.f54215r = z12;
            this.f54216s = cameraFacingMode;
            this.f54217t = z13;
            this.f54218u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f54219e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f54220i;

        /* renamed from: o  reason: collision with root package name */
        private final long f54221o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f54222p;

        /* renamed from: q  reason: collision with root package name */
        private final List f54223q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f54224r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f54225s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f54226t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f54227u;

        /* renamed from: v  reason: collision with root package name */
        private final List f54228v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final p createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                fo.v vVar = (fo.v) parcel.readParcelable(p.class.getClassLoader());
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
        public p(String str, fo.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54219e = str;
            this.f54220i = cameraProperties;
            this.f54221o = j10;
            this.f54222p = x1Var;
            this.f54223q = posesNeeded;
            this.f54224r = poseConfigs;
            this.f54225s = z10;
            this.f54226t = cameraFacingMode;
            this.f54227u = z11;
            this.f54228v = CollectionsKt.l();
        }

        public static /* synthetic */ p t(p pVar, String str, fo.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f54219e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f54220i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f54221o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f54222p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f54223q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f54224r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f54225s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f54226t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f54227u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.s(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54225s;
        }

        @Override // wp.z
        public List c() {
            return this.f54223q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54224r;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (Intrinsics.areEqual(this.f54219e, pVar.f54219e) && Intrinsics.areEqual(this.f54220i, pVar.f54220i) && this.f54221o == pVar.f54221o && Intrinsics.areEqual(this.f54222p, pVar.f54222p) && Intrinsics.areEqual(this.f54223q, pVar.f54223q) && Intrinsics.areEqual(this.f54224r, pVar.f54224r) && this.f54225s == pVar.f54225s && this.f54226t == pVar.f54226t && this.f54227u == pVar.f54227u) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            String str = this.f54219e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f54220i.hashCode()) * 31) + Long.hashCode(this.f54221o)) * 31;
            x1 x1Var = this.f54222p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f54223q.hashCode()) * 31) + this.f54224r.hashCode()) * 31) + Boolean.hashCode(this.f54225s)) * 31) + this.f54226t.hashCode()) * 31) + Boolean.hashCode(this.f54227u);
        }

        @Override // wp.z
        public boolean k() {
            return this.f54227u;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54222p;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54226t;
        }

        @Override // wp.x1
        public List q() {
            return this.f54228v;
        }

        public final p s(String str, fo.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            String str = this.f54219e;
            fo.v vVar = this.f54220i;
            long j10 = this.f54221o;
            x1 x1Var = this.f54222p;
            List list = this.f54223q;
            s0 s0Var = this.f54224r;
            boolean z10 = this.f54225s;
            v.b bVar = this.f54226t;
            boolean z11 = this.f54227u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f54219e);
            dest.writeParcelable(this.f54220i, i10);
            dest.writeLong(this.f54221o);
            dest.writeParcelable(this.f54222p, i10);
            List<a1.b> list = this.f54223q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f54224r.writeToParcel(dest, i10);
            dest.writeInt(this.f54225s ? 1 : 0);
            dest.writeString(this.f54226t.name());
            dest.writeInt(this.f54227u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f54229e;

        /* renamed from: i  reason: collision with root package name */
        private final String f54230i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f54231o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54232p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f54233q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f54234r;

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
                return new q(arrayList, parcel.readString(), (fo.v) parcel.readParcelable(q.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(q.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final q[] newArray(int i10) {
                return new q[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(List selfies, String webRtcObjectId, fo.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(webRtcObjectId, "webRtcObjectId");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54229e = selfies;
            this.f54230i = webRtcObjectId;
            this.f54231o = cameraProperties;
            this.f54232p = j10;
            this.f54233q = x1Var;
            this.f54234r = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f54231o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f54232p;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54233q;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54234r;
        }

        @Override // wp.x1
        public List q() {
            return this.f54229e;
        }

        public final String s() {
            return this.f54230i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f54229e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f54230i);
            dest.writeParcelable(this.f54231o, i10);
            dest.writeLong(this.f54232p);
            dest.writeParcelable(this.f54233q, i10);
            dest.writeString(this.f54234r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 o();

    public abstract v.b p();

    public abstract List q();

    public final void r(boolean z10) {
        this.f54089d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f54166e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f54167i;

        /* renamed from: o  reason: collision with root package name */
        private final List f54168o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f24136d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54166e;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54167i;
        }

        @Override // wp.x1
        public List q() {
            return this.f54168o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f54166e, i10);
            dest.writeString(this.f54167i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54166e = x1Var;
            this.f54167i = cameraFacingMode;
            this.f54168o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f54178e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f54179i;

        /* renamed from: o  reason: collision with root package name */
        private final float f54180o;

        /* renamed from: p  reason: collision with root package name */
        private final jo.a f54181p;

        /* renamed from: q  reason: collision with root package name */
        private final List f54182q;

        /* renamed from: r  reason: collision with root package name */
        private final long f54183r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f54184s;

        /* renamed from: t  reason: collision with root package name */
        private final long f54185t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f54186u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f54187v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f54188w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f54189x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f54190y;

        /* renamed from: z  reason: collision with root package name */
        private final List f54191z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                boolean z10;
                jo.b valueOf;
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
                    valueOf = jo.b.valueOf(parcel.readString());
                }
                jo.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                jo.a aVar = (jo.a) parcel.readParcelable(l.class.getClassLoader());
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
                fo.v vVar = (fo.v) parcel.readParcelable(l.class.getClassLoader());
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

        public /* synthetic */ l(boolean z10, jo.b bVar, float f10, jo.a aVar, List list, long j10, boolean z11, long j11, fo.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? jo.b.f31776d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
        }

        public static /* synthetic */ l t(l lVar, boolean z10, jo.b bVar, float f10, jo.a aVar, List list, long j10, boolean z11, long j11, fo.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, Object obj) {
            boolean z13;
            jo.b bVar3;
            float f11;
            jo.a aVar2;
            List list2;
            long j12;
            boolean z14;
            long j13;
            fo.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z15;
            if ((i10 & 1) != 0) {
                z13 = lVar.f54178e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f54179i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f54180o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f54181p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f54182q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f54183r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f54184s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f54185t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f54186u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f54187v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f54188w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f54189x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f54190y;
            } else {
                z15 = z12;
            }
            return lVar.s(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54184s;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f54186u;
        }

        @Override // wp.z
        public List c() {
            return this.f54182q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54188w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (this.f54178e == lVar.f54178e && this.f54179i == lVar.f54179i && Float.compare(this.f54180o, lVar.f54180o) == 0 && Intrinsics.areEqual(this.f54181p, lVar.f54181p) && Intrinsics.areEqual(this.f54182q, lVar.f54182q) && this.f54183r == lVar.f54183r && this.f54184s == lVar.f54184s && this.f54185t == lVar.f54185t && Intrinsics.areEqual(this.f54186u, lVar.f54186u) && Intrinsics.areEqual(this.f54187v, lVar.f54187v) && Intrinsics.areEqual(this.f54188w, lVar.f54188w) && this.f54189x == lVar.f54189x && this.f54190y == lVar.f54190y) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // wp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Boolean.hashCode(this.f54178e) * 31;
            jo.b bVar = this.f54179i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f54180o)) * 31;
            jo.a aVar = this.f54181p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f54182q.hashCode()) * 31) + Long.hashCode(this.f54183r)) * 31) + Boolean.hashCode(this.f54184s)) * 31) + Long.hashCode(this.f54185t)) * 31) + this.f54186u.hashCode()) * 31;
            x1 x1Var = this.f54187v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f54188w.hashCode()) * 31) + this.f54189x.hashCode()) * 31) + Boolean.hashCode(this.f54190y);
        }

        @Override // wp.a0
        public long i() {
            return this.f54183r;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f54190y;
        }

        @Override // wp.a0
        public long l() {
            return this.f54185t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54187v;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54189x;
        }

        @Override // wp.x1
        public List q() {
            return this.f54191z;
        }

        public final l s(boolean z10, jo.b bVar, float f10, jo.a aVar, List posesNeeded, long j10, boolean z11, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public String toString() {
            boolean z10 = this.f54178e;
            jo.b bVar = this.f54179i;
            float f10 = this.f54180o;
            jo.a aVar = this.f54181p;
            List list = this.f54182q;
            long j10 = this.f54183r;
            boolean z11 = this.f54184s;
            long j11 = this.f54185t;
            fo.v vVar = this.f54186u;
            x1 x1Var = this.f54187v;
            s0 s0Var = this.f54188w;
            v.b bVar2 = this.f54189x;
            boolean z12 = this.f54190y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final jo.a u() {
            return this.f54181p;
        }

        public final float v() {
            return this.f54180o;
        }

        public final jo.b w() {
            return this.f54179i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f54178e ? 1 : 0);
            jo.b bVar = this.f54179i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f54180o);
            dest.writeParcelable(this.f54181p, i10);
            List<a1.b> list = this.f54182q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f54183r);
            dest.writeInt(this.f54184s ? 1 : 0);
            dest.writeLong(this.f54185t);
            dest.writeParcelable(this.f54186u, i10);
            dest.writeParcelable(this.f54187v, i10);
            this.f54188w.writeToParcel(dest, i10);
            dest.writeString(this.f54189x.name());
            dest.writeInt(this.f54190y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, jo.b bVar, float f10, jo.a aVar, List posesNeeded, long j10, boolean z11, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f54178e = z10;
            this.f54179i = bVar;
            this.f54180o = f10;
            this.f54181p = aVar;
            this.f54182q = posesNeeded;
            this.f54183r = j10;
            this.f54184s = z11;
            this.f54185t = j11;
            this.f54186u = cameraProperties;
            this.f54187v = x1Var;
            this.f54188w = poseConfigs;
            this.f54189x = cameraFacingMode;
            this.f54190y = z12;
            this.f54191z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0747a();

        /* renamed from: e  reason: collision with root package name */
        private final jo.b f54090e;

        /* renamed from: i  reason: collision with root package name */
        private final float f54091i;

        /* renamed from: o  reason: collision with root package name */
        private final jo.a f54092o;

        /* renamed from: p  reason: collision with root package name */
        private final List f54093p;

        /* renamed from: q  reason: collision with root package name */
        private final List f54094q;

        /* renamed from: r  reason: collision with root package name */
        private final long f54095r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f54096s;

        /* renamed from: t  reason: collision with root package name */
        private final long f54097t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f54098u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f54099v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f54100w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f54101x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f54102y;

        /* renamed from: z  reason: collision with root package name */
        private final g f54103z;

        /* renamed from: wp.x1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0747a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                jo.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = jo.b.valueOf(parcel.readString());
                }
                jo.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                jo.a aVar = (jo.a) parcel.readParcelable(a.class.getClassLoader());
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
                fo.v vVar = (fo.v) parcel.readParcelable(a.class.getClassLoader());
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

        public /* synthetic */ a(jo.b bVar, float f10, jo.a aVar, List list, List list2, long j10, boolean z10, long j11, fo.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f54148d : gVar);
        }

        public static /* synthetic */ a t(a aVar, jo.b bVar, float f10, jo.a aVar2, List list, List list2, long j10, boolean z10, long j11, fo.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, Object obj) {
            jo.b bVar3;
            float f11;
            jo.a aVar3;
            List list3;
            List list4;
            long j12;
            boolean z12;
            long j13;
            fo.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            g gVar2;
            if ((i10 & 1) != 0) {
                bVar3 = aVar.f54090e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f54091i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f54092o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f54093p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f54094q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f54095r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f54096s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f54097t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f54098u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f54099v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f54100w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f54101x;
            } else {
                bVar4 = bVar2;
            }
            jo.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f54102y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f54103z;
            } else {
                gVar2 = gVar;
            }
            return aVar.s(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        @Override // wp.z
        public boolean a() {
            return this.f54096s;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f54098u;
        }

        @Override // wp.z
        public List c() {
            return this.f54094q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f54100w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.z
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
            if (this.f54090e == aVar.f54090e && Float.compare(this.f54091i, aVar.f54091i) == 0 && Intrinsics.areEqual(this.f54092o, aVar.f54092o) && Intrinsics.areEqual(this.f54093p, aVar.f54093p) && Intrinsics.areEqual(this.f54094q, aVar.f54094q) && this.f54095r == aVar.f54095r && this.f54096s == aVar.f54096s && this.f54097t == aVar.f54097t && Intrinsics.areEqual(this.f54098u, aVar.f54098u) && Intrinsics.areEqual(this.f54099v, aVar.f54099v) && Intrinsics.areEqual(this.f54100w, aVar.f54100w) && this.f54101x == aVar.f54101x && this.f54102y == aVar.f54102y && this.f54103z == aVar.f54103z) {
                return true;
            }
            return false;
        }

        @Override // wp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // wp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            jo.b bVar = this.f54090e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f54091i)) * 31;
            jo.a aVar = this.f54092o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f54093p.hashCode()) * 31) + this.f54094q.hashCode()) * 31) + Long.hashCode(this.f54095r)) * 31) + Boolean.hashCode(this.f54096s)) * 31) + Long.hashCode(this.f54097t)) * 31) + this.f54098u.hashCode()) * 31;
            x1 x1Var = this.f54099v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f54100w.hashCode()) * 31) + this.f54101x.hashCode()) * 31) + Boolean.hashCode(this.f54102y)) * 31) + this.f54103z.hashCode();
        }

        @Override // wp.a0
        public long i() {
            return this.f54095r;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f54102y;
        }

        @Override // wp.a0
        public long l() {
            return this.f54097t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f54099v;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f54101x;
        }

        @Override // wp.x1
        public List q() {
            return this.f54093p;
        }

        public final a s(jo.b bVar, float f10, jo.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            return new a(bVar, f10, aVar, selfies, posesNeeded, j10, z10, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z11, flashState);
        }

        public String toString() {
            jo.b bVar = this.f54090e;
            float f10 = this.f54091i;
            jo.a aVar = this.f54092o;
            List list = this.f54093p;
            List list2 = this.f54094q;
            long j10 = this.f54095r;
            boolean z10 = this.f54096s;
            long j11 = this.f54097t;
            fo.v vVar = this.f54098u;
            x1 x1Var = this.f54099v;
            s0 s0Var = this.f54100w;
            v.b bVar2 = this.f54101x;
            boolean z11 = this.f54102y;
            g gVar = this.f54103z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final jo.a u() {
            return this.f54092o;
        }

        public final g v() {
            return this.f54103z;
        }

        public final float w() {
            return this.f54091i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            jo.b bVar = this.f54090e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f54091i);
            dest.writeParcelable(this.f54092o, i10);
            List<Parcelable> list = this.f54093p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f54094q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f54095r);
            dest.writeInt(this.f54096s ? 1 : 0);
            dest.writeLong(this.f54097t);
            dest.writeParcelable(this.f54098u, i10);
            dest.writeParcelable(this.f54099v, i10);
            this.f54100w.writeToParcel(dest, i10);
            dest.writeString(this.f54101x.name());
            dest.writeInt(this.f54102y ? 1 : 0);
            dest.writeString(this.f54103z.name());
        }

        public final jo.b x() {
            return this.f54090e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(jo.b bVar, float f10, jo.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            this.f54090e = bVar;
            this.f54091i = f10;
            this.f54092o = aVar;
            this.f54093p = selfies;
            this.f54094q = posesNeeded;
            this.f54095r = j10;
            this.f54096s = z10;
            this.f54097t = j11;
            this.f54098u = cameraProperties;
            this.f54099v = x1Var;
            this.f54100w = poseConfigs;
            this.f54101x = cameraFacingMode;
            this.f54102y = z11;
            this.f54103z = flashState;
        }
    }
}
