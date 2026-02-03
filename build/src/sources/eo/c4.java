package eo;

import android.os.Parcel;
import android.os.Parcelable;
import eo.c4;
import eo.f5;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
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
    private final String f21699d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f21700e;

    /* renamed from: i  reason: collision with root package name */
    private final List f21701i;

    /* renamed from: o  reason: collision with root package name */
    private final List f21702o;

    /* renamed from: p  reason: collision with root package name */
    private final lo.e f21703p;

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
            return new c4(readString, valueOf, arrayList, arrayList2, lo.e.valueOf(parcel.readString()));
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
        private final String f21705d;

        /* renamed from: e  reason: collision with root package name */
        private final e f21706e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f21707i;

        /* renamed from: o  reason: collision with root package name */
        private final a f21708o;

        /* renamed from: p  reason: collision with root package name */
        private final d f21709p;

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
            this.f21705d = sideKey;
            this.f21706e = side;
            this.f21707i = overlay;
            this.f21708o = autoCaptureConfig;
            this.f21709p = manualCaptureConfig;
        }

        public final a a() {
            return this.f21708o;
        }

        public final d b() {
            return this.f21709p;
        }

        public final f5.d c() {
            return this.f21707i;
        }

        public final e d() {
            return this.f21706e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f21705d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f21705d, cVar.f21705d) && this.f21706e == cVar.f21706e && Intrinsics.areEqual(this.f21707i, cVar.f21707i) && Intrinsics.areEqual(this.f21708o, cVar.f21708o) && Intrinsics.areEqual(this.f21709p, cVar.f21709p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f21705d.hashCode() * 31) + this.f21706e.hashCode()) * 31) + this.f21707i.hashCode()) * 31) + this.f21708o.hashCode()) * 31) + this.f21709p.hashCode();
        }

        public String toString() {
            String str = this.f21705d;
            e eVar = this.f21706e;
            f5.d dVar = this.f21707i;
            a aVar = this.f21708o;
            d dVar2 = this.f21709p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f21705d);
            dest.writeString(this.f21706e.name());
            dest.writeParcelable(this.f21707i, i10);
            this.f21708o.writeToParcel(dest, i10);
            this.f21709p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f21710d;

        /* renamed from: e  reason: collision with root package name */
        private final long f21711e;

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
            this.f21710d = z10;
            this.f21711e = j10;
        }

        public final long a() {
            return this.f21711e;
        }

        public final boolean b() {
            return this.f21710d;
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
            if (this.f21710d == dVar.f21710d && this.f21711e == dVar.f21711e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f21710d) * 31) + Long.hashCode(this.f21711e);
        }

        public String toString() {
            boolean z10 = this.f21710d;
            long j10 = this.f21711e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f21710d ? 1 : 0);
            dest.writeLong(this.f21711e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f21712e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f21713i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f21714o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f21715p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f21716q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f21717r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f21718s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f21719t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f21720u;

        /* renamed from: d  reason: collision with root package name */
        private final String f21721d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f21713i.getValue();
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
            f21719t = d10;
            f21720u = sr.a.a(d10);
            f21712e = new a(null);
            f21713i = lr.l.a(new Function0() { // from class: eo.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f21721d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f21714o, f21715p, f21716q, f21717r, f21718s};
        }

        public static EnumEntries f() {
            return f21720u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f21721d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f21719t.clone();
        }

        public final String g() {
            return this.f21721d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, lo.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f21699d = idClassKey;
        this.f21700e = icon;
        this.f21701i = sideConfigs;
        this.f21702o = parts;
        this.f21703p = type;
    }

    public final g4 a() {
        return this.f21700e;
    }

    public final List b() {
        return this.f21702o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f21701i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final lo.e d() {
        return this.f21703p;
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
        if (Intrinsics.areEqual(this.f21699d, c4Var.f21699d) && this.f21700e == c4Var.f21700e && Intrinsics.areEqual(this.f21701i, c4Var.f21701i) && Intrinsics.areEqual(this.f21702o, c4Var.f21702o) && this.f21703p == c4Var.f21703p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f21699d.hashCode() * 31) + this.f21700e.hashCode()) * 31) + this.f21701i.hashCode()) * 31) + this.f21702o.hashCode()) * 31) + this.f21703p.hashCode();
    }

    public String toString() {
        String str = this.f21699d;
        g4 g4Var = this.f21700e;
        List list = this.f21701i;
        List list2 = this.f21702o;
        lo.e eVar = this.f21703p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21699d);
        dest.writeString(this.f21700e.name());
        List<c> list = this.f21701i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f21702o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f21703p.name());
    }

    public final String x1() {
        return this.f21699d;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0287a();

        /* renamed from: d  reason: collision with root package name */
        private final pn.f f21704d;

        /* renamed from: eo.c4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0287a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a((pn.f) parcel.readParcelable(a.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(pn.f ruleSet) {
            Intrinsics.checkNotNullParameter(ruleSet, "ruleSet");
            this.f21704d = ruleSet;
        }

        public final pn.f a() {
            return this.f21704d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f21704d, ((a) obj).f21704d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f21704d.hashCode();
        }

        public String toString() {
            pn.f fVar = this.f21704d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f21704d, i10);
        }

        public /* synthetic */ a(pn.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new pn.f(null, 1, null) : fVar);
        }
    }
}
