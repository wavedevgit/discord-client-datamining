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
    private boolean f49421d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49434e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49435i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49436o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49437p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f49438q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49439r;

        /* renamed from: s  reason: collision with root package name */
        private final List f49440s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49441t;

        /* renamed from: u  reason: collision with root package name */
        private final List f49442u;

        /* renamed from: v  reason: collision with root package name */
        private final String f49443v;

        /* renamed from: w  reason: collision with root package name */
        private final String f49444w;

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
            this.f49434e = currentPart;
            this.f49435i = uploadingIds;
            this.f49436o = parts;
            this.f49437p = i10;
            this.f49438q = n1Var;
            this.f49439r = str;
            this.f49440s = captureFrames;
            this.f49441t = cameraProperties;
            this.f49442u = idConfigsForCountry;
            this.f49443v = str2;
            this.f49444w = str3;
        }

        public static /* synthetic */ b q(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, fo.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f49434e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f49435i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f49436o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f49437p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f49438q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f49439r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f49440s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f49441t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f49442u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f49443v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f49444w;
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
            return this.f49438q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f49434e, bVar.f49434e) && Intrinsics.areEqual(this.f49435i, bVar.f49435i) && Intrinsics.areEqual(this.f49436o, bVar.f49436o) && this.f49437p == bVar.f49437p && Intrinsics.areEqual(this.f49438q, bVar.f49438q) && Intrinsics.areEqual(this.f49439r, bVar.f49439r) && Intrinsics.areEqual(this.f49440s, bVar.f49440s) && Intrinsics.areEqual(this.f49441t, bVar.f49441t) && Intrinsics.areEqual(this.f49442u, bVar.f49442u) && Intrinsics.areEqual(this.f49443v, bVar.f49443v) && Intrinsics.areEqual(this.f49444w, bVar.f49444w)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49439r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f49434e.hashCode() * 31) + this.f49435i.hashCode()) * 31) + this.f49436o.hashCode()) * 31) + Integer.hashCode(this.f49437p)) * 31;
            n1 n1Var = this.f49438q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f49439r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f49440s.hashCode()) * 31) + this.f49441t.hashCode()) * 31) + this.f49442u.hashCode()) * 31;
            String str2 = this.f49443v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f49444w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49437p;
        }

        @Override // to.n1
        public List k() {
            return this.f49436o;
        }

        @Override // to.n1
        public List l() {
            return this.f49435i;
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
            return this.f49441t;
        }

        @Override // to.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f49434e;
        }

        public final List t() {
            return this.f49442u;
        }

        public String toString() {
            h4.a aVar = this.f49434e;
            List list = this.f49435i;
            List list2 = this.f49436o;
            int i10 = this.f49437p;
            n1 n1Var = this.f49438q;
            String str = this.f49439r;
            List list3 = this.f49440s;
            fo.v vVar = this.f49441t;
            List list4 = this.f49442u;
            String str2 = this.f49443v;
            String str3 = this.f49444w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        public final String u() {
            return this.f49443v;
        }

        public final String v() {
            return this.f49444w;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49434e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49435i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49436o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49437p);
            dest.writeParcelable(this.f49438q, i10);
            dest.writeString(this.f49439r);
            List<c0> list3 = this.f49440s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f49441t, i10);
            List<e4> list4 = this.f49442u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49443v);
            dest.writeString(this.f49444w);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49454e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49455i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49456o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f49457p;

        /* renamed from: q  reason: collision with root package name */
        private final List f49458q;

        /* renamed from: r  reason: collision with root package name */
        private final int f49459r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f49460s;

        /* renamed from: t  reason: collision with root package name */
        private final String f49461t;

        /* renamed from: u  reason: collision with root package name */
        private final zo.d f49462u;

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
            this.f49454e = currentPart;
            this.f49455i = uploadingIds;
            this.f49456o = captureConfig;
            this.f49457p = idForReview;
            this.f49458q = parts;
            this.f49459r = i10;
            this.f49460s = n1Var;
            this.f49461t = str;
            this.f49462u = dVar;
        }

        public static /* synthetic */ d q(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, zo.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f49454e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f49455i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f49456o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f49457p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f49458q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f49459r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f49460s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f49461t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f49462u;
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
            for (c0 c0Var : this.f49457p.m2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49460s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f49454e, dVar.f49454e) && Intrinsics.areEqual(this.f49455i, dVar.f49455i) && Intrinsics.areEqual(this.f49456o, dVar.f49456o) && Intrinsics.areEqual(this.f49457p, dVar.f49457p) && Intrinsics.areEqual(this.f49458q, dVar.f49458q) && this.f49459r == dVar.f49459r && Intrinsics.areEqual(this.f49460s, dVar.f49460s) && Intrinsics.areEqual(this.f49461t, dVar.f49461t) && Intrinsics.areEqual(this.f49462u, dVar.f49462u)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49461t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f49454e.hashCode() * 31) + this.f49455i.hashCode()) * 31) + this.f49456o.hashCode()) * 31) + this.f49457p.hashCode()) * 31) + this.f49458q.hashCode()) * 31) + Integer.hashCode(this.f49459r)) * 31;
            n1 n1Var = this.f49460s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f49461t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            zo.d dVar = this.f49462u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49459r;
        }

        @Override // to.n1
        public List k() {
            return this.f49458q;
        }

        @Override // to.n1
        public List l() {
            return this.f49455i;
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
            return this.f49456o;
        }

        @Override // to.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f49454e;
        }

        public final zo.d t() {
            return this.f49462u;
        }

        public String toString() {
            h4.a aVar = this.f49454e;
            List list = this.f49455i;
            q qVar = this.f49456o;
            d0.b bVar = this.f49457p;
            List list2 = this.f49458q;
            int i10 = this.f49459r;
            n1 n1Var = this.f49460s;
            String str = this.f49461t;
            zo.d dVar = this.f49462u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        public final d0.b u() {
            return this.f49457p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49454e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49455i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49456o, i10);
            this.f49457p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f49458q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49459r);
            dest.writeParcelable(this.f49460s, i10);
            dest.writeString(this.f49461t);
            dest.writeParcelable(this.f49462u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f49463e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49464i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f49465o;

        /* renamed from: p  reason: collision with root package name */
        private final List f49466p;

        /* renamed from: q  reason: collision with root package name */
        private final int f49467q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f49468r;

        /* renamed from: s  reason: collision with root package name */
        private final String f49469s;

        /* renamed from: t  reason: collision with root package name */
        private final ap.c f49470t;

        /* renamed from: u  reason: collision with root package name */
        private final long f49471u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f49472v;

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
                c4Var = eVar.f49463e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f49464i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f49465o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f49466p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f49467q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f49468r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f49469s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f49470t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f49471u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f49472v;
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
            return this.f49468r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f49463e, eVar.f49463e) && Intrinsics.areEqual(this.f49464i, eVar.f49464i) && Intrinsics.areEqual(this.f49465o, eVar.f49465o) && Intrinsics.areEqual(this.f49466p, eVar.f49466p) && this.f49467q == eVar.f49467q && Intrinsics.areEqual(this.f49468r, eVar.f49468r) && Intrinsics.areEqual(this.f49469s, eVar.f49469s) && Intrinsics.areEqual(this.f49470t, eVar.f49470t) && this.f49471u == eVar.f49471u && this.f49472v == eVar.f49472v) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49469s;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49465o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f49463e.hashCode() * 31) + this.f49464i.hashCode()) * 31) + this.f49465o.hashCode()) * 31) + this.f49466p.hashCode()) * 31) + Integer.hashCode(this.f49467q)) * 31;
            n1 n1Var = this.f49468r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f49469s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ap.c cVar = this.f49470t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f49471u)) * 31) + Boolean.hashCode(this.f49472v);
        }

        @Override // to.n1
        public int j() {
            return this.f49467q;
        }

        @Override // to.n1
        public List k() {
            return this.f49466p;
        }

        @Override // to.n1
        public List l() {
            return this.f49464i;
        }

        public final e p(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 r() {
            return this.f49463e;
        }

        public final long s() {
            return this.f49471u;
        }

        public final boolean t() {
            return this.f49472v;
        }

        public String toString() {
            c4 c4Var = this.f49463e;
            List list = this.f49464i;
            h4 h4Var = this.f49465o;
            List list2 = this.f49466p;
            int i10 = this.f49467q;
            n1 n1Var = this.f49468r;
            String str = this.f49469s;
            ap.c cVar = this.f49470t;
            long j10 = this.f49471u;
            boolean z10 = this.f49472v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49463e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49464i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49465o, i10);
            List<Parcelable> list2 = this.f49466p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49467q);
            dest.writeParcelable(this.f49468r, i10);
            dest.writeString(this.f49469s);
            ap.c cVar = this.f49470t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f49471u);
            dest.writeInt(this.f49472v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f49463e = id2;
            this.f49464i = uploadingIds;
            this.f49465o = currentPart;
            this.f49466p = parts;
            this.f49467q = i10;
            this.f49468r = n1Var;
            this.f49469s = str;
            this.f49470t = cVar;
            this.f49471u = j10;
            this.f49472v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f49473e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49474i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49475o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49476p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f49477q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49478r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f49479s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49480t;

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
            this.f49473e = currentPart;
            this.f49474i = uploadingIds;
            this.f49475o = parts;
            this.f49476p = i10;
            this.f49477q = n1Var;
            this.f49478r = str;
            this.f49479s = id2;
            this.f49480t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49477q;
        }

        @Override // to.n1
        public String f() {
            return this.f49478r;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49473e;
        }

        @Override // to.n1
        public int j() {
            return this.f49476p;
        }

        @Override // to.n1
        public List k() {
            return this.f49475o;
        }

        @Override // to.n1
        public List l() {
            return this.f49474i;
        }

        public final c4 p() {
            return this.f49479s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f49473e, i10);
            List<Parcelable> list = this.f49474i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49475o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49476p);
            dest.writeParcelable(this.f49477q, i10);
            dest.writeString(this.f49478r);
            this.f49479s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f49480t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49481e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49482i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49483o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f49484p;

        /* renamed from: q  reason: collision with root package name */
        private final List f49485q;

        /* renamed from: r  reason: collision with root package name */
        private final int f49486r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f49487s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49488t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49489u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f49490v;

        /* renamed from: w  reason: collision with root package name */
        private final String f49491w;

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
                aVar = gVar.f49481e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f49482i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f49483o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f49484p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f49485q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f49486r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f49487s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f49488t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f49489u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f49490v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f49491w;
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
            return this.f49487s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f49481e, gVar.f49481e) && Intrinsics.areEqual(this.f49482i, gVar.f49482i) && Intrinsics.areEqual(this.f49483o, gVar.f49483o) && Intrinsics.areEqual(this.f49484p, gVar.f49484p) && Intrinsics.areEqual(this.f49485q, gVar.f49485q) && this.f49486r == gVar.f49486r && Intrinsics.areEqual(this.f49487s, gVar.f49487s) && Intrinsics.areEqual(this.f49488t, gVar.f49488t) && Intrinsics.areEqual(this.f49489u, gVar.f49489u) && this.f49490v == gVar.f49490v && Intrinsics.areEqual(this.f49491w, gVar.f49491w)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49491w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f49481e.hashCode() * 31) + this.f49482i.hashCode()) * 31) + this.f49483o.hashCode()) * 31) + this.f49484p.hashCode()) * 31) + this.f49485q.hashCode()) * 31) + Integer.hashCode(this.f49486r)) * 31;
            n1 n1Var = this.f49487s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f49488t.hashCode()) * 31;
            String str = this.f49489u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f49490v)) * 31;
            String str2 = this.f49491w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49486r;
        }

        @Override // to.n1
        public List k() {
            return this.f49485q;
        }

        @Override // to.n1
        public List l() {
            return this.f49482i;
        }

        @Override // to.n1.h
        public fo.v p() {
            return this.f49488t;
        }

        @Override // to.n1.h
        public q q() {
            return this.f49483o;
        }

        @Override // to.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f49481e;
        }

        @Override // to.n1.h
        public d0 s() {
            return this.f49484p;
        }

        @Override // to.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public String toString() {
            h4.a aVar = this.f49481e;
            List list = this.f49482i;
            q qVar = this.f49483o;
            d0 d0Var = this.f49484p;
            List list2 = this.f49485q;
            int i10 = this.f49486r;
            n1 n1Var = this.f49487s;
            fo.v vVar = this.f49488t;
            String str = this.f49489u;
            boolean z10 = this.f49490v;
            String str2 = this.f49491w;
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
            return this.f49489u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49481e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49482i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49483o, i10);
            dest.writeParcelable(this.f49484p, i10);
            List<Parcelable> list2 = this.f49485q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49486r);
            dest.writeParcelable(this.f49487s, i10);
            dest.writeParcelable(this.f49488t, i10);
            dest.writeString(this.f49489u);
            dest.writeInt(this.f49490v ? 1 : 0);
            dest.writeString(this.f49491w);
        }

        public boolean x() {
            return this.f49490v;
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
            this.f49481e = currentPart;
            this.f49482i = uploadingIds;
            this.f49483o = captureConfig;
            this.f49484p = idForReview;
            this.f49485q = parts;
            this.f49486r = i10;
            this.f49487s = n1Var;
            this.f49488t = cameraProperties;
            this.f49489u = str;
            this.f49490v = z10;
            this.f49491w = str2;
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
        return this.f49421d;
    }

    public abstract int j();

    public abstract List k();

    public abstract List l();

    public final void o(boolean z10) {
        this.f49421d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49492e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49493i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49494o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f49495p;

        /* renamed from: q  reason: collision with root package name */
        private final String f49496q;

        /* renamed from: r  reason: collision with root package name */
        private final List f49497r;

        /* renamed from: s  reason: collision with root package name */
        private final int f49498s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f49499t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.v f49500u;

        /* renamed from: v  reason: collision with root package name */
        private final String f49501v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f49502w;

        /* renamed from: x  reason: collision with root package name */
        private final String f49503x;

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
                aVar = iVar.f49492e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f49493i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f49494o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f49495p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f49496q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f49497r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f49498s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f49499t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f49500u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f49501v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f49502w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f49503x;
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
            return this.f49502w;
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
            return this.f49499t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f49492e, iVar.f49492e) && Intrinsics.areEqual(this.f49493i, iVar.f49493i) && Intrinsics.areEqual(this.f49494o, iVar.f49494o) && Intrinsics.areEqual(this.f49495p, iVar.f49495p) && Intrinsics.areEqual(this.f49496q, iVar.f49496q) && Intrinsics.areEqual(this.f49497r, iVar.f49497r) && this.f49498s == iVar.f49498s && Intrinsics.areEqual(this.f49499t, iVar.f49499t) && Intrinsics.areEqual(this.f49500u, iVar.f49500u) && Intrinsics.areEqual(this.f49501v, iVar.f49501v) && this.f49502w == iVar.f49502w && Intrinsics.areEqual(this.f49503x, iVar.f49503x)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49503x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f49492e.hashCode() * 31) + this.f49493i.hashCode()) * 31) + this.f49494o.hashCode()) * 31) + this.f49495p.hashCode()) * 31;
            String str = this.f49496q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f49497r.hashCode()) * 31) + Integer.hashCode(this.f49498s)) * 31;
            n1 n1Var = this.f49499t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f49500u.hashCode()) * 31;
            String str2 = this.f49501v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f49502w)) * 31;
            String str3 = this.f49503x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49498s;
        }

        @Override // to.n1
        public List k() {
            return this.f49497r;
        }

        @Override // to.n1
        public List l() {
            return this.f49493i;
        }

        @Override // to.n1.h
        public fo.v p() {
            return this.f49500u;
        }

        @Override // to.n1.h
        public q q() {
            return this.f49494o;
        }

        @Override // to.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f49492e;
        }

        @Override // to.n1.h
        public d0 s() {
            return this.f49495p;
        }

        @Override // to.n1.h
        public h t(boolean z10) {
            return v(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public String toString() {
            h4.a aVar = this.f49492e;
            List list = this.f49493i;
            q qVar = this.f49494o;
            d0 d0Var = this.f49495p;
            String str = this.f49496q;
            List list2 = this.f49497r;
            int i10 = this.f49498s;
            n1 n1Var = this.f49499t;
            fo.v vVar = this.f49500u;
            String str2 = this.f49501v;
            boolean z10 = this.f49502w;
            String str3 = this.f49503x;
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
            return this.f49501v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49492e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49493i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49494o, i10);
            dest.writeParcelable(this.f49495p, i10);
            dest.writeString(this.f49496q);
            List<Parcelable> list2 = this.f49497r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49498s);
            dest.writeParcelable(this.f49499t, i10);
            dest.writeParcelable(this.f49500u, i10);
            dest.writeString(this.f49501v);
            dest.writeInt(this.f49502w ? 1 : 0);
            dest.writeString(this.f49503x);
        }

        public final String x() {
            return this.f49496q;
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
            this.f49492e = currentPart;
            this.f49493i = uploadingIds;
            this.f49494o = captureConfig;
            this.f49495p = idForReview;
            this.f49496q = str;
            this.f49497r = parts;
            this.f49498s = i10;
            this.f49499t = n1Var;
            this.f49500u = cameraProperties;
            this.f49501v = str2;
            this.f49502w = z10;
            this.f49503x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f49512e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49513i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f49514o;

        /* renamed from: p  reason: collision with root package name */
        private final List f49515p;

        /* renamed from: q  reason: collision with root package name */
        private final int f49516q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f49517r;

        /* renamed from: s  reason: collision with root package name */
        private final String f49518s;

        /* renamed from: t  reason: collision with root package name */
        private final ap.c f49519t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49520u;

        /* renamed from: v  reason: collision with root package name */
        private final fo.v f49521v;

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
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f49014o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49517r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f49512e, kVar.f49512e) && Intrinsics.areEqual(this.f49513i, kVar.f49513i) && Intrinsics.areEqual(this.f49514o, kVar.f49514o) && Intrinsics.areEqual(this.f49515p, kVar.f49515p) && this.f49516q == kVar.f49516q && Intrinsics.areEqual(this.f49517r, kVar.f49517r) && Intrinsics.areEqual(this.f49518s, kVar.f49518s) && Intrinsics.areEqual(this.f49519t, kVar.f49519t) && Intrinsics.areEqual(this.f49520u, kVar.f49520u) && Intrinsics.areEqual(this.f49521v, kVar.f49521v)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49518s;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49514o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f49512e.hashCode() * 31) + this.f49513i.hashCode()) * 31) + this.f49514o.hashCode()) * 31) + this.f49515p.hashCode()) * 31) + Integer.hashCode(this.f49516q)) * 31;
            n1 n1Var = this.f49517r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f49518s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ap.c cVar = this.f49519t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f49520u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f49521v.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f49516q;
        }

        @Override // to.n1
        public List k() {
            return this.f49515p;
        }

        @Override // to.n1
        public List l() {
            return this.f49513i;
        }

        public final fo.v p() {
            return this.f49521v;
        }

        public final ap.c q() {
            return this.f49519t;
        }

        public final String r() {
            return this.f49520u;
        }

        public String toString() {
            c4 c4Var = this.f49512e;
            List list = this.f49513i;
            h4 h4Var = this.f49514o;
            List list2 = this.f49515p;
            int i10 = this.f49516q;
            n1 n1Var = this.f49517r;
            String str = this.f49518s;
            ap.c cVar = this.f49519t;
            String str2 = this.f49520u;
            fo.v vVar = this.f49521v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49512e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49513i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49514o, i10);
            List<Parcelable> list2 = this.f49515p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49516q);
            dest.writeParcelable(this.f49517r, i10);
            dest.writeString(this.f49518s);
            ap.c cVar = this.f49519t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49520u);
            dest.writeParcelable(this.f49521v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, ap.c cVar, String str2, fo.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f49512e = id2;
            this.f49513i = uploadingIds;
            this.f49514o = currentPart;
            this.f49515p = parts;
            this.f49516q = i10;
            this.f49517r = n1Var;
            this.f49518s = str;
            this.f49519t = cVar;
            this.f49520u = str2;
            this.f49521v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements to.d, to.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49522e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49523i;

        /* renamed from: o  reason: collision with root package name */
        private final q f49524o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f49525p;

        /* renamed from: q  reason: collision with root package name */
        private final List f49526q;

        /* renamed from: r  reason: collision with root package name */
        private final int f49527r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f49528s;

        /* renamed from: t  reason: collision with root package name */
        private final bp.t f49529t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49530u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f49531v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f49532w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f49533x;

        /* renamed from: y  reason: collision with root package name */
        private final String f49534y;

        /* renamed from: z  reason: collision with root package name */
        private final zo.d f49535z;

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
            return Unit.f31988a;
        }

        public static /* synthetic */ l s(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, bp.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, zo.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.r((i11 & 1) != 0 ? lVar.f49522e : aVar, (i11 & 2) != 0 ? lVar.f49523i : list, (i11 & 4) != 0 ? lVar.f49524o : qVar, (i11 & 8) != 0 ? lVar.f49525p : aVar2, (i11 & 16) != 0 ? lVar.f49526q : list2, (i11 & 32) != 0 ? lVar.f49527r : i10, (i11 & 64) != 0 ? lVar.f49528s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f49529t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f49530u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f49531v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f49532w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f49533x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f49534y : str2, (i11 & 8192) != 0 ? lVar.f49535z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        public final zo.d A() {
            return this.f49535z;
        }

        public final f5.b.a B() {
            return this.f49525p;
        }

        public final Function0 C() {
            return this.A;
        }

        public final String D() {
            return this.f49530u;
        }

        public final bp.t E() {
            return this.f49529t;
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
            return this.f49528s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f49522e, lVar.f49522e) && Intrinsics.areEqual(this.f49523i, lVar.f49523i) && Intrinsics.areEqual(this.f49524o, lVar.f49524o) && this.f49525p == lVar.f49525p && Intrinsics.areEqual(this.f49526q, lVar.f49526q) && this.f49527r == lVar.f49527r && Intrinsics.areEqual(this.f49528s, lVar.f49528s) && this.f49529t == lVar.f49529t && Intrinsics.areEqual(this.f49530u, lVar.f49530u) && Intrinsics.areEqual(this.f49531v, lVar.f49531v) && this.f49532w == lVar.f49532w && this.f49533x == lVar.f49533x && Intrinsics.areEqual(this.f49534y, lVar.f49534y) && Intrinsics.areEqual(this.f49535z, lVar.f49535z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49534y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f49522e.hashCode() * 31) + this.f49523i.hashCode()) * 31) + this.f49524o.hashCode()) * 31) + this.f49525p.hashCode()) * 31) + this.f49526q.hashCode()) * 31) + Integer.hashCode(this.f49527r)) * 31;
            n1 n1Var = this.f49528s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            bp.t tVar = this.f49529t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f49530u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f49531v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f49532w)) * 31) + Boolean.hashCode(this.f49533x)) * 31;
            String str2 = this.f49534y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            zo.d dVar = this.f49535z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f49527r;
        }

        @Override // to.n1
        public List k() {
            return this.f49526q;
        }

        @Override // to.n1
        public List l() {
            return this.f49523i;
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
            return this.f49524o;
        }

        public String toString() {
            h4.a aVar = this.f49522e;
            List list = this.f49523i;
            q qVar = this.f49524o;
            f5.b.a aVar2 = this.f49525p;
            List list2 = this.f49526q;
            int i10 = this.f49527r;
            n1 n1Var = this.f49528s;
            bp.t tVar = this.f49529t;
            String str = this.f49530u;
            Throwable th2 = this.f49531v;
            boolean z10 = this.f49532w;
            boolean z11 = this.f49533x;
            String str2 = this.f49534y;
            zo.d dVar = this.f49535z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public boolean u() {
            return this.f49533x;
        }

        public boolean v() {
            return this.f49532w;
        }

        @Override // to.n1
        /* renamed from: w */
        public h4.a g() {
            return this.f49522e;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49522e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49523i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f49524o, i10);
            dest.writeString(this.f49525p.name());
            List<Parcelable> list2 = this.f49526q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49527r);
            dest.writeParcelable(this.f49528s, i10);
            bp.t tVar = this.f49529t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f49530u);
            dest.writeSerializable(this.f49531v);
            dest.writeInt(this.f49532w ? 1 : 0);
            dest.writeInt(this.f49533x ? 1 : 0);
            dest.writeString(this.f49534y);
            dest.writeParcelable(this.f49535z, i10);
        }

        public final Throwable x() {
            return this.f49531v;
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
            this.f49522e = currentPart;
            this.f49523i = uploadingIds;
            this.f49524o = captureConfig;
            this.f49525p = manualCapture;
            this.f49526q = parts;
            this.f49527r = i10;
            this.f49528s = n1Var;
            this.f49529t = tVar;
            this.f49530u = str;
            this.f49531v = th2;
            this.f49532w = z10;
            this.f49533x = z11;
            this.f49534y = str2;
            this.f49535z = dVar;
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
        private final h4.a f49422e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49423i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49424o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49425p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f49426q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49427r;

        /* renamed from: s  reason: collision with root package name */
        private final List f49428s;

        /* renamed from: t  reason: collision with root package name */
        private final fo.v f49429t;

        /* renamed from: u  reason: collision with root package name */
        private final List f49430u;

        /* renamed from: v  reason: collision with root package name */
        private final String f49431v;

        /* renamed from: w  reason: collision with root package name */
        private final String f49432w;

        /* renamed from: x  reason: collision with root package name */
        private final to.c f49433x;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49014o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // to.n1
        public n1 e() {
            return this.f49426q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f49422e, aVar.f49422e) && Intrinsics.areEqual(this.f49423i, aVar.f49423i) && Intrinsics.areEqual(this.f49424o, aVar.f49424o) && this.f49425p == aVar.f49425p && Intrinsics.areEqual(this.f49426q, aVar.f49426q) && Intrinsics.areEqual(this.f49427r, aVar.f49427r) && Intrinsics.areEqual(this.f49428s, aVar.f49428s) && Intrinsics.areEqual(this.f49429t, aVar.f49429t) && Intrinsics.areEqual(this.f49430u, aVar.f49430u) && Intrinsics.areEqual(this.f49431v, aVar.f49431v) && Intrinsics.areEqual(this.f49432w, aVar.f49432w) && this.f49433x == aVar.f49433x) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49427r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f49422e.hashCode() * 31) + this.f49423i.hashCode()) * 31) + this.f49424o.hashCode()) * 31) + Integer.hashCode(this.f49425p)) * 31;
            n1 n1Var = this.f49426q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f49427r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f49428s.hashCode()) * 31) + this.f49429t.hashCode()) * 31) + this.f49430u.hashCode()) * 31;
            String str2 = this.f49431v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f49432w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f49433x.hashCode();
        }

        @Override // to.n1
        public int j() {
            return this.f49425p;
        }

        @Override // to.n1
        public List k() {
            return this.f49424o;
        }

        @Override // to.n1
        public List l() {
            return this.f49423i;
        }

        public final List p() {
            return this.f49428s;
        }

        @Override // to.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f49422e;
        }

        public final to.c r() {
            return this.f49433x;
        }

        public final List s() {
            return this.f49430u;
        }

        public String toString() {
            h4.a aVar = this.f49422e;
            List list = this.f49423i;
            List list2 = this.f49424o;
            int i10 = this.f49425p;
            n1 n1Var = this.f49426q;
            String str = this.f49427r;
            List list3 = this.f49428s;
            fo.v vVar = this.f49429t;
            List list4 = this.f49430u;
            String str2 = this.f49431v;
            String str3 = this.f49432w;
            to.c cVar = this.f49433x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49422e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49423i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49424o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49425p);
            dest.writeParcelable(this.f49426q, i10);
            dest.writeString(this.f49427r);
            List<c0> list3 = this.f49428s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f49429t, i10);
            List<e4> list4 = this.f49430u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49431v);
            dest.writeString(this.f49432w);
            dest.writeString(this.f49433x.name());
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
            this.f49422e = currentPart;
            this.f49423i = uploadingIds;
            this.f49424o = parts;
            this.f49425p = i10;
            this.f49426q = n1Var;
            this.f49427r = str;
            this.f49428s = captureFrames;
            this.f49429t = cameraProperties;
            this.f49430u = idConfigsForCountry;
            this.f49431v = str2;
            this.f49432w = str3;
            this.f49433x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f49445e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49446i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49447o;

        /* renamed from: p  reason: collision with root package name */
        private final int f49448p;

        /* renamed from: q  reason: collision with root package name */
        private final String f49449q;

        /* renamed from: r  reason: collision with root package name */
        private final q f49450r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f49451s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f49452t;

        /* renamed from: u  reason: collision with root package name */
        private final String f49453u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49014o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c q(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f49445e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f49446i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f49447o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f49448p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f49449q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f49450r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f49451s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f49452t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f49453u;
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
            return this.f49452t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f49445e, cVar.f49445e) && Intrinsics.areEqual(this.f49446i, cVar.f49446i) && Intrinsics.areEqual(this.f49447o, cVar.f49447o) && this.f49448p == cVar.f49448p && Intrinsics.areEqual(this.f49449q, cVar.f49449q) && Intrinsics.areEqual(this.f49450r, cVar.f49450r) && this.f49451s == cVar.f49451s && Intrinsics.areEqual(this.f49452t, cVar.f49452t) && Intrinsics.areEqual(this.f49453u, cVar.f49453u)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49449q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f49445e.hashCode() * 31) + this.f49446i.hashCode()) * 31) + this.f49447o.hashCode()) * 31) + Integer.hashCode(this.f49448p)) * 31;
            String str = this.f49449q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f49450r.hashCode()) * 31) + Boolean.hashCode(this.f49451s)) * 31;
            n1 n1Var = this.f49452t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f49453u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49448p;
        }

        @Override // to.n1
        public List k() {
            return this.f49447o;
        }

        @Override // to.n1
        public List l() {
            return this.f49446i;
        }

        public final c p(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q r() {
            return this.f49450r;
        }

        public final boolean s() {
            return this.f49451s;
        }

        @Override // to.n1
        /* renamed from: t */
        public h4.a g() {
            return this.f49445e;
        }

        public String toString() {
            h4.a aVar = this.f49445e;
            List list = this.f49446i;
            List list2 = this.f49447o;
            int i10 = this.f49448p;
            String str = this.f49449q;
            q qVar = this.f49450r;
            boolean z10 = this.f49451s;
            n1 n1Var = this.f49452t;
            String str2 = this.f49453u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        public final String u() {
            return this.f49453u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f49445e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f49446i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49447o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f49448p);
            dest.writeString(this.f49449q);
            dest.writeParcelable(this.f49450r, i10);
            dest.writeInt(this.f49451s ? 1 : 0);
            dest.writeParcelable(this.f49452t, i10);
            dest.writeString(this.f49453u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f49445e = currentPart;
            this.f49446i = uploadingIds;
            this.f49447o = parts;
            this.f49448p = i10;
            this.f49449q = str;
            this.f49450r = captureConfig;
            this.f49451s = z10;
            this.f49452t = n1Var;
            this.f49453u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f49504e;

        /* renamed from: i  reason: collision with root package name */
        private final List f49505i;

        /* renamed from: o  reason: collision with root package name */
        private final List f49506o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f49507p;

        /* renamed from: q  reason: collision with root package name */
        private final int f49508q;

        /* renamed from: r  reason: collision with root package name */
        private final String f49509r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f49510s;

        /* renamed from: t  reason: collision with root package name */
        private final String f49511t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f49014o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j q(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f49504e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f49505i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f49506o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f49507p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f49508q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f49509r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f49510s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f49511t;
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
            return this.f49507p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f49504e, jVar.f49504e) && Intrinsics.areEqual(this.f49505i, jVar.f49505i) && Intrinsics.areEqual(this.f49506o, jVar.f49506o) && Intrinsics.areEqual(this.f49507p, jVar.f49507p) && this.f49508q == jVar.f49508q && Intrinsics.areEqual(this.f49509r, jVar.f49509r) && Intrinsics.areEqual(this.f49510s, jVar.f49510s) && Intrinsics.areEqual(this.f49511t, jVar.f49511t)) {
                return true;
            }
            return false;
        }

        @Override // to.n1
        public String f() {
            return this.f49509r;
        }

        @Override // to.n1
        public h4 g() {
            return this.f49504e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f49504e.hashCode() * 31) + this.f49505i.hashCode()) * 31) + this.f49506o.hashCode()) * 31;
            n1 n1Var = this.f49507p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f49508q)) * 31;
            String str = this.f49509r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f49510s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f49511t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // to.n1
        public int j() {
            return this.f49508q;
        }

        @Override // to.n1
        public List k() {
            return this.f49506o;
        }

        @Override // to.n1
        public List l() {
            return this.f49505i;
        }

        public final j p(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String r() {
            return this.f49511t;
        }

        public String toString() {
            h4 h4Var = this.f49504e;
            List list = this.f49505i;
            List list2 = this.f49506o;
            n1 n1Var = this.f49507p;
            int i10 = this.f49508q;
            String str = this.f49509r;
            c4 c4Var = this.f49510s;
            String str2 = this.f49511t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f49504e, i10);
            List<Parcelable> list = this.f49505i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f49506o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f49507p, i10);
            dest.writeInt(this.f49508q);
            dest.writeString(this.f49509r);
            c4 c4Var = this.f49510s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49511t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f49504e = currentPart;
            this.f49505i = uploadingIds;
            this.f49506o = parts;
            this.f49507p = n1Var;
            this.f49508q = i10;
            this.f49509r = str;
            this.f49510s = c4Var;
            this.f49511t = str2;
        }
    }
}
