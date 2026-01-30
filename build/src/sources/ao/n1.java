package ao;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import ao.c4;
import ao.d0;
import ao.f5;
import ao.h4;
import ao.n1;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n1 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f6243d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f6256e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6257i;

        /* renamed from: o  reason: collision with root package name */
        private final List f6258o;

        /* renamed from: p  reason: collision with root package name */
        private final int f6259p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f6260q;

        /* renamed from: r  reason: collision with root package name */
        private final String f6261r;

        /* renamed from: s  reason: collision with root package name */
        private final List f6262s;

        /* renamed from: t  reason: collision with root package name */
        private final mn.v f6263t;

        /* renamed from: u  reason: collision with root package name */
        private final List f6264u;

        /* renamed from: v  reason: collision with root package name */
        private final String f6265v;

        /* renamed from: w  reason: collision with root package name */
        private final String f6266w;

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
                mn.v vVar = (mn.v) parcel.readParcelable(b.class.getClassLoader());
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
        public b(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, mn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            this.f6256e = currentPart;
            this.f6257i = uploadingIds;
            this.f6258o = parts;
            this.f6259p = i10;
            this.f6260q = n1Var;
            this.f6261r = str;
            this.f6262s = captureFrames;
            this.f6263t = cameraProperties;
            this.f6264u = idConfigsForCountry;
            this.f6265v = str2;
            this.f6266w = str3;
        }

        public static /* synthetic */ b p(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, mn.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f6256e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f6257i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f6258o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f6259p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f6260q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f6261r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f6262s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f6263t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f6264u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f6265v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f6266w;
            }
            String str4 = str2;
            String str5 = str3;
            mn.v vVar2 = vVar;
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

        @Override // ao.n1
        public n1 e() {
            return this.f6260q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f6256e, bVar.f6256e) && Intrinsics.areEqual(this.f6257i, bVar.f6257i) && Intrinsics.areEqual(this.f6258o, bVar.f6258o) && this.f6259p == bVar.f6259p && Intrinsics.areEqual(this.f6260q, bVar.f6260q) && Intrinsics.areEqual(this.f6261r, bVar.f6261r) && Intrinsics.areEqual(this.f6262s, bVar.f6262s) && Intrinsics.areEqual(this.f6263t, bVar.f6263t) && Intrinsics.areEqual(this.f6264u, bVar.f6264u) && Intrinsics.areEqual(this.f6265v, bVar.f6265v) && Intrinsics.areEqual(this.f6266w, bVar.f6266w)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6261r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f6256e.hashCode() * 31) + this.f6257i.hashCode()) * 31) + this.f6258o.hashCode()) * 31) + Integer.hashCode(this.f6259p)) * 31;
            n1 n1Var = this.f6260q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f6261r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f6262s.hashCode()) * 31) + this.f6263t.hashCode()) * 31) + this.f6264u.hashCode()) * 31;
            String str2 = this.f6265v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f6266w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // ao.n1
        public int j() {
            return this.f6259p;
        }

        @Override // ao.n1
        public List k() {
            return this.f6258o;
        }

        @Override // ao.n1
        public List m() {
            return this.f6257i;
        }

        public final b o(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, mn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            return new b(currentPart, uploadingIds, parts, i10, n1Var, str, captureFrames, cameraProperties, idConfigsForCountry, str2, str3);
        }

        public final mn.v q() {
            return this.f6263t;
        }

        @Override // ao.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f6256e;
        }

        public final List s() {
            return this.f6264u;
        }

        public final String t() {
            return this.f6265v;
        }

        public String toString() {
            h4.a aVar = this.f6256e;
            List list = this.f6257i;
            List list2 = this.f6258o;
            int i10 = this.f6259p;
            n1 n1Var = this.f6260q;
            String str = this.f6261r;
            List list3 = this.f6262s;
            mn.v vVar = this.f6263t;
            List list4 = this.f6264u;
            String str2 = this.f6265v;
            String str3 = this.f6266w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        public final String u() {
            return this.f6266w;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6256e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6257i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f6258o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6259p);
            dest.writeParcelable(this.f6260q, i10);
            dest.writeString(this.f6261r);
            List<c0> list3 = this.f6262s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f6263t, i10);
            List<e4> list4 = this.f6264u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f6265v);
            dest.writeString(this.f6266w);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f6276e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6277i;

        /* renamed from: o  reason: collision with root package name */
        private final q f6278o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f6279p;

        /* renamed from: q  reason: collision with root package name */
        private final List f6280q;

        /* renamed from: r  reason: collision with root package name */
        private final int f6281r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f6282s;

        /* renamed from: t  reason: collision with root package name */
        private final String f6283t;

        /* renamed from: u  reason: collision with root package name */
        private final ho.d f6284u;

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
                return new d(createFromParcel, arrayList, qVar, createFromParcel2, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (ho.d) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, ho.d dVar) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f6276e = currentPart;
            this.f6277i = uploadingIds;
            this.f6278o = captureConfig;
            this.f6279p = idForReview;
            this.f6280q = parts;
            this.f6281r = i10;
            this.f6282s = n1Var;
            this.f6283t = str;
            this.f6284u = dVar;
        }

        public static /* synthetic */ d p(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, ho.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f6276e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f6277i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f6278o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f6279p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f6280q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f6281r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f6282s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f6283t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f6284u;
            }
            String str2 = str;
            ho.d dVar3 = dVar2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return dVar.o(aVar, list, qVar2, bVar, list3, i12, n1Var2, str2, dVar3);
        }

        @Override // ao.n1
        public void d() {
            super.d();
            for (c0 c0Var : this.f6279p.i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ao.n1
        public n1 e() {
            return this.f6282s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f6276e, dVar.f6276e) && Intrinsics.areEqual(this.f6277i, dVar.f6277i) && Intrinsics.areEqual(this.f6278o, dVar.f6278o) && Intrinsics.areEqual(this.f6279p, dVar.f6279p) && Intrinsics.areEqual(this.f6280q, dVar.f6280q) && this.f6281r == dVar.f6281r && Intrinsics.areEqual(this.f6282s, dVar.f6282s) && Intrinsics.areEqual(this.f6283t, dVar.f6283t) && Intrinsics.areEqual(this.f6284u, dVar.f6284u)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6283t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f6276e.hashCode() * 31) + this.f6277i.hashCode()) * 31) + this.f6278o.hashCode()) * 31) + this.f6279p.hashCode()) * 31) + this.f6280q.hashCode()) * 31) + Integer.hashCode(this.f6281r)) * 31;
            n1 n1Var = this.f6282s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f6283t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            ho.d dVar = this.f6284u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // ao.n1
        public int j() {
            return this.f6281r;
        }

        @Override // ao.n1
        public List k() {
            return this.f6280q;
        }

        @Override // ao.n1
        public List m() {
            return this.f6277i;
        }

        public final d o(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, ho.d dVar) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new d(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, str, dVar);
        }

        public final q q() {
            return this.f6278o;
        }

        @Override // ao.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f6276e;
        }

        public final ho.d s() {
            return this.f6284u;
        }

        public final d0.b t() {
            return this.f6279p;
        }

        public String toString() {
            h4.a aVar = this.f6276e;
            List list = this.f6277i;
            q qVar = this.f6278o;
            d0.b bVar = this.f6279p;
            List list2 = this.f6280q;
            int i10 = this.f6281r;
            n1 n1Var = this.f6282s;
            String str = this.f6283t;
            ho.d dVar = this.f6284u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6276e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6277i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f6278o, i10);
            this.f6279p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f6280q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6281r);
            dest.writeParcelable(this.f6282s, i10);
            dest.writeString(this.f6283t);
            dest.writeParcelable(this.f6284u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f6285e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6286i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f6287o;

        /* renamed from: p  reason: collision with root package name */
        private final List f6288p;

        /* renamed from: q  reason: collision with root package name */
        private final int f6289q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f6290r;

        /* renamed from: s  reason: collision with root package name */
        private final String f6291s;

        /* renamed from: t  reason: collision with root package name */
        private final io.c f6292t;

        /* renamed from: u  reason: collision with root package name */
        private final long f6293u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f6294v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                io.c createFromParcel;
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
                    createFromParcel = io.c.CREATOR.createFromParcel(parcel);
                }
                io.c cVar = createFromParcel;
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

        public /* synthetic */ e(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, io.c cVar, long j10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 3000L : j10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
        }

        public static /* synthetic */ e p(e eVar, c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, io.c cVar, long j10, boolean z10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                c4Var = eVar.f6285e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f6286i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f6287o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f6288p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f6289q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f6290r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f6291s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f6292t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f6293u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f6294v;
            }
            boolean z11 = z10;
            long j11 = j10;
            String str2 = str;
            io.c cVar2 = cVar;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            return eVar.o(c4Var, list, h4Var, list2, i12, n1Var2, str2, cVar2, j11, z11);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ao.n1
        public n1 e() {
            return this.f6290r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f6285e, eVar.f6285e) && Intrinsics.areEqual(this.f6286i, eVar.f6286i) && Intrinsics.areEqual(this.f6287o, eVar.f6287o) && Intrinsics.areEqual(this.f6288p, eVar.f6288p) && this.f6289q == eVar.f6289q && Intrinsics.areEqual(this.f6290r, eVar.f6290r) && Intrinsics.areEqual(this.f6291s, eVar.f6291s) && Intrinsics.areEqual(this.f6292t, eVar.f6292t) && this.f6293u == eVar.f6293u && this.f6294v == eVar.f6294v) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6291s;
        }

        @Override // ao.n1
        public h4 g() {
            return this.f6287o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f6285e.hashCode() * 31) + this.f6286i.hashCode()) * 31) + this.f6287o.hashCode()) * 31) + this.f6288p.hashCode()) * 31) + Integer.hashCode(this.f6289q)) * 31;
            n1 n1Var = this.f6290r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f6291s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            io.c cVar = this.f6292t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f6293u)) * 31) + Boolean.hashCode(this.f6294v);
        }

        @Override // ao.n1
        public int j() {
            return this.f6289q;
        }

        @Override // ao.n1
        public List k() {
            return this.f6288p;
        }

        @Override // ao.n1
        public List m() {
            return this.f6286i;
        }

        public final e o(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, io.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 q() {
            return this.f6285e;
        }

        public final long r() {
            return this.f6293u;
        }

        public final boolean s() {
            return this.f6294v;
        }

        public String toString() {
            c4 c4Var = this.f6285e;
            List list = this.f6286i;
            h4 h4Var = this.f6287o;
            List list2 = this.f6288p;
            int i10 = this.f6289q;
            n1 n1Var = this.f6290r;
            String str = this.f6291s;
            io.c cVar = this.f6292t;
            long j10 = this.f6293u;
            boolean z10 = this.f6294v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6285e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6286i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f6287o, i10);
            List<Parcelable> list2 = this.f6288p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6289q);
            dest.writeParcelable(this.f6290r, i10);
            dest.writeString(this.f6291s);
            io.c cVar = this.f6292t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f6293u);
            dest.writeInt(this.f6294v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, io.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f6285e = id2;
            this.f6286i = uploadingIds;
            this.f6287o = currentPart;
            this.f6288p = parts;
            this.f6289q = i10;
            this.f6290r = n1Var;
            this.f6291s = str;
            this.f6292t = cVar;
            this.f6293u = j10;
            this.f6294v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f6295e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6296i;

        /* renamed from: o  reason: collision with root package name */
        private final List f6297o;

        /* renamed from: p  reason: collision with root package name */
        private final int f6298p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f6299q;

        /* renamed from: r  reason: collision with root package name */
        private final String f6300r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f6301s;

        /* renamed from: t  reason: collision with root package name */
        private final mn.v f6302t;

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
                return new f(h4Var, arrayList, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(f.class.getClassLoader()), parcel.readString(), c4.CREATOR.createFromParcel(parcel), (mn.v) parcel.readParcelable(f.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(h4 currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, c4 id2, mn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f6295e = currentPart;
            this.f6296i = uploadingIds;
            this.f6297o = parts;
            this.f6298p = i10;
            this.f6299q = n1Var;
            this.f6300r = str;
            this.f6301s = id2;
            this.f6302t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ao.n1
        public n1 e() {
            return this.f6299q;
        }

        @Override // ao.n1
        public String f() {
            return this.f6300r;
        }

        @Override // ao.n1
        public h4 g() {
            return this.f6295e;
        }

        @Override // ao.n1
        public int j() {
            return this.f6298p;
        }

        @Override // ao.n1
        public List k() {
            return this.f6297o;
        }

        @Override // ao.n1
        public List m() {
            return this.f6296i;
        }

        public final c4 o() {
            return this.f6301s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f6295e, i10);
            List<Parcelable> list = this.f6296i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f6297o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6298p);
            dest.writeParcelable(this.f6299q, i10);
            dest.writeString(this.f6300r);
            this.f6301s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f6302t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f6303e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6304i;

        /* renamed from: o  reason: collision with root package name */
        private final q f6305o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f6306p;

        /* renamed from: q  reason: collision with root package name */
        private final List f6307q;

        /* renamed from: r  reason: collision with root package name */
        private final int f6308r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f6309s;

        /* renamed from: t  reason: collision with root package name */
        private final mn.v f6310t;

        /* renamed from: u  reason: collision with root package name */
        private final String f6311u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f6312v;

        /* renamed from: w  reason: collision with root package name */
        private final String f6313w;

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
                mn.v vVar = (mn.v) parcel.readParcelable(g.class.getClassLoader());
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

        public /* synthetic */ g(h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, mn.v vVar, String str, boolean z10, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, list2, i10, n1Var, vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10, str2);
        }

        public static /* synthetic */ g u(g gVar, h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, mn.v vVar, String str, boolean z10, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = gVar.f6303e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f6304i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f6305o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f6306p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f6307q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f6308r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f6309s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f6310t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f6311u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f6312v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f6313w;
            }
            boolean z11 = z10;
            String str3 = str2;
            mn.v vVar2 = vVar;
            String str4 = str;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return gVar.t(aVar, list, qVar2, d0Var, list3, i12, n1Var2, vVar2, str4, z11, str3);
        }

        @Override // ao.n1
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

        @Override // ao.n1
        public n1 e() {
            return this.f6309s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f6303e, gVar.f6303e) && Intrinsics.areEqual(this.f6304i, gVar.f6304i) && Intrinsics.areEqual(this.f6305o, gVar.f6305o) && Intrinsics.areEqual(this.f6306p, gVar.f6306p) && Intrinsics.areEqual(this.f6307q, gVar.f6307q) && this.f6308r == gVar.f6308r && Intrinsics.areEqual(this.f6309s, gVar.f6309s) && Intrinsics.areEqual(this.f6310t, gVar.f6310t) && Intrinsics.areEqual(this.f6311u, gVar.f6311u) && this.f6312v == gVar.f6312v && Intrinsics.areEqual(this.f6313w, gVar.f6313w)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6313w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f6303e.hashCode() * 31) + this.f6304i.hashCode()) * 31) + this.f6305o.hashCode()) * 31) + this.f6306p.hashCode()) * 31) + this.f6307q.hashCode()) * 31) + Integer.hashCode(this.f6308r)) * 31;
            n1 n1Var = this.f6309s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f6310t.hashCode()) * 31;
            String str = this.f6311u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f6312v)) * 31;
            String str2 = this.f6313w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // ao.n1
        public int j() {
            return this.f6308r;
        }

        @Override // ao.n1
        public List k() {
            return this.f6307q;
        }

        @Override // ao.n1
        public List m() {
            return this.f6304i;
        }

        @Override // ao.n1.h
        public mn.v o() {
            return this.f6310t;
        }

        @Override // ao.n1.h
        public q p() {
            return this.f6305o;
        }

        @Override // ao.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f6303e;
        }

        @Override // ao.n1.h
        public d0 r() {
            return this.f6306p;
        }

        @Override // ao.n1.h
        public h s(boolean z10) {
            return u(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public final g t(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, mn.v cameraProperties, String str, boolean z10, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new g(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, cameraProperties, str, z10, str2);
        }

        public String toString() {
            h4.a aVar = this.f6303e;
            List list = this.f6304i;
            q qVar = this.f6305o;
            d0 d0Var = this.f6306p;
            List list2 = this.f6307q;
            int i10 = this.f6308r;
            n1 n1Var = this.f6309s;
            mn.v vVar = this.f6310t;
            String str = this.f6311u;
            boolean z10 = this.f6312v;
            String str2 = this.f6313w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        public final String v() {
            return this.f6311u;
        }

        public boolean w() {
            return this.f6312v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6303e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6304i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f6305o, i10);
            dest.writeParcelable(this.f6306p, i10);
            List<Parcelable> list2 = this.f6307q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6308r);
            dest.writeParcelable(this.f6309s, i10);
            dest.writeParcelable(this.f6310t, i10);
            dest.writeString(this.f6311u);
            dest.writeInt(this.f6312v ? 1 : 0);
            dest.writeString(this.f6313w);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, mn.v cameraProperties, String str, boolean z10, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f6303e = currentPart;
            this.f6304i = uploadingIds;
            this.f6305o = captureConfig;
            this.f6306p = idForReview;
            this.f6307q = parts;
            this.f6308r = i10;
            this.f6309s = n1Var;
            this.f6310t = cameraProperties;
            this.f6311u = str;
            this.f6312v = z10;
            this.f6313w = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class h extends n1 {
        public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract mn.v o();

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
        return this.f6243d;
    }

    public abstract int j();

    public abstract List k();

    public abstract List m();

    public final void n(boolean z10) {
        this.f6243d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f6314e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6315i;

        /* renamed from: o  reason: collision with root package name */
        private final q f6316o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f6317p;

        /* renamed from: q  reason: collision with root package name */
        private final String f6318q;

        /* renamed from: r  reason: collision with root package name */
        private final List f6319r;

        /* renamed from: s  reason: collision with root package name */
        private final int f6320s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f6321t;

        /* renamed from: u  reason: collision with root package name */
        private final mn.v f6322u;

        /* renamed from: v  reason: collision with root package name */
        private final String f6323v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f6324w;

        /* renamed from: x  reason: collision with root package name */
        private final String f6325x;

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
                mn.v vVar = (mn.v) parcel.readParcelable(i.class.getClassLoader());
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

        public /* synthetic */ i(h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, mn.v vVar, String str2, boolean z10, String str3, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, str, list2, i10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new mn.v(null, null, null, 0, 15, null) : vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10, str3);
        }

        public static /* synthetic */ i u(i iVar, h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, mn.v vVar, String str2, boolean z10, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = iVar.f6314e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f6315i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f6316o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f6317p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f6318q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f6319r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f6320s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f6321t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f6322u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f6323v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f6324w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f6325x;
            }
            boolean z11 = z10;
            String str4 = str3;
            mn.v vVar2 = vVar;
            String str5 = str2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            String str6 = str;
            List list3 = list2;
            return iVar.t(aVar, list, qVar, d0Var, str6, list3, i12, n1Var2, vVar2, str5, z11, str4);
        }

        @Override // ao.n1
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

        @Override // ao.n1
        public n1 e() {
            return this.f6321t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f6314e, iVar.f6314e) && Intrinsics.areEqual(this.f6315i, iVar.f6315i) && Intrinsics.areEqual(this.f6316o, iVar.f6316o) && Intrinsics.areEqual(this.f6317p, iVar.f6317p) && Intrinsics.areEqual(this.f6318q, iVar.f6318q) && Intrinsics.areEqual(this.f6319r, iVar.f6319r) && this.f6320s == iVar.f6320s && Intrinsics.areEqual(this.f6321t, iVar.f6321t) && Intrinsics.areEqual(this.f6322u, iVar.f6322u) && Intrinsics.areEqual(this.f6323v, iVar.f6323v) && this.f6324w == iVar.f6324w && Intrinsics.areEqual(this.f6325x, iVar.f6325x)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6325x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f6314e.hashCode() * 31) + this.f6315i.hashCode()) * 31) + this.f6316o.hashCode()) * 31) + this.f6317p.hashCode()) * 31;
            String str = this.f6318q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f6319r.hashCode()) * 31) + Integer.hashCode(this.f6320s)) * 31;
            n1 n1Var = this.f6321t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f6322u.hashCode()) * 31;
            String str2 = this.f6323v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f6324w)) * 31;
            String str3 = this.f6325x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // ao.n1
        public int j() {
            return this.f6320s;
        }

        @Override // ao.n1
        public List k() {
            return this.f6319r;
        }

        @Override // ao.n1
        public List m() {
            return this.f6315i;
        }

        @Override // ao.n1.h
        public mn.v o() {
            return this.f6322u;
        }

        @Override // ao.n1.h
        public q p() {
            return this.f6316o;
        }

        @Override // ao.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f6314e;
        }

        @Override // ao.n1.h
        public d0 r() {
            return this.f6317p;
        }

        @Override // ao.n1.h
        public h s(boolean z10) {
            return u(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public final i t(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, mn.v cameraProperties, String str2, boolean z10, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new i(currentPart, uploadingIds, captureConfig, idForReview, str, parts, i10, n1Var, cameraProperties, str2, z10, str3);
        }

        public String toString() {
            h4.a aVar = this.f6314e;
            List list = this.f6315i;
            q qVar = this.f6316o;
            d0 d0Var = this.f6317p;
            String str = this.f6318q;
            List list2 = this.f6319r;
            int i10 = this.f6320s;
            n1 n1Var = this.f6321t;
            mn.v vVar = this.f6322u;
            String str2 = this.f6323v;
            boolean z10 = this.f6324w;
            String str3 = this.f6325x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        public final String v() {
            return this.f6323v;
        }

        public final String w() {
            return this.f6318q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6314e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6315i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f6316o, i10);
            dest.writeParcelable(this.f6317p, i10);
            dest.writeString(this.f6318q);
            List<Parcelable> list2 = this.f6319r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6320s);
            dest.writeParcelable(this.f6321t, i10);
            dest.writeParcelable(this.f6322u, i10);
            dest.writeString(this.f6323v);
            dest.writeInt(this.f6324w ? 1 : 0);
            dest.writeString(this.f6325x);
        }

        public boolean y() {
            return this.f6324w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, mn.v cameraProperties, String str2, boolean z10, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f6314e = currentPart;
            this.f6315i = uploadingIds;
            this.f6316o = captureConfig;
            this.f6317p = idForReview;
            this.f6318q = str;
            this.f6319r = parts;
            this.f6320s = i10;
            this.f6321t = n1Var;
            this.f6322u = cameraProperties;
            this.f6323v = str2;
            this.f6324w = z10;
            this.f6325x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f6334e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6335i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f6336o;

        /* renamed from: p  reason: collision with root package name */
        private final List f6337p;

        /* renamed from: q  reason: collision with root package name */
        private final int f6338q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f6339r;

        /* renamed from: s  reason: collision with root package name */
        private final String f6340s;

        /* renamed from: t  reason: collision with root package name */
        private final io.c f6341t;

        /* renamed from: u  reason: collision with root package name */
        private final String f6342u;

        /* renamed from: v  reason: collision with root package name */
        private final mn.v f6343v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                io.c createFromParcel;
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
                    createFromParcel = io.c.CREATOR.createFromParcel(parcel);
                }
                return new k(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, createFromParcel, parcel.readString(), (mn.v) parcel.readParcelable(k.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        public /* synthetic */ k(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, io.c cVar, String str2, mn.v vVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f5836o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ao.n1
        public n1 e() {
            return this.f6339r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f6334e, kVar.f6334e) && Intrinsics.areEqual(this.f6335i, kVar.f6335i) && Intrinsics.areEqual(this.f6336o, kVar.f6336o) && Intrinsics.areEqual(this.f6337p, kVar.f6337p) && this.f6338q == kVar.f6338q && Intrinsics.areEqual(this.f6339r, kVar.f6339r) && Intrinsics.areEqual(this.f6340s, kVar.f6340s) && Intrinsics.areEqual(this.f6341t, kVar.f6341t) && Intrinsics.areEqual(this.f6342u, kVar.f6342u) && Intrinsics.areEqual(this.f6343v, kVar.f6343v)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6340s;
        }

        @Override // ao.n1
        public h4 g() {
            return this.f6336o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f6334e.hashCode() * 31) + this.f6335i.hashCode()) * 31) + this.f6336o.hashCode()) * 31) + this.f6337p.hashCode()) * 31) + Integer.hashCode(this.f6338q)) * 31;
            n1 n1Var = this.f6339r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f6340s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            io.c cVar = this.f6341t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f6342u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f6343v.hashCode();
        }

        @Override // ao.n1
        public int j() {
            return this.f6338q;
        }

        @Override // ao.n1
        public List k() {
            return this.f6337p;
        }

        @Override // ao.n1
        public List m() {
            return this.f6335i;
        }

        public final mn.v o() {
            return this.f6343v;
        }

        public final io.c p() {
            return this.f6341t;
        }

        public final String q() {
            return this.f6342u;
        }

        public String toString() {
            c4 c4Var = this.f6334e;
            List list = this.f6335i;
            h4 h4Var = this.f6336o;
            List list2 = this.f6337p;
            int i10 = this.f6338q;
            n1 n1Var = this.f6339r;
            String str = this.f6340s;
            io.c cVar = this.f6341t;
            String str2 = this.f6342u;
            mn.v vVar = this.f6343v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6334e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6335i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f6336o, i10);
            List<Parcelable> list2 = this.f6337p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6338q);
            dest.writeParcelable(this.f6339r, i10);
            dest.writeString(this.f6340s);
            io.c cVar = this.f6341t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f6342u);
            dest.writeParcelable(this.f6343v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, io.c cVar, String str2, mn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f6334e = id2;
            this.f6335i = uploadingIds;
            this.f6336o = currentPart;
            this.f6337p = parts;
            this.f6338q = i10;
            this.f6339r = n1Var;
            this.f6340s = str;
            this.f6341t = cVar;
            this.f6342u = str2;
            this.f6343v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements ao.d, ao.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f6344e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6345i;

        /* renamed from: o  reason: collision with root package name */
        private final q f6346o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f6347p;

        /* renamed from: q  reason: collision with root package name */
        private final List f6348q;

        /* renamed from: r  reason: collision with root package name */
        private final int f6349r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f6350s;

        /* renamed from: t  reason: collision with root package name */
        private final jo.t f6351t;

        /* renamed from: u  reason: collision with root package name */
        private final String f6352u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f6353v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f6354w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f6355x;

        /* renamed from: y  reason: collision with root package name */
        private final String f6356y;

        /* renamed from: z  reason: collision with root package name */
        private final ho.d f6357z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                jo.t valueOf;
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
                    valueOf = jo.t.valueOf(parcel.readString());
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
                return new l(createFromParcel, arrayList, qVar, valueOf2, arrayList2, readInt3, n1Var, valueOf, readString, th2, z10, z11, parcel.readString(), (ho.d) parcel.readParcelable(l.class.getClassLoader()), null, 16384, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, jo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ho.d dVar, Function0 function0, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, aVar2, list2, i10, n1Var, tVar, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? true : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? true : z11, str2, (i11 & 8192) != 0 ? null : dVar, (i11 & 16384) != 0 ? new Function0() { // from class: ao.o1
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
            return Unit.f33298a;
        }

        public static /* synthetic */ l r(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, jo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ho.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.q((i11 & 1) != 0 ? lVar.f6344e : aVar, (i11 & 2) != 0 ? lVar.f6345i : list, (i11 & 4) != 0 ? lVar.f6346o : qVar, (i11 & 8) != 0 ? lVar.f6347p : aVar2, (i11 & 16) != 0 ? lVar.f6348q : list2, (i11 & 32) != 0 ? lVar.f6349r : i10, (i11 & 64) != 0 ? lVar.f6350s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f6351t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f6352u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f6353v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f6354w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f6355x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f6356y : str2, (i11 & 8192) != 0 ? lVar.f6357z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        public final Function0 A() {
            return this.A;
        }

        public final String C() {
            return this.f6352u;
        }

        public final jo.t D() {
            return this.f6351t;
        }

        @Override // ao.b
        public n1 a(boolean z10) {
            return r(this, null, null, null, null, null, 0, null, null, null, null, false, z10, null, null, null, 30719, null);
        }

        @Override // ao.d
        public n1 b(boolean z10) {
            return r(this, null, null, null, null, null, 0, null, null, null, null, z10, false, null, null, null, 31743, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ao.n1
        public n1 e() {
            return this.f6350s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f6344e, lVar.f6344e) && Intrinsics.areEqual(this.f6345i, lVar.f6345i) && Intrinsics.areEqual(this.f6346o, lVar.f6346o) && this.f6347p == lVar.f6347p && Intrinsics.areEqual(this.f6348q, lVar.f6348q) && this.f6349r == lVar.f6349r && Intrinsics.areEqual(this.f6350s, lVar.f6350s) && this.f6351t == lVar.f6351t && Intrinsics.areEqual(this.f6352u, lVar.f6352u) && Intrinsics.areEqual(this.f6353v, lVar.f6353v) && this.f6354w == lVar.f6354w && this.f6355x == lVar.f6355x && Intrinsics.areEqual(this.f6356y, lVar.f6356y) && Intrinsics.areEqual(this.f6357z, lVar.f6357z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6356y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f6344e.hashCode() * 31) + this.f6345i.hashCode()) * 31) + this.f6346o.hashCode()) * 31) + this.f6347p.hashCode()) * 31) + this.f6348q.hashCode()) * 31) + Integer.hashCode(this.f6349r)) * 31;
            n1 n1Var = this.f6350s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            jo.t tVar = this.f6351t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f6352u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f6353v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f6354w)) * 31) + Boolean.hashCode(this.f6355x)) * 31;
            String str2 = this.f6356y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            ho.d dVar = this.f6357z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // ao.n1
        public int j() {
            return this.f6349r;
        }

        @Override // ao.n1
        public List k() {
            return this.f6348q;
        }

        @Override // ao.n1
        public List m() {
            return this.f6345i;
        }

        public final l q(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, jo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ho.d dVar, Function0 webRtcConnectionEstablished) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            return new l(currentPart, uploadingIds, captureConfig, manualCapture, parts, i10, n1Var, tVar, str, th2, z10, z11, str2, dVar, webRtcConnectionEstablished);
        }

        public final q s() {
            return this.f6346o;
        }

        public boolean t() {
            return this.f6355x;
        }

        public String toString() {
            h4.a aVar = this.f6344e;
            List list = this.f6345i;
            q qVar = this.f6346o;
            f5.b.a aVar2 = this.f6347p;
            List list2 = this.f6348q;
            int i10 = this.f6349r;
            n1 n1Var = this.f6350s;
            jo.t tVar = this.f6351t;
            String str = this.f6352u;
            Throwable th2 = this.f6353v;
            boolean z10 = this.f6354w;
            boolean z11 = this.f6355x;
            String str2 = this.f6356y;
            ho.d dVar = this.f6357z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public boolean u() {
            return this.f6354w;
        }

        @Override // ao.n1
        /* renamed from: v */
        public h4.a g() {
            return this.f6344e;
        }

        public final Throwable w() {
            return this.f6353v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6344e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6345i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f6346o, i10);
            dest.writeString(this.f6347p.name());
            List<Parcelable> list2 = this.f6348q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6349r);
            dest.writeParcelable(this.f6350s, i10);
            jo.t tVar = this.f6351t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f6352u);
            dest.writeSerializable(this.f6353v);
            dest.writeInt(this.f6354w ? 1 : 0);
            dest.writeInt(this.f6355x ? 1 : 0);
            dest.writeString(this.f6356y);
            dest.writeParcelable(this.f6357z, i10);
        }

        public final ho.d y() {
            return this.f6357z;
        }

        public final f5.b.a z() {
            return this.f6347p;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, jo.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, ho.d dVar, Function0 webRtcConnectionEstablished) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            this.f6344e = currentPart;
            this.f6345i = uploadingIds;
            this.f6346o = captureConfig;
            this.f6347p = manualCapture;
            this.f6348q = parts;
            this.f6349r = i10;
            this.f6350s = n1Var;
            this.f6351t = tVar;
            this.f6352u = str;
            this.f6353v = th2;
            this.f6354w = z10;
            this.f6355x = z11;
            this.f6356y = str2;
            this.f6357z = dVar;
            this.A = webRtcConnectionEstablished;
        }
    }

    private n1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends n1 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0092a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f6244e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6245i;

        /* renamed from: o  reason: collision with root package name */
        private final List f6246o;

        /* renamed from: p  reason: collision with root package name */
        private final int f6247p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f6248q;

        /* renamed from: r  reason: collision with root package name */
        private final String f6249r;

        /* renamed from: s  reason: collision with root package name */
        private final List f6250s;

        /* renamed from: t  reason: collision with root package name */
        private final mn.v f6251t;

        /* renamed from: u  reason: collision with root package name */
        private final List f6252u;

        /* renamed from: v  reason: collision with root package name */
        private final String f6253v;

        /* renamed from: w  reason: collision with root package name */
        private final String f6254w;

        /* renamed from: x  reason: collision with root package name */
        private final ao.c f6255x;

        /* renamed from: ao.n1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0092a implements Parcelable.Creator {
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
                mn.v vVar = (mn.v) parcel.readParcelable(a.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new a(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString(), ao.c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, mn.v vVar, List list4, String str2, String str3, ao.c cVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f5836o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // ao.n1
        public n1 e() {
            return this.f6248q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f6244e, aVar.f6244e) && Intrinsics.areEqual(this.f6245i, aVar.f6245i) && Intrinsics.areEqual(this.f6246o, aVar.f6246o) && this.f6247p == aVar.f6247p && Intrinsics.areEqual(this.f6248q, aVar.f6248q) && Intrinsics.areEqual(this.f6249r, aVar.f6249r) && Intrinsics.areEqual(this.f6250s, aVar.f6250s) && Intrinsics.areEqual(this.f6251t, aVar.f6251t) && Intrinsics.areEqual(this.f6252u, aVar.f6252u) && Intrinsics.areEqual(this.f6253v, aVar.f6253v) && Intrinsics.areEqual(this.f6254w, aVar.f6254w) && this.f6255x == aVar.f6255x) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6249r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f6244e.hashCode() * 31) + this.f6245i.hashCode()) * 31) + this.f6246o.hashCode()) * 31) + Integer.hashCode(this.f6247p)) * 31;
            n1 n1Var = this.f6248q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f6249r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f6250s.hashCode()) * 31) + this.f6251t.hashCode()) * 31) + this.f6252u.hashCode()) * 31;
            String str2 = this.f6253v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f6254w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f6255x.hashCode();
        }

        @Override // ao.n1
        public int j() {
            return this.f6247p;
        }

        @Override // ao.n1
        public List k() {
            return this.f6246o;
        }

        @Override // ao.n1
        public List m() {
            return this.f6245i;
        }

        public final List o() {
            return this.f6250s;
        }

        @Override // ao.n1
        /* renamed from: p */
        public h4.a g() {
            return this.f6244e;
        }

        public final ao.c q() {
            return this.f6255x;
        }

        public final List r() {
            return this.f6252u;
        }

        public String toString() {
            h4.a aVar = this.f6244e;
            List list = this.f6245i;
            List list2 = this.f6246o;
            int i10 = this.f6247p;
            n1 n1Var = this.f6248q;
            String str = this.f6249r;
            List list3 = this.f6250s;
            mn.v vVar = this.f6251t;
            List list4 = this.f6252u;
            String str2 = this.f6253v;
            String str3 = this.f6254w;
            ao.c cVar = this.f6255x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6244e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6245i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f6246o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6247p);
            dest.writeParcelable(this.f6248q, i10);
            dest.writeString(this.f6249r);
            List<c0> list3 = this.f6250s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f6251t, i10);
            List<e4> list4 = this.f6252u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f6253v);
            dest.writeString(this.f6254w);
            dest.writeString(this.f6255x.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, mn.v cameraProperties, List idConfigsForCountry, String str2, String str3, ao.c errorType) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            Intrinsics.checkNotNullParameter(errorType, "errorType");
            this.f6244e = currentPart;
            this.f6245i = uploadingIds;
            this.f6246o = parts;
            this.f6247p = i10;
            this.f6248q = n1Var;
            this.f6249r = str;
            this.f6250s = captureFrames;
            this.f6251t = cameraProperties;
            this.f6252u = idConfigsForCountry;
            this.f6253v = str2;
            this.f6254w = str3;
            this.f6255x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f6267e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6268i;

        /* renamed from: o  reason: collision with root package name */
        private final List f6269o;

        /* renamed from: p  reason: collision with root package name */
        private final int f6270p;

        /* renamed from: q  reason: collision with root package name */
        private final String f6271q;

        /* renamed from: r  reason: collision with root package name */
        private final q f6272r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f6273s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f6274t;

        /* renamed from: u  reason: collision with root package name */
        private final String f6275u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f5836o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c p(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f6267e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f6268i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f6269o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f6270p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f6271q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f6272r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f6273s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f6274t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f6275u;
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

        @Override // ao.n1
        public n1 e() {
            return this.f6274t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f6267e, cVar.f6267e) && Intrinsics.areEqual(this.f6268i, cVar.f6268i) && Intrinsics.areEqual(this.f6269o, cVar.f6269o) && this.f6270p == cVar.f6270p && Intrinsics.areEqual(this.f6271q, cVar.f6271q) && Intrinsics.areEqual(this.f6272r, cVar.f6272r) && this.f6273s == cVar.f6273s && Intrinsics.areEqual(this.f6274t, cVar.f6274t) && Intrinsics.areEqual(this.f6275u, cVar.f6275u)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6271q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f6267e.hashCode() * 31) + this.f6268i.hashCode()) * 31) + this.f6269o.hashCode()) * 31) + Integer.hashCode(this.f6270p)) * 31;
            String str = this.f6271q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f6272r.hashCode()) * 31) + Boolean.hashCode(this.f6273s)) * 31;
            n1 n1Var = this.f6274t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f6275u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // ao.n1
        public int j() {
            return this.f6270p;
        }

        @Override // ao.n1
        public List k() {
            return this.f6269o;
        }

        @Override // ao.n1
        public List m() {
            return this.f6268i;
        }

        public final c o(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q q() {
            return this.f6272r;
        }

        public final boolean r() {
            return this.f6273s;
        }

        @Override // ao.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f6267e;
        }

        public final String t() {
            return this.f6275u;
        }

        public String toString() {
            h4.a aVar = this.f6267e;
            List list = this.f6268i;
            List list2 = this.f6269o;
            int i10 = this.f6270p;
            String str = this.f6271q;
            q qVar = this.f6272r;
            boolean z10 = this.f6273s;
            n1 n1Var = this.f6274t;
            String str2 = this.f6275u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f6267e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f6268i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f6269o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f6270p);
            dest.writeString(this.f6271q);
            dest.writeParcelable(this.f6272r, i10);
            dest.writeInt(this.f6273s ? 1 : 0);
            dest.writeParcelable(this.f6274t, i10);
            dest.writeString(this.f6275u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f6267e = currentPart;
            this.f6268i = uploadingIds;
            this.f6269o = parts;
            this.f6270p = i10;
            this.f6271q = str;
            this.f6272r = captureConfig;
            this.f6273s = z10;
            this.f6274t = n1Var;
            this.f6275u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f6326e;

        /* renamed from: i  reason: collision with root package name */
        private final List f6327i;

        /* renamed from: o  reason: collision with root package name */
        private final List f6328o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f6329p;

        /* renamed from: q  reason: collision with root package name */
        private final int f6330q;

        /* renamed from: r  reason: collision with root package name */
        private final String f6331r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f6332s;

        /* renamed from: t  reason: collision with root package name */
        private final String f6333t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f5836o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j p(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f6326e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f6327i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f6328o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f6329p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f6330q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f6331r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f6332s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f6333t;
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

        @Override // ao.n1
        public n1 e() {
            return this.f6329p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f6326e, jVar.f6326e) && Intrinsics.areEqual(this.f6327i, jVar.f6327i) && Intrinsics.areEqual(this.f6328o, jVar.f6328o) && Intrinsics.areEqual(this.f6329p, jVar.f6329p) && this.f6330q == jVar.f6330q && Intrinsics.areEqual(this.f6331r, jVar.f6331r) && Intrinsics.areEqual(this.f6332s, jVar.f6332s) && Intrinsics.areEqual(this.f6333t, jVar.f6333t)) {
                return true;
            }
            return false;
        }

        @Override // ao.n1
        public String f() {
            return this.f6331r;
        }

        @Override // ao.n1
        public h4 g() {
            return this.f6326e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f6326e.hashCode() * 31) + this.f6327i.hashCode()) * 31) + this.f6328o.hashCode()) * 31;
            n1 n1Var = this.f6329p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f6330q)) * 31;
            String str = this.f6331r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f6332s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f6333t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // ao.n1
        public int j() {
            return this.f6330q;
        }

        @Override // ao.n1
        public List k() {
            return this.f6328o;
        }

        @Override // ao.n1
        public List m() {
            return this.f6327i;
        }

        public final j o(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String q() {
            return this.f6333t;
        }

        public String toString() {
            h4 h4Var = this.f6326e;
            List list = this.f6327i;
            List list2 = this.f6328o;
            n1 n1Var = this.f6329p;
            int i10 = this.f6330q;
            String str = this.f6331r;
            c4 c4Var = this.f6332s;
            String str2 = this.f6333t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f6326e, i10);
            List<Parcelable> list = this.f6327i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f6328o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f6329p, i10);
            dest.writeInt(this.f6330q);
            dest.writeString(this.f6331r);
            c4 c4Var = this.f6332s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f6333t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f6326e = currentPart;
            this.f6327i = uploadingIds;
            this.f6328o = parts;
            this.f6329p = n1Var;
            this.f6330q = i10;
            this.f6331r = str;
            this.f6332s = c4Var;
            this.f6333t = str2;
        }
    }
}
