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
    private boolean f53521d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f53536e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f53537i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f53538o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f53539p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f53540q;

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
            this.f53536e = nextState;
            this.f53537i = completedPose;
            this.f53538o = x1Var;
            this.f53539p = cameraFacingMode;
            this.f53540q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53538o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53539p;
        }

        @Override // wp.x1
        public List q() {
            return this.f53536e.q();
        }

        public final a1.b s() {
            return this.f53537i;
        }

        public final x1 t() {
            return this.f53536e;
        }

        public final boolean u() {
            return this.f53540q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f53536e, i10);
            dest.writeString(this.f53537i.name());
            dest.writeParcelable(this.f53538o, i10);
            dest.writeString(this.f53539p.name());
            dest.writeInt(this.f53540q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f53541e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f53542i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53543o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f53544p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53545q;

        /* renamed from: r  reason: collision with root package name */
        private final float f53546r;

        /* renamed from: s  reason: collision with root package name */
        private final jo.a f53547s;

        /* renamed from: t  reason: collision with root package name */
        private final List f53548t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f53549u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f53550v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f53551w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f53552x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f53553y;

        /* renamed from: z  reason: collision with root package name */
        private final List f53554z;

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
                i12 = cVar.f53541e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f53542i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f53543o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f53544p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f53545q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f53546r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f53547s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f53548t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f53549u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f53550v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f53551w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f53552x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f53553y;
            } else {
                z13 = z11;
            }
            return cVar.s(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53551w;
        }

        public final fo.v b() {
            return this.f53544p;
        }

        @Override // wp.z
        public List c() {
            return this.f53548t;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53550v;
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
            if (this.f53541e == cVar.f53541e && this.f53542i == cVar.f53542i && this.f53543o == cVar.f53543o && Intrinsics.areEqual(this.f53544p, cVar.f53544p) && this.f53545q == cVar.f53545q && Float.compare(this.f53546r, cVar.f53546r) == 0 && Intrinsics.areEqual(this.f53547s, cVar.f53547s) && Intrinsics.areEqual(this.f53548t, cVar.f53548t) && Intrinsics.areEqual(this.f53549u, cVar.f53549u) && Intrinsics.areEqual(this.f53550v, cVar.f53550v) && this.f53551w == cVar.f53551w && this.f53552x == cVar.f53552x && this.f53553y == cVar.f53553y) {
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
            int hashCode3 = Integer.hashCode(this.f53541e) * 31;
            jo.b bVar = this.f53542i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f53543o)) * 31) + this.f53544p.hashCode()) * 31) + Long.hashCode(this.f53545q)) * 31) + Float.hashCode(this.f53546r)) * 31;
            jo.a aVar = this.f53547s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f53548t.hashCode()) * 31;
            x1 x1Var = this.f53549u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f53550v.hashCode()) * 31) + Boolean.hashCode(this.f53551w)) * 31) + this.f53552x.hashCode()) * 31) + Boolean.hashCode(this.f53553y);
        }

        public final long i() {
            return this.f53543o;
        }

        @Override // wp.z
        public boolean k() {
            return this.f53553y;
        }

        public final long l() {
            return this.f53545q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53549u;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53552x;
        }

        @Override // wp.x1
        public List q() {
            return this.f53554z;
        }

        public final c s(int i10, jo.b bVar, long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f53541e;
            jo.b bVar = this.f53542i;
            long j10 = this.f53543o;
            fo.v vVar = this.f53544p;
            long j11 = this.f53545q;
            float f10 = this.f53546r;
            jo.a aVar = this.f53547s;
            List list = this.f53548t;
            x1 x1Var = this.f53549u;
            s0 s0Var = this.f53550v;
            boolean z10 = this.f53551w;
            v.b bVar2 = this.f53552x;
            boolean z11 = this.f53553y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final jo.a u() {
            return this.f53547s;
        }

        public final int v() {
            return this.f53541e;
        }

        public final float w() {
            return this.f53546r;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53541e);
            jo.b bVar = this.f53542i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f53543o);
            dest.writeParcelable(this.f53544p, i10);
            dest.writeLong(this.f53545q);
            dest.writeFloat(this.f53546r);
            dest.writeParcelable(this.f53547s, i10);
            List<a1.b> list = this.f53548t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f53549u, i10);
            this.f53550v.writeToParcel(dest, i10);
            dest.writeInt(this.f53551w ? 1 : 0);
            dest.writeString(this.f53552x.name());
            dest.writeInt(this.f53553y ? 1 : 0);
        }

        public final jo.b x() {
            return this.f53542i;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, jo.b bVar, long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53541e = i10;
            this.f53542i = bVar;
            this.f53543o = j10;
            this.f53544p = cameraProperties;
            this.f53545q = j11;
            this.f53546r = f10;
            this.f53547s = aVar;
            this.f53548t = posesNeeded;
            this.f53549u = x1Var;
            this.f53550v = poseConfigs;
            this.f53551w = z10;
            this.f53552x = cameraFacingMode;
            this.f53553y = z11;
            this.f53554z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f53555e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f53556i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f53557o;

        /* renamed from: p  reason: collision with root package name */
        private final List f53558p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53559q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f53560r;

        /* renamed from: s  reason: collision with root package name */
        private final long f53561s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f53562t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f53563u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f53564v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f53565w;

        /* renamed from: x  reason: collision with root package name */
        private final List f53566x;

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
                i10 = dVar.f53555e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f53556i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f53557o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f53558p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f53559q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f53560r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f53561s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f53562t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f53563u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f53564v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f53565w;
            } else {
                z13 = z11;
            }
            return dVar.s(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53560r;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f53557o;
        }

        @Override // wp.z
        public List c() {
            return this.f53558p;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53563u;
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
            if (this.f53555e == dVar.f53555e && this.f53556i == dVar.f53556i && Intrinsics.areEqual(this.f53557o, dVar.f53557o) && Intrinsics.areEqual(this.f53558p, dVar.f53558p) && this.f53559q == dVar.f53559q && this.f53560r == dVar.f53560r && this.f53561s == dVar.f53561s && Intrinsics.areEqual(this.f53562t, dVar.f53562t) && Intrinsics.areEqual(this.f53563u, dVar.f53563u) && this.f53564v == dVar.f53564v && this.f53565w == dVar.f53565w) {
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
            int hashCode2 = Integer.hashCode(this.f53555e) * 31;
            jo.b bVar = this.f53556i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f53557o.hashCode()) * 31) + this.f53558p.hashCode()) * 31) + Long.hashCode(this.f53559q)) * 31) + Boolean.hashCode(this.f53560r)) * 31) + Long.hashCode(this.f53561s)) * 31;
            x1 x1Var = this.f53562t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f53563u.hashCode()) * 31) + this.f53564v.hashCode()) * 31) + Boolean.hashCode(this.f53565w);
        }

        @Override // wp.a0
        public long i() {
            return this.f53559q;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53565w;
        }

        @Override // wp.a0
        public long l() {
            return this.f53561s;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53562t;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53564v;
        }

        @Override // wp.x1
        public List q() {
            return this.f53566x;
        }

        public final d s(int i10, jo.b bVar, fo.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f53555e;
            jo.b bVar = this.f53556i;
            fo.v vVar = this.f53557o;
            List list = this.f53558p;
            long j10 = this.f53559q;
            boolean z10 = this.f53560r;
            long j11 = this.f53561s;
            x1 x1Var = this.f53562t;
            s0 s0Var = this.f53563u;
            v.b bVar2 = this.f53564v;
            boolean z11 = this.f53565w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final int u() {
            return this.f53555e;
        }

        public final jo.b v() {
            return this.f53556i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53555e);
            jo.b bVar = this.f53556i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f53557o, i10);
            List<a1.b> list = this.f53558p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f53559q);
            dest.writeInt(this.f53560r ? 1 : 0);
            dest.writeLong(this.f53561s);
            dest.writeParcelable(this.f53562t, i10);
            this.f53563u.writeToParcel(dest, i10);
            dest.writeString(this.f53564v.name());
            dest.writeInt(this.f53565w ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, jo.b bVar, fo.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53555e = i10;
            this.f53556i = bVar;
            this.f53557o = cameraProperties;
            this.f53558p = posesNeeded;
            this.f53559q = j10;
            this.f53560r = z10;
            this.f53561s = j11;
            this.f53562t = x1Var;
            this.f53563u = poseConfigs;
            this.f53564v = cameraFacingMode;
            this.f53565w = z11;
            this.f53566x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53567e;

        /* renamed from: i  reason: collision with root package name */
        private final long f53568i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f53569o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f53570p;

        /* renamed from: q  reason: collision with root package name */
        private final fo.v f53571q;

        /* renamed from: r  reason: collision with root package name */
        private final long f53572r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f53573s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f53574t;

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
                list = eVar.f53567e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f53568i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f53569o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f53570p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f53571q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f53572r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f53573s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f53574t;
            }
            long j12 = j11;
            fo.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.s(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final fo.v b() {
            return this.f53571q;
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
            if (Intrinsics.areEqual(this.f53567e, eVar.f53567e) && this.f53568i == eVar.f53568i && this.f53569o == eVar.f53569o && this.f53570p == eVar.f53570p && Intrinsics.areEqual(this.f53571q, eVar.f53571q) && this.f53572r == eVar.f53572r && Intrinsics.areEqual(this.f53573s, eVar.f53573s) && this.f53574t == eVar.f53574t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f53567e.hashCode() * 31) + Long.hashCode(this.f53568i)) * 31) + Boolean.hashCode(this.f53569o)) * 31) + Boolean.hashCode(this.f53570p)) * 31) + this.f53571q.hashCode()) * 31) + Long.hashCode(this.f53572r)) * 31;
            x1 x1Var = this.f53573s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f53574t.hashCode();
        }

        public final long l() {
            return this.f53572r;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53573s;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53574t;
        }

        @Override // wp.x1
        public List q() {
            return this.f53567e;
        }

        public final e s(List selfies, long j10, boolean z10, boolean z11, fo.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public String toString() {
            List list = this.f53567e;
            long j10 = this.f53568i;
            boolean z10 = this.f53569o;
            boolean z11 = this.f53570p;
            fo.v vVar = this.f53571q;
            long j11 = this.f53572r;
            x1 x1Var = this.f53573s;
            v.b bVar = this.f53574t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final long u() {
            return this.f53568i;
        }

        public final boolean v() {
            return this.f53569o;
        }

        public final boolean w() {
            return this.f53570p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53567e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f53568i);
            dest.writeInt(this.f53569o ? 1 : 0);
            dest.writeInt(this.f53570p ? 1 : 0);
            dest.writeParcelable(this.f53571q, i10);
            dest.writeLong(this.f53572r);
            dest.writeParcelable(this.f53573s, i10);
            dest.writeString(this.f53574t.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, fo.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53567e = selfies;
            this.f53568i = j10;
            this.f53569o = z10;
            this.f53570p = z11;
            this.f53571q = cameraProperties;
            this.f53572r = j11;
            this.f53573s = x1Var;
            this.f53574t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53575e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f53576i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53577o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f53578p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f53579q;

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
            this.f53575e = selfies;
            this.f53576i = cameraProperties;
            this.f53577o = j10;
            this.f53578p = x1Var;
            this.f53579q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53578p;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53579q;
        }

        @Override // wp.x1
        public List q() {
            return this.f53575e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53575e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f53576i, i10);
            dest.writeLong(this.f53577o);
            dest.writeParcelable(this.f53578p, i10);
            dest.writeString(this.f53579q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f53580d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f53581e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f53582i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f53583o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f53584p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f53585q;

        static {
            g[] a10 = a();
            f53584p = a10;
            f53585q = hs.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f53580d, f53581e, f53582i, f53583o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f53584p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53586e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f53587i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f53588o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f53589p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53590q;

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
            if (this.f53586e == hVar.f53586e && this.f53587i == hVar.f53587i && Intrinsics.areEqual(this.f53588o, hVar.f53588o) && this.f53589p == hVar.f53589p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f53586e) * 31) + Boolean.hashCode(this.f53587i)) * 31;
            x1 x1Var = this.f53588o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f53589p.hashCode();
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53588o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53589p;
        }

        @Override // wp.x1
        public List q() {
            return this.f53590q;
        }

        public String toString() {
            boolean z10 = this.f53586e;
            boolean z11 = this.f53587i;
            x1 x1Var = this.f53588o;
            v.b bVar = this.f53589p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53586e ? 1 : 0);
            dest.writeInt(this.f53587i ? 1 : 0);
            dest.writeParcelable(this.f53588o, i10);
            dest.writeString(this.f53589p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53586e = z10;
            this.f53587i = z11;
            this.f53588o = x1Var;
            this.f53589p = cameraFacingMode;
            this.f53590q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53591e;

        /* renamed from: i  reason: collision with root package name */
        private final List f53592i;

        /* renamed from: o  reason: collision with root package name */
        private final String f53593o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f53594p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53595q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f53596r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f53597s;

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
            this.f53591e = selfies;
            this.f53592i = selfiesToReview;
            this.f53593o = str;
            this.f53594p = cameraProperties;
            this.f53595q = j10;
            this.f53596r = x1Var;
            this.f53597s = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f53594p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f53595q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53596r;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53597s;
        }

        @Override // wp.x1
        public List q() {
            return this.f53591e;
        }

        public final List s() {
            return this.f53592i;
        }

        public final String t() {
            return this.f53593o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53591e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f53592i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f53593o);
            dest.writeParcelable(this.f53594p, i10);
            dest.writeLong(this.f53595q);
            dest.writeParcelable(this.f53596r, i10);
            dest.writeString(this.f53597s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53601e;

        /* renamed from: i  reason: collision with root package name */
        private final List f53602i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f53603o;

        /* renamed from: p  reason: collision with root package name */
        private final fo.v f53604p;

        /* renamed from: q  reason: collision with root package name */
        private final long f53605q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f53606r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f53607s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f53608t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f53609u;

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
            this.f53601e = selfies;
            this.f53602i = posesNeeded;
            this.f53603o = z10;
            this.f53604p = cameraProperties;
            this.f53605q = j10;
            this.f53606r = x1Var;
            this.f53607s = poseConfigs;
            this.f53608t = cameraFacingMode;
            this.f53609u = z11;
        }

        public static /* synthetic */ k t(k kVar, List list, List list2, boolean z10, fo.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f53601e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f53602i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f53603o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f53604p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f53605q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f53606r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f53607s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f53608t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f53609u;
            }
            long j11 = j10;
            boolean z12 = z10;
            fo.v vVar2 = vVar;
            return kVar.s(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53603o;
        }

        public final fo.v b() {
            return this.f53604p;
        }

        @Override // wp.z
        public List c() {
            return this.f53602i;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53607s;
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
            if (Intrinsics.areEqual(this.f53601e, kVar.f53601e) && Intrinsics.areEqual(this.f53602i, kVar.f53602i) && this.f53603o == kVar.f53603o && Intrinsics.areEqual(this.f53604p, kVar.f53604p) && this.f53605q == kVar.f53605q && Intrinsics.areEqual(this.f53606r, kVar.f53606r) && Intrinsics.areEqual(this.f53607s, kVar.f53607s) && this.f53608t == kVar.f53608t && this.f53609u == kVar.f53609u) {
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
            int hashCode2 = ((((((((this.f53601e.hashCode() * 31) + this.f53602i.hashCode()) * 31) + Boolean.hashCode(this.f53603o)) * 31) + this.f53604p.hashCode()) * 31) + Long.hashCode(this.f53605q)) * 31;
            x1 x1Var = this.f53606r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f53607s.hashCode()) * 31) + this.f53608t.hashCode()) * 31) + Boolean.hashCode(this.f53609u);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53609u;
        }

        public final long l() {
            return this.f53605q;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53606r;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53608t;
        }

        @Override // wp.x1
        public List q() {
            return this.f53601e;
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
            List list = this.f53601e;
            List list2 = this.f53602i;
            boolean z10 = this.f53603o;
            fo.v vVar = this.f53604p;
            long j10 = this.f53605q;
            x1 x1Var = this.f53606r;
            s0 s0Var = this.f53607s;
            v.b bVar = this.f53608t;
            boolean z11 = this.f53609u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53601e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f53602i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f53603o ? 1 : 0);
            dest.writeParcelable(this.f53604p, i10);
            dest.writeLong(this.f53605q);
            dest.writeParcelable(this.f53606r, i10);
            this.f53607s.writeToParcel(dest, i10);
            dest.writeString(this.f53608t.name());
            dest.writeInt(this.f53609u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f53624e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f53625i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53626o;

        /* renamed from: p  reason: collision with root package name */
        private final float f53627p;

        /* renamed from: q  reason: collision with root package name */
        private final jo.a f53628q;

        /* renamed from: r  reason: collision with root package name */
        private final List f53629r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f53630s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f53631t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f53632u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f53633v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f53634w;

        /* renamed from: x  reason: collision with root package name */
        private final List f53635x;

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
            this.f53624e = j10;
            this.f53625i = cameraProperties;
            this.f53626o = j11;
            this.f53627p = f10;
            this.f53628q = aVar;
            this.f53629r = posesNeeded;
            this.f53630s = x1Var;
            this.f53631t = poseConfigs;
            this.f53632u = z10;
            this.f53633v = cameraFacingMode;
            this.f53634w = z11;
            this.f53635x = CollectionsKt.l();
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
                j12 = mVar.f53624e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f53625i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f53626o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f53627p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f53628q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f53629r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f53630s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f53631t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f53632u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f53633v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f53634w;
            } else {
                z13 = z11;
            }
            return mVar.s(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53632u;
        }

        public final fo.v b() {
            return this.f53625i;
        }

        @Override // wp.z
        public List c() {
            return this.f53629r;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53631t;
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
            if (this.f53624e == mVar.f53624e && Intrinsics.areEqual(this.f53625i, mVar.f53625i) && this.f53626o == mVar.f53626o && Float.compare(this.f53627p, mVar.f53627p) == 0 && Intrinsics.areEqual(this.f53628q, mVar.f53628q) && Intrinsics.areEqual(this.f53629r, mVar.f53629r) && Intrinsics.areEqual(this.f53630s, mVar.f53630s) && Intrinsics.areEqual(this.f53631t, mVar.f53631t) && this.f53632u == mVar.f53632u && this.f53633v == mVar.f53633v && this.f53634w == mVar.f53634w) {
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
            int hashCode2 = ((((((Long.hashCode(this.f53624e) * 31) + this.f53625i.hashCode()) * 31) + Long.hashCode(this.f53626o)) * 31) + Float.hashCode(this.f53627p)) * 31;
            jo.a aVar = this.f53628q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f53629r.hashCode()) * 31;
            x1 x1Var = this.f53630s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f53631t.hashCode()) * 31) + Boolean.hashCode(this.f53632u)) * 31) + this.f53633v.hashCode()) * 31) + Boolean.hashCode(this.f53634w);
        }

        public final long i() {
            return this.f53624e;
        }

        @Override // wp.z
        public boolean k() {
            return this.f53634w;
        }

        public final long l() {
            return this.f53626o;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53630s;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53633v;
        }

        @Override // wp.x1
        public List q() {
            return this.f53635x;
        }

        public final m s(long j10, fo.v cameraProperties, long j11, float f10, jo.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            long j10 = this.f53624e;
            fo.v vVar = this.f53625i;
            long j11 = this.f53626o;
            float f10 = this.f53627p;
            jo.a aVar = this.f53628q;
            List list = this.f53629r;
            x1 x1Var = this.f53630s;
            s0 s0Var = this.f53631t;
            boolean z10 = this.f53632u;
            v.b bVar = this.f53633v;
            boolean z11 = this.f53634w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final jo.a u() {
            return this.f53628q;
        }

        public final float v() {
            return this.f53627p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f53624e);
            dest.writeParcelable(this.f53625i, i10);
            dest.writeLong(this.f53626o);
            dest.writeFloat(this.f53627p);
            dest.writeParcelable(this.f53628q, i10);
            List<a1.b> list = this.f53629r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f53630s, i10);
            this.f53631t.writeToParcel(dest, i10);
            dest.writeInt(this.f53632u ? 1 : 0);
            dest.writeString(this.f53633v.name());
            dest.writeInt(this.f53634w ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53636e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53637i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f53638o;

        /* renamed from: p  reason: collision with root package name */
        private final long f53639p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f53640q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f53641r;

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
            this.f53636e = selfies;
            this.f53637i = str;
            this.f53638o = cameraProperties;
            this.f53639p = j10;
            this.f53640q = x1Var;
            this.f53641r = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f53638o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f53639p;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53640q;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53641r;
        }

        @Override // wp.x1
        public List q() {
            return this.f53636e;
        }

        public final String s() {
            return this.f53637i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53636e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f53637i);
            dest.writeParcelable(this.f53638o, i10);
            dest.writeLong(this.f53639p);
            dest.writeParcelable(this.f53640q, i10);
            dest.writeString(this.f53641r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53642e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f53643i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f53644o;

        /* renamed from: p  reason: collision with root package name */
        private final List f53645p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f53646q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f53647r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f53648s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f53649t;

        /* renamed from: u  reason: collision with root package name */
        private final List f53650u;

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
                z10 = oVar.f53642e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f53643i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f53644o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f53645p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f53646q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f53647r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f53648s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f53649t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.s(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53647r;
        }

        @Override // wp.z
        public List c() {
            return this.f53645p;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53646q;
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
            if (this.f53642e == oVar.f53642e && this.f53643i == oVar.f53643i && Intrinsics.areEqual(this.f53644o, oVar.f53644o) && Intrinsics.areEqual(this.f53645p, oVar.f53645p) && Intrinsics.areEqual(this.f53646q, oVar.f53646q) && this.f53647r == oVar.f53647r && this.f53648s == oVar.f53648s && this.f53649t == oVar.f53649t) {
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
            int hashCode2 = ((Boolean.hashCode(this.f53642e) * 31) + Boolean.hashCode(this.f53643i)) * 31;
            x1 x1Var = this.f53644o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f53645p.hashCode()) * 31) + this.f53646q.hashCode()) * 31) + Boolean.hashCode(this.f53647r)) * 31) + this.f53648s.hashCode()) * 31) + Boolean.hashCode(this.f53649t);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53649t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53644o;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53648s;
        }

        @Override // wp.x1
        public List q() {
            return this.f53650u;
        }

        public final o s(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public String toString() {
            boolean z10 = this.f53642e;
            boolean z11 = this.f53643i;
            x1 x1Var = this.f53644o;
            List list = this.f53645p;
            s0 s0Var = this.f53646q;
            boolean z12 = this.f53647r;
            v.b bVar = this.f53648s;
            boolean z13 = this.f53649t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final boolean u() {
            return this.f53643i;
        }

        public final boolean v() {
            return this.f53642e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53642e ? 1 : 0);
            dest.writeInt(this.f53643i ? 1 : 0);
            dest.writeParcelable(this.f53644o, i10);
            List<a1.b> list = this.f53645p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f53646q.writeToParcel(dest, i10);
            dest.writeInt(this.f53647r ? 1 : 0);
            dest.writeString(this.f53648s.name());
            dest.writeInt(this.f53649t ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53642e = z10;
            this.f53643i = z11;
            this.f53644o = x1Var;
            this.f53645p = posesNeeded;
            this.f53646q = poseConfigs;
            this.f53647r = z12;
            this.f53648s = cameraFacingMode;
            this.f53649t = z13;
            this.f53650u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f53651e;

        /* renamed from: i  reason: collision with root package name */
        private final fo.v f53652i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53653o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f53654p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53655q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f53656r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f53657s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f53658t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f53659u;

        /* renamed from: v  reason: collision with root package name */
        private final List f53660v;

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
            this.f53651e = str;
            this.f53652i = cameraProperties;
            this.f53653o = j10;
            this.f53654p = x1Var;
            this.f53655q = posesNeeded;
            this.f53656r = poseConfigs;
            this.f53657s = z10;
            this.f53658t = cameraFacingMode;
            this.f53659u = z11;
            this.f53660v = CollectionsKt.l();
        }

        public static /* synthetic */ p t(p pVar, String str, fo.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f53651e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f53652i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f53653o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f53654p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f53655q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f53656r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f53657s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f53658t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f53659u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.s(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53657s;
        }

        @Override // wp.z
        public List c() {
            return this.f53655q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53656r;
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
            if (Intrinsics.areEqual(this.f53651e, pVar.f53651e) && Intrinsics.areEqual(this.f53652i, pVar.f53652i) && this.f53653o == pVar.f53653o && Intrinsics.areEqual(this.f53654p, pVar.f53654p) && Intrinsics.areEqual(this.f53655q, pVar.f53655q) && Intrinsics.areEqual(this.f53656r, pVar.f53656r) && this.f53657s == pVar.f53657s && this.f53658t == pVar.f53658t && this.f53659u == pVar.f53659u) {
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
            String str = this.f53651e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f53652i.hashCode()) * 31) + Long.hashCode(this.f53653o)) * 31;
            x1 x1Var = this.f53654p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f53655q.hashCode()) * 31) + this.f53656r.hashCode()) * 31) + Boolean.hashCode(this.f53657s)) * 31) + this.f53658t.hashCode()) * 31) + Boolean.hashCode(this.f53659u);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53659u;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53654p;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53658t;
        }

        @Override // wp.x1
        public List q() {
            return this.f53660v;
        }

        public final p s(String str, fo.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            String str = this.f53651e;
            fo.v vVar = this.f53652i;
            long j10 = this.f53653o;
            x1 x1Var = this.f53654p;
            List list = this.f53655q;
            s0 s0Var = this.f53656r;
            boolean z10 = this.f53657s;
            v.b bVar = this.f53658t;
            boolean z11 = this.f53659u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f53651e);
            dest.writeParcelable(this.f53652i, i10);
            dest.writeLong(this.f53653o);
            dest.writeParcelable(this.f53654p, i10);
            List<a1.b> list = this.f53655q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f53656r.writeToParcel(dest, i10);
            dest.writeInt(this.f53657s ? 1 : 0);
            dest.writeString(this.f53658t.name());
            dest.writeInt(this.f53659u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f53661e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53662i;

        /* renamed from: o  reason: collision with root package name */
        private final fo.v f53663o;

        /* renamed from: p  reason: collision with root package name */
        private final long f53664p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f53665q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f53666r;

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
            this.f53661e = selfies;
            this.f53662i = webRtcObjectId;
            this.f53663o = cameraProperties;
            this.f53664p = j10;
            this.f53665q = x1Var;
            this.f53666r = cameraFacingMode;
        }

        public final fo.v b() {
            return this.f53663o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long l() {
            return this.f53664p;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53665q;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53666r;
        }

        @Override // wp.x1
        public List q() {
            return this.f53661e;
        }

        public final String s() {
            return this.f53662i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f53661e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f53662i);
            dest.writeParcelable(this.f53663o, i10);
            dest.writeLong(this.f53664p);
            dest.writeParcelable(this.f53665q, i10);
            dest.writeString(this.f53666r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 o();

    public abstract v.b p();

    public abstract List q();

    public final void r(boolean z10) {
        this.f53521d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f53598e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f53599i;

        /* renamed from: o  reason: collision with root package name */
        private final List f53600o;

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
            return this.f53598e;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53599i;
        }

        @Override // wp.x1
        public List q() {
            return this.f53600o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f53598e, i10);
            dest.writeString(this.f53599i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53598e = x1Var;
            this.f53599i = cameraFacingMode;
            this.f53600o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53610e;

        /* renamed from: i  reason: collision with root package name */
        private final jo.b f53611i;

        /* renamed from: o  reason: collision with root package name */
        private final float f53612o;

        /* renamed from: p  reason: collision with root package name */
        private final jo.a f53613p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53614q;

        /* renamed from: r  reason: collision with root package name */
        private final long f53615r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f53616s;

        /* renamed from: t  reason: collision with root package name */
        private final long f53617t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f53618u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f53619v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f53620w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f53621x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f53622y;

        /* renamed from: z  reason: collision with root package name */
        private final List f53623z;

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
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? jo.b.f31208d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
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
                z13 = lVar.f53610e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f53611i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f53612o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f53613p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f53614q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f53615r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f53616s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f53617t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f53618u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f53619v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f53620w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f53621x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f53622y;
            } else {
                z15 = z12;
            }
            return lVar.s(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53616s;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f53618u;
        }

        @Override // wp.z
        public List c() {
            return this.f53614q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53620w;
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
            if (this.f53610e == lVar.f53610e && this.f53611i == lVar.f53611i && Float.compare(this.f53612o, lVar.f53612o) == 0 && Intrinsics.areEqual(this.f53613p, lVar.f53613p) && Intrinsics.areEqual(this.f53614q, lVar.f53614q) && this.f53615r == lVar.f53615r && this.f53616s == lVar.f53616s && this.f53617t == lVar.f53617t && Intrinsics.areEqual(this.f53618u, lVar.f53618u) && Intrinsics.areEqual(this.f53619v, lVar.f53619v) && Intrinsics.areEqual(this.f53620w, lVar.f53620w) && this.f53621x == lVar.f53621x && this.f53622y == lVar.f53622y) {
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
            int hashCode3 = Boolean.hashCode(this.f53610e) * 31;
            jo.b bVar = this.f53611i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f53612o)) * 31;
            jo.a aVar = this.f53613p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f53614q.hashCode()) * 31) + Long.hashCode(this.f53615r)) * 31) + Boolean.hashCode(this.f53616s)) * 31) + Long.hashCode(this.f53617t)) * 31) + this.f53618u.hashCode()) * 31;
            x1 x1Var = this.f53619v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f53620w.hashCode()) * 31) + this.f53621x.hashCode()) * 31) + Boolean.hashCode(this.f53622y);
        }

        @Override // wp.a0
        public long i() {
            return this.f53615r;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53622y;
        }

        @Override // wp.a0
        public long l() {
            return this.f53617t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53619v;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53621x;
        }

        @Override // wp.x1
        public List q() {
            return this.f53623z;
        }

        public final l s(boolean z10, jo.b bVar, float f10, jo.a aVar, List posesNeeded, long j10, boolean z11, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public String toString() {
            boolean z10 = this.f53610e;
            jo.b bVar = this.f53611i;
            float f10 = this.f53612o;
            jo.a aVar = this.f53613p;
            List list = this.f53614q;
            long j10 = this.f53615r;
            boolean z11 = this.f53616s;
            long j11 = this.f53617t;
            fo.v vVar = this.f53618u;
            x1 x1Var = this.f53619v;
            s0 s0Var = this.f53620w;
            v.b bVar2 = this.f53621x;
            boolean z12 = this.f53622y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final jo.a u() {
            return this.f53613p;
        }

        public final float v() {
            return this.f53612o;
        }

        public final jo.b w() {
            return this.f53611i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f53610e ? 1 : 0);
            jo.b bVar = this.f53611i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f53612o);
            dest.writeParcelable(this.f53613p, i10);
            List<a1.b> list = this.f53614q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f53615r);
            dest.writeInt(this.f53616s ? 1 : 0);
            dest.writeLong(this.f53617t);
            dest.writeParcelable(this.f53618u, i10);
            dest.writeParcelable(this.f53619v, i10);
            this.f53620w.writeToParcel(dest, i10);
            dest.writeString(this.f53621x.name());
            dest.writeInt(this.f53622y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, jo.b bVar, float f10, jo.a aVar, List posesNeeded, long j10, boolean z11, long j11, fo.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f53610e = z10;
            this.f53611i = bVar;
            this.f53612o = f10;
            this.f53613p = aVar;
            this.f53614q = posesNeeded;
            this.f53615r = j10;
            this.f53616s = z11;
            this.f53617t = j11;
            this.f53618u = cameraProperties;
            this.f53619v = x1Var;
            this.f53620w = poseConfigs;
            this.f53621x = cameraFacingMode;
            this.f53622y = z12;
            this.f53623z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0747a();

        /* renamed from: e  reason: collision with root package name */
        private final jo.b f53522e;

        /* renamed from: i  reason: collision with root package name */
        private final float f53523i;

        /* renamed from: o  reason: collision with root package name */
        private final jo.a f53524o;

        /* renamed from: p  reason: collision with root package name */
        private final List f53525p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53526q;

        /* renamed from: r  reason: collision with root package name */
        private final long f53527r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f53528s;

        /* renamed from: t  reason: collision with root package name */
        private final long f53529t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f53530u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f53531v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f53532w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f53533x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f53534y;

        /* renamed from: z  reason: collision with root package name */
        private final g f53535z;

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
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f53580d : gVar);
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
                bVar3 = aVar.f53522e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f53523i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f53524o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f53525p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f53526q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f53527r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f53528s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f53529t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f53530u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f53531v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f53532w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f53533x;
            } else {
                bVar4 = bVar2;
            }
            jo.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f53534y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f53535z;
            } else {
                gVar2 = gVar;
            }
            return aVar.s(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        @Override // wp.z
        public boolean a() {
            return this.f53528s;
        }

        @Override // wp.a0
        public fo.v b() {
            return this.f53530u;
        }

        @Override // wp.z
        public List c() {
            return this.f53526q;
        }

        @Override // wp.z
        public s0 d() {
            return this.f53532w;
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
            if (this.f53522e == aVar.f53522e && Float.compare(this.f53523i, aVar.f53523i) == 0 && Intrinsics.areEqual(this.f53524o, aVar.f53524o) && Intrinsics.areEqual(this.f53525p, aVar.f53525p) && Intrinsics.areEqual(this.f53526q, aVar.f53526q) && this.f53527r == aVar.f53527r && this.f53528s == aVar.f53528s && this.f53529t == aVar.f53529t && Intrinsics.areEqual(this.f53530u, aVar.f53530u) && Intrinsics.areEqual(this.f53531v, aVar.f53531v) && Intrinsics.areEqual(this.f53532w, aVar.f53532w) && this.f53533x == aVar.f53533x && this.f53534y == aVar.f53534y && this.f53535z == aVar.f53535z) {
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
            jo.b bVar = this.f53522e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f53523i)) * 31;
            jo.a aVar = this.f53524o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f53525p.hashCode()) * 31) + this.f53526q.hashCode()) * 31) + Long.hashCode(this.f53527r)) * 31) + Boolean.hashCode(this.f53528s)) * 31) + Long.hashCode(this.f53529t)) * 31) + this.f53530u.hashCode()) * 31;
            x1 x1Var = this.f53531v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f53532w.hashCode()) * 31) + this.f53533x.hashCode()) * 31) + Boolean.hashCode(this.f53534y)) * 31) + this.f53535z.hashCode();
        }

        @Override // wp.a0
        public long i() {
            return this.f53527r;
        }

        @Override // wp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // wp.z
        public boolean k() {
            return this.f53534y;
        }

        @Override // wp.a0
        public long l() {
            return this.f53529t;
        }

        @Override // wp.x1
        public x1 o() {
            return this.f53531v;
        }

        @Override // wp.x1
        public v.b p() {
            return this.f53533x;
        }

        @Override // wp.x1
        public List q() {
            return this.f53525p;
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
            jo.b bVar = this.f53522e;
            float f10 = this.f53523i;
            jo.a aVar = this.f53524o;
            List list = this.f53525p;
            List list2 = this.f53526q;
            long j10 = this.f53527r;
            boolean z10 = this.f53528s;
            long j11 = this.f53529t;
            fo.v vVar = this.f53530u;
            x1 x1Var = this.f53531v;
            s0 s0Var = this.f53532w;
            v.b bVar2 = this.f53533x;
            boolean z11 = this.f53534y;
            g gVar = this.f53535z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final jo.a u() {
            return this.f53524o;
        }

        public final g v() {
            return this.f53535z;
        }

        public final float w() {
            return this.f53523i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            jo.b bVar = this.f53522e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f53523i);
            dest.writeParcelable(this.f53524o, i10);
            List<Parcelable> list = this.f53525p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f53526q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f53527r);
            dest.writeInt(this.f53528s ? 1 : 0);
            dest.writeLong(this.f53529t);
            dest.writeParcelable(this.f53530u, i10);
            dest.writeParcelable(this.f53531v, i10);
            this.f53532w.writeToParcel(dest, i10);
            dest.writeString(this.f53533x.name());
            dest.writeInt(this.f53534y ? 1 : 0);
            dest.writeString(this.f53535z.name());
        }

        public final jo.b x() {
            return this.f53522e;
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
            this.f53522e = bVar;
            this.f53523i = f10;
            this.f53524o = aVar;
            this.f53525p = selfies;
            this.f53526q = posesNeeded;
            this.f53527r = j10;
            this.f53528s = z10;
            this.f53529t = j11;
            this.f53530u = cameraProperties;
            this.f53531v = x1Var;
            this.f53532w = poseConfigs;
            this.f53533x = cameraFacingMode;
            this.f53534y = z11;
            this.f53535z = flashState;
        }
    }
}
