package mq;

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
import mq.e;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g implements Closeable, Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0509a();

        /* renamed from: d  reason: collision with root package name */
        private final String f38886d;

        /* renamed from: e  reason: collision with root package name */
        private final List f38887e;

        /* renamed from: mq.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0509a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(mq.c.CREATOR.createFromParcel(parcel));
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
            this.f38886d = stepName;
            this.f38887e = documents;
        }

        @Override // mq.g
        public String a() {
            return this.f38886d;
        }

        @Override // mq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (mq.c cVar : this.f38887e) {
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
            if (Intrinsics.areEqual(this.f38886d, aVar.f38886d) && Intrinsics.areEqual(this.f38887e, aVar.f38887e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f38886d.hashCode() * 31) + this.f38887e.hashCode();
        }

        public final List o() {
            return this.f38887e;
        }

        public String toString() {
            String str = this.f38886d;
            List list = this.f38887e;
            return "DocumentStepData(stepName=" + str + ", documents=" + list + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f38886d);
            List<mq.c> list = this.f38887e;
            dest.writeInt(list.size());
            for (mq.c cVar : list) {
                cVar.writeToParcel(dest, i10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f38888d;

        /* renamed from: e  reason: collision with root package name */
        private final List f38889e;

        /* renamed from: i  reason: collision with root package name */
        private final mq.b f38890i;

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
                return new b(readString, arrayList, mq.b.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, List captures, mq.b idDetails) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(captures, "captures");
            Intrinsics.checkNotNullParameter(idDetails, "idDetails");
            this.f38888d = stepName;
            this.f38889e = captures;
            this.f38890i = idDetails;
        }

        @Override // mq.g
        public String a() {
            return this.f38888d;
        }

        @Override // mq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (e eVar : this.f38889e) {
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
            if (Intrinsics.areEqual(this.f38888d, bVar.f38888d) && Intrinsics.areEqual(this.f38889e, bVar.f38889e) && Intrinsics.areEqual(this.f38890i, bVar.f38890i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((this.f38888d.hashCode() * 31) + this.f38889e.hashCode()) * 31) + this.f38890i.hashCode();
        }

        public final List o() {
            return this.f38889e;
        }

        public String toString() {
            String str = this.f38888d;
            List list = this.f38889e;
            mq.b bVar = this.f38890i;
            return "GovernmentIdStepData(stepName=" + str + ", captures=" + list + ", idDetails=" + bVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f38888d);
            List<e> list = this.f38889e;
            dest.writeInt(list.size());
            for (e eVar : list) {
                eVar.writeToParcel(dest, i10);
            }
            this.f38890i.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends g {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f38891d;

        /* renamed from: e  reason: collision with root package name */
        private final f f38892e;

        /* renamed from: i  reason: collision with root package name */
        private final f f38893i;

        /* renamed from: o  reason: collision with root package name */
        private final f f38894o;

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
            this.f38891d = stepName;
            this.f38892e = fVar;
            this.f38893i = fVar2;
            this.f38894o = fVar3;
        }

        @Override // mq.g
        public String a() {
            return this.f38891d;
        }

        @Override // mq.g, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            File b10;
            for (f fVar : CollectionsKt.o(this.f38892e, this.f38893i, this.f38894o)) {
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
            if (Intrinsics.areEqual(this.f38891d, cVar.f38891d) && Intrinsics.areEqual(this.f38892e, cVar.f38892e) && Intrinsics.areEqual(this.f38893i, cVar.f38893i) && Intrinsics.areEqual(this.f38894o, cVar.f38894o)) {
                return true;
            }
            return false;
        }

        public final f f2() {
            return this.f38893i;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f38891d.hashCode() * 31;
            f fVar = this.f38892e;
            int i10 = 0;
            if (fVar == null) {
                hashCode = 0;
            } else {
                hashCode = fVar.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            f fVar2 = this.f38893i;
            if (fVar2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            f fVar3 = this.f38894o;
            if (fVar3 != null) {
                i10 = fVar3.hashCode();
            }
            return i12 + i10;
        }

        public final f o() {
            return this.f38892e;
        }

        public final f o2() {
            return this.f38894o;
        }

        public String toString() {
            String str = this.f38891d;
            f fVar = this.f38892e;
            f fVar2 = this.f38893i;
            f fVar3 = this.f38894o;
            return "SelfieStepData(stepName=" + str + ", centerCapture=" + fVar + ", leftCapture=" + fVar2 + ", rightCapture=" + fVar3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f38891d);
            f fVar = this.f38892e;
            if (fVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar.writeToParcel(dest, i10);
            }
            f fVar2 = this.f38893i;
            if (fVar2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                fVar2.writeToParcel(dest, i10);
            }
            f fVar3 = this.f38894o;
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
        private final String f38895d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f38896e;

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
            this.f38895d = stepName;
            this.f38896e = componentParams;
        }

        @Override // mq.g
        public String a() {
            return this.f38895d;
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
            if (Intrinsics.areEqual(this.f38895d, dVar.f38895d) && Intrinsics.areEqual(this.f38896e, dVar.f38896e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f38895d.hashCode() * 31) + this.f38896e.hashCode();
        }

        public final Map o() {
            return this.f38896e;
        }

        public String toString() {
            String str = this.f38895d;
            Map map = this.f38896e;
            return "UiStepData(stepName=" + str + ", componentParams=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f38895d);
            Map map = this.f38896e;
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
