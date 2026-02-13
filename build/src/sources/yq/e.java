package yq;

import android.os.Parcel;
import android.os.Parcelable;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<e> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final String f56306d;

    /* renamed from: e  reason: collision with root package name */
    private final d f56307e;

    /* renamed from: i  reason: collision with root package name */
    private final a f56308i;

    /* renamed from: o  reason: collision with root package name */
    private final List f56309o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f56310d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f56311e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f56312i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f56313o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f56314p;

        static {
            a[] a10 = a();
            f56313o = a10;
            f56314p = hs.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f56310d, f56311e, f56312i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f56313o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final e createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            d valueOf = d.valueOf(parcel.readString());
            a valueOf2 = a.valueOf(parcel.readString());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(c.CREATOR.createFromParcel(parcel));
            }
            return new e(readString, valueOf, valueOf2, arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final e[] newArray(int i10) {
            return new e[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final File f56315d;

        /* renamed from: e  reason: collision with root package name */
        private final String f56316e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new c((File) parcel.readSerializable(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public c(File data, String mimeType) {
            Intrinsics.checkNotNullParameter(data, "data");
            Intrinsics.checkNotNullParameter(mimeType, "mimeType");
            this.f56315d = data;
            this.f56316e = mimeType;
        }

        public final File a() {
            return this.f56315d;
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
            if (Intrinsics.areEqual(this.f56315d, cVar.f56315d) && Intrinsics.areEqual(this.f56316e, cVar.f56316e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f56315d.hashCode() * 31) + this.f56316e.hashCode();
        }

        public String toString() {
            File file = this.f56315d;
            String str = this.f56316e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f56315d);
            dest.writeString(this.f56316e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f56317d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f56318e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f56319i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f56320o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f56321p;

        static {
            d[] a10 = a();
            f56320o = a10;
            f56321p = hs.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f56317d, f56318e, f56319i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f56320o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f56306d = idClass;
        this.f56307e = side;
        this.f56308i = captureMethod;
        this.f56309o = frames;
    }

    public final a a() {
        return this.f56308i;
    }

    public final String b() {
        return this.f56306d;
    }

    public final d c() {
        return this.f56307e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Intrinsics.areEqual(this.f56306d, eVar.f56306d) && this.f56307e == eVar.f56307e && this.f56308i == eVar.f56308i && Intrinsics.areEqual(this.f56309o, eVar.f56309o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f56306d.hashCode() * 31) + this.f56307e.hashCode()) * 31) + this.f56308i.hashCode()) * 31) + this.f56309o.hashCode();
    }

    public final List m2() {
        return this.f56309o;
    }

    public String toString() {
        String str = this.f56306d;
        d dVar = this.f56307e;
        a aVar = this.f56308i;
        List list = this.f56309o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f56306d);
        dest.writeString(this.f56307e.name());
        dest.writeString(this.f56308i.name());
        List<c> list = this.f56309o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
