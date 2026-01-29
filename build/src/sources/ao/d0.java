package ao;

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
        public static final a f5845d = new C0084a("AUTO", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f5846e = new b("MANUAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f5847i = new c("UPLOAD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f5848o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f5849p;

        /* renamed from: ao.d0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0084a extends a {
            C0084a(String str, int i10) {
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
            f5848o = a10;
            f5849p = pr.a.a(a10);
        }

        public /* synthetic */ a(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f5845d, f5846e, f5847i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f5848o.clone();
        }

        private a(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements d0 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f5856d;

        /* renamed from: e  reason: collision with root package name */
        private final d f5857e;

        /* renamed from: i  reason: collision with root package name */
        private final String f5858i;

        /* renamed from: o  reason: collision with root package name */
        private final a f5859o;

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
            this.f5856d = frames;
            this.f5857e = side;
            this.f5858i = idClassKey;
            this.f5859o = captureMethod;
        }

        @Override // ao.d0
        public d U0() {
            return this.f5857e;
        }

        @Override // ao.d0
        public a c2() {
            return this.f5859o;
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
            if (Intrinsics.areEqual(this.f5856d, cVar.f5856d) && this.f5857e == cVar.f5857e && Intrinsics.areEqual(this.f5858i, cVar.f5858i) && this.f5859o == cVar.f5859o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f5856d.hashCode() * 31) + this.f5857e.hashCode()) * 31) + this.f5858i.hashCode()) * 31) + this.f5859o.hashCode();
        }

        @Override // ao.d0
        public List i2() {
            return this.f5856d;
        }

        public String toString() {
            List list = this.f5856d;
            d dVar = this.f5857e;
            String str = this.f5858i;
            a aVar = this.f5859o;
            return "GovernmentIdVideo(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f5856d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f5857e.name());
            dest.writeString(this.f5858i);
            dest.writeString(this.f5859o.name());
        }

        @Override // ao.d0
        public String x1() {
            return this.f5858i;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f5860d = new d("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f5861e = new d("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f5862i = new d("FRONT_AND_BACK", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f5863o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f5864p;

        static {
            d[] a10 = a();
            f5863o = a10;
            f5864p = pr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f5860d, f5861e, f5862i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f5863o.clone();
        }
    }

    d U0();

    a c2();

    List i2();

    String x1();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements d0 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f5850d;

        /* renamed from: e  reason: collision with root package name */
        private final d f5851e;

        /* renamed from: i  reason: collision with root package name */
        private final String f5852i;

        /* renamed from: o  reason: collision with root package name */
        private final a f5853o;

        /* renamed from: p  reason: collision with root package name */
        private final RawExtraction f5854p;

        /* renamed from: q  reason: collision with root package name */
        private final k0 f5855q;

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
            this.f5850d = frames;
            this.f5851e = side;
            this.f5852i = idClassKey;
            this.f5853o = captureMethod;
            this.f5854p = rawExtraction;
            this.f5855q = k0Var;
        }

        public static /* synthetic */ b b(b bVar, List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = bVar.f5850d;
            }
            if ((i10 & 2) != 0) {
                dVar = bVar.f5851e;
            }
            if ((i10 & 4) != 0) {
                str = bVar.f5852i;
            }
            if ((i10 & 8) != 0) {
                aVar = bVar.f5853o;
            }
            if ((i10 & 16) != 0) {
                rawExtraction = bVar.f5854p;
            }
            if ((i10 & 32) != 0) {
                k0Var = bVar.f5855q;
            }
            RawExtraction rawExtraction2 = rawExtraction;
            k0 k0Var2 = k0Var;
            return bVar.a(list, dVar, str, aVar, rawExtraction2, k0Var2);
        }

        @Override // ao.d0
        public d U0() {
            return this.f5851e;
        }

        public final b a(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new b(frames, side, idClassKey, captureMethod, rawExtraction, k0Var);
        }

        public final k0 c() {
            return this.f5855q;
        }

        @Override // ao.d0
        public a c2() {
            return this.f5853o;
        }

        public final RawExtraction d() {
            return this.f5854p;
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
            if (Intrinsics.areEqual(this.f5850d, bVar.f5850d) && this.f5851e == bVar.f5851e && Intrinsics.areEqual(this.f5852i, bVar.f5852i) && this.f5853o == bVar.f5853o && Intrinsics.areEqual(this.f5854p, bVar.f5854p) && Intrinsics.areEqual(this.f5855q, bVar.f5855q)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((this.f5850d.hashCode() * 31) + this.f5851e.hashCode()) * 31) + this.f5852i.hashCode()) * 31) + this.f5853o.hashCode()) * 31;
            RawExtraction rawExtraction = this.f5854p;
            int i10 = 0;
            if (rawExtraction == null) {
                hashCode = 0;
            } else {
                hashCode = rawExtraction.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            k0 k0Var = this.f5855q;
            if (k0Var != null) {
                i10 = k0Var.hashCode();
            }
            return i11 + i10;
        }

        @Override // ao.d0
        public List i2() {
            return this.f5850d;
        }

        public String toString() {
            List list = this.f5850d;
            d dVar = this.f5851e;
            String str = this.f5852i;
            a aVar = this.f5853o;
            RawExtraction rawExtraction = this.f5854p;
            k0 k0Var = this.f5855q;
            return "GovernmentIdImage(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ", rawExtraction=" + rawExtraction + ", idDetails=" + k0Var + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f5850d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f5851e.name());
            dest.writeString(this.f5852i);
            dest.writeString(this.f5853o.name());
            RawExtraction rawExtraction = this.f5854p;
            if (rawExtraction == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                rawExtraction.writeToParcel(dest, i10);
            }
            k0 k0Var = this.f5855q;
            if (k0Var == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            k0Var.writeToParcel(dest, i10);
        }

        @Override // ao.d0
        public String x1() {
            return this.f5852i;
        }

        public /* synthetic */ b(List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, dVar, str, aVar, (i10 & 16) != 0 ? null : rawExtraction, (i10 & 32) != 0 ? null : k0Var);
        }
    }
}
