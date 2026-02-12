package to;

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
        public static final a f49023d = new C0667a("AUTO", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f49024e = new b("MANUAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f49025i = new c("UPLOAD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f49026o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49027p;

        /* renamed from: to.d0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0667a extends a {
            C0667a(String str, int i10) {
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
            f49026o = a10;
            f49027p = hs.a.a(a10);
        }

        public /* synthetic */ a(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f49023d, f49024e, f49025i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f49026o.clone();
        }

        private a(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements d0 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f49034d;

        /* renamed from: e  reason: collision with root package name */
        private final d f49035e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49036i;

        /* renamed from: o  reason: collision with root package name */
        private final a f49037o;

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
            this.f49034d = frames;
            this.f49035e = side;
            this.f49036i = idClassKey;
            this.f49037o = captureMethod;
        }

        @Override // to.d0
        public d V0() {
            return this.f49035e;
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
            if (Intrinsics.areEqual(this.f49034d, cVar.f49034d) && this.f49035e == cVar.f49035e && Intrinsics.areEqual(this.f49036i, cVar.f49036i) && this.f49037o == cVar.f49037o) {
                return true;
            }
            return false;
        }

        @Override // to.d0
        public a g2() {
            return this.f49037o;
        }

        public int hashCode() {
            return (((((this.f49034d.hashCode() * 31) + this.f49035e.hashCode()) * 31) + this.f49036i.hashCode()) * 31) + this.f49037o.hashCode();
        }

        @Override // to.d0
        public List m2() {
            return this.f49034d;
        }

        public String toString() {
            List list = this.f49034d;
            d dVar = this.f49035e;
            String str = this.f49036i;
            a aVar = this.f49037o;
            return "GovernmentIdVideo(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // to.d0
        public String w1() {
            return this.f49036i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f49034d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49035e.name());
            dest.writeString(this.f49036i);
            dest.writeString(this.f49037o.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f49038d = new d("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f49039e = new d("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f49040i = new d("FRONT_AND_BACK", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f49041o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49042p;

        static {
            d[] a10 = a();
            f49041o = a10;
            f49042p = hs.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f49038d, f49039e, f49040i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f49041o.clone();
        }
    }

    d V0();

    a g2();

    List m2();

    String w1();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements d0 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f49028d;

        /* renamed from: e  reason: collision with root package name */
        private final d f49029e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49030i;

        /* renamed from: o  reason: collision with root package name */
        private final a f49031o;

        /* renamed from: p  reason: collision with root package name */
        private final RawExtraction f49032p;

        /* renamed from: q  reason: collision with root package name */
        private final k0 f49033q;

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
            this.f49028d = frames;
            this.f49029e = side;
            this.f49030i = idClassKey;
            this.f49031o = captureMethod;
            this.f49032p = rawExtraction;
            this.f49033q = k0Var;
        }

        public static /* synthetic */ b b(b bVar, List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = bVar.f49028d;
            }
            if ((i10 & 2) != 0) {
                dVar = bVar.f49029e;
            }
            if ((i10 & 4) != 0) {
                str = bVar.f49030i;
            }
            if ((i10 & 8) != 0) {
                aVar = bVar.f49031o;
            }
            if ((i10 & 16) != 0) {
                rawExtraction = bVar.f49032p;
            }
            if ((i10 & 32) != 0) {
                k0Var = bVar.f49033q;
            }
            RawExtraction rawExtraction2 = rawExtraction;
            k0 k0Var2 = k0Var;
            return bVar.a(list, dVar, str, aVar, rawExtraction2, k0Var2);
        }

        @Override // to.d0
        public d V0() {
            return this.f49029e;
        }

        public final b a(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new b(frames, side, idClassKey, captureMethod, rawExtraction, k0Var);
        }

        public final k0 c() {
            return this.f49033q;
        }

        public final RawExtraction d() {
            return this.f49032p;
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
            if (Intrinsics.areEqual(this.f49028d, bVar.f49028d) && this.f49029e == bVar.f49029e && Intrinsics.areEqual(this.f49030i, bVar.f49030i) && this.f49031o == bVar.f49031o && Intrinsics.areEqual(this.f49032p, bVar.f49032p) && Intrinsics.areEqual(this.f49033q, bVar.f49033q)) {
                return true;
            }
            return false;
        }

        @Override // to.d0
        public a g2() {
            return this.f49031o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((this.f49028d.hashCode() * 31) + this.f49029e.hashCode()) * 31) + this.f49030i.hashCode()) * 31) + this.f49031o.hashCode()) * 31;
            RawExtraction rawExtraction = this.f49032p;
            int i10 = 0;
            if (rawExtraction == null) {
                hashCode = 0;
            } else {
                hashCode = rawExtraction.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            k0 k0Var = this.f49033q;
            if (k0Var != null) {
                i10 = k0Var.hashCode();
            }
            return i11 + i10;
        }

        @Override // to.d0
        public List m2() {
            return this.f49028d;
        }

        public String toString() {
            List list = this.f49028d;
            d dVar = this.f49029e;
            String str = this.f49030i;
            a aVar = this.f49031o;
            RawExtraction rawExtraction = this.f49032p;
            k0 k0Var = this.f49033q;
            return "GovernmentIdImage(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ", rawExtraction=" + rawExtraction + ", idDetails=" + k0Var + ")";
        }

        @Override // to.d0
        public String w1() {
            return this.f49030i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f49028d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49029e.name());
            dest.writeString(this.f49030i);
            dest.writeString(this.f49031o.name());
            RawExtraction rawExtraction = this.f49032p;
            if (rawExtraction == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                rawExtraction.writeToParcel(dest, i10);
            }
            k0 k0Var = this.f49033q;
            if (k0Var == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            k0Var.writeToParcel(dest, i10);
        }

        public /* synthetic */ b(List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, dVar, str, aVar, (i10 & 16) != 0 ? null : rawExtraction, (i10 & 32) != 0 ? null : k0Var);
        }
    }
}
