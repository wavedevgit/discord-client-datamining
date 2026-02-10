package pq;

import android.os.Parcel;
import android.os.Parcelable;
import java.io.Closeable;
import java.io.File;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import pq.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g implements Closeable, Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0619a();

        /* renamed from: d  reason: collision with root package name */
        private final String f44473d;

        /* renamed from: e  reason: collision with root package name */
        private final List f44474e;

        /* renamed from: pq.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0619a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(pq.c.CREATOR.createFromParcel(parcel));
                }
                return new a(readString, arrayList);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName, List documents) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(documents, "documents");
            this.f44473d = stepName;
            this.f44474e = documents;
        }

        @Override // pq.g
        public String a() {
            return this.f44473d;
        }

        @Override // pq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (pq.c cVar : this.f44474e) {
                cVar.a().delete();
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f44473d, aVar.f44473d) && Intrinsics.areEqual(this.f44474e, aVar.f44474e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44473d.hashCode() * 31) + this.f44474e.hashCode();
        }

        public final List p() {
            return this.f44474e;
        }

        public String toString() {
            String str = this.f44473d;
            List list = this.f44474e;
            return "DocumentStepData(stepName=" + str + ", documents=" + list + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f44473d);
            List<pq.c> list = this.f44474e;
            dest.writeInt(list.size());
            for (pq.c cVar : list) {
                cVar.writeToParcel(dest, i10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f44475d;

        /* renamed from: e  reason: collision with root package name */
        private final List f44476e;

        /* renamed from: i  reason: collision with root package name */
        private final pq.b f44477i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(e.CREATOR.createFromParcel(parcel));
                }
                return new b(readString, arrayList, pq.b.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, List captures, pq.b idDetails) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(captures, "captures");
            Intrinsics.checkNotNullParameter(idDetails, "idDetails");
            this.f44475d = stepName;
            this.f44476e = captures;
            this.f44477i = idDetails;
        }

        @Override // pq.g
        public String a() {
            return this.f44475d;
        }

        @Override // pq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (e eVar : this.f44476e) {
                for (e.c cVar : eVar.h2()) {
                    cVar.a().delete();
                }
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f44475d, bVar.f44475d) && Intrinsics.areEqual(this.f44476e, bVar.f44476e) && Intrinsics.areEqual(this.f44477i, bVar.f44477i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((this.f44475d.hashCode() * 31) + this.f44476e.hashCode()) * 31) + this.f44477i.hashCode();
        }

        public final List p() {
            return this.f44476e;
        }

        public String toString() {
            String str = this.f44475d;
            List list = this.f44476e;
            pq.b bVar = this.f44477i;
            return "GovernmentIdStepData(stepName=" + str + ", captures=" + list + ", idDetails=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f44475d);
            List<e> list = this.f44476e;
            dest.writeInt(list.size());
            for (e eVar : list) {
                eVar.writeToParcel(dest, i10);
            }
            this.f44477i.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends g {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f44478d;

        /* renamed from: e  reason: collision with root package name */
        private final f f44479e;

        /* renamed from: i  reason: collision with root package name */
        private final f f44480i;

        /* renamed from: o  reason: collision with root package name */
        private final f f44481o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                f createFromParcel;
                f createFromParcel2;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                f fVar = null;
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = f.CREATOR.createFromParcel(parcel);
                }
                f fVar2 = createFromParcel;
                if (parcel.readInt() == 0) {
                    createFromParcel2 = null;
                } else {
                    createFromParcel2 = f.CREATOR.createFromParcel(parcel);
                }
                f fVar3 = createFromParcel2;
                if (parcel.readInt() != 0) {
                    fVar = f.CREATOR.createFromParcel(parcel);
                }
                return new c(readString, fVar2, fVar3, fVar);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, f fVar, f fVar2, f fVar3) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f44478d = stepName;
            this.f44479e = fVar;
            this.f44480i = fVar2;
            this.f44481o = fVar3;
        }

        @Override // pq.g
        public String a() {
            return this.f44478d;
        }

        @Override // pq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            File b10;
            for (f fVar : CollectionsKt.o(this.f44479e, this.f44480i, this.f44481o)) {
                if (fVar != null && (b10 = fVar.b()) != null) {
                    b10.delete();
                }
            }
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final f e2() {
            return this.f44480i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f44478d, cVar.f44478d) && Intrinsics.areEqual(this.f44479e, cVar.f44479e) && Intrinsics.areEqual(this.f44480i, cVar.f44480i) && Intrinsics.areEqual(this.f44481o, cVar.f44481o)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f44478d.hashCode() * 31;
            f fVar = this.f44479e;
            int i10 = 0;
            if (fVar == null) {
                hashCode = 0;
            } else {
                hashCode = fVar.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            f fVar2 = this.f44480i;
            if (fVar2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            f fVar3 = this.f44481o;
            if (fVar3 != null) {
                i10 = fVar3.hashCode();
            }
            return i12 + i10;
        }

        public final f o2() {
            return this.f44481o;
        }

        public final f p() {
            return this.f44479e;
        }

        public String toString() {
            String str = this.f44478d;
            f fVar = this.f44479e;
            f fVar2 = this.f44480i;
            f fVar3 = this.f44481o;
            return "SelfieStepData(stepName=" + str + ", centerCapture=" + fVar + ", leftCapture=" + fVar2 + ", rightCapture=" + fVar3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f44478d);
            f fVar = this.f44479e;
            if (fVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar.writeToParcel(dest, i10);
            }
            f fVar2 = this.f44480i;
            if (fVar2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar2.writeToParcel(dest, i10);
            }
            f fVar3 = this.f44481o;
            if (fVar3 == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            fVar3.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends g {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f44482d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f44483e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    linkedHashMap.put(parcel.readString(), parcel.readValue(d.class.getClassLoader()));
                }
                return new d(readString, linkedHashMap);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName, Map componentParams) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentParams, "componentParams");
            this.f44482d = stepName;
            this.f44483e = componentParams;
        }

        @Override // pq.g
        public String a() {
            return this.f44482d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f44482d, dVar.f44482d) && Intrinsics.areEqual(this.f44483e, dVar.f44483e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44482d.hashCode() * 31) + this.f44483e.hashCode();
        }

        public final Map p() {
            return this.f44483e;
        }

        public String toString() {
            String str = this.f44482d;
            Map map = this.f44483e;
            return "UiStepData(stepName=" + str + ", componentParams=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f44482d);
            Map map = this.f44483e;
            dest.writeInt(map.size());
            for (Map.Entry entry : map.entrySet()) {
                dest.writeString((String) entry.getKey());
                dest.writeValue(entry.getValue());
            }
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private g() {
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }
}
