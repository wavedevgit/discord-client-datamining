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
        private final Context f21408a;

        /* renamed from: b  reason: collision with root package name */
        private double f21409b;

        /* renamed from: c  reason: collision with root package name */
        private int f21410c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f21411d = true;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21412e = true;

        public a(Context context) {
            this.f21408a = context;
            this.f21409b = k.e(context);
        }

        public final c a() {
            i bVar;
            h aVar;
            int i10;
            if (this.f21412e) {
                bVar = new g();
            } else {
                bVar = new e5.b();
            }
            if (this.f21411d) {
                double d10 = this.f21409b;
                if (d10 > 0.0d) {
                    i10 = k.c(this.f21408a, d10);
                } else {
                    i10 = this.f21410c;
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
    public static final class C0292c {

        /* renamed from: a  reason: collision with root package name */
        private final Bitmap f21416a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21417b;

        public C0292c(Bitmap bitmap, Map map) {
            this.f21416a = bitmap;
            this.f21417b = map;
        }

        public final Bitmap a() {
            return this.f21416a;
        }

        public final Map b() {
            return this.f21417b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0292c) {
                C0292c c0292c = (C0292c) obj;
                if (Intrinsics.areEqual(this.f21416a, c0292c.f21416a) && Intrinsics.areEqual(this.f21417b, c0292c.f21417b)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f21416a.hashCode() * 31) + this.f21417b.hashCode();
        }

        public String toString() {
            return "Value(bitmap=" + this.f21416a + ", extras=" + this.f21417b + ')';
        }
    }

    void a(int i10);

    C0292c b(b bVar);

    void c(b bVar, C0292c c0292c);

    void clear();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final String f21414d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f21415e;

        /* renamed from: i  reason: collision with root package name */
        private static final C0291b f21413i = new C0291b(null);
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
        private static final class C0291b {
            public /* synthetic */ C0291b(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private C0291b() {
            }
        }

        public b(String str, Map map) {
            this.f21414d = str;
            this.f21415e = map;
        }

        public static /* synthetic */ b b(b bVar, String str, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bVar.f21414d;
            }
            if ((i10 & 2) != 0) {
                map = bVar.f21415e;
            }
            return bVar.a(str, map);
        }

        public final b a(String str, Map map) {
            return new b(str, map);
        }

        public final Map c() {
            return this.f21415e;
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
                if (Intrinsics.areEqual(this.f21414d, bVar.f21414d) && Intrinsics.areEqual(this.f21415e, bVar.f21415e)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f21414d.hashCode() * 31) + this.f21415e.hashCode();
        }

        public String toString() {
            return "Key(key=" + this.f21414d + ", extras=" + this.f21415e + ')';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f21414d);
            parcel.writeInt(this.f21415e.size());
            for (Map.Entry entry : this.f21415e.entrySet()) {
                parcel.writeString((String) entry.getKey());
                parcel.writeString((String) entry.getValue());
            }
        }

        public /* synthetic */ b(String str, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? o0.i() : map);
        }
    }
}
