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
    private final String f27115d;

    /* renamed from: e  reason: collision with root package name */
    private final d f27116e;

    /* renamed from: i  reason: collision with root package name */
    private final a f27117i;

    /* renamed from: o  reason: collision with root package name */
    private final List f27118o;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f27119d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f27120e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f27121i = new a("Upload", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f27122o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27123p;

        static {
            a[] a10 = a();
            f27122o = a10;
            f27123p = pr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f27119d, f27120e, f27121i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f27122o.clone();
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
        private final File f27124d;

        /* renamed from: e  reason: collision with root package name */
        private final String f27125e;

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
            this.f27124d = data;
            this.f27125e = mimeType;
        }

        public final File a() {
            return this.f27124d;
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
            if (Intrinsics.areEqual(this.f27124d, cVar.f27124d) && Intrinsics.areEqual(this.f27125e, cVar.f27125e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f27124d.hashCode() * 31) + this.f27125e.hashCode();
        }

        public String toString() {
            File file = this.f27124d;
            String str = this.f27125e;
            return "Frame(data=" + file + ", mimeType=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f27124d);
            dest.writeString(this.f27125e);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f27126d = new d("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f27127e = new d("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f27128i = new d("FrontAndBack", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ d[] f27129o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27130p;

        static {
            d[] a10 = a();
            f27129o = a10;
            f27130p = pr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f27126d, f27127e, f27128i};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f27129o.clone();
        }
    }

    public e(String idClass, d side, a captureMethod, List frames) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(frames, "frames");
        this.f27115d = idClass;
        this.f27116e = side;
        this.f27117i = captureMethod;
        this.f27118o = frames;
    }

    public final a a() {
        return this.f27117i;
    }

    public final String b() {
        return this.f27115d;
    }

    public final d c() {
        return this.f27116e;
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
        if (Intrinsics.areEqual(this.f27115d, eVar.f27115d) && this.f27116e == eVar.f27116e && this.f27117i == eVar.f27117i && Intrinsics.areEqual(this.f27118o, eVar.f27118o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f27115d.hashCode() * 31) + this.f27116e.hashCode()) * 31) + this.f27117i.hashCode()) * 31) + this.f27118o.hashCode();
    }

    public final List i2() {
        return this.f27118o;
    }

    public String toString() {
        String str = this.f27115d;
        d dVar = this.f27116e;
        a aVar = this.f27117i;
        List list = this.f27118o;
        return "GovernmentIdCapture(idClass=" + str + ", side=" + dVar + ", captureMethod=" + aVar + ", frames=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f27115d);
        dest.writeString(this.f27116e.name());
        dest.writeString(this.f27117i.name());
        List<c> list = this.f27118o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            cVar.writeToParcel(dest, i10);
        }
    }
}
