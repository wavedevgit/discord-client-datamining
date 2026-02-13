package to;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import to.c4;
import to.d0;
import to.f5;
import to.h4;
import to.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f49989d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f50002e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50003i;

        /* renamed from: o  reason: collision with root package name */
        private final List f50004o;

        /* renamed from: p  reason: collision with root package name */
        private final int f50005p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f50006q;

        /* renamed from: r  reason: collision with root package name */
        private final String f50007r;

        /* renamed from: s  reason: collision with root package name */
        private final List f50008s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f50009t;

        /* renamed from: u  reason: collision with root package name */
        private final List f50010u;

        /* renamed from: v  reason: collision with root package name */
        private final String f50011v;

        /* renamed from: w  reason: collision with root package name */
        private final String f50012w;

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
                fo.v vVar = (fo.v) parcel.readParcelable(b.class.getClassLoader());
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
        public b(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, fo.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            this.f50002e = currentPart;
            this.f50003i = uploadingIds;
            this.f50004o = parts;
            this.f50005p = i10;
            this.f50006q = n1Var;
            this.f50007r = str;
            this.f50008s = captureFrames;
            this.f50009t = cameraProperties;
            this.f50010u = idConfigsForCountry;
            this.f50011v = str2;
            this.f50012w = str3;
        }

        public static /* synthetic */ b q(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, fo.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f50002e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f50003i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f50004o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f50005p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f50006q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f50007r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f50008s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f50009t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f50010u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f50011v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f50012w;
            }
            String str4 = str2;
            String str5 = str3;
            fo.v vVar2 = vVar;
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

        @Override // to.n1
        public n1 e() {
            return this.f50006q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f50002e, bVar.f50002e) && Intrinsics.areEqual(this.f50003i, bVar.f50003i) && Intrinsics.areEqual(this.f50004o, bVar.f50004o) && this.f50005p == bVar.f50005p && Intrinsics.areEqual(this.f50006q, bVar.f50006q) && Intrinsics.areEqual(this.f50007r, bVar.f50007r) && Intrinsics.areEqual(this.f50008s, bVar.f50008s) && Intrinsics.areEqual(this.f50009t, bVar.f50009t) && Intrinsics.areEqual(this.f50010u, bVar.f50010u) && Intrinsics.areEqual(this.f50011v, bVar.f50011v) && Intrinsics.areEqual(this.f50012w, bVar.f50012w)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50007r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f50002e.hashCode() * 31) + this.f50003i.hashCode()) * 31) + this.f50004o.hashCode()) * 31) + Integer.hashCode(this.f50005p)) * 31;
            n1 n1Var = this.f50006q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f50007r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f50008s.hashCode()) * 31) + this.f50009t.hashCode()) * 31) + this.f50010u.hashCode()) * 31;
            String str2 = this.f50011v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f50012w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f50005p;
        }

        @Override // to.n1
        public List k() {
            return this.f50004o;
        }

        @Override // to.n1
        public List l() {
            return this.f50003i;
        }

        public final b p(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, fo.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            return new b(currentPart, uploadingIds, parts, i10, n1Var, str, captureFrames, cameraProperties, idConfigsForCountry, str2, str3);
        }

        public final fo.v r() {
            return this.f50009t;
        }

        @Override // to.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f50002e;
        }

        public final List t() {
            return this.f50010u;
        }

        public String toString() {
            h4.a aVar = this.f50002e;
            List list = this.f50003i;
            List list2 = this.f50004o;
            int i10 = this.f50005p;
            n1 n1Var = this.f50006q;
            String str = this.f50007r;
            List list3 = this.f50008s;
            fo.v vVar = this.f50009t;
            List list4 = this.f50010u;
            String str2 = this.f50011v;
            String str3 = this.f50012w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        public final String u() {
            return this.f50011v;
        }

        public final String v() {
            return this.f50012w;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50002e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50003i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f50004o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50005p);
            dest.writeParcelable(this.f50006q, i10);
            dest.writeString(this.f50007r);
            List<c0> list3 = this.f50008s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f50009t, i10);
            List<e4> list4 = this.f50010u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f50011v);
            dest.writeString(this.f50012w);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f50022e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50023i;

        /* renamed from: o  reason: collision with root package name */
        private final q f50024o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f50025p;

        /* renamed from: q  reason: collision with root package name */
        private final List f50026q;

        /* renamed from: r  reason: collision with root package name */
        private final int f50027r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f50028s;

        /* renamed from: t  reason: collision with root package name */
        private final String f50029t;

        /* renamed from: u  reason: collision with root package name */
        private final zo.d f50030u;

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
                return new d(createFromParcel, arrayList, qVar, createFromParcel2, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (zo.d) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, zo.d dVar) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f50022e = currentPart;
            this.f50023i = uploadingIds;
            this.f50024o = captureConfig;
            this.f50025p = idForReview;
            this.f50026q = parts;
            this.f50027r = i10;
            this.f50028s = n1Var;
            this.f50029t = str;
            this.f50030u = dVar;
        }

        public static /* synthetic */ d q(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, zo.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f50022e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f50023i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f50024o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f50025p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f50026q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f50027r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f50028s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f50029t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f50030u;
            }
            String str2 = str;
            zo.d dVar3 = dVar2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return dVar.p(aVar, list, qVar2, bVar, list3, i12, n1Var2, str2, dVar3);
        }

        @Override // to.n1
        public void d() {
            super.d();
            for (c0 c0Var : this.f50025p.m2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f50028s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f50022e, dVar.f50022e) && Intrinsics.areEqual(this.f50023i, dVar.f50023i) && Intrinsics.areEqual(this.f50024o, dVar.f50024o) && Intrinsics.areEqual(this.f50025p, dVar.f50025p) && Intrinsics.areEqual(this.f50026q, dVar.f50026q) && this.f50027r == dVar.f50027r && Intrinsics.areEqual(this.f50028s, dVar.f50028s) && Intrinsics.areEqual(this.f50029t, dVar.f50029t) && Intrinsics.areEqual(this.f50030u, dVar.f50030u)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50029t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f50022e.hashCode() * 31) + this.f50023i.hashCode()) * 31) + this.f50024o.hashCode()) * 31) + this.f50025p.hashCode()) * 31) + this.f50026q.hashCode()) * 31) + Integer.hashCode(this.f50027r)) * 31;
            n1 n1Var = this.f50028s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f50029t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            zo.d dVar = this.f50030u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f50027r;
        }

        @Override // to.n1
        public List k() {
            return this.f50026q;
        }

        @Override // to.n1
        public List l() {
            return this.f50023i;
        }

        public final d p(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, zo.d dVar) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new d(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, str, dVar);
        }

        public final q r() {
            return this.f50024o;
        }

        @Override // to.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f50022e;
        }

        public final zo.d t() {
            return this.f50030u;
        }

        public String toString() {
            h4.a aVar = this.f50022e;
            List list = this.f50023i;
            q qVar = this.f50024o;
            d0.b bVar = this.f50025p;
            List list2 = this.f50026q;
            int i10 = this.f50027r;
            n1 n1Var = this.f50028s;
            String str = this.f50029t;
            zo.d dVar = this.f50030u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        public final d0.b u() {
            return this.f50025p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50022e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50023i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f50024o, i10);
            this.f50025p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f50026q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50027r);
            dest.writeParcelable(this.f50028s, i10);
            dest.writeString(this.f50029t);
            dest.writeParcelable(this.f50030u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f50031e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50032i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f50033o;

        /* renamed from: p  reason: collision with root package name */
        private final List f50034p;

        /* renamed from: q  reason: collision with root package name */
        private final int f50035q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f50036r;

        /* renamed from: s  reason: collision with root package name */
        private final String f50037s;

        /* renamed from: t  reason: collision with root package name */
        private final ap.c f50038t;

        /* renamed from: u  reason: collision with root package name */
        private final long f50039u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f50040v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                ap.c createFromParcel;
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
                    createFromParcel = ap.c.CREATOR.createFromParcel(parcel);
                }
                ap.c cVar = createFromParcel;
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

        public /* synthetic */ e(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 3000L : j10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
        }

        public static /* synthetic */ e q(e eVar, c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                c4Var = eVar.f50031e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f50032i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f50033o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f50034p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f50035q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f50036r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f50037s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f50038t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f50039u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f50040v;
            }
            boolean z11 = z10;
            long j11 = j10;
            String str2 = str;
            ap.c cVar2 = cVar;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            return eVar.p(c4Var, list, h4Var, list2, i12, n1Var2, str2, cVar2, j11, z11);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f50036r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f50031e, eVar.f50031e) && Intrinsics.areEqual(this.f50032i, eVar.f50032i) && Intrinsics.areEqual(this.f50033o, eVar.f50033o) && Intrinsics.areEqual(this.f50034p, eVar.f50034p) && this.f50035q == eVar.f50035q && Intrinsics.areEqual(this.f50036r, eVar.f50036r) && Intrinsics.areEqual(this.f50037s, eVar.f50037s) && Intrinsics.areEqual(this.f50038t, eVar.f50038t) && this.f50039u == eVar.f50039u && this.f50040v == eVar.f50040v) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50037s;
        }

        @Override // to.n1
        public h4 g() {
            return this.f50033o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f50031e.hashCode() * 31) + this.f50032i.hashCode()) * 31) + this.f50033o.hashCode()) * 31) + this.f50034p.hashCode()) * 31) + Integer.hashCode(this.f50035q)) * 31;
            n1 n1Var = this.f50036r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f50037s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ap.c cVar = this.f50038t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f50039u)) * 31) + Boolean.hashCode(this.f50040v);
        }

        @Override // to.n1
        public int j() {
            return this.f50035q;
        }

        @Override // to.n1
        public List k() {
            return this.f50034p;
        }

        @Override // to.n1
        public List l() {
            return this.f50032i;
        }

        public final e p(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 r() {
            return this.f50031e;
        }

        public final long s() {
            return this.f50039u;
        }

        public final boolean t() {
            return this.f50040v;
        }

        public String toString() {
            c4 c4Var = this.f50031e;
            List list = this.f50032i;
            h4 h4Var = this.f50033o;
            List list2 = this.f50034p;
            int i10 = this.f50035q;
            n1 n1Var = this.f50036r;
            String str = this.f50037s;
            ap.c cVar = this.f50038t;
            long j10 = this.f50039u;
            boolean z10 = this.f50040v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50031e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50032i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f50033o, i10);
            List<Parcelable> list2 = this.f50034p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50035q);
            dest.writeParcelable(this.f50036r, i10);
            dest.writeString(this.f50037s);
            ap.c cVar = this.f50038t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f50039u);
            dest.writeInt(this.f50040v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f50031e = id2;
            this.f50032i = uploadingIds;
            this.f50033o = currentPart;
            this.f50034p = parts;
            this.f50035q = i10;
            this.f50036r = n1Var;
            this.f50037s = str;
            this.f50038t = cVar;
            this.f50039u = j10;
            this.f50040v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f50041e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50042i;

        /* renamed from: o  reason: collision with root package name */
        private final List f50043o;

        /* renamed from: p  reason: collision with root package name */
        private final int f50044p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f50045q;

        /* renamed from: r  reason: collision with root package name */
        private final String f50046r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f50047s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f50048t;

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
                return new f(h4Var, arrayList, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(f.class.getClassLoader()), parcel.readString(), c4.CREATOR.createFromParcel(parcel), (fo.v) parcel.readParcelable(f.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(h4 currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, c4 id2, fo.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f50041e = currentPart;
            this.f50042i = uploadingIds;
            this.f50043o = parts;
            this.f50044p = i10;
            this.f50045q = n1Var;
            this.f50046r = str;
            this.f50047s = id2;
            this.f50048t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f50045q;
        }

        @Override // to.n1
        public String f() {
            return this.f50046r;
        }

        @Override // to.n1
        public h4 g() {
            return this.f50041e;
        }

        @Override // to.n1
        public int j() {
            return this.f50044p;
        }

        @Override // to.n1
        public List k() {
            return this.f50043o;
        }

        @Override // to.n1
        public List l() {
            return this.f50042i;
        }

        public final c4 p() {
            return this.f50047s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f50041e, i10);
            List<Parcelable> list = this.f50042i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f50043o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50044p);
            dest.writeParcelable(this.f50045q, i10);
            dest.writeString(this.f50046r);
            this.f50047s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f50048t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f50049e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50050i;

        /* renamed from: o  reason: collision with root package name */
        private final q f50051o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f50052p;

        /* renamed from: q  reason: collision with root package name */
        private final List f50053q;

        /* renamed from: r  reason: collision with root package name */
        private final int f50054r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f50055s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f50056t;

        /* renamed from: u  reason: collision with root package name */
        private final String f50057u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f50058v;

        /* renamed from: w  reason: collision with root package name */
        private final String f50059w;

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
                fo.v vVar = (fo.v) parcel.readParcelable(g.class.getClassLoader());
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

        public /* synthetic */ g(h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, fo.v vVar, String str, boolean z10, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, list2, i10, n1Var, vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10, str2);
        }

        public static /* synthetic */ g v(g gVar, h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, fo.v vVar, String str, boolean z10, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = gVar.f50049e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f50050i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f50051o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f50052p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f50053q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f50054r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f50055s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f50056t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f50057u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f50058v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f50059w;
            }
            boolean z11 = z10;
            String str3 = str2;
            fo.v vVar2 = vVar;
            String str4 = str;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return gVar.u(aVar, list, qVar2, d0Var, list3, i12, n1Var2, vVar2, str4, z11, str3);
        }

        @Override // to.n1
        public void d() {
            super.d();
            for (c0 c0Var : s().m2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f50055s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f50049e, gVar.f50049e) && Intrinsics.areEqual(this.f50050i, gVar.f50050i) && Intrinsics.areEqual(this.f50051o, gVar.f50051o) && Intrinsics.areEqual(this.f50052p, gVar.f50052p) && Intrinsics.areEqual(this.f50053q, gVar.f50053q) && this.f50054r == gVar.f50054r && Intrinsics.areEqual(this.f50055s, gVar.f50055s) && Intrinsics.areEqual(this.f50056t, gVar.f50056t) && Intrinsics.areEqual(this.f50057u, gVar.f50057u) && this.f50058v == gVar.f50058v && Intrinsics.areEqual(this.f50059w, gVar.f50059w)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50059w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f50049e.hashCode() * 31) + this.f50050i.hashCode()) * 31) + this.f50051o.hashCode()) * 31) + this.f50052p.hashCode()) * 31) + this.f50053q.hashCode()) * 31) + Integer.hashCode(this.f50054r)) * 31;
            n1 n1Var = this.f50055s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f50056t.hashCode()) * 31;
            String str = this.f50057u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f50058v)) * 31;
            String str2 = this.f50059w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f50054r;
        }

        @Override // to.n1
        public List k() {
            return this.f50053q;
        }

        @Override // to.n1
        public List l() {
            return this.f50050i;
        }

        @Override // to.n1.h
        public fo.v p() {
            return this.f50056t;
        }

        @Override // to.n1.h
        public q q() {
            return this.f50051o;
        }

        @Override // to.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f50049e;
        }

        @Override // to.n1.h
        public d0 s() {
            return this.f50052p;
        }

        @Override // to.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public String toString() {
            h4.a aVar = this.f50049e;
            List list = this.f50050i;
            q qVar = this.f50051o;
            d0 d0Var = this.f50052p;
            List list2 = this.f50053q;
            int i10 = this.f50054r;
            n1 n1Var = this.f50055s;
            fo.v vVar = this.f50056t;
            String str = this.f50057u;
            boolean z10 = this.f50058v;
            String str2 = this.f50059w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        public final g u(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, fo.v cameraProperties, String str, boolean z10, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new g(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, cameraProperties, str, z10, str2);
        }

        public final String w() {
            return this.f50057u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50049e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50050i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f50051o, i10);
            dest.writeParcelable(this.f50052p, i10);
            List<Parcelable> list2 = this.f50053q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50054r);
            dest.writeParcelable(this.f50055s, i10);
            dest.writeParcelable(this.f50056t, i10);
            dest.writeString(this.f50057u);
            dest.writeInt(this.f50058v ? 1 : 0);
            dest.writeString(this.f50059w);
        }

        public boolean x() {
            return this.f50058v;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, fo.v cameraProperties, String str, boolean z10, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f50049e = currentPart;
            this.f50050i = uploadingIds;
            this.f50051o = captureConfig;
            this.f50052p = idForReview;
            this.f50053q = parts;
            this.f50054r = i10;
            this.f50055s = n1Var;
            this.f50056t = cameraProperties;
            this.f50057u = str;
            this.f50058v = z10;
            this.f50059w = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class h extends n1 {
        public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract fo.v p();

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
        for (d0 d0Var : l()) {
            for (c0 c0Var : d0Var.m2()) {
                new File(c0Var.a()).delete();
            }
        }
    }

    public abstract n1 e();

    public abstract String f();

    public abstract h4 g();

    public final boolean i() {
        return this.f49989d;
    }

    public abstract int j();

    public abstract List k();

    public abstract List l();

    public final void o(boolean z10) {
        this.f49989d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f50060e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50061i;

        /* renamed from: o  reason: collision with root package name */
        private final q f50062o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f50063p;

        /* renamed from: q  reason: collision with root package name */
        private final String f50064q;

        /* renamed from: r  reason: collision with root package name */
        private final List f50065r;

        /* renamed from: s  reason: collision with root package name */
        private final int f50066s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f50067t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f50068u;

        /* renamed from: v  reason: collision with root package name */
        private final String f50069v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f50070w;

        /* renamed from: x  reason: collision with root package name */
        private final String f50071x;

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
                fo.v vVar = (fo.v) parcel.readParcelable(i.class.getClassLoader());
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

        public /* synthetic */ i(h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, fo.v vVar, String str2, boolean z10, String str3, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, str, list2, i10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new fo.v(null, null, null, 0, 15, null) : vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10, str3);
        }

        public static /* synthetic */ i v(i iVar, h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, fo.v vVar, String str2, boolean z10, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = iVar.f50060e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f50061i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f50062o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f50063p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f50064q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f50065r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f50066s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f50067t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f50068u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f50069v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f50070w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f50071x;
            }
            boolean z11 = z10;
            String str4 = str3;
            fo.v vVar2 = vVar;
            String str5 = str2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            String str6 = str;
            List list3 = list2;
            return iVar.u(aVar, list, qVar, d0Var, str6, list3, i12, n1Var2, vVar2, str5, z11, str4);
        }

        public boolean A() {
            return this.f50070w;
        }

        @Override // to.n1
        public void d() {
            super.d();
            for (c0 c0Var : s().m2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f50067t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f50060e, iVar.f50060e) && Intrinsics.areEqual(this.f50061i, iVar.f50061i) && Intrinsics.areEqual(this.f50062o, iVar.f50062o) && Intrinsics.areEqual(this.f50063p, iVar.f50063p) && Intrinsics.areEqual(this.f50064q, iVar.f50064q) && Intrinsics.areEqual(this.f50065r, iVar.f50065r) && this.f50066s == iVar.f50066s && Intrinsics.areEqual(this.f50067t, iVar.f50067t) && Intrinsics.areEqual(this.f50068u, iVar.f50068u) && Intrinsics.areEqual(this.f50069v, iVar.f50069v) && this.f50070w == iVar.f50070w && Intrinsics.areEqual(this.f50071x, iVar.f50071x)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50071x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f50060e.hashCode() * 31) + this.f50061i.hashCode()) * 31) + this.f50062o.hashCode()) * 31) + this.f50063p.hashCode()) * 31;
            String str = this.f50064q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f50065r.hashCode()) * 31) + Integer.hashCode(this.f50066s)) * 31;
            n1 n1Var = this.f50067t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f50068u.hashCode()) * 31;
            String str2 = this.f50069v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f50070w)) * 31;
            String str3 = this.f50071x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f50066s;
        }

        @Override // to.n1
        public List k() {
            return this.f50065r;
        }

        @Override // to.n1
        public List l() {
            return this.f50061i;
        }

        @Override // to.n1.h
        public fo.v p() {
            return this.f50068u;
        }

        @Override // to.n1.h
        public q q() {
            return this.f50062o;
        }

        @Override // to.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f50060e;
        }

        @Override // to.n1.h
        public d0 s() {
            return this.f50063p;
        }

        @Override // to.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public String toString() {
            h4.a aVar = this.f50060e;
            List list = this.f50061i;
            q qVar = this.f50062o;
            d0 d0Var = this.f50063p;
            String str = this.f50064q;
            List list2 = this.f50065r;
            int i10 = this.f50066s;
            n1 n1Var = this.f50067t;
            fo.v vVar = this.f50068u;
            String str2 = this.f50069v;
            boolean z10 = this.f50070w;
            String str3 = this.f50071x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        public final i u(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, fo.v cameraProperties, String str2, boolean z10, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new i(currentPart, uploadingIds, captureConfig, idForReview, str, parts, i10, n1Var, cameraProperties, str2, z10, str3);
        }

        public final String w() {
            return this.f50069v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50060e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50061i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f50062o, i10);
            dest.writeParcelable(this.f50063p, i10);
            dest.writeString(this.f50064q);
            List<Parcelable> list2 = this.f50065r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50066s);
            dest.writeParcelable(this.f50067t, i10);
            dest.writeParcelable(this.f50068u, i10);
            dest.writeString(this.f50069v);
            dest.writeInt(this.f50070w ? 1 : 0);
            dest.writeString(this.f50071x);
        }

        public final String x() {
            return this.f50064q;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, fo.v cameraProperties, String str2, boolean z10, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f50060e = currentPart;
            this.f50061i = uploadingIds;
            this.f50062o = captureConfig;
            this.f50063p = idForReview;
            this.f50064q = str;
            this.f50065r = parts;
            this.f50066s = i10;
            this.f50067t = n1Var;
            this.f50068u = cameraProperties;
            this.f50069v = str2;
            this.f50070w = z10;
            this.f50071x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f50080e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50081i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f50082o;

        /* renamed from: p  reason: collision with root package name */
        private final List f50083p;

        /* renamed from: q  reason: collision with root package name */
        private final int f50084q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f50085r;

        /* renamed from: s  reason: collision with root package name */
        private final String f50086s;

        /* renamed from: t  reason: collision with root package name */
        private final ap.c f50087t;

        /* renamed from: u  reason: collision with root package name */
        private final String f50088u;

        /* renamed from: v  reason: collision with root package name */
        private final fo.v f50089v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                ap.c createFromParcel;
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
                    createFromParcel = ap.c.CREATOR.createFromParcel(parcel);
                }
                return new k(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, createFromParcel, parcel.readString(), (fo.v) parcel.readParcelable(k.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        public /* synthetic */ k(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, ap.c cVar, String str2, fo.v vVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f49582o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f50085r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f50080e, kVar.f50080e) && Intrinsics.areEqual(this.f50081i, kVar.f50081i) && Intrinsics.areEqual(this.f50082o, kVar.f50082o) && Intrinsics.areEqual(this.f50083p, kVar.f50083p) && this.f50084q == kVar.f50084q && Intrinsics.areEqual(this.f50085r, kVar.f50085r) && Intrinsics.areEqual(this.f50086s, kVar.f50086s) && Intrinsics.areEqual(this.f50087t, kVar.f50087t) && Intrinsics.areEqual(this.f50088u, kVar.f50088u) && Intrinsics.areEqual(this.f50089v, kVar.f50089v)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50086s;
        }

        @Override // to.n1
        public h4 g() {
            return this.f50082o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f50080e.hashCode() * 31) + this.f50081i.hashCode()) * 31) + this.f50082o.hashCode()) * 31) + this.f50083p.hashCode()) * 31) + Integer.hashCode(this.f50084q)) * 31;
            n1 n1Var = this.f50085r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f50086s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ap.c cVar = this.f50087t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f50088u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f50089v.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f50084q;
        }

        @Override // to.n1
        public List k() {
            return this.f50083p;
        }

        @Override // to.n1
        public List l() {
            return this.f50081i;
        }

        public final fo.v p() {
            return this.f50089v;
        }

        public final ap.c q() {
            return this.f50087t;
        }

        public final String r() {
            return this.f50088u;
        }

        public String toString() {
            c4 c4Var = this.f50080e;
            List list = this.f50081i;
            h4 h4Var = this.f50082o;
            List list2 = this.f50083p;
            int i10 = this.f50084q;
            n1 n1Var = this.f50085r;
            String str = this.f50086s;
            ap.c cVar = this.f50087t;
            String str2 = this.f50088u;
            fo.v vVar = this.f50089v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50080e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50081i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f50082o, i10);
            List<Parcelable> list2 = this.f50083p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50084q);
            dest.writeParcelable(this.f50085r, i10);
            dest.writeString(this.f50086s);
            ap.c cVar = this.f50087t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f50088u);
            dest.writeParcelable(this.f50089v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, String str2, fo.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f50080e = id2;
            this.f50081i = uploadingIds;
            this.f50082o = currentPart;
            this.f50083p = parts;
            this.f50084q = i10;
            this.f50085r = n1Var;
            this.f50086s = str;
            this.f50087t = cVar;
            this.f50088u = str2;
            this.f50089v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements to.d, to.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f50090e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50091i;

        /* renamed from: o  reason: collision with root package name */
        private final q f50092o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f50093p;

        /* renamed from: q  reason: collision with root package name */
        private final List f50094q;

        /* renamed from: r  reason: collision with root package name */
        private final int f50095r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f50096s;

        /* renamed from: t  reason: collision with root package name */
        private final bp.t f50097t;

        /* renamed from: u  reason: collision with root package name */
        private final String f50098u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f50099v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f50100w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f50101x;

        /* renamed from: y  reason: collision with root package name */
        private final String f50102y;

        /* renamed from: z  reason: collision with root package name */
        private final zo.d f50103z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                bp.t valueOf;
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
                    valueOf = bp.t.valueOf(parcel.readString());
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
                return new l(createFromParcel, arrayList, qVar, valueOf2, arrayList2, readInt3, n1Var, valueOf, readString, th2, z10, z11, parcel.readString(), (zo.d) parcel.readParcelable(l.class.getClassLoader()), null, 16384, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, bp.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, zo.d dVar, Function0 function0, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, aVar2, list2, i10, n1Var, tVar, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? true : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? true : z11, str2, (i11 & 8192) != 0 ? null : dVar, (i11 & 16384) != 0 ? new Function0() { // from class: to.o1
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
            return Unit.f32556a;
        }

        public static /* synthetic */ l s(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, bp.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, zo.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.r((i11 & 1) != 0 ? lVar.f50090e : aVar, (i11 & 2) != 0 ? lVar.f50091i : list, (i11 & 4) != 0 ? lVar.f50092o : qVar, (i11 & 8) != 0 ? lVar.f50093p : aVar2, (i11 & 16) != 0 ? lVar.f50094q : list2, (i11 & 32) != 0 ? lVar.f50095r : i10, (i11 & 64) != 0 ? lVar.f50096s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f50097t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f50098u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f50099v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f50100w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f50101x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f50102y : str2, (i11 & 8192) != 0 ? lVar.f50103z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        public final zo.d A() {
            return this.f50103z;
        }

        public final f5.b.a B() {
            return this.f50093p;
        }

        public final Function0 C() {
            return this.A;
        }

        public final String D() {
            return this.f50098u;
        }

        public final bp.t E() {
            return this.f50097t;
        }

        @Override // to.b
        public n1 a(boolean z10) {
            return s(this, null, null, null, null, null, 0, null, null, null, null, false, z10, null, null, null, 30719, null);
        }

        @Override // to.d
        public n1 b(boolean z10) {
            return s(this, null, null, null, null, null, 0, null, null, null, null, z10, false, null, null, null, 31743, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f50096s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f50090e, lVar.f50090e) && Intrinsics.areEqual(this.f50091i, lVar.f50091i) && Intrinsics.areEqual(this.f50092o, lVar.f50092o) && this.f50093p == lVar.f50093p && Intrinsics.areEqual(this.f50094q, lVar.f50094q) && this.f50095r == lVar.f50095r && Intrinsics.areEqual(this.f50096s, lVar.f50096s) && this.f50097t == lVar.f50097t && Intrinsics.areEqual(this.f50098u, lVar.f50098u) && Intrinsics.areEqual(this.f50099v, lVar.f50099v) && this.f50100w == lVar.f50100w && this.f50101x == lVar.f50101x && Intrinsics.areEqual(this.f50102y, lVar.f50102y) && Intrinsics.areEqual(this.f50103z, lVar.f50103z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50102y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f50090e.hashCode() * 31) + this.f50091i.hashCode()) * 31) + this.f50092o.hashCode()) * 31) + this.f50093p.hashCode()) * 31) + this.f50094q.hashCode()) * 31) + Integer.hashCode(this.f50095r)) * 31;
            n1 n1Var = this.f50096s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            bp.t tVar = this.f50097t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f50098u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f50099v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f50100w)) * 31) + Boolean.hashCode(this.f50101x)) * 31;
            String str2 = this.f50102y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            zo.d dVar = this.f50103z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f50095r;
        }

        @Override // to.n1
        public List k() {
            return this.f50094q;
        }

        @Override // to.n1
        public List l() {
            return this.f50091i;
        }

        public final l r(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, bp.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, zo.d dVar, Function0 webRtcConnectionEstablished) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            return new l(currentPart, uploadingIds, captureConfig, manualCapture, parts, i10, n1Var, tVar, str, th2, z10, z11, str2, dVar, webRtcConnectionEstablished);
        }

        public final q t() {
            return this.f50092o;
        }

        public String toString() {
            h4.a aVar = this.f50090e;
            List list = this.f50091i;
            q qVar = this.f50092o;
            f5.b.a aVar2 = this.f50093p;
            List list2 = this.f50094q;
            int i10 = this.f50095r;
            n1 n1Var = this.f50096s;
            bp.t tVar = this.f50097t;
            String str = this.f50098u;
            Throwable th2 = this.f50099v;
            boolean z10 = this.f50100w;
            boolean z11 = this.f50101x;
            String str2 = this.f50102y;
            zo.d dVar = this.f50103z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public boolean u() {
            return this.f50101x;
        }

        public boolean v() {
            return this.f50100w;
        }

        @Override // to.n1
        /* renamed from: w */
        public h4.a g() {
            return this.f50090e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50090e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50091i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f50092o, i10);
            dest.writeString(this.f50093p.name());
            List<Parcelable> list2 = this.f50094q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50095r);
            dest.writeParcelable(this.f50096s, i10);
            bp.t tVar = this.f50097t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f50098u);
            dest.writeSerializable(this.f50099v);
            dest.writeInt(this.f50100w ? 1 : 0);
            dest.writeInt(this.f50101x ? 1 : 0);
            dest.writeString(this.f50102y);
            dest.writeParcelable(this.f50103z, i10);
        }

        public final Throwable x() {
            return this.f50099v;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, bp.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, zo.d dVar, Function0 webRtcConnectionEstablished) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            this.f50090e = currentPart;
            this.f50091i = uploadingIds;
            this.f50092o = captureConfig;
            this.f50093p = manualCapture;
            this.f50094q = parts;
            this.f50095r = i10;
            this.f50096s = n1Var;
            this.f50097t = tVar;
            this.f50098u = str;
            this.f50099v = th2;
            this.f50100w = z10;
            this.f50101x = z11;
            this.f50102y = str2;
            this.f50103z = dVar;
            this.A = webRtcConnectionEstablished;
        }
    }

    private n1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends n1 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0675a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49990e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49991i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49992o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49993p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f49994q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49995r;

        /* renamed from: s  reason: collision with root package name */
        private final List f49996s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49997t;

        /* renamed from: u  reason: collision with root package name */
        private final List f49998u;

        /* renamed from: v  reason: collision with root package name */
        private final String f49999v;

        /* renamed from: w  reason: collision with root package name */
        private final String f50000w;

        /* renamed from: x  reason: collision with root package name */
        private final to.c f50001x;

        /* renamed from: to.n1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0675a implements Parcelable.Creator {
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
                fo.v vVar = (fo.v) parcel.readParcelable(a.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new a(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString(), to.c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, fo.v vVar, List list4, String str2, String str3, to.c cVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49582o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49994q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f49990e, aVar.f49990e) && Intrinsics.areEqual(this.f49991i, aVar.f49991i) && Intrinsics.areEqual(this.f49992o, aVar.f49992o) && this.f49993p == aVar.f49993p && Intrinsics.areEqual(this.f49994q, aVar.f49994q) && Intrinsics.areEqual(this.f49995r, aVar.f49995r) && Intrinsics.areEqual(this.f49996s, aVar.f49996s) && Intrinsics.areEqual(this.f49997t, aVar.f49997t) && Intrinsics.areEqual(this.f49998u, aVar.f49998u) && Intrinsics.areEqual(this.f49999v, aVar.f49999v) && Intrinsics.areEqual(this.f50000w, aVar.f50000w) && this.f50001x == aVar.f50001x) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49995r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f49990e.hashCode() * 31) + this.f49991i.hashCode()) * 31) + this.f49992o.hashCode()) * 31) + Integer.hashCode(this.f49993p)) * 31;
            n1 n1Var = this.f49994q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f49995r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f49996s.hashCode()) * 31) + this.f49997t.hashCode()) * 31) + this.f49998u.hashCode()) * 31;
            String str2 = this.f49999v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f50000w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f50001x.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f49993p;
        }

        @Override // to.n1
        public List k() {
            return this.f49992o;
        }

        @Override // to.n1
        public List l() {
            return this.f49991i;
        }

        public final List p() {
            return this.f49996s;
        }

        @Override // to.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f49990e;
        }

        public final to.c r() {
            return this.f50001x;
        }

        public final List s() {
            return this.f49998u;
        }

        public String toString() {
            h4.a aVar = this.f49990e;
            List list = this.f49991i;
            List list2 = this.f49992o;
            int i10 = this.f49993p;
            n1 n1Var = this.f49994q;
            String str = this.f49995r;
            List list3 = this.f49996s;
            fo.v vVar = this.f49997t;
            List list4 = this.f49998u;
            String str2 = this.f49999v;
            String str3 = this.f50000w;
            to.c cVar = this.f50001x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49990e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49991i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49992o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49993p);
            dest.writeParcelable(this.f49994q, i10);
            dest.writeString(this.f49995r);
            List<c0> list3 = this.f49996s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f49997t, i10);
            List<e4> list4 = this.f49998u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49999v);
            dest.writeString(this.f50000w);
            dest.writeString(this.f50001x.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, fo.v cameraProperties, List idConfigsForCountry, String str2, String str3, to.c errorType) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            Intrinsics.checkNotNullParameter(errorType, "errorType");
            this.f49990e = currentPart;
            this.f49991i = uploadingIds;
            this.f49992o = parts;
            this.f49993p = i10;
            this.f49994q = n1Var;
            this.f49995r = str;
            this.f49996s = captureFrames;
            this.f49997t = cameraProperties;
            this.f49998u = idConfigsForCountry;
            this.f49999v = str2;
            this.f50000w = str3;
            this.f50001x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f50013e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50014i;

        /* renamed from: o  reason: collision with root package name */
        private final List f50015o;

        /* renamed from: p  reason: collision with root package name */
        private final int f50016p;

        /* renamed from: q  reason: collision with root package name */
        private final String f50017q;

        /* renamed from: r  reason: collision with root package name */
        private final q f50018r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f50019s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f50020t;

        /* renamed from: u  reason: collision with root package name */
        private final String f50021u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49582o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c q(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f50013e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f50014i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f50015o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f50016p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f50017q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f50018r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f50019s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f50020t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f50021u;
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

        @Override // to.n1
        public n1 e() {
            return this.f50020t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f50013e, cVar.f50013e) && Intrinsics.areEqual(this.f50014i, cVar.f50014i) && Intrinsics.areEqual(this.f50015o, cVar.f50015o) && this.f50016p == cVar.f50016p && Intrinsics.areEqual(this.f50017q, cVar.f50017q) && Intrinsics.areEqual(this.f50018r, cVar.f50018r) && this.f50019s == cVar.f50019s && Intrinsics.areEqual(this.f50020t, cVar.f50020t) && Intrinsics.areEqual(this.f50021u, cVar.f50021u)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50017q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f50013e.hashCode() * 31) + this.f50014i.hashCode()) * 31) + this.f50015o.hashCode()) * 31) + Integer.hashCode(this.f50016p)) * 31;
            String str = this.f50017q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f50018r.hashCode()) * 31) + Boolean.hashCode(this.f50019s)) * 31;
            n1 n1Var = this.f50020t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f50021u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f50016p;
        }

        @Override // to.n1
        public List k() {
            return this.f50015o;
        }

        @Override // to.n1
        public List l() {
            return this.f50014i;
        }

        public final c p(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q r() {
            return this.f50018r;
        }

        public final boolean s() {
            return this.f50019s;
        }

        @Override // to.n1
        /* renamed from: t */
        public h4.a g() {
            return this.f50013e;
        }

        public String toString() {
            h4.a aVar = this.f50013e;
            List list = this.f50014i;
            List list2 = this.f50015o;
            int i10 = this.f50016p;
            String str = this.f50017q;
            q qVar = this.f50018r;
            boolean z10 = this.f50019s;
            n1 n1Var = this.f50020t;
            String str2 = this.f50021u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        public final String u() {
            return this.f50021u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f50013e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f50014i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f50015o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f50016p);
            dest.writeString(this.f50017q);
            dest.writeParcelable(this.f50018r, i10);
            dest.writeInt(this.f50019s ? 1 : 0);
            dest.writeParcelable(this.f50020t, i10);
            dest.writeString(this.f50021u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f50013e = currentPart;
            this.f50014i = uploadingIds;
            this.f50015o = parts;
            this.f50016p = i10;
            this.f50017q = str;
            this.f50018r = captureConfig;
            this.f50019s = z10;
            this.f50020t = n1Var;
            this.f50021u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f50072e;

        /* renamed from: i  reason: collision with root package name */
        private final List f50073i;

        /* renamed from: o  reason: collision with root package name */
        private final List f50074o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f50075p;

        /* renamed from: q  reason: collision with root package name */
        private final int f50076q;

        /* renamed from: r  reason: collision with root package name */
        private final String f50077r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f50078s;

        /* renamed from: t  reason: collision with root package name */
        private final String f50079t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49582o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j q(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f50072e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f50073i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f50074o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f50075p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f50076q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f50077r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f50078s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f50079t;
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

        @Override // to.n1
        public n1 e() {
            return this.f50075p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f50072e, jVar.f50072e) && Intrinsics.areEqual(this.f50073i, jVar.f50073i) && Intrinsics.areEqual(this.f50074o, jVar.f50074o) && Intrinsics.areEqual(this.f50075p, jVar.f50075p) && this.f50076q == jVar.f50076q && Intrinsics.areEqual(this.f50077r, jVar.f50077r) && Intrinsics.areEqual(this.f50078s, jVar.f50078s) && Intrinsics.areEqual(this.f50079t, jVar.f50079t)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f50077r;
        }

        @Override // to.n1
        public h4 g() {
            return this.f50072e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f50072e.hashCode() * 31) + this.f50073i.hashCode()) * 31) + this.f50074o.hashCode()) * 31;
            n1 n1Var = this.f50075p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f50076q)) * 31;
            String str = this.f50077r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f50078s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f50079t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f50076q;
        }

        @Override // to.n1
        public List k() {
            return this.f50074o;
        }

        @Override // to.n1
        public List l() {
            return this.f50073i;
        }

        public final j p(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String r() {
            return this.f50079t;
        }

        public String toString() {
            h4 h4Var = this.f50072e;
            List list = this.f50073i;
            List list2 = this.f50074o;
            n1 n1Var = this.f50075p;
            int i10 = this.f50076q;
            String str = this.f50077r;
            c4 c4Var = this.f50078s;
            String str2 = this.f50079t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f50072e, i10);
            List<Parcelable> list = this.f50073i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f50074o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f50075p, i10);
            dest.writeInt(this.f50076q);
            dest.writeString(this.f50077r);
            c4 c4Var = this.f50078s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f50079t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f50072e = currentPart;
            this.f50073i = uploadingIds;
            this.f50074o = parts;
            this.f50075p = n1Var;
            this.f50076q = i10;
            this.f50077r = str;
            this.f50078s = c4Var;
            this.f50079t = str2;
        }
    }
}
