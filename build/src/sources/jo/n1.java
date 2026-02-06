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
    private boolean f30429d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30442e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30443i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30444o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30445p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f30446q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30447r;

        /* renamed from: s  reason: collision with root package name */
        private final List f30448s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30449t;

        /* renamed from: u  reason: collision with root package name */
        private final List f30450u;

        /* renamed from: v  reason: collision with root package name */
        private final String f30451v;

        /* renamed from: w  reason: collision with root package name */
        private final String f30452w;

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
            this.f30442e = currentPart;
            this.f30443i = uploadingIds;
            this.f30444o = parts;
            this.f30445p = i10;
            this.f30446q = n1Var;
            this.f30447r = str;
            this.f30448s = captureFrames;
            this.f30449t = cameraProperties;
            this.f30450u = idConfigsForCountry;
            this.f30451v = str2;
            this.f30452w = str3;
        }

        public static /* synthetic */ b r(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, un.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f30442e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f30443i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f30444o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f30445p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f30446q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f30447r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f30448s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f30449t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f30450u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f30451v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f30452w;
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
            return this.f30446q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f30442e, bVar.f30442e) && Intrinsics.areEqual(this.f30443i, bVar.f30443i) && Intrinsics.areEqual(this.f30444o, bVar.f30444o) && this.f30445p == bVar.f30445p && Intrinsics.areEqual(this.f30446q, bVar.f30446q) && Intrinsics.areEqual(this.f30447r, bVar.f30447r) && Intrinsics.areEqual(this.f30448s, bVar.f30448s) && Intrinsics.areEqual(this.f30449t, bVar.f30449t) && Intrinsics.areEqual(this.f30450u, bVar.f30450u) && Intrinsics.areEqual(this.f30451v, bVar.f30451v) && Intrinsics.areEqual(this.f30452w, bVar.f30452w)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30447r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f30442e.hashCode() * 31) + this.f30443i.hashCode()) * 31) + this.f30444o.hashCode()) * 31) + Integer.hashCode(this.f30445p)) * 31;
            n1 n1Var = this.f30446q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f30447r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f30448s.hashCode()) * 31) + this.f30449t.hashCode()) * 31) + this.f30450u.hashCode()) * 31;
            String str2 = this.f30451v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f30452w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30445p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30444o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30443i;
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
            return this.f30449t;
        }

        public String toString() {
            h4.a aVar = this.f30442e;
            List list = this.f30443i;
            List list2 = this.f30444o;
            int i10 = this.f30445p;
            n1 n1Var = this.f30446q;
            String str = this.f30447r;
            List list3 = this.f30448s;
            un.v vVar = this.f30449t;
            List list4 = this.f30450u;
            String str2 = this.f30451v;
            String str3 = this.f30452w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        @Override // jo.n1
        /* renamed from: u */
        public h4.a h() {
            return this.f30442e;
        }

        public final List v() {
            return this.f30450u;
        }

        public final String w() {
            return this.f30451v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30442e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30443i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30444o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30445p);
            dest.writeParcelable(this.f30446q, i10);
            dest.writeString(this.f30447r);
            List<c0> list3 = this.f30448s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f30449t, i10);
            List<e4> list4 = this.f30450u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30451v);
            dest.writeString(this.f30452w);
        }

        public final String x() {
            return this.f30452w;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30462e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30463i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30464o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f30465p;

        /* renamed from: q  reason: collision with root package name */
        private final List f30466q;

        /* renamed from: r  reason: collision with root package name */
        private final int f30467r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f30468s;

        /* renamed from: t  reason: collision with root package name */
        private final String f30469t;

        /* renamed from: u  reason: collision with root package name */
        private final po.d f30470u;

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
            this.f30462e = currentPart;
            this.f30463i = uploadingIds;
            this.f30464o = captureConfig;
            this.f30465p = idForReview;
            this.f30466q = parts;
            this.f30467r = i10;
            this.f30468s = n1Var;
            this.f30469t = str;
            this.f30470u = dVar;
        }

        public static /* synthetic */ d r(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, po.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f30462e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f30463i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f30464o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f30465p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f30466q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f30467r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f30468s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f30469t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f30470u;
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
            for (c0 c0Var : this.f30465p.i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30468s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f30462e, dVar.f30462e) && Intrinsics.areEqual(this.f30463i, dVar.f30463i) && Intrinsics.areEqual(this.f30464o, dVar.f30464o) && Intrinsics.areEqual(this.f30465p, dVar.f30465p) && Intrinsics.areEqual(this.f30466q, dVar.f30466q) && this.f30467r == dVar.f30467r && Intrinsics.areEqual(this.f30468s, dVar.f30468s) && Intrinsics.areEqual(this.f30469t, dVar.f30469t) && Intrinsics.areEqual(this.f30470u, dVar.f30470u)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30469t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f30462e.hashCode() * 31) + this.f30463i.hashCode()) * 31) + this.f30464o.hashCode()) * 31) + this.f30465p.hashCode()) * 31) + this.f30466q.hashCode()) * 31) + Integer.hashCode(this.f30467r)) * 31;
            n1 n1Var = this.f30468s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f30469t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            po.d dVar = this.f30470u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30467r;
        }

        @Override // jo.n1
        public List l() {
            return this.f30466q;
        }

        @Override // jo.n1
        public List o() {
            return this.f30463i;
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
            return this.f30464o;
        }

        public String toString() {
            h4.a aVar = this.f30462e;
            List list = this.f30463i;
            q qVar = this.f30464o;
            d0.b bVar = this.f30465p;
            List list2 = this.f30466q;
            int i10 = this.f30467r;
            n1 n1Var = this.f30468s;
            String str = this.f30469t;
            po.d dVar = this.f30470u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        @Override // jo.n1
        /* renamed from: u */
        public h4.a h() {
            return this.f30462e;
        }

        public final po.d v() {
            return this.f30470u;
        }

        public final d0.b w() {
            return this.f30465p;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30462e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30463i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30464o, i10);
            this.f30465p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f30466q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30467r);
            dest.writeParcelable(this.f30468s, i10);
            dest.writeString(this.f30469t);
            dest.writeParcelable(this.f30470u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f30471e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30472i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f30473o;

        /* renamed from: p  reason: collision with root package name */
        private final List f30474p;

        /* renamed from: q  reason: collision with root package name */
        private final int f30475q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f30476r;

        /* renamed from: s  reason: collision with root package name */
        private final String f30477s;

        /* renamed from: t  reason: collision with root package name */
        private final qo.c f30478t;

        /* renamed from: u  reason: collision with root package name */
        private final long f30479u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f30480v;

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
                c4Var = eVar.f30471e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f30472i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f30473o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f30474p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f30475q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f30476r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f30477s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f30478t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f30479u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f30480v;
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
            return this.f30476r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f30471e, eVar.f30471e) && Intrinsics.areEqual(this.f30472i, eVar.f30472i) && Intrinsics.areEqual(this.f30473o, eVar.f30473o) && Intrinsics.areEqual(this.f30474p, eVar.f30474p) && this.f30475q == eVar.f30475q && Intrinsics.areEqual(this.f30476r, eVar.f30476r) && Intrinsics.areEqual(this.f30477s, eVar.f30477s) && Intrinsics.areEqual(this.f30478t, eVar.f30478t) && this.f30479u == eVar.f30479u && this.f30480v == eVar.f30480v) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30477s;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30473o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f30471e.hashCode() * 31) + this.f30472i.hashCode()) * 31) + this.f30473o.hashCode()) * 31) + this.f30474p.hashCode()) * 31) + Integer.hashCode(this.f30475q)) * 31;
            n1 n1Var = this.f30476r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f30477s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            qo.c cVar = this.f30478t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f30479u)) * 31) + Boolean.hashCode(this.f30480v);
        }

        @Override // jo.n1
        public int j() {
            return this.f30475q;
        }

        @Override // jo.n1
        public List l() {
            return this.f30474p;
        }

        @Override // jo.n1
        public List o() {
            return this.f30472i;
        }

        public final e q(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, qo.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 t() {
            return this.f30471e;
        }

        public String toString() {
            c4 c4Var = this.f30471e;
            List list = this.f30472i;
            h4 h4Var = this.f30473o;
            List list2 = this.f30474p;
            int i10 = this.f30475q;
            n1 n1Var = this.f30476r;
            String str = this.f30477s;
            qo.c cVar = this.f30478t;
            long j10 = this.f30479u;
            boolean z10 = this.f30480v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        public final long u() {
            return this.f30479u;
        }

        public final boolean v() {
            return this.f30480v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30471e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30472i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30473o, i10);
            List<Parcelable> list2 = this.f30474p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30475q);
            dest.writeParcelable(this.f30476r, i10);
            dest.writeString(this.f30477s);
            qo.c cVar = this.f30478t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f30479u);
            dest.writeInt(this.f30480v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, qo.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f30471e = id2;
            this.f30472i = uploadingIds;
            this.f30473o = currentPart;
            this.f30474p = parts;
            this.f30475q = i10;
            this.f30476r = n1Var;
            this.f30477s = str;
            this.f30478t = cVar;
            this.f30479u = j10;
            this.f30480v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f30481e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30482i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30483o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30484p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f30485q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30486r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f30487s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30488t;

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
            this.f30481e = currentPart;
            this.f30482i = uploadingIds;
            this.f30483o = parts;
            this.f30484p = i10;
            this.f30485q = n1Var;
            this.f30486r = str;
            this.f30487s = id2;
            this.f30488t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30485q;
        }

        @Override // jo.n1
        public String f() {
            return this.f30486r;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30481e;
        }

        @Override // jo.n1
        public int j() {
            return this.f30484p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30483o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30482i;
        }

        public final c4 q() {
            return this.f30487s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f30481e, i10);
            List<Parcelable> list = this.f30482i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30483o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30484p);
            dest.writeParcelable(this.f30485q, i10);
            dest.writeString(this.f30486r);
            this.f30487s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f30488t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30489e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30490i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30491o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f30492p;

        /* renamed from: q  reason: collision with root package name */
        private final List f30493q;

        /* renamed from: r  reason: collision with root package name */
        private final int f30494r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f30495s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30496t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30497u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f30498v;

        /* renamed from: w  reason: collision with root package name */
        private final String f30499w;

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
                aVar = gVar.f30489e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f30490i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f30491o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f30492p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f30493q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f30494r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f30495s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f30496t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f30497u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f30498v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f30499w;
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
            return this.f30497u;
        }

        public boolean B() {
            return this.f30498v;
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
            return this.f30495s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f30489e, gVar.f30489e) && Intrinsics.areEqual(this.f30490i, gVar.f30490i) && Intrinsics.areEqual(this.f30491o, gVar.f30491o) && Intrinsics.areEqual(this.f30492p, gVar.f30492p) && Intrinsics.areEqual(this.f30493q, gVar.f30493q) && this.f30494r == gVar.f30494r && Intrinsics.areEqual(this.f30495s, gVar.f30495s) && Intrinsics.areEqual(this.f30496t, gVar.f30496t) && Intrinsics.areEqual(this.f30497u, gVar.f30497u) && this.f30498v == gVar.f30498v && Intrinsics.areEqual(this.f30499w, gVar.f30499w)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30499w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f30489e.hashCode() * 31) + this.f30490i.hashCode()) * 31) + this.f30491o.hashCode()) * 31) + this.f30492p.hashCode()) * 31) + this.f30493q.hashCode()) * 31) + Integer.hashCode(this.f30494r)) * 31;
            n1 n1Var = this.f30495s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f30496t.hashCode()) * 31;
            String str = this.f30497u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f30498v)) * 31;
            String str2 = this.f30499w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30494r;
        }

        @Override // jo.n1
        public List l() {
            return this.f30493q;
        }

        @Override // jo.n1
        public List o() {
            return this.f30490i;
        }

        @Override // jo.n1.h
        public un.v q() {
            return this.f30496t;
        }

        @Override // jo.n1.h
        public q r() {
            return this.f30491o;
        }

        @Override // jo.n1
        /* renamed from: t */
        public h4.a h() {
            return this.f30489e;
        }

        public String toString() {
            h4.a aVar = this.f30489e;
            List list = this.f30490i;
            q qVar = this.f30491o;
            d0 d0Var = this.f30492p;
            List list2 = this.f30493q;
            int i10 = this.f30494r;
            n1 n1Var = this.f30495s;
            un.v vVar = this.f30496t;
            String str = this.f30497u;
            boolean z10 = this.f30498v;
            String str2 = this.f30499w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        @Override // jo.n1.h
        public d0 u() {
            return this.f30492p;
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
            this.f30489e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30490i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30491o, i10);
            dest.writeParcelable(this.f30492p, i10);
            List<Parcelable> list2 = this.f30493q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30494r);
            dest.writeParcelable(this.f30495s, i10);
            dest.writeParcelable(this.f30496t, i10);
            dest.writeString(this.f30497u);
            dest.writeInt(this.f30498v ? 1 : 0);
            dest.writeString(this.f30499w);
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
            this.f30489e = currentPart;
            this.f30490i = uploadingIds;
            this.f30491o = captureConfig;
            this.f30492p = idForReview;
            this.f30493q = parts;
            this.f30494r = i10;
            this.f30495s = n1Var;
            this.f30496t = cameraProperties;
            this.f30497u = str;
            this.f30498v = z10;
            this.f30499w = str2;
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
        return this.f30429d;
    }

    public abstract int j();

    public abstract List l();

    public abstract List o();

    public final void p(boolean z10) {
        this.f30429d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30500e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30501i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30502o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f30503p;

        /* renamed from: q  reason: collision with root package name */
        private final String f30504q;

        /* renamed from: r  reason: collision with root package name */
        private final List f30505r;

        /* renamed from: s  reason: collision with root package name */
        private final int f30506s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f30507t;

        /* renamed from: u  reason: collision with root package name */
        private final un.v f30508u;

        /* renamed from: v  reason: collision with root package name */
        private final String f30509v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f30510w;

        /* renamed from: x  reason: collision with root package name */
        private final String f30511x;

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
                aVar = iVar.f30500e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f30501i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f30502o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f30503p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f30504q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f30505r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f30506s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f30507t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f30508u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f30509v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f30510w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f30511x;
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
            return this.f30509v;
        }

        public final String B() {
            return this.f30504q;
        }

        public boolean D() {
            return this.f30510w;
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
            return this.f30507t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f30500e, iVar.f30500e) && Intrinsics.areEqual(this.f30501i, iVar.f30501i) && Intrinsics.areEqual(this.f30502o, iVar.f30502o) && Intrinsics.areEqual(this.f30503p, iVar.f30503p) && Intrinsics.areEqual(this.f30504q, iVar.f30504q) && Intrinsics.areEqual(this.f30505r, iVar.f30505r) && this.f30506s == iVar.f30506s && Intrinsics.areEqual(this.f30507t, iVar.f30507t) && Intrinsics.areEqual(this.f30508u, iVar.f30508u) && Intrinsics.areEqual(this.f30509v, iVar.f30509v) && this.f30510w == iVar.f30510w && Intrinsics.areEqual(this.f30511x, iVar.f30511x)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30511x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f30500e.hashCode() * 31) + this.f30501i.hashCode()) * 31) + this.f30502o.hashCode()) * 31) + this.f30503p.hashCode()) * 31;
            String str = this.f30504q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f30505r.hashCode()) * 31) + Integer.hashCode(this.f30506s)) * 31;
            n1 n1Var = this.f30507t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f30508u.hashCode()) * 31;
            String str2 = this.f30509v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f30510w)) * 31;
            String str3 = this.f30511x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30506s;
        }

        @Override // jo.n1
        public List l() {
            return this.f30505r;
        }

        @Override // jo.n1
        public List o() {
            return this.f30501i;
        }

        @Override // jo.n1.h
        public un.v q() {
            return this.f30508u;
        }

        @Override // jo.n1.h
        public q r() {
            return this.f30502o;
        }

        @Override // jo.n1
        /* renamed from: t */
        public h4.a h() {
            return this.f30500e;
        }

        public String toString() {
            h4.a aVar = this.f30500e;
            List list = this.f30501i;
            q qVar = this.f30502o;
            d0 d0Var = this.f30503p;
            String str = this.f30504q;
            List list2 = this.f30505r;
            int i10 = this.f30506s;
            n1 n1Var = this.f30507t;
            un.v vVar = this.f30508u;
            String str2 = this.f30509v;
            boolean z10 = this.f30510w;
            String str3 = this.f30511x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        @Override // jo.n1.h
        public d0 u() {
            return this.f30503p;
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
            this.f30500e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30501i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30502o, i10);
            dest.writeParcelable(this.f30503p, i10);
            dest.writeString(this.f30504q);
            List<Parcelable> list2 = this.f30505r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30506s);
            dest.writeParcelable(this.f30507t, i10);
            dest.writeParcelable(this.f30508u, i10);
            dest.writeString(this.f30509v);
            dest.writeInt(this.f30510w ? 1 : 0);
            dest.writeString(this.f30511x);
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
            this.f30500e = currentPart;
            this.f30501i = uploadingIds;
            this.f30502o = captureConfig;
            this.f30503p = idForReview;
            this.f30504q = str;
            this.f30505r = parts;
            this.f30506s = i10;
            this.f30507t = n1Var;
            this.f30508u = cameraProperties;
            this.f30509v = str2;
            this.f30510w = z10;
            this.f30511x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f30520e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30521i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f30522o;

        /* renamed from: p  reason: collision with root package name */
        private final List f30523p;

        /* renamed from: q  reason: collision with root package name */
        private final int f30524q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f30525r;

        /* renamed from: s  reason: collision with root package name */
        private final String f30526s;

        /* renamed from: t  reason: collision with root package name */
        private final qo.c f30527t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30528u;

        /* renamed from: v  reason: collision with root package name */
        private final un.v f30529v;

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
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f30022o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30525r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f30520e, kVar.f30520e) && Intrinsics.areEqual(this.f30521i, kVar.f30521i) && Intrinsics.areEqual(this.f30522o, kVar.f30522o) && Intrinsics.areEqual(this.f30523p, kVar.f30523p) && this.f30524q == kVar.f30524q && Intrinsics.areEqual(this.f30525r, kVar.f30525r) && Intrinsics.areEqual(this.f30526s, kVar.f30526s) && Intrinsics.areEqual(this.f30527t, kVar.f30527t) && Intrinsics.areEqual(this.f30528u, kVar.f30528u) && Intrinsics.areEqual(this.f30529v, kVar.f30529v)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30526s;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30522o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f30520e.hashCode() * 31) + this.f30521i.hashCode()) * 31) + this.f30522o.hashCode()) * 31) + this.f30523p.hashCode()) * 31) + Integer.hashCode(this.f30524q)) * 31;
            n1 n1Var = this.f30525r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f30526s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            qo.c cVar = this.f30527t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f30528u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f30529v.hashCode();
        }

        @Override // jo.n1
        public int j() {
            return this.f30524q;
        }

        @Override // jo.n1
        public List l() {
            return this.f30523p;
        }

        @Override // jo.n1
        public List o() {
            return this.f30521i;
        }

        public final un.v q() {
            return this.f30529v;
        }

        public final qo.c r() {
            return this.f30527t;
        }

        public final String t() {
            return this.f30528u;
        }

        public String toString() {
            c4 c4Var = this.f30520e;
            List list = this.f30521i;
            h4 h4Var = this.f30522o;
            List list2 = this.f30523p;
            int i10 = this.f30524q;
            n1 n1Var = this.f30525r;
            String str = this.f30526s;
            qo.c cVar = this.f30527t;
            String str2 = this.f30528u;
            un.v vVar = this.f30529v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30520e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30521i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30522o, i10);
            List<Parcelable> list2 = this.f30523p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30524q);
            dest.writeParcelable(this.f30525r, i10);
            dest.writeString(this.f30526s);
            qo.c cVar = this.f30527t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30528u);
            dest.writeParcelable(this.f30529v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, qo.c cVar, String str2, un.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f30520e = id2;
            this.f30521i = uploadingIds;
            this.f30522o = currentPart;
            this.f30523p = parts;
            this.f30524q = i10;
            this.f30525r = n1Var;
            this.f30526s = str;
            this.f30527t = cVar;
            this.f30528u = str2;
            this.f30529v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements jo.d, jo.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30530e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30531i;

        /* renamed from: o  reason: collision with root package name */
        private final q f30532o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f30533p;

        /* renamed from: q  reason: collision with root package name */
        private final List f30534q;

        /* renamed from: r  reason: collision with root package name */
        private final int f30535r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f30536s;

        /* renamed from: t  reason: collision with root package name */
        private final ro.t f30537t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30538u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f30539v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f30540w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f30541x;

        /* renamed from: y  reason: collision with root package name */
        private final String f30542y;

        /* renamed from: z  reason: collision with root package name */
        private final po.d f30543z;

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
            return Unit.f32008a;
        }

        public static /* synthetic */ l u(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, ro.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, po.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.t((i11 & 1) != 0 ? lVar.f30530e : aVar, (i11 & 2) != 0 ? lVar.f30531i : list, (i11 & 4) != 0 ? lVar.f30532o : qVar, (i11 & 8) != 0 ? lVar.f30533p : aVar2, (i11 & 16) != 0 ? lVar.f30534q : list2, (i11 & 32) != 0 ? lVar.f30535r : i10, (i11 & 64) != 0 ? lVar.f30536s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f30537t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f30538u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f30539v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f30540w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f30541x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f30542y : str2, (i11 & 8192) != 0 ? lVar.f30543z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        @Override // jo.n1
        /* renamed from: A */
        public h4.a h() {
            return this.f30530e;
        }

        public final Throwable B() {
            return this.f30539v;
        }

        public final po.d D() {
            return this.f30543z;
        }

        public final f5.b.a E() {
            return this.f30533p;
        }

        public final Function0 F() {
            return this.A;
        }

        public final String G() {
            return this.f30538u;
        }

        public final ro.t H() {
            return this.f30537t;
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
            return this.f30536s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f30530e, lVar.f30530e) && Intrinsics.areEqual(this.f30531i, lVar.f30531i) && Intrinsics.areEqual(this.f30532o, lVar.f30532o) && this.f30533p == lVar.f30533p && Intrinsics.areEqual(this.f30534q, lVar.f30534q) && this.f30535r == lVar.f30535r && Intrinsics.areEqual(this.f30536s, lVar.f30536s) && this.f30537t == lVar.f30537t && Intrinsics.areEqual(this.f30538u, lVar.f30538u) && Intrinsics.areEqual(this.f30539v, lVar.f30539v) && this.f30540w == lVar.f30540w && this.f30541x == lVar.f30541x && Intrinsics.areEqual(this.f30542y, lVar.f30542y) && Intrinsics.areEqual(this.f30543z, lVar.f30543z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30542y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f30530e.hashCode() * 31) + this.f30531i.hashCode()) * 31) + this.f30532o.hashCode()) * 31) + this.f30533p.hashCode()) * 31) + this.f30534q.hashCode()) * 31) + Integer.hashCode(this.f30535r)) * 31;
            n1 n1Var = this.f30536s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            ro.t tVar = this.f30537t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f30538u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f30539v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f30540w)) * 31) + Boolean.hashCode(this.f30541x)) * 31;
            String str2 = this.f30542y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            po.d dVar = this.f30543z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // jo.n1
        public int j() {
            return this.f30535r;
        }

        @Override // jo.n1
        public List l() {
            return this.f30534q;
        }

        @Override // jo.n1
        public List o() {
            return this.f30531i;
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
            h4.a aVar = this.f30530e;
            List list = this.f30531i;
            q qVar = this.f30532o;
            f5.b.a aVar2 = this.f30533p;
            List list2 = this.f30534q;
            int i10 = this.f30535r;
            n1 n1Var = this.f30536s;
            ro.t tVar = this.f30537t;
            String str = this.f30538u;
            Throwable th2 = this.f30539v;
            boolean z10 = this.f30540w;
            boolean z11 = this.f30541x;
            String str2 = this.f30542y;
            po.d dVar = this.f30543z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public final q v() {
            return this.f30532o;
        }

        public boolean w() {
            return this.f30541x;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30530e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30531i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f30532o, i10);
            dest.writeString(this.f30533p.name());
            List<Parcelable> list2 = this.f30534q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30535r);
            dest.writeParcelable(this.f30536s, i10);
            ro.t tVar = this.f30537t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f30538u);
            dest.writeSerializable(this.f30539v);
            dest.writeInt(this.f30540w ? 1 : 0);
            dest.writeInt(this.f30541x ? 1 : 0);
            dest.writeString(this.f30542y);
            dest.writeParcelable(this.f30543z, i10);
        }

        public boolean x() {
            return this.f30540w;
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
            this.f30530e = currentPart;
            this.f30531i = uploadingIds;
            this.f30532o = captureConfig;
            this.f30533p = manualCapture;
            this.f30534q = parts;
            this.f30535r = i10;
            this.f30536s = n1Var;
            this.f30537t = tVar;
            this.f30538u = str;
            this.f30539v = th2;
            this.f30540w = z10;
            this.f30541x = z11;
            this.f30542y = str2;
            this.f30543z = dVar;
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
        private final h4.a f30430e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30431i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30432o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30433p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f30434q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30435r;

        /* renamed from: s  reason: collision with root package name */
        private final List f30436s;

        /* renamed from: t  reason: collision with root package name */
        private final un.v f30437t;

        /* renamed from: u  reason: collision with root package name */
        private final List f30438u;

        /* renamed from: v  reason: collision with root package name */
        private final String f30439v;

        /* renamed from: w  reason: collision with root package name */
        private final String f30440w;

        /* renamed from: x  reason: collision with root package name */
        private final jo.c f30441x;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f30022o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // jo.n1
        public n1 e() {
            return this.f30434q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f30430e, aVar.f30430e) && Intrinsics.areEqual(this.f30431i, aVar.f30431i) && Intrinsics.areEqual(this.f30432o, aVar.f30432o) && this.f30433p == aVar.f30433p && Intrinsics.areEqual(this.f30434q, aVar.f30434q) && Intrinsics.areEqual(this.f30435r, aVar.f30435r) && Intrinsics.areEqual(this.f30436s, aVar.f30436s) && Intrinsics.areEqual(this.f30437t, aVar.f30437t) && Intrinsics.areEqual(this.f30438u, aVar.f30438u) && Intrinsics.areEqual(this.f30439v, aVar.f30439v) && Intrinsics.areEqual(this.f30440w, aVar.f30440w) && this.f30441x == aVar.f30441x) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30435r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f30430e.hashCode() * 31) + this.f30431i.hashCode()) * 31) + this.f30432o.hashCode()) * 31) + Integer.hashCode(this.f30433p)) * 31;
            n1 n1Var = this.f30434q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f30435r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f30436s.hashCode()) * 31) + this.f30437t.hashCode()) * 31) + this.f30438u.hashCode()) * 31;
            String str2 = this.f30439v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f30440w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f30441x.hashCode();
        }

        @Override // jo.n1
        public int j() {
            return this.f30433p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30432o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30431i;
        }

        public final List q() {
            return this.f30436s;
        }

        @Override // jo.n1
        /* renamed from: r */
        public h4.a h() {
            return this.f30430e;
        }

        public final jo.c t() {
            return this.f30441x;
        }

        public String toString() {
            h4.a aVar = this.f30430e;
            List list = this.f30431i;
            List list2 = this.f30432o;
            int i10 = this.f30433p;
            n1 n1Var = this.f30434q;
            String str = this.f30435r;
            List list3 = this.f30436s;
            un.v vVar = this.f30437t;
            List list4 = this.f30438u;
            String str2 = this.f30439v;
            String str3 = this.f30440w;
            jo.c cVar = this.f30441x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        public final List u() {
            return this.f30438u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30430e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30431i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30432o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30433p);
            dest.writeParcelable(this.f30434q, i10);
            dest.writeString(this.f30435r);
            List<c0> list3 = this.f30436s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f30437t, i10);
            List<e4> list4 = this.f30438u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30439v);
            dest.writeString(this.f30440w);
            dest.writeString(this.f30441x.name());
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
            this.f30430e = currentPart;
            this.f30431i = uploadingIds;
            this.f30432o = parts;
            this.f30433p = i10;
            this.f30434q = n1Var;
            this.f30435r = str;
            this.f30436s = captureFrames;
            this.f30437t = cameraProperties;
            this.f30438u = idConfigsForCountry;
            this.f30439v = str2;
            this.f30440w = str3;
            this.f30441x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f30453e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30454i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30455o;

        /* renamed from: p  reason: collision with root package name */
        private final int f30456p;

        /* renamed from: q  reason: collision with root package name */
        private final String f30457q;

        /* renamed from: r  reason: collision with root package name */
        private final q f30458r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f30459s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f30460t;

        /* renamed from: u  reason: collision with root package name */
        private final String f30461u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f30022o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c r(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f30453e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f30454i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f30455o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f30456p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f30457q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f30458r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f30459s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f30460t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f30461u;
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
            return this.f30460t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f30453e, cVar.f30453e) && Intrinsics.areEqual(this.f30454i, cVar.f30454i) && Intrinsics.areEqual(this.f30455o, cVar.f30455o) && this.f30456p == cVar.f30456p && Intrinsics.areEqual(this.f30457q, cVar.f30457q) && Intrinsics.areEqual(this.f30458r, cVar.f30458r) && this.f30459s == cVar.f30459s && Intrinsics.areEqual(this.f30460t, cVar.f30460t) && Intrinsics.areEqual(this.f30461u, cVar.f30461u)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30457q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f30453e.hashCode() * 31) + this.f30454i.hashCode()) * 31) + this.f30455o.hashCode()) * 31) + Integer.hashCode(this.f30456p)) * 31;
            String str = this.f30457q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f30458r.hashCode()) * 31) + Boolean.hashCode(this.f30459s)) * 31;
            n1 n1Var = this.f30460t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f30461u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30456p;
        }

        @Override // jo.n1
        public List l() {
            return this.f30455o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30454i;
        }

        public final c q(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q t() {
            return this.f30458r;
        }

        public String toString() {
            h4.a aVar = this.f30453e;
            List list = this.f30454i;
            List list2 = this.f30455o;
            int i10 = this.f30456p;
            String str = this.f30457q;
            q qVar = this.f30458r;
            boolean z10 = this.f30459s;
            n1 n1Var = this.f30460t;
            String str2 = this.f30461u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        public final boolean u() {
            return this.f30459s;
        }

        @Override // jo.n1
        /* renamed from: v */
        public h4.a h() {
            return this.f30453e;
        }

        public final String w() {
            return this.f30461u;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f30453e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f30454i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30455o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f30456p);
            dest.writeString(this.f30457q);
            dest.writeParcelable(this.f30458r, i10);
            dest.writeInt(this.f30459s ? 1 : 0);
            dest.writeParcelable(this.f30460t, i10);
            dest.writeString(this.f30461u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f30453e = currentPart;
            this.f30454i = uploadingIds;
            this.f30455o = parts;
            this.f30456p = i10;
            this.f30457q = str;
            this.f30458r = captureConfig;
            this.f30459s = z10;
            this.f30460t = n1Var;
            this.f30461u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f30512e;

        /* renamed from: i  reason: collision with root package name */
        private final List f30513i;

        /* renamed from: o  reason: collision with root package name */
        private final List f30514o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f30515p;

        /* renamed from: q  reason: collision with root package name */
        private final int f30516q;

        /* renamed from: r  reason: collision with root package name */
        private final String f30517r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f30518s;

        /* renamed from: t  reason: collision with root package name */
        private final String f30519t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f30022o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j r(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f30512e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f30513i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f30514o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f30515p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f30516q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f30517r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f30518s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f30519t;
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
            return this.f30515p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f30512e, jVar.f30512e) && Intrinsics.areEqual(this.f30513i, jVar.f30513i) && Intrinsics.areEqual(this.f30514o, jVar.f30514o) && Intrinsics.areEqual(this.f30515p, jVar.f30515p) && this.f30516q == jVar.f30516q && Intrinsics.areEqual(this.f30517r, jVar.f30517r) && Intrinsics.areEqual(this.f30518s, jVar.f30518s) && Intrinsics.areEqual(this.f30519t, jVar.f30519t)) {
                return true;
            }
            return false;
        }

        @Override // jo.n1
        public String f() {
            return this.f30517r;
        }

        @Override // jo.n1
        public h4 h() {
            return this.f30512e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f30512e.hashCode() * 31) + this.f30513i.hashCode()) * 31) + this.f30514o.hashCode()) * 31;
            n1 n1Var = this.f30515p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f30516q)) * 31;
            String str = this.f30517r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f30518s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f30519t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // jo.n1
        public int j() {
            return this.f30516q;
        }

        @Override // jo.n1
        public List l() {
            return this.f30514o;
        }

        @Override // jo.n1
        public List o() {
            return this.f30513i;
        }

        public final j q(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String t() {
            return this.f30519t;
        }

        public String toString() {
            h4 h4Var = this.f30512e;
            List list = this.f30513i;
            List list2 = this.f30514o;
            n1 n1Var = this.f30515p;
            int i10 = this.f30516q;
            String str = this.f30517r;
            c4 c4Var = this.f30518s;
            String str2 = this.f30519t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f30512e, i10);
            List<Parcelable> list = this.f30513i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f30514o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f30515p, i10);
            dest.writeInt(this.f30516q);
            dest.writeString(this.f30517r);
            c4 c4Var = this.f30518s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30519t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f30512e = currentPart;
            this.f30513i = uploadingIds;
            this.f30514o = parts;
            this.f30515p = n1Var;
            this.f30516q = i10;
            this.f30517r = str;
            this.f30518s = c4Var;
            this.f30519t = str2;
        }
    }
}
