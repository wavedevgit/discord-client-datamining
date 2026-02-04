package t9;

import com.facebook.common.references.CloseableReference;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final CloseableReference f49848a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49849b;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f49850d = new a("SUCCESS", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f49851e = new a("NEAREST", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f49852i = new a("MISSING", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f49853o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49854p;

        static {
            a[] a10 = a();
            f49853o = a10;
            f49854p = sr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f49850d, f49851e, f49852i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f49853o.clone();
        }
    }

    public l(CloseableReference closeableReference, a type) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f49848a = closeableReference;
        this.f49849b = type;
    }

    public final CloseableReference a() {
        return this.f49848a;
    }

    public final a b() {
        return this.f49849b;
    }
}
