package eo;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import eo.c4;
import eo.d0;
import eo.f5;
import eo.h4;
import eo.n1;
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
    private boolean f22121d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f22134e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22135i;

        /* renamed from: o  reason: collision with root package name */
        private final List f22136o;

        /* renamed from: p  reason: collision with root package name */
        private final int f22137p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f22138q;

        /* renamed from: r  reason: collision with root package name */
        private final String f22139r;

        /* renamed from: s  reason: collision with root package name */
        private final List f22140s;

        /* renamed from: t  reason: collision with root package name */
        private final pn.v f22141t;

        /* renamed from: u  reason: collision with root package name */
        private final List f22142u;

        /* renamed from: v  reason: collision with root package name */
        private final String f22143v;

        /* renamed from: w  reason: collision with root package name */
        private final String f22144w;

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
                pn.v vVar = (pn.v) parcel.readParcelable(b.class.getClassLoader());
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
        public b(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, pn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            this.f22134e = currentPart;
            this.f22135i = uploadingIds;
            this.f22136o = parts;
            this.f22137p = i10;
            this.f22138q = n1Var;
            this.f22139r = str;
            this.f22140s = captureFrames;
            this.f22141t = cameraProperties;
            this.f22142u = idConfigsForCountry;
            this.f22143v = str2;
            this.f22144w = str3;
        }

        public static /* synthetic */ b p(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, pn.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f22134e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f22135i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f22136o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f22137p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f22138q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f22139r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f22140s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f22141t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f22142u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f22143v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f22144w;
            }
            String str4 = str2;
            String str5 = str3;
            pn.v vVar2 = vVar;
            List list5 = list4;
            String str6 = str;
            List list6 = list3;
            n1 n1Var2 = n1Var;
            List list7 = list2;
            return bVar.o(aVar, list, list7, i10, n1Var2, str6, list6, vVar2, list5, str4, str5);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22138q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f22134e, bVar.f22134e) && Intrinsics.areEqual(this.f22135i, bVar.f22135i) && Intrinsics.areEqual(this.f22136o, bVar.f22136o) && this.f22137p == bVar.f22137p && Intrinsics.areEqual(this.f22138q, bVar.f22138q) && Intrinsics.areEqual(this.f22139r, bVar.f22139r) && Intrinsics.areEqual(this.f22140s, bVar.f22140s) && Intrinsics.areEqual(this.f22141t, bVar.f22141t) && Intrinsics.areEqual(this.f22142u, bVar.f22142u) && Intrinsics.areEqual(this.f22143v, bVar.f22143v) && Intrinsics.areEqual(this.f22144w, bVar.f22144w)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22139r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f22134e.hashCode() * 31) + this.f22135i.hashCode()) * 31) + this.f22136o.hashCode()) * 31) + Integer.hashCode(this.f22137p)) * 31;
            n1 n1Var = this.f22138q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f22139r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f22140s.hashCode()) * 31) + this.f22141t.hashCode()) * 31) + this.f22142u.hashCode()) * 31;
            String str2 = this.f22143v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f22144w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // eo.n1
        public int j() {
            return this.f22137p;
        }

        @Override // eo.n1
        public List k() {
            return this.f22136o;
        }

        @Override // eo.n1
        public List m() {
            return this.f22135i;
        }

        public final b o(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, pn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            return new b(currentPart, uploadingIds, parts, i10, n1Var, str, captureFrames, cameraProperties, idConfigsForCountry, str2, str3);
        }

        public final pn.v q() {
            return this.f22141t;
        }

        @Override // eo.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f22134e;
        }

        public final List s() {
            return this.f22142u;
        }

        public final String t() {
            return this.f22143v;
        }

        public String toString() {
            h4.a aVar = this.f22134e;
            List list = this.f22135i;
            List list2 = this.f22136o;
            int i10 = this.f22137p;
            n1 n1Var = this.f22138q;
            String str = this.f22139r;
            List list3 = this.f22140s;
            pn.v vVar = this.f22141t;
            List list4 = this.f22142u;
            String str2 = this.f22143v;
            String str3 = this.f22144w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        public final String u() {
            return this.f22144w;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22134e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22135i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f22136o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22137p);
            dest.writeParcelable(this.f22138q, i10);
            dest.writeString(this.f22139r);
            List<c0> list3 = this.f22140s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f22141t, i10);
            List<e4> list4 = this.f22142u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f22143v);
            dest.writeString(this.f22144w);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f22154e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22155i;

        /* renamed from: o  reason: collision with root package name */
        private final q f22156o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f22157p;

        /* renamed from: q  reason: collision with root package name */
        private final List f22158q;

        /* renamed from: r  reason: collision with root package name */
        private final int f22159r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f22160s;

        /* renamed from: t  reason: collision with root package name */
        private final String f22161t;

        /* renamed from: u  reason: collision with root package name */
        private final ko.d f22162u;

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
                return new d(createFromParcel, arrayList, qVar, createFromParcel2, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (ko.d) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, ko.d dVar) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f22154e = currentPart;
            this.f22155i = uploadingIds;
            this.f22156o = captureConfig;
            this.f22157p = idForReview;
            this.f22158q = parts;
            this.f22159r = i10;
            this.f22160s = n1Var;
            this.f22161t = str;
            this.f22162u = dVar;
        }

        public static /* synthetic */ d p(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, ko.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f22154e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f22155i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f22156o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f22157p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f22158q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f22159r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f22160s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f22161t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f22162u;
            }
            String str2 = str;
            ko.d dVar3 = dVar2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return dVar.o(aVar, list, qVar2, bVar, list3, i12, n1Var2, str2, dVar3);
        }

        @Override // eo.n1
        public void d() {
            super.d();
            for (c0 c0Var : this.f22157p.i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22160s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f22154e, dVar.f22154e) && Intrinsics.areEqual(this.f22155i, dVar.f22155i) && Intrinsics.areEqual(this.f22156o, dVar.f22156o) && Intrinsics.areEqual(this.f22157p, dVar.f22157p) && Intrinsics.areEqual(this.f22158q, dVar.f22158q) && this.f22159r == dVar.f22159r && Intrinsics.areEqual(this.f22160s, dVar.f22160s) && Intrinsics.areEqual(this.f22161t, dVar.f22161t) && Intrinsics.areEqual(this.f22162u, dVar.f22162u)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22161t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f22154e.hashCode() * 31) + this.f22155i.hashCode()) * 31) + this.f22156o.hashCode()) * 31) + this.f22157p.hashCode()) * 31) + this.f22158q.hashCode()) * 31) + Integer.hashCode(this.f22159r)) * 31;
            n1 n1Var = this.f22160s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f22161t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ko.d dVar = this.f22162u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // eo.n1
        public int j() {
            return this.f22159r;
        }

        @Override // eo.n1
        public List k() {
            return this.f22158q;
        }

        @Override // eo.n1
        public List m() {
            return this.f22155i;
        }

        public final d o(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, ko.d dVar) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new d(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, str, dVar);
        }

        public final q q() {
            return this.f22156o;
        }

        @Override // eo.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f22154e;
        }

        public final ko.d s() {
            return this.f22162u;
        }

        public final d0.b t() {
            return this.f22157p;
        }

        public String toString() {
            h4.a aVar = this.f22154e;
            List list = this.f22155i;
            q qVar = this.f22156o;
            d0.b bVar = this.f22157p;
            List list2 = this.f22158q;
            int i10 = this.f22159r;
            n1 n1Var = this.f22160s;
            String str = this.f22161t;
            ko.d dVar = this.f22162u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22154e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22155i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f22156o, i10);
            this.f22157p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f22158q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22159r);
            dest.writeParcelable(this.f22160s, i10);
            dest.writeString(this.f22161t);
            dest.writeParcelable(this.f22162u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f22163e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22164i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f22165o;

        /* renamed from: p  reason: collision with root package name */
        private final List f22166p;

        /* renamed from: q  reason: collision with root package name */
        private final int f22167q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f22168r;

        /* renamed from: s  reason: collision with root package name */
        private final String f22169s;

        /* renamed from: t  reason: collision with root package name */
        private final lo.c f22170t;

        /* renamed from: u  reason: collision with root package name */
        private final long f22171u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f22172v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                lo.c createFromParcel;
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
                    createFromParcel = lo.c.CREATOR.createFromParcel(parcel);
                }
                lo.c cVar = createFromParcel;
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

        public /* synthetic */ e(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, lo.c cVar, long j10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 3000L : j10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
        }

        public static /* synthetic */ e p(e eVar, c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, lo.c cVar, long j10, boolean z10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                c4Var = eVar.f22163e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f22164i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f22165o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f22166p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f22167q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f22168r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f22169s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f22170t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f22171u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f22172v;
            }
            boolean z11 = z10;
            long j11 = j10;
            String str2 = str;
            lo.c cVar2 = cVar;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            return eVar.o(c4Var, list, h4Var, list2, i12, n1Var2, str2, cVar2, j11, z11);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22168r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f22163e, eVar.f22163e) && Intrinsics.areEqual(this.f22164i, eVar.f22164i) && Intrinsics.areEqual(this.f22165o, eVar.f22165o) && Intrinsics.areEqual(this.f22166p, eVar.f22166p) && this.f22167q == eVar.f22167q && Intrinsics.areEqual(this.f22168r, eVar.f22168r) && Intrinsics.areEqual(this.f22169s, eVar.f22169s) && Intrinsics.areEqual(this.f22170t, eVar.f22170t) && this.f22171u == eVar.f22171u && this.f22172v == eVar.f22172v) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22169s;
        }

        @Override // eo.n1
        public h4 g() {
            return this.f22165o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f22163e.hashCode() * 31) + this.f22164i.hashCode()) * 31) + this.f22165o.hashCode()) * 31) + this.f22166p.hashCode()) * 31) + Integer.hashCode(this.f22167q)) * 31;
            n1 n1Var = this.f22168r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f22169s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            lo.c cVar = this.f22170t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f22171u)) * 31) + Boolean.hashCode(this.f22172v);
        }

        @Override // eo.n1
        public int j() {
            return this.f22167q;
        }

        @Override // eo.n1
        public List k() {
            return this.f22166p;
        }

        @Override // eo.n1
        public List m() {
            return this.f22164i;
        }

        public final e o(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, lo.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 q() {
            return this.f22163e;
        }

        public final long r() {
            return this.f22171u;
        }

        public final boolean s() {
            return this.f22172v;
        }

        public String toString() {
            c4 c4Var = this.f22163e;
            List list = this.f22164i;
            h4 h4Var = this.f22165o;
            List list2 = this.f22166p;
            int i10 = this.f22167q;
            n1 n1Var = this.f22168r;
            String str = this.f22169s;
            lo.c cVar = this.f22170t;
            long j10 = this.f22171u;
            boolean z10 = this.f22172v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22163e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22164i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f22165o, i10);
            List<Parcelable> list2 = this.f22166p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22167q);
            dest.writeParcelable(this.f22168r, i10);
            dest.writeString(this.f22169s);
            lo.c cVar = this.f22170t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f22171u);
            dest.writeInt(this.f22172v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, lo.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f22163e = id2;
            this.f22164i = uploadingIds;
            this.f22165o = currentPart;
            this.f22166p = parts;
            this.f22167q = i10;
            this.f22168r = n1Var;
            this.f22169s = str;
            this.f22170t = cVar;
            this.f22171u = j10;
            this.f22172v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f22173e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22174i;

        /* renamed from: o  reason: collision with root package name */
        private final List f22175o;

        /* renamed from: p  reason: collision with root package name */
        private final int f22176p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f22177q;

        /* renamed from: r  reason: collision with root package name */
        private final String f22178r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f22179s;

        /* renamed from: t  reason: collision with root package name */
        private final pn.v f22180t;

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
                return new f(h4Var, arrayList, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(f.class.getClassLoader()), parcel.readString(), c4.CREATOR.createFromParcel(parcel), (pn.v) parcel.readParcelable(f.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(h4 currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, c4 id2, pn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f22173e = currentPart;
            this.f22174i = uploadingIds;
            this.f22175o = parts;
            this.f22176p = i10;
            this.f22177q = n1Var;
            this.f22178r = str;
            this.f22179s = id2;
            this.f22180t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22177q;
        }

        @Override // eo.n1
        public String f() {
            return this.f22178r;
        }

        @Override // eo.n1
        public h4 g() {
            return this.f22173e;
        }

        @Override // eo.n1
        public int j() {
            return this.f22176p;
        }

        @Override // eo.n1
        public List k() {
            return this.f22175o;
        }

        @Override // eo.n1
        public List m() {
            return this.f22174i;
        }

        public final c4 o() {
            return this.f22179s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f22173e, i10);
            List<Parcelable> list = this.f22174i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f22175o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22176p);
            dest.writeParcelable(this.f22177q, i10);
            dest.writeString(this.f22178r);
            this.f22179s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f22180t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f22181e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22182i;

        /* renamed from: o  reason: collision with root package name */
        private final q f22183o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f22184p;

        /* renamed from: q  reason: collision with root package name */
        private final List f22185q;

        /* renamed from: r  reason: collision with root package name */
        private final int f22186r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f22187s;

        /* renamed from: t  reason: collision with root package name */
        private final pn.v f22188t;

        /* renamed from: u  reason: collision with root package name */
        private final String f22189u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f22190v;

        /* renamed from: w  reason: collision with root package name */
        private final String f22191w;

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
                pn.v vVar = (pn.v) parcel.readParcelable(g.class.getClassLoader());
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

        public /* synthetic */ g(h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, pn.v vVar, String str, boolean z10, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, list2, i10, n1Var, vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10, str2);
        }

        public static /* synthetic */ g u(g gVar, h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, pn.v vVar, String str, boolean z10, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = gVar.f22181e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f22182i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f22183o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f22184p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f22185q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f22186r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f22187s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f22188t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f22189u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f22190v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f22191w;
            }
            boolean z11 = z10;
            String str3 = str2;
            pn.v vVar2 = vVar;
            String str4 = str;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return gVar.t(aVar, list, qVar2, d0Var, list3, i12, n1Var2, vVar2, str4, z11, str3);
        }

        @Override // eo.n1
        public void d() {
            super.d();
            for (c0 c0Var : r().i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22187s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f22181e, gVar.f22181e) && Intrinsics.areEqual(this.f22182i, gVar.f22182i) && Intrinsics.areEqual(this.f22183o, gVar.f22183o) && Intrinsics.areEqual(this.f22184p, gVar.f22184p) && Intrinsics.areEqual(this.f22185q, gVar.f22185q) && this.f22186r == gVar.f22186r && Intrinsics.areEqual(this.f22187s, gVar.f22187s) && Intrinsics.areEqual(this.f22188t, gVar.f22188t) && Intrinsics.areEqual(this.f22189u, gVar.f22189u) && this.f22190v == gVar.f22190v && Intrinsics.areEqual(this.f22191w, gVar.f22191w)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22191w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f22181e.hashCode() * 31) + this.f22182i.hashCode()) * 31) + this.f22183o.hashCode()) * 31) + this.f22184p.hashCode()) * 31) + this.f22185q.hashCode()) * 31) + Integer.hashCode(this.f22186r)) * 31;
            n1 n1Var = this.f22187s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f22188t.hashCode()) * 31;
            String str = this.f22189u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f22190v)) * 31;
            String str2 = this.f22191w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // eo.n1
        public int j() {
            return this.f22186r;
        }

        @Override // eo.n1
        public List k() {
            return this.f22185q;
        }

        @Override // eo.n1
        public List m() {
            return this.f22182i;
        }

        @Override // eo.n1.h
        public pn.v o() {
            return this.f22188t;
        }

        @Override // eo.n1.h
        public q p() {
            return this.f22183o;
        }

        @Override // eo.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f22181e;
        }

        @Override // eo.n1.h
        public d0 r() {
            return this.f22184p;
        }

        @Override // eo.n1.h
        public h s(boolean z10) {
            return u(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public final g t(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, pn.v cameraProperties, String str, boolean z10, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new g(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, cameraProperties, str, z10, str2);
        }

        public String toString() {
            h4.a aVar = this.f22181e;
            List list = this.f22182i;
            q qVar = this.f22183o;
            d0 d0Var = this.f22184p;
            List list2 = this.f22185q;
            int i10 = this.f22186r;
            n1 n1Var = this.f22187s;
            pn.v vVar = this.f22188t;
            String str = this.f22189u;
            boolean z10 = this.f22190v;
            String str2 = this.f22191w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        public final String v() {
            return this.f22189u;
        }

        public boolean w() {
            return this.f22190v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22181e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22182i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f22183o, i10);
            dest.writeParcelable(this.f22184p, i10);
            List<Parcelable> list2 = this.f22185q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22186r);
            dest.writeParcelable(this.f22187s, i10);
            dest.writeParcelable(this.f22188t, i10);
            dest.writeString(this.f22189u);
            dest.writeInt(this.f22190v ? 1 : 0);
            dest.writeString(this.f22191w);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, pn.v cameraProperties, String str, boolean z10, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f22181e = currentPart;
            this.f22182i = uploadingIds;
            this.f22183o = captureConfig;
            this.f22184p = idForReview;
            this.f22185q = parts;
            this.f22186r = i10;
            this.f22187s = n1Var;
            this.f22188t = cameraProperties;
            this.f22189u = str;
            this.f22190v = z10;
            this.f22191w = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class h extends n1 {
        public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract pn.v o();

        public abstract q p();

        public abstract h4.a q();

        public abstract d0 r();

        public abstract h s(boolean z10);

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
            return g.u((g) this, null, null, null, null, null, 0, null, null, error, false, null, 1791, null);
        }
        if (this instanceof i) {
            return i.u((i) this, null, null, null, null, null, null, 0, null, null, error, false, null, 3583, null);
        }
        if (this instanceof c) {
            return c.p((c) this, null, null, null, 0, null, null, false, null, error, SetSpanOperation.SPAN_MAX_PRIORITY, null);
        }
        if (!(this instanceof j)) {
            return this;
        }
        return j.p((j) this, null, null, null, null, 0, null, null, error, 127, null);
    }

    public void d() {
        for (d0 d0Var : m()) {
            for (c0 c0Var : d0Var.i2()) {
                new File(c0Var.a()).delete();
            }
        }
    }

    public abstract n1 e();

    public abstract String f();

    public abstract h4 g();

    public final boolean i() {
        return this.f22121d;
    }

    public abstract int j();

    public abstract List k();

    public abstract List m();

    public final void n(boolean z10) {
        this.f22121d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f22192e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22193i;

        /* renamed from: o  reason: collision with root package name */
        private final q f22194o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f22195p;

        /* renamed from: q  reason: collision with root package name */
        private final String f22196q;

        /* renamed from: r  reason: collision with root package name */
        private final List f22197r;

        /* renamed from: s  reason: collision with root package name */
        private final int f22198s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f22199t;

        /* renamed from: u  reason: collision with root package name */
        private final pn.v f22200u;

        /* renamed from: v  reason: collision with root package name */
        private final String f22201v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f22202w;

        /* renamed from: x  reason: collision with root package name */
        private final String f22203x;

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
                pn.v vVar = (pn.v) parcel.readParcelable(i.class.getClassLoader());
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

        public /* synthetic */ i(h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, pn.v vVar, String str2, boolean z10, String str3, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, str, list2, i10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new pn.v(null, null, null, 0, 15, null) : vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10, str3);
        }

        public static /* synthetic */ i u(i iVar, h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, pn.v vVar, String str2, boolean z10, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = iVar.f22192e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f22193i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f22194o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f22195p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f22196q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f22197r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f22198s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f22199t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f22200u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f22201v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f22202w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f22203x;
            }
            boolean z11 = z10;
            String str4 = str3;
            pn.v vVar2 = vVar;
            String str5 = str2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            String str6 = str;
            List list3 = list2;
            return iVar.t(aVar, list, qVar, d0Var, str6, list3, i12, n1Var2, vVar2, str5, z11, str4);
        }

        @Override // eo.n1
        public void d() {
            super.d();
            for (c0 c0Var : r().i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22199t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f22192e, iVar.f22192e) && Intrinsics.areEqual(this.f22193i, iVar.f22193i) && Intrinsics.areEqual(this.f22194o, iVar.f22194o) && Intrinsics.areEqual(this.f22195p, iVar.f22195p) && Intrinsics.areEqual(this.f22196q, iVar.f22196q) && Intrinsics.areEqual(this.f22197r, iVar.f22197r) && this.f22198s == iVar.f22198s && Intrinsics.areEqual(this.f22199t, iVar.f22199t) && Intrinsics.areEqual(this.f22200u, iVar.f22200u) && Intrinsics.areEqual(this.f22201v, iVar.f22201v) && this.f22202w == iVar.f22202w && Intrinsics.areEqual(this.f22203x, iVar.f22203x)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22203x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f22192e.hashCode() * 31) + this.f22193i.hashCode()) * 31) + this.f22194o.hashCode()) * 31) + this.f22195p.hashCode()) * 31;
            String str = this.f22196q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f22197r.hashCode()) * 31) + Integer.hashCode(this.f22198s)) * 31;
            n1 n1Var = this.f22199t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f22200u.hashCode()) * 31;
            String str2 = this.f22201v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f22202w)) * 31;
            String str3 = this.f22203x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // eo.n1
        public int j() {
            return this.f22198s;
        }

        @Override // eo.n1
        public List k() {
            return this.f22197r;
        }

        @Override // eo.n1
        public List m() {
            return this.f22193i;
        }

        @Override // eo.n1.h
        public pn.v o() {
            return this.f22200u;
        }

        @Override // eo.n1.h
        public q p() {
            return this.f22194o;
        }

        @Override // eo.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f22192e;
        }

        @Override // eo.n1.h
        public d0 r() {
            return this.f22195p;
        }

        @Override // eo.n1.h
        public h s(boolean z10) {
            return u(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public final i t(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, pn.v cameraProperties, String str2, boolean z10, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new i(currentPart, uploadingIds, captureConfig, idForReview, str, parts, i10, n1Var, cameraProperties, str2, z10, str3);
        }

        public String toString() {
            h4.a aVar = this.f22192e;
            List list = this.f22193i;
            q qVar = this.f22194o;
            d0 d0Var = this.f22195p;
            String str = this.f22196q;
            List list2 = this.f22197r;
            int i10 = this.f22198s;
            n1 n1Var = this.f22199t;
            pn.v vVar = this.f22200u;
            String str2 = this.f22201v;
            boolean z10 = this.f22202w;
            String str3 = this.f22203x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        public final String v() {
            return this.f22201v;
        }

        public final String w() {
            return this.f22196q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22192e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22193i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f22194o, i10);
            dest.writeParcelable(this.f22195p, i10);
            dest.writeString(this.f22196q);
            List<Parcelable> list2 = this.f22197r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22198s);
            dest.writeParcelable(this.f22199t, i10);
            dest.writeParcelable(this.f22200u, i10);
            dest.writeString(this.f22201v);
            dest.writeInt(this.f22202w ? 1 : 0);
            dest.writeString(this.f22203x);
        }

        public boolean y() {
            return this.f22202w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, pn.v cameraProperties, String str2, boolean z10, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f22192e = currentPart;
            this.f22193i = uploadingIds;
            this.f22194o = captureConfig;
            this.f22195p = idForReview;
            this.f22196q = str;
            this.f22197r = parts;
            this.f22198s = i10;
            this.f22199t = n1Var;
            this.f22200u = cameraProperties;
            this.f22201v = str2;
            this.f22202w = z10;
            this.f22203x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f22212e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22213i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f22214o;

        /* renamed from: p  reason: collision with root package name */
        private final List f22215p;

        /* renamed from: q  reason: collision with root package name */
        private final int f22216q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f22217r;

        /* renamed from: s  reason: collision with root package name */
        private final String f22218s;

        /* renamed from: t  reason: collision with root package name */
        private final lo.c f22219t;

        /* renamed from: u  reason: collision with root package name */
        private final String f22220u;

        /* renamed from: v  reason: collision with root package name */
        private final pn.v f22221v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                lo.c createFromParcel;
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
                    createFromParcel = lo.c.CREATOR.createFromParcel(parcel);
                }
                return new k(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, createFromParcel, parcel.readString(), (pn.v) parcel.readParcelable(k.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        public /* synthetic */ k(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, lo.c cVar, String str2, pn.v vVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f21714o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22217r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f22212e, kVar.f22212e) && Intrinsics.areEqual(this.f22213i, kVar.f22213i) && Intrinsics.areEqual(this.f22214o, kVar.f22214o) && Intrinsics.areEqual(this.f22215p, kVar.f22215p) && this.f22216q == kVar.f22216q && Intrinsics.areEqual(this.f22217r, kVar.f22217r) && Intrinsics.areEqual(this.f22218s, kVar.f22218s) && Intrinsics.areEqual(this.f22219t, kVar.f22219t) && Intrinsics.areEqual(this.f22220u, kVar.f22220u) && Intrinsics.areEqual(this.f22221v, kVar.f22221v)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22218s;
        }

        @Override // eo.n1
        public h4 g() {
            return this.f22214o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f22212e.hashCode() * 31) + this.f22213i.hashCode()) * 31) + this.f22214o.hashCode()) * 31) + this.f22215p.hashCode()) * 31) + Integer.hashCode(this.f22216q)) * 31;
            n1 n1Var = this.f22217r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f22218s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            lo.c cVar = this.f22219t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f22220u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f22221v.hashCode();
        }

        @Override // eo.n1
        public int j() {
            return this.f22216q;
        }

        @Override // eo.n1
        public List k() {
            return this.f22215p;
        }

        @Override // eo.n1
        public List m() {
            return this.f22213i;
        }

        public final pn.v o() {
            return this.f22221v;
        }

        public final lo.c p() {
            return this.f22219t;
        }

        public final String q() {
            return this.f22220u;
        }

        public String toString() {
            c4 c4Var = this.f22212e;
            List list = this.f22213i;
            h4 h4Var = this.f22214o;
            List list2 = this.f22215p;
            int i10 = this.f22216q;
            n1 n1Var = this.f22217r;
            String str = this.f22218s;
            lo.c cVar = this.f22219t;
            String str2 = this.f22220u;
            pn.v vVar = this.f22221v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22212e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22213i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f22214o, i10);
            List<Parcelable> list2 = this.f22215p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22216q);
            dest.writeParcelable(this.f22217r, i10);
            dest.writeString(this.f22218s);
            lo.c cVar = this.f22219t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f22220u);
            dest.writeParcelable(this.f22221v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, lo.c cVar, String str2, pn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f22212e = id2;
            this.f22213i = uploadingIds;
            this.f22214o = currentPart;
            this.f22215p = parts;
            this.f22216q = i10;
            this.f22217r = n1Var;
            this.f22218s = str;
            this.f22219t = cVar;
            this.f22220u = str2;
            this.f22221v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements eo.d, eo.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f22222e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22223i;

        /* renamed from: o  reason: collision with root package name */
        private final q f22224o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f22225p;

        /* renamed from: q  reason: collision with root package name */
        private final List f22226q;

        /* renamed from: r  reason: collision with root package name */
        private final int f22227r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f22228s;

        /* renamed from: t  reason: collision with root package name */
        private final mo.t f22229t;

        /* renamed from: u  reason: collision with root package name */
        private final String f22230u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f22231v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f22232w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f22233x;

        /* renamed from: y  reason: collision with root package name */
        private final String f22234y;

        /* renamed from: z  reason: collision with root package name */
        private final ko.d f22235z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                mo.t valueOf;
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
                    valueOf = mo.t.valueOf(parcel.readString());
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
                return new l(createFromParcel, arrayList, qVar, valueOf2, arrayList2, readInt3, n1Var, valueOf, readString, th2, z10, z11, parcel.readString(), (ko.d) parcel.readParcelable(l.class.getClassLoader()), null, 16384, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, mo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ko.d dVar, Function0 function0, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, aVar2, list2, i10, n1Var, tVar, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? true : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? true : z11, str2, (i11 & 8192) != 0 ? null : dVar, (i11 & 16384) != 0 ? new Function0() { // from class: eo.o1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p10;
                    p10 = n1.l.p();
                    return p10;
                }
            } : function0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit p() {
            return Unit.f32464a;
        }

        public static /* synthetic */ l r(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, mo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ko.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.q((i11 & 1) != 0 ? lVar.f22222e : aVar, (i11 & 2) != 0 ? lVar.f22223i : list, (i11 & 4) != 0 ? lVar.f22224o : qVar, (i11 & 8) != 0 ? lVar.f22225p : aVar2, (i11 & 16) != 0 ? lVar.f22226q : list2, (i11 & 32) != 0 ? lVar.f22227r : i10, (i11 & 64) != 0 ? lVar.f22228s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f22229t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f22230u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f22231v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f22232w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f22233x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f22234y : str2, (i11 & 8192) != 0 ? lVar.f22235z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        public final Function0 A() {
            return this.A;
        }

        public final String C() {
            return this.f22230u;
        }

        public final mo.t D() {
            return this.f22229t;
        }

        @Override // eo.b
        public n1 a(boolean z10) {
            return r(this, null, null, null, null, null, 0, null, null, null, null, false, z10, null, null, null, 30719, null);
        }

        @Override // eo.d
        public n1 b(boolean z10) {
            return r(this, null, null, null, null, null, 0, null, null, null, null, z10, false, null, null, null, 31743, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22228s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f22222e, lVar.f22222e) && Intrinsics.areEqual(this.f22223i, lVar.f22223i) && Intrinsics.areEqual(this.f22224o, lVar.f22224o) && this.f22225p == lVar.f22225p && Intrinsics.areEqual(this.f22226q, lVar.f22226q) && this.f22227r == lVar.f22227r && Intrinsics.areEqual(this.f22228s, lVar.f22228s) && this.f22229t == lVar.f22229t && Intrinsics.areEqual(this.f22230u, lVar.f22230u) && Intrinsics.areEqual(this.f22231v, lVar.f22231v) && this.f22232w == lVar.f22232w && this.f22233x == lVar.f22233x && Intrinsics.areEqual(this.f22234y, lVar.f22234y) && Intrinsics.areEqual(this.f22235z, lVar.f22235z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22234y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f22222e.hashCode() * 31) + this.f22223i.hashCode()) * 31) + this.f22224o.hashCode()) * 31) + this.f22225p.hashCode()) * 31) + this.f22226q.hashCode()) * 31) + Integer.hashCode(this.f22227r)) * 31;
            n1 n1Var = this.f22228s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            mo.t tVar = this.f22229t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f22230u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f22231v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f22232w)) * 31) + Boolean.hashCode(this.f22233x)) * 31;
            String str2 = this.f22234y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            ko.d dVar = this.f22235z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // eo.n1
        public int j() {
            return this.f22227r;
        }

        @Override // eo.n1
        public List k() {
            return this.f22226q;
        }

        @Override // eo.n1
        public List m() {
            return this.f22223i;
        }

        public final l q(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, mo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ko.d dVar, Function0 webRtcConnectionEstablished) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            return new l(currentPart, uploadingIds, captureConfig, manualCapture, parts, i10, n1Var, tVar, str, th2, z10, z11, str2, dVar, webRtcConnectionEstablished);
        }

        public final q s() {
            return this.f22224o;
        }

        public boolean t() {
            return this.f22233x;
        }

        public String toString() {
            h4.a aVar = this.f22222e;
            List list = this.f22223i;
            q qVar = this.f22224o;
            f5.b.a aVar2 = this.f22225p;
            List list2 = this.f22226q;
            int i10 = this.f22227r;
            n1 n1Var = this.f22228s;
            mo.t tVar = this.f22229t;
            String str = this.f22230u;
            Throwable th2 = this.f22231v;
            boolean z10 = this.f22232w;
            boolean z11 = this.f22233x;
            String str2 = this.f22234y;
            ko.d dVar = this.f22235z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public boolean u() {
            return this.f22232w;
        }

        @Override // eo.n1
        /* renamed from: v */
        public h4.a g() {
            return this.f22222e;
        }

        public final Throwable w() {
            return this.f22231v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22222e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22223i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f22224o, i10);
            dest.writeString(this.f22225p.name());
            List<Parcelable> list2 = this.f22226q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22227r);
            dest.writeParcelable(this.f22228s, i10);
            mo.t tVar = this.f22229t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f22230u);
            dest.writeSerializable(this.f22231v);
            dest.writeInt(this.f22232w ? 1 : 0);
            dest.writeInt(this.f22233x ? 1 : 0);
            dest.writeString(this.f22234y);
            dest.writeParcelable(this.f22235z, i10);
        }

        public final ko.d y() {
            return this.f22235z;
        }

        public final f5.b.a z() {
            return this.f22225p;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, mo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ko.d dVar, Function0 webRtcConnectionEstablished) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            this.f22222e = currentPart;
            this.f22223i = uploadingIds;
            this.f22224o = captureConfig;
            this.f22225p = manualCapture;
            this.f22226q = parts;
            this.f22227r = i10;
            this.f22228s = n1Var;
            this.f22229t = tVar;
            this.f22230u = str;
            this.f22231v = th2;
            this.f22232w = z10;
            this.f22233x = z11;
            this.f22234y = str2;
            this.f22235z = dVar;
            this.A = webRtcConnectionEstablished;
        }
    }

    private n1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends n1 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0296a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f22122e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22123i;

        /* renamed from: o  reason: collision with root package name */
        private final List f22124o;

        /* renamed from: p  reason: collision with root package name */
        private final int f22125p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f22126q;

        /* renamed from: r  reason: collision with root package name */
        private final String f22127r;

        /* renamed from: s  reason: collision with root package name */
        private final List f22128s;

        /* renamed from: t  reason: collision with root package name */
        private final pn.v f22129t;

        /* renamed from: u  reason: collision with root package name */
        private final List f22130u;

        /* renamed from: v  reason: collision with root package name */
        private final String f22131v;

        /* renamed from: w  reason: collision with root package name */
        private final String f22132w;

        /* renamed from: x  reason: collision with root package name */
        private final eo.c f22133x;

        /* renamed from: eo.n1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0296a implements Parcelable.Creator {
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
                pn.v vVar = (pn.v) parcel.readParcelable(a.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new a(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString(), eo.c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, pn.v vVar, List list4, String str2, String str3, eo.c cVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f21714o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22126q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f22122e, aVar.f22122e) && Intrinsics.areEqual(this.f22123i, aVar.f22123i) && Intrinsics.areEqual(this.f22124o, aVar.f22124o) && this.f22125p == aVar.f22125p && Intrinsics.areEqual(this.f22126q, aVar.f22126q) && Intrinsics.areEqual(this.f22127r, aVar.f22127r) && Intrinsics.areEqual(this.f22128s, aVar.f22128s) && Intrinsics.areEqual(this.f22129t, aVar.f22129t) && Intrinsics.areEqual(this.f22130u, aVar.f22130u) && Intrinsics.areEqual(this.f22131v, aVar.f22131v) && Intrinsics.areEqual(this.f22132w, aVar.f22132w) && this.f22133x == aVar.f22133x) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22127r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f22122e.hashCode() * 31) + this.f22123i.hashCode()) * 31) + this.f22124o.hashCode()) * 31) + Integer.hashCode(this.f22125p)) * 31;
            n1 n1Var = this.f22126q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f22127r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f22128s.hashCode()) * 31) + this.f22129t.hashCode()) * 31) + this.f22130u.hashCode()) * 31;
            String str2 = this.f22131v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f22132w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f22133x.hashCode();
        }

        @Override // eo.n1
        public int j() {
            return this.f22125p;
        }

        @Override // eo.n1
        public List k() {
            return this.f22124o;
        }

        @Override // eo.n1
        public List m() {
            return this.f22123i;
        }

        public final List o() {
            return this.f22128s;
        }

        @Override // eo.n1
        /* renamed from: p */
        public h4.a g() {
            return this.f22122e;
        }

        public final eo.c q() {
            return this.f22133x;
        }

        public final List r() {
            return this.f22130u;
        }

        public String toString() {
            h4.a aVar = this.f22122e;
            List list = this.f22123i;
            List list2 = this.f22124o;
            int i10 = this.f22125p;
            n1 n1Var = this.f22126q;
            String str = this.f22127r;
            List list3 = this.f22128s;
            pn.v vVar = this.f22129t;
            List list4 = this.f22130u;
            String str2 = this.f22131v;
            String str3 = this.f22132w;
            eo.c cVar = this.f22133x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22122e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22123i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f22124o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22125p);
            dest.writeParcelable(this.f22126q, i10);
            dest.writeString(this.f22127r);
            List<c0> list3 = this.f22128s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f22129t, i10);
            List<e4> list4 = this.f22130u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f22131v);
            dest.writeString(this.f22132w);
            dest.writeString(this.f22133x.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, pn.v cameraProperties, List idConfigsForCountry, String str2, String str3, eo.c errorType) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            Intrinsics.checkNotNullParameter(errorType, "errorType");
            this.f22122e = currentPart;
            this.f22123i = uploadingIds;
            this.f22124o = parts;
            this.f22125p = i10;
            this.f22126q = n1Var;
            this.f22127r = str;
            this.f22128s = captureFrames;
            this.f22129t = cameraProperties;
            this.f22130u = idConfigsForCountry;
            this.f22131v = str2;
            this.f22132w = str3;
            this.f22133x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f22145e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22146i;

        /* renamed from: o  reason: collision with root package name */
        private final List f22147o;

        /* renamed from: p  reason: collision with root package name */
        private final int f22148p;

        /* renamed from: q  reason: collision with root package name */
        private final String f22149q;

        /* renamed from: r  reason: collision with root package name */
        private final q f22150r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f22151s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f22152t;

        /* renamed from: u  reason: collision with root package name */
        private final String f22153u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f21714o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c p(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f22145e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f22146i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f22147o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f22148p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f22149q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f22150r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f22151s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f22152t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f22153u;
            }
            n1 n1Var2 = n1Var;
            String str3 = str2;
            q qVar2 = qVar;
            boolean z11 = z10;
            String str4 = str;
            List list3 = list2;
            return cVar.o(aVar, list, list3, i10, str4, qVar2, z11, n1Var2, str3);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22152t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f22145e, cVar.f22145e) && Intrinsics.areEqual(this.f22146i, cVar.f22146i) && Intrinsics.areEqual(this.f22147o, cVar.f22147o) && this.f22148p == cVar.f22148p && Intrinsics.areEqual(this.f22149q, cVar.f22149q) && Intrinsics.areEqual(this.f22150r, cVar.f22150r) && this.f22151s == cVar.f22151s && Intrinsics.areEqual(this.f22152t, cVar.f22152t) && Intrinsics.areEqual(this.f22153u, cVar.f22153u)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22149q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f22145e.hashCode() * 31) + this.f22146i.hashCode()) * 31) + this.f22147o.hashCode()) * 31) + Integer.hashCode(this.f22148p)) * 31;
            String str = this.f22149q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f22150r.hashCode()) * 31) + Boolean.hashCode(this.f22151s)) * 31;
            n1 n1Var = this.f22152t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f22153u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // eo.n1
        public int j() {
            return this.f22148p;
        }

        @Override // eo.n1
        public List k() {
            return this.f22147o;
        }

        @Override // eo.n1
        public List m() {
            return this.f22146i;
        }

        public final c o(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q q() {
            return this.f22150r;
        }

        public final boolean r() {
            return this.f22151s;
        }

        @Override // eo.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f22145e;
        }

        public final String t() {
            return this.f22153u;
        }

        public String toString() {
            h4.a aVar = this.f22145e;
            List list = this.f22146i;
            List list2 = this.f22147o;
            int i10 = this.f22148p;
            String str = this.f22149q;
            q qVar = this.f22150r;
            boolean z10 = this.f22151s;
            n1 n1Var = this.f22152t;
            String str2 = this.f22153u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f22145e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f22146i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f22147o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f22148p);
            dest.writeString(this.f22149q);
            dest.writeParcelable(this.f22150r, i10);
            dest.writeInt(this.f22151s ? 1 : 0);
            dest.writeParcelable(this.f22152t, i10);
            dest.writeString(this.f22153u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f22145e = currentPart;
            this.f22146i = uploadingIds;
            this.f22147o = parts;
            this.f22148p = i10;
            this.f22149q = str;
            this.f22150r = captureConfig;
            this.f22151s = z10;
            this.f22152t = n1Var;
            this.f22153u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f22204e;

        /* renamed from: i  reason: collision with root package name */
        private final List f22205i;

        /* renamed from: o  reason: collision with root package name */
        private final List f22206o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f22207p;

        /* renamed from: q  reason: collision with root package name */
        private final int f22208q;

        /* renamed from: r  reason: collision with root package name */
        private final String f22209r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f22210s;

        /* renamed from: t  reason: collision with root package name */
        private final String f22211t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f21714o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j p(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f22204e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f22205i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f22206o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f22207p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f22208q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f22209r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f22210s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f22211t;
            }
            c4 c4Var2 = c4Var;
            String str3 = str2;
            int i12 = i10;
            String str4 = str;
            return jVar.o(h4Var, list, list2, n1Var, i12, str4, c4Var2, str3);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // eo.n1
        public n1 e() {
            return this.f22207p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f22204e, jVar.f22204e) && Intrinsics.areEqual(this.f22205i, jVar.f22205i) && Intrinsics.areEqual(this.f22206o, jVar.f22206o) && Intrinsics.areEqual(this.f22207p, jVar.f22207p) && this.f22208q == jVar.f22208q && Intrinsics.areEqual(this.f22209r, jVar.f22209r) && Intrinsics.areEqual(this.f22210s, jVar.f22210s) && Intrinsics.areEqual(this.f22211t, jVar.f22211t)) {
                return true;
            }
            return false;
        }

        @Override // eo.n1
        public String f() {
            return this.f22209r;
        }

        @Override // eo.n1
        public h4 g() {
            return this.f22204e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f22204e.hashCode() * 31) + this.f22205i.hashCode()) * 31) + this.f22206o.hashCode()) * 31;
            n1 n1Var = this.f22207p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f22208q)) * 31;
            String str = this.f22209r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f22210s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f22211t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // eo.n1
        public int j() {
            return this.f22208q;
        }

        @Override // eo.n1
        public List k() {
            return this.f22206o;
        }

        @Override // eo.n1
        public List m() {
            return this.f22205i;
        }

        public final j o(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String q() {
            return this.f22211t;
        }

        public String toString() {
            h4 h4Var = this.f22204e;
            List list = this.f22205i;
            List list2 = this.f22206o;
            n1 n1Var = this.f22207p;
            int i10 = this.f22208q;
            String str = this.f22209r;
            c4 c4Var = this.f22210s;
            String str2 = this.f22211t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f22204e, i10);
            List<Parcelable> list = this.f22205i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f22206o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f22207p, i10);
            dest.writeInt(this.f22208q);
            dest.writeString(this.f22209r);
            c4 c4Var = this.f22210s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f22211t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f22204e = currentPart;
            this.f22205i = uploadingIds;
            this.f22206o = parts;
            this.f22207p = n1Var;
            this.f22208q = i10;
            this.f22209r = str;
            this.f22210s = c4Var;
            this.f22211t = str2;
        }
    }
}
