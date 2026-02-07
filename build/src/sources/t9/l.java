package t9;

import com.facebook.common.references.CloseableReference;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final CloseableReference f50477a;

    /* renamed from: b  reason: collision with root package name */
    private final a f50478b;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f50479d = new a("SUCCESS", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f50480e = new a("NEAREST", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f50481i = new a("MISSING", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f50482o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f50483p;

        static {
            a[] a10 = a();
            f50482o = a10;
            f50483p = xr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f50479d, f50480e, f50481i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f50482o.clone();
        }
    }

    public l(CloseableReference closeableReference, a type) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f50477a = closeableReference;
        this.f50478b = type;
    }

    public final CloseableReference a() {
        return this.f50477a;
    }

    public final a b() {
        return this.f50478b;
    }
}
