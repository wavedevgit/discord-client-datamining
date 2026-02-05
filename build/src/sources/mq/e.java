package mq;

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
    private final String f38864d;

    /* renamed from: e  reason: collision with root package name */
    private final d f38865e;

    /* renamed from: i  reason: collision with root package name */
    private final a f38866i;

    /* renamed from: o  reason: collision with root package name */
    private final List f38867o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f38868d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f38869e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f38870i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f38871o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f38872p;

        static {
            a[] a10 = a();
            f38871o = a10;
            f38872p = vr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f38868d, f38869e, f38870i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f38871o.clone();
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
        private final File f38873d;

        /* renamed from: e  reason: collision with root package name */
        private final String f38874e;

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
            this.f38873d = data;
            this.f38874e = mimeType;
        }

        public final File a() {
            return this.f38873d;
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
            if (Intrinsics.areEqual(this.f38873d, cVar.f38873d) && Intrinsics.areEqual(this.f38874e, cVar.f38874e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f38873d.hashCode() * 31) + this.f38874e.hashCode();
        }

        public String toString() {
            File file = this.f38873d;
            String str = this.f38874e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f38873d);
            dest.writeString(this.f38874e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f38875d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f38876e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f38877i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f38878o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f38879p;

        static {
            d[] a10 = a();
            f38878o = a10;
            f38879p = vr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f38875d, f38876e, f38877i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f38878o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f38864d = idClass;
        this.f38865e = side;
        this.f38866i = captureMethod;
        this.f38867o = frames;
    }

    public final a a() {
        return this.f38866i;
    }

    public final String b() {
        return this.f38864d;
    }

    public final d c() {
        return this.f38865e;
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
        if (Intrinsics.areEqual(this.f38864d, eVar.f38864d) && this.f38865e == eVar.f38865e && this.f38866i == eVar.f38866i && Intrinsics.areEqual(this.f38867o, eVar.f38867o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f38864d.hashCode() * 31) + this.f38865e.hashCode()) * 31) + this.f38866i.hashCode()) * 31) + this.f38867o.hashCode();
    }

    public final List i2() {
        return this.f38867o;
    }

    public String toString() {
        String str = this.f38864d;
        d dVar = this.f38865e;
        a aVar = this.f38866i;
        List list = this.f38867o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f38864d);
        dest.writeString(this.f38865e.name());
        dest.writeString(this.f38866i.name());
        List<c> list = this.f38867o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
