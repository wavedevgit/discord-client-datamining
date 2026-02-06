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
    private boolean f37837d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f37852e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f37853i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f37854o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f37855p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f37856q;

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
            this.f37852e = nextState;
            this.f37853i = completedPose;
            this.f37854o = x1Var;
            this.f37855p = cameraFacingMode;
            this.f37856q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37854o;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37855p;
        }

        @Override // mp.x1
        public List r() {
            return this.f37852e.r();
        }

        public final a1.b u() {
            return this.f37853i;
        }

        public final x1 v() {
            return this.f37852e;
        }

        public final boolean w() {
            return this.f37856q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f37852e, i10);
            dest.writeString(this.f37853i.name());
            dest.writeParcelable(this.f37854o, i10);
            dest.writeString(this.f37855p.name());
            dest.writeInt(this.f37856q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f37857e;

        /* renamed from: i  reason: collision with root package name */
        private final yn.b f37858i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37859o;

        /* renamed from: p  reason: collision with root package name */
        private final un.v f37860p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37861q;

        /* renamed from: r  reason: collision with root package name */
        private final float f37862r;

        /* renamed from: s  reason: collision with root package name */
        private final yn.a f37863s;

        /* renamed from: t  reason: collision with root package name */
        private final List f37864t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f37865u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f37866v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f37867w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f37868x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f37869y;

        /* renamed from: z  reason: collision with root package name */
        private final List f37870z;

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
                i12 = cVar.f37857e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f37858i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f37859o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f37860p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f37861q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f37862r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f37863s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f37864t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f37865u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f37866v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f37867w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f37868x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f37869y;
            } else {
                z13 = z11;
            }
            return cVar.u(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        public final float A() {
            return this.f37862r;
        }

        public final yn.b B() {
            return this.f37858i;
        }

        @Override // mp.z
        public boolean a() {
            return this.f37867w;
        }

        public final un.v b() {
            return this.f37860p;
        }

        @Override // mp.z
        public List c() {
            return this.f37864t;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37866v;
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
            if (this.f37857e == cVar.f37857e && this.f37858i == cVar.f37858i && this.f37859o == cVar.f37859o && Intrinsics.areEqual(this.f37860p, cVar.f37860p) && this.f37861q == cVar.f37861q && Float.compare(this.f37862r, cVar.f37862r) == 0 && Intrinsics.areEqual(this.f37863s, cVar.f37863s) && Intrinsics.areEqual(this.f37864t, cVar.f37864t) && Intrinsics.areEqual(this.f37865u, cVar.f37865u) && Intrinsics.areEqual(this.f37866v, cVar.f37866v) && this.f37867w == cVar.f37867w && this.f37868x == cVar.f37868x && this.f37869y == cVar.f37869y) {
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
            int hashCode3 = Integer.hashCode(this.f37857e) * 31;
            yn.b bVar = this.f37858i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f37859o)) * 31) + this.f37860p.hashCode()) * 31) + Long.hashCode(this.f37861q)) * 31) + Float.hashCode(this.f37862r)) * 31;
            yn.a aVar = this.f37863s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f37864t.hashCode()) * 31;
            x1 x1Var = this.f37865u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f37866v.hashCode()) * 31) + Boolean.hashCode(this.f37867w)) * 31) + this.f37868x.hashCode()) * 31) + Boolean.hashCode(this.f37869y);
        }

        public final long i() {
            return this.f37859o;
        }

        @Override // mp.z
        public boolean l() {
            return this.f37869y;
        }

        public final long o() {
            return this.f37861q;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37865u;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37868x;
        }

        @Override // mp.x1
        public List r() {
            return this.f37870z;
        }

        public String toString() {
            int i10 = this.f37857e;
            yn.b bVar = this.f37858i;
            long j10 = this.f37859o;
            un.v vVar = this.f37860p;
            long j11 = this.f37861q;
            float f10 = this.f37862r;
            yn.a aVar = this.f37863s;
            List list = this.f37864t;
            x1 x1Var = this.f37865u;
            s0 s0Var = this.f37866v;
            boolean z10 = this.f37867w;
            v.b bVar2 = this.f37868x;
            boolean z11 = this.f37869y;
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
            return this.f37863s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37857e);
            yn.b bVar = this.f37858i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f37859o);
            dest.writeParcelable(this.f37860p, i10);
            dest.writeLong(this.f37861q);
            dest.writeFloat(this.f37862r);
            dest.writeParcelable(this.f37863s, i10);
            List<a1.b> list = this.f37864t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f37865u, i10);
            this.f37866v.writeToParcel(dest, i10);
            dest.writeInt(this.f37867w ? 1 : 0);
            dest.writeString(this.f37868x.name());
            dest.writeInt(this.f37869y ? 1 : 0);
        }

        public final int x() {
            return this.f37857e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, yn.b bVar, long j10, un.v cameraProperties, long j11, float f10, yn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37857e = i10;
            this.f37858i = bVar;
            this.f37859o = j10;
            this.f37860p = cameraProperties;
            this.f37861q = j11;
            this.f37862r = f10;
            this.f37863s = aVar;
            this.f37864t = posesNeeded;
            this.f37865u = x1Var;
            this.f37866v = poseConfigs;
            this.f37867w = z10;
            this.f37868x = cameraFacingMode;
            this.f37869y = z11;
            this.f37870z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f37871e;

        /* renamed from: i  reason: collision with root package name */
        private final yn.b f37872i;

        /* renamed from: o  reason: collision with root package name */
        private final un.v f37873o;

        /* renamed from: p  reason: collision with root package name */
        private final List f37874p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37875q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f37876r;

        /* renamed from: s  reason: collision with root package name */
        private final long f37877s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f37878t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f37879u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f37880v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f37881w;

        /* renamed from: x  reason: collision with root package name */
        private final List f37882x;

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
                i10 = dVar.f37871e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f37872i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f37873o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f37874p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f37875q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f37876r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f37877s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f37878t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f37879u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f37880v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f37881w;
            } else {
                z13 = z11;
            }
            return dVar.u(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37876r;
        }

        @Override // mp.a0
        public un.v b() {
            return this.f37873o;
        }

        @Override // mp.z
        public List c() {
            return this.f37874p;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37879u;
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
            if (this.f37871e == dVar.f37871e && this.f37872i == dVar.f37872i && Intrinsics.areEqual(this.f37873o, dVar.f37873o) && Intrinsics.areEqual(this.f37874p, dVar.f37874p) && this.f37875q == dVar.f37875q && this.f37876r == dVar.f37876r && this.f37877s == dVar.f37877s && Intrinsics.areEqual(this.f37878t, dVar.f37878t) && Intrinsics.areEqual(this.f37879u, dVar.f37879u) && this.f37880v == dVar.f37880v && this.f37881w == dVar.f37881w) {
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
            int hashCode2 = Integer.hashCode(this.f37871e) * 31;
            yn.b bVar = this.f37872i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f37873o.hashCode()) * 31) + this.f37874p.hashCode()) * 31) + Long.hashCode(this.f37875q)) * 31) + Boolean.hashCode(this.f37876r)) * 31) + Long.hashCode(this.f37877s)) * 31;
            x1 x1Var = this.f37878t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f37879u.hashCode()) * 31) + this.f37880v.hashCode()) * 31) + Boolean.hashCode(this.f37881w);
        }

        @Override // mp.a0
        public long i() {
            return this.f37875q;
        }

        @Override // mp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37881w;
        }

        @Override // mp.a0
        public long o() {
            return this.f37877s;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37878t;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37880v;
        }

        @Override // mp.x1
        public List r() {
            return this.f37882x;
        }

        public String toString() {
            int i10 = this.f37871e;
            yn.b bVar = this.f37872i;
            un.v vVar = this.f37873o;
            List list = this.f37874p;
            long j10 = this.f37875q;
            boolean z10 = this.f37876r;
            long j11 = this.f37877s;
            x1 x1Var = this.f37878t;
            s0 s0Var = this.f37879u;
            v.b bVar2 = this.f37880v;
            boolean z11 = this.f37881w;
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
            return this.f37871e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37871e);
            yn.b bVar = this.f37872i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f37873o, i10);
            List<a1.b> list = this.f37874p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f37875q);
            dest.writeInt(this.f37876r ? 1 : 0);
            dest.writeLong(this.f37877s);
            dest.writeParcelable(this.f37878t, i10);
            this.f37879u.writeToParcel(dest, i10);
            dest.writeString(this.f37880v.name());
            dest.writeInt(this.f37881w ? 1 : 0);
        }

        public final yn.b x() {
            return this.f37872i;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, yn.b bVar, un.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37871e = i10;
            this.f37872i = bVar;
            this.f37873o = cameraProperties;
            this.f37874p = posesNeeded;
            this.f37875q = j10;
            this.f37876r = z10;
            this.f37877s = j11;
            this.f37878t = x1Var;
            this.f37879u = poseConfigs;
            this.f37880v = cameraFacingMode;
            this.f37881w = z11;
            this.f37882x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37883e;

        /* renamed from: i  reason: collision with root package name */
        private final long f37884i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f37885o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f37886p;

        /* renamed from: q  reason: collision with root package name */
        private final un.v f37887q;

        /* renamed from: r  reason: collision with root package name */
        private final long f37888r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f37889s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f37890t;

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
                list = eVar.f37883e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f37884i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f37885o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f37886p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f37887q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f37888r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f37889s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f37890t;
            }
            long j12 = j11;
            un.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.u(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final boolean A() {
            return this.f37886p;
        }

        public final un.v b() {
            return this.f37887q;
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
            if (Intrinsics.areEqual(this.f37883e, eVar.f37883e) && this.f37884i == eVar.f37884i && this.f37885o == eVar.f37885o && this.f37886p == eVar.f37886p && Intrinsics.areEqual(this.f37887q, eVar.f37887q) && this.f37888r == eVar.f37888r && Intrinsics.areEqual(this.f37889s, eVar.f37889s) && this.f37890t == eVar.f37890t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f37883e.hashCode() * 31) + Long.hashCode(this.f37884i)) * 31) + Boolean.hashCode(this.f37885o)) * 31) + Boolean.hashCode(this.f37886p)) * 31) + this.f37887q.hashCode()) * 31) + Long.hashCode(this.f37888r)) * 31;
            x1 x1Var = this.f37889s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f37890t.hashCode();
        }

        public final long o() {
            return this.f37888r;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37889s;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37890t;
        }

        @Override // mp.x1
        public List r() {
            return this.f37883e;
        }

        public String toString() {
            List list = this.f37883e;
            long j10 = this.f37884i;
            boolean z10 = this.f37885o;
            boolean z11 = this.f37886p;
            un.v vVar = this.f37887q;
            long j11 = this.f37888r;
            x1 x1Var = this.f37889s;
            v.b bVar = this.f37890t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final e u(List selfies, long j10, boolean z10, boolean z11, un.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public final long w() {
            return this.f37884i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37883e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f37884i);
            dest.writeInt(this.f37885o ? 1 : 0);
            dest.writeInt(this.f37886p ? 1 : 0);
            dest.writeParcelable(this.f37887q, i10);
            dest.writeLong(this.f37888r);
            dest.writeParcelable(this.f37889s, i10);
            dest.writeString(this.f37890t.name());
        }

        public final boolean x() {
            return this.f37885o;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, un.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37883e = selfies;
            this.f37884i = j10;
            this.f37885o = z10;
            this.f37886p = z11;
            this.f37887q = cameraProperties;
            this.f37888r = j11;
            this.f37889s = x1Var;
            this.f37890t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37891e;

        /* renamed from: i  reason: collision with root package name */
        private final un.v f37892i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37893o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f37894p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f37895q;

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
            this.f37891e = selfies;
            this.f37892i = cameraProperties;
            this.f37893o = j10;
            this.f37894p = x1Var;
            this.f37895q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37894p;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37895q;
        }

        @Override // mp.x1
        public List r() {
            return this.f37891e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37891e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f37892i, i10);
            dest.writeLong(this.f37893o);
            dest.writeParcelable(this.f37894p, i10);
            dest.writeString(this.f37895q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f37896d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f37897e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f37898i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f37899o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f37900p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37901q;

        static {
            g[] a10 = a();
            f37900p = a10;
            f37901q = xr.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f37896d, f37897e, f37898i, f37899o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f37900p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f37902e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f37903i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f37904o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f37905p;

        /* renamed from: q  reason: collision with root package name */
        private final List f37906q;

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
            if (this.f37902e == hVar.f37902e && this.f37903i == hVar.f37903i && Intrinsics.areEqual(this.f37904o, hVar.f37904o) && this.f37905p == hVar.f37905p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f37902e) * 31) + Boolean.hashCode(this.f37903i)) * 31;
            x1 x1Var = this.f37904o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f37905p.hashCode();
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37904o;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37905p;
        }

        @Override // mp.x1
        public List r() {
            return this.f37906q;
        }

        public String toString() {
            boolean z10 = this.f37902e;
            boolean z11 = this.f37903i;
            x1 x1Var = this.f37904o;
            v.b bVar = this.f37905p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37902e ? 1 : 0);
            dest.writeInt(this.f37903i ? 1 : 0);
            dest.writeParcelable(this.f37904o, i10);
            dest.writeString(this.f37905p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37902e = z10;
            this.f37903i = z11;
            this.f37904o = x1Var;
            this.f37905p = cameraFacingMode;
            this.f37906q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37907e;

        /* renamed from: i  reason: collision with root package name */
        private final List f37908i;

        /* renamed from: o  reason: collision with root package name */
        private final String f37909o;

        /* renamed from: p  reason: collision with root package name */
        private final un.v f37910p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37911q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f37912r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f37913s;

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
            this.f37907e = selfies;
            this.f37908i = selfiesToReview;
            this.f37909o = str;
            this.f37910p = cameraProperties;
            this.f37911q = j10;
            this.f37912r = x1Var;
            this.f37913s = cameraFacingMode;
        }

        public final un.v b() {
            return this.f37910p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f37911q;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37912r;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37913s;
        }

        @Override // mp.x1
        public List r() {
            return this.f37907e;
        }

        public final List u() {
            return this.f37908i;
        }

        public final String v() {
            return this.f37909o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37907e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f37908i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f37909o);
            dest.writeParcelable(this.f37910p, i10);
            dest.writeLong(this.f37911q);
            dest.writeParcelable(this.f37912r, i10);
            dest.writeString(this.f37913s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37917e;

        /* renamed from: i  reason: collision with root package name */
        private final List f37918i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f37919o;

        /* renamed from: p  reason: collision with root package name */
        private final un.v f37920p;

        /* renamed from: q  reason: collision with root package name */
        private final long f37921q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f37922r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f37923s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f37924t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f37925u;

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
            this.f37917e = selfies;
            this.f37918i = posesNeeded;
            this.f37919o = z10;
            this.f37920p = cameraProperties;
            this.f37921q = j10;
            this.f37922r = x1Var;
            this.f37923s = poseConfigs;
            this.f37924t = cameraFacingMode;
            this.f37925u = z11;
        }

        public static /* synthetic */ k v(k kVar, List list, List list2, boolean z10, un.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f37917e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f37918i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f37919o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f37920p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f37921q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f37922r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f37923s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f37924t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f37925u;
            }
            long j11 = j10;
            boolean z12 = z10;
            un.v vVar2 = vVar;
            return kVar.u(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37919o;
        }

        public final un.v b() {
            return this.f37920p;
        }

        @Override // mp.z
        public List c() {
            return this.f37918i;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37923s;
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
            if (Intrinsics.areEqual(this.f37917e, kVar.f37917e) && Intrinsics.areEqual(this.f37918i, kVar.f37918i) && this.f37919o == kVar.f37919o && Intrinsics.areEqual(this.f37920p, kVar.f37920p) && this.f37921q == kVar.f37921q && Intrinsics.areEqual(this.f37922r, kVar.f37922r) && Intrinsics.areEqual(this.f37923s, kVar.f37923s) && this.f37924t == kVar.f37924t && this.f37925u == kVar.f37925u) {
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
            int hashCode2 = ((((((((this.f37917e.hashCode() * 31) + this.f37918i.hashCode()) * 31) + Boolean.hashCode(this.f37919o)) * 31) + this.f37920p.hashCode()) * 31) + Long.hashCode(this.f37921q)) * 31;
            x1 x1Var = this.f37922r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f37923s.hashCode()) * 31) + this.f37924t.hashCode()) * 31) + Boolean.hashCode(this.f37925u);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37925u;
        }

        public final long o() {
            return this.f37921q;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37922r;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37924t;
        }

        @Override // mp.x1
        public List r() {
            return this.f37917e;
        }

        public String toString() {
            List list = this.f37917e;
            List list2 = this.f37918i;
            boolean z10 = this.f37919o;
            un.v vVar = this.f37920p;
            long j10 = this.f37921q;
            x1 x1Var = this.f37922r;
            s0 s0Var = this.f37923s;
            v.b bVar = this.f37924t;
            boolean z11 = this.f37925u;
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
            List<Parcelable> list = this.f37917e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f37918i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f37919o ? 1 : 0);
            dest.writeParcelable(this.f37920p, i10);
            dest.writeLong(this.f37921q);
            dest.writeParcelable(this.f37922r, i10);
            this.f37923s.writeToParcel(dest, i10);
            dest.writeString(this.f37924t.name());
            dest.writeInt(this.f37925u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f37940e;

        /* renamed from: i  reason: collision with root package name */
        private final un.v f37941i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37942o;

        /* renamed from: p  reason: collision with root package name */
        private final float f37943p;

        /* renamed from: q  reason: collision with root package name */
        private final yn.a f37944q;

        /* renamed from: r  reason: collision with root package name */
        private final List f37945r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f37946s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f37947t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f37948u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f37949v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f37950w;

        /* renamed from: x  reason: collision with root package name */
        private final List f37951x;

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
            this.f37940e = j10;
            this.f37941i = cameraProperties;
            this.f37942o = j11;
            this.f37943p = f10;
            this.f37944q = aVar;
            this.f37945r = posesNeeded;
            this.f37946s = x1Var;
            this.f37947t = poseConfigs;
            this.f37948u = z10;
            this.f37949v = cameraFacingMode;
            this.f37950w = z11;
            this.f37951x = CollectionsKt.l();
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
                j12 = mVar.f37940e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f37941i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f37942o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f37943p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f37944q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f37945r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f37946s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f37947t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f37948u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f37949v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f37950w;
            } else {
                z13 = z11;
            }
            return mVar.u(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37948u;
        }

        public final un.v b() {
            return this.f37941i;
        }

        @Override // mp.z
        public List c() {
            return this.f37945r;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37947t;
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
            if (this.f37940e == mVar.f37940e && Intrinsics.areEqual(this.f37941i, mVar.f37941i) && this.f37942o == mVar.f37942o && Float.compare(this.f37943p, mVar.f37943p) == 0 && Intrinsics.areEqual(this.f37944q, mVar.f37944q) && Intrinsics.areEqual(this.f37945r, mVar.f37945r) && Intrinsics.areEqual(this.f37946s, mVar.f37946s) && Intrinsics.areEqual(this.f37947t, mVar.f37947t) && this.f37948u == mVar.f37948u && this.f37949v == mVar.f37949v && this.f37950w == mVar.f37950w) {
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
            int hashCode2 = ((((((Long.hashCode(this.f37940e) * 31) + this.f37941i.hashCode()) * 31) + Long.hashCode(this.f37942o)) * 31) + Float.hashCode(this.f37943p)) * 31;
            yn.a aVar = this.f37944q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f37945r.hashCode()) * 31;
            x1 x1Var = this.f37946s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f37947t.hashCode()) * 31) + Boolean.hashCode(this.f37948u)) * 31) + this.f37949v.hashCode()) * 31) + Boolean.hashCode(this.f37950w);
        }

        public final long i() {
            return this.f37940e;
        }

        @Override // mp.z
        public boolean l() {
            return this.f37950w;
        }

        public final long o() {
            return this.f37942o;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37946s;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37949v;
        }

        @Override // mp.x1
        public List r() {
            return this.f37951x;
        }

        public String toString() {
            long j10 = this.f37940e;
            un.v vVar = this.f37941i;
            long j11 = this.f37942o;
            float f10 = this.f37943p;
            yn.a aVar = this.f37944q;
            List list = this.f37945r;
            x1 x1Var = this.f37946s;
            s0 s0Var = this.f37947t;
            boolean z10 = this.f37948u;
            v.b bVar = this.f37949v;
            boolean z11 = this.f37950w;
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
            return this.f37944q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f37940e);
            dest.writeParcelable(this.f37941i, i10);
            dest.writeLong(this.f37942o);
            dest.writeFloat(this.f37943p);
            dest.writeParcelable(this.f37944q, i10);
            List<a1.b> list = this.f37945r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f37946s, i10);
            this.f37947t.writeToParcel(dest, i10);
            dest.writeInt(this.f37948u ? 1 : 0);
            dest.writeString(this.f37949v.name());
            dest.writeInt(this.f37950w ? 1 : 0);
        }

        public final float x() {
            return this.f37943p;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37952e;

        /* renamed from: i  reason: collision with root package name */
        private final String f37953i;

        /* renamed from: o  reason: collision with root package name */
        private final un.v f37954o;

        /* renamed from: p  reason: collision with root package name */
        private final long f37955p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f37956q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f37957r;

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
            this.f37952e = selfies;
            this.f37953i = str;
            this.f37954o = cameraProperties;
            this.f37955p = j10;
            this.f37956q = x1Var;
            this.f37957r = cameraFacingMode;
        }

        public final un.v b() {
            return this.f37954o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f37955p;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37956q;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37957r;
        }

        @Override // mp.x1
        public List r() {
            return this.f37952e;
        }

        public final String u() {
            return this.f37953i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37952e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f37953i);
            dest.writeParcelable(this.f37954o, i10);
            dest.writeLong(this.f37955p);
            dest.writeParcelable(this.f37956q, i10);
            dest.writeString(this.f37957r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f37958e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f37959i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f37960o;

        /* renamed from: p  reason: collision with root package name */
        private final List f37961p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f37962q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f37963r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f37964s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f37965t;

        /* renamed from: u  reason: collision with root package name */
        private final List f37966u;

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
                z10 = oVar.f37958e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f37959i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f37960o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f37961p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f37962q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f37963r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f37964s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f37965t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.u(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37963r;
        }

        @Override // mp.z
        public List c() {
            return this.f37961p;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37962q;
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
            if (this.f37958e == oVar.f37958e && this.f37959i == oVar.f37959i && Intrinsics.areEqual(this.f37960o, oVar.f37960o) && Intrinsics.areEqual(this.f37961p, oVar.f37961p) && Intrinsics.areEqual(this.f37962q, oVar.f37962q) && this.f37963r == oVar.f37963r && this.f37964s == oVar.f37964s && this.f37965t == oVar.f37965t) {
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
            int hashCode2 = ((Boolean.hashCode(this.f37958e) * 31) + Boolean.hashCode(this.f37959i)) * 31;
            x1 x1Var = this.f37960o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f37961p.hashCode()) * 31) + this.f37962q.hashCode()) * 31) + Boolean.hashCode(this.f37963r)) * 31) + this.f37964s.hashCode()) * 31) + Boolean.hashCode(this.f37965t);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37965t;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37960o;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37964s;
        }

        @Override // mp.x1
        public List r() {
            return this.f37966u;
        }

        public String toString() {
            boolean z10 = this.f37958e;
            boolean z11 = this.f37959i;
            x1 x1Var = this.f37960o;
            List list = this.f37961p;
            s0 s0Var = this.f37962q;
            boolean z12 = this.f37963r;
            v.b bVar = this.f37964s;
            boolean z13 = this.f37965t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final o u(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public final boolean w() {
            return this.f37959i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37958e ? 1 : 0);
            dest.writeInt(this.f37959i ? 1 : 0);
            dest.writeParcelable(this.f37960o, i10);
            List<a1.b> list = this.f37961p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f37962q.writeToParcel(dest, i10);
            dest.writeInt(this.f37963r ? 1 : 0);
            dest.writeString(this.f37964s.name());
            dest.writeInt(this.f37965t ? 1 : 0);
        }

        public final boolean x() {
            return this.f37958e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37958e = z10;
            this.f37959i = z11;
            this.f37960o = x1Var;
            this.f37961p = posesNeeded;
            this.f37962q = poseConfigs;
            this.f37963r = z12;
            this.f37964s = cameraFacingMode;
            this.f37965t = z13;
            this.f37966u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f37967e;

        /* renamed from: i  reason: collision with root package name */
        private final un.v f37968i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37969o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f37970p;

        /* renamed from: q  reason: collision with root package name */
        private final List f37971q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f37972r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f37973s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f37974t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f37975u;

        /* renamed from: v  reason: collision with root package name */
        private final List f37976v;

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
            this.f37967e = str;
            this.f37968i = cameraProperties;
            this.f37969o = j10;
            this.f37970p = x1Var;
            this.f37971q = posesNeeded;
            this.f37972r = poseConfigs;
            this.f37973s = z10;
            this.f37974t = cameraFacingMode;
            this.f37975u = z11;
            this.f37976v = CollectionsKt.l();
        }

        public static /* synthetic */ p v(p pVar, String str, un.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f37967e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f37968i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f37969o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f37970p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f37971q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f37972r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f37973s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f37974t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f37975u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.u(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // mp.z
        public boolean a() {
            return this.f37973s;
        }

        @Override // mp.z
        public List c() {
            return this.f37971q;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37972r;
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
            if (Intrinsics.areEqual(this.f37967e, pVar.f37967e) && Intrinsics.areEqual(this.f37968i, pVar.f37968i) && this.f37969o == pVar.f37969o && Intrinsics.areEqual(this.f37970p, pVar.f37970p) && Intrinsics.areEqual(this.f37971q, pVar.f37971q) && Intrinsics.areEqual(this.f37972r, pVar.f37972r) && this.f37973s == pVar.f37973s && this.f37974t == pVar.f37974t && this.f37975u == pVar.f37975u) {
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
            String str = this.f37967e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f37968i.hashCode()) * 31) + Long.hashCode(this.f37969o)) * 31;
            x1 x1Var = this.f37970p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f37971q.hashCode()) * 31) + this.f37972r.hashCode()) * 31) + Boolean.hashCode(this.f37973s)) * 31) + this.f37974t.hashCode()) * 31) + Boolean.hashCode(this.f37975u);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37975u;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37970p;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37974t;
        }

        @Override // mp.x1
        public List r() {
            return this.f37976v;
        }

        public String toString() {
            String str = this.f37967e;
            un.v vVar = this.f37968i;
            long j10 = this.f37969o;
            x1 x1Var = this.f37970p;
            List list = this.f37971q;
            s0 s0Var = this.f37972r;
            boolean z10 = this.f37973s;
            v.b bVar = this.f37974t;
            boolean z11 = this.f37975u;
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
            dest.writeString(this.f37967e);
            dest.writeParcelable(this.f37968i, i10);
            dest.writeLong(this.f37969o);
            dest.writeParcelable(this.f37970p, i10);
            List<a1.b> list = this.f37971q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f37972r.writeToParcel(dest, i10);
            dest.writeInt(this.f37973s ? 1 : 0);
            dest.writeString(this.f37974t.name());
            dest.writeInt(this.f37975u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f37977e;

        /* renamed from: i  reason: collision with root package name */
        private final String f37978i;

        /* renamed from: o  reason: collision with root package name */
        private final un.v f37979o;

        /* renamed from: p  reason: collision with root package name */
        private final long f37980p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f37981q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f37982r;

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
            this.f37977e = selfies;
            this.f37978i = webRtcObjectId;
            this.f37979o = cameraProperties;
            this.f37980p = j10;
            this.f37981q = x1Var;
            this.f37982r = cameraFacingMode;
        }

        public final un.v b() {
            return this.f37979o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long o() {
            return this.f37980p;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37981q;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37982r;
        }

        @Override // mp.x1
        public List r() {
            return this.f37977e;
        }

        public final String u() {
            return this.f37978i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f37977e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f37978i);
            dest.writeParcelable(this.f37979o, i10);
            dest.writeLong(this.f37980p);
            dest.writeParcelable(this.f37981q, i10);
            dest.writeString(this.f37982r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 p();

    public abstract v.b q();

    public abstract List r();

    public final void t(boolean z10) {
        this.f37837d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f37914e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f37915i;

        /* renamed from: o  reason: collision with root package name */
        private final List f37916o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f51832d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37914e;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37915i;
        }

        @Override // mp.x1
        public List r() {
            return this.f37916o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f37914e, i10);
            dest.writeString(this.f37915i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37914e = x1Var;
            this.f37915i = cameraFacingMode;
            this.f37916o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f37926e;

        /* renamed from: i  reason: collision with root package name */
        private final yn.b f37927i;

        /* renamed from: o  reason: collision with root package name */
        private final float f37928o;

        /* renamed from: p  reason: collision with root package name */
        private final yn.a f37929p;

        /* renamed from: q  reason: collision with root package name */
        private final List f37930q;

        /* renamed from: r  reason: collision with root package name */
        private final long f37931r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f37932s;

        /* renamed from: t  reason: collision with root package name */
        private final long f37933t;

        /* renamed from: u  reason: collision with root package name */
        private final un.v f37934u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f37935v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f37936w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f37937x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f37938y;

        /* renamed from: z  reason: collision with root package name */
        private final List f37939z;

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
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? yn.b.f55476d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
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
                z13 = lVar.f37926e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f37927i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f37928o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f37929p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f37930q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f37931r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f37932s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f37933t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f37934u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f37935v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f37936w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f37937x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f37938y;
            } else {
                z15 = z12;
            }
            return lVar.u(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        public final yn.b A() {
            return this.f37927i;
        }

        @Override // mp.z
        public boolean a() {
            return this.f37932s;
        }

        @Override // mp.a0
        public un.v b() {
            return this.f37934u;
        }

        @Override // mp.z
        public List c() {
            return this.f37930q;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37936w;
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
            if (this.f37926e == lVar.f37926e && this.f37927i == lVar.f37927i && Float.compare(this.f37928o, lVar.f37928o) == 0 && Intrinsics.areEqual(this.f37929p, lVar.f37929p) && Intrinsics.areEqual(this.f37930q, lVar.f37930q) && this.f37931r == lVar.f37931r && this.f37932s == lVar.f37932s && this.f37933t == lVar.f37933t && Intrinsics.areEqual(this.f37934u, lVar.f37934u) && Intrinsics.areEqual(this.f37935v, lVar.f37935v) && Intrinsics.areEqual(this.f37936w, lVar.f37936w) && this.f37937x == lVar.f37937x && this.f37938y == lVar.f37938y) {
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
            int hashCode3 = Boolean.hashCode(this.f37926e) * 31;
            yn.b bVar = this.f37927i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f37928o)) * 31;
            yn.a aVar = this.f37929p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f37930q.hashCode()) * 31) + Long.hashCode(this.f37931r)) * 31) + Boolean.hashCode(this.f37932s)) * 31) + Long.hashCode(this.f37933t)) * 31) + this.f37934u.hashCode()) * 31;
            x1 x1Var = this.f37935v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f37936w.hashCode()) * 31) + this.f37937x.hashCode()) * 31) + Boolean.hashCode(this.f37938y);
        }

        @Override // mp.a0
        public long i() {
            return this.f37931r;
        }

        @Override // mp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37938y;
        }

        @Override // mp.a0
        public long o() {
            return this.f37933t;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37935v;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37937x;
        }

        @Override // mp.x1
        public List r() {
            return this.f37939z;
        }

        public String toString() {
            boolean z10 = this.f37926e;
            yn.b bVar = this.f37927i;
            float f10 = this.f37928o;
            yn.a aVar = this.f37929p;
            List list = this.f37930q;
            long j10 = this.f37931r;
            boolean z11 = this.f37932s;
            long j11 = this.f37933t;
            un.v vVar = this.f37934u;
            x1 x1Var = this.f37935v;
            s0 s0Var = this.f37936w;
            v.b bVar2 = this.f37937x;
            boolean z12 = this.f37938y;
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
            return this.f37929p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f37926e ? 1 : 0);
            yn.b bVar = this.f37927i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f37928o);
            dest.writeParcelable(this.f37929p, i10);
            List<a1.b> list = this.f37930q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f37931r);
            dest.writeInt(this.f37932s ? 1 : 0);
            dest.writeLong(this.f37933t);
            dest.writeParcelable(this.f37934u, i10);
            dest.writeParcelable(this.f37935v, i10);
            this.f37936w.writeToParcel(dest, i10);
            dest.writeString(this.f37937x.name());
            dest.writeInt(this.f37938y ? 1 : 0);
        }

        public final float x() {
            return this.f37928o;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, yn.b bVar, float f10, yn.a aVar, List posesNeeded, long j10, boolean z11, long j11, un.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f37926e = z10;
            this.f37927i = bVar;
            this.f37928o = f10;
            this.f37929p = aVar;
            this.f37930q = posesNeeded;
            this.f37931r = j10;
            this.f37932s = z11;
            this.f37933t = j11;
            this.f37934u = cameraProperties;
            this.f37935v = x1Var;
            this.f37936w = poseConfigs;
            this.f37937x = cameraFacingMode;
            this.f37938y = z12;
            this.f37939z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0514a();

        /* renamed from: e  reason: collision with root package name */
        private final yn.b f37838e;

        /* renamed from: i  reason: collision with root package name */
        private final float f37839i;

        /* renamed from: o  reason: collision with root package name */
        private final yn.a f37840o;

        /* renamed from: p  reason: collision with root package name */
        private final List f37841p;

        /* renamed from: q  reason: collision with root package name */
        private final List f37842q;

        /* renamed from: r  reason: collision with root package name */
        private final long f37843r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f37844s;

        /* renamed from: t  reason: collision with root package name */
        private final long f37845t;

        /* renamed from: u  reason: collision with root package name */
        private final un.v f37846u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f37847v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f37848w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f37849x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f37850y;

        /* renamed from: z  reason: collision with root package name */
        private final g f37851z;

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
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f37896d : gVar);
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
                bVar3 = aVar.f37838e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f37839i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f37840o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f37841p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f37842q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f37843r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f37844s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f37845t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f37846u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f37847v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f37848w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f37849x;
            } else {
                bVar4 = bVar2;
            }
            yn.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f37850y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f37851z;
            } else {
                gVar2 = gVar;
            }
            return aVar.u(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        public final float A() {
            return this.f37839i;
        }

        public final yn.b B() {
            return this.f37838e;
        }

        @Override // mp.z
        public boolean a() {
            return this.f37844s;
        }

        @Override // mp.a0
        public un.v b() {
            return this.f37846u;
        }

        @Override // mp.z
        public List c() {
            return this.f37842q;
        }

        @Override // mp.z
        public s0 d() {
            return this.f37848w;
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
            if (this.f37838e == aVar.f37838e && Float.compare(this.f37839i, aVar.f37839i) == 0 && Intrinsics.areEqual(this.f37840o, aVar.f37840o) && Intrinsics.areEqual(this.f37841p, aVar.f37841p) && Intrinsics.areEqual(this.f37842q, aVar.f37842q) && this.f37843r == aVar.f37843r && this.f37844s == aVar.f37844s && this.f37845t == aVar.f37845t && Intrinsics.areEqual(this.f37846u, aVar.f37846u) && Intrinsics.areEqual(this.f37847v, aVar.f37847v) && Intrinsics.areEqual(this.f37848w, aVar.f37848w) && this.f37849x == aVar.f37849x && this.f37850y == aVar.f37850y && this.f37851z == aVar.f37851z) {
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
            yn.b bVar = this.f37838e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f37839i)) * 31;
            yn.a aVar = this.f37840o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f37841p.hashCode()) * 31) + this.f37842q.hashCode()) * 31) + Long.hashCode(this.f37843r)) * 31) + Boolean.hashCode(this.f37844s)) * 31) + Long.hashCode(this.f37845t)) * 31) + this.f37846u.hashCode()) * 31;
            x1 x1Var = this.f37847v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f37848w.hashCode()) * 31) + this.f37849x.hashCode()) * 31) + Boolean.hashCode(this.f37850y)) * 31) + this.f37851z.hashCode();
        }

        @Override // mp.a0
        public long i() {
            return this.f37843r;
        }

        @Override // mp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // mp.z
        public boolean l() {
            return this.f37850y;
        }

        @Override // mp.a0
        public long o() {
            return this.f37845t;
        }

        @Override // mp.x1
        public x1 p() {
            return this.f37847v;
        }

        @Override // mp.x1
        public v.b q() {
            return this.f37849x;
        }

        @Override // mp.x1
        public List r() {
            return this.f37841p;
        }

        public String toString() {
            yn.b bVar = this.f37838e;
            float f10 = this.f37839i;
            yn.a aVar = this.f37840o;
            List list = this.f37841p;
            List list2 = this.f37842q;
            long j10 = this.f37843r;
            boolean z10 = this.f37844s;
            long j11 = this.f37845t;
            un.v vVar = this.f37846u;
            x1 x1Var = this.f37847v;
            s0 s0Var = this.f37848w;
            v.b bVar2 = this.f37849x;
            boolean z11 = this.f37850y;
            g gVar = this.f37851z;
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
            return this.f37840o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            yn.b bVar = this.f37838e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f37839i);
            dest.writeParcelable(this.f37840o, i10);
            List<Parcelable> list = this.f37841p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f37842q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f37843r);
            dest.writeInt(this.f37844s ? 1 : 0);
            dest.writeLong(this.f37845t);
            dest.writeParcelable(this.f37846u, i10);
            dest.writeParcelable(this.f37847v, i10);
            this.f37848w.writeToParcel(dest, i10);
            dest.writeString(this.f37849x.name());
            dest.writeInt(this.f37850y ? 1 : 0);
            dest.writeString(this.f37851z.name());
        }

        public final g x() {
            return this.f37851z;
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
            this.f37838e = bVar;
            this.f37839i = f10;
            this.f37840o = aVar;
            this.f37841p = selfies;
            this.f37842q = posesNeeded;
            this.f37843r = j10;
            this.f37844s = z10;
            this.f37845t = j11;
            this.f37846u = cameraProperties;
            this.f37847v = x1Var;
            this.f37848w = poseConfigs;
            this.f37849x = cameraFacingMode;
            this.f37850y = z11;
            this.f37851z = flashState;
        }
    }
}
