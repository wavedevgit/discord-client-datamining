package ho;

import android.os.Parcel;
import android.os.Parcelable;
import ho.c4;
import ho.f5;
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
    private final String f26011d;

    /* renamed from: e  reason: collision with root package name */
    private final g4 f26012e;

    /* renamed from: i  reason: collision with root package name */
    private final List f26013i;

    /* renamed from: o  reason: collision with root package name */
    private final List f26014o;

    /* renamed from: p  reason: collision with root package name */
    private final oo.e f26015p;

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
            return new c4(readString, valueOf, arrayList, arrayList2, oo.e.valueOf(parcel.readString()));
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
        private final String f26017d;

        /* renamed from: e  reason: collision with root package name */
        private final e f26018e;

        /* renamed from: i  reason: collision with root package name */
        private final f5.d f26019i;

        /* renamed from: o  reason: collision with root package name */
        private final a f26020o;

        /* renamed from: p  reason: collision with root package name */
        private final d f26021p;

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
            this.f26017d = sideKey;
            this.f26018e = side;
            this.f26019i = overlay;
            this.f26020o = autoCaptureConfig;
            this.f26021p = manualCaptureConfig;
        }

        public final a a() {
            return this.f26020o;
        }

        public final d b() {
            return this.f26021p;
        }

        public final f5.d c() {
            return this.f26019i;
        }

        public final e d() {
            return this.f26018e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f26017d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f26017d, cVar.f26017d) && this.f26018e == cVar.f26018e && Intrinsics.areEqual(this.f26019i, cVar.f26019i) && Intrinsics.areEqual(this.f26020o, cVar.f26020o) && Intrinsics.areEqual(this.f26021p, cVar.f26021p)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((((this.f26017d.hashCode() * 31) + this.f26018e.hashCode()) * 31) + this.f26019i.hashCode()) * 31) + this.f26020o.hashCode()) * 31) + this.f26021p.hashCode();
        }

        public String toString() {
            String str = this.f26017d;
            e eVar = this.f26018e;
            f5.d dVar = this.f26019i;
            a aVar = this.f26020o;
            d dVar2 = this.f26021p;
            return "IdSideConfig(sideKey=" + str + ", side=" + eVar + ", overlay=" + dVar + ", autoCaptureConfig=" + aVar + ", manualCaptureConfig=" + dVar2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f26017d);
            dest.writeString(this.f26018e.name());
            dest.writeParcelable(this.f26019i, i10);
            this.f26020o.writeToParcel(dest, i10);
            this.f26021p.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f26022d;

        /* renamed from: e  reason: collision with root package name */
        private final long f26023e;

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
            this.f26022d = z10;
            this.f26023e = j10;
        }

        public final long a() {
            return this.f26023e;
        }

        public final boolean b() {
            return this.f26022d;
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
            if (this.f26022d == dVar.f26022d && this.f26023e == dVar.f26023e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Boolean.hashCode(this.f26022d) * 31) + Long.hashCode(this.f26023e);
        }

        public String toString() {
            boolean z10 = this.f26022d;
            long j10 = this.f26023e;
            return "ManualCaptureConfig(isEnabled=" + z10 + ", delayMs=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f26022d ? 1 : 0);
            dest.writeLong(this.f26023e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f26024e;

        /* renamed from: i  reason: collision with root package name */
        private static final Lazy f26025i;

        /* renamed from: o  reason: collision with root package name */
        public static final e f26026o = new e("Front", 0, "front");

        /* renamed from: p  reason: collision with root package name */
        public static final e f26027p = new e("Back", 1, "back");

        /* renamed from: q  reason: collision with root package name */
        public static final e f26028q = new e("FrontOrBack", 2, "front_or_back");

        /* renamed from: r  reason: collision with root package name */
        public static final e f26029r = new e("BarcodePdf417", 3, "barcode_pdf417");

        /* renamed from: s  reason: collision with root package name */
        public static final e f26030s = new e("PassportSignature", 4, "passport_signature");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ e[] f26031t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f26032u;

        /* renamed from: d  reason: collision with root package name */
        private final String f26033d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final Map b() {
                return (Map) e.f26025i.getValue();
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
            f26031t = d10;
            f26032u = vr.a.a(d10);
            f26024e = new a(null);
            f26025i = or.l.a(new Function0() { // from class: ho.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map h10;
                    h10 = c4.e.h();
                    return h10;
                }
            });
        }

        private e(String str, int i10, String str2) {
            this.f26033d = str2;
        }

        private static final /* synthetic */ e[] d() {
            return new e[]{f26026o, f26027p, f26028q, f26029r, f26030s};
        }

        public static EnumEntries f() {
            return f26032u;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map h() {
            e[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(values.length), 16));
            for (e eVar : values) {
                linkedHashMap.put(eVar.f26033d, eVar);
            }
            return linkedHashMap;
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f26031t.clone();
        }

        public final String g() {
            return this.f26033d;
        }
    }

    public c4(String idClassKey, g4 icon, List sideConfigs, List parts, oo.e type) {
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        Intrinsics.checkNotNullParameter(icon, "icon");
        Intrinsics.checkNotNullParameter(sideConfigs, "sideConfigs");
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f26011d = idClassKey;
        this.f26012e = icon;
        this.f26013i = sideConfigs;
        this.f26014o = parts;
        this.f26015p = type;
    }

    public final g4 a() {
        return this.f26012e;
    }

    public final List b() {
        return this.f26014o;
    }

    public final c c(e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        for (c cVar : this.f26013i) {
            if (cVar.d() == side) {
                return cVar;
            }
        }
        throw new NoSuchElementException("Collection contains no element matching the predicate.");
    }

    public final oo.e d() {
        return this.f26015p;
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
        if (Intrinsics.areEqual(this.f26011d, c4Var.f26011d) && this.f26012e == c4Var.f26012e && Intrinsics.areEqual(this.f26013i, c4Var.f26013i) && Intrinsics.areEqual(this.f26014o, c4Var.f26014o) && this.f26015p == c4Var.f26015p) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f26011d.hashCode() * 31) + this.f26012e.hashCode()) * 31) + this.f26013i.hashCode()) * 31) + this.f26014o.hashCode()) * 31) + this.f26015p.hashCode();
    }

    public String toString() {
        String str = this.f26011d;
        g4 g4Var = this.f26012e;
        List list = this.f26013i;
        List list2 = this.f26014o;
        oo.e eVar = this.f26015p;
        return "IdConfig(idClassKey=" + str + ", icon=" + g4Var + ", sideConfigs=" + list + ", parts=" + list2 + ", type=" + eVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f26011d);
        dest.writeString(this.f26012e.name());
        List<c> list = this.f26013i;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
        List<Parcelable> list2 = this.f26014o;
        dest.writeInt(list2.size());
        for (Parcelable parcelable : list2) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f26015p.name());
    }

    public final String x1() {
        return this.f26011d;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0355a();

        /* renamed from: d  reason: collision with root package name */
        private final sn.f f26016d;

        /* renamed from: ho.c4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0355a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a((sn.f) parcel.readParcelable(a.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(sn.f ruleSet) {
            Intrinsics.checkNotNullParameter(ruleSet, "ruleSet");
            this.f26016d = ruleSet;
        }

        public final sn.f a() {
            return this.f26016d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f26016d, ((a) obj).f26016d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f26016d.hashCode();
        }

        public String toString() {
            sn.f fVar = this.f26016d;
            return "AutoCaptureConfig(ruleSet=" + fVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f26016d, i10);
        }

        public /* synthetic */ a(sn.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? new sn.f(null, 1, null) : fVar);
        }
    }
}
