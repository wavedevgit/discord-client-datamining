package ko;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import ko.c4;
import ko.d0;
import ko.f5;
import ko.h4;
import ko.n1;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f31428d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f31441e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31442i;

        /* renamed from: o  reason: collision with root package name */
        private final List f31443o;

        /* renamed from: p  reason: collision with root package name */
        private final int f31444p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f31445q;

        /* renamed from: r  reason: collision with root package name */
        private final String f31446r;

        /* renamed from: s  reason: collision with root package name */
        private final List f31447s;

        /* renamed from: t  reason: collision with root package name */
        private final vn.v f31448t;

        /* renamed from: u  reason: collision with root package name */
        private final List f31449u;

        /* renamed from: v  reason: collision with root package name */
        private final String f31450v;

        /* renamed from: w  reason: collision with root package name */
        private final String f31451w;

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
                vn.v vVar = (vn.v) parcel.readParcelable(b.class.getClassLoader());
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
        public b(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, vn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            this.f31441e = currentPart;
            this.f31442i = uploadingIds;
            this.f31443o = parts;
            this.f31444p = i10;
            this.f31445q = n1Var;
            this.f31446r = str;
            this.f31447s = captureFrames;
            this.f31448t = cameraProperties;
            this.f31449u = idConfigsForCountry;
            this.f31450v = str2;
            this.f31451w = str3;
        }

        public static /* synthetic */ b r(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, vn.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f31441e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f31442i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f31443o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f31444p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f31445q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f31446r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f31447s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f31448t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f31449u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f31450v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f31451w;
            }
            String str4 = str2;
            String str5 = str3;
            vn.v vVar2 = vVar;
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

        @Override // ko.n1
        public n1 e() {
            return this.f31445q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f31441e, bVar.f31441e) && Intrinsics.areEqual(this.f31442i, bVar.f31442i) && Intrinsics.areEqual(this.f31443o, bVar.f31443o) && this.f31444p == bVar.f31444p && Intrinsics.areEqual(this.f31445q, bVar.f31445q) && Intrinsics.areEqual(this.f31446r, bVar.f31446r) && Intrinsics.areEqual(this.f31447s, bVar.f31447s) && Intrinsics.areEqual(this.f31448t, bVar.f31448t) && Intrinsics.areEqual(this.f31449u, bVar.f31449u) && Intrinsics.areEqual(this.f31450v, bVar.f31450v) && Intrinsics.areEqual(this.f31451w, bVar.f31451w)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31446r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f31441e.hashCode() * 31) + this.f31442i.hashCode()) * 31) + this.f31443o.hashCode()) * 31) + Integer.hashCode(this.f31444p)) * 31;
            n1 n1Var = this.f31445q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f31446r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f31447s.hashCode()) * 31) + this.f31448t.hashCode()) * 31) + this.f31449u.hashCode()) * 31;
            String str2 = this.f31450v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f31451w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // ko.n1
        public int j() {
            return this.f31444p;
        }

        @Override // ko.n1
        public List l() {
            return this.f31443o;
        }

        @Override // ko.n1
        public List o() {
            return this.f31442i;
        }

        public final b q(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, vn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            return new b(currentPart, uploadingIds, parts, i10, n1Var, str, captureFrames, cameraProperties, idConfigsForCountry, str2, str3);
        }

        public final vn.v t() {
            return this.f31448t;
        }

        public String toString() {
            h4.a aVar = this.f31441e;
            List list = this.f31442i;
            List list2 = this.f31443o;
            int i10 = this.f31444p;
            n1 n1Var = this.f31445q;
            String str = this.f31446r;
            List list3 = this.f31447s;
            vn.v vVar = this.f31448t;
            List list4 = this.f31449u;
            String str2 = this.f31450v;
            String str3 = this.f31451w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        @Override // ko.n1
        /* renamed from: u */
        public h4.a h() {
            return this.f31441e;
        }

        public final List v() {
            return this.f31449u;
        }

        public final String w() {
            return this.f31450v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31441e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31442i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f31443o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31444p);
            dest.writeParcelable(this.f31445q, i10);
            dest.writeString(this.f31446r);
            List<c0> list3 = this.f31447s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f31448t, i10);
            List<e4> list4 = this.f31449u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f31450v);
            dest.writeString(this.f31451w);
        }

        public final String x() {
            return this.f31451w;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f31461e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31462i;

        /* renamed from: o  reason: collision with root package name */
        private final q f31463o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f31464p;

        /* renamed from: q  reason: collision with root package name */
        private final List f31465q;

        /* renamed from: r  reason: collision with root package name */
        private final int f31466r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f31467s;

        /* renamed from: t  reason: collision with root package name */
        private final String f31468t;

        /* renamed from: u  reason: collision with root package name */
        private final qo.d f31469u;

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
                return new d(createFromParcel, arrayList, qVar, createFromParcel2, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (qo.d) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, qo.d dVar) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f31461e = currentPart;
            this.f31462i = uploadingIds;
            this.f31463o = captureConfig;
            this.f31464p = idForReview;
            this.f31465q = parts;
            this.f31466r = i10;
            this.f31467s = n1Var;
            this.f31468t = str;
            this.f31469u = dVar;
        }

        public static /* synthetic */ d r(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, qo.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f31461e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f31462i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f31463o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f31464p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f31465q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f31466r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f31467s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f31468t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f31469u;
            }
            String str2 = str;
            qo.d dVar3 = dVar2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return dVar.q(aVar, list, qVar2, bVar, list3, i12, n1Var2, str2, dVar3);
        }

        @Override // ko.n1
        public void d() {
            super.d();
            for (c0 c0Var : this.f31464p.h2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31467s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f31461e, dVar.f31461e) && Intrinsics.areEqual(this.f31462i, dVar.f31462i) && Intrinsics.areEqual(this.f31463o, dVar.f31463o) && Intrinsics.areEqual(this.f31464p, dVar.f31464p) && Intrinsics.areEqual(this.f31465q, dVar.f31465q) && this.f31466r == dVar.f31466r && Intrinsics.areEqual(this.f31467s, dVar.f31467s) && Intrinsics.areEqual(this.f31468t, dVar.f31468t) && Intrinsics.areEqual(this.f31469u, dVar.f31469u)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31468t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f31461e.hashCode() * 31) + this.f31462i.hashCode()) * 31) + this.f31463o.hashCode()) * 31) + this.f31464p.hashCode()) * 31) + this.f31465q.hashCode()) * 31) + Integer.hashCode(this.f31466r)) * 31;
            n1 n1Var = this.f31467s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f31468t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            qo.d dVar = this.f31469u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // ko.n1
        public int j() {
            return this.f31466r;
        }

        @Override // ko.n1
        public List l() {
            return this.f31465q;
        }

        @Override // ko.n1
        public List o() {
            return this.f31462i;
        }

        public final d q(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, qo.d dVar) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new d(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, str, dVar);
        }

        public final q t() {
            return this.f31463o;
        }

        public String toString() {
            h4.a aVar = this.f31461e;
            List list = this.f31462i;
            q qVar = this.f31463o;
            d0.b bVar = this.f31464p;
            List list2 = this.f31465q;
            int i10 = this.f31466r;
            n1 n1Var = this.f31467s;
            String str = this.f31468t;
            qo.d dVar = this.f31469u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        @Override // ko.n1
        /* renamed from: u */
        public h4.a h() {
            return this.f31461e;
        }

        public final qo.d v() {
            return this.f31469u;
        }

        public final d0.b w() {
            return this.f31464p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31461e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31462i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f31463o, i10);
            this.f31464p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f31465q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31466r);
            dest.writeParcelable(this.f31467s, i10);
            dest.writeString(this.f31468t);
            dest.writeParcelable(this.f31469u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f31470e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31471i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f31472o;

        /* renamed from: p  reason: collision with root package name */
        private final List f31473p;

        /* renamed from: q  reason: collision with root package name */
        private final int f31474q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f31475r;

        /* renamed from: s  reason: collision with root package name */
        private final String f31476s;

        /* renamed from: t  reason: collision with root package name */
        private final ro.c f31477t;

        /* renamed from: u  reason: collision with root package name */
        private final long f31478u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f31479v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                ro.c createFromParcel;
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
                    createFromParcel = ro.c.CREATOR.createFromParcel(parcel);
                }
                ro.c cVar = createFromParcel;
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

        public /* synthetic */ e(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, ro.c cVar, long j10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 3000L : j10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
        }

        public static /* synthetic */ e r(e eVar, c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, ro.c cVar, long j10, boolean z10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                c4Var = eVar.f31470e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f31471i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f31472o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f31473p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f31474q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f31475r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f31476s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f31477t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f31478u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f31479v;
            }
            boolean z11 = z10;
            long j11 = j10;
            String str2 = str;
            ro.c cVar2 = cVar;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            return eVar.q(c4Var, list, h4Var, list2, i12, n1Var2, str2, cVar2, j11, z11);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31475r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f31470e, eVar.f31470e) && Intrinsics.areEqual(this.f31471i, eVar.f31471i) && Intrinsics.areEqual(this.f31472o, eVar.f31472o) && Intrinsics.areEqual(this.f31473p, eVar.f31473p) && this.f31474q == eVar.f31474q && Intrinsics.areEqual(this.f31475r, eVar.f31475r) && Intrinsics.areEqual(this.f31476s, eVar.f31476s) && Intrinsics.areEqual(this.f31477t, eVar.f31477t) && this.f31478u == eVar.f31478u && this.f31479v == eVar.f31479v) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31476s;
        }

        @Override // ko.n1
        public h4 h() {
            return this.f31472o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f31470e.hashCode() * 31) + this.f31471i.hashCode()) * 31) + this.f31472o.hashCode()) * 31) + this.f31473p.hashCode()) * 31) + Integer.hashCode(this.f31474q)) * 31;
            n1 n1Var = this.f31475r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f31476s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ro.c cVar = this.f31477t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f31478u)) * 31) + Boolean.hashCode(this.f31479v);
        }

        @Override // ko.n1
        public int j() {
            return this.f31474q;
        }

        @Override // ko.n1
        public List l() {
            return this.f31473p;
        }

        @Override // ko.n1
        public List o() {
            return this.f31471i;
        }

        public final e q(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ro.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 t() {
            return this.f31470e;
        }

        public String toString() {
            c4 c4Var = this.f31470e;
            List list = this.f31471i;
            h4 h4Var = this.f31472o;
            List list2 = this.f31473p;
            int i10 = this.f31474q;
            n1 n1Var = this.f31475r;
            String str = this.f31476s;
            ro.c cVar = this.f31477t;
            long j10 = this.f31478u;
            boolean z10 = this.f31479v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        public final long u() {
            return this.f31478u;
        }

        public final boolean v() {
            return this.f31479v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31470e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31471i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f31472o, i10);
            List<Parcelable> list2 = this.f31473p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31474q);
            dest.writeParcelable(this.f31475r, i10);
            dest.writeString(this.f31476s);
            ro.c cVar = this.f31477t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f31478u);
            dest.writeInt(this.f31479v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ro.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f31470e = id2;
            this.f31471i = uploadingIds;
            this.f31472o = currentPart;
            this.f31473p = parts;
            this.f31474q = i10;
            this.f31475r = n1Var;
            this.f31476s = str;
            this.f31477t = cVar;
            this.f31478u = j10;
            this.f31479v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f31480e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31481i;

        /* renamed from: o  reason: collision with root package name */
        private final List f31482o;

        /* renamed from: p  reason: collision with root package name */
        private final int f31483p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f31484q;

        /* renamed from: r  reason: collision with root package name */
        private final String f31485r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f31486s;

        /* renamed from: t  reason: collision with root package name */
        private final vn.v f31487t;

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
                return new f(h4Var, arrayList, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(f.class.getClassLoader()), parcel.readString(), c4.CREATOR.createFromParcel(parcel), (vn.v) parcel.readParcelable(f.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(h4 currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, c4 id2, vn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f31480e = currentPart;
            this.f31481i = uploadingIds;
            this.f31482o = parts;
            this.f31483p = i10;
            this.f31484q = n1Var;
            this.f31485r = str;
            this.f31486s = id2;
            this.f31487t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31484q;
        }

        @Override // ko.n1
        public String f() {
            return this.f31485r;
        }

        @Override // ko.n1
        public h4 h() {
            return this.f31480e;
        }

        @Override // ko.n1
        public int j() {
            return this.f31483p;
        }

        @Override // ko.n1
        public List l() {
            return this.f31482o;
        }

        @Override // ko.n1
        public List o() {
            return this.f31481i;
        }

        public final c4 q() {
            return this.f31486s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f31480e, i10);
            List<Parcelable> list = this.f31481i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f31482o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31483p);
            dest.writeParcelable(this.f31484q, i10);
            dest.writeString(this.f31485r);
            this.f31486s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f31487t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f31488e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31489i;

        /* renamed from: o  reason: collision with root package name */
        private final q f31490o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f31491p;

        /* renamed from: q  reason: collision with root package name */
        private final List f31492q;

        /* renamed from: r  reason: collision with root package name */
        private final int f31493r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f31494s;

        /* renamed from: t  reason: collision with root package name */
        private final vn.v f31495t;

        /* renamed from: u  reason: collision with root package name */
        private final String f31496u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f31497v;

        /* renamed from: w  reason: collision with root package name */
        private final String f31498w;

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
                vn.v vVar = (vn.v) parcel.readParcelable(g.class.getClassLoader());
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

        public /* synthetic */ g(h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, vn.v vVar, String str, boolean z10, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, list2, i10, n1Var, vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10, str2);
        }

        public static /* synthetic */ g x(g gVar, h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, vn.v vVar, String str, boolean z10, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = gVar.f31488e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f31489i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f31490o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f31491p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f31492q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f31493r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f31494s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f31495t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f31496u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f31497v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f31498w;
            }
            boolean z11 = z10;
            String str3 = str2;
            vn.v vVar2 = vVar;
            String str4 = str;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return gVar.w(aVar, list, qVar2, d0Var, list3, i12, n1Var2, vVar2, str4, z11, str3);
        }

        public final String A() {
            return this.f31496u;
        }

        public boolean B() {
            return this.f31497v;
        }

        @Override // ko.n1
        public void d() {
            super.d();
            for (c0 c0Var : u().h2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31494s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f31488e, gVar.f31488e) && Intrinsics.areEqual(this.f31489i, gVar.f31489i) && Intrinsics.areEqual(this.f31490o, gVar.f31490o) && Intrinsics.areEqual(this.f31491p, gVar.f31491p) && Intrinsics.areEqual(this.f31492q, gVar.f31492q) && this.f31493r == gVar.f31493r && Intrinsics.areEqual(this.f31494s, gVar.f31494s) && Intrinsics.areEqual(this.f31495t, gVar.f31495t) && Intrinsics.areEqual(this.f31496u, gVar.f31496u) && this.f31497v == gVar.f31497v && Intrinsics.areEqual(this.f31498w, gVar.f31498w)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31498w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f31488e.hashCode() * 31) + this.f31489i.hashCode()) * 31) + this.f31490o.hashCode()) * 31) + this.f31491p.hashCode()) * 31) + this.f31492q.hashCode()) * 31) + Integer.hashCode(this.f31493r)) * 31;
            n1 n1Var = this.f31494s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f31495t.hashCode()) * 31;
            String str = this.f31496u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f31497v)) * 31;
            String str2 = this.f31498w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // ko.n1
        public int j() {
            return this.f31493r;
        }

        @Override // ko.n1
        public List l() {
            return this.f31492q;
        }

        @Override // ko.n1
        public List o() {
            return this.f31489i;
        }

        @Override // ko.n1.h
        public vn.v q() {
            return this.f31495t;
        }

        @Override // ko.n1.h
        public q r() {
            return this.f31490o;
        }

        @Override // ko.n1
        /* renamed from: t */
        public h4.a h() {
            return this.f31488e;
        }

        public String toString() {
            h4.a aVar = this.f31488e;
            List list = this.f31489i;
            q qVar = this.f31490o;
            d0 d0Var = this.f31491p;
            List list2 = this.f31492q;
            int i10 = this.f31493r;
            n1 n1Var = this.f31494s;
            vn.v vVar = this.f31495t;
            String str = this.f31496u;
            boolean z10 = this.f31497v;
            String str2 = this.f31498w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        @Override // ko.n1.h
        public d0 u() {
            return this.f31491p;
        }

        @Override // ko.n1.h
        public h v(boolean z10) {
            return x(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public final g w(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, vn.v cameraProperties, String str, boolean z10, String str2) {
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
            this.f31488e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31489i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f31490o, i10);
            dest.writeParcelable(this.f31491p, i10);
            List<Parcelable> list2 = this.f31492q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31493r);
            dest.writeParcelable(this.f31494s, i10);
            dest.writeParcelable(this.f31495t, i10);
            dest.writeString(this.f31496u);
            dest.writeInt(this.f31497v ? 1 : 0);
            dest.writeString(this.f31498w);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, vn.v cameraProperties, String str, boolean z10, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f31488e = currentPart;
            this.f31489i = uploadingIds;
            this.f31490o = captureConfig;
            this.f31491p = idForReview;
            this.f31492q = parts;
            this.f31493r = i10;
            this.f31494s = n1Var;
            this.f31495t = cameraProperties;
            this.f31496u = str;
            this.f31497v = z10;
            this.f31498w = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class h extends n1 {
        public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract vn.v q();

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
            for (c0 c0Var : d0Var.h2()) {
                new File(c0Var.a()).delete();
            }
        }
    }

    public abstract n1 e();

    public abstract String f();

    public abstract h4 h();

    public final boolean i() {
        return this.f31428d;
    }

    public abstract int j();

    public abstract List l();

    public abstract List o();

    public final void p(boolean z10) {
        this.f31428d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f31499e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31500i;

        /* renamed from: o  reason: collision with root package name */
        private final q f31501o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f31502p;

        /* renamed from: q  reason: collision with root package name */
        private final String f31503q;

        /* renamed from: r  reason: collision with root package name */
        private final List f31504r;

        /* renamed from: s  reason: collision with root package name */
        private final int f31505s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f31506t;

        /* renamed from: u  reason: collision with root package name */
        private final vn.v f31507u;

        /* renamed from: v  reason: collision with root package name */
        private final String f31508v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f31509w;

        /* renamed from: x  reason: collision with root package name */
        private final String f31510x;

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
                vn.v vVar = (vn.v) parcel.readParcelable(i.class.getClassLoader());
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

        public /* synthetic */ i(h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, vn.v vVar, String str2, boolean z10, String str3, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, str, list2, i10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new vn.v(null, null, null, 0, 15, null) : vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10, str3);
        }

        public static /* synthetic */ i x(i iVar, h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, vn.v vVar, String str2, boolean z10, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = iVar.f31499e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f31500i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f31501o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f31502p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f31503q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f31504r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f31505s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f31506t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f31507u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f31508v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f31509w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f31510x;
            }
            boolean z11 = z10;
            String str4 = str3;
            vn.v vVar2 = vVar;
            String str5 = str2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            String str6 = str;
            List list3 = list2;
            return iVar.w(aVar, list, qVar, d0Var, str6, list3, i12, n1Var2, vVar2, str5, z11, str4);
        }

        public final String A() {
            return this.f31508v;
        }

        public final String B() {
            return this.f31503q;
        }

        public boolean D() {
            return this.f31509w;
        }

        @Override // ko.n1
        public void d() {
            super.d();
            for (c0 c0Var : u().h2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31506t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f31499e, iVar.f31499e) && Intrinsics.areEqual(this.f31500i, iVar.f31500i) && Intrinsics.areEqual(this.f31501o, iVar.f31501o) && Intrinsics.areEqual(this.f31502p, iVar.f31502p) && Intrinsics.areEqual(this.f31503q, iVar.f31503q) && Intrinsics.areEqual(this.f31504r, iVar.f31504r) && this.f31505s == iVar.f31505s && Intrinsics.areEqual(this.f31506t, iVar.f31506t) && Intrinsics.areEqual(this.f31507u, iVar.f31507u) && Intrinsics.areEqual(this.f31508v, iVar.f31508v) && this.f31509w == iVar.f31509w && Intrinsics.areEqual(this.f31510x, iVar.f31510x)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31510x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f31499e.hashCode() * 31) + this.f31500i.hashCode()) * 31) + this.f31501o.hashCode()) * 31) + this.f31502p.hashCode()) * 31;
            String str = this.f31503q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f31504r.hashCode()) * 31) + Integer.hashCode(this.f31505s)) * 31;
            n1 n1Var = this.f31506t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f31507u.hashCode()) * 31;
            String str2 = this.f31508v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f31509w)) * 31;
            String str3 = this.f31510x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // ko.n1
        public int j() {
            return this.f31505s;
        }

        @Override // ko.n1
        public List l() {
            return this.f31504r;
        }

        @Override // ko.n1
        public List o() {
            return this.f31500i;
        }

        @Override // ko.n1.h
        public vn.v q() {
            return this.f31507u;
        }

        @Override // ko.n1.h
        public q r() {
            return this.f31501o;
        }

        @Override // ko.n1
        /* renamed from: t */
        public h4.a h() {
            return this.f31499e;
        }

        public String toString() {
            h4.a aVar = this.f31499e;
            List list = this.f31500i;
            q qVar = this.f31501o;
            d0 d0Var = this.f31502p;
            String str = this.f31503q;
            List list2 = this.f31504r;
            int i10 = this.f31505s;
            n1 n1Var = this.f31506t;
            vn.v vVar = this.f31507u;
            String str2 = this.f31508v;
            boolean z10 = this.f31509w;
            String str3 = this.f31510x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        @Override // ko.n1.h
        public d0 u() {
            return this.f31502p;
        }

        @Override // ko.n1.h
        public h v(boolean z10) {
            return x(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public final i w(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, vn.v cameraProperties, String str2, boolean z10, String str3) {
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
            this.f31499e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31500i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f31501o, i10);
            dest.writeParcelable(this.f31502p, i10);
            dest.writeString(this.f31503q);
            List<Parcelable> list2 = this.f31504r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31505s);
            dest.writeParcelable(this.f31506t, i10);
            dest.writeParcelable(this.f31507u, i10);
            dest.writeString(this.f31508v);
            dest.writeInt(this.f31509w ? 1 : 0);
            dest.writeString(this.f31510x);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, vn.v cameraProperties, String str2, boolean z10, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f31499e = currentPart;
            this.f31500i = uploadingIds;
            this.f31501o = captureConfig;
            this.f31502p = idForReview;
            this.f31503q = str;
            this.f31504r = parts;
            this.f31505s = i10;
            this.f31506t = n1Var;
            this.f31507u = cameraProperties;
            this.f31508v = str2;
            this.f31509w = z10;
            this.f31510x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f31519e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31520i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f31521o;

        /* renamed from: p  reason: collision with root package name */
        private final List f31522p;

        /* renamed from: q  reason: collision with root package name */
        private final int f31523q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f31524r;

        /* renamed from: s  reason: collision with root package name */
        private final String f31525s;

        /* renamed from: t  reason: collision with root package name */
        private final ro.c f31526t;

        /* renamed from: u  reason: collision with root package name */
        private final String f31527u;

        /* renamed from: v  reason: collision with root package name */
        private final vn.v f31528v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                ro.c createFromParcel;
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
                    createFromParcel = ro.c.CREATOR.createFromParcel(parcel);
                }
                return new k(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, createFromParcel, parcel.readString(), (vn.v) parcel.readParcelable(k.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        public /* synthetic */ k(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, ro.c cVar, String str2, vn.v vVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f31021o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31524r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f31519e, kVar.f31519e) && Intrinsics.areEqual(this.f31520i, kVar.f31520i) && Intrinsics.areEqual(this.f31521o, kVar.f31521o) && Intrinsics.areEqual(this.f31522p, kVar.f31522p) && this.f31523q == kVar.f31523q && Intrinsics.areEqual(this.f31524r, kVar.f31524r) && Intrinsics.areEqual(this.f31525s, kVar.f31525s) && Intrinsics.areEqual(this.f31526t, kVar.f31526t) && Intrinsics.areEqual(this.f31527u, kVar.f31527u) && Intrinsics.areEqual(this.f31528v, kVar.f31528v)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31525s;
        }

        @Override // ko.n1
        public h4 h() {
            return this.f31521o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f31519e.hashCode() * 31) + this.f31520i.hashCode()) * 31) + this.f31521o.hashCode()) * 31) + this.f31522p.hashCode()) * 31) + Integer.hashCode(this.f31523q)) * 31;
            n1 n1Var = this.f31524r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f31525s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ro.c cVar = this.f31526t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f31527u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f31528v.hashCode();
        }

        @Override // ko.n1
        public int j() {
            return this.f31523q;
        }

        @Override // ko.n1
        public List l() {
            return this.f31522p;
        }

        @Override // ko.n1
        public List o() {
            return this.f31520i;
        }

        public final vn.v q() {
            return this.f31528v;
        }

        public final ro.c r() {
            return this.f31526t;
        }

        public final String t() {
            return this.f31527u;
        }

        public String toString() {
            c4 c4Var = this.f31519e;
            List list = this.f31520i;
            h4 h4Var = this.f31521o;
            List list2 = this.f31522p;
            int i10 = this.f31523q;
            n1 n1Var = this.f31524r;
            String str = this.f31525s;
            ro.c cVar = this.f31526t;
            String str2 = this.f31527u;
            vn.v vVar = this.f31528v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31519e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31520i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f31521o, i10);
            List<Parcelable> list2 = this.f31522p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31523q);
            dest.writeParcelable(this.f31524r, i10);
            dest.writeString(this.f31525s);
            ro.c cVar = this.f31526t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f31527u);
            dest.writeParcelable(this.f31528v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ro.c cVar, String str2, vn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f31519e = id2;
            this.f31520i = uploadingIds;
            this.f31521o = currentPart;
            this.f31522p = parts;
            this.f31523q = i10;
            this.f31524r = n1Var;
            this.f31525s = str;
            this.f31526t = cVar;
            this.f31527u = str2;
            this.f31528v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements ko.d, ko.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f31529e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31530i;

        /* renamed from: o  reason: collision with root package name */
        private final q f31531o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f31532p;

        /* renamed from: q  reason: collision with root package name */
        private final List f31533q;

        /* renamed from: r  reason: collision with root package name */
        private final int f31534r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f31535s;

        /* renamed from: t  reason: collision with root package name */
        private final so.t f31536t;

        /* renamed from: u  reason: collision with root package name */
        private final String f31537u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f31538v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f31539w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f31540x;

        /* renamed from: y  reason: collision with root package name */
        private final String f31541y;

        /* renamed from: z  reason: collision with root package name */
        private final qo.d f31542z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                so.t valueOf;
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
                    valueOf = so.t.valueOf(parcel.readString());
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
                return new l(createFromParcel, arrayList, qVar, valueOf2, arrayList2, readInt3, n1Var, valueOf, readString, th2, z10, z11, parcel.readString(), (qo.d) parcel.readParcelable(l.class.getClassLoader()), null, 16384, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, so.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, qo.d dVar, Function0 function0, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, aVar2, list2, i10, n1Var, tVar, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? true : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? true : z11, str2, (i11 & 8192) != 0 ? null : dVar, (i11 & 16384) != 0 ? new Function0() { // from class: ko.o1
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
            return Unit.f31765a;
        }

        public static /* synthetic */ l u(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, so.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, qo.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.t((i11 & 1) != 0 ? lVar.f31529e : aVar, (i11 & 2) != 0 ? lVar.f31530i : list, (i11 & 4) != 0 ? lVar.f31531o : qVar, (i11 & 8) != 0 ? lVar.f31532p : aVar2, (i11 & 16) != 0 ? lVar.f31533q : list2, (i11 & 32) != 0 ? lVar.f31534r : i10, (i11 & 64) != 0 ? lVar.f31535s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f31536t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f31537u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f31538v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f31539w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f31540x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f31541y : str2, (i11 & 8192) != 0 ? lVar.f31542z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        @Override // ko.n1
        /* renamed from: A */
        public h4.a h() {
            return this.f31529e;
        }

        public final Throwable B() {
            return this.f31538v;
        }

        public final qo.d D() {
            return this.f31542z;
        }

        public final f5.b.a E() {
            return this.f31532p;
        }

        public final Function0 F() {
            return this.A;
        }

        public final String G() {
            return this.f31537u;
        }

        public final so.t H() {
            return this.f31536t;
        }

        @Override // ko.b
        public n1 a(boolean z10) {
            return u(this, null, null, null, null, null, 0, null, null, null, null, false, z10, null, null, null, 30719, null);
        }

        @Override // ko.d
        public n1 b(boolean z10) {
            return u(this, null, null, null, null, null, 0, null, null, null, null, z10, false, null, null, null, 31743, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31535s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f31529e, lVar.f31529e) && Intrinsics.areEqual(this.f31530i, lVar.f31530i) && Intrinsics.areEqual(this.f31531o, lVar.f31531o) && this.f31532p == lVar.f31532p && Intrinsics.areEqual(this.f31533q, lVar.f31533q) && this.f31534r == lVar.f31534r && Intrinsics.areEqual(this.f31535s, lVar.f31535s) && this.f31536t == lVar.f31536t && Intrinsics.areEqual(this.f31537u, lVar.f31537u) && Intrinsics.areEqual(this.f31538v, lVar.f31538v) && this.f31539w == lVar.f31539w && this.f31540x == lVar.f31540x && Intrinsics.areEqual(this.f31541y, lVar.f31541y) && Intrinsics.areEqual(this.f31542z, lVar.f31542z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31541y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f31529e.hashCode() * 31) + this.f31530i.hashCode()) * 31) + this.f31531o.hashCode()) * 31) + this.f31532p.hashCode()) * 31) + this.f31533q.hashCode()) * 31) + Integer.hashCode(this.f31534r)) * 31;
            n1 n1Var = this.f31535s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            so.t tVar = this.f31536t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f31537u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f31538v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f31539w)) * 31) + Boolean.hashCode(this.f31540x)) * 31;
            String str2 = this.f31541y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            qo.d dVar = this.f31542z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // ko.n1
        public int j() {
            return this.f31534r;
        }

        @Override // ko.n1
        public List l() {
            return this.f31533q;
        }

        @Override // ko.n1
        public List o() {
            return this.f31530i;
        }

        public final l t(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, so.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, qo.d dVar, Function0 webRtcConnectionEstablished) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            return new l(currentPart, uploadingIds, captureConfig, manualCapture, parts, i10, n1Var, tVar, str, th2, z10, z11, str2, dVar, webRtcConnectionEstablished);
        }

        public String toString() {
            h4.a aVar = this.f31529e;
            List list = this.f31530i;
            q qVar = this.f31531o;
            f5.b.a aVar2 = this.f31532p;
            List list2 = this.f31533q;
            int i10 = this.f31534r;
            n1 n1Var = this.f31535s;
            so.t tVar = this.f31536t;
            String str = this.f31537u;
            Throwable th2 = this.f31538v;
            boolean z10 = this.f31539w;
            boolean z11 = this.f31540x;
            String str2 = this.f31541y;
            qo.d dVar = this.f31542z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public final q v() {
            return this.f31531o;
        }

        public boolean w() {
            return this.f31540x;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31529e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31530i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f31531o, i10);
            dest.writeString(this.f31532p.name());
            List<Parcelable> list2 = this.f31533q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31534r);
            dest.writeParcelable(this.f31535s, i10);
            so.t tVar = this.f31536t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f31537u);
            dest.writeSerializable(this.f31538v);
            dest.writeInt(this.f31539w ? 1 : 0);
            dest.writeInt(this.f31540x ? 1 : 0);
            dest.writeString(this.f31541y);
            dest.writeParcelable(this.f31542z, i10);
        }

        public boolean x() {
            return this.f31539w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, so.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, qo.d dVar, Function0 webRtcConnectionEstablished) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            this.f31529e = currentPart;
            this.f31530i = uploadingIds;
            this.f31531o = captureConfig;
            this.f31532p = manualCapture;
            this.f31533q = parts;
            this.f31534r = i10;
            this.f31535s = n1Var;
            this.f31536t = tVar;
            this.f31537u = str;
            this.f31538v = th2;
            this.f31539w = z10;
            this.f31540x = z11;
            this.f31541y = str2;
            this.f31542z = dVar;
            this.A = webRtcConnectionEstablished;
        }
    }

    private n1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends n1 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0477a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f31429e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31430i;

        /* renamed from: o  reason: collision with root package name */
        private final List f31431o;

        /* renamed from: p  reason: collision with root package name */
        private final int f31432p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f31433q;

        /* renamed from: r  reason: collision with root package name */
        private final String f31434r;

        /* renamed from: s  reason: collision with root package name */
        private final List f31435s;

        /* renamed from: t  reason: collision with root package name */
        private final vn.v f31436t;

        /* renamed from: u  reason: collision with root package name */
        private final List f31437u;

        /* renamed from: v  reason: collision with root package name */
        private final String f31438v;

        /* renamed from: w  reason: collision with root package name */
        private final String f31439w;

        /* renamed from: x  reason: collision with root package name */
        private final ko.c f31440x;

        /* renamed from: ko.n1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0477a implements Parcelable.Creator {
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
                vn.v vVar = (vn.v) parcel.readParcelable(a.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new a(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString(), ko.c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, vn.v vVar, List list4, String str2, String str3, ko.c cVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f31021o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ko.n1
        public n1 e() {
            return this.f31433q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f31429e, aVar.f31429e) && Intrinsics.areEqual(this.f31430i, aVar.f31430i) && Intrinsics.areEqual(this.f31431o, aVar.f31431o) && this.f31432p == aVar.f31432p && Intrinsics.areEqual(this.f31433q, aVar.f31433q) && Intrinsics.areEqual(this.f31434r, aVar.f31434r) && Intrinsics.areEqual(this.f31435s, aVar.f31435s) && Intrinsics.areEqual(this.f31436t, aVar.f31436t) && Intrinsics.areEqual(this.f31437u, aVar.f31437u) && Intrinsics.areEqual(this.f31438v, aVar.f31438v) && Intrinsics.areEqual(this.f31439w, aVar.f31439w) && this.f31440x == aVar.f31440x) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31434r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f31429e.hashCode() * 31) + this.f31430i.hashCode()) * 31) + this.f31431o.hashCode()) * 31) + Integer.hashCode(this.f31432p)) * 31;
            n1 n1Var = this.f31433q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f31434r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f31435s.hashCode()) * 31) + this.f31436t.hashCode()) * 31) + this.f31437u.hashCode()) * 31;
            String str2 = this.f31438v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f31439w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f31440x.hashCode();
        }

        @Override // ko.n1
        public int j() {
            return this.f31432p;
        }

        @Override // ko.n1
        public List l() {
            return this.f31431o;
        }

        @Override // ko.n1
        public List o() {
            return this.f31430i;
        }

        public final List q() {
            return this.f31435s;
        }

        @Override // ko.n1
        /* renamed from: r */
        public h4.a h() {
            return this.f31429e;
        }

        public final ko.c t() {
            return this.f31440x;
        }

        public String toString() {
            h4.a aVar = this.f31429e;
            List list = this.f31430i;
            List list2 = this.f31431o;
            int i10 = this.f31432p;
            n1 n1Var = this.f31433q;
            String str = this.f31434r;
            List list3 = this.f31435s;
            vn.v vVar = this.f31436t;
            List list4 = this.f31437u;
            String str2 = this.f31438v;
            String str3 = this.f31439w;
            ko.c cVar = this.f31440x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        public final List u() {
            return this.f31437u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31429e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31430i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f31431o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31432p);
            dest.writeParcelable(this.f31433q, i10);
            dest.writeString(this.f31434r);
            List<c0> list3 = this.f31435s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f31436t, i10);
            List<e4> list4 = this.f31437u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f31438v);
            dest.writeString(this.f31439w);
            dest.writeString(this.f31440x.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, vn.v cameraProperties, List idConfigsForCountry, String str2, String str3, ko.c errorType) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            Intrinsics.checkNotNullParameter(errorType, "errorType");
            this.f31429e = currentPart;
            this.f31430i = uploadingIds;
            this.f31431o = parts;
            this.f31432p = i10;
            this.f31433q = n1Var;
            this.f31434r = str;
            this.f31435s = captureFrames;
            this.f31436t = cameraProperties;
            this.f31437u = idConfigsForCountry;
            this.f31438v = str2;
            this.f31439w = str3;
            this.f31440x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f31452e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31453i;

        /* renamed from: o  reason: collision with root package name */
        private final List f31454o;

        /* renamed from: p  reason: collision with root package name */
        private final int f31455p;

        /* renamed from: q  reason: collision with root package name */
        private final String f31456q;

        /* renamed from: r  reason: collision with root package name */
        private final q f31457r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f31458s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f31459t;

        /* renamed from: u  reason: collision with root package name */
        private final String f31460u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f31021o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c r(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f31452e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f31453i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f31454o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f31455p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f31456q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f31457r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f31458s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f31459t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f31460u;
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

        @Override // ko.n1
        public n1 e() {
            return this.f31459t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f31452e, cVar.f31452e) && Intrinsics.areEqual(this.f31453i, cVar.f31453i) && Intrinsics.areEqual(this.f31454o, cVar.f31454o) && this.f31455p == cVar.f31455p && Intrinsics.areEqual(this.f31456q, cVar.f31456q) && Intrinsics.areEqual(this.f31457r, cVar.f31457r) && this.f31458s == cVar.f31458s && Intrinsics.areEqual(this.f31459t, cVar.f31459t) && Intrinsics.areEqual(this.f31460u, cVar.f31460u)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31456q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f31452e.hashCode() * 31) + this.f31453i.hashCode()) * 31) + this.f31454o.hashCode()) * 31) + Integer.hashCode(this.f31455p)) * 31;
            String str = this.f31456q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f31457r.hashCode()) * 31) + Boolean.hashCode(this.f31458s)) * 31;
            n1 n1Var = this.f31459t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f31460u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // ko.n1
        public int j() {
            return this.f31455p;
        }

        @Override // ko.n1
        public List l() {
            return this.f31454o;
        }

        @Override // ko.n1
        public List o() {
            return this.f31453i;
        }

        public final c q(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q t() {
            return this.f31457r;
        }

        public String toString() {
            h4.a aVar = this.f31452e;
            List list = this.f31453i;
            List list2 = this.f31454o;
            int i10 = this.f31455p;
            String str = this.f31456q;
            q qVar = this.f31457r;
            boolean z10 = this.f31458s;
            n1 n1Var = this.f31459t;
            String str2 = this.f31460u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        public final boolean u() {
            return this.f31458s;
        }

        @Override // ko.n1
        /* renamed from: v */
        public h4.a h() {
            return this.f31452e;
        }

        public final String w() {
            return this.f31460u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31452e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f31453i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f31454o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f31455p);
            dest.writeString(this.f31456q);
            dest.writeParcelable(this.f31457r, i10);
            dest.writeInt(this.f31458s ? 1 : 0);
            dest.writeParcelable(this.f31459t, i10);
            dest.writeString(this.f31460u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f31452e = currentPart;
            this.f31453i = uploadingIds;
            this.f31454o = parts;
            this.f31455p = i10;
            this.f31456q = str;
            this.f31457r = captureConfig;
            this.f31458s = z10;
            this.f31459t = n1Var;
            this.f31460u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f31511e;

        /* renamed from: i  reason: collision with root package name */
        private final List f31512i;

        /* renamed from: o  reason: collision with root package name */
        private final List f31513o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f31514p;

        /* renamed from: q  reason: collision with root package name */
        private final int f31515q;

        /* renamed from: r  reason: collision with root package name */
        private final String f31516r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f31517s;

        /* renamed from: t  reason: collision with root package name */
        private final String f31518t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f31021o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j r(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f31511e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f31512i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f31513o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f31514p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f31515q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f31516r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f31517s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f31518t;
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

        @Override // ko.n1
        public n1 e() {
            return this.f31514p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f31511e, jVar.f31511e) && Intrinsics.areEqual(this.f31512i, jVar.f31512i) && Intrinsics.areEqual(this.f31513o, jVar.f31513o) && Intrinsics.areEqual(this.f31514p, jVar.f31514p) && this.f31515q == jVar.f31515q && Intrinsics.areEqual(this.f31516r, jVar.f31516r) && Intrinsics.areEqual(this.f31517s, jVar.f31517s) && Intrinsics.areEqual(this.f31518t, jVar.f31518t)) {
                return true;
            }
            return false;
        }

        @Override // ko.n1
        public String f() {
            return this.f31516r;
        }

        @Override // ko.n1
        public h4 h() {
            return this.f31511e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f31511e.hashCode() * 31) + this.f31512i.hashCode()) * 31) + this.f31513o.hashCode()) * 31;
            n1 n1Var = this.f31514p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f31515q)) * 31;
            String str = this.f31516r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f31517s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f31518t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // ko.n1
        public int j() {
            return this.f31515q;
        }

        @Override // ko.n1
        public List l() {
            return this.f31513o;
        }

        @Override // ko.n1
        public List o() {
            return this.f31512i;
        }

        public final j q(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String t() {
            return this.f31518t;
        }

        public String toString() {
            h4 h4Var = this.f31511e;
            List list = this.f31512i;
            List list2 = this.f31513o;
            n1 n1Var = this.f31514p;
            int i10 = this.f31515q;
            String str = this.f31516r;
            c4 c4Var = this.f31517s;
            String str2 = this.f31518t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f31511e, i10);
            List<Parcelable> list = this.f31512i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f31513o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f31514p, i10);
            dest.writeInt(this.f31515q);
            dest.writeString(this.f31516r);
            c4 c4Var = this.f31517s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f31518t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f31511e = currentPart;
            this.f31512i = uploadingIds;
            this.f31513o = parts;
            this.f31514p = n1Var;
            this.f31515q = i10;
            this.f31516r = str;
            this.f31517s = c4Var;
            this.f31518t = str2;
        }
    }
}
