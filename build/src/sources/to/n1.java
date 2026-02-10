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
    private boolean f49420d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49433e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49434i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49435o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49436p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f49437q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49438r;

        /* renamed from: s  reason: collision with root package name */
        private final List f49439s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49440t;

        /* renamed from: u  reason: collision with root package name */
        private final List f49441u;

        /* renamed from: v  reason: collision with root package name */
        private final String f49442v;

        /* renamed from: w  reason: collision with root package name */
        private final String f49443w;

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
            this.f49433e = currentPart;
            this.f49434i = uploadingIds;
            this.f49435o = parts;
            this.f49436p = i10;
            this.f49437q = n1Var;
            this.f49438r = str;
            this.f49439s = captureFrames;
            this.f49440t = cameraProperties;
            this.f49441u = idConfigsForCountry;
            this.f49442v = str2;
            this.f49443w = str3;
        }

        public static /* synthetic */ b q(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, fo.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f49433e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f49434i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f49435o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f49436p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f49437q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f49438r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f49439s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f49440t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f49441u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f49442v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f49443w;
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
            return this.f49437q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f49433e, bVar.f49433e) && Intrinsics.areEqual(this.f49434i, bVar.f49434i) && Intrinsics.areEqual(this.f49435o, bVar.f49435o) && this.f49436p == bVar.f49436p && Intrinsics.areEqual(this.f49437q, bVar.f49437q) && Intrinsics.areEqual(this.f49438r, bVar.f49438r) && Intrinsics.areEqual(this.f49439s, bVar.f49439s) && Intrinsics.areEqual(this.f49440t, bVar.f49440t) && Intrinsics.areEqual(this.f49441u, bVar.f49441u) && Intrinsics.areEqual(this.f49442v, bVar.f49442v) && Intrinsics.areEqual(this.f49443w, bVar.f49443w)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49438r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f49433e.hashCode() * 31) + this.f49434i.hashCode()) * 31) + this.f49435o.hashCode()) * 31) + Integer.hashCode(this.f49436p)) * 31;
            n1 n1Var = this.f49437q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f49438r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f49439s.hashCode()) * 31) + this.f49440t.hashCode()) * 31) + this.f49441u.hashCode()) * 31;
            String str2 = this.f49442v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f49443w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49436p;
        }

        @Override // to.n1
        public List k() {
            return this.f49435o;
        }

        @Override // to.n1
        public List l() {
            return this.f49434i;
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
            return this.f49440t;
        }

        @Override // to.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f49433e;
        }

        public final List t() {
            return this.f49441u;
        }

        public String toString() {
            h4.a aVar = this.f49433e;
            List list = this.f49434i;
            List list2 = this.f49435o;
            int i10 = this.f49436p;
            n1 n1Var = this.f49437q;
            String str = this.f49438r;
            List list3 = this.f49439s;
            fo.v vVar = this.f49440t;
            List list4 = this.f49441u;
            String str2 = this.f49442v;
            String str3 = this.f49443w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        public final String u() {
            return this.f49442v;
        }

        public final String v() {
            return this.f49443w;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49433e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49434i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49435o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49436p);
            dest.writeParcelable(this.f49437q, i10);
            dest.writeString(this.f49438r);
            List<c0> list3 = this.f49439s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f49440t, i10);
            List<e4> list4 = this.f49441u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49442v);
            dest.writeString(this.f49443w);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49453e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49454i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49455o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f49456p;

        /* renamed from: q  reason: collision with root package name */
        private final List f49457q;

        /* renamed from: r  reason: collision with root package name */
        private final int f49458r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f49459s;

        /* renamed from: t  reason: collision with root package name */
        private final String f49460t;

        /* renamed from: u  reason: collision with root package name */
        private final zo.d f49461u;

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
            this.f49453e = currentPart;
            this.f49454i = uploadingIds;
            this.f49455o = captureConfig;
            this.f49456p = idForReview;
            this.f49457q = parts;
            this.f49458r = i10;
            this.f49459s = n1Var;
            this.f49460t = str;
            this.f49461u = dVar;
        }

        public static /* synthetic */ d q(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, zo.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f49453e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f49454i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f49455o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f49456p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f49457q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f49458r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f49459s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f49460t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f49461u;
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
            for (c0 c0Var : this.f49456p.m2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49459s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f49453e, dVar.f49453e) && Intrinsics.areEqual(this.f49454i, dVar.f49454i) && Intrinsics.areEqual(this.f49455o, dVar.f49455o) && Intrinsics.areEqual(this.f49456p, dVar.f49456p) && Intrinsics.areEqual(this.f49457q, dVar.f49457q) && this.f49458r == dVar.f49458r && Intrinsics.areEqual(this.f49459s, dVar.f49459s) && Intrinsics.areEqual(this.f49460t, dVar.f49460t) && Intrinsics.areEqual(this.f49461u, dVar.f49461u)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49460t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f49453e.hashCode() * 31) + this.f49454i.hashCode()) * 31) + this.f49455o.hashCode()) * 31) + this.f49456p.hashCode()) * 31) + this.f49457q.hashCode()) * 31) + Integer.hashCode(this.f49458r)) * 31;
            n1 n1Var = this.f49459s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f49460t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            zo.d dVar = this.f49461u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49458r;
        }

        @Override // to.n1
        public List k() {
            return this.f49457q;
        }

        @Override // to.n1
        public List l() {
            return this.f49454i;
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
            return this.f49455o;
        }

        @Override // to.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f49453e;
        }

        public final zo.d t() {
            return this.f49461u;
        }

        public String toString() {
            h4.a aVar = this.f49453e;
            List list = this.f49454i;
            q qVar = this.f49455o;
            d0.b bVar = this.f49456p;
            List list2 = this.f49457q;
            int i10 = this.f49458r;
            n1 n1Var = this.f49459s;
            String str = this.f49460t;
            zo.d dVar = this.f49461u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        public final d0.b u() {
            return this.f49456p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49453e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49454i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49455o, i10);
            this.f49456p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f49457q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49458r);
            dest.writeParcelable(this.f49459s, i10);
            dest.writeString(this.f49460t);
            dest.writeParcelable(this.f49461u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f49462e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49463i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f49464o;

        /* renamed from: p  reason: collision with root package name */
        private final List f49465p;

        /* renamed from: q  reason: collision with root package name */
        private final int f49466q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f49467r;

        /* renamed from: s  reason: collision with root package name */
        private final String f49468s;

        /* renamed from: t  reason: collision with root package name */
        private final ap.c f49469t;

        /* renamed from: u  reason: collision with root package name */
        private final long f49470u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f49471v;

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
                c4Var = eVar.f49462e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f49463i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f49464o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f49465p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f49466q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f49467r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f49468s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f49469t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f49470u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f49471v;
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
            return this.f49467r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f49462e, eVar.f49462e) && Intrinsics.areEqual(this.f49463i, eVar.f49463i) && Intrinsics.areEqual(this.f49464o, eVar.f49464o) && Intrinsics.areEqual(this.f49465p, eVar.f49465p) && this.f49466q == eVar.f49466q && Intrinsics.areEqual(this.f49467r, eVar.f49467r) && Intrinsics.areEqual(this.f49468s, eVar.f49468s) && Intrinsics.areEqual(this.f49469t, eVar.f49469t) && this.f49470u == eVar.f49470u && this.f49471v == eVar.f49471v) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49468s;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49464o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f49462e.hashCode() * 31) + this.f49463i.hashCode()) * 31) + this.f49464o.hashCode()) * 31) + this.f49465p.hashCode()) * 31) + Integer.hashCode(this.f49466q)) * 31;
            n1 n1Var = this.f49467r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f49468s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ap.c cVar = this.f49469t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f49470u)) * 31) + Boolean.hashCode(this.f49471v);
        }

        @Override // to.n1
        public int j() {
            return this.f49466q;
        }

        @Override // to.n1
        public List k() {
            return this.f49465p;
        }

        @Override // to.n1
        public List l() {
            return this.f49463i;
        }

        public final e p(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 r() {
            return this.f49462e;
        }

        public final long s() {
            return this.f49470u;
        }

        public final boolean t() {
            return this.f49471v;
        }

        public String toString() {
            c4 c4Var = this.f49462e;
            List list = this.f49463i;
            h4 h4Var = this.f49464o;
            List list2 = this.f49465p;
            int i10 = this.f49466q;
            n1 n1Var = this.f49467r;
            String str = this.f49468s;
            ap.c cVar = this.f49469t;
            long j10 = this.f49470u;
            boolean z10 = this.f49471v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49462e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49463i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49464o, i10);
            List<Parcelable> list2 = this.f49465p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49466q);
            dest.writeParcelable(this.f49467r, i10);
            dest.writeString(this.f49468s);
            ap.c cVar = this.f49469t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f49470u);
            dest.writeInt(this.f49471v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f49462e = id2;
            this.f49463i = uploadingIds;
            this.f49464o = currentPart;
            this.f49465p = parts;
            this.f49466q = i10;
            this.f49467r = n1Var;
            this.f49468s = str;
            this.f49469t = cVar;
            this.f49470u = j10;
            this.f49471v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f49472e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49473i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49474o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49475p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f49476q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49477r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f49478s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49479t;

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
            this.f49472e = currentPart;
            this.f49473i = uploadingIds;
            this.f49474o = parts;
            this.f49475p = i10;
            this.f49476q = n1Var;
            this.f49477r = str;
            this.f49478s = id2;
            this.f49479t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49476q;
        }

        @Override // to.n1
        public String f() {
            return this.f49477r;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49472e;
        }

        @Override // to.n1
        public int j() {
            return this.f49475p;
        }

        @Override // to.n1
        public List k() {
            return this.f49474o;
        }

        @Override // to.n1
        public List l() {
            return this.f49473i;
        }

        public final c4 p() {
            return this.f49478s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f49472e, i10);
            List<Parcelable> list = this.f49473i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49474o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49475p);
            dest.writeParcelable(this.f49476q, i10);
            dest.writeString(this.f49477r);
            this.f49478s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f49479t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49480e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49481i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49482o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f49483p;

        /* renamed from: q  reason: collision with root package name */
        private final List f49484q;

        /* renamed from: r  reason: collision with root package name */
        private final int f49485r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f49486s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49487t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49488u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f49489v;

        /* renamed from: w  reason: collision with root package name */
        private final String f49490w;

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
                aVar = gVar.f49480e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f49481i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f49482o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f49483p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f49484q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f49485r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f49486s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f49487t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f49488u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f49489v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f49490w;
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
            return this.f49486s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f49480e, gVar.f49480e) && Intrinsics.areEqual(this.f49481i, gVar.f49481i) && Intrinsics.areEqual(this.f49482o, gVar.f49482o) && Intrinsics.areEqual(this.f49483p, gVar.f49483p) && Intrinsics.areEqual(this.f49484q, gVar.f49484q) && this.f49485r == gVar.f49485r && Intrinsics.areEqual(this.f49486s, gVar.f49486s) && Intrinsics.areEqual(this.f49487t, gVar.f49487t) && Intrinsics.areEqual(this.f49488u, gVar.f49488u) && this.f49489v == gVar.f49489v && Intrinsics.areEqual(this.f49490w, gVar.f49490w)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49490w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f49480e.hashCode() * 31) + this.f49481i.hashCode()) * 31) + this.f49482o.hashCode()) * 31) + this.f49483p.hashCode()) * 31) + this.f49484q.hashCode()) * 31) + Integer.hashCode(this.f49485r)) * 31;
            n1 n1Var = this.f49486s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f49487t.hashCode()) * 31;
            String str = this.f49488u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f49489v)) * 31;
            String str2 = this.f49490w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49485r;
        }

        @Override // to.n1
        public List k() {
            return this.f49484q;
        }

        @Override // to.n1
        public List l() {
            return this.f49481i;
        }

        @Override // to.n1.h
        public fo.v p() {
            return this.f49487t;
        }

        @Override // to.n1.h
        public q q() {
            return this.f49482o;
        }

        @Override // to.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f49480e;
        }

        @Override // to.n1.h
        public d0 s() {
            return this.f49483p;
        }

        @Override // to.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public String toString() {
            h4.a aVar = this.f49480e;
            List list = this.f49481i;
            q qVar = this.f49482o;
            d0 d0Var = this.f49483p;
            List list2 = this.f49484q;
            int i10 = this.f49485r;
            n1 n1Var = this.f49486s;
            fo.v vVar = this.f49487t;
            String str = this.f49488u;
            boolean z10 = this.f49489v;
            String str2 = this.f49490w;
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
            return this.f49488u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49480e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49481i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49482o, i10);
            dest.writeParcelable(this.f49483p, i10);
            List<Parcelable> list2 = this.f49484q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49485r);
            dest.writeParcelable(this.f49486s, i10);
            dest.writeParcelable(this.f49487t, i10);
            dest.writeString(this.f49488u);
            dest.writeInt(this.f49489v ? 1 : 0);
            dest.writeString(this.f49490w);
        }

        public boolean x() {
            return this.f49489v;
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
            this.f49480e = currentPart;
            this.f49481i = uploadingIds;
            this.f49482o = captureConfig;
            this.f49483p = idForReview;
            this.f49484q = parts;
            this.f49485r = i10;
            this.f49486s = n1Var;
            this.f49487t = cameraProperties;
            this.f49488u = str;
            this.f49489v = z10;
            this.f49490w = str2;
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
        return this.f49420d;
    }

    public abstract int j();

    public abstract List k();

    public abstract List l();

    public final void o(boolean z10) {
        this.f49420d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49491e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49492i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49493o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f49494p;

        /* renamed from: q  reason: collision with root package name */
        private final String f49495q;

        /* renamed from: r  reason: collision with root package name */
        private final List f49496r;

        /* renamed from: s  reason: collision with root package name */
        private final int f49497s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f49498t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f49499u;

        /* renamed from: v  reason: collision with root package name */
        private final String f49500v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f49501w;

        /* renamed from: x  reason: collision with root package name */
        private final String f49502x;

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
                aVar = iVar.f49491e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f49492i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f49493o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f49494p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f49495q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f49496r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f49497s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f49498t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f49499u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f49500v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f49501w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f49502x;
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
            return this.f49501w;
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
            return this.f49498t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f49491e, iVar.f49491e) && Intrinsics.areEqual(this.f49492i, iVar.f49492i) && Intrinsics.areEqual(this.f49493o, iVar.f49493o) && Intrinsics.areEqual(this.f49494p, iVar.f49494p) && Intrinsics.areEqual(this.f49495q, iVar.f49495q) && Intrinsics.areEqual(this.f49496r, iVar.f49496r) && this.f49497s == iVar.f49497s && Intrinsics.areEqual(this.f49498t, iVar.f49498t) && Intrinsics.areEqual(this.f49499u, iVar.f49499u) && Intrinsics.areEqual(this.f49500v, iVar.f49500v) && this.f49501w == iVar.f49501w && Intrinsics.areEqual(this.f49502x, iVar.f49502x)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49502x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f49491e.hashCode() * 31) + this.f49492i.hashCode()) * 31) + this.f49493o.hashCode()) * 31) + this.f49494p.hashCode()) * 31;
            String str = this.f49495q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f49496r.hashCode()) * 31) + Integer.hashCode(this.f49497s)) * 31;
            n1 n1Var = this.f49498t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f49499u.hashCode()) * 31;
            String str2 = this.f49500v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f49501w)) * 31;
            String str3 = this.f49502x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49497s;
        }

        @Override // to.n1
        public List k() {
            return this.f49496r;
        }

        @Override // to.n1
        public List l() {
            return this.f49492i;
        }

        @Override // to.n1.h
        public fo.v p() {
            return this.f49499u;
        }

        @Override // to.n1.h
        public q q() {
            return this.f49493o;
        }

        @Override // to.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f49491e;
        }

        @Override // to.n1.h
        public d0 s() {
            return this.f49494p;
        }

        @Override // to.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public String toString() {
            h4.a aVar = this.f49491e;
            List list = this.f49492i;
            q qVar = this.f49493o;
            d0 d0Var = this.f49494p;
            String str = this.f49495q;
            List list2 = this.f49496r;
            int i10 = this.f49497s;
            n1 n1Var = this.f49498t;
            fo.v vVar = this.f49499u;
            String str2 = this.f49500v;
            boolean z10 = this.f49501w;
            String str3 = this.f49502x;
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
            return this.f49500v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49491e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49492i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49493o, i10);
            dest.writeParcelable(this.f49494p, i10);
            dest.writeString(this.f49495q);
            List<Parcelable> list2 = this.f49496r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49497s);
            dest.writeParcelable(this.f49498t, i10);
            dest.writeParcelable(this.f49499u, i10);
            dest.writeString(this.f49500v);
            dest.writeInt(this.f49501w ? 1 : 0);
            dest.writeString(this.f49502x);
        }

        public final String x() {
            return this.f49495q;
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
            this.f49491e = currentPart;
            this.f49492i = uploadingIds;
            this.f49493o = captureConfig;
            this.f49494p = idForReview;
            this.f49495q = str;
            this.f49496r = parts;
            this.f49497s = i10;
            this.f49498t = n1Var;
            this.f49499u = cameraProperties;
            this.f49500v = str2;
            this.f49501w = z10;
            this.f49502x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f49511e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49512i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f49513o;

        /* renamed from: p  reason: collision with root package name */
        private final List f49514p;

        /* renamed from: q  reason: collision with root package name */
        private final int f49515q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f49516r;

        /* renamed from: s  reason: collision with root package name */
        private final String f49517s;

        /* renamed from: t  reason: collision with root package name */
        private final ap.c f49518t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49519u;

        /* renamed from: v  reason: collision with root package name */
        private final fo.v f49520v;

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
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f49013o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49516r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f49511e, kVar.f49511e) && Intrinsics.areEqual(this.f49512i, kVar.f49512i) && Intrinsics.areEqual(this.f49513o, kVar.f49513o) && Intrinsics.areEqual(this.f49514p, kVar.f49514p) && this.f49515q == kVar.f49515q && Intrinsics.areEqual(this.f49516r, kVar.f49516r) && Intrinsics.areEqual(this.f49517s, kVar.f49517s) && Intrinsics.areEqual(this.f49518t, kVar.f49518t) && Intrinsics.areEqual(this.f49519u, kVar.f49519u) && Intrinsics.areEqual(this.f49520v, kVar.f49520v)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49517s;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49513o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f49511e.hashCode() * 31) + this.f49512i.hashCode()) * 31) + this.f49513o.hashCode()) * 31) + this.f49514p.hashCode()) * 31) + Integer.hashCode(this.f49515q)) * 31;
            n1 n1Var = this.f49516r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f49517s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ap.c cVar = this.f49518t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f49519u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f49520v.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f49515q;
        }

        @Override // to.n1
        public List k() {
            return this.f49514p;
        }

        @Override // to.n1
        public List l() {
            return this.f49512i;
        }

        public final fo.v p() {
            return this.f49520v;
        }

        public final ap.c q() {
            return this.f49518t;
        }

        public final String r() {
            return this.f49519u;
        }

        public String toString() {
            c4 c4Var = this.f49511e;
            List list = this.f49512i;
            h4 h4Var = this.f49513o;
            List list2 = this.f49514p;
            int i10 = this.f49515q;
            n1 n1Var = this.f49516r;
            String str = this.f49517s;
            ap.c cVar = this.f49518t;
            String str2 = this.f49519u;
            fo.v vVar = this.f49520v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49511e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49512i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49513o, i10);
            List<Parcelable> list2 = this.f49514p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49515q);
            dest.writeParcelable(this.f49516r, i10);
            dest.writeString(this.f49517s);
            ap.c cVar = this.f49518t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49519u);
            dest.writeParcelable(this.f49520v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, String str2, fo.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f49511e = id2;
            this.f49512i = uploadingIds;
            this.f49513o = currentPart;
            this.f49514p = parts;
            this.f49515q = i10;
            this.f49516r = n1Var;
            this.f49517s = str;
            this.f49518t = cVar;
            this.f49519u = str2;
            this.f49520v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements to.d, to.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49521e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49522i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49523o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f49524p;

        /* renamed from: q  reason: collision with root package name */
        private final List f49525q;

        /* renamed from: r  reason: collision with root package name */
        private final int f49526r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f49527s;

        /* renamed from: t  reason: collision with root package name */
        private final bp.t f49528t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49529u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f49530v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f49531w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f49532x;

        /* renamed from: y  reason: collision with root package name */
        private final String f49533y;

        /* renamed from: z  reason: collision with root package name */
        private final zo.d f49534z;

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
            return Unit.f31987a;
        }

        public static /* synthetic */ l s(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, bp.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, zo.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.r((i11 & 1) != 0 ? lVar.f49521e : aVar, (i11 & 2) != 0 ? lVar.f49522i : list, (i11 & 4) != 0 ? lVar.f49523o : qVar, (i11 & 8) != 0 ? lVar.f49524p : aVar2, (i11 & 16) != 0 ? lVar.f49525q : list2, (i11 & 32) != 0 ? lVar.f49526r : i10, (i11 & 64) != 0 ? lVar.f49527s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f49528t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f49529u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f49530v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f49531w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f49532x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f49533y : str2, (i11 & 8192) != 0 ? lVar.f49534z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        public final zo.d A() {
            return this.f49534z;
        }

        public final f5.b.a B() {
            return this.f49524p;
        }

        public final Function0 C() {
            return this.A;
        }

        public final String D() {
            return this.f49529u;
        }

        public final bp.t E() {
            return this.f49528t;
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
            return this.f49527s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f49521e, lVar.f49521e) && Intrinsics.areEqual(this.f49522i, lVar.f49522i) && Intrinsics.areEqual(this.f49523o, lVar.f49523o) && this.f49524p == lVar.f49524p && Intrinsics.areEqual(this.f49525q, lVar.f49525q) && this.f49526r == lVar.f49526r && Intrinsics.areEqual(this.f49527s, lVar.f49527s) && this.f49528t == lVar.f49528t && Intrinsics.areEqual(this.f49529u, lVar.f49529u) && Intrinsics.areEqual(this.f49530v, lVar.f49530v) && this.f49531w == lVar.f49531w && this.f49532x == lVar.f49532x && Intrinsics.areEqual(this.f49533y, lVar.f49533y) && Intrinsics.areEqual(this.f49534z, lVar.f49534z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49533y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f49521e.hashCode() * 31) + this.f49522i.hashCode()) * 31) + this.f49523o.hashCode()) * 31) + this.f49524p.hashCode()) * 31) + this.f49525q.hashCode()) * 31) + Integer.hashCode(this.f49526r)) * 31;
            n1 n1Var = this.f49527s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            bp.t tVar = this.f49528t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f49529u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f49530v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f49531w)) * 31) + Boolean.hashCode(this.f49532x)) * 31;
            String str2 = this.f49533y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            zo.d dVar = this.f49534z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f49526r;
        }

        @Override // to.n1
        public List k() {
            return this.f49525q;
        }

        @Override // to.n1
        public List l() {
            return this.f49522i;
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
            return this.f49523o;
        }

        public String toString() {
            h4.a aVar = this.f49521e;
            List list = this.f49522i;
            q qVar = this.f49523o;
            f5.b.a aVar2 = this.f49524p;
            List list2 = this.f49525q;
            int i10 = this.f49526r;
            n1 n1Var = this.f49527s;
            bp.t tVar = this.f49528t;
            String str = this.f49529u;
            Throwable th2 = this.f49530v;
            boolean z10 = this.f49531w;
            boolean z11 = this.f49532x;
            String str2 = this.f49533y;
            zo.d dVar = this.f49534z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public boolean u() {
            return this.f49532x;
        }

        public boolean v() {
            return this.f49531w;
        }

        @Override // to.n1
        /* renamed from: w */
        public h4.a g() {
            return this.f49521e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49521e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49522i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49523o, i10);
            dest.writeString(this.f49524p.name());
            List<Parcelable> list2 = this.f49525q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49526r);
            dest.writeParcelable(this.f49527s, i10);
            bp.t tVar = this.f49528t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f49529u);
            dest.writeSerializable(this.f49530v);
            dest.writeInt(this.f49531w ? 1 : 0);
            dest.writeInt(this.f49532x ? 1 : 0);
            dest.writeString(this.f49533y);
            dest.writeParcelable(this.f49534z, i10);
        }

        public final Throwable x() {
            return this.f49530v;
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
            this.f49521e = currentPart;
            this.f49522i = uploadingIds;
            this.f49523o = captureConfig;
            this.f49524p = manualCapture;
            this.f49525q = parts;
            this.f49526r = i10;
            this.f49527s = n1Var;
            this.f49528t = tVar;
            this.f49529u = str;
            this.f49530v = th2;
            this.f49531w = z10;
            this.f49532x = z11;
            this.f49533y = str2;
            this.f49534z = dVar;
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
        private final h4.a f49421e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49422i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49423o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49424p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f49425q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49426r;

        /* renamed from: s  reason: collision with root package name */
        private final List f49427s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49428t;

        /* renamed from: u  reason: collision with root package name */
        private final List f49429u;

        /* renamed from: v  reason: collision with root package name */
        private final String f49430v;

        /* renamed from: w  reason: collision with root package name */
        private final String f49431w;

        /* renamed from: x  reason: collision with root package name */
        private final to.c f49432x;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49013o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49425q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f49421e, aVar.f49421e) && Intrinsics.areEqual(this.f49422i, aVar.f49422i) && Intrinsics.areEqual(this.f49423o, aVar.f49423o) && this.f49424p == aVar.f49424p && Intrinsics.areEqual(this.f49425q, aVar.f49425q) && Intrinsics.areEqual(this.f49426r, aVar.f49426r) && Intrinsics.areEqual(this.f49427s, aVar.f49427s) && Intrinsics.areEqual(this.f49428t, aVar.f49428t) && Intrinsics.areEqual(this.f49429u, aVar.f49429u) && Intrinsics.areEqual(this.f49430v, aVar.f49430v) && Intrinsics.areEqual(this.f49431w, aVar.f49431w) && this.f49432x == aVar.f49432x) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49426r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f49421e.hashCode() * 31) + this.f49422i.hashCode()) * 31) + this.f49423o.hashCode()) * 31) + Integer.hashCode(this.f49424p)) * 31;
            n1 n1Var = this.f49425q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f49426r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f49427s.hashCode()) * 31) + this.f49428t.hashCode()) * 31) + this.f49429u.hashCode()) * 31;
            String str2 = this.f49430v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f49431w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f49432x.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f49424p;
        }

        @Override // to.n1
        public List k() {
            return this.f49423o;
        }

        @Override // to.n1
        public List l() {
            return this.f49422i;
        }

        public final List p() {
            return this.f49427s;
        }

        @Override // to.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f49421e;
        }

        public final to.c r() {
            return this.f49432x;
        }

        public final List s() {
            return this.f49429u;
        }

        public String toString() {
            h4.a aVar = this.f49421e;
            List list = this.f49422i;
            List list2 = this.f49423o;
            int i10 = this.f49424p;
            n1 n1Var = this.f49425q;
            String str = this.f49426r;
            List list3 = this.f49427s;
            fo.v vVar = this.f49428t;
            List list4 = this.f49429u;
            String str2 = this.f49430v;
            String str3 = this.f49431w;
            to.c cVar = this.f49432x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49421e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49422i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49423o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49424p);
            dest.writeParcelable(this.f49425q, i10);
            dest.writeString(this.f49426r);
            List<c0> list3 = this.f49427s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f49428t, i10);
            List<e4> list4 = this.f49429u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49430v);
            dest.writeString(this.f49431w);
            dest.writeString(this.f49432x.name());
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
            this.f49421e = currentPart;
            this.f49422i = uploadingIds;
            this.f49423o = parts;
            this.f49424p = i10;
            this.f49425q = n1Var;
            this.f49426r = str;
            this.f49427s = captureFrames;
            this.f49428t = cameraProperties;
            this.f49429u = idConfigsForCountry;
            this.f49430v = str2;
            this.f49431w = str3;
            this.f49432x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49444e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49445i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49446o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49447p;

        /* renamed from: q  reason: collision with root package name */
        private final String f49448q;

        /* renamed from: r  reason: collision with root package name */
        private final q f49449r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f49450s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f49451t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49452u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49013o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c q(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f49444e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f49445i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f49446o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f49447p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f49448q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f49449r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f49450s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f49451t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f49452u;
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
            return this.f49451t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f49444e, cVar.f49444e) && Intrinsics.areEqual(this.f49445i, cVar.f49445i) && Intrinsics.areEqual(this.f49446o, cVar.f49446o) && this.f49447p == cVar.f49447p && Intrinsics.areEqual(this.f49448q, cVar.f49448q) && Intrinsics.areEqual(this.f49449r, cVar.f49449r) && this.f49450s == cVar.f49450s && Intrinsics.areEqual(this.f49451t, cVar.f49451t) && Intrinsics.areEqual(this.f49452u, cVar.f49452u)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49448q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f49444e.hashCode() * 31) + this.f49445i.hashCode()) * 31) + this.f49446o.hashCode()) * 31) + Integer.hashCode(this.f49447p)) * 31;
            String str = this.f49448q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f49449r.hashCode()) * 31) + Boolean.hashCode(this.f49450s)) * 31;
            n1 n1Var = this.f49451t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f49452u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49447p;
        }

        @Override // to.n1
        public List k() {
            return this.f49446o;
        }

        @Override // to.n1
        public List l() {
            return this.f49445i;
        }

        public final c p(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q r() {
            return this.f49449r;
        }

        public final boolean s() {
            return this.f49450s;
        }

        @Override // to.n1
        /* renamed from: t */
        public h4.a g() {
            return this.f49444e;
        }

        public String toString() {
            h4.a aVar = this.f49444e;
            List list = this.f49445i;
            List list2 = this.f49446o;
            int i10 = this.f49447p;
            String str = this.f49448q;
            q qVar = this.f49449r;
            boolean z10 = this.f49450s;
            n1 n1Var = this.f49451t;
            String str2 = this.f49452u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        public final String u() {
            return this.f49452u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49444e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49445i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49446o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49447p);
            dest.writeString(this.f49448q);
            dest.writeParcelable(this.f49449r, i10);
            dest.writeInt(this.f49450s ? 1 : 0);
            dest.writeParcelable(this.f49451t, i10);
            dest.writeString(this.f49452u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f49444e = currentPart;
            this.f49445i = uploadingIds;
            this.f49446o = parts;
            this.f49447p = i10;
            this.f49448q = str;
            this.f49449r = captureConfig;
            this.f49450s = z10;
            this.f49451t = n1Var;
            this.f49452u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f49503e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49504i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49505o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f49506p;

        /* renamed from: q  reason: collision with root package name */
        private final int f49507q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49508r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f49509s;

        /* renamed from: t  reason: collision with root package name */
        private final String f49510t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49013o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j q(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f49503e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f49504i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f49505o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f49506p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f49507q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f49508r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f49509s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f49510t;
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
            return this.f49506p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f49503e, jVar.f49503e) && Intrinsics.areEqual(this.f49504i, jVar.f49504i) && Intrinsics.areEqual(this.f49505o, jVar.f49505o) && Intrinsics.areEqual(this.f49506p, jVar.f49506p) && this.f49507q == jVar.f49507q && Intrinsics.areEqual(this.f49508r, jVar.f49508r) && Intrinsics.areEqual(this.f49509s, jVar.f49509s) && Intrinsics.areEqual(this.f49510t, jVar.f49510t)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49508r;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49503e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f49503e.hashCode() * 31) + this.f49504i.hashCode()) * 31) + this.f49505o.hashCode()) * 31;
            n1 n1Var = this.f49506p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f49507q)) * 31;
            String str = this.f49508r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f49509s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f49510t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49507q;
        }

        @Override // to.n1
        public List k() {
            return this.f49505o;
        }

        @Override // to.n1
        public List l() {
            return this.f49504i;
        }

        public final j p(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String r() {
            return this.f49510t;
        }

        public String toString() {
            h4 h4Var = this.f49503e;
            List list = this.f49504i;
            List list2 = this.f49505o;
            n1 n1Var = this.f49506p;
            int i10 = this.f49507q;
            String str = this.f49508r;
            c4 c4Var = this.f49509s;
            String str2 = this.f49510t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f49503e, i10);
            List<Parcelable> list = this.f49504i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49505o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f49506p, i10);
            dest.writeInt(this.f49507q);
            dest.writeString(this.f49508r);
            c4 c4Var = this.f49509s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49510t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f49503e = currentPart;
            this.f49504i = uploadingIds;
            this.f49505o = parts;
            this.f49506p = n1Var;
            this.f49507q = i10;
            this.f49508r = str;
            this.f49509s = c4Var;
            this.f49510t = str2;
        }
    }
}
