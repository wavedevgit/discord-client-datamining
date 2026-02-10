package ko;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import ko.c4;
import ko.f5;
import kotlin.Lazy;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c4 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<c4> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final String f31006d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f31007e;

    /* renamed from: i  reason: collision with root package name */
    private final List f31008i;

    /* renamed from: o  reason: collision with root package name */
    private final List f31009o;

    /* renamed from: p  reason: collision with root package name */
    private final ro.e f31010p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            g4 valueOf = g4.valueOf(parcel.readString());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(c.CREATOR.createFromParcel(parcel));
            }
            int readInt2 = parcel.readInt();
            ArrayList arrayList2 = new ArrayList(readInt2);
            for (int i11 = 0; i11 != readInt2; i11++) {
                arrayList2.add(parcel.readParcelable(c4.class.getClassLoader()));
            }
            return new c4(readString, valueOf, arrayList, arrayList2, ro.e.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c4[] newArray(int i10) {
            return new c4[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f31012d;

        /* renamed from: e  reason: collision with root package name */
        private final e f31013e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f31014i;

        /* renamed from: o  reason: collision with root package name */
        private final a f31015o;

        /* renamed from: p  reason: collision with root package name */
        private final d f31016p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new c(parcel.readString(), e.valueOf(parcel.readString()), (f5.d) parcel.readParcelable(c.class.getClassLoader()), a.CREATOR.createFromParcel(parcel), d.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public c(String sideKey, e side, f5.d overlay, a autoCaptureConfig, d manualCaptureConfig) {
            Intrinsics.checkNotNullParameter(sideKey, "sideKey");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(overlay, "overlay");
            Intrinsics.checkNotNullParameter(autoCaptureConfig, "autoCaptureConfig");
            Intrinsics.checkNotNullParameter(manualCaptureConfig, "manualCaptureConfig");
            this.f31012d = sideKey;
            this.f31013e = side;
            this.f31014i = overlay;
            this.f31015o = autoCaptureConfig;
            this.f31016p = manualCaptureConfig;
        }

        public final a a() {
            return this.f31015o;
        }

        public final d b() {
            return this.f31016p;
        }

        public final f5.d c() {
            return this.f31014i;
        }

        public final e d() {
            return this.f31013e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f31012d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f31012d, cVar.f31012d) && this.f31013e == cVar.f31013e && Intrinsics.areEqual(this.f31014i, cVar.f31014i) && Intrinsics.areEqual(this.f31015o, cVar.f31015o) && Intrinsics.areEqual(this.f31016p, cVar.f31016p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f31012d.hashCode() * 31) + this.f31013e.hashCode()) * 31) + this.f31014i.hashCode()) * 31) + this.f31015o.hashCode()) * 31) + this.f31016p.hashCode();
        }

        public String toString() {
            String str = this.f31012d;
            e eVar = this.f31013e;
            f5.d dVar = this.f31014i;
            a aVar = this.f31015o;
            d dVar2 = this.f31016p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f31012d);
            dest.writeString(this.f31013e.name());
            dest.writeParcelable(this.f31014i, i10);
            this.f31015o.writeToParcel(dest, i10);
            this.f31016p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31017d;

        /* renamed from: e  reason: collision with root package name */
        private final long f31018e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                boolean z10;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                return new d(z10, parcel.readLong());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        public d(boolean z10, long j10) {
            this.f31017d = z10;
            this.f31018e = j10;
        }

        public final long a() {
            return this.f31018e;
        }

        public final boolean b() {
            return this.f31017d;
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
            if (this.f31017d == dVar.f31017d && this.f31018e == dVar.f31018e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f31017d) * 31) + Long.hashCode(this.f31018e);
        }

        public String toString() {
            boolean z10 = this.f31017d;
            long j10 = this.f31018e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f31017d ? 1 : 0);
            dest.writeLong(this.f31018e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f31019e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f31020i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f31021o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f31022p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f31023q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f31024r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f31025s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f31026t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f31027u;

        /* renamed from: d  reason: collision with root package name */
        private final String f31028d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f31020i.getValue();
            }

            public final e a(String sideKey) {
                Intrinsics.checkNotNullParameter(sideKey, "sideKey");
                return (e) b().get(sideKey);
            }

            private a() {
            }
        }

        static {
            e[] d10 = d();
            f31026t = d10;
            f31027u = yr.a.a(d10);
            f31019e = new a(null);
            f31020i = rr.l.a(new Function0() { // from class: ko.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f31028d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f31021o, f31022p, f31023q, f31024r, f31025s};
        }

        public static EnumEntries f() {
            return f31027u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f31028d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f31026t.clone();
        }

        public final String g() {
            return this.f31028d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, ro.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f31006d = idClassKey;
        this.f31007e = icon;
        this.f31008i = sideConfigs;
        this.f31009o = parts;
        this.f31010p = type;
    }

    public final g4 a() {
        return this.f31007e;
    }

    public final List b() {
        return this.f31009o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f31008i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final ro.e d() {
        return this.f31010p;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c4)) {
            return false;
        }
        c4 c4Var = (c4) obj;
        if (Intrinsics.areEqual(this.f31006d, c4Var.f31006d) && this.f31007e == c4Var.f31007e && Intrinsics.areEqual(this.f31008i, c4Var.f31008i) && Intrinsics.areEqual(this.f31009o, c4Var.f31009o) && this.f31010p == c4Var.f31010p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f31006d.hashCode() * 31) + this.f31007e.hashCode()) * 31) + this.f31008i.hashCode()) * 31) + this.f31009o.hashCode()) * 31) + this.f31010p.hashCode();
    }

    public final String r1() {
        return this.f31006d;
    }

    public String toString() {
        String str = this.f31006d;
        g4 g4Var = this.f31007e;
        List list = this.f31008i;
        List list2 = this.f31009o;
        ro.e eVar = this.f31010p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f31006d);
        dest.writeString(this.f31007e.name());
        List<c> list = this.f31008i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f31009o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f31010p.name());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0468a();

        /* renamed from: d  reason: collision with root package name */
        private final vn.f f31011d;

        /* renamed from: ko.c4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0468a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a((vn.f) parcel.readParcelable(a.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(vn.f ruleSet) {
            Intrinsics.checkNotNullParameter(ruleSet, "ruleSet");
            this.f31011d = ruleSet;
        }

        public final vn.f a() {
            return this.f31011d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f31011d, ((a) obj).f31011d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f31011d.hashCode();
        }

        public String toString() {
            vn.f fVar = this.f31011d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f31011d, i10);
        }

        public /* synthetic */ a(vn.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new vn.f(null, 1, null) : fVar);
        }
    }
}
