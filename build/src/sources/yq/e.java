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
    private final String f55738d;

    /* renamed from: e  reason: collision with root package name */
    private final d f55739e;

    /* renamed from: i  reason: collision with root package name */
    private final a f55740i;

    /* renamed from: o  reason: collision with root package name */
    private final List f55741o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f55742d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f55743e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f55744i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f55745o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f55746p;

        static {
            a[] a10 = a();
            f55745o = a10;
            f55746p = hs.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f55742d, f55743e, f55744i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f55745o.clone();
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
        private final File f55747d;

        /* renamed from: e  reason: collision with root package name */
        private final String f55748e;

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
            this.f55747d = data;
            this.f55748e = mimeType;
        }

        public final File a() {
            return this.f55747d;
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
            if (Intrinsics.areEqual(this.f55747d, cVar.f55747d) && Intrinsics.areEqual(this.f55748e, cVar.f55748e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f55747d.hashCode() * 31) + this.f55748e.hashCode();
        }

        public String toString() {
            File file = this.f55747d;
            String str = this.f55748e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f55747d);
            dest.writeString(this.f55748e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f55749d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f55750e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f55751i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f55752o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f55753p;

        static {
            d[] a10 = a();
            f55752o = a10;
            f55753p = hs.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f55749d, f55750e, f55751i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f55752o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f55738d = idClass;
        this.f55739e = side;
        this.f55740i = captureMethod;
        this.f55741o = frames;
    }

    public final a a() {
        return this.f55740i;
    }

    public final String b() {
        return this.f55738d;
    }

    public final d c() {
        return this.f55739e;
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
        if (Intrinsics.areEqual(this.f55738d, eVar.f55738d) && this.f55739e == eVar.f55739e && this.f55740i == eVar.f55740i && Intrinsics.areEqual(this.f55741o, eVar.f55741o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f55738d.hashCode() * 31) + this.f55739e.hashCode()) * 31) + this.f55740i.hashCode()) * 31) + this.f55741o.hashCode();
    }

    public final List m2() {
        return this.f55741o;
    }

    public String toString() {
        String str = this.f55738d;
        d dVar = this.f55739e;
        a aVar = this.f55740i;
        List list = this.f55741o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f55738d);
        dest.writeString(this.f55739e.name());
        dest.writeString(this.f55740i.name());
        List<c> list = this.f55741o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
