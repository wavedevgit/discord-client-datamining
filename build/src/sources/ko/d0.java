package ko;

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
        public static final a f31030d = new C0469a("AUTO", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f31031e = new b("MANUAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f31032i = new c("UPLOAD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f31033o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f31034p;

        /* renamed from: ko.d0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0469a extends a {
            C0469a(String str, int i10) {
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
            f31033o = a10;
            f31034p = yr.a.a(a10);
        }

        public /* synthetic */ a(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f31030d, f31031e, f31032i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f31033o.clone();
        }

        private a(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements d0 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f31041d;

        /* renamed from: e  reason: collision with root package name */
        private final d f31042e;

        /* renamed from: i  reason: collision with root package name */
        private final String f31043i;

        /* renamed from: o  reason: collision with root package name */
        private final a f31044o;

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
            this.f31041d = frames;
            this.f31042e = side;
            this.f31043i = idClassKey;
            this.f31044o = captureMethod;
        }

        @Override // ko.d0
        public d R0() {
            return this.f31042e;
        }

        @Override // ko.d0
        public a a2() {
            return this.f31044o;
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
            if (Intrinsics.areEqual(this.f31041d, cVar.f31041d) && this.f31042e == cVar.f31042e && Intrinsics.areEqual(this.f31043i, cVar.f31043i) && this.f31044o == cVar.f31044o) {
                return true;
            }
            return false;
        }

        @Override // ko.d0
        public List h2() {
            return this.f31041d;
        }

        public int hashCode() {
            return (((((this.f31041d.hashCode() * 31) + this.f31042e.hashCode()) * 31) + this.f31043i.hashCode()) * 31) + this.f31044o.hashCode();
        }

        @Override // ko.d0
        public String r1() {
            return this.f31043i;
        }

        public String toString() {
            List list = this.f31041d;
            d dVar = this.f31042e;
            String str = this.f31043i;
            a aVar = this.f31044o;
            return "GovernmentIdVideo(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f31041d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f31042e.name());
            dest.writeString(this.f31043i);
            dest.writeString(this.f31044o.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f31045d = new d("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f31046e = new d("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f31047i = new d("FRONT_AND_BACK", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f31048o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f31049p;

        static {
            d[] a10 = a();
            f31048o = a10;
            f31049p = yr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f31045d, f31046e, f31047i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f31048o.clone();
        }
    }

    d R0();

    a a2();

    List h2();

    String r1();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements d0 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f31035d;

        /* renamed from: e  reason: collision with root package name */
        private final d f31036e;

        /* renamed from: i  reason: collision with root package name */
        private final String f31037i;

        /* renamed from: o  reason: collision with root package name */
        private final a f31038o;

        /* renamed from: p  reason: collision with root package name */
        private final RawExtraction f31039p;

        /* renamed from: q  reason: collision with root package name */
        private final k0 f31040q;

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
            this.f31035d = frames;
            this.f31036e = side;
            this.f31037i = idClassKey;
            this.f31038o = captureMethod;
            this.f31039p = rawExtraction;
            this.f31040q = k0Var;
        }

        public static /* synthetic */ b b(b bVar, List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = bVar.f31035d;
            }
            if ((i10 & 2) != 0) {
                dVar = bVar.f31036e;
            }
            if ((i10 & 4) != 0) {
                str = bVar.f31037i;
            }
            if ((i10 & 8) != 0) {
                aVar = bVar.f31038o;
            }
            if ((i10 & 16) != 0) {
                rawExtraction = bVar.f31039p;
            }
            if ((i10 & 32) != 0) {
                k0Var = bVar.f31040q;
            }
            RawExtraction rawExtraction2 = rawExtraction;
            k0 k0Var2 = k0Var;
            return bVar.a(list, dVar, str, aVar, rawExtraction2, k0Var2);
        }

        @Override // ko.d0
        public d R0() {
            return this.f31036e;
        }

        public final b a(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new b(frames, side, idClassKey, captureMethod, rawExtraction, k0Var);
        }

        @Override // ko.d0
        public a a2() {
            return this.f31038o;
        }

        public final k0 c() {
            return this.f31040q;
        }

        public final RawExtraction d() {
            return this.f31039p;
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
            if (Intrinsics.areEqual(this.f31035d, bVar.f31035d) && this.f31036e == bVar.f31036e && Intrinsics.areEqual(this.f31037i, bVar.f31037i) && this.f31038o == bVar.f31038o && Intrinsics.areEqual(this.f31039p, bVar.f31039p) && Intrinsics.areEqual(this.f31040q, bVar.f31040q)) {
                return true;
            }
            return false;
        }

        @Override // ko.d0
        public List h2() {
            return this.f31035d;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((this.f31035d.hashCode() * 31) + this.f31036e.hashCode()) * 31) + this.f31037i.hashCode()) * 31) + this.f31038o.hashCode()) * 31;
            RawExtraction rawExtraction = this.f31039p;
            int i10 = 0;
            if (rawExtraction == null) {
                hashCode = 0;
            } else {
                hashCode = rawExtraction.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            k0 k0Var = this.f31040q;
            if (k0Var != null) {
                i10 = k0Var.hashCode();
            }
            return i11 + i10;
        }

        @Override // ko.d0
        public String r1() {
            return this.f31037i;
        }

        public String toString() {
            List list = this.f31035d;
            d dVar = this.f31036e;
            String str = this.f31037i;
            a aVar = this.f31038o;
            RawExtraction rawExtraction = this.f31039p;
            k0 k0Var = this.f31040q;
            return "GovernmentIdImage(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ", rawExtraction=" + rawExtraction + ", idDetails=" + k0Var + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f31035d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f31036e.name());
            dest.writeString(this.f31037i);
            dest.writeString(this.f31038o.name());
            RawExtraction rawExtraction = this.f31039p;
            if (rawExtraction == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                rawExtraction.writeToParcel(dest, i10);
            }
            k0 k0Var = this.f31040q;
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
