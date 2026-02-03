package bo;

import android.os.Parcel;
import android.os.Parcelable;
import bo.c4;
import bo.f5;
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
    private final String f6644d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f6645e;

    /* renamed from: i  reason: collision with root package name */
    private final List f6646i;

    /* renamed from: o  reason: collision with root package name */
    private final List f6647o;

    /* renamed from: p  reason: collision with root package name */
    private final jo.e f6648p;

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
            return new c4(readString, valueOf, arrayList, arrayList2, jo.e.valueOf(parcel.readString()));
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
        private final String f6650d;

        /* renamed from: e  reason: collision with root package name */
        private final e f6651e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f6652i;

        /* renamed from: o  reason: collision with root package name */
        private final a f6653o;

        /* renamed from: p  reason: collision with root package name */
        private final d f6654p;

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
            this.f6650d = sideKey;
            this.f6651e = side;
            this.f6652i = overlay;
            this.f6653o = autoCaptureConfig;
            this.f6654p = manualCaptureConfig;
        }

        public final a a() {
            return this.f6653o;
        }

        public final d b() {
            return this.f6654p;
        }

        public final f5.d c() {
            return this.f6652i;
        }

        public final e d() {
            return this.f6651e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f6650d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f6650d, cVar.f6650d) && this.f6651e == cVar.f6651e && Intrinsics.areEqual(this.f6652i, cVar.f6652i) && Intrinsics.areEqual(this.f6653o, cVar.f6653o) && Intrinsics.areEqual(this.f6654p, cVar.f6654p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f6650d.hashCode() * 31) + this.f6651e.hashCode()) * 31) + this.f6652i.hashCode()) * 31) + this.f6653o.hashCode()) * 31) + this.f6654p.hashCode();
        }

        public String toString() {
            String str = this.f6650d;
            e eVar = this.f6651e;
            f5.d dVar = this.f6652i;
            a aVar = this.f6653o;
            d dVar2 = this.f6654p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f6650d);
            dest.writeString(this.f6651e.name());
            dest.writeParcelable(this.f6652i, i10);
            this.f6653o.writeToParcel(dest, i10);
            this.f6654p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f6655d;

        /* renamed from: e  reason: collision with root package name */
        private final long f6656e;

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
            this.f6655d = z10;
            this.f6656e = j10;
        }

        public final long a() {
            return this.f6656e;
        }

        public final boolean b() {
            return this.f6655d;
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
            if (this.f6655d == dVar.f6655d && this.f6656e == dVar.f6656e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f6655d) * 31) + Long.hashCode(this.f6656e);
        }

        public String toString() {
            boolean z10 = this.f6655d;
            long j10 = this.f6656e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f6655d ? 1 : 0);
            dest.writeLong(this.f6656e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f6657e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f6658i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f6659o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f6660p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f6661q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f6662r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f6663s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f6664t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f6665u;

        /* renamed from: d  reason: collision with root package name */
        private final String f6666d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f6658i.getValue();
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
            f6664t = d10;
            f6665u = qr.a.a(d10);
            f6657e = new a(null);
            f6658i = jr.l.b(new Function0() { // from class: bo.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f6666d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f6659o, f6660p, f6661q, f6662r, f6663s};
        }

        public static EnumEntries f() {
            return f6665u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f6666d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f6664t.clone();
        }

        public final String g() {
            return this.f6666d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, jo.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f6644d = idClassKey;
        this.f6645e = icon;
        this.f6646i = sideConfigs;
        this.f6647o = parts;
        this.f6648p = type;
    }

    public final g4 a() {
        return this.f6645e;
    }

    public final List b() {
        return this.f6647o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f6646i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final jo.e d() {
        return this.f6648p;
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
        if (Intrinsics.areEqual(this.f6644d, c4Var.f6644d) && this.f6645e == c4Var.f6645e && Intrinsics.areEqual(this.f6646i, c4Var.f6646i) && Intrinsics.areEqual(this.f6647o, c4Var.f6647o) && this.f6648p == c4Var.f6648p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f6644d.hashCode() * 31) + this.f6645e.hashCode()) * 31) + this.f6646i.hashCode()) * 31) + this.f6647o.hashCode()) * 31) + this.f6648p.hashCode();
    }

    public String toString() {
        String str = this.f6644d;
        g4 g4Var = this.f6645e;
        List list = this.f6646i;
        List list2 = this.f6647o;
        jo.e eVar = this.f6648p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f6644d);
        dest.writeString(this.f6645e.name());
        List<c> list = this.f6646i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f6647o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f6648p.name());
    }

    public final String x1() {
        return this.f6644d;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0117a();

        /* renamed from: d  reason: collision with root package name */
        private final nn.f f6649d;

        /* renamed from: bo.c4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0117a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a((nn.f) parcel.readParcelable(a.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(nn.f ruleSet) {
            Intrinsics.checkNotNullParameter(ruleSet, "ruleSet");
            this.f6649d = ruleSet;
        }

        public final nn.f a() {
            return this.f6649d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f6649d, ((a) obj).f6649d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f6649d.hashCode();
        }

        public String toString() {
            nn.f fVar = this.f6649d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f6649d, i10);
        }

        public /* synthetic */ a(nn.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new nn.f(null, 1, null) : fVar);
        }
    }
}
