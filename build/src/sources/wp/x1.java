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
    private boolean f53520d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f53535e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f53536i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f53537o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f53538p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f53539q;

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
            this.f53535e = nextState;
            this.f53536i = completedPose;
            this.f53537o = x1Var;
            this.f53538p = cameraFacingMode;
            this.f53539q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53537o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53538p;
        }

        @Override // wp.x1
        public List q() {
            return this.f53535e.q();
        }

        public final a1.b s() {
            return this.f53536i;
        }

        public final x1 t() {
            return this.f53535e;
        }

        public final boolean u() {
            return this.f53539q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f53535e, i10);
            dest.writeString(this.f53536i.name());
            dest.writeParcelable(this.f53537o, i10);
            dest.writeString(this.f53538p.name());
            dest.writeInt(this.f53539q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f53540e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f53541i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53542o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f53543p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53544q;

        /* renamed from: r  reason: collision with root package name */
        private final float f53545r;

        /* renamed from: s  reason: collision with root package name */
        private final jo.a f53546s;

        /* renamed from: t  reason: collision with root package name */
        private final List f53547t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f53548u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f53549v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f53550w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f53551x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f53552y;

        /* renamed from: z  reason: collision with root package name */
        private final List f53553z;

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
                i12 = cVar.f53540e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f53541i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f53542o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f53543p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f53544q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f53545r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f53546s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f53547t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f53548u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f53549v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f53550w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f53551x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f53552y;
            } else {
                z13 = z11;
            }
            return cVar.s(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53550w;
        }

        public final fo.v b() {
            return this.f53543p;
        }

        @Override // wp.z
        public List c() {
            return this.f53547t;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53549v;
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
            if (this.f53540e == cVar.f53540e && this.f53541i == cVar.f53541i && this.f53542o == cVar.f53542o && Intrinsics.areEqual(this.f53543p, cVar.f53543p) && this.f53544q == cVar.f53544q && Float.compare(this.f53545r, cVar.f53545r) == 0 && Intrinsics.areEqual(this.f53546s, cVar.f53546s) && Intrinsics.areEqual(this.f53547t, cVar.f53547t) && Intrinsics.areEqual(this.f53548u, cVar.f53548u) && Intrinsics.areEqual(this.f53549v, cVar.f53549v) && this.f53550w == cVar.f53550w && this.f53551x == cVar.f53551x && this.f53552y == cVar.f53552y) {
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
            int hashCode3 = Integer.hashCode(this.f53540e) * 31;
            jo.b bVar = this.f53541i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f53542o)) * 31) + this.f53543p.hashCode()) * 31) + Long.hashCode(this.f53544q)) * 31) + Float.hashCode(this.f53545r)) * 31;
            jo.a aVar = this.f53546s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f53547t.hashCode()) * 31;
            x1 x1Var = this.f53548u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f53549v.hashCode()) * 31) + Boolean.hashCode(this.f53550w)) * 31) + this.f53551x.hashCode()) * 31) + Boolean.hashCode(this.f53552y);
        }

        public final long i() {
            return this.f53542o;
        }

        @Override // wp.z
        public boolean k() {
            return this.f53552y;
        }

        public final long l() {
            return this.f53544q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53548u;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53551x;
        }

        @Override // wp.x1
        public List q() {
            return this.f53553z;
        }

        public final c s(int i10, jo.b bVar, long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f53540e;
            jo.b bVar = this.f53541i;
            long j10 = this.f53542o;
            fo.v vVar = this.f53543p;
            long j11 = this.f53544q;
            float f10 = this.f53545r;
            jo.a aVar = this.f53546s;
            List list = this.f53547t;
            x1 x1Var = this.f53548u;
            s0 s0Var = this.f53549v;
            boolean z10 = this.f53550w;
            v.b bVar2 = this.f53551x;
            boolean z11 = this.f53552y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final jo.a u() {
            return this.f53546s;
        }

        public final int v() {
            return this.f53540e;
        }

        public final float w() {
            return this.f53545r;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53540e);
            jo.b bVar = this.f53541i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f53542o);
            dest.writeParcelable(this.f53543p, i10);
            dest.writeLong(this.f53544q);
            dest.writeFloat(this.f53545r);
            dest.writeParcelable(this.f53546s, i10);
            List<a1.b> list = this.f53547t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f53548u, i10);
            this.f53549v.writeToParcel(dest, i10);
            dest.writeInt(this.f53550w ? 1 : 0);
            dest.writeString(this.f53551x.name());
            dest.writeInt(this.f53552y ? 1 : 0);
        }

        public final jo.b x() {
            return this.f53541i;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, jo.b bVar, long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53540e = i10;
            this.f53541i = bVar;
            this.f53542o = j10;
            this.f53543p = cameraProperties;
            this.f53544q = j11;
            this.f53545r = f10;
            this.f53546s = aVar;
            this.f53547t = posesNeeded;
            this.f53548u = x1Var;
            this.f53549v = poseConfigs;
            this.f53550w = z10;
            this.f53551x = cameraFacingMode;
            this.f53552y = z11;
            this.f53553z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f53554e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f53555i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f53556o;

        /* renamed from: p  reason: collision with root package name */
        private final List f53557p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53558q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f53559r;

        /* renamed from: s  reason: collision with root package name */
        private final long f53560s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f53561t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f53562u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f53563v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f53564w;

        /* renamed from: x  reason: collision with root package name */
        private final List f53565x;

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
                i10 = dVar.f53554e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f53555i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f53556o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f53557p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f53558q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f53559r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f53560s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f53561t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f53562u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f53563v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f53564w;
            } else {
                z13 = z11;
            }
            return dVar.s(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53559r;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f53556o;
        }

        @Override // wp.z
        public List c() {
            return this.f53557p;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53562u;
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
            if (this.f53554e == dVar.f53554e && this.f53555i == dVar.f53555i && Intrinsics.areEqual(this.f53556o, dVar.f53556o) && Intrinsics.areEqual(this.f53557p, dVar.f53557p) && this.f53558q == dVar.f53558q && this.f53559r == dVar.f53559r && this.f53560s == dVar.f53560s && Intrinsics.areEqual(this.f53561t, dVar.f53561t) && Intrinsics.areEqual(this.f53562u, dVar.f53562u) && this.f53563v == dVar.f53563v && this.f53564w == dVar.f53564w) {
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
            int hashCode2 = Integer.hashCode(this.f53554e) * 31;
            jo.b bVar = this.f53555i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f53556o.hashCode()) * 31) + this.f53557p.hashCode()) * 31) + Long.hashCode(this.f53558q)) * 31) + Boolean.hashCode(this.f53559r)) * 31) + Long.hashCode(this.f53560s)) * 31;
            x1 x1Var = this.f53561t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f53562u.hashCode()) * 31) + this.f53563v.hashCode()) * 31) + Boolean.hashCode(this.f53564w);
        }

        @Override // wp.a0
        public long i() {
            return this.f53558q;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53564w;
        }

        @Override // wp.a0
        public long l() {
            return this.f53560s;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53561t;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53563v;
        }

        @Override // wp.x1
        public List q() {
            return this.f53565x;
        }

        public final d s(int i10, jo.b bVar, fo.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f53554e;
            jo.b bVar = this.f53555i;
            fo.v vVar = this.f53556o;
            List list = this.f53557p;
            long j10 = this.f53558q;
            boolean z10 = this.f53559r;
            long j11 = this.f53560s;
            x1 x1Var = this.f53561t;
            s0 s0Var = this.f53562u;
            v.b bVar2 = this.f53563v;
            boolean z11 = this.f53564w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final int u() {
            return this.f53554e;
        }

        public final jo.b v() {
            return this.f53555i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53554e);
            jo.b bVar = this.f53555i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f53556o, i10);
            List<a1.b> list = this.f53557p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f53558q);
            dest.writeInt(this.f53559r ? 1 : 0);
            dest.writeLong(this.f53560s);
            dest.writeParcelable(this.f53561t, i10);
            this.f53562u.writeToParcel(dest, i10);
            dest.writeString(this.f53563v.name());
            dest.writeInt(this.f53564w ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, jo.b bVar, fo.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53554e = i10;
            this.f53555i = bVar;
            this.f53556o = cameraProperties;
            this.f53557p = posesNeeded;
            this.f53558q = j10;
            this.f53559r = z10;
            this.f53560s = j11;
            this.f53561t = x1Var;
            this.f53562u = poseConfigs;
            this.f53563v = cameraFacingMode;
            this.f53564w = z11;
            this.f53565x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53566e;

        /* renamed from: i  reason: collision with root package name */
        private final long f53567i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f53568o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f53569p;

        /* renamed from: q  reason: collision with root package name */
        private final fo.v f53570q;

        /* renamed from: r  reason: collision with root package name */
        private final long f53571r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f53572s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f53573t;

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
                list = eVar.f53566e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f53567i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f53568o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f53569p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f53570q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f53571r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f53572s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f53573t;
            }
            long j12 = j11;
            fo.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.s(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final fo.v b() {
            return this.f53570q;
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
            if (Intrinsics.areEqual(this.f53566e, eVar.f53566e) && this.f53567i == eVar.f53567i && this.f53568o == eVar.f53568o && this.f53569p == eVar.f53569p && Intrinsics.areEqual(this.f53570q, eVar.f53570q) && this.f53571r == eVar.f53571r && Intrinsics.areEqual(this.f53572s, eVar.f53572s) && this.f53573t == eVar.f53573t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f53566e.hashCode() * 31) + Long.hashCode(this.f53567i)) * 31) + Boolean.hashCode(this.f53568o)) * 31) + Boolean.hashCode(this.f53569p)) * 31) + this.f53570q.hashCode()) * 31) + Long.hashCode(this.f53571r)) * 31;
            x1 x1Var = this.f53572s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f53573t.hashCode();
        }

        public final long l() {
            return this.f53571r;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53572s;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53573t;
        }

        @Override // wp.x1
        public List q() {
            return this.f53566e;
        }

        public final e s(List selfies, long j10, boolean z10, boolean z11, fo.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public String toString() {
            List list = this.f53566e;
            long j10 = this.f53567i;
            boolean z10 = this.f53568o;
            boolean z11 = this.f53569p;
            fo.v vVar = this.f53570q;
            long j11 = this.f53571r;
            x1 x1Var = this.f53572s;
            v.b bVar = this.f53573t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final long u() {
            return this.f53567i;
        }

        public final boolean v() {
            return this.f53568o;
        }

        public final boolean w() {
            return this.f53569p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53566e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f53567i);
            dest.writeInt(this.f53568o ? 1 : 0);
            dest.writeInt(this.f53569p ? 1 : 0);
            dest.writeParcelable(this.f53570q, i10);
            dest.writeLong(this.f53571r);
            dest.writeParcelable(this.f53572s, i10);
            dest.writeString(this.f53573t.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, fo.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53566e = selfies;
            this.f53567i = j10;
            this.f53568o = z10;
            this.f53569p = z11;
            this.f53570q = cameraProperties;
            this.f53571r = j11;
            this.f53572s = x1Var;
            this.f53573t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53574e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f53575i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53576o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f53577p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f53578q;

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
            this.f53574e = selfies;
            this.f53575i = cameraProperties;
            this.f53576o = j10;
            this.f53577p = x1Var;
            this.f53578q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53577p;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53578q;
        }

        @Override // wp.x1
        public List q() {
            return this.f53574e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53574e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f53575i, i10);
            dest.writeLong(this.f53576o);
            dest.writeParcelable(this.f53577p, i10);
            dest.writeString(this.f53578q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f53579d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f53580e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f53581i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f53582o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f53583p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f53584q;

        static {
            g[] a10 = a();
            f53583p = a10;
            f53584q = hs.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f53579d, f53580e, f53581i, f53582o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f53583p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53585e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f53586i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f53587o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f53588p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53589q;

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
            if (this.f53585e == hVar.f53585e && this.f53586i == hVar.f53586i && Intrinsics.areEqual(this.f53587o, hVar.f53587o) && this.f53588p == hVar.f53588p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f53585e) * 31) + Boolean.hashCode(this.f53586i)) * 31;
            x1 x1Var = this.f53587o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f53588p.hashCode();
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53587o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53588p;
        }

        @Override // wp.x1
        public List q() {
            return this.f53589q;
        }

        public String toString() {
            boolean z10 = this.f53585e;
            boolean z11 = this.f53586i;
            x1 x1Var = this.f53587o;
            v.b bVar = this.f53588p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53585e ? 1 : 0);
            dest.writeInt(this.f53586i ? 1 : 0);
            dest.writeParcelable(this.f53587o, i10);
            dest.writeString(this.f53588p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53585e = z10;
            this.f53586i = z11;
            this.f53587o = x1Var;
            this.f53588p = cameraFacingMode;
            this.f53589q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53590e;

        /* renamed from: i  reason: collision with root package name */
        private final List f53591i;

        /* renamed from: o  reason: collision with root package name */
        private final String f53592o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f53593p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53594q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f53595r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f53596s;

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
            this.f53590e = selfies;
            this.f53591i = selfiesToReview;
            this.f53592o = str;
            this.f53593p = cameraProperties;
            this.f53594q = j10;
            this.f53595r = x1Var;
            this.f53596s = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f53593p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f53594q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53595r;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53596s;
        }

        @Override // wp.x1
        public List q() {
            return this.f53590e;
        }

        public final List s() {
            return this.f53591i;
        }

        public final String t() {
            return this.f53592o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53590e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f53591i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f53592o);
            dest.writeParcelable(this.f53593p, i10);
            dest.writeLong(this.f53594q);
            dest.writeParcelable(this.f53595r, i10);
            dest.writeString(this.f53596s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53600e;

        /* renamed from: i  reason: collision with root package name */
        private final List f53601i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f53602o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f53603p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53604q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f53605r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f53606s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f53607t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f53608u;

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
            this.f53600e = selfies;
            this.f53601i = posesNeeded;
            this.f53602o = z10;
            this.f53603p = cameraProperties;
            this.f53604q = j10;
            this.f53605r = x1Var;
            this.f53606s = poseConfigs;
            this.f53607t = cameraFacingMode;
            this.f53608u = z11;
        }

        public static /* synthetic */ k t(k kVar, List list, List list2, boolean z10, fo.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f53600e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f53601i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f53602o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f53603p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f53604q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f53605r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f53606s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f53607t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f53608u;
            }
            long j11 = j10;
            boolean z12 = z10;
            fo.v vVar2 = vVar;
            return kVar.s(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53602o;
        }

        public final fo.v b() {
            return this.f53603p;
        }

        @Override // wp.z
        public List c() {
            return this.f53601i;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53606s;
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
            if (Intrinsics.areEqual(this.f53600e, kVar.f53600e) && Intrinsics.areEqual(this.f53601i, kVar.f53601i) && this.f53602o == kVar.f53602o && Intrinsics.areEqual(this.f53603p, kVar.f53603p) && this.f53604q == kVar.f53604q && Intrinsics.areEqual(this.f53605r, kVar.f53605r) && Intrinsics.areEqual(this.f53606s, kVar.f53606s) && this.f53607t == kVar.f53607t && this.f53608u == kVar.f53608u) {
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
            int hashCode2 = ((((((((this.f53600e.hashCode() * 31) + this.f53601i.hashCode()) * 31) + Boolean.hashCode(this.f53602o)) * 31) + this.f53603p.hashCode()) * 31) + Long.hashCode(this.f53604q)) * 31;
            x1 x1Var = this.f53605r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f53606s.hashCode()) * 31) + this.f53607t.hashCode()) * 31) + Boolean.hashCode(this.f53608u);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53608u;
        }

        public final long l() {
            return this.f53604q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53605r;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53607t;
        }

        @Override // wp.x1
        public List q() {
            return this.f53600e;
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
            List list = this.f53600e;
            List list2 = this.f53601i;
            boolean z10 = this.f53602o;
            fo.v vVar = this.f53603p;
            long j10 = this.f53604q;
            x1 x1Var = this.f53605r;
            s0 s0Var = this.f53606s;
            v.b bVar = this.f53607t;
            boolean z11 = this.f53608u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53600e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f53601i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f53602o ? 1 : 0);
            dest.writeParcelable(this.f53603p, i10);
            dest.writeLong(this.f53604q);
            dest.writeParcelable(this.f53605r, i10);
            this.f53606s.writeToParcel(dest, i10);
            dest.writeString(this.f53607t.name());
            dest.writeInt(this.f53608u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f53623e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f53624i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53625o;

        /* renamed from: p  reason: collision with root package name */
        private final float f53626p;

        /* renamed from: q  reason: collision with root package name */
        private final jo.a f53627q;

        /* renamed from: r  reason: collision with root package name */
        private final List f53628r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f53629s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f53630t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f53631u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f53632v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f53633w;

        /* renamed from: x  reason: collision with root package name */
        private final List f53634x;

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
            this.f53623e = j10;
            this.f53624i = cameraProperties;
            this.f53625o = j11;
            this.f53626p = f10;
            this.f53627q = aVar;
            this.f53628r = posesNeeded;
            this.f53629s = x1Var;
            this.f53630t = poseConfigs;
            this.f53631u = z10;
            this.f53632v = cameraFacingMode;
            this.f53633w = z11;
            this.f53634x = CollectionsKt.l();
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
                j12 = mVar.f53623e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f53624i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f53625o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f53626p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f53627q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f53628r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f53629s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f53630t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f53631u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f53632v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f53633w;
            } else {
                z13 = z11;
            }
            return mVar.s(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53631u;
        }

        public final fo.v b() {
            return this.f53624i;
        }

        @Override // wp.z
        public List c() {
            return this.f53628r;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53630t;
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
            if (this.f53623e == mVar.f53623e && Intrinsics.areEqual(this.f53624i, mVar.f53624i) && this.f53625o == mVar.f53625o && Float.compare(this.f53626p, mVar.f53626p) == 0 && Intrinsics.areEqual(this.f53627q, mVar.f53627q) && Intrinsics.areEqual(this.f53628r, mVar.f53628r) && Intrinsics.areEqual(this.f53629s, mVar.f53629s) && Intrinsics.areEqual(this.f53630t, mVar.f53630t) && this.f53631u == mVar.f53631u && this.f53632v == mVar.f53632v && this.f53633w == mVar.f53633w) {
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
            int hashCode2 = ((((((Long.hashCode(this.f53623e) * 31) + this.f53624i.hashCode()) * 31) + Long.hashCode(this.f53625o)) * 31) + Float.hashCode(this.f53626p)) * 31;
            jo.a aVar = this.f53627q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f53628r.hashCode()) * 31;
            x1 x1Var = this.f53629s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f53630t.hashCode()) * 31) + Boolean.hashCode(this.f53631u)) * 31) + this.f53632v.hashCode()) * 31) + Boolean.hashCode(this.f53633w);
        }

        public final long i() {
            return this.f53623e;
        }

        @Override // wp.z
        public boolean k() {
            return this.f53633w;
        }

        public final long l() {
            return this.f53625o;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53629s;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53632v;
        }

        @Override // wp.x1
        public List q() {
            return this.f53634x;
        }

        public final m s(long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            long j10 = this.f53623e;
            fo.v vVar = this.f53624i;
            long j11 = this.f53625o;
            float f10 = this.f53626p;
            jo.a aVar = this.f53627q;
            List list = this.f53628r;
            x1 x1Var = this.f53629s;
            s0 s0Var = this.f53630t;
            boolean z10 = this.f53631u;
            v.b bVar = this.f53632v;
            boolean z11 = this.f53633w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final jo.a u() {
            return this.f53627q;
        }

        public final float v() {
            return this.f53626p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f53623e);
            dest.writeParcelable(this.f53624i, i10);
            dest.writeLong(this.f53625o);
            dest.writeFloat(this.f53626p);
            dest.writeParcelable(this.f53627q, i10);
            List<a1.b> list = this.f53628r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f53629s, i10);
            this.f53630t.writeToParcel(dest, i10);
            dest.writeInt(this.f53631u ? 1 : 0);
            dest.writeString(this.f53632v.name());
            dest.writeInt(this.f53633w ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53635e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53636i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f53637o;

        /* renamed from: p  reason: collision with root package name */
        private final long f53638p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f53639q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f53640r;

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
            this.f53635e = selfies;
            this.f53636i = str;
            this.f53637o = cameraProperties;
            this.f53638p = j10;
            this.f53639q = x1Var;
            this.f53640r = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f53637o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f53638p;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53639q;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53640r;
        }

        @Override // wp.x1
        public List q() {
            return this.f53635e;
        }

        public final String s() {
            return this.f53636i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53635e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f53636i);
            dest.writeParcelable(this.f53637o, i10);
            dest.writeLong(this.f53638p);
            dest.writeParcelable(this.f53639q, i10);
            dest.writeString(this.f53640r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53641e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f53642i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f53643o;

        /* renamed from: p  reason: collision with root package name */
        private final List f53644p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f53645q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f53646r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f53647s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f53648t;

        /* renamed from: u  reason: collision with root package name */
        private final List f53649u;

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
                z10 = oVar.f53641e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f53642i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f53643o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f53644p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f53645q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f53646r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f53647s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f53648t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.s(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53646r;
        }

        @Override // wp.z
        public List c() {
            return this.f53644p;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53645q;
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
            if (this.f53641e == oVar.f53641e && this.f53642i == oVar.f53642i && Intrinsics.areEqual(this.f53643o, oVar.f53643o) && Intrinsics.areEqual(this.f53644p, oVar.f53644p) && Intrinsics.areEqual(this.f53645q, oVar.f53645q) && this.f53646r == oVar.f53646r && this.f53647s == oVar.f53647s && this.f53648t == oVar.f53648t) {
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
            int hashCode2 = ((Boolean.hashCode(this.f53641e) * 31) + Boolean.hashCode(this.f53642i)) * 31;
            x1 x1Var = this.f53643o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f53644p.hashCode()) * 31) + this.f53645q.hashCode()) * 31) + Boolean.hashCode(this.f53646r)) * 31) + this.f53647s.hashCode()) * 31) + Boolean.hashCode(this.f53648t);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53648t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53643o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53647s;
        }

        @Override // wp.x1
        public List q() {
            return this.f53649u;
        }

        public final o s(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public String toString() {
            boolean z10 = this.f53641e;
            boolean z11 = this.f53642i;
            x1 x1Var = this.f53643o;
            List list = this.f53644p;
            s0 s0Var = this.f53645q;
            boolean z12 = this.f53646r;
            v.b bVar = this.f53647s;
            boolean z13 = this.f53648t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final boolean u() {
            return this.f53642i;
        }

        public final boolean v() {
            return this.f53641e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53641e ? 1 : 0);
            dest.writeInt(this.f53642i ? 1 : 0);
            dest.writeParcelable(this.f53643o, i10);
            List<a1.b> list = this.f53644p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f53645q.writeToParcel(dest, i10);
            dest.writeInt(this.f53646r ? 1 : 0);
            dest.writeString(this.f53647s.name());
            dest.writeInt(this.f53648t ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53641e = z10;
            this.f53642i = z11;
            this.f53643o = x1Var;
            this.f53644p = posesNeeded;
            this.f53645q = poseConfigs;
            this.f53646r = z12;
            this.f53647s = cameraFacingMode;
            this.f53648t = z13;
            this.f53649u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f53650e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f53651i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53652o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f53653p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53654q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f53655r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f53656s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f53657t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f53658u;

        /* renamed from: v  reason: collision with root package name */
        private final List f53659v;

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
            this.f53650e = str;
            this.f53651i = cameraProperties;
            this.f53652o = j10;
            this.f53653p = x1Var;
            this.f53654q = posesNeeded;
            this.f53655r = poseConfigs;
            this.f53656s = z10;
            this.f53657t = cameraFacingMode;
            this.f53658u = z11;
            this.f53659v = CollectionsKt.l();
        }

        public static /* synthetic */ p t(p pVar, String str, fo.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f53650e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f53651i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f53652o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f53653p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f53654q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f53655r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f53656s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f53657t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f53658u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.s(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53656s;
        }

        @Override // wp.z
        public List c() {
            return this.f53654q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53655r;
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
            if (Intrinsics.areEqual(this.f53650e, pVar.f53650e) && Intrinsics.areEqual(this.f53651i, pVar.f53651i) && this.f53652o == pVar.f53652o && Intrinsics.areEqual(this.f53653p, pVar.f53653p) && Intrinsics.areEqual(this.f53654q, pVar.f53654q) && Intrinsics.areEqual(this.f53655r, pVar.f53655r) && this.f53656s == pVar.f53656s && this.f53657t == pVar.f53657t && this.f53658u == pVar.f53658u) {
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
            String str = this.f53650e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f53651i.hashCode()) * 31) + Long.hashCode(this.f53652o)) * 31;
            x1 x1Var = this.f53653p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f53654q.hashCode()) * 31) + this.f53655r.hashCode()) * 31) + Boolean.hashCode(this.f53656s)) * 31) + this.f53657t.hashCode()) * 31) + Boolean.hashCode(this.f53658u);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53658u;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53653p;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53657t;
        }

        @Override // wp.x1
        public List q() {
            return this.f53659v;
        }

        public final p s(String str, fo.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            String str = this.f53650e;
            fo.v vVar = this.f53651i;
            long j10 = this.f53652o;
            x1 x1Var = this.f53653p;
            List list = this.f53654q;
            s0 s0Var = this.f53655r;
            boolean z10 = this.f53656s;
            v.b bVar = this.f53657t;
            boolean z11 = this.f53658u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f53650e);
            dest.writeParcelable(this.f53651i, i10);
            dest.writeLong(this.f53652o);
            dest.writeParcelable(this.f53653p, i10);
            List<a1.b> list = this.f53654q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f53655r.writeToParcel(dest, i10);
            dest.writeInt(this.f53656s ? 1 : 0);
            dest.writeString(this.f53657t.name());
            dest.writeInt(this.f53658u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53660e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53661i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f53662o;

        /* renamed from: p  reason: collision with root package name */
        private final long f53663p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f53664q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f53665r;

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
            this.f53660e = selfies;
            this.f53661i = webRtcObjectId;
            this.f53662o = cameraProperties;
            this.f53663p = j10;
            this.f53664q = x1Var;
            this.f53665r = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f53662o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f53663p;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53664q;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53665r;
        }

        @Override // wp.x1
        public List q() {
            return this.f53660e;
        }

        public final String s() {
            return this.f53661i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53660e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f53661i);
            dest.writeParcelable(this.f53662o, i10);
            dest.writeLong(this.f53663p);
            dest.writeParcelable(this.f53664q, i10);
            dest.writeString(this.f53665r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 o();

    public abstract v.b p();

    public abstract List q();

    public final void r(boolean z10) {
        this.f53520d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f53597e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f53598i;

        /* renamed from: o  reason: collision with root package name */
        private final List f53599o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f24135d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53597e;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53598i;
        }

        @Override // wp.x1
        public List q() {
            return this.f53599o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f53597e, i10);
            dest.writeString(this.f53598i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53597e = x1Var;
            this.f53598i = cameraFacingMode;
            this.f53599o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53609e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f53610i;

        /* renamed from: o  reason: collision with root package name */
        private final float f53611o;

        /* renamed from: p  reason: collision with root package name */
        private final jo.a f53612p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53613q;

        /* renamed from: r  reason: collision with root package name */
        private final long f53614r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f53615s;

        /* renamed from: t  reason: collision with root package name */
        private final long f53616t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f53617u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f53618v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f53619w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f53620x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f53621y;

        /* renamed from: z  reason: collision with root package name */
        private final List f53622z;

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
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? jo.b.f31207d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
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
                z13 = lVar.f53609e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f53610i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f53611o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f53612p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f53613q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f53614r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f53615s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f53616t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f53617u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f53618v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f53619w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f53620x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f53621y;
            } else {
                z15 = z12;
            }
            return lVar.s(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53615s;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f53617u;
        }

        @Override // wp.z
        public List c() {
            return this.f53613q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53619w;
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
            if (this.f53609e == lVar.f53609e && this.f53610i == lVar.f53610i && Float.compare(this.f53611o, lVar.f53611o) == 0 && Intrinsics.areEqual(this.f53612p, lVar.f53612p) && Intrinsics.areEqual(this.f53613q, lVar.f53613q) && this.f53614r == lVar.f53614r && this.f53615s == lVar.f53615s && this.f53616t == lVar.f53616t && Intrinsics.areEqual(this.f53617u, lVar.f53617u) && Intrinsics.areEqual(this.f53618v, lVar.f53618v) && Intrinsics.areEqual(this.f53619w, lVar.f53619w) && this.f53620x == lVar.f53620x && this.f53621y == lVar.f53621y) {
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
            int hashCode3 = Boolean.hashCode(this.f53609e) * 31;
            jo.b bVar = this.f53610i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f53611o)) * 31;
            jo.a aVar = this.f53612p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f53613q.hashCode()) * 31) + Long.hashCode(this.f53614r)) * 31) + Boolean.hashCode(this.f53615s)) * 31) + Long.hashCode(this.f53616t)) * 31) + this.f53617u.hashCode()) * 31;
            x1 x1Var = this.f53618v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f53619w.hashCode()) * 31) + this.f53620x.hashCode()) * 31) + Boolean.hashCode(this.f53621y);
        }

        @Override // wp.a0
        public long i() {
            return this.f53614r;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53621y;
        }

        @Override // wp.a0
        public long l() {
            return this.f53616t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53618v;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53620x;
        }

        @Override // wp.x1
        public List q() {
            return this.f53622z;
        }

        public final l s(boolean z10, jo.b bVar, float f10, jo.a aVar, List posesNeeded, long j10, boolean z11, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public String toString() {
            boolean z10 = this.f53609e;
            jo.b bVar = this.f53610i;
            float f10 = this.f53611o;
            jo.a aVar = this.f53612p;
            List list = this.f53613q;
            long j10 = this.f53614r;
            boolean z11 = this.f53615s;
            long j11 = this.f53616t;
            fo.v vVar = this.f53617u;
            x1 x1Var = this.f53618v;
            s0 s0Var = this.f53619w;
            v.b bVar2 = this.f53620x;
            boolean z12 = this.f53621y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final jo.a u() {
            return this.f53612p;
        }

        public final float v() {
            return this.f53611o;
        }

        public final jo.b w() {
            return this.f53610i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53609e ? 1 : 0);
            jo.b bVar = this.f53610i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f53611o);
            dest.writeParcelable(this.f53612p, i10);
            List<a1.b> list = this.f53613q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f53614r);
            dest.writeInt(this.f53615s ? 1 : 0);
            dest.writeLong(this.f53616t);
            dest.writeParcelable(this.f53617u, i10);
            dest.writeParcelable(this.f53618v, i10);
            this.f53619w.writeToParcel(dest, i10);
            dest.writeString(this.f53620x.name());
            dest.writeInt(this.f53621y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, jo.b bVar, float f10, jo.a aVar, List posesNeeded, long j10, boolean z11, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53609e = z10;
            this.f53610i = bVar;
            this.f53611o = f10;
            this.f53612p = aVar;
            this.f53613q = posesNeeded;
            this.f53614r = j10;
            this.f53615s = z11;
            this.f53616t = j11;
            this.f53617u = cameraProperties;
            this.f53618v = x1Var;
            this.f53619w = poseConfigs;
            this.f53620x = cameraFacingMode;
            this.f53621y = z12;
            this.f53622z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0747a();

        /* renamed from: e  reason: collision with root package name */
        private final jo.b f53521e;

        /* renamed from: i  reason: collision with root package name */
        private final float f53522i;

        /* renamed from: o  reason: collision with root package name */
        private final jo.a f53523o;

        /* renamed from: p  reason: collision with root package name */
        private final List f53524p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53525q;

        /* renamed from: r  reason: collision with root package name */
        private final long f53526r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f53527s;

        /* renamed from: t  reason: collision with root package name */
        private final long f53528t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f53529u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f53530v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f53531w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f53532x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f53533y;

        /* renamed from: z  reason: collision with root package name */
        private final g f53534z;

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
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f53579d : gVar);
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
                bVar3 = aVar.f53521e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f53522i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f53523o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f53524p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f53525q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f53526r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f53527s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f53528t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f53529u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f53530v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f53531w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f53532x;
            } else {
                bVar4 = bVar2;
            }
            jo.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f53533y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f53534z;
            } else {
                gVar2 = gVar;
            }
            return aVar.s(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53527s;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f53529u;
        }

        @Override // wp.z
        public List c() {
            return this.f53525q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53531w;
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
            if (this.f53521e == aVar.f53521e && Float.compare(this.f53522i, aVar.f53522i) == 0 && Intrinsics.areEqual(this.f53523o, aVar.f53523o) && Intrinsics.areEqual(this.f53524p, aVar.f53524p) && Intrinsics.areEqual(this.f53525q, aVar.f53525q) && this.f53526r == aVar.f53526r && this.f53527s == aVar.f53527s && this.f53528t == aVar.f53528t && Intrinsics.areEqual(this.f53529u, aVar.f53529u) && Intrinsics.areEqual(this.f53530v, aVar.f53530v) && Intrinsics.areEqual(this.f53531w, aVar.f53531w) && this.f53532x == aVar.f53532x && this.f53533y == aVar.f53533y && this.f53534z == aVar.f53534z) {
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
            jo.b bVar = this.f53521e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f53522i)) * 31;
            jo.a aVar = this.f53523o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f53524p.hashCode()) * 31) + this.f53525q.hashCode()) * 31) + Long.hashCode(this.f53526r)) * 31) + Boolean.hashCode(this.f53527s)) * 31) + Long.hashCode(this.f53528t)) * 31) + this.f53529u.hashCode()) * 31;
            x1 x1Var = this.f53530v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f53531w.hashCode()) * 31) + this.f53532x.hashCode()) * 31) + Boolean.hashCode(this.f53533y)) * 31) + this.f53534z.hashCode();
        }

        @Override // wp.a0
        public long i() {
            return this.f53526r;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53533y;
        }

        @Override // wp.a0
        public long l() {
            return this.f53528t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53530v;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53532x;
        }

        @Override // wp.x1
        public List q() {
            return this.f53524p;
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
            jo.b bVar = this.f53521e;
            float f10 = this.f53522i;
            jo.a aVar = this.f53523o;
            List list = this.f53524p;
            List list2 = this.f53525q;
            long j10 = this.f53526r;
            boolean z10 = this.f53527s;
            long j11 = this.f53528t;
            fo.v vVar = this.f53529u;
            x1 x1Var = this.f53530v;
            s0 s0Var = this.f53531w;
            v.b bVar2 = this.f53532x;
            boolean z11 = this.f53533y;
            g gVar = this.f53534z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final jo.a u() {
            return this.f53523o;
        }

        public final g v() {
            return this.f53534z;
        }

        public final float w() {
            return this.f53522i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            jo.b bVar = this.f53521e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f53522i);
            dest.writeParcelable(this.f53523o, i10);
            List<Parcelable> list = this.f53524p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f53525q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f53526r);
            dest.writeInt(this.f53527s ? 1 : 0);
            dest.writeLong(this.f53528t);
            dest.writeParcelable(this.f53529u, i10);
            dest.writeParcelable(this.f53530v, i10);
            this.f53531w.writeToParcel(dest, i10);
            dest.writeString(this.f53532x.name());
            dest.writeInt(this.f53533y ? 1 : 0);
            dest.writeString(this.f53534z.name());
        }

        public final jo.b x() {
            return this.f53521e;
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
            this.f53521e = bVar;
            this.f53522i = f10;
            this.f53523o = aVar;
            this.f53524p = selfies;
            this.f53525q = posesNeeded;
            this.f53526r = j10;
            this.f53527s = z10;
            this.f53528t = j11;
            this.f53529u = cameraProperties;
            this.f53530v = x1Var;
            this.f53531w = poseConfigs;
            this.f53532x = cameraFacingMode;
            this.f53533y = z11;
            this.f53534z = flashState;
        }
    }
}
