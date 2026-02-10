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
    private final String f55737d;

    /* renamed from: e  reason: collision with root package name */
    private final d f55738e;

    /* renamed from: i  reason: collision with root package name */
    private final a f55739i;

    /* renamed from: o  reason: collision with root package name */
    private final List f55740o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f55741d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f55742e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f55743i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f55744o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f55745p;

        static {
            a[] a10 = a();
            f55744o = a10;
            f55745p = hs.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f55741d, f55742e, f55743i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f55744o.clone();
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
        private final File f55746d;

        /* renamed from: e  reason: collision with root package name */
        private final String f55747e;

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
            this.f55746d = data;
            this.f55747e = mimeType;
        }

        public final File a() {
            return this.f55746d;
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
            if (Intrinsics.areEqual(this.f55746d, cVar.f55746d) && Intrinsics.areEqual(this.f55747e, cVar.f55747e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f55746d.hashCode() * 31) + this.f55747e.hashCode();
        }

        public String toString() {
            File file = this.f55746d;
            String str = this.f55747e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f55746d);
            dest.writeString(this.f55747e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f55748d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f55749e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f55750i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f55751o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f55752p;

        static {
            d[] a10 = a();
            f55751o = a10;
            f55752p = hs.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f55748d, f55749e, f55750i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f55751o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f55737d = idClass;
        this.f55738e = side;
        this.f55739i = captureMethod;
        this.f55740o = frames;
    }

    public final a a() {
        return this.f55739i;
    }

    public final String b() {
        return this.f55737d;
    }

    public final d c() {
        return this.f55738e;
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
        if (Intrinsics.areEqual(this.f55737d, eVar.f55737d) && this.f55738e == eVar.f55738e && this.f55739i == eVar.f55739i && Intrinsics.areEqual(this.f55740o, eVar.f55740o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f55737d.hashCode() * 31) + this.f55738e.hashCode()) * 31) + this.f55739i.hashCode()) * 31) + this.f55740o.hashCode();
    }

    public final List m2() {
        return this.f55740o;
    }

    public String toString() {
        String str = this.f55737d;
        d dVar = this.f55738e;
        a aVar = this.f55739i;
        List list = this.f55740o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f55737d);
        dest.writeString(this.f55738e.name());
        dest.writeString(this.f55739i.name());
        List<c> list = this.f55740o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
