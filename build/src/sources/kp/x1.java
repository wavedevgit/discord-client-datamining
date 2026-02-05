package kp;

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
import kp.a0;
import kp.a1;
import kp.z;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import sn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f35681d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f35696e;

        /* renamed from: i  reason: collision with root package name */
        private final a1.b f35697i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f35698o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f35699p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f35700q;

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
            this.f35696e = nextState;
            this.f35697i = completedPose;
            this.f35698o = x1Var;
            this.f35699p = cameraFacingMode;
            this.f35700q = z10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35698o;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35699p;
        }

        @Override // kp.x1
        public List q() {
            return this.f35696e.q();
        }

        public final a1.b s() {
            return this.f35697i;
        }

        public final x1 t() {
            return this.f35696e;
        }

        public final boolean u() {
            return this.f35700q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f35696e, i10);
            dest.writeString(this.f35697i.name());
            dest.writeParcelable(this.f35698o, i10);
            dest.writeString(this.f35699p.name());
            dest.writeInt(this.f35700q ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f35701e;

        /* renamed from: i  reason: collision with root package name */
        private final wn.b f35702i;

        /* renamed from: o  reason: collision with root package name */
        private final long f35703o;

        /* renamed from: p  reason: collision with root package name */
        private final sn.v f35704p;

        /* renamed from: q  reason: collision with root package name */
        private final long f35705q;

        /* renamed from: r  reason: collision with root package name */
        private final float f35706r;

        /* renamed from: s  reason: collision with root package name */
        private final wn.a f35707s;

        /* renamed from: t  reason: collision with root package name */
        private final List f35708t;

        /* renamed from: u  reason: collision with root package name */
        private final x1 f35709u;

        /* renamed from: v  reason: collision with root package name */
        private final s0 f35710v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f35711w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f35712x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f35713y;

        /* renamed from: z  reason: collision with root package name */
        private final List f35714z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                wn.b valueOf;
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = wn.b.valueOf(parcel.readString());
                }
                wn.b bVar = valueOf;
                long readLong = parcel.readLong();
                sn.v vVar = (sn.v) parcel.readParcelable(c.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                wn.a aVar = (wn.a) parcel.readParcelable(c.class.getClassLoader());
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

        public /* synthetic */ c(int i10, wn.b bVar, long j10, sn.v vVar, long j11, float f10, wn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, j10, vVar, j11, f10, aVar, list, x1Var, s0Var, z10, bVar2, z11);
        }

        public static /* synthetic */ c t(c cVar, int i10, wn.b bVar, long j10, sn.v vVar, long j11, float f10, wn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar2, boolean z11, int i11, Object obj) {
            int i12;
            wn.b bVar3;
            long j12;
            sn.v vVar2;
            long j13;
            float f11;
            wn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i12 = cVar.f35701e;
            } else {
                i12 = i10;
            }
            if ((i11 & 2) != 0) {
                bVar3 = cVar.f35702i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                j12 = cVar.f35703o;
            } else {
                j12 = j10;
            }
            if ((i11 & 8) != 0) {
                vVar2 = cVar.f35704p;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 16) != 0) {
                j13 = cVar.f35705q;
            } else {
                j13 = j11;
            }
            if ((i11 & 32) != 0) {
                f11 = cVar.f35706r;
            } else {
                f11 = f10;
            }
            if ((i11 & 64) != 0) {
                aVar2 = cVar.f35707s;
            } else {
                aVar2 = aVar;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list2 = cVar.f35708t;
            } else {
                list2 = list;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                x1Var2 = cVar.f35709u;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                s0Var2 = cVar.f35710v;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z12 = cVar.f35711w;
            } else {
                z12 = z10;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = cVar.f35712x;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = cVar.f35713y;
            } else {
                z13 = z11;
            }
            return cVar.s(i12, bVar3, j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar4, z13);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35711w;
        }

        public final sn.v b() {
            return this.f35704p;
        }

        @Override // kp.z
        public List c() {
            return this.f35708t;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35710v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (this.f35701e == cVar.f35701e && this.f35702i == cVar.f35702i && this.f35703o == cVar.f35703o && Intrinsics.areEqual(this.f35704p, cVar.f35704p) && this.f35705q == cVar.f35705q && Float.compare(this.f35706r, cVar.f35706r) == 0 && Intrinsics.areEqual(this.f35707s, cVar.f35707s) && Intrinsics.areEqual(this.f35708t, cVar.f35708t) && Intrinsics.areEqual(this.f35709u, cVar.f35709u) && Intrinsics.areEqual(this.f35710v, cVar.f35710v) && this.f35711w == cVar.f35711w && this.f35712x == cVar.f35712x && this.f35713y == cVar.f35713y) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // kp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Integer.hashCode(this.f35701e) * 31;
            wn.b bVar = this.f35702i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((((((((hashCode3 + hashCode) * 31) + Long.hashCode(this.f35703o)) * 31) + this.f35704p.hashCode()) * 31) + Long.hashCode(this.f35705q)) * 31) + Float.hashCode(this.f35706r)) * 31;
            wn.a aVar = this.f35707s;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f35708t.hashCode()) * 31;
            x1 x1Var = this.f35709u;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode5 + i10) * 31) + this.f35710v.hashCode()) * 31) + Boolean.hashCode(this.f35711w)) * 31) + this.f35712x.hashCode()) * 31) + Boolean.hashCode(this.f35713y);
        }

        public final long i() {
            return this.f35703o;
        }

        @Override // kp.z
        public boolean l() {
            return this.f35713y;
        }

        public final long n() {
            return this.f35705q;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35709u;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35712x;
        }

        @Override // kp.x1
        public List q() {
            return this.f35714z;
        }

        public final c s(int i10, wn.b bVar, long j10, sn.v cameraProperties, long j11, float f10, wn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new c(i10, bVar, j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f35701e;
            wn.b bVar = this.f35702i;
            long j10 = this.f35703o;
            sn.v vVar = this.f35704p;
            long j11 = this.f35705q;
            float f10 = this.f35706r;
            wn.a aVar = this.f35707s;
            List list = this.f35708t;
            x1 x1Var = this.f35709u;
            s0 s0Var = this.f35710v;
            boolean z10 = this.f35711w;
            v.b bVar2 = this.f35712x;
            boolean z11 = this.f35713y;
            return "CountdownToCapture(countDown=" + i10 + ", selfieError=" + bVar + ", startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final wn.a u() {
            return this.f35707s;
        }

        public final int v() {
            return this.f35701e;
        }

        public final float w() {
            return this.f35706r;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f35701e);
            wn.b bVar = this.f35702i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeLong(this.f35703o);
            dest.writeParcelable(this.f35704p, i10);
            dest.writeLong(this.f35705q);
            dest.writeFloat(this.f35706r);
            dest.writeParcelable(this.f35707s, i10);
            List<a1.b> list = this.f35708t;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeParcelable(this.f35709u, i10);
            this.f35710v.writeToParcel(dest, i10);
            dest.writeInt(this.f35711w ? 1 : 0);
            dest.writeString(this.f35712x.name());
            dest.writeInt(this.f35713y ? 1 : 0);
        }

        public final wn.b x() {
            return this.f35702i;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(int i10, wn.b bVar, long j10, sn.v cameraProperties, long j11, float f10, wn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35701e = i10;
            this.f35702i = bVar;
            this.f35703o = j10;
            this.f35704p = cameraProperties;
            this.f35705q = j11;
            this.f35706r = f10;
            this.f35707s = aVar;
            this.f35708t = posesNeeded;
            this.f35709u = x1Var;
            this.f35710v = poseConfigs;
            this.f35711w = z10;
            this.f35712x = cameraFacingMode;
            this.f35713y = z11;
            this.f35714z = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final int f35715e;

        /* renamed from: i  reason: collision with root package name */
        private final wn.b f35716i;

        /* renamed from: o  reason: collision with root package name */
        private final sn.v f35717o;

        /* renamed from: p  reason: collision with root package name */
        private final List f35718p;

        /* renamed from: q  reason: collision with root package name */
        private final long f35719q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f35720r;

        /* renamed from: s  reason: collision with root package name */
        private final long f35721s;

        /* renamed from: t  reason: collision with root package name */
        private final x1 f35722t;

        /* renamed from: u  reason: collision with root package name */
        private final s0 f35723u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f35724v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f35725w;

        /* renamed from: x  reason: collision with root package name */
        private final List f35726x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                wn.b valueOf;
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
                    valueOf = wn.b.valueOf(parcel.readString());
                }
                wn.b bVar = valueOf;
                sn.v vVar = (sn.v) parcel.readParcelable(d.class.getClassLoader());
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

        public /* synthetic */ d(int i10, wn.b bVar, sn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(i10, (i11 & 2) != 0 ? null : bVar, vVar, list, j10, (i11 & 32) != 0 ? true : z10, j11, x1Var, s0Var, bVar2, z11);
        }

        public static /* synthetic */ d t(d dVar, int i10, wn.b bVar, sn.v vVar, List list, long j10, boolean z10, long j11, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, int i11, Object obj) {
            wn.b bVar3;
            sn.v vVar2;
            List list2;
            long j12;
            boolean z12;
            long j13;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            if ((i11 & 1) != 0) {
                i10 = dVar.f35715e;
            }
            if ((i11 & 2) != 0) {
                bVar3 = dVar.f35716i;
            } else {
                bVar3 = bVar;
            }
            if ((i11 & 4) != 0) {
                vVar2 = dVar.f35717o;
            } else {
                vVar2 = vVar;
            }
            if ((i11 & 8) != 0) {
                list2 = dVar.f35718p;
            } else {
                list2 = list;
            }
            if ((i11 & 16) != 0) {
                j12 = dVar.f35719q;
            } else {
                j12 = j10;
            }
            if ((i11 & 32) != 0) {
                z12 = dVar.f35720r;
            } else {
                z12 = z10;
            }
            if ((i11 & 64) != 0) {
                j13 = dVar.f35721s;
            } else {
                j13 = j11;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                x1Var2 = dVar.f35722t;
            } else {
                x1Var2 = x1Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                s0Var2 = dVar.f35723u;
            } else {
                s0Var2 = s0Var;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar4 = dVar.f35724v;
            } else {
                bVar4 = bVar2;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = dVar.f35725w;
            } else {
                z13 = z11;
            }
            return dVar.s(i10, bVar3, vVar2, list2, j12, z12, j13, x1Var2, s0Var2, bVar4, z13);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35720r;
        }

        @Override // kp.a0
        public sn.v b() {
            return this.f35717o;
        }

        @Override // kp.z
        public List c() {
            return this.f35718p;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35723u;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (this.f35715e == dVar.f35715e && this.f35716i == dVar.f35716i && Intrinsics.areEqual(this.f35717o, dVar.f35717o) && Intrinsics.areEqual(this.f35718p, dVar.f35718p) && this.f35719q == dVar.f35719q && this.f35720r == dVar.f35720r && this.f35721s == dVar.f35721s && Intrinsics.areEqual(this.f35722t, dVar.f35722t) && Intrinsics.areEqual(this.f35723u, dVar.f35723u) && this.f35724v == dVar.f35724v && this.f35725w == dVar.f35725w) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // kp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = Integer.hashCode(this.f35715e) * 31;
            wn.b bVar = this.f35716i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = (((((((((((hashCode2 + hashCode) * 31) + this.f35717o.hashCode()) * 31) + this.f35718p.hashCode()) * 31) + Long.hashCode(this.f35719q)) * 31) + Boolean.hashCode(this.f35720r)) * 31) + Long.hashCode(this.f35721s)) * 31;
            x1 x1Var = this.f35722t;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode3 + i10) * 31) + this.f35723u.hashCode()) * 31) + this.f35724v.hashCode()) * 31) + Boolean.hashCode(this.f35725w);
        }

        @Override // kp.a0
        public long i() {
            return this.f35719q;
        }

        @Override // kp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // kp.z
        public boolean l() {
            return this.f35725w;
        }

        @Override // kp.a0
        public long n() {
            return this.f35721s;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35722t;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35724v;
        }

        @Override // kp.x1
        public List q() {
            return this.f35726x;
        }

        public final d s(int i10, wn.b bVar, sn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new d(i10, bVar, cameraProperties, posesNeeded, j10, z10, j11, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            int i10 = this.f35715e;
            wn.b bVar = this.f35716i;
            sn.v vVar = this.f35717o;
            List list = this.f35718p;
            long j10 = this.f35719q;
            boolean z10 = this.f35720r;
            long j11 = this.f35721s;
            x1 x1Var = this.f35722t;
            s0 s0Var = this.f35723u;
            v.b bVar2 = this.f35724v;
            boolean z11 = this.f35725w;
            return "CountdownToManualCapture(countDown=" + i10 + ", selfieError=" + bVar + ", cameraProperties=" + vVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ")";
        }

        public final int u() {
            return this.f35715e;
        }

        public final wn.b v() {
            return this.f35716i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f35715e);
            wn.b bVar = this.f35716i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f35717o, i10);
            List<a1.b> list = this.f35718p;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f35719q);
            dest.writeInt(this.f35720r ? 1 : 0);
            dest.writeLong(this.f35721s);
            dest.writeParcelable(this.f35722t, i10);
            this.f35723u.writeToParcel(dest, i10);
            dest.writeString(this.f35724v.name());
            dest.writeInt(this.f35725w ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(int i10, wn.b bVar, sn.v cameraProperties, List posesNeeded, long j10, boolean z10, long j11, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35715e = i10;
            this.f35716i = bVar;
            this.f35717o = cameraProperties;
            this.f35718p = posesNeeded;
            this.f35719q = j10;
            this.f35720r = z10;
            this.f35721s = j11;
            this.f35722t = x1Var;
            this.f35723u = poseConfigs;
            this.f35724v = cameraFacingMode;
            this.f35725w = z11;
            this.f35726x = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f35727e;

        /* renamed from: i  reason: collision with root package name */
        private final long f35728i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f35729o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f35730p;

        /* renamed from: q  reason: collision with root package name */
        private final sn.v f35731q;

        /* renamed from: r  reason: collision with root package name */
        private final long f35732r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f35733s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f35734t;

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
                return new e(arrayList, j11, z11, z12, (sn.v) parcel.readParcelable(e.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(e.class.getClassLoader()), v.b.valueOf(parcel.readString()));
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
        public /* synthetic */ e(java.util.List r2, long r3, boolean r5, boolean r6, sn.v r7, long r8, kp.x1 r10, sn.v.b r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
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
            throw new UnsupportedOperationException("Method not decompiled: kp.x1.e.<init>(java.util.List, long, boolean, boolean, sn.v, long, kp.x1, sn.v$b, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }

        public static /* synthetic */ e t(e eVar, List list, long j10, boolean z10, boolean z11, sn.v vVar, long j11, x1 x1Var, v.b bVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = eVar.f35727e;
            }
            if ((i10 & 2) != 0) {
                j10 = eVar.f35728i;
            }
            if ((i10 & 4) != 0) {
                z10 = eVar.f35729o;
            }
            if ((i10 & 8) != 0) {
                z11 = eVar.f35730p;
            }
            if ((i10 & 16) != 0) {
                vVar = eVar.f35731q;
            }
            if ((i10 & 32) != 0) {
                j11 = eVar.f35732r;
            }
            if ((i10 & 64) != 0) {
                x1Var = eVar.f35733s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = eVar.f35734t;
            }
            long j12 = j11;
            sn.v vVar2 = vVar;
            boolean z12 = z10;
            return eVar.s(list, j10, z12, z11, vVar2, j12, x1Var, bVar);
        }

        public final sn.v b() {
            return this.f35731q;
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
            if (Intrinsics.areEqual(this.f35727e, eVar.f35727e) && this.f35728i == eVar.f35728i && this.f35729o == eVar.f35729o && this.f35730p == eVar.f35730p && Intrinsics.areEqual(this.f35731q, eVar.f35731q) && this.f35732r == eVar.f35732r && Intrinsics.areEqual(this.f35733s, eVar.f35733s) && this.f35734t == eVar.f35734t) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((((this.f35727e.hashCode() * 31) + Long.hashCode(this.f35728i)) * 31) + Boolean.hashCode(this.f35729o)) * 31) + Boolean.hashCode(this.f35730p)) * 31) + this.f35731q.hashCode()) * 31) + Long.hashCode(this.f35732r)) * 31;
            x1 x1Var = this.f35733s;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f35734t.hashCode();
        }

        public final long n() {
            return this.f35732r;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35733s;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35734t;
        }

        @Override // kp.x1
        public List q() {
            return this.f35727e;
        }

        public final e s(List selfies, long j10, boolean z10, boolean z11, sn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new e(selfies, j10, z10, z11, cameraProperties, j11, x1Var, cameraFacingMode);
        }

        public String toString() {
            List list = this.f35727e;
            long j10 = this.f35728i;
            boolean z10 = this.f35729o;
            boolean z11 = this.f35730p;
            sn.v vVar = this.f35731q;
            long j11 = this.f35732r;
            x1 x1Var = this.f35733s;
            v.b bVar = this.f35734t;
            return "FinalizeLocalVideoCapture(selfies=" + list + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ", isFinalizeComplete=" + z11 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        public final long u() {
            return this.f35728i;
        }

        public final boolean v() {
            return this.f35729o;
        }

        public final boolean w() {
            return this.f35730p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f35727e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeLong(this.f35728i);
            dest.writeInt(this.f35729o ? 1 : 0);
            dest.writeInt(this.f35730p ? 1 : 0);
            dest.writeParcelable(this.f35731q, i10);
            dest.writeLong(this.f35732r);
            dest.writeParcelable(this.f35733s, i10);
            dest.writeString(this.f35734t.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List selfies, long j10, boolean z10, boolean z11, sn.v cameraProperties, long j11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35727e = selfies;
            this.f35728i = j10;
            this.f35729o = z10;
            this.f35730p = z11;
            this.f35731q = cameraProperties;
            this.f35732r = j11;
            this.f35733s = x1Var;
            this.f35734t = cameraFacingMode;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends x1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f35735e;

        /* renamed from: i  reason: collision with root package name */
        private final sn.v f35736i;

        /* renamed from: o  reason: collision with root package name */
        private final long f35737o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f35738p;

        /* renamed from: q  reason: collision with root package name */
        private final v.b f35739q;

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
                return new f(arrayList, (sn.v) parcel.readParcelable(f.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(f.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(List selfies, sn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35735e = selfies;
            this.f35736i = cameraProperties;
            this.f35737o = j10;
            this.f35738p = x1Var;
            this.f35739q = cameraFacingMode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35738p;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35739q;
        }

        @Override // kp.x1
        public List q() {
            return this.f35735e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f35735e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f35736i, i10);
            dest.writeLong(this.f35737o);
            dest.writeParcelable(this.f35738p, i10);
            dest.writeString(this.f35739q.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: d  reason: collision with root package name */
        public static final g f35740d = new g("Disabled", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final g f35741e = new g(PeerConnectionFactory.TRIAL_ENABLED, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final g f35742i = new g("FlashOn", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final g f35743o = new g("ReadyToCapture", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ g[] f35744p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f35745q;

        static {
            g[] a10 = a();
            f35744p = a10;
            f35745q = vr.a.a(a10);
        }

        private g(String str, int i10) {
        }

        private static final /* synthetic */ g[] a() {
            return new g[]{f35740d, f35741e, f35742i, f35743o};
        }

        public static g valueOf(String str) {
            return (g) Enum.valueOf(g.class, str);
        }

        public static g[] values() {
            return (g[]) f35744p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends x1 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f35746e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f35747i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f35748o;

        /* renamed from: p  reason: collision with root package name */
        private final v.b f35749p;

        /* renamed from: q  reason: collision with root package name */
        private final List f35750q;

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
            if (this.f35746e == hVar.f35746e && this.f35747i == hVar.f35747i && Intrinsics.areEqual(this.f35748o, hVar.f35748o) && this.f35749p == hVar.f35749p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f35746e) * 31) + Boolean.hashCode(this.f35747i)) * 31;
            x1 x1Var = this.f35748o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((hashCode2 + hashCode) * 31) + this.f35749p.hashCode();
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35748o;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35749p;
        }

        @Override // kp.x1
        public List q() {
            return this.f35750q;
        }

        public String toString() {
            boolean z10 = this.f35746e;
            boolean z11 = this.f35747i;
            x1 x1Var = this.f35748o;
            v.b bVar = this.f35749p;
            return "RestartCamera(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", cameraFacingMode=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f35746e ? 1 : 0);
            dest.writeInt(this.f35747i ? 1 : 0);
            dest.writeParcelable(this.f35748o, i10);
            dest.writeString(this.f35749p.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(boolean z10, boolean z11, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35746e = z10;
            this.f35747i = z11;
            this.f35748o = x1Var;
            this.f35749p = cameraFacingMode;
            this.f35750q = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends x1 {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f35751e;

        /* renamed from: i  reason: collision with root package name */
        private final List f35752i;

        /* renamed from: o  reason: collision with root package name */
        private final String f35753o;

        /* renamed from: p  reason: collision with root package name */
        private final sn.v f35754p;

        /* renamed from: q  reason: collision with root package name */
        private final long f35755q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f35756r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f35757s;

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
                return new i(arrayList, arrayList2, parcel.readString(), (sn.v) parcel.readParcelable(i.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(i.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(List selfies, List selfiesToReview, String str, sn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(selfiesToReview, "selfiesToReview");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35751e = selfies;
            this.f35752i = selfiesToReview;
            this.f35753o = str;
            this.f35754p = cameraProperties;
            this.f35755q = j10;
            this.f35756r = x1Var;
            this.f35757s = cameraFacingMode;
        }

        public final sn.v b() {
            return this.f35754p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long n() {
            return this.f35755q;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35756r;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35757s;
        }

        @Override // kp.x1
        public List q() {
            return this.f35751e;
        }

        public final List s() {
            return this.f35752i;
        }

        public final String t() {
            return this.f35753o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f35751e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f35752i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeString(this.f35753o);
            dest.writeParcelable(this.f35754p, i10);
            dest.writeLong(this.f35755q);
            dest.writeParcelable(this.f35756r, i10);
            dest.writeString(this.f35757s.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f35761e;

        /* renamed from: i  reason: collision with root package name */
        private final List f35762i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f35763o;

        /* renamed from: p  reason: collision with root package name */
        private final sn.v f35764p;

        /* renamed from: q  reason: collision with root package name */
        private final long f35765q;

        /* renamed from: r  reason: collision with root package name */
        private final x1 f35766r;

        /* renamed from: s  reason: collision with root package name */
        private final s0 f35767s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f35768t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f35769u;

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
                sn.v vVar = (sn.v) parcel.readParcelable(cls.getClassLoader());
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
        public k(List selfies, List posesNeeded, boolean z10, sn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35761e = selfies;
            this.f35762i = posesNeeded;
            this.f35763o = z10;
            this.f35764p = cameraProperties;
            this.f35765q = j10;
            this.f35766r = x1Var;
            this.f35767s = poseConfigs;
            this.f35768t = cameraFacingMode;
            this.f35769u = z11;
        }

        public static /* synthetic */ k t(k kVar, List list, List list2, boolean z10, sn.v vVar, long j10, x1 x1Var, s0 s0Var, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = kVar.f35761e;
            }
            if ((i10 & 2) != 0) {
                list2 = kVar.f35762i;
            }
            if ((i10 & 4) != 0) {
                z10 = kVar.f35763o;
            }
            if ((i10 & 8) != 0) {
                vVar = kVar.f35764p;
            }
            if ((i10 & 16) != 0) {
                j10 = kVar.f35765q;
            }
            if ((i10 & 32) != 0) {
                x1Var = kVar.f35766r;
            }
            if ((i10 & 64) != 0) {
                s0Var = kVar.f35767s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = kVar.f35768t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = kVar.f35769u;
            }
            long j11 = j10;
            boolean z12 = z10;
            sn.v vVar2 = vVar;
            return kVar.s(list, list2, z12, vVar2, j11, x1Var, s0Var, bVar, z11);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35763o;
        }

        public final sn.v b() {
            return this.f35764p;
        }

        @Override // kp.z
        public List c() {
            return this.f35762i;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35767s;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (Intrinsics.areEqual(this.f35761e, kVar.f35761e) && Intrinsics.areEqual(this.f35762i, kVar.f35762i) && this.f35763o == kVar.f35763o && Intrinsics.areEqual(this.f35764p, kVar.f35764p) && this.f35765q == kVar.f35765q && Intrinsics.areEqual(this.f35766r, kVar.f35766r) && Intrinsics.areEqual(this.f35767s, kVar.f35767s) && this.f35768t == kVar.f35768t && this.f35769u == kVar.f35769u) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((((this.f35761e.hashCode() * 31) + this.f35762i.hashCode()) * 31) + Boolean.hashCode(this.f35763o)) * 31) + this.f35764p.hashCode()) * 31) + Long.hashCode(this.f35765q)) * 31;
            x1 x1Var = this.f35766r;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((hashCode2 + hashCode) * 31) + this.f35767s.hashCode()) * 31) + this.f35768t.hashCode()) * 31) + Boolean.hashCode(this.f35769u);
        }

        @Override // kp.z
        public boolean l() {
            return this.f35769u;
        }

        public final long n() {
            return this.f35765q;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35766r;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35768t;
        }

        @Override // kp.x1
        public List q() {
            return this.f35761e;
        }

        public final k s(List selfies, List posesNeeded, boolean z10, sn.v cameraProperties, long j10, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new k(selfies, posesNeeded, z10, cameraProperties, j10, x1Var, poseConfigs, cameraFacingMode, z11);
        }

        public String toString() {
            List list = this.f35761e;
            List list2 = this.f35762i;
            boolean z10 = this.f35763o;
            sn.v vVar = this.f35764p;
            long j10 = this.f35765q;
            x1 x1Var = this.f35766r;
            s0 s0Var = this.f35767s;
            v.b bVar = this.f35768t;
            boolean z11 = this.f35769u;
            return "ShowPoseHint(selfies=" + list + ", posesNeeded=" + list2 + ", autoCaptureSupported=" + z10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f35761e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f35762i;
            dest.writeInt(list2.size());
            for (a1.b bVar : list2) {
                dest.writeString(bVar.name());
            }
            dest.writeInt(this.f35763o ? 1 : 0);
            dest.writeParcelable(this.f35764p, i10);
            dest.writeLong(this.f35765q);
            dest.writeParcelable(this.f35766r, i10);
            this.f35767s.writeToParcel(dest, i10);
            dest.writeString(this.f35768t.name());
            dest.writeInt(this.f35769u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final long f35784e;

        /* renamed from: i  reason: collision with root package name */
        private final sn.v f35785i;

        /* renamed from: o  reason: collision with root package name */
        private final long f35786o;

        /* renamed from: p  reason: collision with root package name */
        private final float f35787p;

        /* renamed from: q  reason: collision with root package name */
        private final wn.a f35788q;

        /* renamed from: r  reason: collision with root package name */
        private final List f35789r;

        /* renamed from: s  reason: collision with root package name */
        private final x1 f35790s;

        /* renamed from: t  reason: collision with root package name */
        private final s0 f35791t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f35792u;

        /* renamed from: v  reason: collision with root package name */
        private final v.b f35793v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f35794w;

        /* renamed from: x  reason: collision with root package name */
        private final List f35795x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final m createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                long readLong = parcel.readLong();
                sn.v vVar = (sn.v) parcel.readParcelable(m.class.getClassLoader());
                long readLong2 = parcel.readLong();
                float readFloat = parcel.readFloat();
                wn.a aVar = (wn.a) parcel.readParcelable(m.class.getClassLoader());
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
        public m(long j10, sn.v cameraProperties, long j11, float f10, wn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35784e = j10;
            this.f35785i = cameraProperties;
            this.f35786o = j11;
            this.f35787p = f10;
            this.f35788q = aVar;
            this.f35789r = posesNeeded;
            this.f35790s = x1Var;
            this.f35791t = poseConfigs;
            this.f35792u = z10;
            this.f35793v = cameraFacingMode;
            this.f35794w = z11;
            this.f35795x = CollectionsKt.l();
        }

        public static /* synthetic */ m t(m mVar, long j10, sn.v vVar, long j11, float f10, wn.a aVar, List list, x1 x1Var, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            long j12;
            sn.v vVar2;
            long j13;
            float f11;
            wn.a aVar2;
            List list2;
            x1 x1Var2;
            s0 s0Var2;
            boolean z12;
            v.b bVar2;
            boolean z13;
            if ((i10 & 1) != 0) {
                j12 = mVar.f35784e;
            } else {
                j12 = j10;
            }
            if ((i10 & 2) != 0) {
                vVar2 = mVar.f35785i;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & 4) != 0) {
                j13 = mVar.f35786o;
            } else {
                j13 = j11;
            }
            if ((i10 & 8) != 0) {
                f11 = mVar.f35787p;
            } else {
                f11 = f10;
            }
            if ((i10 & 16) != 0) {
                aVar2 = mVar.f35788q;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 32) != 0) {
                list2 = mVar.f35789r;
            } else {
                list2 = list;
            }
            if ((i10 & 64) != 0) {
                x1Var2 = mVar.f35790s;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                s0Var2 = mVar.f35791t;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = mVar.f35792u;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                bVar2 = mVar.f35793v;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z13 = mVar.f35794w;
            } else {
                z13 = z11;
            }
            return mVar.s(j12, vVar2, j13, f11, aVar2, list2, x1Var2, s0Var2, z12, bVar2, z13);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35792u;
        }

        public final sn.v b() {
            return this.f35785i;
        }

        @Override // kp.z
        public List c() {
            return this.f35789r;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35791t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (this.f35784e == mVar.f35784e && Intrinsics.areEqual(this.f35785i, mVar.f35785i) && this.f35786o == mVar.f35786o && Float.compare(this.f35787p, mVar.f35787p) == 0 && Intrinsics.areEqual(this.f35788q, mVar.f35788q) && Intrinsics.areEqual(this.f35789r, mVar.f35789r) && Intrinsics.areEqual(this.f35790s, mVar.f35790s) && Intrinsics.areEqual(this.f35791t, mVar.f35791t) && this.f35792u == mVar.f35792u && this.f35793v == mVar.f35793v && this.f35794w == mVar.f35794w) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public r0 f() {
            return z.a.b(this);
        }

        @Override // kp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Long.hashCode(this.f35784e) * 31) + this.f35785i.hashCode()) * 31) + Long.hashCode(this.f35786o)) * 31) + Float.hashCode(this.f35787p)) * 31;
            wn.a aVar = this.f35788q;
            int i10 = 0;
            if (aVar == null) {
                hashCode = 0;
            } else {
                hashCode = aVar.hashCode();
            }
            int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f35789r.hashCode()) * 31;
            x1 x1Var = this.f35790s;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode3 + i10) * 31) + this.f35791t.hashCode()) * 31) + Boolean.hashCode(this.f35792u)) * 31) + this.f35793v.hashCode()) * 31) + Boolean.hashCode(this.f35794w);
        }

        public final long i() {
            return this.f35784e;
        }

        @Override // kp.z
        public boolean l() {
            return this.f35794w;
        }

        public final long n() {
            return this.f35786o;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35790s;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35793v;
        }

        @Override // kp.x1
        public List q() {
            return this.f35795x;
        }

        public final m s(long j10, sn.v cameraProperties, long j11, float f10, wn.a aVar, List posesNeeded, x1 x1Var, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new m(j10, cameraProperties, j11, f10, aVar, posesNeeded, x1Var, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            long j10 = this.f35784e;
            sn.v vVar = this.f35785i;
            long j11 = this.f35786o;
            float f10 = this.f35787p;
            wn.a aVar = this.f35788q;
            List list = this.f35789r;
            x1 x1Var = this.f35790s;
            s0 s0Var = this.f35791t;
            boolean z10 = this.f35792u;
            v.b bVar = this.f35793v;
            boolean z11 = this.f35794w;
            return "StartCaptureFaceDetected(startCaptureTimestamp=" + j10 + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j11 + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        public final wn.a u() {
            return this.f35788q;
        }

        public final float v() {
            return this.f35787p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeLong(this.f35784e);
            dest.writeParcelable(this.f35785i, i10);
            dest.writeLong(this.f35786o);
            dest.writeFloat(this.f35787p);
            dest.writeParcelable(this.f35788q, i10);
            List<a1.b> list = this.f35789r;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            dest.writeParcelable(this.f35790s, i10);
            this.f35791t.writeToParcel(dest, i10);
            dest.writeInt(this.f35792u ? 1 : 0);
            dest.writeString(this.f35793v.name());
            dest.writeInt(this.f35794w ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends x1 {
        @NotNull
        public static final Parcelable.Creator<n> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f35796e;

        /* renamed from: i  reason: collision with root package name */
        private final String f35797i;

        /* renamed from: o  reason: collision with root package name */
        private final sn.v f35798o;

        /* renamed from: p  reason: collision with root package name */
        private final long f35799p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f35800q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f35801r;

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
                return new n(arrayList, parcel.readString(), (sn.v) parcel.readParcelable(n.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(n.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final n[] newArray(int i10) {
                return new n[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(List selfies, String str, sn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35796e = selfies;
            this.f35797i = str;
            this.f35798o = cameraProperties;
            this.f35799p = j10;
            this.f35800q = x1Var;
            this.f35801r = cameraFacingMode;
        }

        public final sn.v b() {
            return this.f35798o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long n() {
            return this.f35799p;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35800q;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35801r;
        }

        @Override // kp.x1
        public List q() {
            return this.f35796e;
        }

        public final String s() {
            return this.f35797i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f35796e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f35797i);
            dest.writeParcelable(this.f35798o, i10);
            dest.writeLong(this.f35799p);
            dest.writeParcelable(this.f35800q, i10);
            dest.writeString(this.f35801r.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<o> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f35802e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f35803i;

        /* renamed from: o  reason: collision with root package name */
        private final x1 f35804o;

        /* renamed from: p  reason: collision with root package name */
        private final List f35805p;

        /* renamed from: q  reason: collision with root package name */
        private final s0 f35806q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f35807r;

        /* renamed from: s  reason: collision with root package name */
        private final v.b f35808s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f35809t;

        /* renamed from: u  reason: collision with root package name */
        private final List f35810u;

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
                z10 = oVar.f35802e;
            }
            if ((i10 & 2) != 0) {
                z11 = oVar.f35803i;
            }
            if ((i10 & 4) != 0) {
                x1Var = oVar.f35804o;
            }
            if ((i10 & 8) != 0) {
                list = oVar.f35805p;
            }
            if ((i10 & 16) != 0) {
                s0Var = oVar.f35806q;
            }
            if ((i10 & 32) != 0) {
                z12 = oVar.f35807r;
            }
            if ((i10 & 64) != 0) {
                bVar = oVar.f35808s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                z13 = oVar.f35809t;
            }
            v.b bVar2 = bVar;
            boolean z14 = z13;
            s0 s0Var2 = s0Var;
            boolean z15 = z12;
            return oVar.s(z10, z11, x1Var, list, s0Var2, z15, bVar2, z14);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35807r;
        }

        @Override // kp.z
        public List c() {
            return this.f35805p;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35806q;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (this.f35802e == oVar.f35802e && this.f35803i == oVar.f35803i && Intrinsics.areEqual(this.f35804o, oVar.f35804o) && Intrinsics.areEqual(this.f35805p, oVar.f35805p) && Intrinsics.areEqual(this.f35806q, oVar.f35806q) && this.f35807r == oVar.f35807r && this.f35808s == oVar.f35808s && this.f35809t == oVar.f35809t) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((Boolean.hashCode(this.f35802e) * 31) + Boolean.hashCode(this.f35803i)) * 31;
            x1 x1Var = this.f35804o;
            if (x1Var == null) {
                hashCode = 0;
            } else {
                hashCode = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + hashCode) * 31) + this.f35805p.hashCode()) * 31) + this.f35806q.hashCode()) * 31) + Boolean.hashCode(this.f35807r)) * 31) + this.f35808s.hashCode()) * 31) + Boolean.hashCode(this.f35809t);
        }

        @Override // kp.z
        public boolean l() {
            return this.f35809t;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35804o;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35808s;
        }

        @Override // kp.x1
        public List q() {
            return this.f35810u;
        }

        public final o s(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new o(z10, z11, x1Var, posesNeeded, poseConfigs, z12, cameraFacingMode, z13);
        }

        public String toString() {
            boolean z10 = this.f35802e;
            boolean z11 = this.f35803i;
            x1 x1Var = this.f35804o;
            List list = this.f35805p;
            s0 s0Var = this.f35806q;
            boolean z12 = this.f35807r;
            v.b bVar = this.f35808s;
            boolean z13 = this.f35809t;
            return "WaitForCameraFeed(hasRequestedCameraPermissions=" + z10 + ", hasRequestedAudioPermissions=" + z11 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z12 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z13 + ")";
        }

        public final boolean u() {
            return this.f35803i;
        }

        public final boolean v() {
            return this.f35802e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f35802e ? 1 : 0);
            dest.writeInt(this.f35803i ? 1 : 0);
            dest.writeParcelable(this.f35804o, i10);
            List<a1.b> list = this.f35805p;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f35806q.writeToParcel(dest, i10);
            dest.writeInt(this.f35807r ? 1 : 0);
            dest.writeString(this.f35808s.name());
            dest.writeInt(this.f35809t ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(boolean z10, boolean z11, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z12, v.b cameraFacingMode, boolean z13) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35802e = z10;
            this.f35803i = z11;
            this.f35804o = x1Var;
            this.f35805p = posesNeeded;
            this.f35806q = poseConfigs;
            this.f35807r = z12;
            this.f35808s = cameraFacingMode;
            this.f35809t = z13;
            this.f35810u = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends x1 implements z {
        @NotNull
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final String f35811e;

        /* renamed from: i  reason: collision with root package name */
        private final sn.v f35812i;

        /* renamed from: o  reason: collision with root package name */
        private final long f35813o;

        /* renamed from: p  reason: collision with root package name */
        private final x1 f35814p;

        /* renamed from: q  reason: collision with root package name */
        private final List f35815q;

        /* renamed from: r  reason: collision with root package name */
        private final s0 f35816r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f35817s;

        /* renamed from: t  reason: collision with root package name */
        private final v.b f35818t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f35819u;

        /* renamed from: v  reason: collision with root package name */
        private final List f35820v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final p createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                sn.v vVar = (sn.v) parcel.readParcelable(p.class.getClassLoader());
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
        public p(String str, sn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35811e = str;
            this.f35812i = cameraProperties;
            this.f35813o = j10;
            this.f35814p = x1Var;
            this.f35815q = posesNeeded;
            this.f35816r = poseConfigs;
            this.f35817s = z10;
            this.f35818t = cameraFacingMode;
            this.f35819u = z11;
            this.f35820v = CollectionsKt.l();
        }

        public static /* synthetic */ p t(p pVar, String str, sn.v vVar, long j10, x1 x1Var, List list, s0 s0Var, boolean z10, v.b bVar, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = pVar.f35811e;
            }
            if ((i10 & 2) != 0) {
                vVar = pVar.f35812i;
            }
            if ((i10 & 4) != 0) {
                j10 = pVar.f35813o;
            }
            if ((i10 & 8) != 0) {
                x1Var = pVar.f35814p;
            }
            if ((i10 & 16) != 0) {
                list = pVar.f35815q;
            }
            if ((i10 & 32) != 0) {
                s0Var = pVar.f35816r;
            }
            if ((i10 & 64) != 0) {
                z10 = pVar.f35817s;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar = pVar.f35818t;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z11 = pVar.f35819u;
            }
            v.b bVar2 = bVar;
            boolean z12 = z11;
            long j11 = j10;
            return pVar.s(str, vVar, j11, x1Var, list, s0Var, z10, bVar2, z12);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35817s;
        }

        @Override // kp.z
        public List c() {
            return this.f35815q;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35816r;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (Intrinsics.areEqual(this.f35811e, pVar.f35811e) && Intrinsics.areEqual(this.f35812i, pVar.f35812i) && this.f35813o == pVar.f35813o && Intrinsics.areEqual(this.f35814p, pVar.f35814p) && Intrinsics.areEqual(this.f35815q, pVar.f35815q) && Intrinsics.areEqual(this.f35816r, pVar.f35816r) && this.f35817s == pVar.f35817s && this.f35818t == pVar.f35818t && this.f35819u == pVar.f35819u) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public a1.b g() {
            return z.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            String str = this.f35811e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode2 = ((((hashCode * 31) + this.f35812i.hashCode()) * 31) + Long.hashCode(this.f35813o)) * 31;
            x1 x1Var = this.f35814p;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((((hashCode2 + i10) * 31) + this.f35815q.hashCode()) * 31) + this.f35816r.hashCode()) * 31) + Boolean.hashCode(this.f35817s)) * 31) + this.f35818t.hashCode()) * 31) + Boolean.hashCode(this.f35819u);
        }

        @Override // kp.z
        public boolean l() {
            return this.f35819u;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35814p;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35818t;
        }

        @Override // kp.x1
        public List q() {
            return this.f35820v;
        }

        public final p s(String str, sn.v cameraProperties, long j10, x1 x1Var, List posesNeeded, s0 poseConfigs, boolean z10, v.b cameraFacingMode, boolean z11) {
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new p(str, cameraProperties, j10, x1Var, posesNeeded, poseConfigs, z10, cameraFacingMode, z11);
        }

        public String toString() {
            String str = this.f35811e;
            sn.v vVar = this.f35812i;
            long j10 = this.f35813o;
            x1 x1Var = this.f35814p;
            List list = this.f35815q;
            s0 s0Var = this.f35816r;
            boolean z10 = this.f35817s;
            v.b bVar = this.f35818t;
            boolean z11 = this.f35819u;
            return "WaitForWebRtcSetup(webRtcJwt=" + str + ", cameraProperties=" + vVar + ", startSelfieTimestamp=" + j10 + ", backState=" + x1Var + ", posesNeeded=" + list + ", poseConfigs=" + s0Var + ", autoCaptureSupported=" + z10 + ", cameraFacingMode=" + bVar + ", isFlashEnabled=" + z11 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f35811e);
            dest.writeParcelable(this.f35812i, i10);
            dest.writeLong(this.f35813o);
            dest.writeParcelable(this.f35814p, i10);
            List<a1.b> list = this.f35815q;
            dest.writeInt(list.size());
            for (a1.b bVar : list) {
                dest.writeString(bVar.name());
            }
            this.f35816r.writeToParcel(dest, i10);
            dest.writeInt(this.f35817s ? 1 : 0);
            dest.writeString(this.f35818t.name());
            dest.writeInt(this.f35819u ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends x1 {
        @NotNull
        public static final Parcelable.Creator<q> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final List f35821e;

        /* renamed from: i  reason: collision with root package name */
        private final String f35822i;

        /* renamed from: o  reason: collision with root package name */
        private final sn.v f35823o;

        /* renamed from: p  reason: collision with root package name */
        private final long f35824p;

        /* renamed from: q  reason: collision with root package name */
        private final x1 f35825q;

        /* renamed from: r  reason: collision with root package name */
        private final v.b f35826r;

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
                return new q(arrayList, parcel.readString(), (sn.v) parcel.readParcelable(q.class.getClassLoader()), parcel.readLong(), (x1) parcel.readParcelable(q.class.getClassLoader()), v.b.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final q[] newArray(int i10) {
                return new q[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(List selfies, String webRtcObjectId, sn.v cameraProperties, long j10, x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(webRtcObjectId, "webRtcObjectId");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35821e = selfies;
            this.f35822i = webRtcObjectId;
            this.f35823o = cameraProperties;
            this.f35824p = j10;
            this.f35825q = x1Var;
            this.f35826r = cameraFacingMode;
        }

        public final sn.v b() {
            return this.f35823o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final long n() {
            return this.f35824p;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35825q;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35826r;
        }

        @Override // kp.x1
        public List q() {
            return this.f35821e;
        }

        public final String s() {
            return this.f35822i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f35821e;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f35822i);
            dest.writeParcelable(this.f35823o, i10);
            dest.writeLong(this.f35824p);
            dest.writeParcelable(this.f35825q, i10);
            dest.writeString(this.f35826r.name());
        }
    }

    public /* synthetic */ x1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract x1 o();

    public abstract v.b p();

    public abstract List q();

    public final void r(boolean z10) {
        this.f35681d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends x1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final x1 f35758e;

        /* renamed from: i  reason: collision with root package name */
        private final v.b f35759i;

        /* renamed from: o  reason: collision with root package name */
        private final List f35760o;

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
            this(x1Var, (i10 & 2) != 0 ? v.b.f49986d : bVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35758e;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35759i;
        }

        @Override // kp.x1
        public List q() {
            return this.f35760o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f35758e, i10);
            dest.writeString(this.f35759i.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(x1 x1Var, v.b cameraFacingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35758e = x1Var;
            this.f35759i = cameraFacingMode;
            this.f35760o = CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final boolean f35770e;

        /* renamed from: i  reason: collision with root package name */
        private final wn.b f35771i;

        /* renamed from: o  reason: collision with root package name */
        private final float f35772o;

        /* renamed from: p  reason: collision with root package name */
        private final wn.a f35773p;

        /* renamed from: q  reason: collision with root package name */
        private final List f35774q;

        /* renamed from: r  reason: collision with root package name */
        private final long f35775r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f35776s;

        /* renamed from: t  reason: collision with root package name */
        private final long f35777t;

        /* renamed from: u  reason: collision with root package name */
        private final sn.v f35778u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f35779v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f35780w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f35781x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f35782y;

        /* renamed from: z  reason: collision with root package name */
        private final List f35783z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                boolean z10;
                wn.b valueOf;
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
                    valueOf = wn.b.valueOf(parcel.readString());
                }
                wn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                wn.a aVar = (wn.a) parcel.readParcelable(l.class.getClassLoader());
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
                sn.v vVar = (sn.v) parcel.readParcelable(l.class.getClassLoader());
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

        public /* synthetic */ l(boolean z10, wn.b bVar, float f10, wn.a aVar, List list, long j10, boolean z11, long j11, sn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? wn.b.f53161d : bVar, f10, aVar, list, j10, (i10 & 64) != 0 ? true : z11, j11, vVar, x1Var, s0Var, bVar2, z12);
        }

        public static /* synthetic */ l t(l lVar, boolean z10, wn.b bVar, float f10, wn.a aVar, List list, long j10, boolean z11, long j11, sn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z12, int i10, Object obj) {
            boolean z13;
            wn.b bVar3;
            float f11;
            wn.a aVar2;
            List list2;
            long j12;
            boolean z14;
            long j13;
            sn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z15;
            if ((i10 & 1) != 0) {
                z13 = lVar.f35770e;
            } else {
                z13 = z10;
            }
            if ((i10 & 2) != 0) {
                bVar3 = lVar.f35771i;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 4) != 0) {
                f11 = lVar.f35772o;
            } else {
                f11 = f10;
            }
            if ((i10 & 8) != 0) {
                aVar2 = lVar.f35773p;
            } else {
                aVar2 = aVar;
            }
            if ((i10 & 16) != 0) {
                list2 = lVar.f35774q;
            } else {
                list2 = list;
            }
            if ((i10 & 32) != 0) {
                j12 = lVar.f35775r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z14 = lVar.f35776s;
            } else {
                z14 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = lVar.f35777t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = lVar.f35778u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = lVar.f35779v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = lVar.f35780w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = lVar.f35781x;
            } else {
                bVar4 = bVar2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z15 = lVar.f35782y;
            } else {
                z15 = z12;
            }
            return lVar.s(z13, bVar3, f11, aVar2, list2, j12, z14, j13, vVar2, x1Var2, s0Var2, bVar4, z15);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35776s;
        }

        @Override // kp.a0
        public sn.v b() {
            return this.f35778u;
        }

        @Override // kp.z
        public List c() {
            return this.f35774q;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35780w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (this.f35770e == lVar.f35770e && this.f35771i == lVar.f35771i && Float.compare(this.f35772o, lVar.f35772o) == 0 && Intrinsics.areEqual(this.f35773p, lVar.f35773p) && Intrinsics.areEqual(this.f35774q, lVar.f35774q) && this.f35775r == lVar.f35775r && this.f35776s == lVar.f35776s && this.f35777t == lVar.f35777t && Intrinsics.areEqual(this.f35778u, lVar.f35778u) && Intrinsics.areEqual(this.f35779v, lVar.f35779v) && Intrinsics.areEqual(this.f35780w, lVar.f35780w) && this.f35781x == lVar.f35781x && this.f35782y == lVar.f35782y) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // kp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = Boolean.hashCode(this.f35770e) * 31;
            wn.b bVar = this.f35771i;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + Float.hashCode(this.f35772o)) * 31;
            wn.a aVar = this.f35773p;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode5 = (((((((((((hashCode4 + hashCode2) * 31) + this.f35774q.hashCode()) * 31) + Long.hashCode(this.f35775r)) * 31) + Boolean.hashCode(this.f35776s)) * 31) + Long.hashCode(this.f35777t)) * 31) + this.f35778u.hashCode()) * 31;
            x1 x1Var = this.f35779v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((hashCode5 + i10) * 31) + this.f35780w.hashCode()) * 31) + this.f35781x.hashCode()) * 31) + Boolean.hashCode(this.f35782y);
        }

        @Override // kp.a0
        public long i() {
            return this.f35775r;
        }

        @Override // kp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // kp.z
        public boolean l() {
            return this.f35782y;
        }

        @Override // kp.a0
        public long n() {
            return this.f35777t;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35779v;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35781x;
        }

        @Override // kp.x1
        public List q() {
            return this.f35783z;
        }

        public final l s(boolean z10, wn.b bVar, float f10, wn.a aVar, List posesNeeded, long j10, boolean z11, long j11, sn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            return new l(z10, bVar, f10, aVar, posesNeeded, j10, z11, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z12);
        }

        public String toString() {
            boolean z10 = this.f35770e;
            wn.b bVar = this.f35771i;
            float f10 = this.f35772o;
            wn.a aVar = this.f35773p;
            List list = this.f35774q;
            long j10 = this.f35775r;
            boolean z11 = this.f35776s;
            long j11 = this.f35777t;
            sn.v vVar = this.f35778u;
            x1 x1Var = this.f35779v;
            s0 s0Var = this.f35780w;
            v.b bVar2 = this.f35781x;
            boolean z12 = this.f35782y;
            return "StartCapture(centered=" + z10 + ", selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", posesNeeded=" + list + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z11 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z12 + ")";
        }

        public final wn.a u() {
            return this.f35773p;
        }

        public final float v() {
            return this.f35772o;
        }

        public final wn.b w() {
            return this.f35771i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f35770e ? 1 : 0);
            wn.b bVar = this.f35771i;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f35772o);
            dest.writeParcelable(this.f35773p, i10);
            List<a1.b> list = this.f35774q;
            dest.writeInt(list.size());
            for (a1.b bVar2 : list) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f35775r);
            dest.writeInt(this.f35776s ? 1 : 0);
            dest.writeLong(this.f35777t);
            dest.writeParcelable(this.f35778u, i10);
            dest.writeParcelable(this.f35779v, i10);
            this.f35780w.writeToParcel(dest, i10);
            dest.writeString(this.f35781x.name());
            dest.writeInt(this.f35782y ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(boolean z10, wn.b bVar, float f10, wn.a aVar, List posesNeeded, long j10, boolean z11, long j11, sn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z12) {
            super(null);
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            this.f35770e = z10;
            this.f35771i = bVar;
            this.f35772o = f10;
            this.f35773p = aVar;
            this.f35774q = posesNeeded;
            this.f35775r = j10;
            this.f35776s = z11;
            this.f35777t = j11;
            this.f35778u = cameraProperties;
            this.f35779v = x1Var;
            this.f35780w = poseConfigs;
            this.f35781x = cameraFacingMode;
            this.f35782y = z12;
            this.f35783z = CollectionsKt.l();
        }
    }

    private x1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x1 implements a0 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0460a();

        /* renamed from: e  reason: collision with root package name */
        private final wn.b f35682e;

        /* renamed from: i  reason: collision with root package name */
        private final float f35683i;

        /* renamed from: o  reason: collision with root package name */
        private final wn.a f35684o;

        /* renamed from: p  reason: collision with root package name */
        private final List f35685p;

        /* renamed from: q  reason: collision with root package name */
        private final List f35686q;

        /* renamed from: r  reason: collision with root package name */
        private final long f35687r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f35688s;

        /* renamed from: t  reason: collision with root package name */
        private final long f35689t;

        /* renamed from: u  reason: collision with root package name */
        private final sn.v f35690u;

        /* renamed from: v  reason: collision with root package name */
        private final x1 f35691v;

        /* renamed from: w  reason: collision with root package name */
        private final s0 f35692w;

        /* renamed from: x  reason: collision with root package name */
        private final v.b f35693x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f35694y;

        /* renamed from: z  reason: collision with root package name */
        private final g f35695z;

        /* renamed from: kp.x1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0460a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                wn.b valueOf;
                boolean z10;
                boolean z11;
                long j10;
                boolean z12;
                boolean z13;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = wn.b.valueOf(parcel.readString());
                }
                wn.b bVar = valueOf;
                float readFloat = parcel.readFloat();
                wn.a aVar = (wn.a) parcel.readParcelable(a.class.getClassLoader());
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
                sn.v vVar = (sn.v) parcel.readParcelable(a.class.getClassLoader());
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

        public /* synthetic */ a(wn.b bVar, float f10, wn.a aVar, List list, List list2, long j10, boolean z10, long j11, sn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : bVar, f10, aVar, (i10 & 8) != 0 ? CollectionsKt.l() : list, list2, j10, (i10 & 64) != 0 ? true : z10, j11, vVar, x1Var, s0Var, bVar2, z11, (i10 & 8192) != 0 ? g.f35740d : gVar);
        }

        public static /* synthetic */ a t(a aVar, wn.b bVar, float f10, wn.a aVar2, List list, List list2, long j10, boolean z10, long j11, sn.v vVar, x1 x1Var, s0 s0Var, v.b bVar2, boolean z11, g gVar, int i10, Object obj) {
            wn.b bVar3;
            float f11;
            wn.a aVar3;
            List list3;
            List list4;
            long j12;
            boolean z12;
            long j13;
            sn.v vVar2;
            x1 x1Var2;
            s0 s0Var2;
            v.b bVar4;
            boolean z13;
            g gVar2;
            if ((i10 & 1) != 0) {
                bVar3 = aVar.f35682e;
            } else {
                bVar3 = bVar;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f35683i;
            } else {
                f11 = f10;
            }
            if ((i10 & 4) != 0) {
                aVar3 = aVar.f35684o;
            } else {
                aVar3 = aVar2;
            }
            if ((i10 & 8) != 0) {
                list3 = aVar.f35685p;
            } else {
                list3 = list;
            }
            if ((i10 & 16) != 0) {
                list4 = aVar.f35686q;
            } else {
                list4 = list2;
            }
            if ((i10 & 32) != 0) {
                j12 = aVar.f35687r;
            } else {
                j12 = j10;
            }
            if ((i10 & 64) != 0) {
                z12 = aVar.f35688s;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                j13 = aVar.f35689t;
            } else {
                j13 = j11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar2 = aVar.f35690u;
            } else {
                vVar2 = vVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                x1Var2 = aVar.f35691v;
            } else {
                x1Var2 = x1Var;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                s0Var2 = aVar.f35692w;
            } else {
                s0Var2 = s0Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                bVar4 = aVar.f35693x;
            } else {
                bVar4 = bVar2;
            }
            wn.b bVar5 = bVar3;
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                z13 = aVar.f35694y;
            } else {
                z13 = z11;
            }
            if ((i10 & 8192) != 0) {
                gVar2 = aVar.f35695z;
            } else {
                gVar2 = gVar;
            }
            return aVar.s(bVar5, f11, aVar3, list3, list4, j12, z12, j13, vVar2, x1Var2, s0Var2, bVar4, z13, gVar2);
        }

        @Override // kp.z
        public boolean a() {
            return this.f35688s;
        }

        @Override // kp.a0
        public sn.v b() {
            return this.f35690u;
        }

        @Override // kp.z
        public List c() {
            return this.f35686q;
        }

        @Override // kp.z
        public s0 d() {
            return this.f35692w;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // kp.z
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
            if (this.f35682e == aVar.f35682e && Float.compare(this.f35683i, aVar.f35683i) == 0 && Intrinsics.areEqual(this.f35684o, aVar.f35684o) && Intrinsics.areEqual(this.f35685p, aVar.f35685p) && Intrinsics.areEqual(this.f35686q, aVar.f35686q) && this.f35687r == aVar.f35687r && this.f35688s == aVar.f35688s && this.f35689t == aVar.f35689t && Intrinsics.areEqual(this.f35690u, aVar.f35690u) && Intrinsics.areEqual(this.f35691v, aVar.f35691v) && Intrinsics.areEqual(this.f35692w, aVar.f35692w) && this.f35693x == aVar.f35693x && this.f35694y == aVar.f35694y && this.f35695z == aVar.f35695z) {
                return true;
            }
            return false;
        }

        @Override // kp.z
        public r0 f() {
            return a0.a.b(this);
        }

        @Override // kp.z
        public a1.b g() {
            return a0.a.c(this);
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            wn.b bVar = this.f35682e;
            int i10 = 0;
            if (bVar == null) {
                hashCode = 0;
            } else {
                hashCode = bVar.hashCode();
            }
            int hashCode3 = ((hashCode * 31) + Float.hashCode(this.f35683i)) * 31;
            wn.a aVar = this.f35684o;
            if (aVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = aVar.hashCode();
            }
            int hashCode4 = (((((((((((((hashCode3 + hashCode2) * 31) + this.f35685p.hashCode()) * 31) + this.f35686q.hashCode()) * 31) + Long.hashCode(this.f35687r)) * 31) + Boolean.hashCode(this.f35688s)) * 31) + Long.hashCode(this.f35689t)) * 31) + this.f35690u.hashCode()) * 31;
            x1 x1Var = this.f35691v;
            if (x1Var != null) {
                i10 = x1Var.hashCode();
            }
            return ((((((((hashCode4 + i10) * 31) + this.f35692w.hashCode()) * 31) + this.f35693x.hashCode()) * 31) + Boolean.hashCode(this.f35694y)) * 31) + this.f35695z.hashCode();
        }

        @Override // kp.a0
        public long i() {
            return this.f35687r;
        }

        @Override // kp.a0
        public boolean j() {
            return a0.a.d(this);
        }

        @Override // kp.z
        public boolean l() {
            return this.f35694y;
        }

        @Override // kp.a0
        public long n() {
            return this.f35689t;
        }

        @Override // kp.x1
        public x1 o() {
            return this.f35691v;
        }

        @Override // kp.x1
        public v.b p() {
            return this.f35693x;
        }

        @Override // kp.x1
        public List q() {
            return this.f35685p;
        }

        public final a s(wn.b bVar, float f10, wn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, sn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            return new a(bVar, f10, aVar, selfies, posesNeeded, j10, z10, j11, cameraProperties, x1Var, poseConfigs, cameraFacingMode, z11, flashState);
        }

        public String toString() {
            wn.b bVar = this.f35682e;
            float f10 = this.f35683i;
            wn.a aVar = this.f35684o;
            List list = this.f35685p;
            List list2 = this.f35686q;
            long j10 = this.f35687r;
            boolean z10 = this.f35688s;
            long j11 = this.f35689t;
            sn.v vVar = this.f35690u;
            x1 x1Var = this.f35691v;
            s0 s0Var = this.f35692w;
            v.b bVar2 = this.f35693x;
            boolean z11 = this.f35694y;
            g gVar = this.f35695z;
            return "Capture(selfieError=" + bVar + ", poseScore=" + f10 + ", brightnessInfo=" + aVar + ", selfies=" + list + ", posesNeeded=" + list2 + ", startCaptureTimestamp=" + j10 + ", autoCaptureSupported=" + z10 + ", startSelfieTimestamp=" + j11 + ", cameraProperties=" + vVar + ", backState=" + x1Var + ", poseConfigs=" + s0Var + ", cameraFacingMode=" + bVar2 + ", isFlashEnabled=" + z11 + ", flashState=" + gVar + ")";
        }

        public final wn.a u() {
            return this.f35684o;
        }

        public final g v() {
            return this.f35695z;
        }

        public final float w() {
            return this.f35683i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            wn.b bVar = this.f35682e;
            if (bVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(bVar.name());
            }
            dest.writeFloat(this.f35683i);
            dest.writeParcelable(this.f35684o, i10);
            List<Parcelable> list = this.f35685p;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<a1.b> list2 = this.f35686q;
            dest.writeInt(list2.size());
            for (a1.b bVar2 : list2) {
                dest.writeString(bVar2.name());
            }
            dest.writeLong(this.f35687r);
            dest.writeInt(this.f35688s ? 1 : 0);
            dest.writeLong(this.f35689t);
            dest.writeParcelable(this.f35690u, i10);
            dest.writeParcelable(this.f35691v, i10);
            this.f35692w.writeToParcel(dest, i10);
            dest.writeString(this.f35693x.name());
            dest.writeInt(this.f35694y ? 1 : 0);
            dest.writeString(this.f35695z.name());
        }

        public final wn.b x() {
            return this.f35682e;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(wn.b bVar, float f10, wn.a aVar, List selfies, List posesNeeded, long j10, boolean z10, long j11, sn.v cameraProperties, x1 x1Var, s0 poseConfigs, v.b cameraFacingMode, boolean z11, g flashState) {
            super(null);
            Intrinsics.checkNotNullParameter(selfies, "selfies");
            Intrinsics.checkNotNullParameter(posesNeeded, "posesNeeded");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(cameraFacingMode, "cameraFacingMode");
            Intrinsics.checkNotNullParameter(flashState, "flashState");
            this.f35682e = bVar;
            this.f35683i = f10;
            this.f35684o = aVar;
            this.f35685p = selfies;
            this.f35686q = posesNeeded;
            this.f35687r = j10;
            this.f35688s = z10;
            this.f35689t = j11;
            this.f35690u = cameraProperties;
            this.f35691v = x1Var;
            this.f35692w = poseConfigs;
            this.f35693x = cameraFacingMode;
            this.f35694y = z11;
            this.f35695z = flashState;
        }
    }
}
