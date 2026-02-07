package oq;

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
    private final String f43393d;

    /* renamed from: e  reason: collision with root package name */
    private final d f43394e;

    /* renamed from: i  reason: collision with root package name */
    private final a f43395i;

    /* renamed from: o  reason: collision with root package name */
    private final List f43396o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f43397d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f43398e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f43399i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f43400o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f43401p;

        static {
            a[] a10 = a();
            f43400o = a10;
            f43401p = xr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f43397d, f43398e, f43399i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f43400o.clone();
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
        private final File f43402d;

        /* renamed from: e  reason: collision with root package name */
        private final String f43403e;

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
            this.f43402d = data;
            this.f43403e = mimeType;
        }

        public final File a() {
            return this.f43402d;
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
            if (Intrinsics.areEqual(this.f43402d, cVar.f43402d) && Intrinsics.areEqual(this.f43403e, cVar.f43403e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f43402d.hashCode() * 31) + this.f43403e.hashCode();
        }

        public String toString() {
            File file = this.f43402d;
            String str = this.f43403e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f43402d);
            dest.writeString(this.f43403e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f43404d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f43405e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f43406i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f43407o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f43408p;

        static {
            d[] a10 = a();
            f43407o = a10;
            f43408p = xr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f43404d, f43405e, f43406i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f43407o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f43393d = idClass;
        this.f43394e = side;
        this.f43395i = captureMethod;
        this.f43396o = frames;
    }

    public final a a() {
        return this.f43395i;
    }

    public final String b() {
        return this.f43393d;
    }

    public final d c() {
        return this.f43394e;
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
        if (Intrinsics.areEqual(this.f43393d, eVar.f43393d) && this.f43394e == eVar.f43394e && this.f43395i == eVar.f43395i && Intrinsics.areEqual(this.f43396o, eVar.f43396o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f43393d.hashCode() * 31) + this.f43394e.hashCode()) * 31) + this.f43395i.hashCode()) * 31) + this.f43396o.hashCode();
    }

    public final List i2() {
        return this.f43396o;
    }

    public String toString() {
        String str = this.f43393d;
        d dVar = this.f43394e;
        a aVar = this.f43395i;
        List list = this.f43396o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f43393d);
        dest.writeString(this.f43394e.name());
        dest.writeString(this.f43395i.name());
        List<c> list = this.f43396o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
