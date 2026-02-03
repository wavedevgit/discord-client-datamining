package jq;

import android.os.Parcel;
import android.os.Parcelable;
import java.io.Closeable;
import java.io.File;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import jq.e;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g implements Closeable, Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0428a();

        /* renamed from: d  reason: collision with root package name */
        private final String f31924d;

        /* renamed from: e  reason: collision with root package name */
        private final List f31925e;

        /* renamed from: jq.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0428a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(jq.c.CREATOR.createFromParcel(parcel));
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
            this.f31924d = stepName;
            this.f31925e = documents;
        }

        @Override // jq.g
        public String a() {
            return this.f31924d;
        }

        @Override // jq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (jq.c cVar : this.f31925e) {
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
            if (Intrinsics.areEqual(this.f31924d, aVar.f31924d) && Intrinsics.areEqual(this.f31925e, aVar.f31925e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31924d.hashCode() * 31) + this.f31925e.hashCode();
        }

        public final List n() {
            return this.f31925e;
        }

        public String toString() {
            String str = this.f31924d;
            List list = this.f31925e;
            return "DocumentStepData(stepName=" + str + ", documents=" + list + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f31924d);
            List<jq.c> list = this.f31925e;
            dest.writeInt(list.size());
            for (jq.c cVar : list) {
                cVar.writeToParcel(dest, i10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f31926d;

        /* renamed from: e  reason: collision with root package name */
        private final List f31927e;

        /* renamed from: i  reason: collision with root package name */
        private final jq.b f31928i;

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
                return new b(readString, arrayList, jq.b.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, List captures, jq.b idDetails) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(captures, "captures");
            Intrinsics.checkNotNullParameter(idDetails, "idDetails");
            this.f31926d = stepName;
            this.f31927e = captures;
            this.f31928i = idDetails;
        }

        @Override // jq.g
        public String a() {
            return this.f31926d;
        }

        @Override // jq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (e eVar : this.f31927e) {
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
            if (Intrinsics.areEqual(this.f31926d, bVar.f31926d) && Intrinsics.areEqual(this.f31927e, bVar.f31927e) && Intrinsics.areEqual(this.f31928i, bVar.f31928i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((this.f31926d.hashCode() * 31) + this.f31927e.hashCode()) * 31) + this.f31928i.hashCode();
        }

        public final List n() {
            return this.f31927e;
        }

        public String toString() {
            String str = this.f31926d;
            List list = this.f31927e;
            jq.b bVar = this.f31928i;
            return "GovernmentIdStepData(stepName=" + str + ", captures=" + list + ", idDetails=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f31926d);
            List<e> list = this.f31927e;
            dest.writeInt(list.size());
            for (e eVar : list) {
                eVar.writeToParcel(dest, i10);
            }
            this.f31928i.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends g {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f31929d;

        /* renamed from: e  reason: collision with root package name */
        private final f f31930e;

        /* renamed from: i  reason: collision with root package name */
        private final f f31931i;

        /* renamed from: o  reason: collision with root package name */
        private final f f31932o;

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
            this.f31929d = stepName;
            this.f31930e = fVar;
            this.f31931i = fVar2;
            this.f31932o = fVar3;
        }

        @Override // jq.g
        public String a() {
            return this.f31929d;
        }

        @Override // jq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            File b10;
            for (f fVar : CollectionsKt.o(this.f31930e, this.f31931i, this.f31932o)) {
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
            if (Intrinsics.areEqual(this.f31929d, cVar.f31929d) && Intrinsics.areEqual(this.f31930e, cVar.f31930e) && Intrinsics.areEqual(this.f31931i, cVar.f31931i) && Intrinsics.areEqual(this.f31932o, cVar.f31932o)) {
                return true;
            }
            return false;
        }

        public final f f2() {
            return this.f31931i;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f31929d.hashCode() * 31;
            f fVar = this.f31930e;
            int i10 = 0;
            if (fVar == null) {
                hashCode = 0;
            } else {
                hashCode = fVar.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            f fVar2 = this.f31931i;
            if (fVar2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            f fVar3 = this.f31932o;
            if (fVar3 != null) {
                i10 = fVar3.hashCode();
            }
            return i12 + i10;
        }

        public final f n() {
            return this.f31930e;
        }

        public final f o2() {
            return this.f31932o;
        }

        public String toString() {
            String str = this.f31929d;
            f fVar = this.f31930e;
            f fVar2 = this.f31931i;
            f fVar3 = this.f31932o;
            return "SelfieStepData(stepName=" + str + ", centerCapture=" + fVar + ", leftCapture=" + fVar2 + ", rightCapture=" + fVar3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f31929d);
            f fVar = this.f31930e;
            if (fVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar.writeToParcel(dest, i10);
            }
            f fVar2 = this.f31931i;
            if (fVar2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar2.writeToParcel(dest, i10);
            }
            f fVar3 = this.f31932o;
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
        private final String f31933d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f31934e;

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
            this.f31933d = stepName;
            this.f31934e = componentParams;
        }

        @Override // jq.g
        public String a() {
            return this.f31933d;
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
            if (Intrinsics.areEqual(this.f31933d, dVar.f31933d) && Intrinsics.areEqual(this.f31934e, dVar.f31934e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31933d.hashCode() * 31) + this.f31934e.hashCode();
        }

        public final Map n() {
            return this.f31934e;
        }

        public String toString() {
            String str = this.f31933d;
            Map map = this.f31934e;
            return "UiStepData(stepName=" + str + ", componentParams=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f31933d);
            Map map = this.f31934e;
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
