package jo;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import jo.c4;
import jo.f5;
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
    private final String f30055d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f30056e;

    /* renamed from: i  reason: collision with root package name */
    private final List f30057i;

    /* renamed from: o  reason: collision with root package name */
    private final List f30058o;

    /* renamed from: p  reason: collision with root package name */
    private final qo.e f30059p;

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
            return new c4(readString, valueOf, arrayList, arrayList2, qo.e.valueOf(parcel.readString()));
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
        private final String f30061d;

        /* renamed from: e  reason: collision with root package name */
        private final e f30062e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f30063i;

        /* renamed from: o  reason: collision with root package name */
        private final a f30064o;

        /* renamed from: p  reason: collision with root package name */
        private final d f30065p;

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
            this.f30061d = sideKey;
            this.f30062e = side;
            this.f30063i = overlay;
            this.f30064o = autoCaptureConfig;
            this.f30065p = manualCaptureConfig;
        }

        public final a a() {
            return this.f30064o;
        }

        public final d b() {
            return this.f30065p;
        }

        public final f5.d c() {
            return this.f30063i;
        }

        public final e d() {
            return this.f30062e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f30061d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f30061d, cVar.f30061d) && this.f30062e == cVar.f30062e && Intrinsics.areEqual(this.f30063i, cVar.f30063i) && Intrinsics.areEqual(this.f30064o, cVar.f30064o) && Intrinsics.areEqual(this.f30065p, cVar.f30065p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f30061d.hashCode() * 31) + this.f30062e.hashCode()) * 31) + this.f30063i.hashCode()) * 31) + this.f30064o.hashCode()) * 31) + this.f30065p.hashCode();
        }

        public String toString() {
            String str = this.f30061d;
            e eVar = this.f30062e;
            f5.d dVar = this.f30063i;
            a aVar = this.f30064o;
            d dVar2 = this.f30065p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f30061d);
            dest.writeString(this.f30062e.name());
            dest.writeParcelable(this.f30063i, i10);
            this.f30064o.writeToParcel(dest, i10);
            this.f30065p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f30066d;

        /* renamed from: e  reason: collision with root package name */
        private final long f30067e;

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
            this.f30066d = z10;
            this.f30067e = j10;
        }

        public final long a() {
            return this.f30067e;
        }

        public final boolean b() {
            return this.f30066d;
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
            if (this.f30066d == dVar.f30066d && this.f30067e == dVar.f30067e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f30066d) * 31) + Long.hashCode(this.f30067e);
        }

        public String toString() {
            boolean z10 = this.f30066d;
            long j10 = this.f30067e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f30066d ? 1 : 0);
            dest.writeLong(this.f30067e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f30068e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f30069i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f30070o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f30071p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f30072q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f30073r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f30074s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f30075t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f30076u;

        /* renamed from: d  reason: collision with root package name */
        private final String f30077d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f30069i.getValue();
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
            f30075t = d10;
            f30076u = xr.a.a(d10);
            f30068e = new a(null);
            f30069i = qr.l.a(new Function0() { // from class: jo.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f30077d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f30070o, f30071p, f30072q, f30073r, f30074s};
        }

        public static EnumEntries f() {
            return f30076u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f30077d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f30075t.clone();
        }

        public final String g() {
            return this.f30077d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, qo.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f30055d = idClassKey;
        this.f30056e = icon;
        this.f30057i = sideConfigs;
        this.f30058o = parts;
        this.f30059p = type;
    }

    public final g4 a() {
        return this.f30056e;
    }

    public final List b() {
        return this.f30058o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f30057i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final qo.e d() {
        return this.f30059p;
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
        if (Intrinsics.areEqual(this.f30055d, c4Var.f30055d) && this.f30056e == c4Var.f30056e && Intrinsics.areEqual(this.f30057i, c4Var.f30057i) && Intrinsics.areEqual(this.f30058o, c4Var.f30058o) && this.f30059p == c4Var.f30059p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f30055d.hashCode() * 31) + this.f30056e.hashCode()) * 31) + this.f30057i.hashCode()) * 31) + this.f30058o.hashCode()) * 31) + this.f30059p.hashCode();
    }

    public String toString() {
        String str = this.f30055d;
        g4 g4Var = this.f30056e;
        List list = this.f30057i;
        List list2 = this.f30058o;
        qo.e eVar = this.f30059p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    public final String w1() {
        return this.f30055d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f30055d);
        dest.writeString(this.f30056e.name());
        List<c> list = this.f30057i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f30058o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f30059p.name());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0422a();

        /* renamed from: d  reason: collision with root package name */
        private final un.f f30060d;

        /* renamed from: jo.c4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0422a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a((un.f) parcel.readParcelable(a.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(un.f ruleSet) {
            Intrinsics.checkNotNullParameter(ruleSet, "ruleSet");
            this.f30060d = ruleSet;
        }

        public final un.f a() {
            return this.f30060d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f30060d, ((a) obj).f30060d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f30060d.hashCode();
        }

        public String toString() {
            un.f fVar = this.f30060d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f30060d, i10);
        }

        public /* synthetic */ a(un.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new un.f(null, 1, null) : fVar);
        }
    }
}
