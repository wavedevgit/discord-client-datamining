package gq;

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
    private final String f27099d;

    /* renamed from: e  reason: collision with root package name */
    private final d f27100e;

    /* renamed from: i  reason: collision with root package name */
    private final a f27101i;

    /* renamed from: o  reason: collision with root package name */
    private final List f27102o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f27103d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f27104e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f27105i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f27106o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27107p;

        static {
            a[] a10 = a();
            f27106o = a10;
            f27107p = pr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f27103d, f27104e, f27105i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f27106o.clone();
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
        private final File f27108d;

        /* renamed from: e  reason: collision with root package name */
        private final String f27109e;

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
            this.f27108d = data;
            this.f27109e = mimeType;
        }

        public final File a() {
            return this.f27108d;
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
            if (Intrinsics.areEqual(this.f27108d, cVar.f27108d) && Intrinsics.areEqual(this.f27109e, cVar.f27109e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f27108d.hashCode() * 31) + this.f27109e.hashCode();
        }

        public String toString() {
            File file = this.f27108d;
            String str = this.f27109e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f27108d);
            dest.writeString(this.f27109e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f27110d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f27111e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f27112i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f27113o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27114p;

        static {
            d[] a10 = a();
            f27113o = a10;
            f27114p = pr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f27110d, f27111e, f27112i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f27113o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f27099d = idClass;
        this.f27100e = side;
        this.f27101i = captureMethod;
        this.f27102o = frames;
    }

    public final a a() {
        return this.f27101i;
    }

    public final String b() {
        return this.f27099d;
    }

    public final d c() {
        return this.f27100e;
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
        if (Intrinsics.areEqual(this.f27099d, eVar.f27099d) && this.f27100e == eVar.f27100e && this.f27101i == eVar.f27101i && Intrinsics.areEqual(this.f27102o, eVar.f27102o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f27099d.hashCode() * 31) + this.f27100e.hashCode()) * 31) + this.f27101i.hashCode()) * 31) + this.f27102o.hashCode();
    }

    public final List i2() {
        return this.f27102o;
    }

    public String toString() {
        String str = this.f27099d;
        d dVar = this.f27100e;
        a aVar = this.f27101i;
        List list = this.f27102o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f27099d);
        dest.writeString(this.f27100e.name());
        dest.writeString(this.f27101i.name());
        List<c> list = this.f27102o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
