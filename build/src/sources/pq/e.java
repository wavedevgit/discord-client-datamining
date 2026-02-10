package pq;

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
    private final String f44451d;

    /* renamed from: e  reason: collision with root package name */
    private final d f44452e;

    /* renamed from: i  reason: collision with root package name */
    private final a f44453i;

    /* renamed from: o  reason: collision with root package name */
    private final List f44454o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f44455d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f44456e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f44457i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f44458o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f44459p;

        static {
            a[] a10 = a();
            f44458o = a10;
            f44459p = yr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f44455d, f44456e, f44457i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f44458o.clone();
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
        private final File f44460d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44461e;

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
            this.f44460d = data;
            this.f44461e = mimeType;
        }

        public final File a() {
            return this.f44460d;
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
            if (Intrinsics.areEqual(this.f44460d, cVar.f44460d) && Intrinsics.areEqual(this.f44461e, cVar.f44461e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44460d.hashCode() * 31) + this.f44461e.hashCode();
        }

        public String toString() {
            File file = this.f44460d;
            String str = this.f44461e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f44460d);
            dest.writeString(this.f44461e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f44462d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f44463e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f44464i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f44465o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f44466p;

        static {
            d[] a10 = a();
            f44465o = a10;
            f44466p = yr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f44462d, f44463e, f44464i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f44465o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f44451d = idClass;
        this.f44452e = side;
        this.f44453i = captureMethod;
        this.f44454o = frames;
    }

    public final a a() {
        return this.f44453i;
    }

    public final String b() {
        return this.f44451d;
    }

    public final d c() {
        return this.f44452e;
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
        if (Intrinsics.areEqual(this.f44451d, eVar.f44451d) && this.f44452e == eVar.f44452e && this.f44453i == eVar.f44453i && Intrinsics.areEqual(this.f44454o, eVar.f44454o)) {
            return true;
        }
        return false;
    }

    public final List h2() {
        return this.f44454o;
    }

    public int hashCode() {
        return (((((this.f44451d.hashCode() * 31) + this.f44452e.hashCode()) * 31) + this.f44453i.hashCode()) * 31) + this.f44454o.hashCode();
    }

    public String toString() {
        String str = this.f44451d;
        d dVar = this.f44452e;
        a aVar = this.f44453i;
        List list = this.f44454o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f44451d);
        dest.writeString(this.f44452e.name());
        dest.writeString(this.f44453i.name());
        List<c> list = this.f44454o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
