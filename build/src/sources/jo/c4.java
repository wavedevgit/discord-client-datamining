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
    private final String f30007d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f30008e;

    /* renamed from: i  reason: collision with root package name */
    private final List f30009i;

    /* renamed from: o  reason: collision with root package name */
    private final List f30010o;

    /* renamed from: p  reason: collision with root package name */
    private final qo.e f30011p;

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
        private final String f30013d;

        /* renamed from: e  reason: collision with root package name */
        private final e f30014e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f30015i;

        /* renamed from: o  reason: collision with root package name */
        private final a f30016o;

        /* renamed from: p  reason: collision with root package name */
        private final d f30017p;

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
            this.f30013d = sideKey;
            this.f30014e = side;
            this.f30015i = overlay;
            this.f30016o = autoCaptureConfig;
            this.f30017p = manualCaptureConfig;
        }

        public final a a() {
            return this.f30016o;
        }

        public final d b() {
            return this.f30017p;
        }

        public final f5.d c() {
            return this.f30015i;
        }

        public final e d() {
            return this.f30014e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f30013d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f30013d, cVar.f30013d) && this.f30014e == cVar.f30014e && Intrinsics.areEqual(this.f30015i, cVar.f30015i) && Intrinsics.areEqual(this.f30016o, cVar.f30016o) && Intrinsics.areEqual(this.f30017p, cVar.f30017p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f30013d.hashCode() * 31) + this.f30014e.hashCode()) * 31) + this.f30015i.hashCode()) * 31) + this.f30016o.hashCode()) * 31) + this.f30017p.hashCode();
        }

        public String toString() {
            String str = this.f30013d;
            e eVar = this.f30014e;
            f5.d dVar = this.f30015i;
            a aVar = this.f30016o;
            d dVar2 = this.f30017p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f30013d);
            dest.writeString(this.f30014e.name());
            dest.writeParcelable(this.f30015i, i10);
            this.f30016o.writeToParcel(dest, i10);
            this.f30017p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f30018d;

        /* renamed from: e  reason: collision with root package name */
        private final long f30019e;

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
            this.f30018d = z10;
            this.f30019e = j10;
        }

        public final long a() {
            return this.f30019e;
        }

        public final boolean b() {
            return this.f30018d;
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
            if (this.f30018d == dVar.f30018d && this.f30019e == dVar.f30019e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f30018d) * 31) + Long.hashCode(this.f30019e);
        }

        public String toString() {
            boolean z10 = this.f30018d;
            long j10 = this.f30019e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f30018d ? 1 : 0);
            dest.writeLong(this.f30019e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f30020e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f30021i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f30022o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f30023p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f30024q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f30025r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f30026s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f30027t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f30028u;

        /* renamed from: d  reason: collision with root package name */
        private final String f30029d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f30021i.getValue();
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
            f30027t = d10;
            f30028u = xr.a.a(d10);
            f30020e = new a(null);
            f30021i = qr.l.a(new Function0() { // from class: jo.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f30029d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f30022o, f30023p, f30024q, f30025r, f30026s};
        }

        public static EnumEntries f() {
            return f30028u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f30029d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f30027t.clone();
        }

        public final String g() {
            return this.f30029d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, qo.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f30007d = idClassKey;
        this.f30008e = icon;
        this.f30009i = sideConfigs;
        this.f30010o = parts;
        this.f30011p = type;
    }

    public final g4 a() {
        return this.f30008e;
    }

    public final List b() {
        return this.f30010o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f30009i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final qo.e d() {
        return this.f30011p;
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
        if (Intrinsics.areEqual(this.f30007d, c4Var.f30007d) && this.f30008e == c4Var.f30008e && Intrinsics.areEqual(this.f30009i, c4Var.f30009i) && Intrinsics.areEqual(this.f30010o, c4Var.f30010o) && this.f30011p == c4Var.f30011p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f30007d.hashCode() * 31) + this.f30008e.hashCode()) * 31) + this.f30009i.hashCode()) * 31) + this.f30010o.hashCode()) * 31) + this.f30011p.hashCode();
    }

    public String toString() {
        String str = this.f30007d;
        g4 g4Var = this.f30008e;
        List list = this.f30009i;
        List list2 = this.f30010o;
        qo.e eVar = this.f30011p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    public final String w1() {
        return this.f30007d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f30007d);
        dest.writeString(this.f30008e.name());
        List<c> list = this.f30009i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f30010o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f30011p.name());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0422a();

        /* renamed from: d  reason: collision with root package name */
        private final un.f f30012d;

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
            this.f30012d = ruleSet;
        }

        public final un.f a() {
            return this.f30012d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f30012d, ((a) obj).f30012d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f30012d.hashCode();
        }

        public String toString() {
            un.f fVar = this.f30012d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f30012d, i10);
        }

        public /* synthetic */ a(un.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new un.f(null, 1, null) : fVar);
        }
    }
}
