package jo;

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
        public static final a f30079d = new C0423a("AUTO", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f30080e = new b("MANUAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f30081i = new c("UPLOAD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f30082o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f30083p;

        /* renamed from: jo.d0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0423a extends a {
            C0423a(String str, int i10) {
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
            f30082o = a10;
            f30083p = xr.a.a(a10);
        }

        public /* synthetic */ a(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f30079d, f30080e, f30081i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f30082o.clone();
        }

        private a(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements d0 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f30090d;

        /* renamed from: e  reason: collision with root package name */
        private final d f30091e;

        /* renamed from: i  reason: collision with root package name */
        private final String f30092i;

        /* renamed from: o  reason: collision with root package name */
        private final a f30093o;

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
            this.f30090d = frames;
            this.f30091e = side;
            this.f30092i = idClassKey;
            this.f30093o = captureMethod;
        }

        @Override // jo.d0
        public d O0() {
            return this.f30091e;
        }

        @Override // jo.d0
        public a b2() {
            return this.f30093o;
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
            if (Intrinsics.areEqual(this.f30090d, cVar.f30090d) && this.f30091e == cVar.f30091e && Intrinsics.areEqual(this.f30092i, cVar.f30092i) && this.f30093o == cVar.f30093o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f30090d.hashCode() * 31) + this.f30091e.hashCode()) * 31) + this.f30092i.hashCode()) * 31) + this.f30093o.hashCode();
        }

        @Override // jo.d0
        public List i2() {
            return this.f30090d;
        }

        public String toString() {
            List list = this.f30090d;
            d dVar = this.f30091e;
            String str = this.f30092i;
            a aVar = this.f30093o;
            return "GovernmentIdVideo(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // jo.d0
        public String w1() {
            return this.f30092i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f30090d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30091e.name());
            dest.writeString(this.f30092i);
            dest.writeString(this.f30093o.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f30094d = new d("FRONT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f30095e = new d("BACK", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f30096i = new d("FRONT_AND_BACK", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f30097o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f30098p;

        static {
            d[] a10 = a();
            f30097o = a10;
            f30098p = xr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f30094d, f30095e, f30096i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f30097o.clone();
        }
    }

    d O0();

    a b2();

    List i2();

    String w1();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements d0 {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f30084d;

        /* renamed from: e  reason: collision with root package name */
        private final d f30085e;

        /* renamed from: i  reason: collision with root package name */
        private final String f30086i;

        /* renamed from: o  reason: collision with root package name */
        private final a f30087o;

        /* renamed from: p  reason: collision with root package name */
        private final RawExtraction f30088p;

        /* renamed from: q  reason: collision with root package name */
        private final k0 f30089q;

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
            this.f30084d = frames;
            this.f30085e = side;
            this.f30086i = idClassKey;
            this.f30087o = captureMethod;
            this.f30088p = rawExtraction;
            this.f30089q = k0Var;
        }

        public static /* synthetic */ b b(b bVar, List list, d dVar, String str, a aVar, RawExtraction rawExtraction, k0 k0Var, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = bVar.f30084d;
            }
            if ((i10 & 2) != 0) {
                dVar = bVar.f30085e;
            }
            if ((i10 & 4) != 0) {
                str = bVar.f30086i;
            }
            if ((i10 & 8) != 0) {
                aVar = bVar.f30087o;
            }
            if ((i10 & 16) != 0) {
                rawExtraction = bVar.f30088p;
            }
            if ((i10 & 32) != 0) {
                k0Var = bVar.f30089q;
            }
            RawExtraction rawExtraction2 = rawExtraction;
            k0 k0Var2 = k0Var;
            return bVar.a(list, dVar, str, aVar, rawExtraction2, k0Var2);
        }

        @Override // jo.d0
        public d O0() {
            return this.f30085e;
        }

        public final b a(List frames, d side, String idClassKey, a captureMethod, RawExtraction rawExtraction, k0 k0Var) {
            Intrinsics.checkNotNullParameter(frames, "frames");
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new b(frames, side, idClassKey, captureMethod, rawExtraction, k0Var);
        }

        @Override // jo.d0
        public a b2() {
            return this.f30087o;
        }

        public final k0 c() {
            return this.f30089q;
        }

        public final RawExtraction d() {
            return this.f30088p;
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
            if (Intrinsics.areEqual(this.f30084d, bVar.f30084d) && this.f30085e == bVar.f30085e && Intrinsics.areEqual(this.f30086i, bVar.f30086i) && this.f30087o == bVar.f30087o && Intrinsics.areEqual(this.f30088p, bVar.f30088p) && Intrinsics.areEqual(this.f30089q, bVar.f30089q)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((this.f30084d.hashCode() * 31) + this.f30085e.hashCode()) * 31) + this.f30086i.hashCode()) * 31) + this.f30087o.hashCode()) * 31;
            RawExtraction rawExtraction = this.f30088p;
            int i10 = 0;
            if (rawExtraction == null) {
                hashCode = 0;
            } else {
                hashCode = rawExtraction.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            k0 k0Var = this.f30089q;
            if (k0Var != null) {
                i10 = k0Var.hashCode();
            }
            return i11 + i10;
        }

        @Override // jo.d0
        public List i2() {
            return this.f30084d;
        }

        public String toString() {
            List list = this.f30084d;
            d dVar = this.f30085e;
            String str = this.f30086i;
            a aVar = this.f30087o;
            RawExtraction rawExtraction = this.f30088p;
            k0 k0Var = this.f30089q;
            return "GovernmentIdImage(frames=" + list + ", side=" + dVar + ", idClassKey=" + str + ", captureMethod=" + aVar + ", rawExtraction=" + rawExtraction + ", idDetails=" + k0Var + ")";
        }

        @Override // jo.d0
        public String w1() {
            return this.f30086i;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<c0> list = this.f30084d;
            dest.writeInt(list.size());
            for (c0 c0Var : list) {
                c0Var.writeToParcel(dest, i10);
            }
            dest.writeString(this.f30085e.name());
            dest.writeString(this.f30086i);
            dest.writeString(this.f30087o.name());
            RawExtraction rawExtraction = this.f30088p;
            if (rawExtraction == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                rawExtraction.writeToParcel(dest, i10);
            }
            k0 k0Var = this.f30089q;
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
