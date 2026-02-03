package jq;

import android.os.Parcel;
import android.os.Parcelable;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<e> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final String f31902d;

    /* renamed from: e  reason: collision with root package name */
    private final d f31903e;

    /* renamed from: i  reason: collision with root package name */
    private final a f31904i;

    /* renamed from: o  reason: collision with root package name */
    private final List f31905o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31906d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f31907e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f31908i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f31909o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f31910p;

        static {
            a[] a10 = a();
            f31909o = a10;
            f31910p = sr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f31906d, f31907e, f31908i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f31909o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final e createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            d valueOf = d.valueOf(parcel.readString());
            a valueOf2 = a.valueOf(parcel.readString());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(c.CREATOR.createFromParcel(parcel));
            }
            return new e(readString, valueOf, valueOf2, arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final e[] newArray(int i10) {
            return new e[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final File f31911d;

        /* renamed from: e  reason: collision with root package name */
        private final String f31912e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new c((File) parcel.readSerializable(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public c(File data, String mimeType) {
            Intrinsics.checkNotNullParameter(data, "data");
            Intrinsics.checkNotNullParameter(mimeType, "mimeType");
            this.f31911d = data;
            this.f31912e = mimeType;
        }

        public final File a() {
            return this.f31911d;
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
            if (Intrinsics.areEqual(this.f31911d, cVar.f31911d) && Intrinsics.areEqual(this.f31912e, cVar.f31912e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31911d.hashCode() * 31) + this.f31912e.hashCode();
        }

        public String toString() {
            File file = this.f31911d;
            String str = this.f31912e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f31911d);
            dest.writeString(this.f31912e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f31913d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f31914e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f31915i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f31916o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f31917p;

        static {
            d[] a10 = a();
            f31916o = a10;
            f31917p = sr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f31913d, f31914e, f31915i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f31916o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f31902d = idClass;
        this.f31903e = side;
        this.f31904i = captureMethod;
        this.f31905o = frames;
    }

    public final a a() {
        return this.f31904i;
    }

    public final String b() {
        return this.f31902d;
    }

    public final d c() {
        return this.f31903e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Intrinsics.areEqual(this.f31902d, eVar.f31902d) && this.f31903e == eVar.f31903e && this.f31904i == eVar.f31904i && Intrinsics.areEqual(this.f31905o, eVar.f31905o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f31902d.hashCode() * 31) + this.f31903e.hashCode()) * 31) + this.f31904i.hashCode()) * 31) + this.f31905o.hashCode();
    }

    public final List i2() {
        return this.f31905o;
    }

    public String toString() {
        String str = this.f31902d;
        d dVar = this.f31903e;
        a aVar = this.f31904i;
        List list = this.f31905o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f31902d);
        dest.writeString(this.f31903e.name());
        dest.writeString(this.f31904i.name());
        List<c> list = this.f31905o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
