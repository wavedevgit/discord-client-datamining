package oq;

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
import oq.e;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g implements Closeable, Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0572a();

        /* renamed from: d  reason: collision with root package name */
        private final String f43367d;

        /* renamed from: e  reason: collision with root package name */
        private final List f43368e;

        /* renamed from: oq.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0572a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(oq.c.CREATOR.createFromParcel(parcel));
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
            this.f43367d = stepName;
            this.f43368e = documents;
        }

        @Override // oq.g
        public String a() {
            return this.f43367d;
        }

        @Override // oq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (oq.c cVar : this.f43368e) {
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
            if (Intrinsics.areEqual(this.f43367d, aVar.f43367d) && Intrinsics.areEqual(this.f43368e, aVar.f43368e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f43367d.hashCode() * 31) + this.f43368e.hashCode();
        }

        public final List p() {
            return this.f43368e;
        }

        public String toString() {
            String str = this.f43367d;
            List list = this.f43368e;
            return "DocumentStepData(stepName=" + str + ", documents=" + list + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f43367d);
            List<oq.c> list = this.f43368e;
            dest.writeInt(list.size());
            for (oq.c cVar : list) {
                cVar.writeToParcel(dest, i10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f43369d;

        /* renamed from: e  reason: collision with root package name */
        private final List f43370e;

        /* renamed from: i  reason: collision with root package name */
        private final oq.b f43371i;

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
                return new b(readString, arrayList, oq.b.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, List captures, oq.b idDetails) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(captures, "captures");
            Intrinsics.checkNotNullParameter(idDetails, "idDetails");
            this.f43369d = stepName;
            this.f43370e = captures;
            this.f43371i = idDetails;
        }

        @Override // oq.g
        public String a() {
            return this.f43369d;
        }

        @Override // oq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (e eVar : this.f43370e) {
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
            if (Intrinsics.areEqual(this.f43369d, bVar.f43369d) && Intrinsics.areEqual(this.f43370e, bVar.f43370e) && Intrinsics.areEqual(this.f43371i, bVar.f43371i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((this.f43369d.hashCode() * 31) + this.f43370e.hashCode()) * 31) + this.f43371i.hashCode();
        }

        public final List p() {
            return this.f43370e;
        }

        public String toString() {
            String str = this.f43369d;
            List list = this.f43370e;
            oq.b bVar = this.f43371i;
            return "GovernmentIdStepData(stepName=" + str + ", captures=" + list + ", idDetails=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f43369d);
            List<e> list = this.f43370e;
            dest.writeInt(list.size());
            for (e eVar : list) {
                eVar.writeToParcel(dest, i10);
            }
            this.f43371i.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends g {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f43372d;

        /* renamed from: e  reason: collision with root package name */
        private final f f43373e;

        /* renamed from: i  reason: collision with root package name */
        private final f f43374i;

        /* renamed from: o  reason: collision with root package name */
        private final f f43375o;

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
            this.f43372d = stepName;
            this.f43373e = fVar;
            this.f43374i = fVar2;
            this.f43375o = fVar3;
        }

        @Override // oq.g
        public String a() {
            return this.f43372d;
        }

        @Override // oq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            File b10;
            for (f fVar : CollectionsKt.o(this.f43373e, this.f43374i, this.f43375o)) {
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
            if (Intrinsics.areEqual(this.f43372d, cVar.f43372d) && Intrinsics.areEqual(this.f43373e, cVar.f43373e) && Intrinsics.areEqual(this.f43374i, cVar.f43374i) && Intrinsics.areEqual(this.f43375o, cVar.f43375o)) {
                return true;
            }
            return false;
        }

        public final f f2() {
            return this.f43374i;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f43372d.hashCode() * 31;
            f fVar = this.f43373e;
            int i10 = 0;
            if (fVar == null) {
                hashCode = 0;
            } else {
                hashCode = fVar.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            f fVar2 = this.f43374i;
            if (fVar2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            f fVar3 = this.f43375o;
            if (fVar3 != null) {
                i10 = fVar3.hashCode();
            }
            return i12 + i10;
        }

        public final f o2() {
            return this.f43375o;
        }

        public final f p() {
            return this.f43373e;
        }

        public String toString() {
            String str = this.f43372d;
            f fVar = this.f43373e;
            f fVar2 = this.f43374i;
            f fVar3 = this.f43375o;
            return "SelfieStepData(stepName=" + str + ", centerCapture=" + fVar + ", leftCapture=" + fVar2 + ", rightCapture=" + fVar3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f43372d);
            f fVar = this.f43373e;
            if (fVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar.writeToParcel(dest, i10);
            }
            f fVar2 = this.f43374i;
            if (fVar2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar2.writeToParcel(dest, i10);
            }
            f fVar3 = this.f43375o;
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
        private final String f43376d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f43377e;

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
            this.f43376d = stepName;
            this.f43377e = componentParams;
        }

        @Override // oq.g
        public String a() {
            return this.f43376d;
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
            if (Intrinsics.areEqual(this.f43376d, dVar.f43376d) && Intrinsics.areEqual(this.f43377e, dVar.f43377e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f43376d.hashCode() * 31) + this.f43377e.hashCode();
        }

        public final Map p() {
            return this.f43377e;
        }

        public String toString() {
            String str = this.f43376d;
            Map map = this.f43377e;
            return "UiStepData(stepName=" + str + ", componentParams=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f43376d);
            Map map = this.f43377e;
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
