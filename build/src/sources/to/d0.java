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
        public static final a f49022d = new C0667a("AUTO", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f49023e = new b("MANUAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f49024i = new c("UPLOAD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f49025o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49026p;

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
            f49025o = a10;
            f49026p = hs.a.a(a10);
        }

        public /* synthetic */ a(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f49022d, f49023e, f49024i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f49025o.clone();
        }

        private a(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements d0 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f49033d;

        /* renamed from: e  reason: collision with root package name */
        private final d f49034e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49035i;

        /* renamed from: o  reason: collision with root package name */
        private final a f49036o;

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
            this.f49033d = frames;
            this.f49034e = side;
            this.f49035i = idClassKey;
            this.f49036o = captureMethod;
        }

        @Override // to.d0
        public d V0() {
            return this.f49034e;
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
            if (Intrinsics.areEqual(this.f49033d, cVar.f49033d) && this.f49034e == cVar.f49034e && Intrinsics.areEqual(this.f49035i, cVar.f49035i) && this.f49036o == cVar.f49036o) {
                return true;
            }
            return false;
        }

        @Override // to.d0
        public a g2() {
            return this.f49036o;
        }

        public int hashCode() {
            return (((((this.f49033d.hashCode() * 31) + this.f49034e.hashCode()) * 31) + this.f49035i.hashCode()) * 31) + this.f49036o.hashCode();
        }

        @Override // to.d0
        public List m2() {
            return this.f49033d;
        }

        public String toString() {
            List list = this.f49033d;
            d dVar = this.f49034e;
            String str = this.f49035i;
            a aVar = this.f49036o;
            return "GovernmentIdVideo(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // to.d0
        public String w1() {
            return this.f49035i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f49033d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49034e.name());
            dest.writeString(this.f49035i);
            dest.writeString(this.f49036o.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f49037d = new d("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f49038e = new d("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f49039i = new d("FRONT_AND_BACK", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f49040o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49041p;

        static {
            d[] a10 = a();
            f49040o = a10;
            f49041p = hs.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f49037d, f49038e, f49039i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f49040o.clone();
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
        private final List f49027d;

        /* renamed from: e  reason: collision with root package name */
        private final d f49028e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49029i;

        /* renamed from: o  reason: collision with root package name */
        private final a f49030o;

        /* renamed from: p  reason: collision with root package name */
        private final RawExtraction f49031p;

        /* renamed from: q  reason: collision with root package name */
        private final k0 f49032q;

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
            this.f49027d = frames;
            this.f49028e = side;
            this.f49029i = idClassKey;
            this.f49030o = captureMethod;
            this.f49031p = rawExtraction;
            this.f49032q = k0Var;
        }

        public static /* synthetic */ b b(b bVar, List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = bVar.f49027d;
            }
            if ((i10 & 2) != 0) {
                dVar = bVar.f49028e;
            }
            if ((i10 & 4) != 0) {
                str = bVar.f49029i;
            }
            if ((i10 & 8) != 0) {
                aVar = bVar.f49030o;
            }
            if ((i10 & 16) != 0) {
                rawExtraction = bVar.f49031p;
            }
            if ((i10 & 32) != 0) {
                k0Var = bVar.f49032q;
            }
            RawExtraction rawExtraction2 = rawExtraction;
            k0 k0Var2 = k0Var;
            return bVar.a(list, dVar, str, aVar, rawExtraction2, k0Var2);
        }

        @Override // to.d0
        public d V0() {
            return this.f49028e;
        }

        public final b a(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new b(frames, side, idClassKey, captureMethod, rawExtraction, k0Var);
        }

        public final k0 c() {
            return this.f49032q;
        }

        public final RawExtraction d() {
            return this.f49031p;
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
            if (Intrinsics.areEqual(this.f49027d, bVar.f49027d) && this.f49028e == bVar.f49028e && Intrinsics.areEqual(this.f49029i, bVar.f49029i) && this.f49030o == bVar.f49030o && Intrinsics.areEqual(this.f49031p, bVar.f49031p) && Intrinsics.areEqual(this.f49032q, bVar.f49032q)) {
                return true;
            }
            return false;
        }

        @Override // to.d0
        public a g2() {
            return this.f49030o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((this.f49027d.hashCode() * 31) + this.f49028e.hashCode()) * 31) + this.f49029i.hashCode()) * 31) + this.f49030o.hashCode()) * 31;
            RawExtraction rawExtraction = this.f49031p;
            int i10 = 0;
            if (rawExtraction == null) {
                hashCode = 0;
            } else {
                hashCode = rawExtraction.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            k0 k0Var = this.f49032q;
            if (k0Var != null) {
                i10 = k0Var.hashCode();
            }
            return i11 + i10;
        }

        @Override // to.d0
        public List m2() {
            return this.f49027d;
        }

        public String toString() {
            List list = this.f49027d;
            d dVar = this.f49028e;
            String str = this.f49029i;
            a aVar = this.f49030o;
            RawExtraction rawExtraction = this.f49031p;
            k0 k0Var = this.f49032q;
            return "GovernmentIdImage(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ", rawExtraction=" + rawExtraction + ", idDetails=" + k0Var + ")";
        }

        @Override // to.d0
        public String w1() {
            return this.f49029i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f49027d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f49028e.name());
            dest.writeString(this.f49029i);
            dest.writeString(this.f49030o.name());
            RawExtraction rawExtraction = this.f49031p;
            if (rawExtraction == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                rawExtraction.writeToParcel(dest, i10);
            }
            k0 k0Var = this.f49032q;
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
