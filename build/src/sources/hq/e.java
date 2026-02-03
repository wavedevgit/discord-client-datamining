package hq;

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
    private final String f27862d;

    /* renamed from: e  reason: collision with root package name */
    private final d f27863e;

    /* renamed from: i  reason: collision with root package name */
    private final a f27864i;

    /* renamed from: o  reason: collision with root package name */
    private final List f27865o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f27866d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f27867e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f27868i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f27869o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27870p;

        static {
            a[] a10 = a();
            f27869o = a10;
            f27870p = qr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f27866d, f27867e, f27868i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f27869o.clone();
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
        private final File f27871d;

        /* renamed from: e  reason: collision with root package name */
        private final String f27872e;

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
            this.f27871d = data;
            this.f27872e = mimeType;
        }

        public final File a() {
            return this.f27871d;
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
            if (Intrinsics.areEqual(this.f27871d, cVar.f27871d) && Intrinsics.areEqual(this.f27872e, cVar.f27872e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f27871d.hashCode() * 31) + this.f27872e.hashCode();
        }

        public String toString() {
            File file = this.f27871d;
            String str = this.f27872e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f27871d);
            dest.writeString(this.f27872e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f27873d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f27874e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f27875i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f27876o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27877p;

        static {
            d[] a10 = a();
            f27876o = a10;
            f27877p = qr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f27873d, f27874e, f27875i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f27876o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f27862d = idClass;
        this.f27863e = side;
        this.f27864i = captureMethod;
        this.f27865o = frames;
    }

    public final a a() {
        return this.f27864i;
    }

    public final String b() {
        return this.f27862d;
    }

    public final d c() {
        return this.f27863e;
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
        if (Intrinsics.areEqual(this.f27862d, eVar.f27862d) && this.f27863e == eVar.f27863e && this.f27864i == eVar.f27864i && Intrinsics.areEqual(this.f27865o, eVar.f27865o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f27862d.hashCode() * 31) + this.f27863e.hashCode()) * 31) + this.f27864i.hashCode()) * 31) + this.f27865o.hashCode();
    }

    public final List i2() {
        return this.f27865o;
    }

    public String toString() {
        String str = this.f27862d;
        d dVar = this.f27863e;
        a aVar = this.f27864i;
        List list = this.f27865o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f27862d);
        dest.writeString(this.f27863e.name());
        dest.writeString(this.f27864i.name());
        List<c> list = this.f27865o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
