package gq;

import android.os.Parcel;
import android.os.Parcelable;
import gq.e;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g implements Closeable, Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0345a();

        /* renamed from: d  reason: collision with root package name */
        private final String f27137d;

        /* renamed from: e  reason: collision with root package name */
        private final List f27138e;

        /* renamed from: gq.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0345a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(gq.c.CREATOR.createFromParcel(parcel));
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
            this.f27137d = stepName;
            this.f27138e = documents;
        }

        @Override // gq.g
        public String a() {
            return this.f27137d;
        }

        @Override // gq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (gq.c cVar : this.f27138e) {
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
            if (Intrinsics.areEqual(this.f27137d, aVar.f27137d) && Intrinsics.areEqual(this.f27138e, aVar.f27138e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f27137d.hashCode() * 31) + this.f27138e.hashCode();
        }

        public final List n() {
            return this.f27138e;
        }

        public String toString() {
            String str = this.f27137d;
            List list = this.f27138e;
            return "DocumentStepData(stepName=" + str + ", documents=" + list + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f27137d);
            List<gq.c> list = this.f27138e;
            dest.writeInt(list.size());
            for (gq.c cVar : list) {
                cVar.writeToParcel(dest, i10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f27139d;

        /* renamed from: e  reason: collision with root package name */
        private final List f27140e;

        /* renamed from: i  reason: collision with root package name */
        private final gq.b f27141i;

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
                return new b(readString, arrayList, gq.b.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, List captures, gq.b idDetails) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(captures, "captures");
            Intrinsics.checkNotNullParameter(idDetails, "idDetails");
            this.f27139d = stepName;
            this.f27140e = captures;
            this.f27141i = idDetails;
        }

        @Override // gq.g
        public String a() {
            return this.f27139d;
        }

        @Override // gq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (e eVar : this.f27140e) {
                for (e.c cVar : eVar.i2()) {
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
            if (Intrinsics.areEqual(this.f27139d, bVar.f27139d) && Intrinsics.areEqual(this.f27140e, bVar.f27140e) && Intrinsics.areEqual(this.f27141i, bVar.f27141i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((this.f27139d.hashCode() * 31) + this.f27140e.hashCode()) * 31) + this.f27141i.hashCode();
        }

        public final List n() {
            return this.f27140e;
        }

        public String toString() {
            String str = this.f27139d;
            List list = this.f27140e;
            gq.b bVar = this.f27141i;
            return "GovernmentIdStepData(stepName=" + str + ", captures=" + list + ", idDetails=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f27139d);
            List<e> list = this.f27140e;
            dest.writeInt(list.size());
            for (e eVar : list) {
                eVar.writeToParcel(dest, i10);
            }
            this.f27141i.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends g {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f27142d;

        /* renamed from: e  reason: collision with root package name */
        private final f f27143e;

        /* renamed from: i  reason: collision with root package name */
        private final f f27144i;

        /* renamed from: o  reason: collision with root package name */
        private final f f27145o;

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
            this.f27142d = stepName;
            this.f27143e = fVar;
            this.f27144i = fVar2;
            this.f27145o = fVar3;
        }

        @Override // gq.g
        public String a() {
            return this.f27142d;
        }

        @Override // gq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            File b10;
            for (f fVar : CollectionsKt.o(this.f27143e, this.f27144i, this.f27145o)) {
                if (fVar != null && (b10 = fVar.b()) != null) {
                    b10.delete();
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
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f27142d, cVar.f27142d) && Intrinsics.areEqual(this.f27143e, cVar.f27143e) && Intrinsics.areEqual(this.f27144i, cVar.f27144i) && Intrinsics.areEqual(this.f27145o, cVar.f27145o)) {
                return true;
            }
            return false;
        }

        public final f f2() {
            return this.f27144i;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f27142d.hashCode() * 31;
            f fVar = this.f27143e;
            int i10 = 0;
            if (fVar == null) {
                hashCode = 0;
            } else {
                hashCode = fVar.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            f fVar2 = this.f27144i;
            if (fVar2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            f fVar3 = this.f27145o;
            if (fVar3 != null) {
                i10 = fVar3.hashCode();
            }
            return i12 + i10;
        }

        public final f n() {
            return this.f27143e;
        }

        public final f o2() {
            return this.f27145o;
        }

        public String toString() {
            String str = this.f27142d;
            f fVar = this.f27143e;
            f fVar2 = this.f27144i;
            f fVar3 = this.f27145o;
            return "SelfieStepData(stepName=" + str + ", centerCapture=" + fVar + ", leftCapture=" + fVar2 + ", rightCapture=" + fVar3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f27142d);
            f fVar = this.f27143e;
            if (fVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar.writeToParcel(dest, i10);
            }
            f fVar2 = this.f27144i;
            if (fVar2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar2.writeToParcel(dest, i10);
            }
            f fVar3 = this.f27145o;
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
        private final String f27146d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f27147e;

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
            this.f27146d = stepName;
            this.f27147e = componentParams;
        }

        @Override // gq.g
        public String a() {
            return this.f27146d;
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
            if (Intrinsics.areEqual(this.f27146d, dVar.f27146d) && Intrinsics.areEqual(this.f27147e, dVar.f27147e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f27146d.hashCode() * 31) + this.f27147e.hashCode();
        }

        public final Map n() {
            return this.f27147e;
        }

        public String toString() {
            String str = this.f27146d;
            Map map = this.f27147e;
            return "UiStepData(stepName=" + str + ", componentParams=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f27146d);
            Map map = this.f27147e;
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
