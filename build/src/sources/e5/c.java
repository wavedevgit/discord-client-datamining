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
        private final Context f22304a;

        /* renamed from: b  reason: collision with root package name */
        private double f22305b;

        /* renamed from: c  reason: collision with root package name */
        private int f22306c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f22307d = true;

        /* renamed from: e  reason: collision with root package name */
        private boolean f22308e = true;

        public a(Context context) {
            this.f22304a = context;
            this.f22305b = k.e(context);
        }

        public final c a() {
            i bVar;
            h aVar;
            int i10;
            if (this.f22308e) {
                bVar = new g();
            } else {
                bVar = new e5.b();
            }
            if (this.f22307d) {
                double d10 = this.f22305b;
                if (d10 > 0.0d) {
                    i10 = k.c(this.f22304a, d10);
                } else {
                    i10 = this.f22306c;
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
        private final Bitmap f22312a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f22313b;

        public C0302c(Bitmap bitmap, Map map) {
            this.f22312a = bitmap;
            this.f22313b = map;
        }

        public final Bitmap a() {
            return this.f22312a;
        }

        public final Map b() {
            return this.f22313b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0302c) {
                C0302c c0302c = (C0302c) obj;
                if (Intrinsics.areEqual(this.f22312a, c0302c.f22312a) && Intrinsics.areEqual(this.f22313b, c0302c.f22313b)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f22312a.hashCode() * 31) + this.f22313b.hashCode();
        }

        public String toString() {
            return "Value(bitmap=" + this.f22312a + ", extras=" + this.f22313b + ')';
        }
    }

    void a(int i10);

    C0302c b(b bVar);

    void c(b bVar, C0302c c0302c);

    void clear();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final String f22310d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f22311e;

        /* renamed from: i  reason: collision with root package name */
        private static final C0301b f22309i = new C0301b(null);
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
            this.f22310d = str;
            this.f22311e = map;
        }

        public static /* synthetic */ b b(b bVar, String str, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = bVar.f22310d;
            }
            if ((i10 & 2) != 0) {
                map = bVar.f22311e;
            }
            return bVar.a(str, map);
        }

        public final b a(String str, Map map) {
            return new b(str, map);
        }

        public final Map c() {
            return this.f22311e;
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
                if (Intrinsics.areEqual(this.f22310d, bVar.f22310d) && Intrinsics.areEqual(this.f22311e, bVar.f22311e)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f22310d.hashCode() * 31) + this.f22311e.hashCode();
        }

        public String toString() {
            return "Key(key=" + this.f22310d + ", extras=" + this.f22311e + ')';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f22310d);
            parcel.writeInt(this.f22311e.size());
            for (Map.Entry entry : this.f22311e.entrySet()) {
                parcel.writeString((String) entry.getKey());
                parcel.writeString((String) entry.getValue());
            }
        }

        public /* synthetic */ b(String str, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? o0.i() : map);
        }
    }
}
