package to;

import android.os.Parcel;
import android.os.Parcelable;
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
import to.c4;
import to.f5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c4 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<c4> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final String f49567d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f49568e;

    /* renamed from: i  reason: collision with root package name */
    private final List f49569i;

    /* renamed from: o  reason: collision with root package name */
    private final List f49570o;

    /* renamed from: p  reason: collision with root package name */
    private final ap.e f49571p;

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
            return new c4(readString, valueOf, arrayList, arrayList2, ap.e.valueOf(parcel.readString()));
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
        private final String f49573d;

        /* renamed from: e  reason: collision with root package name */
        private final e f49574e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f49575i;

        /* renamed from: o  reason: collision with root package name */
        private final a f49576o;

        /* renamed from: p  reason: collision with root package name */
        private final d f49577p;

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
            this.f49573d = sideKey;
            this.f49574e = side;
            this.f49575i = overlay;
            this.f49576o = autoCaptureConfig;
            this.f49577p = manualCaptureConfig;
        }

        public final a a() {
            return this.f49576o;
        }

        public final d b() {
            return this.f49577p;
        }

        public final f5.d c() {
            return this.f49575i;
        }

        public final e d() {
            return this.f49574e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f49573d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f49573d, cVar.f49573d) && this.f49574e == cVar.f49574e && Intrinsics.areEqual(this.f49575i, cVar.f49575i) && Intrinsics.areEqual(this.f49576o, cVar.f49576o) && Intrinsics.areEqual(this.f49577p, cVar.f49577p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f49573d.hashCode() * 31) + this.f49574e.hashCode()) * 31) + this.f49575i.hashCode()) * 31) + this.f49576o.hashCode()) * 31) + this.f49577p.hashCode();
        }

        public String toString() {
            String str = this.f49573d;
            e eVar = this.f49574e;
            f5.d dVar = this.f49575i;
            a aVar = this.f49576o;
            d dVar2 = this.f49577p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f49573d);
            dest.writeString(this.f49574e.name());
            dest.writeParcelable(this.f49575i, i10);
            this.f49576o.writeToParcel(dest, i10);
            this.f49577p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f49578d;

        /* renamed from: e  reason: collision with root package name */
        private final long f49579e;

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
            this.f49578d = z10;
            this.f49579e = j10;
        }

        public final long a() {
            return this.f49579e;
        }

        public final boolean b() {
            return this.f49578d;
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
            if (this.f49578d == dVar.f49578d && this.f49579e == dVar.f49579e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f49578d) * 31) + Long.hashCode(this.f49579e);
        }

        public String toString() {
            boolean z10 = this.f49578d;
            long j10 = this.f49579e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f49578d ? 1 : 0);
            dest.writeLong(this.f49579e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49580e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f49581i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f49582o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f49583p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f49584q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f49585r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f49586s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f49587t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49588u;

        /* renamed from: d  reason: collision with root package name */
        private final String f49589d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f49581i.getValue();
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
            f49587t = d10;
            f49588u = hs.a.a(d10);
            f49580e = new a(null);
            f49581i = as.l.b(new Function0() { // from class: to.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f49589d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f49582o, f49583p, f49584q, f49585r, f49586s};
        }

        public static EnumEntries f() {
            return f49588u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f49589d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f49587t.clone();
        }

        public final String g() {
            return this.f49589d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, ap.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f49567d = idClassKey;
        this.f49568e = icon;
        this.f49569i = sideConfigs;
        this.f49570o = parts;
        this.f49571p = type;
    }

    public final g4 a() {
        return this.f49568e;
    }

    public final List b() {
        return this.f49570o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f49569i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final ap.e d() {
        return this.f49571p;
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
        if (Intrinsics.areEqual(this.f49567d, c4Var.f49567d) && this.f49568e == c4Var.f49568e && Intrinsics.areEqual(this.f49569i, c4Var.f49569i) && Intrinsics.areEqual(this.f49570o, c4Var.f49570o) && this.f49571p == c4Var.f49571p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f49567d.hashCode() * 31) + this.f49568e.hashCode()) * 31) + this.f49569i.hashCode()) * 31) + this.f49570o.hashCode()) * 31) + this.f49571p.hashCode();
    }

    public String toString() {
        String str = this.f49567d;
        g4 g4Var = this.f49568e;
        List list = this.f49569i;
        List list2 = this.f49570o;
        ap.e eVar = this.f49571p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    public final String w1() {
        return this.f49567d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f49567d);
        dest.writeString(this.f49568e.name());
        List<c> list = this.f49569i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f49570o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f49571p.name());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0666a();

        /* renamed from: d  reason: collision with root package name */
        private final fo.f f49572d;

        /* renamed from: to.c4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0666a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a((fo.f) parcel.readParcelable(a.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(fo.f ruleSet) {
            Intrinsics.checkNotNullParameter(ruleSet, "ruleSet");
            this.f49572d = ruleSet;
        }

        public final fo.f a() {
            return this.f49572d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f49572d, ((a) obj).f49572d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f49572d.hashCode();
        }

        public String toString() {
            fo.f fVar = this.f49572d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f49572d, i10);
        }

        public /* synthetic */ a(fo.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new fo.f(null, 1, null) : fVar);
        }
    }
}
