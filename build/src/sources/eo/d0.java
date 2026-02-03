package eo;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.governmentid.RawExtraction;
import java.util.ArrayList;
import java.util.List;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d0 extends Parcelable {

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f21723d = new C0288a("AUTO", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f21724e = new b("MANUAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f21725i = new c("UPLOAD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f21726o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f21727p;

        /* renamed from: eo.d0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0288a extends a {
            C0288a(String str, int i10) {
                super(str, i10, null);
            }

            @Override // java.lang.Enum
            public String toString() {
                return "auto";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends a {
            b(String str, int i10) {
                super(str, i10, null);
            }

            @Override // java.lang.Enum
            public String toString() {
                return "manual";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends a {
            c(String str, int i10) {
                super(str, i10, null);
            }

            @Override // java.lang.Enum
            public String toString() {
                return "upload";
            }
        }

        static {
            a[] a10 = a();
            f21726o = a10;
            f21727p = sr.a.a(a10);
        }

        public /* synthetic */ a(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f21723d, f21724e, f21725i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f21726o.clone();
        }

        private a(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements d0 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f21734d;

        /* renamed from: e  reason: collision with root package name */
        private final d f21735e;

        /* renamed from: i  reason: collision with root package name */
        private final String f21736i;

        /* renamed from: o  reason: collision with root package name */
        private final a f21737o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(c0.CREATOR.createFromParcel(parcel));
                }
                return new c(arrayList, d.valueOf(parcel.readString()), parcel.readString(), a.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public c(List frames, d side, String idClassKey, a captureMethod) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            this.f21734d = frames;
            this.f21735e = side;
            this.f21736i = idClassKey;
            this.f21737o = captureMethod;
        }

        @Override // eo.d0
        public d V0() {
            return this.f21735e;
        }

        @Override // eo.d0
        public a c2() {
            return this.f21737o;
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
            if (Intrinsics.areEqual(this.f21734d, cVar.f21734d) && this.f21735e == cVar.f21735e && Intrinsics.areEqual(this.f21736i, cVar.f21736i) && this.f21737o == cVar.f21737o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f21734d.hashCode() * 31) + this.f21735e.hashCode()) * 31) + this.f21736i.hashCode()) * 31) + this.f21737o.hashCode();
        }

        @Override // eo.d0
        public List i2() {
            return this.f21734d;
        }

        public String toString() {
            List list = this.f21734d;
            d dVar = this.f21735e;
            String str = this.f21736i;
            a aVar = this.f21737o;
            return "GovernmentIdVideo(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f21734d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f21735e.name());
            dest.writeString(this.f21736i);
            dest.writeString(this.f21737o.name());
        }

        @Override // eo.d0
        public String x1() {
            return this.f21736i;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f21738d = new d("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f21739e = new d("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f21740i = new d("FRONT_AND_BACK", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f21741o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f21742p;

        static {
            d[] a10 = a();
            f21741o = a10;
            f21742p = sr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f21738d, f21739e, f21740i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f21741o.clone();
        }
    }

    d V0();

    a c2();

    List i2();

    String x1();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements d0 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f21728d;

        /* renamed from: e  reason: collision with root package name */
        private final d f21729e;

        /* renamed from: i  reason: collision with root package name */
        private final String f21730i;

        /* renamed from: o  reason: collision with root package name */
        private final a f21731o;

        /* renamed from: p  reason: collision with root package name */
        private final RawExtraction f21732p;

        /* renamed from: q  reason: collision with root package name */
        private final k0 f21733q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                RawExtraction createFromParcel;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(c0.CREATOR.createFromParcel(parcel));
                }
                d valueOf = d.valueOf(parcel.readString());
                String readString = parcel.readString();
                a valueOf2 = a.valueOf(parcel.readString());
                k0 k0Var = null;
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = RawExtraction.CREATOR.createFromParcel(parcel);
                }
                RawExtraction rawExtraction = createFromParcel;
                if (parcel.readInt() != 0) {
                    k0Var = k0.CREATOR.createFromParcel(parcel);
                }
                return new b(arrayList, valueOf, readString, valueOf2, rawExtraction, k0Var);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            this.f21728d = frames;
            this.f21729e = side;
            this.f21730i = idClassKey;
            this.f21731o = captureMethod;
            this.f21732p = rawExtraction;
            this.f21733q = k0Var;
        }

        public static /* synthetic */ b b(b bVar, List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = bVar.f21728d;
            }
            if ((i10 & 2) != 0) {
                dVar = bVar.f21729e;
            }
            if ((i10 & 4) != 0) {
                str = bVar.f21730i;
            }
            if ((i10 & 8) != 0) {
                aVar = bVar.f21731o;
            }
            if ((i10 & 16) != 0) {
                rawExtraction = bVar.f21732p;
            }
            if ((i10 & 32) != 0) {
                k0Var = bVar.f21733q;
            }
            RawExtraction rawExtraction2 = rawExtraction;
            k0 k0Var2 = k0Var;
            return bVar.a(list, dVar, str, aVar, rawExtraction2, k0Var2);
        }

        @Override // eo.d0
        public d V0() {
            return this.f21729e;
        }

        public final b a(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new b(frames, side, idClassKey, captureMethod, rawExtraction, k0Var);
        }

        public final k0 c() {
            return this.f21733q;
        }

        @Override // eo.d0
        public a c2() {
            return this.f21731o;
        }

        public final RawExtraction d() {
            return this.f21732p;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f21728d, bVar.f21728d) && this.f21729e == bVar.f21729e && Intrinsics.areEqual(this.f21730i, bVar.f21730i) && this.f21731o == bVar.f21731o && Intrinsics.areEqual(this.f21732p, bVar.f21732p) && Intrinsics.areEqual(this.f21733q, bVar.f21733q)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((this.f21728d.hashCode() * 31) + this.f21729e.hashCode()) * 31) + this.f21730i.hashCode()) * 31) + this.f21731o.hashCode()) * 31;
            RawExtraction rawExtraction = this.f21732p;
            int i10 = 0;
            if (rawExtraction == null) {
                hashCode = 0;
            } else {
                hashCode = rawExtraction.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            k0 k0Var = this.f21733q;
            if (k0Var != null) {
                i10 = k0Var.hashCode();
            }
            return i11 + i10;
        }

        @Override // eo.d0
        public List i2() {
            return this.f21728d;
        }

        public String toString() {
            List list = this.f21728d;
            d dVar = this.f21729e;
            String str = this.f21730i;
            a aVar = this.f21731o;
            RawExtraction rawExtraction = this.f21732p;
            k0 k0Var = this.f21733q;
            return "GovernmentIdImage(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ", rawExtraction=" + rawExtraction + ", idDetails=" + k0Var + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f21728d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f21729e.name());
            dest.writeString(this.f21730i);
            dest.writeString(this.f21731o.name());
            RawExtraction rawExtraction = this.f21732p;
            if (rawExtraction == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                rawExtraction.writeToParcel(dest, i10);
            }
            k0 k0Var = this.f21733q;
            if (k0Var == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            k0Var.writeToParcel(dest, i10);
        }

        @Override // eo.d0
        public String x1() {
            return this.f21730i;
        }

        public /* synthetic */ b(List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, dVar, str, aVar, (i10 & 16) != 0 ? null : rawExtraction, (i10 & 32) != 0 ? null : k0Var);
        }
    }
}
