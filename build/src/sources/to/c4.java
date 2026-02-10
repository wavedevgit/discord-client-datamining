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
    private final String f48998d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f48999e;

    /* renamed from: i  reason: collision with root package name */
    private final List f49000i;

    /* renamed from: o  reason: collision with root package name */
    private final List f49001o;

    /* renamed from: p  reason: collision with root package name */
    private final ap.e f49002p;

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
        private final String f49004d;

        /* renamed from: e  reason: collision with root package name */
        private final e f49005e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f49006i;

        /* renamed from: o  reason: collision with root package name */
        private final a f49007o;

        /* renamed from: p  reason: collision with root package name */
        private final d f49008p;

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
            this.f49004d = sideKey;
            this.f49005e = side;
            this.f49006i = overlay;
            this.f49007o = autoCaptureConfig;
            this.f49008p = manualCaptureConfig;
        }

        public final a a() {
            return this.f49007o;
        }

        public final d b() {
            return this.f49008p;
        }

        public final f5.d c() {
            return this.f49006i;
        }

        public final e d() {
            return this.f49005e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f49004d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f49004d, cVar.f49004d) && this.f49005e == cVar.f49005e && Intrinsics.areEqual(this.f49006i, cVar.f49006i) && Intrinsics.areEqual(this.f49007o, cVar.f49007o) && Intrinsics.areEqual(this.f49008p, cVar.f49008p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f49004d.hashCode() * 31) + this.f49005e.hashCode()) * 31) + this.f49006i.hashCode()) * 31) + this.f49007o.hashCode()) * 31) + this.f49008p.hashCode();
        }

        public String toString() {
            String str = this.f49004d;
            e eVar = this.f49005e;
            f5.d dVar = this.f49006i;
            a aVar = this.f49007o;
            d dVar2 = this.f49008p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f49004d);
            dest.writeString(this.f49005e.name());
            dest.writeParcelable(this.f49006i, i10);
            this.f49007o.writeToParcel(dest, i10);
            this.f49008p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f49009d;

        /* renamed from: e  reason: collision with root package name */
        private final long f49010e;

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
            this.f49009d = z10;
            this.f49010e = j10;
        }

        public final long a() {
            return this.f49010e;
        }

        public final boolean b() {
            return this.f49009d;
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
            if (this.f49009d == dVar.f49009d && this.f49010e == dVar.f49010e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f49009d) * 31) + Long.hashCode(this.f49010e);
        }

        public String toString() {
            boolean z10 = this.f49009d;
            long j10 = this.f49010e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f49009d ? 1 : 0);
            dest.writeLong(this.f49010e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49011e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f49012i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f49013o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f49014p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f49015q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f49016r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f49017s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f49018t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49019u;

        /* renamed from: d  reason: collision with root package name */
        private final String f49020d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f49012i.getValue();
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
            f49018t = d10;
            f49019u = hs.a.a(d10);
            f49011e = new a(null);
            f49012i = as.l.b(new Function0() { // from class: to.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f49020d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f49013o, f49014p, f49015q, f49016r, f49017s};
        }

        public static EnumEntries f() {
            return f49019u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f49020d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f49018t.clone();
        }

        public final String g() {
            return this.f49020d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, ap.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f48998d = idClassKey;
        this.f48999e = icon;
        this.f49000i = sideConfigs;
        this.f49001o = parts;
        this.f49002p = type;
    }

    public final g4 a() {
        return this.f48999e;
    }

    public final List b() {
        return this.f49001o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f49000i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final ap.e d() {
        return this.f49002p;
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
        if (Intrinsics.areEqual(this.f48998d, c4Var.f48998d) && this.f48999e == c4Var.f48999e && Intrinsics.areEqual(this.f49000i, c4Var.f49000i) && Intrinsics.areEqual(this.f49001o, c4Var.f49001o) && this.f49002p == c4Var.f49002p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f48998d.hashCode() * 31) + this.f48999e.hashCode()) * 31) + this.f49000i.hashCode()) * 31) + this.f49001o.hashCode()) * 31) + this.f49002p.hashCode();
    }

    public String toString() {
        String str = this.f48998d;
        g4 g4Var = this.f48999e;
        List list = this.f49000i;
        List list2 = this.f49001o;
        ap.e eVar = this.f49002p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    public final String w1() {
        return this.f48998d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f48998d);
        dest.writeString(this.f48999e.name());
        List<c> list = this.f49000i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f49001o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f49002p.name());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0666a();

        /* renamed from: d  reason: collision with root package name */
        private final fo.f f49003d;

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
            this.f49003d = ruleSet;
        }

        public final fo.f a() {
            return this.f49003d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f49003d, ((a) obj).f49003d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f49003d.hashCode();
        }

        public String toString() {
            fo.f fVar = this.f49003d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f49003d, i10);
        }

        public /* synthetic */ a(fo.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new fo.f(null, 1, null) : fVar);
        }
    }
}
