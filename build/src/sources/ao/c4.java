package ao;

import android.os.Parcel;
import android.os.Parcelable;
import ao.c4;
import ao.f5;
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
    private final String f5821d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f5822e;

    /* renamed from: i  reason: collision with root package name */
    private final List f5823i;

    /* renamed from: o  reason: collision with root package name */
    private final List f5824o;

    /* renamed from: p  reason: collision with root package name */
    private final io.e f5825p;

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
            return new c4(readString, valueOf, arrayList, arrayList2, io.e.valueOf(parcel.readString()));
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
        private final String f5827d;

        /* renamed from: e  reason: collision with root package name */
        private final e f5828e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f5829i;

        /* renamed from: o  reason: collision with root package name */
        private final a f5830o;

        /* renamed from: p  reason: collision with root package name */
        private final d f5831p;

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
            this.f5827d = sideKey;
            this.f5828e = side;
            this.f5829i = overlay;
            this.f5830o = autoCaptureConfig;
            this.f5831p = manualCaptureConfig;
        }

        public final a a() {
            return this.f5830o;
        }

        public final d b() {
            return this.f5831p;
        }

        public final f5.d c() {
            return this.f5829i;
        }

        public final e d() {
            return this.f5828e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f5827d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f5827d, cVar.f5827d) && this.f5828e == cVar.f5828e && Intrinsics.areEqual(this.f5829i, cVar.f5829i) && Intrinsics.areEqual(this.f5830o, cVar.f5830o) && Intrinsics.areEqual(this.f5831p, cVar.f5831p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f5827d.hashCode() * 31) + this.f5828e.hashCode()) * 31) + this.f5829i.hashCode()) * 31) + this.f5830o.hashCode()) * 31) + this.f5831p.hashCode();
        }

        public String toString() {
            String str = this.f5827d;
            e eVar = this.f5828e;
            f5.d dVar = this.f5829i;
            a aVar = this.f5830o;
            d dVar2 = this.f5831p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f5827d);
            dest.writeString(this.f5828e.name());
            dest.writeParcelable(this.f5829i, i10);
            this.f5830o.writeToParcel(dest, i10);
            this.f5831p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5832d;

        /* renamed from: e  reason: collision with root package name */
        private final long f5833e;

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
            this.f5832d = z10;
            this.f5833e = j10;
        }

        public final long a() {
            return this.f5833e;
        }

        public final boolean b() {
            return this.f5832d;
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
            if (this.f5832d == dVar.f5832d && this.f5833e == dVar.f5833e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f5832d) * 31) + Long.hashCode(this.f5833e);
        }

        public String toString() {
            boolean z10 = this.f5832d;
            long j10 = this.f5833e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f5832d ? 1 : 0);
            dest.writeLong(this.f5833e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f5834e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f5835i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f5836o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f5837p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f5838q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f5839r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f5840s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f5841t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f5842u;

        /* renamed from: d  reason: collision with root package name */
        private final String f5843d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f5835i.getValue();
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
            f5841t = d10;
            f5842u = pr.a.a(d10);
            f5834e = new a(null);
            f5835i = ir.l.b(new Function0() { // from class: ao.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f5843d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f5836o, f5837p, f5838q, f5839r, f5840s};
        }

        public static EnumEntries f() {
            return f5842u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f5843d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f5841t.clone();
        }

        public final String g() {
            return this.f5843d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, io.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f5821d = idClassKey;
        this.f5822e = icon;
        this.f5823i = sideConfigs;
        this.f5824o = parts;
        this.f5825p = type;
    }

    public final g4 a() {
        return this.f5822e;
    }

    public final List b() {
        return this.f5824o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f5823i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final io.e d() {
        return this.f5825p;
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
        if (Intrinsics.areEqual(this.f5821d, c4Var.f5821d) && this.f5822e == c4Var.f5822e && Intrinsics.areEqual(this.f5823i, c4Var.f5823i) && Intrinsics.areEqual(this.f5824o, c4Var.f5824o) && this.f5825p == c4Var.f5825p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f5821d.hashCode() * 31) + this.f5822e.hashCode()) * 31) + this.f5823i.hashCode()) * 31) + this.f5824o.hashCode()) * 31) + this.f5825p.hashCode();
    }

    public String toString() {
        String str = this.f5821d;
        g4 g4Var = this.f5822e;
        List list = this.f5823i;
        List list2 = this.f5824o;
        io.e eVar = this.f5825p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f5821d);
        dest.writeString(this.f5822e.name());
        List<c> list = this.f5823i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f5824o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f5825p.name());
    }

    public final String x1() {
        return this.f5821d;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0083a();

        /* renamed from: d  reason: collision with root package name */
        private final mn.f f5826d;

        /* renamed from: ao.c4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0083a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a((mn.f) parcel.readParcelable(a.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(mn.f ruleSet) {
            Intrinsics.checkNotNullParameter(ruleSet, "ruleSet");
            this.f5826d = ruleSet;
        }

        public final mn.f a() {
            return this.f5826d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f5826d, ((a) obj).f5826d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f5826d.hashCode();
        }

        public String toString() {
            mn.f fVar = this.f5826d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f5826d, i10);
        }

        public /* synthetic */ a(mn.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new mn.f(null, 1, null) : fVar);
        }
    }
}
