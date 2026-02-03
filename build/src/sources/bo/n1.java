package bo;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import bo.c4;
import bo.d0;
import bo.f5;
import bo.h4;
import bo.n1;
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
    private boolean f7066d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends n1 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f7079e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7080i;

        /* renamed from: o  reason: collision with root package name */
        private final List f7081o;

        /* renamed from: p  reason: collision with root package name */
        private final int f7082p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f7083q;

        /* renamed from: r  reason: collision with root package name */
        private final String f7084r;

        /* renamed from: s  reason: collision with root package name */
        private final List f7085s;

        /* renamed from: t  reason: collision with root package name */
        private final nn.v f7086t;

        /* renamed from: u  reason: collision with root package name */
        private final List f7087u;

        /* renamed from: v  reason: collision with root package name */
        private final String f7088v;

        /* renamed from: w  reason: collision with root package name */
        private final String f7089w;

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
                nn.v vVar = (nn.v) parcel.readParcelable(b.class.getClassLoader());
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
        public b(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, nn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            this.f7079e = currentPart;
            this.f7080i = uploadingIds;
            this.f7081o = parts;
            this.f7082p = i10;
            this.f7083q = n1Var;
            this.f7084r = str;
            this.f7085s = captureFrames;
            this.f7086t = cameraProperties;
            this.f7087u = idConfigsForCountry;
            this.f7088v = str2;
            this.f7089w = str3;
        }

        public static /* synthetic */ b p(b bVar, h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, nn.v vVar, List list4, String str2, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = bVar.f7079e;
            }
            if ((i11 & 2) != 0) {
                list = bVar.f7080i;
            }
            if ((i11 & 4) != 0) {
                list2 = bVar.f7081o;
            }
            if ((i11 & 8) != 0) {
                i10 = bVar.f7082p;
            }
            if ((i11 & 16) != 0) {
                n1Var = bVar.f7083q;
            }
            if ((i11 & 32) != 0) {
                str = bVar.f7084r;
            }
            if ((i11 & 64) != 0) {
                list3 = bVar.f7085s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = bVar.f7086t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                list4 = bVar.f7087u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = bVar.f7088v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str3 = bVar.f7089w;
            }
            String str4 = str2;
            String str5 = str3;
            nn.v vVar2 = vVar;
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

        @Override // bo.n1
        public n1 e() {
            return this.f7083q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f7079e, bVar.f7079e) && Intrinsics.areEqual(this.f7080i, bVar.f7080i) && Intrinsics.areEqual(this.f7081o, bVar.f7081o) && this.f7082p == bVar.f7082p && Intrinsics.areEqual(this.f7083q, bVar.f7083q) && Intrinsics.areEqual(this.f7084r, bVar.f7084r) && Intrinsics.areEqual(this.f7085s, bVar.f7085s) && Intrinsics.areEqual(this.f7086t, bVar.f7086t) && Intrinsics.areEqual(this.f7087u, bVar.f7087u) && Intrinsics.areEqual(this.f7088v, bVar.f7088v) && Intrinsics.areEqual(this.f7089w, bVar.f7089w)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7084r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f7079e.hashCode() * 31) + this.f7080i.hashCode()) * 31) + this.f7081o.hashCode()) * 31) + Integer.hashCode(this.f7082p)) * 31;
            n1 n1Var = this.f7083q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f7084r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f7085s.hashCode()) * 31) + this.f7086t.hashCode()) * 31) + this.f7087u.hashCode()) * 31;
            String str2 = this.f7088v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f7089w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return i12 + i10;
        }

        @Override // bo.n1
        public int j() {
            return this.f7082p;
        }

        @Override // bo.n1
        public List k() {
            return this.f7081o;
        }

        @Override // bo.n1
        public List m() {
            return this.f7080i;
        }

        public final b o(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, nn.v cameraProperties, List idConfigsForCountry, String str2, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            return new b(currentPart, uploadingIds, parts, i10, n1Var, str, captureFrames, cameraProperties, idConfigsForCountry, str2, str3);
        }

        public final nn.v q() {
            return this.f7086t;
        }

        @Override // bo.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f7079e;
        }

        public final List s() {
            return this.f7087u;
        }

        public final String t() {
            return this.f7088v;
        }

        public String toString() {
            h4.a aVar = this.f7079e;
            List list = this.f7080i;
            List list2 = this.f7081o;
            int i10 = this.f7082p;
            n1 n1Var = this.f7083q;
            String str = this.f7084r;
            List list3 = this.f7085s;
            nn.v vVar = this.f7086t;
            List list4 = this.f7087u;
            String str2 = this.f7088v;
            String str3 = this.f7089w;
            return "AutoClassificationManualSelect(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ")";
        }

        public final String u() {
            return this.f7089w;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7079e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7080i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f7081o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7082p);
            dest.writeParcelable(this.f7083q, i10);
            dest.writeString(this.f7084r);
            List<c0> list3 = this.f7085s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f7086t, i10);
            List<e4> list4 = this.f7087u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f7088v);
            dest.writeString(this.f7089w);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends n1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f7099e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7100i;

        /* renamed from: o  reason: collision with root package name */
        private final q f7101o;

        /* renamed from: p  reason: collision with root package name */
        private final d0.b f7102p;

        /* renamed from: q  reason: collision with root package name */
        private final List f7103q;

        /* renamed from: r  reason: collision with root package name */
        private final int f7104r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f7105s;

        /* renamed from: t  reason: collision with root package name */
        private final String f7106t;

        /* renamed from: u  reason: collision with root package name */
        private final io.d f7107u;

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
                return new d(createFromParcel, arrayList, qVar, createFromParcel2, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (io.d) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, io.d dVar) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f7099e = currentPart;
            this.f7100i = uploadingIds;
            this.f7101o = captureConfig;
            this.f7102p = idForReview;
            this.f7103q = parts;
            this.f7104r = i10;
            this.f7105s = n1Var;
            this.f7106t = str;
            this.f7107u = dVar;
        }

        public static /* synthetic */ d p(d dVar, h4.a aVar, List list, q qVar, d0.b bVar, List list2, int i10, n1 n1Var, String str, io.d dVar2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = dVar.f7099e;
            }
            if ((i11 & 2) != 0) {
                list = dVar.f7100i;
            }
            if ((i11 & 4) != 0) {
                qVar = dVar.f7101o;
            }
            if ((i11 & 8) != 0) {
                bVar = dVar.f7102p;
            }
            if ((i11 & 16) != 0) {
                list2 = dVar.f7103q;
            }
            if ((i11 & 32) != 0) {
                i10 = dVar.f7104r;
            }
            if ((i11 & 64) != 0) {
                n1Var = dVar.f7105s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str = dVar.f7106t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                dVar2 = dVar.f7107u;
            }
            String str2 = str;
            io.d dVar3 = dVar2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return dVar.o(aVar, list, qVar2, bVar, list3, i12, n1Var2, str2, dVar3);
        }

        @Override // bo.n1
        public void d() {
            super.d();
            for (c0 c0Var : this.f7102p.i2()) {
                new File(c0Var.a()).delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // bo.n1
        public n1 e() {
            return this.f7105s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f7099e, dVar.f7099e) && Intrinsics.areEqual(this.f7100i, dVar.f7100i) && Intrinsics.areEqual(this.f7101o, dVar.f7101o) && Intrinsics.areEqual(this.f7102p, dVar.f7102p) && Intrinsics.areEqual(this.f7103q, dVar.f7103q) && this.f7104r == dVar.f7104r && Intrinsics.areEqual(this.f7105s, dVar.f7105s) && Intrinsics.areEqual(this.f7106t, dVar.f7106t) && Intrinsics.areEqual(this.f7107u, dVar.f7107u)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7106t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f7099e.hashCode() * 31) + this.f7100i.hashCode()) * 31) + this.f7101o.hashCode()) * 31) + this.f7102p.hashCode()) * 31) + this.f7103q.hashCode()) * 31) + Integer.hashCode(this.f7104r)) * 31;
            n1 n1Var = this.f7105s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f7106t;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            io.d dVar = this.f7107u;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return i12 + i10;
        }

        @Override // bo.n1
        public int j() {
            return this.f7104r;
        }

        @Override // bo.n1
        public List k() {
            return this.f7103q;
        }

        @Override // bo.n1
        public List m() {
            return this.f7100i;
        }

        public final d o(h4.a currentPart, List uploadingIds, q captureConfig, d0.b idForReview, List parts, int i10, n1 n1Var, String str, io.d dVar) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new d(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, str, dVar);
        }

        public final q q() {
            return this.f7101o;
        }

        @Override // bo.n1
        /* renamed from: r */
        public h4.a g() {
            return this.f7099e;
        }

        public final io.d s() {
            return this.f7107u;
        }

        public final d0.b t() {
            return this.f7102p;
        }

        public String toString() {
            h4.a aVar = this.f7099e;
            List list = this.f7100i;
            q qVar = this.f7101o;
            d0.b bVar = this.f7102p;
            List list2 = this.f7103q;
            int i10 = this.f7104r;
            n1 n1Var = this.f7105s;
            String str = this.f7106t;
            io.d dVar = this.f7107u;
            return "CountdownToCapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + bVar + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", hint=" + dVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7099e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7100i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f7101o, i10);
            this.f7102p.writeToParcel(dest, i10);
            List<Parcelable> list2 = this.f7103q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7104r);
            dest.writeParcelable(this.f7105s, i10);
            dest.writeString(this.f7106t);
            dest.writeParcelable(this.f7107u, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends n1 {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f7108e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7109i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f7110o;

        /* renamed from: p  reason: collision with root package name */
        private final List f7111p;

        /* renamed from: q  reason: collision with root package name */
        private final int f7112q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f7113r;

        /* renamed from: s  reason: collision with root package name */
        private final String f7114s;

        /* renamed from: t  reason: collision with root package name */
        private final jo.c f7115t;

        /* renamed from: u  reason: collision with root package name */
        private final long f7116u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f7117v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                jo.c createFromParcel;
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
                    createFromParcel = jo.c.CREATOR.createFromParcel(parcel);
                }
                jo.c cVar = createFromParcel;
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

        public /* synthetic */ e(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, jo.c cVar, long j10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 3000L : j10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
        }

        public static /* synthetic */ e p(e eVar, c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, jo.c cVar, long j10, boolean z10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                c4Var = eVar.f7108e;
            }
            if ((i11 & 2) != 0) {
                list = eVar.f7109i;
            }
            if ((i11 & 4) != 0) {
                h4Var = eVar.f7110o;
            }
            if ((i11 & 8) != 0) {
                list2 = eVar.f7111p;
            }
            if ((i11 & 16) != 0) {
                i10 = eVar.f7112q;
            }
            if ((i11 & 32) != 0) {
                n1Var = eVar.f7113r;
            }
            if ((i11 & 64) != 0) {
                str = eVar.f7114s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                cVar = eVar.f7115t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                j10 = eVar.f7116u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = eVar.f7117v;
            }
            boolean z11 = z10;
            long j11 = j10;
            String str2 = str;
            jo.c cVar2 = cVar;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            return eVar.o(c4Var, list, h4Var, list2, i12, n1Var2, str2, cVar2, j11, z11);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // bo.n1
        public n1 e() {
            return this.f7113r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f7108e, eVar.f7108e) && Intrinsics.areEqual(this.f7109i, eVar.f7109i) && Intrinsics.areEqual(this.f7110o, eVar.f7110o) && Intrinsics.areEqual(this.f7111p, eVar.f7111p) && this.f7112q == eVar.f7112q && Intrinsics.areEqual(this.f7113r, eVar.f7113r) && Intrinsics.areEqual(this.f7114s, eVar.f7114s) && Intrinsics.areEqual(this.f7115t, eVar.f7115t) && this.f7116u == eVar.f7116u && this.f7117v == eVar.f7117v) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7114s;
        }

        @Override // bo.n1
        public h4 g() {
            return this.f7110o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((this.f7108e.hashCode() * 31) + this.f7109i.hashCode()) * 31) + this.f7110o.hashCode()) * 31) + this.f7111p.hashCode()) * 31) + Integer.hashCode(this.f7112q)) * 31;
            n1 n1Var = this.f7113r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            String str = this.f7114s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            jo.c cVar = this.f7115t;
            if (cVar != null) {
                i10 = cVar.hashCode();
            }
            return ((((i12 + i10) * 31) + Long.hashCode(this.f7116u)) * 31) + Boolean.hashCode(this.f7117v);
        }

        @Override // bo.n1
        public int j() {
            return this.f7112q;
        }

        @Override // bo.n1
        public List k() {
            return this.f7111p;
        }

        @Override // bo.n1
        public List m() {
            return this.f7109i;
        }

        public final e o(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, jo.c cVar, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new e(id2, uploadingIds, currentPart, parts, i10, n1Var, str, cVar, j10, z10);
        }

        public final c4 q() {
            return this.f7108e;
        }

        public final long r() {
            return this.f7116u;
        }

        public final boolean s() {
            return this.f7117v;
        }

        public String toString() {
            c4 c4Var = this.f7108e;
            List list = this.f7109i;
            h4 h4Var = this.f7110o;
            List list2 = this.f7111p;
            int i10 = this.f7112q;
            n1 n1Var = this.f7113r;
            String str = this.f7114s;
            jo.c cVar = this.f7115t;
            long j10 = this.f7116u;
            boolean z10 = this.f7117v;
            return "FinalizeLocalVideoCapture(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", minDurationMs=" + j10 + ", isDelayComplete=" + z10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7108e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7109i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f7110o, i10);
            List<Parcelable> list2 = this.f7111p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7112q);
            dest.writeParcelable(this.f7113r, i10);
            dest.writeString(this.f7114s);
            jo.c cVar = this.f7115t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeLong(this.f7116u);
            dest.writeInt(this.f7117v ? 1 : 0);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, jo.c cVar, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f7108e = id2;
            this.f7109i = uploadingIds;
            this.f7110o = currentPart;
            this.f7111p = parts;
            this.f7112q = i10;
            this.f7113r = n1Var;
            this.f7114s = str;
            this.f7115t = cVar;
            this.f7116u = j10;
            this.f7117v = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends n1 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f7118e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7119i;

        /* renamed from: o  reason: collision with root package name */
        private final List f7120o;

        /* renamed from: p  reason: collision with root package name */
        private final int f7121p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f7122q;

        /* renamed from: r  reason: collision with root package name */
        private final String f7123r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f7124s;

        /* renamed from: t  reason: collision with root package name */
        private final nn.v f7125t;

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
                return new f(h4Var, arrayList, arrayList2, parcel.readInt(), (n1) parcel.readParcelable(f.class.getClassLoader()), parcel.readString(), c4.CREATOR.createFromParcel(parcel), (nn.v) parcel.readParcelable(f.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(h4 currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, c4 id2, nn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f7118e = currentPart;
            this.f7119i = uploadingIds;
            this.f7120o = parts;
            this.f7121p = i10;
            this.f7122q = n1Var;
            this.f7123r = str;
            this.f7124s = id2;
            this.f7125t = cameraProperties;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // bo.n1
        public n1 e() {
            return this.f7122q;
        }

        @Override // bo.n1
        public String f() {
            return this.f7123r;
        }

        @Override // bo.n1
        public h4 g() {
            return this.f7118e;
        }

        @Override // bo.n1
        public int j() {
            return this.f7121p;
        }

        @Override // bo.n1
        public List k() {
            return this.f7120o;
        }

        @Override // bo.n1
        public List m() {
            return this.f7119i;
        }

        public final c4 o() {
            return this.f7124s;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f7118e, i10);
            List<Parcelable> list = this.f7119i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f7120o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7121p);
            dest.writeParcelable(this.f7122q, i10);
            dest.writeString(this.f7123r);
            this.f7124s.writeToParcel(dest, i10);
            dest.writeParcelable(this.f7125t, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends h {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f7126e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7127i;

        /* renamed from: o  reason: collision with root package name */
        private final q f7128o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f7129p;

        /* renamed from: q  reason: collision with root package name */
        private final List f7130q;

        /* renamed from: r  reason: collision with root package name */
        private final int f7131r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f7132s;

        /* renamed from: t  reason: collision with root package name */
        private final nn.v f7133t;

        /* renamed from: u  reason: collision with root package name */
        private final String f7134u;

        /* renamed from: v  reason: collision with root package name */
        private final boolean f7135v;

        /* renamed from: w  reason: collision with root package name */
        private final String f7136w;

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
                nn.v vVar = (nn.v) parcel.readParcelable(g.class.getClassLoader());
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

        public /* synthetic */ g(h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, nn.v vVar, String str, boolean z10, String str2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, list2, i10, n1Var, vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10, str2);
        }

        public static /* synthetic */ g u(g gVar, h4.a aVar, List list, q qVar, d0 d0Var, List list2, int i10, n1 n1Var, nn.v vVar, String str, boolean z10, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = gVar.f7126e;
            }
            if ((i11 & 2) != 0) {
                list = gVar.f7127i;
            }
            if ((i11 & 4) != 0) {
                qVar = gVar.f7128o;
            }
            if ((i11 & 8) != 0) {
                d0Var = gVar.f7129p;
            }
            if ((i11 & 16) != 0) {
                list2 = gVar.f7130q;
            }
            if ((i11 & 32) != 0) {
                i10 = gVar.f7131r;
            }
            if ((i11 & 64) != 0) {
                n1Var = gVar.f7132s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                vVar = gVar.f7133t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str = gVar.f7134u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z10 = gVar.f7135v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = gVar.f7136w;
            }
            boolean z11 = z10;
            String str3 = str2;
            nn.v vVar2 = vVar;
            String str4 = str;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            List list3 = list2;
            q qVar2 = qVar;
            return gVar.t(aVar, list, qVar2, d0Var, list3, i12, n1Var2, vVar2, str4, z11, str3);
        }

        @Override // bo.n1
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

        @Override // bo.n1
        public n1 e() {
            return this.f7132s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (Intrinsics.areEqual(this.f7126e, gVar.f7126e) && Intrinsics.areEqual(this.f7127i, gVar.f7127i) && Intrinsics.areEqual(this.f7128o, gVar.f7128o) && Intrinsics.areEqual(this.f7129p, gVar.f7129p) && Intrinsics.areEqual(this.f7130q, gVar.f7130q) && this.f7131r == gVar.f7131r && Intrinsics.areEqual(this.f7132s, gVar.f7132s) && Intrinsics.areEqual(this.f7133t, gVar.f7133t) && Intrinsics.areEqual(this.f7134u, gVar.f7134u) && this.f7135v == gVar.f7135v && Intrinsics.areEqual(this.f7136w, gVar.f7136w)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7136w;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((((((this.f7126e.hashCode() * 31) + this.f7127i.hashCode()) * 31) + this.f7128o.hashCode()) * 31) + this.f7129p.hashCode()) * 31) + this.f7130q.hashCode()) * 31) + Integer.hashCode(this.f7131r)) * 31;
            n1 n1Var = this.f7132s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f7133t.hashCode()) * 31;
            String str = this.f7134u;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f7135v)) * 31;
            String str2 = this.f7136w;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return hashCode5 + i10;
        }

        @Override // bo.n1
        public int j() {
            return this.f7131r;
        }

        @Override // bo.n1
        public List k() {
            return this.f7130q;
        }

        @Override // bo.n1
        public List m() {
            return this.f7127i;
        }

        @Override // bo.n1.h
        public nn.v o() {
            return this.f7133t;
        }

        @Override // bo.n1.h
        public q p() {
            return this.f7128o;
        }

        @Override // bo.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f7126e;
        }

        @Override // bo.n1.h
        public d0 r() {
            return this.f7129p;
        }

        @Override // bo.n1.h
        public h s(boolean z10) {
            return u(this, null, null, null, null, null, 0, null, null, null, z10, null, 1535, null);
        }

        public final g t(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, nn.v cameraProperties, String str, boolean z10, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new g(currentPart, uploadingIds, captureConfig, idForReview, parts, i10, n1Var, cameraProperties, str, z10, str2);
        }

        public String toString() {
            h4.a aVar = this.f7126e;
            List list = this.f7127i;
            q qVar = this.f7128o;
            d0 d0Var = this.f7129p;
            List list2 = this.f7130q;
            int i10 = this.f7131r;
            n1 n1Var = this.f7132s;
            nn.v vVar = this.f7133t;
            String str = this.f7134u;
            boolean z10 = this.f7135v;
            String str2 = this.f7136w;
            return "ReviewCapturedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str2 + ")";
        }

        public final String v() {
            return this.f7134u;
        }

        public boolean w() {
            return this.f7135v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7126e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7127i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f7128o, i10);
            dest.writeParcelable(this.f7129p, i10);
            List<Parcelable> list2 = this.f7130q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7131r);
            dest.writeParcelable(this.f7132s, i10);
            dest.writeParcelable(this.f7133t, i10);
            dest.writeString(this.f7134u);
            dest.writeInt(this.f7135v ? 1 : 0);
            dest.writeString(this.f7136w);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, List parts, int i10, n1 n1Var, nn.v cameraProperties, String str, boolean z10, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f7126e = currentPart;
            this.f7127i = uploadingIds;
            this.f7128o = captureConfig;
            this.f7129p = idForReview;
            this.f7130q = parts;
            this.f7131r = i10;
            this.f7132s = n1Var;
            this.f7133t = cameraProperties;
            this.f7134u = str;
            this.f7135v = z10;
            this.f7136w = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class h extends n1 {
        public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract nn.v o();

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
        return this.f7066d;
    }

    public abstract int j();

    public abstract List k();

    public abstract List m();

    public final void n(boolean z10) {
        this.f7066d = z10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends h {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f7137e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7138i;

        /* renamed from: o  reason: collision with root package name */
        private final q f7139o;

        /* renamed from: p  reason: collision with root package name */
        private final d0 f7140p;

        /* renamed from: q  reason: collision with root package name */
        private final String f7141q;

        /* renamed from: r  reason: collision with root package name */
        private final List f7142r;

        /* renamed from: s  reason: collision with root package name */
        private final int f7143s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f7144t;

        /* renamed from: u  reason: collision with root package name */
        private final nn.v f7145u;

        /* renamed from: v  reason: collision with root package name */
        private final String f7146v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f7147w;

        /* renamed from: x  reason: collision with root package name */
        private final String f7148x;

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
                nn.v vVar = (nn.v) parcel.readParcelable(i.class.getClassLoader());
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

        public /* synthetic */ i(h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, nn.v vVar, String str2, boolean z10, String str3, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, d0Var, str, list2, i10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new nn.v(null, null, null, 0, 15, null) : vVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10, str3);
        }

        public static /* synthetic */ i u(i iVar, h4.a aVar, List list, q qVar, d0 d0Var, String str, List list2, int i10, n1 n1Var, nn.v vVar, String str2, boolean z10, String str3, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = iVar.f7137e;
            }
            if ((i11 & 2) != 0) {
                list = iVar.f7138i;
            }
            if ((i11 & 4) != 0) {
                qVar = iVar.f7139o;
            }
            if ((i11 & 8) != 0) {
                d0Var = iVar.f7140p;
            }
            if ((i11 & 16) != 0) {
                str = iVar.f7141q;
            }
            if ((i11 & 32) != 0) {
                list2 = iVar.f7142r;
            }
            if ((i11 & 64) != 0) {
                i10 = iVar.f7143s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = iVar.f7144t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                vVar = iVar.f7145u;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str2 = iVar.f7146v;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                z10 = iVar.f7147w;
            }
            if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                str3 = iVar.f7148x;
            }
            boolean z11 = z10;
            String str4 = str3;
            nn.v vVar2 = vVar;
            String str5 = str2;
            int i12 = i10;
            n1 n1Var2 = n1Var;
            String str6 = str;
            List list3 = list2;
            return iVar.t(aVar, list, qVar, d0Var, str6, list3, i12, n1Var2, vVar2, str5, z11, str4);
        }

        @Override // bo.n1
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

        @Override // bo.n1
        public n1 e() {
            return this.f7144t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f7137e, iVar.f7137e) && Intrinsics.areEqual(this.f7138i, iVar.f7138i) && Intrinsics.areEqual(this.f7139o, iVar.f7139o) && Intrinsics.areEqual(this.f7140p, iVar.f7140p) && Intrinsics.areEqual(this.f7141q, iVar.f7141q) && Intrinsics.areEqual(this.f7142r, iVar.f7142r) && this.f7143s == iVar.f7143s && Intrinsics.areEqual(this.f7144t, iVar.f7144t) && Intrinsics.areEqual(this.f7145u, iVar.f7145u) && Intrinsics.areEqual(this.f7146v, iVar.f7146v) && this.f7147w == iVar.f7147w && Intrinsics.areEqual(this.f7148x, iVar.f7148x)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7148x;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f7137e.hashCode() * 31) + this.f7138i.hashCode()) * 31) + this.f7139o.hashCode()) * 31) + this.f7140p.hashCode()) * 31;
            String str = this.f7141q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode5 = (((((hashCode4 + hashCode) * 31) + this.f7142r.hashCode()) * 31) + Integer.hashCode(this.f7143s)) * 31;
            n1 n1Var = this.f7144t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int hashCode6 = (((hashCode5 + hashCode2) * 31) + this.f7145u.hashCode()) * 31;
            String str2 = this.f7146v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode3) * 31) + Boolean.hashCode(this.f7147w)) * 31;
            String str3 = this.f7148x;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return hashCode7 + i10;
        }

        @Override // bo.n1
        public int j() {
            return this.f7143s;
        }

        @Override // bo.n1
        public List k() {
            return this.f7142r;
        }

        @Override // bo.n1
        public List m() {
            return this.f7138i;
        }

        @Override // bo.n1.h
        public nn.v o() {
            return this.f7145u;
        }

        @Override // bo.n1.h
        public q p() {
            return this.f7139o;
        }

        @Override // bo.n1
        /* renamed from: q */
        public h4.a g() {
            return this.f7137e;
        }

        @Override // bo.n1.h
        public d0 r() {
            return this.f7140p;
        }

        @Override // bo.n1.h
        public h s(boolean z10) {
            return u(this, null, null, null, null, null, null, 0, null, null, null, z10, null, 3071, null);
        }

        public final i t(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, nn.v cameraProperties, String str2, boolean z10, String str3) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            return new i(currentPart, uploadingIds, captureConfig, idForReview, str, parts, i10, n1Var, cameraProperties, str2, z10, str3);
        }

        public String toString() {
            h4.a aVar = this.f7137e;
            List list = this.f7138i;
            q qVar = this.f7139o;
            d0 d0Var = this.f7140p;
            String str = this.f7141q;
            List list2 = this.f7142r;
            int i10 = this.f7143s;
            n1 n1Var = this.f7144t;
            nn.v vVar = this.f7145u;
            String str2 = this.f7146v;
            boolean z10 = this.f7147w;
            String str3 = this.f7148x;
            return "ReviewSelectedImage(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", idForReview=" + d0Var + ", fileName=" + str + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", cameraProperties=" + vVar + ", error=" + str2 + ", submittingForAutoClassification=" + z10 + ", countryCode=" + str3 + ")";
        }

        public final String v() {
            return this.f7146v;
        }

        public final String w() {
            return this.f7141q;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7137e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7138i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f7139o, i10);
            dest.writeParcelable(this.f7140p, i10);
            dest.writeString(this.f7141q);
            List<Parcelable> list2 = this.f7142r;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7143s);
            dest.writeParcelable(this.f7144t, i10);
            dest.writeParcelable(this.f7145u, i10);
            dest.writeString(this.f7146v);
            dest.writeInt(this.f7147w ? 1 : 0);
            dest.writeString(this.f7148x);
        }

        public boolean y() {
            return this.f7147w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(h4.a currentPart, List uploadingIds, q captureConfig, d0 idForReview, String str, List parts, int i10, n1 n1Var, nn.v cameraProperties, String str2, boolean z10, String str3) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(idForReview, "idForReview");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f7137e = currentPart;
            this.f7138i = uploadingIds;
            this.f7139o = captureConfig;
            this.f7140p = idForReview;
            this.f7141q = str;
            this.f7142r = parts;
            this.f7143s = i10;
            this.f7144t = n1Var;
            this.f7145u = cameraProperties;
            this.f7146v = str2;
            this.f7147w = z10;
            this.f7148x = str3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends n1 {
        @NotNull
        public static final Parcelable.Creator<k> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final c4 f7157e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7158i;

        /* renamed from: o  reason: collision with root package name */
        private final h4 f7159o;

        /* renamed from: p  reason: collision with root package name */
        private final List f7160p;

        /* renamed from: q  reason: collision with root package name */
        private final int f7161q;

        /* renamed from: r  reason: collision with root package name */
        private final n1 f7162r;

        /* renamed from: s  reason: collision with root package name */
        private final String f7163s;

        /* renamed from: t  reason: collision with root package name */
        private final jo.c f7164t;

        /* renamed from: u  reason: collision with root package name */
        private final String f7165u;

        /* renamed from: v  reason: collision with root package name */
        private final nn.v f7166v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final k createFromParcel(Parcel parcel) {
                jo.c createFromParcel;
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
                    createFromParcel = jo.c.CREATOR.createFromParcel(parcel);
                }
                return new k(createFromParcel2, arrayList, h4Var, arrayList2, readInt3, n1Var, readString, createFromParcel, parcel.readString(), (nn.v) parcel.readParcelable(k.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final k[] newArray(int i10) {
                return new k[i10];
            }
        }

        public /* synthetic */ k(c4 c4Var, List list, h4 h4Var, List list2, int i10, n1 n1Var, String str, jo.c cVar, String str2, nn.v vVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(c4Var, list, (i11 & 4) != 0 ? new h4.a(c4.e.f6659o) : h4Var, list2, i10, (i11 & 32) != 0 ? null : n1Var, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : cVar, str2, vVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // bo.n1
        public n1 e() {
            return this.f7162r;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (Intrinsics.areEqual(this.f7157e, kVar.f7157e) && Intrinsics.areEqual(this.f7158i, kVar.f7158i) && Intrinsics.areEqual(this.f7159o, kVar.f7159o) && Intrinsics.areEqual(this.f7160p, kVar.f7160p) && this.f7161q == kVar.f7161q && Intrinsics.areEqual(this.f7162r, kVar.f7162r) && Intrinsics.areEqual(this.f7163s, kVar.f7163s) && Intrinsics.areEqual(this.f7164t, kVar.f7164t) && Intrinsics.areEqual(this.f7165u, kVar.f7165u) && Intrinsics.areEqual(this.f7166v, kVar.f7166v)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7163s;
        }

        @Override // bo.n1
        public h4 g() {
            return this.f7159o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((((this.f7157e.hashCode() * 31) + this.f7158i.hashCode()) * 31) + this.f7159o.hashCode()) * 31) + this.f7160p.hashCode()) * 31) + Integer.hashCode(this.f7161q)) * 31;
            n1 n1Var = this.f7162r;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f7163s;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            jo.c cVar = this.f7164t;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str2 = this.f7165u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((i13 + i10) * 31) + this.f7166v.hashCode();
        }

        @Override // bo.n1
        public int j() {
            return this.f7161q;
        }

        @Override // bo.n1
        public List k() {
            return this.f7160p;
        }

        @Override // bo.n1
        public List m() {
            return this.f7158i;
        }

        public final nn.v o() {
            return this.f7166v;
        }

        public final jo.c p() {
            return this.f7164t;
        }

        public final String q() {
            return this.f7165u;
        }

        public String toString() {
            c4 c4Var = this.f7157e;
            List list = this.f7158i;
            h4 h4Var = this.f7159o;
            List list2 = this.f7160p;
            int i10 = this.f7161q;
            n1 n1Var = this.f7162r;
            String str = this.f7163s;
            jo.c cVar = this.f7164t;
            String str2 = this.f7165u;
            nn.v vVar = this.f7166v;
            return "Submit(id=" + c4Var + ", uploadingIds=" + list + ", currentPart=" + h4Var + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", governmentIdRequestArguments=" + cVar + ", webRtcObjectId=" + str2 + ", cameraProperties=" + vVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7157e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7158i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f7159o, i10);
            List<Parcelable> list2 = this.f7160p;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7161q);
            dest.writeParcelable(this.f7162r, i10);
            dest.writeString(this.f7163s);
            jo.c cVar = this.f7164t;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            dest.writeString(this.f7165u);
            dest.writeParcelable(this.f7166v, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(c4 id2, List uploadingIds, h4 currentPart, List parts, int i10, n1 n1Var, String str, jo.c cVar, String str2, nn.v cameraProperties) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            this.f7157e = id2;
            this.f7158i = uploadingIds;
            this.f7159o = currentPart;
            this.f7160p = parts;
            this.f7161q = i10;
            this.f7162r = n1Var;
            this.f7163s = str;
            this.f7164t = cVar;
            this.f7165u = str2;
            this.f7166v = cameraProperties;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends n1 implements bo.d, bo.b {
        @NotNull
        public static final Parcelable.Creator<l> CREATOR = new a();
        private final Function0 A;

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f7167e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7168i;

        /* renamed from: o  reason: collision with root package name */
        private final q f7169o;

        /* renamed from: p  reason: collision with root package name */
        private final f5.b.a f7170p;

        /* renamed from: q  reason: collision with root package name */
        private final List f7171q;

        /* renamed from: r  reason: collision with root package name */
        private final int f7172r;

        /* renamed from: s  reason: collision with root package name */
        private final n1 f7173s;

        /* renamed from: t  reason: collision with root package name */
        private final ko.t f7174t;

        /* renamed from: u  reason: collision with root package name */
        private final String f7175u;

        /* renamed from: v  reason: collision with root package name */
        private final Throwable f7176v;

        /* renamed from: w  reason: collision with root package name */
        private final boolean f7177w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f7178x;

        /* renamed from: y  reason: collision with root package name */
        private final String f7179y;

        /* renamed from: z  reason: collision with root package name */
        private final io.d f7180z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final l createFromParcel(Parcel parcel) {
                ko.t valueOf;
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
                    valueOf = ko.t.valueOf(parcel.readString());
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
                return new l(createFromParcel, arrayList, qVar, valueOf2, arrayList2, readInt3, n1Var, valueOf, readString, th2, z10, z11, parcel.readString(), (io.d) parcel.readParcelable(l.class.getClassLoader()), null, 16384, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final l[] newArray(int i10) {
                return new l[i10];
            }
        }

        public /* synthetic */ l(h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, ko.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, io.d dVar, Function0 function0, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, list, qVar, aVar2, list2, i10, n1Var, tVar, str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? true : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? true : z11, str2, (i11 & 8192) != 0 ? null : dVar, (i11 & 16384) != 0 ? new Function0() { // from class: bo.o1
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
            return Unit.f33074a;
        }

        public static /* synthetic */ l r(l lVar, h4.a aVar, List list, q qVar, f5.b.a aVar2, List list2, int i10, n1 n1Var, ko.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, io.d dVar, Function0 function0, int i11, Object obj) {
            return lVar.q((i11 & 1) != 0 ? lVar.f7167e : aVar, (i11 & 2) != 0 ? lVar.f7168i : list, (i11 & 4) != 0 ? lVar.f7169o : qVar, (i11 & 8) != 0 ? lVar.f7170p : aVar2, (i11 & 16) != 0 ? lVar.f7171q : list2, (i11 & 32) != 0 ? lVar.f7172r : i10, (i11 & 64) != 0 ? lVar.f7173s : n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? lVar.f7174t : tVar, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? lVar.f7175u : str, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? lVar.f7176v : th2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? lVar.f7177w : z10, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? lVar.f7178x : z11, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? lVar.f7179y : str2, (i11 & 8192) != 0 ? lVar.f7180z : dVar, (i11 & 16384) != 0 ? lVar.A : function0);
        }

        public final Function0 A() {
            return this.A;
        }

        public final String C() {
            return this.f7175u;
        }

        public final ko.t D() {
            return this.f7174t;
        }

        @Override // bo.b
        public n1 a(boolean z10) {
            return r(this, null, null, null, null, null, 0, null, null, null, null, false, z10, null, null, null, 30719, null);
        }

        @Override // bo.d
        public n1 b(boolean z10) {
            return r(this, null, null, null, null, null, 0, null, null, null, null, z10, false, null, null, null, 31743, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // bo.n1
        public n1 e() {
            return this.f7173s;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof l)) {
                return false;
            }
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f7167e, lVar.f7167e) && Intrinsics.areEqual(this.f7168i, lVar.f7168i) && Intrinsics.areEqual(this.f7169o, lVar.f7169o) && this.f7170p == lVar.f7170p && Intrinsics.areEqual(this.f7171q, lVar.f7171q) && this.f7172r == lVar.f7172r && Intrinsics.areEqual(this.f7173s, lVar.f7173s) && this.f7174t == lVar.f7174t && Intrinsics.areEqual(this.f7175u, lVar.f7175u) && Intrinsics.areEqual(this.f7176v, lVar.f7176v) && this.f7177w == lVar.f7177w && this.f7178x == lVar.f7178x && Intrinsics.areEqual(this.f7179y, lVar.f7179y) && Intrinsics.areEqual(this.f7180z, lVar.f7180z) && Intrinsics.areEqual(this.A, lVar.A)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7179y;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((((this.f7167e.hashCode() * 31) + this.f7168i.hashCode()) * 31) + this.f7169o.hashCode()) * 31) + this.f7170p.hashCode()) * 31) + this.f7171q.hashCode()) * 31) + Integer.hashCode(this.f7172r)) * 31;
            n1 n1Var = this.f7173s;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            ko.t tVar = this.f7174t;
            if (tVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = tVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str = this.f7175u;
            if (str == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            Throwable th2 = this.f7176v;
            if (th2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = th2.hashCode();
            }
            int hashCode7 = (((((i13 + hashCode4) * 31) + Boolean.hashCode(this.f7177w)) * 31) + Boolean.hashCode(this.f7178x)) * 31;
            String str2 = this.f7179y;
            if (str2 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str2.hashCode();
            }
            int i14 = (hashCode7 + hashCode5) * 31;
            io.d dVar = this.f7180z;
            if (dVar != null) {
                i10 = dVar.hashCode();
            }
            return ((i14 + i10) * 31) + this.A.hashCode();
        }

        @Override // bo.n1
        public int j() {
            return this.f7172r;
        }

        @Override // bo.n1
        public List k() {
            return this.f7171q;
        }

        @Override // bo.n1
        public List m() {
            return this.f7168i;
        }

        public final l q(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, ko.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, io.d dVar, Function0 webRtcConnectionEstablished) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            return new l(currentPart, uploadingIds, captureConfig, manualCapture, parts, i10, n1Var, tVar, str, th2, z10, z11, str2, dVar, webRtcConnectionEstablished);
        }

        public final q s() {
            return this.f7169o;
        }

        public boolean t() {
            return this.f7178x;
        }

        public String toString() {
            h4.a aVar = this.f7167e;
            List list = this.f7168i;
            q qVar = this.f7169o;
            f5.b.a aVar2 = this.f7170p;
            List list2 = this.f7171q;
            int i10 = this.f7172r;
            n1 n1Var = this.f7173s;
            ko.t tVar = this.f7174t;
            String str = this.f7175u;
            Throwable th2 = this.f7176v;
            boolean z10 = this.f7177w;
            boolean z11 = this.f7178x;
            String str2 = this.f7179y;
            io.d dVar = this.f7180z;
            Function0 function0 = this.A;
            return "WaitForAutocapture(currentPart=" + aVar + ", uploadingIds=" + list + ", captureConfig=" + qVar + ", manualCapture=" + aVar2 + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", webRtcState=" + tVar + ", webRtcJwt=" + str + ", error=" + th2 + ", checkCameraPermissions=" + z10 + ", checkAudioPermissions=" + z11 + ", countryCode=" + str2 + ", hint=" + dVar + ", webRtcConnectionEstablished=" + function0 + ")";
        }

        public boolean u() {
            return this.f7177w;
        }

        @Override // bo.n1
        /* renamed from: v */
        public h4.a g() {
            return this.f7167e;
        }

        public final Throwable w() {
            return this.f7176v;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7167e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7168i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeParcelable(this.f7169o, i10);
            dest.writeString(this.f7170p.name());
            List<Parcelable> list2 = this.f7171q;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7172r);
            dest.writeParcelable(this.f7173s, i10);
            ko.t tVar = this.f7174t;
            if (tVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(tVar.name());
            }
            dest.writeString(this.f7175u);
            dest.writeSerializable(this.f7176v);
            dest.writeInt(this.f7177w ? 1 : 0);
            dest.writeInt(this.f7178x ? 1 : 0);
            dest.writeString(this.f7179y);
            dest.writeParcelable(this.f7180z, i10);
        }

        public final io.d y() {
            return this.f7180z;
        }

        public final f5.b.a z() {
            return this.f7170p;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(h4.a currentPart, List uploadingIds, q captureConfig, f5.b.a manualCapture, List parts, int i10, n1 n1Var, ko.t tVar, String str, Throwable th2, boolean z10, boolean z11, String str2, io.d dVar, Function0 webRtcConnectionEstablished) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            Intrinsics.checkNotNullParameter(manualCapture, "manualCapture");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(webRtcConnectionEstablished, "webRtcConnectionEstablished");
            this.f7167e = currentPart;
            this.f7168i = uploadingIds;
            this.f7169o = captureConfig;
            this.f7170p = manualCapture;
            this.f7171q = parts;
            this.f7172r = i10;
            this.f7173s = n1Var;
            this.f7174t = tVar;
            this.f7175u = str;
            this.f7176v = th2;
            this.f7177w = z10;
            this.f7178x = z11;
            this.f7179y = str2;
            this.f7180z = dVar;
            this.A = webRtcConnectionEstablished;
        }
    }

    private n1() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends n1 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0126a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f7067e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7068i;

        /* renamed from: o  reason: collision with root package name */
        private final List f7069o;

        /* renamed from: p  reason: collision with root package name */
        private final int f7070p;

        /* renamed from: q  reason: collision with root package name */
        private final n1 f7071q;

        /* renamed from: r  reason: collision with root package name */
        private final String f7072r;

        /* renamed from: s  reason: collision with root package name */
        private final List f7073s;

        /* renamed from: t  reason: collision with root package name */
        private final nn.v f7074t;

        /* renamed from: u  reason: collision with root package name */
        private final List f7075u;

        /* renamed from: v  reason: collision with root package name */
        private final String f7076v;

        /* renamed from: w  reason: collision with root package name */
        private final String f7077w;

        /* renamed from: x  reason: collision with root package name */
        private final bo.c f7078x;

        /* renamed from: bo.n1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0126a implements Parcelable.Creator {
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
                nn.v vVar = (nn.v) parcel.readParcelable(a.class.getClassLoader());
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                for (int i13 = 0; i13 != readInt5; i13++) {
                    arrayList4.add(e4.CREATOR.createFromParcel(parcel));
                }
                return new a(createFromParcel, arrayList, arrayList2, readInt3, n1Var, readString, arrayList3, vVar, arrayList4, parcel.readString(), parcel.readString(), bo.c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(h4.a aVar, List list, List list2, int i10, n1 n1Var, String str, List list3, nn.v vVar, List list4, String str2, String str3, bo.c cVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? new h4.a(c4.e.f6659o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, n1Var, str, list3, vVar, list4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3, cVar);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // bo.n1
        public n1 e() {
            return this.f7071q;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f7067e, aVar.f7067e) && Intrinsics.areEqual(this.f7068i, aVar.f7068i) && Intrinsics.areEqual(this.f7069o, aVar.f7069o) && this.f7070p == aVar.f7070p && Intrinsics.areEqual(this.f7071q, aVar.f7071q) && Intrinsics.areEqual(this.f7072r, aVar.f7072r) && Intrinsics.areEqual(this.f7073s, aVar.f7073s) && Intrinsics.areEqual(this.f7074t, aVar.f7074t) && Intrinsics.areEqual(this.f7075u, aVar.f7075u) && Intrinsics.areEqual(this.f7076v, aVar.f7076v) && Intrinsics.areEqual(this.f7077w, aVar.f7077w) && this.f7078x == aVar.f7078x) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7072r;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((((this.f7067e.hashCode() * 31) + this.f7068i.hashCode()) * 31) + this.f7069o.hashCode()) * 31) + Integer.hashCode(this.f7070p)) * 31;
            n1 n1Var = this.f7071q;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str = this.f7072r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int hashCode5 = (((((((i11 + hashCode2) * 31) + this.f7073s.hashCode()) * 31) + this.f7074t.hashCode()) * 31) + this.f7075u.hashCode()) * 31;
            String str2 = this.f7076v;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (hashCode5 + hashCode3) * 31;
            String str3 = this.f7077w;
            if (str3 != null) {
                i10 = str3.hashCode();
            }
            return ((i12 + i10) * 31) + this.f7078x.hashCode();
        }

        @Override // bo.n1
        public int j() {
            return this.f7070p;
        }

        @Override // bo.n1
        public List k() {
            return this.f7069o;
        }

        @Override // bo.n1
        public List m() {
            return this.f7068i;
        }

        public final List o() {
            return this.f7073s;
        }

        @Override // bo.n1
        /* renamed from: p */
        public h4.a g() {
            return this.f7067e;
        }

        public final bo.c q() {
            return this.f7078x;
        }

        public final List r() {
            return this.f7075u;
        }

        public String toString() {
            h4.a aVar = this.f7067e;
            List list = this.f7068i;
            List list2 = this.f7069o;
            int i10 = this.f7070p;
            n1 n1Var = this.f7071q;
            String str = this.f7072r;
            List list3 = this.f7073s;
            nn.v vVar = this.f7074t;
            List list4 = this.f7075u;
            String str2 = this.f7076v;
            String str3 = this.f7077w;
            bo.c cVar = this.f7078x;
            return "AutoClassificationError(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", backState=" + n1Var + ", countryCode=" + str + ", captureFrames=" + list3 + ", cameraProperties=" + vVar + ", idConfigsForCountry=" + list4 + ", selectedCountryCode=" + str2 + ", selectedIdClass=" + str3 + ", errorType=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7067e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7068i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f7069o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7070p);
            dest.writeParcelable(this.f7071q, i10);
            dest.writeString(this.f7072r);
            List<c0> list3 = this.f7073s;
            dest.writeInt(list3.size());
            for (c0 c0Var : list3) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f7074t, i10);
            List<e4> list4 = this.f7075u;
            dest.writeInt(list4.size());
            for (e4 e4Var : list4) {
                e4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f7076v);
            dest.writeString(this.f7077w);
            dest.writeString(this.f7078x.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(h4.a currentPart, List uploadingIds, List parts, int i10, n1 n1Var, String str, List captureFrames, nn.v cameraProperties, List idConfigsForCountry, String str2, String str3, bo.c errorType) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureFrames, "captureFrames");
            Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
            Intrinsics.checkNotNullParameter(idConfigsForCountry, "idConfigsForCountry");
            Intrinsics.checkNotNullParameter(errorType, "errorType");
            this.f7067e = currentPart;
            this.f7068i = uploadingIds;
            this.f7069o = parts;
            this.f7070p = i10;
            this.f7071q = n1Var;
            this.f7072r = str;
            this.f7073s = captureFrames;
            this.f7074t = cameraProperties;
            this.f7075u = idConfigsForCountry;
            this.f7076v = str2;
            this.f7077w = str3;
            this.f7078x = errorType;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends n1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4.a f7090e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7091i;

        /* renamed from: o  reason: collision with root package name */
        private final List f7092o;

        /* renamed from: p  reason: collision with root package name */
        private final int f7093p;

        /* renamed from: q  reason: collision with root package name */
        private final String f7094q;

        /* renamed from: r  reason: collision with root package name */
        private final q f7095r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f7096s;

        /* renamed from: t  reason: collision with root package name */
        private final n1 f7097t;

        /* renamed from: u  reason: collision with root package name */
        private final String f7098u;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f6659o) : aVar, (i11 & 2) != 0 ? CollectionsKt.l() : list, list2, i10, str, qVar, (i11 & 64) != 0 ? false : z10, n1Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2);
        }

        public static /* synthetic */ c p(c cVar, h4.a aVar, List list, List list2, int i10, String str, q qVar, boolean z10, n1 n1Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                aVar = cVar.f7090e;
            }
            if ((i11 & 2) != 0) {
                list = cVar.f7091i;
            }
            if ((i11 & 4) != 0) {
                list2 = cVar.f7092o;
            }
            if ((i11 & 8) != 0) {
                i10 = cVar.f7093p;
            }
            if ((i11 & 16) != 0) {
                str = cVar.f7094q;
            }
            if ((i11 & 32) != 0) {
                qVar = cVar.f7095r;
            }
            if ((i11 & 64) != 0) {
                z10 = cVar.f7096s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                n1Var = cVar.f7097t;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                str2 = cVar.f7098u;
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

        @Override // bo.n1
        public n1 e() {
            return this.f7097t;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f7090e, cVar.f7090e) && Intrinsics.areEqual(this.f7091i, cVar.f7091i) && Intrinsics.areEqual(this.f7092o, cVar.f7092o) && this.f7093p == cVar.f7093p && Intrinsics.areEqual(this.f7094q, cVar.f7094q) && Intrinsics.areEqual(this.f7095r, cVar.f7095r) && this.f7096s == cVar.f7096s && Intrinsics.areEqual(this.f7097t, cVar.f7097t) && Intrinsics.areEqual(this.f7098u, cVar.f7098u)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7094q;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = ((((((this.f7090e.hashCode() * 31) + this.f7091i.hashCode()) * 31) + this.f7092o.hashCode()) * 31) + Integer.hashCode(this.f7093p)) * 31;
            String str = this.f7094q;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f7095r.hashCode()) * 31) + Boolean.hashCode(this.f7096s)) * 31;
            n1 n1Var = this.f7097t;
            if (n1Var == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = n1Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode2) * 31;
            String str2 = this.f7098u;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i11 + i10;
        }

        @Override // bo.n1
        public int j() {
            return this.f7093p;
        }

        @Override // bo.n1
        public List k() {
            return this.f7092o;
        }

        @Override // bo.n1
        public List m() {
            return this.f7091i;
        }

        public final c o(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            return new c(currentPart, uploadingIds, parts, i10, str, captureConfig, z10, n1Var, str2);
        }

        public final q q() {
            return this.f7095r;
        }

        public final boolean r() {
            return this.f7096s;
        }

        @Override // bo.n1
        /* renamed from: s */
        public h4.a g() {
            return this.f7090e;
        }

        public final String t() {
            return this.f7098u;
        }

        public String toString() {
            h4.a aVar = this.f7090e;
            List list = this.f7091i;
            List list2 = this.f7092o;
            int i10 = this.f7093p;
            String str = this.f7094q;
            q qVar = this.f7095r;
            boolean z10 = this.f7096s;
            n1 n1Var = this.f7097t;
            String str2 = this.f7098u;
            return "ChooseCaptureMethod(currentPart=" + aVar + ", uploadingIds=" + list + ", parts=" + list2 + ", partIndex=" + i10 + ", countryCode=" + str + ", captureConfig=" + qVar + ", choosingDocumentToUpload=" + z10 + ", backState=" + n1Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f7090e.writeToParcel(dest, i10);
            List<Parcelable> list = this.f7091i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f7092o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeInt(this.f7093p);
            dest.writeString(this.f7094q);
            dest.writeParcelable(this.f7095r, i10);
            dest.writeInt(this.f7096s ? 1 : 0);
            dest.writeParcelable(this.f7097t, i10);
            dest.writeString(this.f7098u);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(h4.a currentPart, List uploadingIds, List parts, int i10, String str, q captureConfig, boolean z10, n1 n1Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            Intrinsics.checkNotNullParameter(captureConfig, "captureConfig");
            this.f7090e = currentPart;
            this.f7091i = uploadingIds;
            this.f7092o = parts;
            this.f7093p = i10;
            this.f7094q = str;
            this.f7095r = captureConfig;
            this.f7096s = z10;
            this.f7097t = n1Var;
            this.f7098u = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends n1 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();

        /* renamed from: e  reason: collision with root package name */
        private final h4 f7149e;

        /* renamed from: i  reason: collision with root package name */
        private final List f7150i;

        /* renamed from: o  reason: collision with root package name */
        private final List f7151o;

        /* renamed from: p  reason: collision with root package name */
        private final n1 f7152p;

        /* renamed from: q  reason: collision with root package name */
        private final int f7153q;

        /* renamed from: r  reason: collision with root package name */
        private final String f7154r;

        /* renamed from: s  reason: collision with root package name */
        private final c4 f7155s;

        /* renamed from: t  reason: collision with root package name */
        private final String f7156t;

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
            this((i11 & 1) != 0 ? new h4.a(c4.e.f6659o) : h4Var, (i11 & 2) != 0 ? CollectionsKt.l() : list, (i11 & 4) != 0 ? CollectionsKt.l() : list2, (i11 & 8) != 0 ? null : n1Var, (i11 & 16) != 0 ? -1 : i10, str, (i11 & 64) != 0 ? null : c4Var, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
        }

        public static /* synthetic */ j p(j jVar, h4 h4Var, List list, List list2, n1 n1Var, int i10, String str, c4 c4Var, String str2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                h4Var = jVar.f7149e;
            }
            if ((i11 & 2) != 0) {
                list = jVar.f7150i;
            }
            if ((i11 & 4) != 0) {
                list2 = jVar.f7151o;
            }
            if ((i11 & 8) != 0) {
                n1Var = jVar.f7152p;
            }
            if ((i11 & 16) != 0) {
                i10 = jVar.f7153q;
            }
            if ((i11 & 32) != 0) {
                str = jVar.f7154r;
            }
            if ((i11 & 64) != 0) {
                c4Var = jVar.f7155s;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                str2 = jVar.f7156t;
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

        @Override // bo.n1
        public n1 e() {
            return this.f7152p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Intrinsics.areEqual(this.f7149e, jVar.f7149e) && Intrinsics.areEqual(this.f7150i, jVar.f7150i) && Intrinsics.areEqual(this.f7151o, jVar.f7151o) && Intrinsics.areEqual(this.f7152p, jVar.f7152p) && this.f7153q == jVar.f7153q && Intrinsics.areEqual(this.f7154r, jVar.f7154r) && Intrinsics.areEqual(this.f7155s, jVar.f7155s) && Intrinsics.areEqual(this.f7156t, jVar.f7156t)) {
                return true;
            }
            return false;
        }

        @Override // bo.n1
        public String f() {
            return this.f7154r;
        }

        @Override // bo.n1
        public h4 g() {
            return this.f7149e;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((((this.f7149e.hashCode() * 31) + this.f7150i.hashCode()) * 31) + this.f7151o.hashCode()) * 31;
            n1 n1Var = this.f7152p;
            int i10 = 0;
            if (n1Var == null) {
                hashCode = 0;
            } else {
                hashCode = n1Var.hashCode();
            }
            int hashCode5 = (((hashCode4 + hashCode) * 31) + Integer.hashCode(this.f7153q)) * 31;
            String str = this.f7154r;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode2) * 31;
            c4 c4Var = this.f7155s;
            if (c4Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = c4Var.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str2 = this.f7156t;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return i12 + i10;
        }

        @Override // bo.n1
        public int j() {
            return this.f7153q;
        }

        @Override // bo.n1
        public List k() {
            return this.f7151o;
        }

        @Override // bo.n1
        public List m() {
            return this.f7150i;
        }

        public final j o(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            return new j(currentPart, uploadingIds, parts, n1Var, i10, str, c4Var, str2);
        }

        public final String q() {
            return this.f7156t;
        }

        public String toString() {
            h4 h4Var = this.f7149e;
            List list = this.f7150i;
            List list2 = this.f7151o;
            n1 n1Var = this.f7152p;
            int i10 = this.f7153q;
            String str = this.f7154r;
            c4 c4Var = this.f7155s;
            String str2 = this.f7156t;
            return "ShowInstructions(currentPart=" + h4Var + ", uploadingIds=" + list + ", parts=" + list2 + ", backState=" + n1Var + ", partIndex=" + i10 + ", countryCode=" + str + ", selectedId=" + c4Var + ", error=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f7149e, i10);
            List<Parcelable> list = this.f7150i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            List<Parcelable> list2 = this.f7151o;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f7152p, i10);
            dest.writeInt(this.f7153q);
            dest.writeString(this.f7154r);
            c4 c4Var = this.f7155s;
            if (c4Var == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c4Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f7156t);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(h4 currentPart, List uploadingIds, List parts, n1 n1Var, int i10, String str, c4 c4Var, String str2) {
            super(null);
            Intrinsics.checkNotNullParameter(currentPart, "currentPart");
            Intrinsics.checkNotNullParameter(uploadingIds, "uploadingIds");
            Intrinsics.checkNotNullParameter(parts, "parts");
            this.f7149e = currentPart;
            this.f7150i = uploadingIds;
            this.f7151o = parts;
            this.f7152p = n1Var;
            this.f7153q = i10;
            this.f7154r = str;
            this.f7155s = c4Var;
            this.f7156t = str2;
        }
    }
}
