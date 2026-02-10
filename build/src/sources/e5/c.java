package e5;

import android.content.Context;
import android.graphics.Bitmap;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.LinkedHashMap;
import java.util.Map;
import k5.k;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Context f22303a;

        /* renamed from: b  reason: collision with root package name */
        private double f22304b;

        /* renamed from: c  reason: collision with root package name */
        private int f22305c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f22306d = true;

        /* renamed from: e  reason: collision with root package name */
        private boolean f22307e = true;

        public a(Context context) {
            this.f22303a = context;
            this.f22304b = k.e(context);
        }

        public final c a() {
            i bVar;
            h aVar;
            int i10;
            if (this.f22307e) {
                bVar = new g();
            } else {
                bVar = new e5.b();
            }
            if (this.f22306d) {
                double d10 = this.f22304b;
                if (d10 > 0.0d) {
                    i10 = k.c(this.f22303a, d10);
                } else {
                    i10 = this.f22305c;
                }
                if (i10 > 0) {
                    aVar = new f(i10, bVar);
                } else {
                    aVar = new e5.a(bVar);
                }
            } else {
                aVar = new e5.a(bVar);
            }
            return new e(aVar, bVar);
        }
    }

    /* renamed from: e5.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0302c {

        /* renamed from: a  reason: collision with root package name */
        private final Bitmap f22311a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f22312b;

        public C0302c(Bitmap bitmap, Map map) {
            this.f22311a = bitmap;
            this.f22312b = map;
        }

        public final Bitmap a() {
            return this.f22311a;
        }

        public final Map b() {
            return this.f22312b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0302c) {
                C0302c c0302c = (C0302c) obj;
                if (Intrinsics.areEqual(this.f22311a, c0302c.f22311a) && Intrinsics.areEqual(this.f22312b, c0302c.f22312b)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f22311a.hashCode() * 31) + this.f22312b.hashCode();
        }

        public String toString() {
            return "Value(bitmap=" + this.f22311a + ", extras=" + this.f22312b + ')';
        }
    }

    void a(int i10);

    C0302c b(b bVar);

    void c(b bVar, C0302c c0302c);

    void clear();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final String f22309d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f22310e;

        /* renamed from: i  reason: collision with root package name */
        private static final C0301b f22308i = new C0301b(null);
        @Deprecated
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public b createFromParcel(Parcel parcel) {
                String readString = parcel.readString();
                Intrinsics.checkNotNull(readString);
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 < readInt; i10++) {
                    String readString2 = parcel.readString();
                    Intrinsics.checkNotNull(readString2);
                    String readString3 = parcel.readString();
                    Intrinsics.checkNotNull(readString3);
                    linkedHashMap.put(readString2, readString3);
                }
                return new b(readString, linkedHashMap);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* renamed from: e5.c$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        private static final class C0301b {
            public /* synthetic */ C0301b(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private C0301b() {
            }
        }

        public b(String str, Map map) {
            this.f22309d = str;
            this.f22310e = map;
        }

        public static /* synthetic */ b b(b bVar, String str, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bVar.f22309d;
            }
            if ((i10 & 2) != 0) {
                map = bVar.f22310e;
            }
            return bVar.a(str, map);
        }

        public final b a(String str, Map map) {
            return new b(str, map);
        }

        public final Map c() {
            return this.f22310e;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f22309d, bVar.f22309d) && Intrinsics.areEqual(this.f22310e, bVar.f22310e)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f22309d.hashCode() * 31) + this.f22310e.hashCode();
        }

        public String toString() {
            return "Key(key=" + this.f22309d + ", extras=" + this.f22310e + ')';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f22309d);
            parcel.writeInt(this.f22310e.size());
            for (Map.Entry entry : this.f22310e.entrySet()) {
                parcel.writeString((String) entry.getKey());
                parcel.writeString((String) entry.getValue());
            }
        }

        public /* synthetic */ b(String str, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? o0.i() : map);
        }
    }
}
