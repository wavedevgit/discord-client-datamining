package ho;

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
        public static final a f26035d = new C0356a("AUTO", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f26036e = new b("MANUAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f26037i = new c("UPLOAD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f26038o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f26039p;

        /* renamed from: ho.d0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0356a extends a {
            C0356a(String str, int i10) {
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
            f26038o = a10;
            f26039p = vr.a.a(a10);
        }

        public /* synthetic */ a(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f26035d, f26036e, f26037i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f26038o.clone();
        }

        private a(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements d0 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f26046d;

        /* renamed from: e  reason: collision with root package name */
        private final d f26047e;

        /* renamed from: i  reason: collision with root package name */
        private final String f26048i;

        /* renamed from: o  reason: collision with root package name */
        private final a f26049o;

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
            this.f26046d = frames;
            this.f26047e = side;
            this.f26048i = idClassKey;
            this.f26049o = captureMethod;
        }

        @Override // ho.d0
        public d V0() {
            return this.f26047e;
        }

        @Override // ho.d0
        public a c2() {
            return this.f26049o;
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
            if (Intrinsics.areEqual(this.f26046d, cVar.f26046d) && this.f26047e == cVar.f26047e && Intrinsics.areEqual(this.f26048i, cVar.f26048i) && this.f26049o == cVar.f26049o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f26046d.hashCode() * 31) + this.f26047e.hashCode()) * 31) + this.f26048i.hashCode()) * 31) + this.f26049o.hashCode();
        }

        @Override // ho.d0
        public List i2() {
            return this.f26046d;
        }

        public String toString() {
            List list = this.f26046d;
            d dVar = this.f26047e;
            String str = this.f26048i;
            a aVar = this.f26049o;
            return "GovernmentIdVideo(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f26046d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f26047e.name());
            dest.writeString(this.f26048i);
            dest.writeString(this.f26049o.name());
        }

        @Override // ho.d0
        public String x1() {
            return this.f26048i;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f26050d = new d("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f26051e = new d("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f26052i = new d("FRONT_AND_BACK", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f26053o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f26054p;

        static {
            d[] a10 = a();
            f26053o = a10;
            f26054p = vr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f26050d, f26051e, f26052i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f26053o.clone();
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
        private final List f26040d;

        /* renamed from: e  reason: collision with root package name */
        private final d f26041e;

        /* renamed from: i  reason: collision with root package name */
        private final String f26042i;

        /* renamed from: o  reason: collision with root package name */
        private final a f26043o;

        /* renamed from: p  reason: collision with root package name */
        private final RawExtraction f26044p;

        /* renamed from: q  reason: collision with root package name */
        private final k0 f26045q;

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
            this.f26040d = frames;
            this.f26041e = side;
            this.f26042i = idClassKey;
            this.f26043o = captureMethod;
            this.f26044p = rawExtraction;
            this.f26045q = k0Var;
        }

        public static /* synthetic */ b b(b bVar, List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = bVar.f26040d;
            }
            if ((i10 & 2) != 0) {
                dVar = bVar.f26041e;
            }
            if ((i10 & 4) != 0) {
                str = bVar.f26042i;
            }
            if ((i10 & 8) != 0) {
                aVar = bVar.f26043o;
            }
            if ((i10 & 16) != 0) {
                rawExtraction = bVar.f26044p;
            }
            if ((i10 & 32) != 0) {
                k0Var = bVar.f26045q;
            }
            RawExtraction rawExtraction2 = rawExtraction;
            k0 k0Var2 = k0Var;
            return bVar.a(list, dVar, str, aVar, rawExtraction2, k0Var2);
        }

        @Override // ho.d0
        public d V0() {
            return this.f26041e;
        }

        public final b a(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new b(frames, side, idClassKey, captureMethod, rawExtraction, k0Var);
        }

        public final k0 c() {
            return this.f26045q;
        }

        @Override // ho.d0
        public a c2() {
            return this.f26043o;
        }

        public final RawExtraction d() {
            return this.f26044p;
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
            if (Intrinsics.areEqual(this.f26040d, bVar.f26040d) && this.f26041e == bVar.f26041e && Intrinsics.areEqual(this.f26042i, bVar.f26042i) && this.f26043o == bVar.f26043o && Intrinsics.areEqual(this.f26044p, bVar.f26044p) && Intrinsics.areEqual(this.f26045q, bVar.f26045q)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((this.f26040d.hashCode() * 31) + this.f26041e.hashCode()) * 31) + this.f26042i.hashCode()) * 31) + this.f26043o.hashCode()) * 31;
            RawExtraction rawExtraction = this.f26044p;
            int i10 = 0;
            if (rawExtraction == null) {
                hashCode = 0;
            } else {
                hashCode = rawExtraction.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            k0 k0Var = this.f26045q;
            if (k0Var != null) {
                i10 = k0Var.hashCode();
            }
            return i11 + i10;
        }

        @Override // ho.d0
        public List i2() {
            return this.f26040d;
        }

        public String toString() {
            List list = this.f26040d;
            d dVar = this.f26041e;
            String str = this.f26042i;
            a aVar = this.f26043o;
            RawExtraction rawExtraction = this.f26044p;
            k0 k0Var = this.f26045q;
            return "GovernmentIdImage(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ", rawExtraction=" + rawExtraction + ", idDetails=" + k0Var + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f26040d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f26041e.name());
            dest.writeString(this.f26042i);
            dest.writeString(this.f26043o.name());
            RawExtraction rawExtraction = this.f26044p;
            if (rawExtraction == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                rawExtraction.writeToParcel(dest, i10);
            }
            k0 k0Var = this.f26045q;
            if (k0Var == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            k0Var.writeToParcel(dest, i10);
        }

        @Override // ho.d0
        public String x1() {
            return this.f26042i;
        }

        public /* synthetic */ b(List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, dVar, str, aVar, (i10 & 16) != 0 ? null : rawExtraction, (i10 & 32) != 0 ? null : k0Var);
        }
    }
}
