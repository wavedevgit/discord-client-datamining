package ho;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import ho.c4;
import ho.d0;
import ho.f5;
import ho.h4;
import ho.n1;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f26433d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f26446e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26447i;

        /* renamed from: o  reason: collision with root package name */
        private final List f26448o;

        /* renamed from: p  reason: collision with root package name */
        private final int f26449p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f26450q;

        /* renamed from: r  reason: collision with root package name */
        private final String f26451r;

        /* renamed from: s  reason: collision with root package name */
        private final List f26452s;

        /* renamed from: t  reason: collision with root package name */
        private final sn.v f26453t;

        /* renamed from: u  reason: collision with root package name */
        private final List f26454u;

        /* renamed from: v  reason: collision with root package name */
        private final String f26455v;

        /* renamed from: w  reason: collision with root package name */
        private final String f26456w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4.a createFromParcel = h4.a.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(b.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(b.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                n1 n1Var = (n1) parcel.readParcelable(b.class.getClassLoader());
                String readString = parcel.readString();
                int readInt4 = parcel.readInt();
                ArrayList arrayList3 = new ArrayList(readInt4);
                for (int i12 = 0; i12 != readInt4; i12++) {
                    arrayList3.add(c0.CREATOR.createFromParcel(parcel));
                }
                sn.v vVar = (sn.v) parcel.readParcelable(b.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new b(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, sn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            this.f26446e = currentPart;
            this.f26447i = uploadingIds;
            this.f26448o = parts;
            this.f26449p = i10;
            this.f26450q = n1Var;
            this.f26451r = str;
            this.f26452s = captureFrames;
            this.f26453t = cameraProperties;
            this.f26454u = idConfigsForCountry;
            this.f26455v = str2;
            this.f26456w = str3;
        }

        public static /* synthetic */ b q(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, sn.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f26446e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f26447i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f26448o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f26449p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f26450q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f26451r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f26452s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f26453t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f26454u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f26455v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f26456w;
            }
            String str4 = str2;
            String str5 = str3;
            sn.v vVar2 = vVar;
            List list5 = list4;
            String str6 = str;
            List list6 = list3;
            n1 n1Var2 = n1Var;
            List list7 = list2;
            return bVar.p(aVar, list, list7, i10, n1Var2, str6, list6, vVar2, list5, str4, str5);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26450q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f26446e, bVar.f26446e) && Intrinsics.areEqual(this.f26447i, bVar.f26447i) && Intrinsics.areEqual(this.f26448o, bVar.f26448o) && this.f26449p == bVar.f26449p && Intrinsics.areEqual(this.f26450q, bVar.f26450q) && Intrinsics.areEqual(this.f26451r, bVar.f26451r) && Intrinsics.areEqual(this.f26452s, bVar.f26452s) && Intrinsics.areEqual(this.f26453t, bVar.f26453t) && Intrinsics.areEqual(this.f26454u, bVar.f26454u) && Intrinsics.areEqual(this.f26455v, bVar.f26455v) && Intrinsics.areEqual(this.f26456w, bVar.f26456w)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26451r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f26446e.hashCode() * 31) + this.f26447i.hashCode()) * 31) + this.f26448o.hashCode()) * 31) + Integer.hashCode(this.f26449p)) * 31;
            n1 n1Var = this.f26450q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f26451r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f26452s.hashCode()) * 31) + this.f26453t.hashCode()) * 31) + this.f26454u.hashCode()) * 31;
            String str2 = this.f26455v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f26456w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // ho.n1
        public int j() {
            return this.f26449p;
        }

        @Override // ho.n1
        public List l() {
            return this.f26448o;
        }

        @Override // ho.n1
        public List n() {
            return this.f26447i;
        }

        public final b p(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, sn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            return new b(currentPart, uploadingIds, parts, i10, n1Var, str, captureFrames, cameraProperties, idConfigsForCountry, str2, str3);
        }

        public final sn.v r() {
            return this.f26453t;
        }

        @Override // ho.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f26446e;
        }

        public final List t() {
            return this.f26454u;
        }

        public String toString() {
            h4.a aVar = this.f26446e;
            List list = this.f26447i;
            List list2 = this.f26448o;
            int i10 = this.f26449p;
            n1 n1Var = this.f26450q;
            String str = this.f26451r;
            List list3 = this.f26452s;
            sn.v vVar = this.f26453t;
            List list4 = this.f26454u;
            String str2 = this.f26455v;
            String str3 = this.f26456w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        public final String u() {
            return this.f26455v;
        }

        public final String v() {
            return this.f26456w;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26446e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26447i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f26448o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26449p);
            dest.writeParcelable(this.f26450q, i10);
            dest.writeString(this.f26451r);
            List<c0> list3 = this.f26452s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f26453t, i10);
            List<e4> list4 = this.f26454u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f26455v);
            dest.writeString(this.f26456w);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f26466e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26467i;

        /* renamed from: o  reason: collision with root package name */
        private final q f26468o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f26469p;

        /* renamed from: q  reason: collision with root package name */
        private final List f26470q;

        /* renamed from: r  reason: collision with root package name */
        private final int f26471r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f26472s;

        /* renamed from: t  reason: collision with root package name */
        private final String f26473t;

        /* renamed from: u  reason: collision with root package name */
        private final no.d f26474u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4.a createFromParcel = h4.a.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(d.class.getClassLoader()));
                }
                q qVar = (q) parcel.readParcelable(d.class.getClassLoader());
                d0.b createFromParcel2 = d0.b.CREATOR.createFromParcel(parcel);
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(d.class.getClassLoader()));
                }
                return new d(createFromParcel, arrayList, qVar, createFromParcel2, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (no.d) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, no.d dVar) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f26466e = currentPart;
            this.f26467i = uploadingIds;
            this.f26468o = captureConfig;
            this.f26469p = idForReview;
            this.f26470q = parts;
            this.f26471r = i10;
            this.f26472s = n1Var;
            this.f26473t = str;
            this.f26474u = dVar;
        }

        public static /* synthetic */ d q(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, no.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f26466e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f26467i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f26468o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f26469p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f26470q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f26471r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f26472s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f26473t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f26474u;
            }
            String str2 = str;
            no.d dVar3 = dVar2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return dVar.p(aVar, list, qVar2, bVar, list3, i12, n1Var2, str2, dVar3);
        }

        @Override // ho.n1
        public void d() {
            super.d();
            for (c0 c0Var : this.f26469p.i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26472s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f26466e, dVar.f26466e) && Intrinsics.areEqual(this.f26467i, dVar.f26467i) && Intrinsics.areEqual(this.f26468o, dVar.f26468o) && Intrinsics.areEqual(this.f26469p, dVar.f26469p) && Intrinsics.areEqual(this.f26470q, dVar.f26470q) && this.f26471r == dVar.f26471r && Intrinsics.areEqual(this.f26472s, dVar.f26472s) && Intrinsics.areEqual(this.f26473t, dVar.f26473t) && Intrinsics.areEqual(this.f26474u, dVar.f26474u)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26473t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f26466e.hashCode() * 31) + this.f26467i.hashCode()) * 31) + this.f26468o.hashCode()) * 31) + this.f26469p.hashCode()) * 31) + this.f26470q.hashCode()) * 31) + Integer.hashCode(this.f26471r)) * 31;
            n1 n1Var = this.f26472s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f26473t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            no.d dVar = this.f26474u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // ho.n1
        public int j() {
            return this.f26471r;
        }

        @Override // ho.n1
        public List l() {
            return this.f26470q;
        }

        @Override // ho.n1
        public List n() {
            return this.f26467i;
        }

        public final d p(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, no.d dVar) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new d(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, str, dVar);
        }

        public final q r() {
            return this.f26468o;
        }

        @Override // ho.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f26466e;
        }

        public final no.d t() {
            return this.f26474u;
        }

        public String toString() {
            h4.a aVar = this.f26466e;
            List list = this.f26467i;
            q qVar = this.f26468o;
            d0.b bVar = this.f26469p;
            List list2 = this.f26470q;
            int i10 = this.f26471r;
            n1 n1Var = this.f26472s;
            String str = this.f26473t;
            no.d dVar = this.f26474u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        public final d0.b u() {
            return this.f26469p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26466e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26467i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f26468o, i10);
            this.f26469p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f26470q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26471r);
            dest.writeParcelable(this.f26472s, i10);
            dest.writeString(this.f26473t);
            dest.writeParcelable(this.f26474u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f26475e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26476i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f26477o;

        /* renamed from: p  reason: collision with root package name */
        private final List f26478p;

        /* renamed from: q  reason: collision with root package name */
        private final int f26479q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f26480r;

        /* renamed from: s  reason: collision with root package name */
        private final String f26481s;

        /* renamed from: t  reason: collision with root package name */
        private final oo.c f26482t;

        /* renamed from: u  reason: collision with root package name */
        private final long f26483u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f26484v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                oo.c createFromParcel;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                c4 createFromParcel2 = c4.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                boolean z10 = false;
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(e.class.getClassLoader()));
                }
                h4 h4Var = (h4) parcel.readParcelable(e.class.getClassLoader());
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(e.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                n1 n1Var = (n1) parcel.readParcelable(e.class.getClassLoader());
                String readString = parcel.readString();
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = oo.c.CREATOR.createFromParcel(parcel);
                }
                oo.c cVar = createFromParcel;
                long readLong = parcel.readLong();
                if (parcel.readInt() != 0) {
                    z10 = true;
                }
                return new e(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, cVar, readLong, z10);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final e[] newArray(int i10) {
                return new e[i10];
            }
        }

        public /* synthetic */ e(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, oo.c cVar, long j10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 3000L : j10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
        }

        public static /* synthetic */ e q(e eVar, c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, oo.c cVar, long j10, boolean z10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                c4Var = eVar.f26475e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f26476i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f26477o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f26478p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f26479q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f26480r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f26481s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f26482t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f26483u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f26484v;
            }
            boolean z11 = z10;
            long j11 = j10;
            String str2 = str;
            oo.c cVar2 = cVar;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            return eVar.p(c4Var, list, h4Var, list2, i12, n1Var2, str2, cVar2, j11, z11);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26480r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f26475e, eVar.f26475e) && Intrinsics.areEqual(this.f26476i, eVar.f26476i) && Intrinsics.areEqual(this.f26477o, eVar.f26477o) && Intrinsics.areEqual(this.f26478p, eVar.f26478p) && this.f26479q == eVar.f26479q && Intrinsics.areEqual(this.f26480r, eVar.f26480r) && Intrinsics.areEqual(this.f26481s, eVar.f26481s) && Intrinsics.areEqual(this.f26482t, eVar.f26482t) && this.f26483u == eVar.f26483u && this.f26484v == eVar.f26484v) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26481s;
        }

        @Override // ho.n1
        public h4 g() {
            return this.f26477o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f26475e.hashCode() * 31) + this.f26476i.hashCode()) * 31) + this.f26477o.hashCode()) * 31) + this.f26478p.hashCode()) * 31) + Integer.hashCode(this.f26479q)) * 31;
            n1 n1Var = this.f26480r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f26481s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            oo.c cVar = this.f26482t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f26483u)) * 31) + Boolean.hashCode(this.f26484v);
        }

        @Override // ho.n1
        public int j() {
            return this.f26479q;
        }

        @Override // ho.n1
        public List l() {
            return this.f26478p;
        }

        @Override // ho.n1
        public List n() {
            return this.f26476i;
        }

        public final e p(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, oo.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 r() {
            return this.f26475e;
        }

        public final long s() {
            return this.f26483u;
        }

        public final boolean t() {
            return this.f26484v;
        }

        public String toString() {
            c4 c4Var = this.f26475e;
            List list = this.f26476i;
            h4 h4Var = this.f26477o;
            List list2 = this.f26478p;
            int i10 = this.f26479q;
            n1 n1Var = this.f26480r;
            String str = this.f26481s;
            oo.c cVar = this.f26482t;
            long j10 = this.f26483u;
            boolean z10 = this.f26484v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26475e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26476i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f26477o, i10);
            List<Parcelable> list2 = this.f26478p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26479q);
            dest.writeParcelable(this.f26480r, i10);
            dest.writeString(this.f26481s);
            oo.c cVar = this.f26482t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f26483u);
            dest.writeInt(this.f26484v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, oo.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f26475e = id2;
            this.f26476i = uploadingIds;
            this.f26477o = currentPart;
            this.f26478p = parts;
            this.f26479q = i10;
            this.f26480r = n1Var;
            this.f26481s = str;
            this.f26482t = cVar;
            this.f26483u = j10;
            this.f26484v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f26485e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26486i;

        /* renamed from: o  reason: collision with root package name */
        private final List f26487o;

        /* renamed from: p  reason: collision with root package name */
        private final int f26488p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f26489q;

        /* renamed from: r  reason: collision with root package name */
        private final String f26490r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f26491s;

        /* renamed from: t  reason: collision with root package name */
        private final sn.v f26492t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final f createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4 h4Var = (h4) parcel.readParcelable(f.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(f.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(f.class.getClassLoader()));
                }
                return new f(h4Var, arrayList, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(f.class.getClassLoader()), parcel.readString(), c4.CREATOR.createFromParcel(parcel), (sn.v) parcel.readParcelable(f.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(h4 currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, c4 id2, sn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f26485e = currentPart;
            this.f26486i = uploadingIds;
            this.f26487o = parts;
            this.f26488p = i10;
            this.f26489q = n1Var;
            this.f26490r = str;
            this.f26491s = id2;
            this.f26492t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26489q;
        }

        @Override // ho.n1
        public String f() {
            return this.f26490r;
        }

        @Override // ho.n1
        public h4 g() {
            return this.f26485e;
        }

        @Override // ho.n1
        public int j() {
            return this.f26488p;
        }

        @Override // ho.n1
        public List l() {
            return this.f26487o;
        }

        @Override // ho.n1
        public List n() {
            return this.f26486i;
        }

        public final c4 p() {
            return this.f26491s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f26485e, i10);
            List<Parcelable> list = this.f26486i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f26487o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26488p);
            dest.writeParcelable(this.f26489q, i10);
            dest.writeString(this.f26490r);
            this.f26491s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f26492t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f26493e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26494i;

        /* renamed from: o  reason: collision with root package name */
        private final q f26495o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f26496p;

        /* renamed from: q  reason: collision with root package name */
        private final List f26497q;

        /* renamed from: r  reason: collision with root package name */
        private final int f26498r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f26499s;

        /* renamed from: t  reason: collision with root package name */
        private final sn.v f26500t;

        /* renamed from: u  reason: collision with root package name */
        private final String f26501u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f26502v;

        /* renamed from: w  reason: collision with root package name */
        private final String f26503w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final g createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4.a createFromParcel = h4.a.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                boolean z10 = false;
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(g.class.getClassLoader()));
                }
                q qVar = (q) parcel.readParcelable(g.class.getClassLoader());
                d0 d0Var = (d0) parcel.readParcelable(g.class.getClassLoader());
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(g.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                n1 n1Var = (n1) parcel.readParcelable(g.class.getClassLoader());
                sn.v vVar = (sn.v) parcel.readParcelable(g.class.getClassLoader());
                String readString = parcel.readString();
                if (parcel.readInt() != 0) {
                    z10 = true;
                }
                return new g(createFromParcel, arrayList, qVar, d0Var, arrayList2, readInt3, n1Var, vVar, readString, z10, parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final g[] newArray(int i10) {
                return new g[i10];
            }
        }

        public /* synthetic */ g(h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, sn.v vVar, String str, boolean z10, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, list2, i10, n1Var, vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10, str2);
        }

        public static /* synthetic */ g v(g gVar, h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, sn.v vVar, String str, boolean z10, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = gVar.f26493e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f26494i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f26495o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f26496p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f26497q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f26498r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f26499s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f26500t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f26501u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f26502v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f26503w;
            }
            boolean z11 = z10;
            String str3 = str2;
            sn.v vVar2 = vVar;
            String str4 = str;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return gVar.u(aVar, list, qVar2, d0Var, list3, i12, n1Var2, vVar2, str4, z11, str3);
        }

        @Override // ho.n1
        public void d() {
            super.d();
            for (c0 c0Var : s().i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26499s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f26493e, gVar.f26493e) && Intrinsics.areEqual(this.f26494i, gVar.f26494i) && Intrinsics.areEqual(this.f26495o, gVar.f26495o) && Intrinsics.areEqual(this.f26496p, gVar.f26496p) && Intrinsics.areEqual(this.f26497q, gVar.f26497q) && this.f26498r == gVar.f26498r && Intrinsics.areEqual(this.f26499s, gVar.f26499s) && Intrinsics.areEqual(this.f26500t, gVar.f26500t) && Intrinsics.areEqual(this.f26501u, gVar.f26501u) && this.f26502v == gVar.f26502v && Intrinsics.areEqual(this.f26503w, gVar.f26503w)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26503w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f26493e.hashCode() * 31) + this.f26494i.hashCode()) * 31) + this.f26495o.hashCode()) * 31) + this.f26496p.hashCode()) * 31) + this.f26497q.hashCode()) * 31) + Integer.hashCode(this.f26498r)) * 31;
            n1 n1Var = this.f26499s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f26500t.hashCode()) * 31;
            String str = this.f26501u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f26502v)) * 31;
            String str2 = this.f26503w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // ho.n1
        public int j() {
            return this.f26498r;
        }

        @Override // ho.n1
        public List l() {
            return this.f26497q;
        }

        @Override // ho.n1
        public List n() {
            return this.f26494i;
        }

        @Override // ho.n1.h
        public sn.v p() {
            return this.f26500t;
        }

        @Override // ho.n1.h
        public q q() {
            return this.f26495o;
        }

        @Override // ho.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f26493e;
        }

        @Override // ho.n1.h
        public d0 s() {
            return this.f26496p;
        }

        @Override // ho.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public String toString() {
            h4.a aVar = this.f26493e;
            List list = this.f26494i;
            q qVar = this.f26495o;
            d0 d0Var = this.f26496p;
            List list2 = this.f26497q;
            int i10 = this.f26498r;
            n1 n1Var = this.f26499s;
            sn.v vVar = this.f26500t;
            String str = this.f26501u;
            boolean z10 = this.f26502v;
            String str2 = this.f26503w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        public final g u(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, sn.v cameraProperties, String str, boolean z10, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new g(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, cameraProperties, str, z10, str2);
        }

        public final String w() {
            return this.f26501u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26493e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26494i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f26495o, i10);
            dest.writeParcelable(this.f26496p, i10);
            List<Parcelable> list2 = this.f26497q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26498r);
            dest.writeParcelable(this.f26499s, i10);
            dest.writeParcelable(this.f26500t, i10);
            dest.writeString(this.f26501u);
            dest.writeInt(this.f26502v ? 1 : 0);
            dest.writeString(this.f26503w);
        }

        public boolean x() {
            return this.f26502v;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, sn.v cameraProperties, String str, boolean z10, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f26493e = currentPart;
            this.f26494i = uploadingIds;
            this.f26495o = captureConfig;
            this.f26496p = idForReview;
            this.f26497q = parts;
            this.f26498r = i10;
            this.f26499s = n1Var;
            this.f26500t = cameraProperties;
            this.f26501u = str;
            this.f26502v = z10;
            this.f26503w = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class h extends n1 {
        public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract sn.v p();

        public abstract q q();

        public abstract h4.a r();

        public abstract d0 s();

        public abstract h t(boolean z10);

        private h() {
            super(null);
        }
    }

    public /* synthetic */ n1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public final n1 c(String error) {
        Intrinsics.checkNotNullParameter(error, "error");
        if (this instanceof g) {
            return g.v((g) this, null, null, null, null, null, 0, null, null, error, false, null, 1791, null);
        }
        if (this instanceof i) {
            return i.v((i) this, null, null, null, null, null, null, 0, null, null, error, false, null, 3583, null);
        }
        if (this instanceof c) {
            return c.q((c) this, null, null, null, 0, null, null, false, null, error, SetSpanOperation.SPAN_MAX_PRIORITY, null);
        }
        if (!(this instanceof j)) {
            return this;
        }
        return j.q((j) this, null, null, null, null, 0, null, null, error, 127, null);
    }

    public void d() {
        for (d0 d0Var : n()) {
            for (c0 c0Var : d0Var.i2()) {
                new File(c0Var.a()).delete();
            }
        }
    }

    public abstract n1 e();

    public abstract String f();

    public abstract h4 g();

    public final boolean i() {
        return this.f26433d;
    }

    public abstract int j();

    public abstract List l();

    public abstract List n();

    public final void o(boolean z10) {
        this.f26433d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f26504e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26505i;

        /* renamed from: o  reason: collision with root package name */
        private final q f26506o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f26507p;

        /* renamed from: q  reason: collision with root package name */
        private final String f26508q;

        /* renamed from: r  reason: collision with root package name */
        private final List f26509r;

        /* renamed from: s  reason: collision with root package name */
        private final int f26510s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f26511t;

        /* renamed from: u  reason: collision with root package name */
        private final sn.v f26512u;

        /* renamed from: v  reason: collision with root package name */
        private final String f26513v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f26514w;

        /* renamed from: x  reason: collision with root package name */
        private final String f26515x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final i createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4.a createFromParcel = h4.a.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                boolean z10 = false;
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(i.class.getClassLoader()));
                }
                q qVar = (q) parcel.readParcelable(i.class.getClassLoader());
                d0 d0Var = (d0) parcel.readParcelable(i.class.getClassLoader());
                String readString = parcel.readString();
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(i.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                n1 n1Var = (n1) parcel.readParcelable(i.class.getClassLoader());
                sn.v vVar = (sn.v) parcel.readParcelable(i.class.getClassLoader());
                String readString2 = parcel.readString();
                if (parcel.readInt() != 0) {
                    z10 = true;
                }
                return new i(createFromParcel, arrayList, qVar, d0Var, readString, arrayList2, readInt3, n1Var, vVar, readString2, z10, parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        public /* synthetic */ i(h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, sn.v vVar, String str2, boolean z10, String str3, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, str, list2, i10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new sn.v(null, null, null, 0, 15, null) : vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10, str3);
        }

        public static /* synthetic */ i v(i iVar, h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, sn.v vVar, String str2, boolean z10, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = iVar.f26504e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f26505i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f26506o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f26507p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f26508q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f26509r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f26510s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f26511t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f26512u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f26513v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f26514w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f26515x;
            }
            boolean z11 = z10;
            String str4 = str3;
            sn.v vVar2 = vVar;
            String str5 = str2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            String str6 = str;
            List list3 = list2;
            return iVar.u(aVar, list, qVar, d0Var, str6, list3, i12, n1Var2, vVar2, str5, z11, str4);
        }

        @Override // ho.n1
        public void d() {
            super.d();
            for (c0 c0Var : s().i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26511t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f26504e, iVar.f26504e) && Intrinsics.areEqual(this.f26505i, iVar.f26505i) && Intrinsics.areEqual(this.f26506o, iVar.f26506o) && Intrinsics.areEqual(this.f26507p, iVar.f26507p) && Intrinsics.areEqual(this.f26508q, iVar.f26508q) && Intrinsics.areEqual(this.f26509r, iVar.f26509r) && this.f26510s == iVar.f26510s && Intrinsics.areEqual(this.f26511t, iVar.f26511t) && Intrinsics.areEqual(this.f26512u, iVar.f26512u) && Intrinsics.areEqual(this.f26513v, iVar.f26513v) && this.f26514w == iVar.f26514w && Intrinsics.areEqual(this.f26515x, iVar.f26515x)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26515x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f26504e.hashCode() * 31) + this.f26505i.hashCode()) * 31) + this.f26506o.hashCode()) * 31) + this.f26507p.hashCode()) * 31;
            String str = this.f26508q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f26509r.hashCode()) * 31) + Integer.hashCode(this.f26510s)) * 31;
            n1 n1Var = this.f26511t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f26512u.hashCode()) * 31;
            String str2 = this.f26513v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f26514w)) * 31;
            String str3 = this.f26515x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // ho.n1
        public int j() {
            return this.f26510s;
        }

        @Override // ho.n1
        public List l() {
            return this.f26509r;
        }

        @Override // ho.n1
        public List n() {
            return this.f26505i;
        }

        @Override // ho.n1.h
        public sn.v p() {
            return this.f26512u;
        }

        @Override // ho.n1.h
        public q q() {
            return this.f26506o;
        }

        @Override // ho.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f26504e;
        }

        @Override // ho.n1.h
        public d0 s() {
            return this.f26507p;
        }

        @Override // ho.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public String toString() {
            h4.a aVar = this.f26504e;
            List list = this.f26505i;
            q qVar = this.f26506o;
            d0 d0Var = this.f26507p;
            String str = this.f26508q;
            List list2 = this.f26509r;
            int i10 = this.f26510s;
            n1 n1Var = this.f26511t;
            sn.v vVar = this.f26512u;
            String str2 = this.f26513v;
            boolean z10 = this.f26514w;
            String str3 = this.f26515x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        public final i u(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, sn.v cameraProperties, String str2, boolean z10, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new i(currentPart, uploadingIds, captureConfig, idForReview, str, parts, i10, n1Var, cameraProperties, str2, z10, str3);
        }

        public final String w() {
            return this.f26513v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26504e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26505i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f26506o, i10);
            dest.writeParcelable(this.f26507p, i10);
            dest.writeString(this.f26508q);
            List<Parcelable> list2 = this.f26509r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26510s);
            dest.writeParcelable(this.f26511t, i10);
            dest.writeParcelable(this.f26512u, i10);
            dest.writeString(this.f26513v);
            dest.writeInt(this.f26514w ? 1 : 0);
            dest.writeString(this.f26515x);
        }

        public final String x() {
            return this.f26508q;
        }

        public boolean z() {
            return this.f26514w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, sn.v cameraProperties, String str2, boolean z10, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f26504e = currentPart;
            this.f26505i = uploadingIds;
            this.f26506o = captureConfig;
            this.f26507p = idForReview;
            this.f26508q = str;
            this.f26509r = parts;
            this.f26510s = i10;
            this.f26511t = n1Var;
            this.f26512u = cameraProperties;
            this.f26513v = str2;
            this.f26514w = z10;
            this.f26515x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f26524e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26525i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f26526o;

        /* renamed from: p  reason: collision with root package name */
        private final List f26527p;

        /* renamed from: q  reason: collision with root package name */
        private final int f26528q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f26529r;

        /* renamed from: s  reason: collision with root package name */
        private final String f26530s;

        /* renamed from: t  reason: collision with root package name */
        private final oo.c f26531t;

        /* renamed from: u  reason: collision with root package name */
        private final String f26532u;

        /* renamed from: v  reason: collision with root package name */
        private final sn.v f26533v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                oo.c createFromParcel;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                c4 createFromParcel2 = c4.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(k.class.getClassLoader()));
                }
                h4 h4Var = (h4) parcel.readParcelable(k.class.getClassLoader());
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(k.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                n1 n1Var = (n1) parcel.readParcelable(k.class.getClassLoader());
                String readString = parcel.readString();
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = oo.c.CREATOR.createFromParcel(parcel);
                }
                return new k(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, createFromParcel, parcel.readString(), (sn.v) parcel.readParcelable(k.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        public /* synthetic */ k(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, oo.c cVar, String str2, sn.v vVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f26026o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26529r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f26524e, kVar.f26524e) && Intrinsics.areEqual(this.f26525i, kVar.f26525i) && Intrinsics.areEqual(this.f26526o, kVar.f26526o) && Intrinsics.areEqual(this.f26527p, kVar.f26527p) && this.f26528q == kVar.f26528q && Intrinsics.areEqual(this.f26529r, kVar.f26529r) && Intrinsics.areEqual(this.f26530s, kVar.f26530s) && Intrinsics.areEqual(this.f26531t, kVar.f26531t) && Intrinsics.areEqual(this.f26532u, kVar.f26532u) && Intrinsics.areEqual(this.f26533v, kVar.f26533v)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26530s;
        }

        @Override // ho.n1
        public h4 g() {
            return this.f26526o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f26524e.hashCode() * 31) + this.f26525i.hashCode()) * 31) + this.f26526o.hashCode()) * 31) + this.f26527p.hashCode()) * 31) + Integer.hashCode(this.f26528q)) * 31;
            n1 n1Var = this.f26529r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f26530s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            oo.c cVar = this.f26531t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f26532u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f26533v.hashCode();
        }

        @Override // ho.n1
        public int j() {
            return this.f26528q;
        }

        @Override // ho.n1
        public List l() {
            return this.f26527p;
        }

        @Override // ho.n1
        public List n() {
            return this.f26525i;
        }

        public final sn.v p() {
            return this.f26533v;
        }

        public final oo.c q() {
            return this.f26531t;
        }

        public final String r() {
            return this.f26532u;
        }

        public String toString() {
            c4 c4Var = this.f26524e;
            List list = this.f26525i;
            h4 h4Var = this.f26526o;
            List list2 = this.f26527p;
            int i10 = this.f26528q;
            n1 n1Var = this.f26529r;
            String str = this.f26530s;
            oo.c cVar = this.f26531t;
            String str2 = this.f26532u;
            sn.v vVar = this.f26533v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26524e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26525i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f26526o, i10);
            List<Parcelable> list2 = this.f26527p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26528q);
            dest.writeParcelable(this.f26529r, i10);
            dest.writeString(this.f26530s);
            oo.c cVar = this.f26531t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f26532u);
            dest.writeParcelable(this.f26533v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, oo.c cVar, String str2, sn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f26524e = id2;
            this.f26525i = uploadingIds;
            this.f26526o = currentPart;
            this.f26527p = parts;
            this.f26528q = i10;
            this.f26529r = n1Var;
            this.f26530s = str;
            this.f26531t = cVar;
            this.f26532u = str2;
            this.f26533v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements ho.d, ho.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f26534e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26535i;

        /* renamed from: o  reason: collision with root package name */
        private final q f26536o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f26537p;

        /* renamed from: q  reason: collision with root package name */
        private final List f26538q;

        /* renamed from: r  reason: collision with root package name */
        private final int f26539r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f26540s;

        /* renamed from: t  reason: collision with root package name */
        private final po.t f26541t;

        /* renamed from: u  reason: collision with root package name */
        private final String f26542u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f26543v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f26544w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f26545x;

        /* renamed from: y  reason: collision with root package name */
        private final String f26546y;

        /* renamed from: z  reason: collision with root package name */
        private final no.d f26547z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                po.t valueOf;
                boolean z10;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4.a createFromParcel = h4.a.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(l.class.getClassLoader()));
                }
                q qVar = (q) parcel.readParcelable(l.class.getClassLoader());
                f5.b.a valueOf2 = f5.b.a.valueOf(parcel.readString());
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(l.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                n1 n1Var = (n1) parcel.readParcelable(l.class.getClassLoader());
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = po.t.valueOf(parcel.readString());
                }
                String readString = parcel.readString();
                Throwable th2 = (Throwable) parcel.readSerializable();
                boolean z11 = true;
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (parcel.readInt() == 0) {
                    z11 = false;
                }
                return new l(createFromParcel, arrayList, qVar, valueOf2, arrayList2, readInt3, n1Var, valueOf, readString, th2, z10, z11, parcel.readString(), (no.d) parcel.readParcelable(l.class.getClassLoader()), null, 16384, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, po.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, no.d dVar, Function0 function0, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, aVar2, list2, i10, n1Var, tVar, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? true : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? true : z11, str2, (i11 & 8192) != 0 ? null : dVar, (i11 & 16384) != 0 ? new Function0() { // from class: ho.o1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q10;
                    q10 = n1.l.q();
                    return q10;
                }
            } : function0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit q() {
            return Unit.f31988a;
        }

        public static /* synthetic */ l s(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, po.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, no.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.r((i11 & 1) != 0 ? lVar.f26534e : aVar, (i11 & 2) != 0 ? lVar.f26535i : list, (i11 & 4) != 0 ? lVar.f26536o : qVar, (i11 & 8) != 0 ? lVar.f26537p : aVar2, (i11 & 16) != 0 ? lVar.f26538q : list2, (i11 & 32) != 0 ? lVar.f26539r : i10, (i11 & 64) != 0 ? lVar.f26540s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f26541t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f26542u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f26543v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f26544w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f26545x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f26546y : str2, (i11 & 8192) != 0 ? lVar.f26547z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        public final f5.b.a A() {
            return this.f26537p;
        }

        public final Function0 B() {
            return this.A;
        }

        public final String C() {
            return this.f26542u;
        }

        public final po.t D() {
            return this.f26541t;
        }

        @Override // ho.b
        public n1 a(boolean z10) {
            return s(this, null, null, null, null, null, 0, null, null, null, null, false, z10, null, null, null, 30719, null);
        }

        @Override // ho.d
        public n1 b(boolean z10) {
            return s(this, null, null, null, null, null, 0, null, null, null, null, z10, false, null, null, null, 31743, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26540s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f26534e, lVar.f26534e) && Intrinsics.areEqual(this.f26535i, lVar.f26535i) && Intrinsics.areEqual(this.f26536o, lVar.f26536o) && this.f26537p == lVar.f26537p && Intrinsics.areEqual(this.f26538q, lVar.f26538q) && this.f26539r == lVar.f26539r && Intrinsics.areEqual(this.f26540s, lVar.f26540s) && this.f26541t == lVar.f26541t && Intrinsics.areEqual(this.f26542u, lVar.f26542u) && Intrinsics.areEqual(this.f26543v, lVar.f26543v) && this.f26544w == lVar.f26544w && this.f26545x == lVar.f26545x && Intrinsics.areEqual(this.f26546y, lVar.f26546y) && Intrinsics.areEqual(this.f26547z, lVar.f26547z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26546y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f26534e.hashCode() * 31) + this.f26535i.hashCode()) * 31) + this.f26536o.hashCode()) * 31) + this.f26537p.hashCode()) * 31) + this.f26538q.hashCode()) * 31) + Integer.hashCode(this.f26539r)) * 31;
            n1 n1Var = this.f26540s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            po.t tVar = this.f26541t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f26542u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f26543v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f26544w)) * 31) + Boolean.hashCode(this.f26545x)) * 31;
            String str2 = this.f26546y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            no.d dVar = this.f26547z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // ho.n1
        public int j() {
            return this.f26539r;
        }

        @Override // ho.n1
        public List l() {
            return this.f26538q;
        }

        @Override // ho.n1
        public List n() {
            return this.f26535i;
        }

        public final l r(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, po.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, no.d dVar, Function0 webRtcConnectionEstablished) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            return new l(currentPart, uploadingIds, captureConfig, manualCapture, parts, i10, n1Var, tVar, str, th2, z10, z11, str2, dVar, webRtcConnectionEstablished);
        }

        public final q t() {
            return this.f26536o;
        }

        public String toString() {
            h4.a aVar = this.f26534e;
            List list = this.f26535i;
            q qVar = this.f26536o;
            f5.b.a aVar2 = this.f26537p;
            List list2 = this.f26538q;
            int i10 = this.f26539r;
            n1 n1Var = this.f26540s;
            po.t tVar = this.f26541t;
            String str = this.f26542u;
            Throwable th2 = this.f26543v;
            boolean z10 = this.f26544w;
            boolean z11 = this.f26545x;
            String str2 = this.f26546y;
            no.d dVar = this.f26547z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public boolean u() {
            return this.f26545x;
        }

        public boolean v() {
            return this.f26544w;
        }

        @Override // ho.n1
        /* renamed from: w */
        public h4.a g() {
            return this.f26534e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26534e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26535i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f26536o, i10);
            dest.writeString(this.f26537p.name());
            List<Parcelable> list2 = this.f26538q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26539r);
            dest.writeParcelable(this.f26540s, i10);
            po.t tVar = this.f26541t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f26542u);
            dest.writeSerializable(this.f26543v);
            dest.writeInt(this.f26544w ? 1 : 0);
            dest.writeInt(this.f26545x ? 1 : 0);
            dest.writeString(this.f26546y);
            dest.writeParcelable(this.f26547z, i10);
        }

        public final Throwable x() {
            return this.f26543v;
        }

        public final no.d z() {
            return this.f26547z;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, po.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, no.d dVar, Function0 webRtcConnectionEstablished) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            this.f26534e = currentPart;
            this.f26535i = uploadingIds;
            this.f26536o = captureConfig;
            this.f26537p = manualCapture;
            this.f26538q = parts;
            this.f26539r = i10;
            this.f26540s = n1Var;
            this.f26541t = tVar;
            this.f26542u = str;
            this.f26543v = th2;
            this.f26544w = z10;
            this.f26545x = z11;
            this.f26546y = str2;
            this.f26547z = dVar;
            this.A = webRtcConnectionEstablished;
        }
    }

    private n1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends n1 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0364a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f26434e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26435i;

        /* renamed from: o  reason: collision with root package name */
        private final List f26436o;

        /* renamed from: p  reason: collision with root package name */
        private final int f26437p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f26438q;

        /* renamed from: r  reason: collision with root package name */
        private final String f26439r;

        /* renamed from: s  reason: collision with root package name */
        private final List f26440s;

        /* renamed from: t  reason: collision with root package name */
        private final sn.v f26441t;

        /* renamed from: u  reason: collision with root package name */
        private final List f26442u;

        /* renamed from: v  reason: collision with root package name */
        private final String f26443v;

        /* renamed from: w  reason: collision with root package name */
        private final String f26444w;

        /* renamed from: x  reason: collision with root package name */
        private final ho.c f26445x;

        /* renamed from: ho.n1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0364a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4.a createFromParcel = h4.a.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                n1 n1Var = (n1) parcel.readParcelable(a.class.getClassLoader());
                String readString = parcel.readString();
                int readInt4 = parcel.readInt();
                ArrayList arrayList3 = new ArrayList(readInt4);
                for (int i12 = 0; i12 != readInt4; i12++) {
                    arrayList3.add(c0.CREATOR.createFromParcel(parcel));
                }
                sn.v vVar = (sn.v) parcel.readParcelable(a.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new a(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString(), ho.c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, sn.v vVar, List list4, String str2, String str3, ho.c cVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f26026o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26438q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f26434e, aVar.f26434e) && Intrinsics.areEqual(this.f26435i, aVar.f26435i) && Intrinsics.areEqual(this.f26436o, aVar.f26436o) && this.f26437p == aVar.f26437p && Intrinsics.areEqual(this.f26438q, aVar.f26438q) && Intrinsics.areEqual(this.f26439r, aVar.f26439r) && Intrinsics.areEqual(this.f26440s, aVar.f26440s) && Intrinsics.areEqual(this.f26441t, aVar.f26441t) && Intrinsics.areEqual(this.f26442u, aVar.f26442u) && Intrinsics.areEqual(this.f26443v, aVar.f26443v) && Intrinsics.areEqual(this.f26444w, aVar.f26444w) && this.f26445x == aVar.f26445x) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26439r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f26434e.hashCode() * 31) + this.f26435i.hashCode()) * 31) + this.f26436o.hashCode()) * 31) + Integer.hashCode(this.f26437p)) * 31;
            n1 n1Var = this.f26438q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f26439r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f26440s.hashCode()) * 31) + this.f26441t.hashCode()) * 31) + this.f26442u.hashCode()) * 31;
            String str2 = this.f26443v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f26444w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f26445x.hashCode();
        }

        @Override // ho.n1
        public int j() {
            return this.f26437p;
        }

        @Override // ho.n1
        public List l() {
            return this.f26436o;
        }

        @Override // ho.n1
        public List n() {
            return this.f26435i;
        }

        public final List p() {
            return this.f26440s;
        }

        @Override // ho.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f26434e;
        }

        public final ho.c r() {
            return this.f26445x;
        }

        public final List s() {
            return this.f26442u;
        }

        public String toString() {
            h4.a aVar = this.f26434e;
            List list = this.f26435i;
            List list2 = this.f26436o;
            int i10 = this.f26437p;
            n1 n1Var = this.f26438q;
            String str = this.f26439r;
            List list3 = this.f26440s;
            sn.v vVar = this.f26441t;
            List list4 = this.f26442u;
            String str2 = this.f26443v;
            String str3 = this.f26444w;
            ho.c cVar = this.f26445x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26434e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26435i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f26436o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26437p);
            dest.writeParcelable(this.f26438q, i10);
            dest.writeString(this.f26439r);
            List<c0> list3 = this.f26440s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f26441t, i10);
            List<e4> list4 = this.f26442u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f26443v);
            dest.writeString(this.f26444w);
            dest.writeString(this.f26445x.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, sn.v cameraProperties, List idConfigsForCountry, String str2, String str3, ho.c errorType) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            Intrinsics.checkNotNullParameter(errorType, "errorType");
            this.f26434e = currentPart;
            this.f26435i = uploadingIds;
            this.f26436o = parts;
            this.f26437p = i10;
            this.f26438q = n1Var;
            this.f26439r = str;
            this.f26440s = captureFrames;
            this.f26441t = cameraProperties;
            this.f26442u = idConfigsForCountry;
            this.f26443v = str2;
            this.f26444w = str3;
            this.f26445x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f26457e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26458i;

        /* renamed from: o  reason: collision with root package name */
        private final List f26459o;

        /* renamed from: p  reason: collision with root package name */
        private final int f26460p;

        /* renamed from: q  reason: collision with root package name */
        private final String f26461q;

        /* renamed from: r  reason: collision with root package name */
        private final q f26462r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f26463s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f26464t;

        /* renamed from: u  reason: collision with root package name */
        private final String f26465u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4.a createFromParcel = h4.a.CREATOR.createFromParcel(parcel);
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                boolean z10 = false;
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(c.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(c.class.getClassLoader()));
                }
                int readInt3 = parcel.readInt();
                String readString = parcel.readString();
                q qVar = (q) parcel.readParcelable(c.class.getClassLoader());
                if (parcel.readInt() != 0) {
                    z10 = true;
                }
                return new c(createFromParcel, arrayList, arrayList2, readInt3, readString, qVar, z10, (n1) parcel.readParcelable(c.class.getClassLoader()), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public /* synthetic */ c(h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f26026o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c q(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f26457e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f26458i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f26459o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f26460p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f26461q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f26462r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f26463s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f26464t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f26465u;
            }
            n1 n1Var2 = n1Var;
            String str3 = str2;
            q qVar2 = qVar;
            boolean z11 = z10;
            String str4 = str;
            List list3 = list2;
            return cVar.p(aVar, list, list3, i10, str4, qVar2, z11, n1Var2, str3);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26464t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f26457e, cVar.f26457e) && Intrinsics.areEqual(this.f26458i, cVar.f26458i) && Intrinsics.areEqual(this.f26459o, cVar.f26459o) && this.f26460p == cVar.f26460p && Intrinsics.areEqual(this.f26461q, cVar.f26461q) && Intrinsics.areEqual(this.f26462r, cVar.f26462r) && this.f26463s == cVar.f26463s && Intrinsics.areEqual(this.f26464t, cVar.f26464t) && Intrinsics.areEqual(this.f26465u, cVar.f26465u)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26461q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f26457e.hashCode() * 31) + this.f26458i.hashCode()) * 31) + this.f26459o.hashCode()) * 31) + Integer.hashCode(this.f26460p)) * 31;
            String str = this.f26461q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f26462r.hashCode()) * 31) + Boolean.hashCode(this.f26463s)) * 31;
            n1 n1Var = this.f26464t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f26465u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // ho.n1
        public int j() {
            return this.f26460p;
        }

        @Override // ho.n1
        public List l() {
            return this.f26459o;
        }

        @Override // ho.n1
        public List n() {
            return this.f26458i;
        }

        public final c p(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q r() {
            return this.f26462r;
        }

        public final boolean s() {
            return this.f26463s;
        }

        @Override // ho.n1
        /* renamed from: t */
        public h4.a g() {
            return this.f26457e;
        }

        public String toString() {
            h4.a aVar = this.f26457e;
            List list = this.f26458i;
            List list2 = this.f26459o;
            int i10 = this.f26460p;
            String str = this.f26461q;
            q qVar = this.f26462r;
            boolean z10 = this.f26463s;
            n1 n1Var = this.f26464t;
            String str2 = this.f26465u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        public final String u() {
            return this.f26465u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f26457e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f26458i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f26459o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f26460p);
            dest.writeString(this.f26461q);
            dest.writeParcelable(this.f26462r, i10);
            dest.writeInt(this.f26463s ? 1 : 0);
            dest.writeParcelable(this.f26464t, i10);
            dest.writeString(this.f26465u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f26457e = currentPart;
            this.f26458i = uploadingIds;
            this.f26459o = parts;
            this.f26460p = i10;
            this.f26461q = str;
            this.f26462r = captureConfig;
            this.f26463s = z10;
            this.f26464t = n1Var;
            this.f26465u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f26516e;

        /* renamed from: i  reason: collision with root package name */
        private final List f26517i;

        /* renamed from: o  reason: collision with root package name */
        private final List f26518o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f26519p;

        /* renamed from: q  reason: collision with root package name */
        private final int f26520q;

        /* renamed from: r  reason: collision with root package name */
        private final String f26521r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f26522s;

        /* renamed from: t  reason: collision with root package name */
        private final String f26523t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final j createFromParcel(Parcel parcel) {
                c4 createFromParcel;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                h4 h4Var = (h4) parcel.readParcelable(j.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(j.class.getClassLoader()));
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i11 = 0; i11 != readInt2; i11++) {
                    arrayList2.add(parcel.readParcelable(j.class.getClassLoader()));
                }
                n1 n1Var = (n1) parcel.readParcelable(j.class.getClassLoader());
                int readInt3 = parcel.readInt();
                String readString = parcel.readString();
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = c4.CREATOR.createFromParcel(parcel);
                }
                return new j(h4Var, arrayList, arrayList2, n1Var, readInt3, readString, createFromParcel, parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final j[] newArray(int i10) {
                return new j[i10];
            }
        }

        public /* synthetic */ j(h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f26026o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j q(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f26516e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f26517i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f26518o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f26519p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f26520q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f26521r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f26522s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f26523t;
            }
            c4 c4Var2 = c4Var;
            String str3 = str2;
            int i12 = i10;
            String str4 = str;
            return jVar.p(h4Var, list, list2, n1Var, i12, str4, c4Var2, str3);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ho.n1
        public n1 e() {
            return this.f26519p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f26516e, jVar.f26516e) && Intrinsics.areEqual(this.f26517i, jVar.f26517i) && Intrinsics.areEqual(this.f26518o, jVar.f26518o) && Intrinsics.areEqual(this.f26519p, jVar.f26519p) && this.f26520q == jVar.f26520q && Intrinsics.areEqual(this.f26521r, jVar.f26521r) && Intrinsics.areEqual(this.f26522s, jVar.f26522s) && Intrinsics.areEqual(this.f26523t, jVar.f26523t)) {
                return true;
            }
            return false;
        }

        @Override // ho.n1
        public String f() {
            return this.f26521r;
        }

        @Override // ho.n1
        public h4 g() {
            return this.f26516e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f26516e.hashCode() * 31) + this.f26517i.hashCode()) * 31) + this.f26518o.hashCode()) * 31;
            n1 n1Var = this.f26519p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f26520q)) * 31;
            String str = this.f26521r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f26522s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f26523t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // ho.n1
        public int j() {
            return this.f26520q;
        }

        @Override // ho.n1
        public List l() {
            return this.f26518o;
        }

        @Override // ho.n1
        public List n() {
            return this.f26517i;
        }

        public final j p(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String r() {
            return this.f26523t;
        }

        public String toString() {
            h4 h4Var = this.f26516e;
            List list = this.f26517i;
            List list2 = this.f26518o;
            n1 n1Var = this.f26519p;
            int i10 = this.f26520q;
            String str = this.f26521r;
            c4 c4Var = this.f26522s;
            String str2 = this.f26523t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f26516e, i10);
            List<Parcelable> list = this.f26517i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f26518o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f26519p, i10);
            dest.writeInt(this.f26520q);
            dest.writeString(this.f26521r);
            c4 c4Var = this.f26522s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f26523t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f26516e = currentPart;
            this.f26517i = uploadingIds;
            this.f26518o = parts;
            this.f26519p = n1Var;
            this.f26520q = i10;
            this.f26521r = str;
            this.f26522s = c4Var;
            this.f26523t = str2;
        }
    }
}
