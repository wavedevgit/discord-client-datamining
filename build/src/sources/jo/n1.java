package jo;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import jo.c4;
import jo.d0;
import jo.f5;
import jo.h4;
import jo.n1;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f30477d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30490e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30491i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30492o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30493p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f30494q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30495r;

        /* renamed from: s  reason: collision with root package name */
        private final List f30496s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30497t;

        /* renamed from: u  reason: collision with root package name */
        private final List f30498u;

        /* renamed from: v  reason: collision with root package name */
        private final String f30499v;

        /* renamed from: w  reason: collision with root package name */
        private final String f30500w;

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
                un.v vVar = (un.v) parcel.readParcelable(b.class.getClassLoader());
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
        public b(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, un.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            this.f30490e = currentPart;
            this.f30491i = uploadingIds;
            this.f30492o = parts;
            this.f30493p = i10;
            this.f30494q = n1Var;
            this.f30495r = str;
            this.f30496s = captureFrames;
            this.f30497t = cameraProperties;
            this.f30498u = idConfigsForCountry;
            this.f30499v = str2;
            this.f30500w = str3;
        }

        public static /* synthetic */ b r(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, un.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f30490e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f30491i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f30492o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f30493p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f30494q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f30495r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f30496s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f30497t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f30498u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f30499v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f30500w;
            }
            String str4 = str2;
            String str5 = str3;
            un.v vVar2 = vVar;
            List list5 = list4;
            String str6 = str;
            List list6 = list3;
            n1 n1Var2 = n1Var;
            List list7 = list2;
            return bVar.q(aVar, list, list7, i10, n1Var2, str6, list6, vVar2, list5, str4, str5);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30494q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f30490e, bVar.f30490e) && Intrinsics.areEqual(this.f30491i, bVar.f30491i) && Intrinsics.areEqual(this.f30492o, bVar.f30492o) && this.f30493p == bVar.f30493p && Intrinsics.areEqual(this.f30494q, bVar.f30494q) && Intrinsics.areEqual(this.f30495r, bVar.f30495r) && Intrinsics.areEqual(this.f30496s, bVar.f30496s) && Intrinsics.areEqual(this.f30497t, bVar.f30497t) && Intrinsics.areEqual(this.f30498u, bVar.f30498u) && Intrinsics.areEqual(this.f30499v, bVar.f30499v) && Intrinsics.areEqual(this.f30500w, bVar.f30500w)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30495r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f30490e.hashCode() * 31) + this.f30491i.hashCode()) * 31) + this.f30492o.hashCode()) * 31) + Integer.hashCode(this.f30493p)) * 31;
            n1 n1Var = this.f30494q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f30495r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f30496s.hashCode()) * 31) + this.f30497t.hashCode()) * 31) + this.f30498u.hashCode()) * 31;
            String str2 = this.f30499v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f30500w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30493p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30492o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30491i;
        }

        public final b q(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, un.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            return new b(currentPart, uploadingIds, parts, i10, n1Var, str, captureFrames, cameraProperties, idConfigsForCountry, str2, str3);
        }

        public final un.v t() {
            return this.f30497t;
        }

        public String toString() {
            h4.a aVar = this.f30490e;
            List list = this.f30491i;
            List list2 = this.f30492o;
            int i10 = this.f30493p;
            n1 n1Var = this.f30494q;
            String str = this.f30495r;
            List list3 = this.f30496s;
            un.v vVar = this.f30497t;
            List list4 = this.f30498u;
            String str2 = this.f30499v;
            String str3 = this.f30500w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        @Override // jo.n1
        /* renamed from: u */
        public h4.a h() {
            return this.f30490e;
        }

        public final List v() {
            return this.f30498u;
        }

        public final String w() {
            return this.f30499v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30490e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30491i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30492o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30493p);
            dest.writeParcelable(this.f30494q, i10);
            dest.writeString(this.f30495r);
            List<c0> list3 = this.f30496s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f30497t, i10);
            List<e4> list4 = this.f30498u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30499v);
            dest.writeString(this.f30500w);
        }

        public final String x() {
            return this.f30500w;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30510e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30511i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30512o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f30513p;

        /* renamed from: q  reason: collision with root package name */
        private final List f30514q;

        /* renamed from: r  reason: collision with root package name */
        private final int f30515r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f30516s;

        /* renamed from: t  reason: collision with root package name */
        private final String f30517t;

        /* renamed from: u  reason: collision with root package name */
        private final po.d f30518u;

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
                return new d(createFromParcel, arrayList, qVar, createFromParcel2, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (po.d) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, po.d dVar) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f30510e = currentPart;
            this.f30511i = uploadingIds;
            this.f30512o = captureConfig;
            this.f30513p = idForReview;
            this.f30514q = parts;
            this.f30515r = i10;
            this.f30516s = n1Var;
            this.f30517t = str;
            this.f30518u = dVar;
        }

        public static /* synthetic */ d r(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, po.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f30510e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f30511i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f30512o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f30513p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f30514q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f30515r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f30516s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f30517t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f30518u;
            }
            String str2 = str;
            po.d dVar3 = dVar2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return dVar.q(aVar, list, qVar2, bVar, list3, i12, n1Var2, str2, dVar3);
        }

        @Override // jo.n1
        public void d() {
            super.d();
            for (c0 c0Var : this.f30513p.i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30516s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f30510e, dVar.f30510e) && Intrinsics.areEqual(this.f30511i, dVar.f30511i) && Intrinsics.areEqual(this.f30512o, dVar.f30512o) && Intrinsics.areEqual(this.f30513p, dVar.f30513p) && Intrinsics.areEqual(this.f30514q, dVar.f30514q) && this.f30515r == dVar.f30515r && Intrinsics.areEqual(this.f30516s, dVar.f30516s) && Intrinsics.areEqual(this.f30517t, dVar.f30517t) && Intrinsics.areEqual(this.f30518u, dVar.f30518u)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30517t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f30510e.hashCode() * 31) + this.f30511i.hashCode()) * 31) + this.f30512o.hashCode()) * 31) + this.f30513p.hashCode()) * 31) + this.f30514q.hashCode()) * 31) + Integer.hashCode(this.f30515r)) * 31;
            n1 n1Var = this.f30516s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f30517t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            po.d dVar = this.f30518u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30515r;
        }

        @Override // jo.n1
        public List l() {
            return this.f30514q;
        }

        @Override // jo.n1
        public List o() {
            return this.f30511i;
        }

        public final d q(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, po.d dVar) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new d(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, str, dVar);
        }

        public final q t() {
            return this.f30512o;
        }

        public String toString() {
            h4.a aVar = this.f30510e;
            List list = this.f30511i;
            q qVar = this.f30512o;
            d0.b bVar = this.f30513p;
            List list2 = this.f30514q;
            int i10 = this.f30515r;
            n1 n1Var = this.f30516s;
            String str = this.f30517t;
            po.d dVar = this.f30518u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        @Override // jo.n1
        /* renamed from: u */
        public h4.a h() {
            return this.f30510e;
        }

        public final po.d v() {
            return this.f30518u;
        }

        public final d0.b w() {
            return this.f30513p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30510e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30511i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30512o, i10);
            this.f30513p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f30514q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30515r);
            dest.writeParcelable(this.f30516s, i10);
            dest.writeString(this.f30517t);
            dest.writeParcelable(this.f30518u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f30519e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30520i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f30521o;

        /* renamed from: p  reason: collision with root package name */
        private final List f30522p;

        /* renamed from: q  reason: collision with root package name */
        private final int f30523q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f30524r;

        /* renamed from: s  reason: collision with root package name */
        private final String f30525s;

        /* renamed from: t  reason: collision with root package name */
        private final qo.c f30526t;

        /* renamed from: u  reason: collision with root package name */
        private final long f30527u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f30528v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                qo.c createFromParcel;
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
                    createFromParcel = qo.c.CREATOR.createFromParcel(parcel);
                }
                qo.c cVar = createFromParcel;
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

        public /* synthetic */ e(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, qo.c cVar, long j10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 3000L : j10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
        }

        public static /* synthetic */ e r(e eVar, c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, qo.c cVar, long j10, boolean z10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                c4Var = eVar.f30519e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f30520i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f30521o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f30522p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f30523q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f30524r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f30525s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f30526t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f30527u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f30528v;
            }
            boolean z11 = z10;
            long j11 = j10;
            String str2 = str;
            qo.c cVar2 = cVar;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            return eVar.q(c4Var, list, h4Var, list2, i12, n1Var2, str2, cVar2, j11, z11);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30524r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f30519e, eVar.f30519e) && Intrinsics.areEqual(this.f30520i, eVar.f30520i) && Intrinsics.areEqual(this.f30521o, eVar.f30521o) && Intrinsics.areEqual(this.f30522p, eVar.f30522p) && this.f30523q == eVar.f30523q && Intrinsics.areEqual(this.f30524r, eVar.f30524r) && Intrinsics.areEqual(this.f30525s, eVar.f30525s) && Intrinsics.areEqual(this.f30526t, eVar.f30526t) && this.f30527u == eVar.f30527u && this.f30528v == eVar.f30528v) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30525s;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30521o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f30519e.hashCode() * 31) + this.f30520i.hashCode()) * 31) + this.f30521o.hashCode()) * 31) + this.f30522p.hashCode()) * 31) + Integer.hashCode(this.f30523q)) * 31;
            n1 n1Var = this.f30524r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f30525s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            qo.c cVar = this.f30526t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f30527u)) * 31) + Boolean.hashCode(this.f30528v);
        }

        @Override // jo.n1
        public int j() {
            return this.f30523q;
        }

        @Override // jo.n1
        public List l() {
            return this.f30522p;
        }

        @Override // jo.n1
        public List o() {
            return this.f30520i;
        }

        public final e q(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, qo.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 t() {
            return this.f30519e;
        }

        public String toString() {
            c4 c4Var = this.f30519e;
            List list = this.f30520i;
            h4 h4Var = this.f30521o;
            List list2 = this.f30522p;
            int i10 = this.f30523q;
            n1 n1Var = this.f30524r;
            String str = this.f30525s;
            qo.c cVar = this.f30526t;
            long j10 = this.f30527u;
            boolean z10 = this.f30528v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        public final long u() {
            return this.f30527u;
        }

        public final boolean v() {
            return this.f30528v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30519e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30520i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30521o, i10);
            List<Parcelable> list2 = this.f30522p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30523q);
            dest.writeParcelable(this.f30524r, i10);
            dest.writeString(this.f30525s);
            qo.c cVar = this.f30526t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f30527u);
            dest.writeInt(this.f30528v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, qo.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f30519e = id2;
            this.f30520i = uploadingIds;
            this.f30521o = currentPart;
            this.f30522p = parts;
            this.f30523q = i10;
            this.f30524r = n1Var;
            this.f30525s = str;
            this.f30526t = cVar;
            this.f30527u = j10;
            this.f30528v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f30529e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30530i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30531o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30532p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f30533q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30534r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f30535s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30536t;

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
                return new f(h4Var, arrayList, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(f.class.getClassLoader()), parcel.readString(), c4.CREATOR.createFromParcel(parcel), (un.v) parcel.readParcelable(f.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(h4 currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, c4 id2, un.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f30529e = currentPart;
            this.f30530i = uploadingIds;
            this.f30531o = parts;
            this.f30532p = i10;
            this.f30533q = n1Var;
            this.f30534r = str;
            this.f30535s = id2;
            this.f30536t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30533q;
        }

        @Override // jo.n1
        public String f() {
            return this.f30534r;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30529e;
        }

        @Override // jo.n1
        public int j() {
            return this.f30532p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30531o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30530i;
        }

        public final c4 q() {
            return this.f30535s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f30529e, i10);
            List<Parcelable> list = this.f30530i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30531o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30532p);
            dest.writeParcelable(this.f30533q, i10);
            dest.writeString(this.f30534r);
            this.f30535s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f30536t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30537e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30538i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30539o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f30540p;

        /* renamed from: q  reason: collision with root package name */
        private final List f30541q;

        /* renamed from: r  reason: collision with root package name */
        private final int f30542r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f30543s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30544t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30545u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f30546v;

        /* renamed from: w  reason: collision with root package name */
        private final String f30547w;

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
                un.v vVar = (un.v) parcel.readParcelable(g.class.getClassLoader());
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

        public /* synthetic */ g(h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, un.v vVar, String str, boolean z10, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, list2, i10, n1Var, vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10, str2);
        }

        public static /* synthetic */ g x(g gVar, h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, un.v vVar, String str, boolean z10, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = gVar.f30537e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f30538i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f30539o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f30540p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f30541q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f30542r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f30543s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f30544t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f30545u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f30546v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f30547w;
            }
            boolean z11 = z10;
            String str3 = str2;
            un.v vVar2 = vVar;
            String str4 = str;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return gVar.w(aVar, list, qVar2, d0Var, list3, i12, n1Var2, vVar2, str4, z11, str3);
        }

        public final String A() {
            return this.f30545u;
        }

        public boolean B() {
            return this.f30546v;
        }

        @Override // jo.n1
        public void d() {
            super.d();
            for (c0 c0Var : u().i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30543s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f30537e, gVar.f30537e) && Intrinsics.areEqual(this.f30538i, gVar.f30538i) && Intrinsics.areEqual(this.f30539o, gVar.f30539o) && Intrinsics.areEqual(this.f30540p, gVar.f30540p) && Intrinsics.areEqual(this.f30541q, gVar.f30541q) && this.f30542r == gVar.f30542r && Intrinsics.areEqual(this.f30543s, gVar.f30543s) && Intrinsics.areEqual(this.f30544t, gVar.f30544t) && Intrinsics.areEqual(this.f30545u, gVar.f30545u) && this.f30546v == gVar.f30546v && Intrinsics.areEqual(this.f30547w, gVar.f30547w)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30547w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f30537e.hashCode() * 31) + this.f30538i.hashCode()) * 31) + this.f30539o.hashCode()) * 31) + this.f30540p.hashCode()) * 31) + this.f30541q.hashCode()) * 31) + Integer.hashCode(this.f30542r)) * 31;
            n1 n1Var = this.f30543s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f30544t.hashCode()) * 31;
            String str = this.f30545u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f30546v)) * 31;
            String str2 = this.f30547w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30542r;
        }

        @Override // jo.n1
        public List l() {
            return this.f30541q;
        }

        @Override // jo.n1
        public List o() {
            return this.f30538i;
        }

        @Override // jo.n1.h
        public un.v q() {
            return this.f30544t;
        }

        @Override // jo.n1.h
        public q r() {
            return this.f30539o;
        }

        @Override // jo.n1
        /* renamed from: t */
        public h4.a h() {
            return this.f30537e;
        }

        public String toString() {
            h4.a aVar = this.f30537e;
            List list = this.f30538i;
            q qVar = this.f30539o;
            d0 d0Var = this.f30540p;
            List list2 = this.f30541q;
            int i10 = this.f30542r;
            n1 n1Var = this.f30543s;
            un.v vVar = this.f30544t;
            String str = this.f30545u;
            boolean z10 = this.f30546v;
            String str2 = this.f30547w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        @Override // jo.n1.h
        public d0 u() {
            return this.f30540p;
        }

        @Override // jo.n1.h
        public h v(boolean z10) {
            return x(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public final g w(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, un.v cameraProperties, String str, boolean z10, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new g(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, cameraProperties, str, z10, str2);
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30537e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30538i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30539o, i10);
            dest.writeParcelable(this.f30540p, i10);
            List<Parcelable> list2 = this.f30541q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30542r);
            dest.writeParcelable(this.f30543s, i10);
            dest.writeParcelable(this.f30544t, i10);
            dest.writeString(this.f30545u);
            dest.writeInt(this.f30546v ? 1 : 0);
            dest.writeString(this.f30547w);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, un.v cameraProperties, String str, boolean z10, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f30537e = currentPart;
            this.f30538i = uploadingIds;
            this.f30539o = captureConfig;
            this.f30540p = idForReview;
            this.f30541q = parts;
            this.f30542r = i10;
            this.f30543s = n1Var;
            this.f30544t = cameraProperties;
            this.f30545u = str;
            this.f30546v = z10;
            this.f30547w = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class h extends n1 {
        public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract un.v q();

        public abstract q r();

        public abstract h4.a t();

        public abstract d0 u();

        public abstract h v(boolean z10);

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
            return g.x((g) this, null, null, null, null, null, 0, null, null, error, false, null, 1791, null);
        }
        if (this instanceof i) {
            return i.x((i) this, null, null, null, null, null, null, 0, null, null, error, false, null, 3583, null);
        }
        if (this instanceof c) {
            return c.r((c) this, null, null, null, 0, null, null, false, null, error, SetSpanOperation.SPAN_MAX_PRIORITY, null);
        }
        if (!(this instanceof j)) {
            return this;
        }
        return j.r((j) this, null, null, null, null, 0, null, null, error, 127, null);
    }

    public void d() {
        for (d0 d0Var : o()) {
            for (c0 c0Var : d0Var.i2()) {
                new File(c0Var.a()).delete();
            }
        }
    }

    public abstract n1 e();

    public abstract String f();

    public abstract h4 h();

    public final boolean i() {
        return this.f30477d;
    }

    public abstract int j();

    public abstract List l();

    public abstract List o();

    public final void p(boolean z10) {
        this.f30477d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30548e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30549i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30550o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f30551p;

        /* renamed from: q  reason: collision with root package name */
        private final String f30552q;

        /* renamed from: r  reason: collision with root package name */
        private final List f30553r;

        /* renamed from: s  reason: collision with root package name */
        private final int f30554s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f30555t;

        /* renamed from: u  reason: collision with root package name */
        private final un.v f30556u;

        /* renamed from: v  reason: collision with root package name */
        private final String f30557v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f30558w;

        /* renamed from: x  reason: collision with root package name */
        private final String f30559x;

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
                un.v vVar = (un.v) parcel.readParcelable(i.class.getClassLoader());
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

        public /* synthetic */ i(h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, un.v vVar, String str2, boolean z10, String str3, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, str, list2, i10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new un.v(null, null, null, 0, 15, null) : vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10, str3);
        }

        public static /* synthetic */ i x(i iVar, h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, un.v vVar, String str2, boolean z10, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = iVar.f30548e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f30549i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f30550o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f30551p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f30552q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f30553r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f30554s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f30555t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f30556u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f30557v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f30558w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f30559x;
            }
            boolean z11 = z10;
            String str4 = str3;
            un.v vVar2 = vVar;
            String str5 = str2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            String str6 = str;
            List list3 = list2;
            return iVar.w(aVar, list, qVar, d0Var, str6, list3, i12, n1Var2, vVar2, str5, z11, str4);
        }

        public final String A() {
            return this.f30557v;
        }

        public final String B() {
            return this.f30552q;
        }

        public boolean D() {
            return this.f30558w;
        }

        @Override // jo.n1
        public void d() {
            super.d();
            for (c0 c0Var : u().i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30555t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f30548e, iVar.f30548e) && Intrinsics.areEqual(this.f30549i, iVar.f30549i) && Intrinsics.areEqual(this.f30550o, iVar.f30550o) && Intrinsics.areEqual(this.f30551p, iVar.f30551p) && Intrinsics.areEqual(this.f30552q, iVar.f30552q) && Intrinsics.areEqual(this.f30553r, iVar.f30553r) && this.f30554s == iVar.f30554s && Intrinsics.areEqual(this.f30555t, iVar.f30555t) && Intrinsics.areEqual(this.f30556u, iVar.f30556u) && Intrinsics.areEqual(this.f30557v, iVar.f30557v) && this.f30558w == iVar.f30558w && Intrinsics.areEqual(this.f30559x, iVar.f30559x)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30559x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f30548e.hashCode() * 31) + this.f30549i.hashCode()) * 31) + this.f30550o.hashCode()) * 31) + this.f30551p.hashCode()) * 31;
            String str = this.f30552q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f30553r.hashCode()) * 31) + Integer.hashCode(this.f30554s)) * 31;
            n1 n1Var = this.f30555t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f30556u.hashCode()) * 31;
            String str2 = this.f30557v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f30558w)) * 31;
            String str3 = this.f30559x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30554s;
        }

        @Override // jo.n1
        public List l() {
            return this.f30553r;
        }

        @Override // jo.n1
        public List o() {
            return this.f30549i;
        }

        @Override // jo.n1.h
        public un.v q() {
            return this.f30556u;
        }

        @Override // jo.n1.h
        public q r() {
            return this.f30550o;
        }

        @Override // jo.n1
        /* renamed from: t */
        public h4.a h() {
            return this.f30548e;
        }

        public String toString() {
            h4.a aVar = this.f30548e;
            List list = this.f30549i;
            q qVar = this.f30550o;
            d0 d0Var = this.f30551p;
            String str = this.f30552q;
            List list2 = this.f30553r;
            int i10 = this.f30554s;
            n1 n1Var = this.f30555t;
            un.v vVar = this.f30556u;
            String str2 = this.f30557v;
            boolean z10 = this.f30558w;
            String str3 = this.f30559x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        @Override // jo.n1.h
        public d0 u() {
            return this.f30551p;
        }

        @Override // jo.n1.h
        public h v(boolean z10) {
            return x(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public final i w(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, un.v cameraProperties, String str2, boolean z10, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new i(currentPart, uploadingIds, captureConfig, idForReview, str, parts, i10, n1Var, cameraProperties, str2, z10, str3);
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30548e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30549i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30550o, i10);
            dest.writeParcelable(this.f30551p, i10);
            dest.writeString(this.f30552q);
            List<Parcelable> list2 = this.f30553r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30554s);
            dest.writeParcelable(this.f30555t, i10);
            dest.writeParcelable(this.f30556u, i10);
            dest.writeString(this.f30557v);
            dest.writeInt(this.f30558w ? 1 : 0);
            dest.writeString(this.f30559x);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, un.v cameraProperties, String str2, boolean z10, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f30548e = currentPart;
            this.f30549i = uploadingIds;
            this.f30550o = captureConfig;
            this.f30551p = idForReview;
            this.f30552q = str;
            this.f30553r = parts;
            this.f30554s = i10;
            this.f30555t = n1Var;
            this.f30556u = cameraProperties;
            this.f30557v = str2;
            this.f30558w = z10;
            this.f30559x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f30568e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30569i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f30570o;

        /* renamed from: p  reason: collision with root package name */
        private final List f30571p;

        /* renamed from: q  reason: collision with root package name */
        private final int f30572q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f30573r;

        /* renamed from: s  reason: collision with root package name */
        private final String f30574s;

        /* renamed from: t  reason: collision with root package name */
        private final qo.c f30575t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30576u;

        /* renamed from: v  reason: collision with root package name */
        private final un.v f30577v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                qo.c createFromParcel;
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
                    createFromParcel = qo.c.CREATOR.createFromParcel(parcel);
                }
                return new k(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, createFromParcel, parcel.readString(), (un.v) parcel.readParcelable(k.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        public /* synthetic */ k(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, qo.c cVar, String str2, un.v vVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f30070o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30573r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f30568e, kVar.f30568e) && Intrinsics.areEqual(this.f30569i, kVar.f30569i) && Intrinsics.areEqual(this.f30570o, kVar.f30570o) && Intrinsics.areEqual(this.f30571p, kVar.f30571p) && this.f30572q == kVar.f30572q && Intrinsics.areEqual(this.f30573r, kVar.f30573r) && Intrinsics.areEqual(this.f30574s, kVar.f30574s) && Intrinsics.areEqual(this.f30575t, kVar.f30575t) && Intrinsics.areEqual(this.f30576u, kVar.f30576u) && Intrinsics.areEqual(this.f30577v, kVar.f30577v)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30574s;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30570o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f30568e.hashCode() * 31) + this.f30569i.hashCode()) * 31) + this.f30570o.hashCode()) * 31) + this.f30571p.hashCode()) * 31) + Integer.hashCode(this.f30572q)) * 31;
            n1 n1Var = this.f30573r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f30574s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            qo.c cVar = this.f30575t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f30576u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f30577v.hashCode();
        }

        @Override // jo.n1
        public int j() {
            return this.f30572q;
        }

        @Override // jo.n1
        public List l() {
            return this.f30571p;
        }

        @Override // jo.n1
        public List o() {
            return this.f30569i;
        }

        public final un.v q() {
            return this.f30577v;
        }

        public final qo.c r() {
            return this.f30575t;
        }

        public final String t() {
            return this.f30576u;
        }

        public String toString() {
            c4 c4Var = this.f30568e;
            List list = this.f30569i;
            h4 h4Var = this.f30570o;
            List list2 = this.f30571p;
            int i10 = this.f30572q;
            n1 n1Var = this.f30573r;
            String str = this.f30574s;
            qo.c cVar = this.f30575t;
            String str2 = this.f30576u;
            un.v vVar = this.f30577v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30568e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30569i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30570o, i10);
            List<Parcelable> list2 = this.f30571p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30572q);
            dest.writeParcelable(this.f30573r, i10);
            dest.writeString(this.f30574s);
            qo.c cVar = this.f30575t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30576u);
            dest.writeParcelable(this.f30577v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, qo.c cVar, String str2, un.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f30568e = id2;
            this.f30569i = uploadingIds;
            this.f30570o = currentPart;
            this.f30571p = parts;
            this.f30572q = i10;
            this.f30573r = n1Var;
            this.f30574s = str;
            this.f30575t = cVar;
            this.f30576u = str2;
            this.f30577v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements jo.d, jo.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30578e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30579i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30580o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f30581p;

        /* renamed from: q  reason: collision with root package name */
        private final List f30582q;

        /* renamed from: r  reason: collision with root package name */
        private final int f30583r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f30584s;

        /* renamed from: t  reason: collision with root package name */
        private final ro.t f30585t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30586u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f30587v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f30588w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f30589x;

        /* renamed from: y  reason: collision with root package name */
        private final String f30590y;

        /* renamed from: z  reason: collision with root package name */
        private final po.d f30591z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                ro.t valueOf;
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
                    valueOf = ro.t.valueOf(parcel.readString());
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
                return new l(createFromParcel, arrayList, qVar, valueOf2, arrayList2, readInt3, n1Var, valueOf, readString, th2, z10, z11, parcel.readString(), (po.d) parcel.readParcelable(l.class.getClassLoader()), null, 16384, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, ro.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, po.d dVar, Function0 function0, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, aVar2, list2, i10, n1Var, tVar, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? true : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? true : z11, str2, (i11 & 8192) != 0 ? null : dVar, (i11 & 16384) != 0 ? new Function0() { // from class: jo.o1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r10;
                    r10 = n1.l.r();
                    return r10;
                }
            } : function0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit r() {
            return Unit.f32056a;
        }

        public static /* synthetic */ l u(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, ro.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, po.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.t((i11 & 1) != 0 ? lVar.f30578e : aVar, (i11 & 2) != 0 ? lVar.f30579i : list, (i11 & 4) != 0 ? lVar.f30580o : qVar, (i11 & 8) != 0 ? lVar.f30581p : aVar2, (i11 & 16) != 0 ? lVar.f30582q : list2, (i11 & 32) != 0 ? lVar.f30583r : i10, (i11 & 64) != 0 ? lVar.f30584s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f30585t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f30586u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f30587v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f30588w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f30589x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f30590y : str2, (i11 & 8192) != 0 ? lVar.f30591z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        @Override // jo.n1
        /* renamed from: A */
        public h4.a h() {
            return this.f30578e;
        }

        public final Throwable B() {
            return this.f30587v;
        }

        public final po.d D() {
            return this.f30591z;
        }

        public final f5.b.a E() {
            return this.f30581p;
        }

        public final Function0 F() {
            return this.A;
        }

        public final String G() {
            return this.f30586u;
        }

        public final ro.t H() {
            return this.f30585t;
        }

        @Override // jo.b
        public n1 a(boolean z10) {
            return u(this, null, null, null, null, null, 0, null, null, null, null, false, z10, null, null, null, 30719, null);
        }

        @Override // jo.d
        public n1 b(boolean z10) {
            return u(this, null, null, null, null, null, 0, null, null, null, null, z10, false, null, null, null, 31743, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30584s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f30578e, lVar.f30578e) && Intrinsics.areEqual(this.f30579i, lVar.f30579i) && Intrinsics.areEqual(this.f30580o, lVar.f30580o) && this.f30581p == lVar.f30581p && Intrinsics.areEqual(this.f30582q, lVar.f30582q) && this.f30583r == lVar.f30583r && Intrinsics.areEqual(this.f30584s, lVar.f30584s) && this.f30585t == lVar.f30585t && Intrinsics.areEqual(this.f30586u, lVar.f30586u) && Intrinsics.areEqual(this.f30587v, lVar.f30587v) && this.f30588w == lVar.f30588w && this.f30589x == lVar.f30589x && Intrinsics.areEqual(this.f30590y, lVar.f30590y) && Intrinsics.areEqual(this.f30591z, lVar.f30591z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30590y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f30578e.hashCode() * 31) + this.f30579i.hashCode()) * 31) + this.f30580o.hashCode()) * 31) + this.f30581p.hashCode()) * 31) + this.f30582q.hashCode()) * 31) + Integer.hashCode(this.f30583r)) * 31;
            n1 n1Var = this.f30584s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            ro.t tVar = this.f30585t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f30586u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f30587v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f30588w)) * 31) + Boolean.hashCode(this.f30589x)) * 31;
            String str2 = this.f30590y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            po.d dVar = this.f30591z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // jo.n1
        public int j() {
            return this.f30583r;
        }

        @Override // jo.n1
        public List l() {
            return this.f30582q;
        }

        @Override // jo.n1
        public List o() {
            return this.f30579i;
        }

        public final l t(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, ro.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, po.d dVar, Function0 webRtcConnectionEstablished) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            return new l(currentPart, uploadingIds, captureConfig, manualCapture, parts, i10, n1Var, tVar, str, th2, z10, z11, str2, dVar, webRtcConnectionEstablished);
        }

        public String toString() {
            h4.a aVar = this.f30578e;
            List list = this.f30579i;
            q qVar = this.f30580o;
            f5.b.a aVar2 = this.f30581p;
            List list2 = this.f30582q;
            int i10 = this.f30583r;
            n1 n1Var = this.f30584s;
            ro.t tVar = this.f30585t;
            String str = this.f30586u;
            Throwable th2 = this.f30587v;
            boolean z10 = this.f30588w;
            boolean z11 = this.f30589x;
            String str2 = this.f30590y;
            po.d dVar = this.f30591z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public final q v() {
            return this.f30580o;
        }

        public boolean w() {
            return this.f30589x;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30578e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30579i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30580o, i10);
            dest.writeString(this.f30581p.name());
            List<Parcelable> list2 = this.f30582q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30583r);
            dest.writeParcelable(this.f30584s, i10);
            ro.t tVar = this.f30585t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f30586u);
            dest.writeSerializable(this.f30587v);
            dest.writeInt(this.f30588w ? 1 : 0);
            dest.writeInt(this.f30589x ? 1 : 0);
            dest.writeString(this.f30590y);
            dest.writeParcelable(this.f30591z, i10);
        }

        public boolean x() {
            return this.f30588w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, ro.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, po.d dVar, Function0 webRtcConnectionEstablished) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            this.f30578e = currentPart;
            this.f30579i = uploadingIds;
            this.f30580o = captureConfig;
            this.f30581p = manualCapture;
            this.f30582q = parts;
            this.f30583r = i10;
            this.f30584s = n1Var;
            this.f30585t = tVar;
            this.f30586u = str;
            this.f30587v = th2;
            this.f30588w = z10;
            this.f30589x = z11;
            this.f30590y = str2;
            this.f30591z = dVar;
            this.A = webRtcConnectionEstablished;
        }
    }

    private n1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends n1 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0431a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30478e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30479i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30480o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30481p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f30482q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30483r;

        /* renamed from: s  reason: collision with root package name */
        private final List f30484s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30485t;

        /* renamed from: u  reason: collision with root package name */
        private final List f30486u;

        /* renamed from: v  reason: collision with root package name */
        private final String f30487v;

        /* renamed from: w  reason: collision with root package name */
        private final String f30488w;

        /* renamed from: x  reason: collision with root package name */
        private final jo.c f30489x;

        /* renamed from: jo.n1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0431a implements Parcelable.Creator {
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
                un.v vVar = (un.v) parcel.readParcelable(a.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new a(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString(), jo.c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, un.v vVar, List list4, String str2, String str3, jo.c cVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f30070o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30482q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f30478e, aVar.f30478e) && Intrinsics.areEqual(this.f30479i, aVar.f30479i) && Intrinsics.areEqual(this.f30480o, aVar.f30480o) && this.f30481p == aVar.f30481p && Intrinsics.areEqual(this.f30482q, aVar.f30482q) && Intrinsics.areEqual(this.f30483r, aVar.f30483r) && Intrinsics.areEqual(this.f30484s, aVar.f30484s) && Intrinsics.areEqual(this.f30485t, aVar.f30485t) && Intrinsics.areEqual(this.f30486u, aVar.f30486u) && Intrinsics.areEqual(this.f30487v, aVar.f30487v) && Intrinsics.areEqual(this.f30488w, aVar.f30488w) && this.f30489x == aVar.f30489x) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30483r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f30478e.hashCode() * 31) + this.f30479i.hashCode()) * 31) + this.f30480o.hashCode()) * 31) + Integer.hashCode(this.f30481p)) * 31;
            n1 n1Var = this.f30482q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f30483r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f30484s.hashCode()) * 31) + this.f30485t.hashCode()) * 31) + this.f30486u.hashCode()) * 31;
            String str2 = this.f30487v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f30488w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f30489x.hashCode();
        }

        @Override // jo.n1
        public int j() {
            return this.f30481p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30480o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30479i;
        }

        public final List q() {
            return this.f30484s;
        }

        @Override // jo.n1
        /* renamed from: r */
        public h4.a h() {
            return this.f30478e;
        }

        public final jo.c t() {
            return this.f30489x;
        }

        public String toString() {
            h4.a aVar = this.f30478e;
            List list = this.f30479i;
            List list2 = this.f30480o;
            int i10 = this.f30481p;
            n1 n1Var = this.f30482q;
            String str = this.f30483r;
            List list3 = this.f30484s;
            un.v vVar = this.f30485t;
            List list4 = this.f30486u;
            String str2 = this.f30487v;
            String str3 = this.f30488w;
            jo.c cVar = this.f30489x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        public final List u() {
            return this.f30486u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30478e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30479i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30480o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30481p);
            dest.writeParcelable(this.f30482q, i10);
            dest.writeString(this.f30483r);
            List<c0> list3 = this.f30484s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f30485t, i10);
            List<e4> list4 = this.f30486u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30487v);
            dest.writeString(this.f30488w);
            dest.writeString(this.f30489x.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, un.v cameraProperties, List idConfigsForCountry, String str2, String str3, jo.c errorType) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            Intrinsics.checkNotNullParameter(errorType, "errorType");
            this.f30478e = currentPart;
            this.f30479i = uploadingIds;
            this.f30480o = parts;
            this.f30481p = i10;
            this.f30482q = n1Var;
            this.f30483r = str;
            this.f30484s = captureFrames;
            this.f30485t = cameraProperties;
            this.f30486u = idConfigsForCountry;
            this.f30487v = str2;
            this.f30488w = str3;
            this.f30489x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30501e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30502i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30503o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30504p;

        /* renamed from: q  reason: collision with root package name */
        private final String f30505q;

        /* renamed from: r  reason: collision with root package name */
        private final q f30506r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f30507s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f30508t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30509u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f30070o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c r(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f30501e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f30502i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f30503o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f30504p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f30505q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f30506r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f30507s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f30508t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f30509u;
            }
            n1 n1Var2 = n1Var;
            String str3 = str2;
            q qVar2 = qVar;
            boolean z11 = z10;
            String str4 = str;
            List list3 = list2;
            return cVar.q(aVar, list, list3, i10, str4, qVar2, z11, n1Var2, str3);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30508t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f30501e, cVar.f30501e) && Intrinsics.areEqual(this.f30502i, cVar.f30502i) && Intrinsics.areEqual(this.f30503o, cVar.f30503o) && this.f30504p == cVar.f30504p && Intrinsics.areEqual(this.f30505q, cVar.f30505q) && Intrinsics.areEqual(this.f30506r, cVar.f30506r) && this.f30507s == cVar.f30507s && Intrinsics.areEqual(this.f30508t, cVar.f30508t) && Intrinsics.areEqual(this.f30509u, cVar.f30509u)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30505q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f30501e.hashCode() * 31) + this.f30502i.hashCode()) * 31) + this.f30503o.hashCode()) * 31) + Integer.hashCode(this.f30504p)) * 31;
            String str = this.f30505q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f30506r.hashCode()) * 31) + Boolean.hashCode(this.f30507s)) * 31;
            n1 n1Var = this.f30508t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f30509u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30504p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30503o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30502i;
        }

        public final c q(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q t() {
            return this.f30506r;
        }

        public String toString() {
            h4.a aVar = this.f30501e;
            List list = this.f30502i;
            List list2 = this.f30503o;
            int i10 = this.f30504p;
            String str = this.f30505q;
            q qVar = this.f30506r;
            boolean z10 = this.f30507s;
            n1 n1Var = this.f30508t;
            String str2 = this.f30509u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        public final boolean u() {
            return this.f30507s;
        }

        @Override // jo.n1
        /* renamed from: v */
        public h4.a h() {
            return this.f30501e;
        }

        public final String w() {
            return this.f30509u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30501e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30502i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30503o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30504p);
            dest.writeString(this.f30505q);
            dest.writeParcelable(this.f30506r, i10);
            dest.writeInt(this.f30507s ? 1 : 0);
            dest.writeParcelable(this.f30508t, i10);
            dest.writeString(this.f30509u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f30501e = currentPart;
            this.f30502i = uploadingIds;
            this.f30503o = parts;
            this.f30504p = i10;
            this.f30505q = str;
            this.f30506r = captureConfig;
            this.f30507s = z10;
            this.f30508t = n1Var;
            this.f30509u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f30560e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30561i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30562o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f30563p;

        /* renamed from: q  reason: collision with root package name */
        private final int f30564q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30565r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f30566s;

        /* renamed from: t  reason: collision with root package name */
        private final String f30567t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f30070o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j r(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f30560e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f30561i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f30562o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f30563p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f30564q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f30565r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f30566s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f30567t;
            }
            c4 c4Var2 = c4Var;
            String str3 = str2;
            int i12 = i10;
            String str4 = str;
            return jVar.q(h4Var, list, list2, n1Var, i12, str4, c4Var2, str3);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30563p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f30560e, jVar.f30560e) && Intrinsics.areEqual(this.f30561i, jVar.f30561i) && Intrinsics.areEqual(this.f30562o, jVar.f30562o) && Intrinsics.areEqual(this.f30563p, jVar.f30563p) && this.f30564q == jVar.f30564q && Intrinsics.areEqual(this.f30565r, jVar.f30565r) && Intrinsics.areEqual(this.f30566s, jVar.f30566s) && Intrinsics.areEqual(this.f30567t, jVar.f30567t)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30565r;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30560e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f30560e.hashCode() * 31) + this.f30561i.hashCode()) * 31) + this.f30562o.hashCode()) * 31;
            n1 n1Var = this.f30563p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f30564q)) * 31;
            String str = this.f30565r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f30566s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f30567t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30564q;
        }

        @Override // jo.n1
        public List l() {
            return this.f30562o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30561i;
        }

        public final j q(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String t() {
            return this.f30567t;
        }

        public String toString() {
            h4 h4Var = this.f30560e;
            List list = this.f30561i;
            List list2 = this.f30562o;
            n1 n1Var = this.f30563p;
            int i10 = this.f30564q;
            String str = this.f30565r;
            c4 c4Var = this.f30566s;
            String str2 = this.f30567t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f30560e, i10);
            List<Parcelable> list = this.f30561i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30562o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f30563p, i10);
            dest.writeInt(this.f30564q);
            dest.writeString(this.f30565r);
            c4 c4Var = this.f30566s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30567t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f30560e = currentPart;
            this.f30561i = uploadingIds;
            this.f30562o = parts;
            this.f30563p = n1Var;
            this.f30564q = i10;
            this.f30565r = str;
            this.f30566s = c4Var;
            this.f30567t = str2;
        }
    }
}
